import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const dist = join(__dirname, '..', 'dist')
const SITE = 'https://investa-amit.netlify.app'

const { getRoutes, render } = await import('../dist-ssr/entry-server.js')

const template = readFileSync(join(dist, 'index.html'), 'utf8')
const routes = getRoutes()
const now = new Date().toISOString().slice(0, 10)

const escapeHtml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

for (const route of routes) {
  let html
  try {
    html = render(route.path)
  } catch (err) {
    console.error(`SSR failed for ${route.path}:`, err.message)
    html = ''
  }

  let page = template
  page = page.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(route.title)}</title>`)
  page = page.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  )
  page = page.replace(
    '</head>',
    `  <link rel="canonical" href="${SITE}${route.path}" />\n  </head>`
  )
  page = page.replace('<div id="app"></div>', `<div id="app">${html}</div>`)

  const outDir = route.path === '/' ? dist : join(dist, route.path.slice(1))
  mkdirSync(outDir, { recursive: true })
  writeFileSync(join(outDir, 'index.html'), page)
  console.log(`prerendered ${route.path}`)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${now}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)
console.log(`sitemap.xml written with ${routes.length} URLs`)
