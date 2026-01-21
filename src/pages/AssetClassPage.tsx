import { Link, useParams } from 'react-router-dom'
import { assetClassMap, assetClasses } from '../data/assetClasses'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

type AssetClassPageProps = {
  assetId?: string
}

// Helper function to generate affiliate links (placeholder - replace with actual affiliate program links)
const generateAffiliateLink = (_platformName: string, originalUrl: string): string => {
  // In a real implementation, you would use actual affiliate link generators
  // For now, we'll add UTM parameters and note that affiliate links should be added
  const email = 'its.amitsarkar@gmail.com'
  // This is a placeholder - actual affiliate links would come from affiliate networks
  return `${originalUrl}?ref=investa&email=${encodeURIComponent(email)}`
}

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

  // Comparison data with other asset classes
  const comparisonData = [
    { name: 'Cash', risk: 1, return: 2 },
    { name: 'Bonds', risk: 3, return: 4 },
    { name: 'Stocks', risk: 7, return: 8 },
    { name: asset.name, risk: riskLevel, return: expectedReturn, highlight: true },
    { name: 'Real Estate', risk: 5, return: 6 },
    { name: 'Commodities', risk: 8, return: 7 }
  ].filter(item => item.name !== 'Bonds' || id === 'bonds')
    .filter(item => item.name !== 'Stocks' || id === 'stocks')
    .filter(item => item.name !== 'Real Estate' || id === 'realestate')
    .filter(item => item.name !== 'Commodities' || id === 'commodities')

  // Pie chart data for portfolio allocation example
  const portfolioExample = [
    { name: asset.name, value: 30 },
    { name: 'Stocks', value: 40 },
    { name: 'Bonds', value: 20 },
    { name: 'Cash', value: 10 }
  ]

  const COLORS = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b']

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
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={comparisonData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" domain={[0, 10]} label={{ value: 'Level (1-10)', position: 'insideBottom', offset: -5 }} />
                  <YAxis dataKey="name" type="category" width={120} />
                  <Tooltip />
                  <Legend />
                  <Bar 
                    dataKey="risk" 
                    fill="#ef4444" 
                    name="Risk Level" 
                    radius={[0, 4, 4, 0]}
                  />
                  <Bar 
                    dataKey="return" 
                    fill="#10b981" 
                    name="Expected Return %" 
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
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
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border border-blue-100">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="text-2xl">💡</span>
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
              <span className="text-2xl">⚠️</span>
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
              <span className="text-2xl">🚀</span>
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
              <strong>Affiliate Disclosure:</strong> Some links below may be affiliate links. If you sign up through these links, we may earn a commission at no extra cost to you. This helps support our free educational content.
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {asset.platforms && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="text-2xl">🏦</span>
                    Where to invest
                  </h3>
                  <ul className="space-y-3">
                    {asset.platforms.map((platform) => {
                      const affiliateUrl = generateAffiliateLink(platform.name, platform.url)
                      return (
                        <li key={platform.url}>
                          <a 
                            href={affiliateUrl} 
                            target="_blank" 
                            rel="noreferrer noopener"
                            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium hover:underline transition-colors"
                          >
                            {platform.name}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                  <p className="text-xs text-slate-500 mt-4">
                    Always compare fees, features, and read reviews before choosing a platform.
                  </p>
                </div>
              )}
              {asset.categories && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <span className="text-2xl">📊</span>
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
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioExample}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${percent ? (percent * 100).toFixed(0) : 0}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {portfolioExample.map((_entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
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
              <span className="text-2xl">✅</span>
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
              <span className="text-2xl">👀</span>
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
