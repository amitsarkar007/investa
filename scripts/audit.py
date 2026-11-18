#!/usr/bin/env python3
"""Investa link/route audit: crawl prerendered dist HTML, verify every internal
href resolves to a real page, every same-page #anchor exists, and sitemap
matches routes."""
import re, sys, os
from pathlib import Path
from urllib.parse import urlparse

DIST = Path(sys.argv[1] if len(sys.argv) > 1 else 'dist')

html_files = sorted(DIST.rglob('*.html'))
# routes = dirs with index.html (plus root)
routes = set()
for f in html_files:
    rel = f.relative_to(DIST)
    if rel.name == 'index.html':
        r = '/' + str(rel.parent).strip('.').replace(os.sep, '/')
        r = r if r.startswith('/') else '/' + r
        r = re.sub(r'/+$', '', r) or '/'
        routes.add(r)

href_re = re.compile(r'href="([^"]+)"')
id_re = re.compile(r'id="([^"]+)"')

missing_pages = {}   # target -> [sources]
dead_anchors = {}    # (page, anchor) -> count
external = set()
assets_missing = {}

def route_of(f):
    rel = f.relative_to(DIST)
    if rel.name == 'index.html':
        r = '/' + str(rel.parent).strip('.').replace(os.sep, '/')
        return re.sub(r'/+$', '', r) or '/'
    return str(rel)

for f in html_files:
    src_page = route_of(f)
    text = f.read_text(encoding='utf-8', errors='replace')
    ids = set(id_re.findall(text)) | {'main'}
    for href in href_re.findall(text):
        if href.startswith(('http://', 'https://', 'mailto:', 'tel:')):
            external.add(href.split('#')[0])
            continue
        if href.startswith('#'):
            a = href[1:]
            if a and a not in ids:
                dead_anchors.setdefault((src_page, a), 0)
                dead_anchors[(src_page, a)] += 1
            continue
        if not href.startswith('/'):
            continue
        path, _, frag = href.partition('#')
        path = path.split('?')[0]
        path = re.sub(r'/+$', '', path) or '/'
        # static asset?
        if re.search(r'\.(css|js|svg|png|jpg|ico|txt|xml|webmanifest)$', path):
            if not (DIST / path.lstrip('/')).exists():
                assets_missing.setdefault(path, []).append(src_page)
            continue
        if path not in routes:
            missing_pages.setdefault(path, []).append(src_page)
        elif frag:
            target_file = DIST / ('index.html' if path == '/' else f'{path.lstrip("/")}/index.html')
            tids = set(id_re.findall(target_file.read_text(encoding='utf-8', errors='replace'))) | {'main'}
            if frag not in tids:
                dead_anchors.setdefault((path, frag), 0)
                dead_anchors[(path, frag)] += 1

# sitemap vs routes
sitemap = DIST / 'sitemap.xml'
sm_urls = set()
if sitemap.exists():
    sm_urls = set(re.findall(r'<loc>https://[^<]+?(/[^<]*)?</loc>', sitemap.read_text()))
    sm_routes = {re.sub(r'/+$', '', u) or '/' for u in sm_urls}
else:
    sm_routes = set()
in_sm_not_routes = sm_routes - routes
in_routes_not_sm = routes - sm_routes - {'/404'}  # spa fallback not expected in sitemap

problems = sum(len(v) for v in missing_pages.values()) + len(dead_anchors) + len(assets_missing) + len(in_sm_not_routes) + len(in_routes_not_sm)
print(f'pages_crawled={len(html_files)} routes={len(routes)} sitemap_urls={len(sm_routes)}')
if missing_pages:
    print('MISSING PAGES:')
    for tgt, srcs in sorted(missing_pages.items()):
        print(f'  {tgt}  <- linked from {sorted(set(srcs))[:6]}')
if dead_anchors:
    print('DEAD ANCHORS:')
    for (pg, a), n in sorted(dead_anchors.items()):
        print(f'  {pg}#{a} ({n}x)')
if assets_missing:
    print('MISSING ASSETS:')
    for a, srcs in sorted(assets_missing.items()):
        print(f'  {a} <- {sorted(set(srcs))[:4]}')
if in_sm_not_routes:
    print('IN SITEMAP BUT NO PAGE:', sorted(in_sm_not_routes))
if in_routes_not_sm:
    print('ROUTE NOT IN SITEMAP:', sorted(in_routes_not_sm))
print(f'AUDIT {"CLEAN" if problems == 0 else "FAILED: " + str(problems) + " problems"}')
sys.exit(0 if problems == 0 else 1)
