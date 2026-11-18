import { Link, useParams } from 'react-router-dom'
import { assetClassMap, assetClasses } from '../data/assetClasses'
import Icon from '../components/Icon'
import Diagram from '../components/Diagram'

type AssetClassPageProps = {
  assetId?: string
}

// Links to platforms are plain outbound links. Investa does not currently earn from them;
// any future affiliate relationships will be clearly disclosed and use platform-approved links only.
const platformUrl = (originalUrl: string): string => originalUrl

// Risk level mapping for visualization
const riskLevels: Record<string, number> = {
  bonds: 3,
  stocks: 7,
  funds: 5,
  etf: 5,
  realestate: 5,
  commodities: 8,
  crypto: 10,
  p2plending: 6,
  collectibles: 7,
  pension: 4,
  isa: 3
}

// Expected return mapping (simplified)
const expectedReturns: Record<string, number> = {
  bonds: 4,
  stocks: 8,
  funds: 6,
  etf: 6,
  realestate: 6,
  commodities: 7,
  crypto: 9,
  p2plending: 5,
  collectibles: 5,
  pension: 6,
  isa: 4
}

const assetDiagrams: Record<string, string> = {
  bonds: 'asset-bonds',
  stocks: 'asset-stocks',
  funds: 'asset-basket',
  etf: 'asset-basket',
  realestate: 'asset-property',
  commodities: 'asset-commodities',
  crypto: 'asset-crypto',
  p2plending: 'asset-p2p',
  collectibles: 'asset-collectibles',
  pension: 'asset-pension',
  isa: 'asset-isa',
}

