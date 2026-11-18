import { Link } from 'react-router-dom'
import type { ContentPageData } from '../data/contentPages'
import Diagram from '../components/Diagram'

export default function ContentPage({ page }: { page: ContentPageData }) {
  return (
    <main id="main" className="px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <nav className="text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-emerald-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">{page.title}</span>
        </nav>

        <header className="space-y-3 mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0f2a43]">{page.title}</h1>
          <p className="text-xl text-slate-600">{page.tagline}</p>
          <p className="text-xs text-slate-400">Facts last checked against official sources on {page.lastChecked}.</p>
        </header>

        {page.warning && (
          <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 text-sm text-amber-900 mb-10">
            <strong>Please note:</strong> {page.warning}
          </div>
        )}

        <article className="space-y-10">
          {page.sections.map((section) => (
            <section key={section.title} className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-[#0f2a43]">{section.title}</h2>
              {section.diagram && <Diagram name={section.diagram} />}
              {section.body && <p className="text-slate-700 leading-relaxed">{section.body}</p>}
              {section.bullets && (
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  {section.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-[#0f2a43] text-white">
                      <tr>
                        {section.table.head.map((h) => (
                          <th key={h} className="text-left px-4 py-3 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-4 py-3 text-slate-700 border-t border-slate-100">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </article>

        <section className="mt-10 bg-emerald-50 border border-emerald-100 rounded-3xl p-8">
          <h2 className="text-xl font-semibold text-emerald-900 mb-3">Sources</h2>
          <ul className="space-y-2 text-sm">
            {page.sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noreferrer noopener" className="text-emerald-800 hover:underline font-medium">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-lg font-semibold text-[#0f2a43] mb-3">Keep reading</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.related.map((r) => (
              <Link key={r.to} to={r.to} className="block bg-white border border-slate-200 rounded-2xl px-5 py-4 font-medium text-slate-700 hover:border-emerald-400 hover:text-emerald-800 transition-colors">
                {r.label} →
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-10 text-xs text-slate-500 border-t border-slate-200 pt-4">
          Investa provides education only - not financial, tax or investment advice. We are not regulated by the FCA. Capital is at risk when you invest.
        </div>
      </div>
    </main>
  )
}