export default function AssetClassPage({ assetId }: AssetClassPageProps) {
  const params = useParams()
  const id = assetId ?? params.id ?? ''
  const asset = assetClassMap[id]

  if (!asset) {
    return (
      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 text-center">
          <h1 className="text-3xl font-extrabold mb-4">We could not find that asset class.</h1>
          <p className="text-slate-600 mb-6">Try one of the popular topics below.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {assetClasses.slice(0, 5).map((item) => (
              <Link key={item.id} to={`/${item.id}`} className="rounded-full border border-slate-300 px-4 py-2 text-sm hover:bg-blue-50 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </main>
    )
  }

  const riskLevel = riskLevels[id] || 5
  const expectedReturn = expectedReturns[id] || 5

  // Comparison with the other major asset classes. If this asset is one of the
  // benchmarks, mark that row instead of adding a duplicate.
  type CmpRow = { name: string; risk: number; return: number; highlight?: boolean }
  const benchmarks: CmpRow[] = [
    { name: 'Cash', risk: 1, return: 2 },
    { name: 'Bonds', risk: 3, return: 4 },
    { name: 'Stocks', risk: 7, return: 8 },
    { name: 'Real Estate', risk: 5, return: 6 },
    { name: 'Commodities', risk: 8, return: 7 }
  ]
  const isBenchmark = benchmarks.some((b) => b.name === asset.name)
  const comparisonData = isBenchmark
    ? benchmarks.map((b) =>
        b.name === asset.name ? { ...b, risk: riskLevel, return: expectedReturn, highlight: true } : b
      )
    : [...benchmarks.slice(0, 3), { name: asset.name, risk: riskLevel, return: expectedReturn, highlight: true }, ...benchmarks.slice(3)]

  // Pie chart data for portfolio allocation example
  const portfolioExample = [
    { name: asset.name, value: 30 },
    { name: 'Stocks', value: 40 },
    { name: 'Bonds', value: 20 },
    { name: 'Cash', value: 10 }
  ].filter((item, index) => index === 0 || item.name !== asset.name)

  return (
    <main className="space-y-14 pb-20">
      <section className="pt-12 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="uppercase tracking-widest text-sm text-blue-600 font-semibold">Asset class</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight" style={{ textWrap: 'balance' }}>{asset.name}</h1>
            <p className="text-lg text-slate-700">{asset.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <Link className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors" to="/start">
                Start learning
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-5 py-2 font-semibold text-blue-700 hover:bg-blue-50 transition-colors" to="/learning">
                Browse Guides
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 space-y-4 border border-slate-100">
            <h2 className="text-xl font-semibold">At a glance</h2>
            <p className="text-sm text-slate-600">{asset.overview}</p>
            <div className="grid gap-3 text-sm">
              {asset.goodFor.map((item) => (
                <div key={item} className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3 border border-blue-100">
                  <span className="text-blue-600 mr-2">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
            <h2 className="text-2xl font-semibold mb-6 text-center">Risk vs Return Profile</h2>
            <div className="space-y-4" role="img" aria-label="Risk versus return comparison bar chart">
              {comparisonData.map((item) => (
                <div key={item.name} className={`grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] items-center gap-3 ${item.highlight ? 'font-semibold' : ''}`}>
                  <div className="text-sm text-slate-700 text-right">
                    {item.name}
                    {item.highlight && <span className="ml-1 text-xs text-emerald-700">(this)</span>}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="h-3 rounded-r bg-red-400" style={{ width: `${item.risk * 10}%` }} />
                      <span className="text-xs text-slate-500">risk level {item.risk}/10</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 rounded-r bg-emerald-500" style={{ width: `${item.return * 10}%` }} />
                      <span className="text-xs text-slate-500">typical return {item.return}/10</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center gap-6 pt-2 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded bg-red-400" /> Risk level</span>
                <span className="inline-flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded bg-emerald-500" /> Expected return</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              * Risk and return are approximate and vary based on market conditions. Past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-3 border border-slate-100">
            <h2 className="text-2xl font-semibold">Why it matters</h2>
            <p className="text-slate-600 leading-relaxed">{asset.whyItMatters}</p>
          </div>
          <div className="bg-white rounded-3xl shadow-lg p-8 space-y-3 border border-slate-100">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <p className="text-slate-600 leading-relaxed">{asset.howItWorks}</p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
            <h2 className="text-2xl font-semibold mb-4 text-center">The big picture</h2>
            <Diagram name={assetDiagrams[asset.id] ?? 'asset-stocks'} className="max-w-3xl mx-auto" />
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border border-blue-100">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Icon name="lightbulb" className="h-6 w-6 text-emerald-600" />
              Key ideas
            </h3>
            <ul className="text-sm text-slate-700 space-y-2">
              {asset.keyIdeas.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-red-100">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Icon name="warning" className="h-6 w-6 text-emerald-600" />
              Common risks
            </h3>
            <ul className="text-sm text-slate-700 space-y-2">
              {asset.risks.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg border border-green-100">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Icon name="steps" className="h-6 w-6 text-emerald-600" />
              Beginner steps
            </h3>
            <ol className="text-sm text-slate-700 space-y-2">
              {asset.beginnerSteps.map((item, index) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">{index + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {asset.sections && (
        <section className="px-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl font-semibold text-center">Detailed Guide</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {asset.sections.map((section) => (
                <div key={section.title} className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-slate-100">
                  <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{section.body}</p>
                  {section.bullets && (
                    <ul className="text-sm text-slate-600 mt-3 space-y-1">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(asset.platforms || asset.categories) && (
        <section className="px-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4 text-sm text-yellow-900">
              <strong>Disclosure:</strong> These are plain links to well-known UK platforms. Investa does not currently earn anything from them. If that ever changes, paying links will be clearly marked and our education will stay independent.
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {asset.platforms && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Icon name="bank" className="h-6 w-6 text-emerald-600" />
                    Where to invest
                  </h3>
                  <ul className="space-y-3">
                    {asset.platforms.map((platform) => {
                      const url = platformUrl(platform.url)
                      return (
                        <li key={platform.url}>
                          <a 
                            href={url} 
                            target="_blank" 
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium hover:underline transition-colors"
                          >
                            {platform.name}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                          {platform.frn && (
                            <span className="block text-xs text-slate-500 mt-0.5">
                              FCA-authorised, Firm Reference Number (FRN) {platform.frn} - check at register.fca.org.uk
                            </span>
                          )}
                          {platform.note && <span className="block text-xs text-amber-700 mt-0.5">{platform.note}</span>}
                        </li>
                      )
                    })}
                  </ul>
                  <p className="text-xs text-slate-500 mt-4">
                    FRNs verified against the FCA register on 18 November 2026. Always check the firm yourself at register.fca.org.uk before sending money.
                  </p>
                </div>
              )}
              {asset.categories && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Icon name="chart-bar" className="h-6 w-6 text-emerald-600" />
                    Common categories
                  </h3>
                  <div className="space-y-3">
                    {asset.categories.map((category) => (
                      <div key={category.name} className="rounded-xl border border-slate-200 p-3 hover:border-blue-300 transition-colors">
                        <div className="font-semibold text-slate-800 mb-1">{category.name}</div>
                        <div className="text-sm text-slate-600">{category.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
            <h3 className="text-2xl font-semibold mb-6 text-center">Example Portfolio Allocation</h3>
            <p className="text-sm text-slate-600 text-center mb-6">
              This is a simplified example showing how {asset.name} might fit into a diversified portfolio.
            </p>
            <div role="img" aria-label="Example portfolio allocation">
              <div className="flex h-8 w-full overflow-hidden rounded-full">
                {portfolioExample.map((item, index) => (
                  <div
                    key={item.name}
                    style={{ width: `${item.value}%`, backgroundColor: ['#0f2a43', '#10b981', '#3b82f6', '#f59e0b'][index % 4] }}
                    title={`${item.name} ${item.value}%`}
                  />
                ))}
              </div>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {portfolioExample.map((item, index) => (
                  <li key={item.name} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="inline-block h-3.5 w-3.5 rounded" style={{ backgroundColor: ['#0f2a43', '#10b981', '#3b82f6', '#f59e0b'][index % 4] }} />
                    <span className="font-medium">{item.name}</span>
                    <span className="text-slate-500">{item.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs text-slate-500 mt-4 text-center">
              * This is an example only. Your allocation should match your risk tolerance and goals.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Icon name="check" className="h-6 w-6 text-emerald-600" />
              Good for
            </h3>
            <ul className="space-y-3 text-sm text-slate-200">
              {asset.goodFor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Icon name="eye" className="h-6 w-6 text-emerald-600" />
              Watch outs
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              {asset.watchOuts.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">⚠</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-8 md:p-12 grid gap-6 md:grid-cols-2 items-center shadow-xl">
          <div>
            <h2 className="text-3xl font-semibold">Ready for the next topic?</h2>
            <p className="text-blue-100 mt-3">
              Explore more guides on other asset classes or return to our main guides page.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {assetClasses.filter((item) => item.id !== asset.id).slice(0, 4).map((item) => (
              <Link 
                key={item.id} 
                to={`/${item.id}`} 
                className="rounded-full bg-white text-blue-700 px-4 py-2 text-sm font-semibold hover:bg-blue-50 transition-colors shadow-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
