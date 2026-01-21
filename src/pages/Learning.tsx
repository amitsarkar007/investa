import { Link } from 'react-router-dom'
import { assetClasses } from '../data/assetClasses'

const guideCategories = [
  {
    title: 'Getting Started',
    description: 'Essential guides for complete beginners. Start here if you are brand new to investing.',
    guides: [
      { title: 'What is Investing?', link: '/start', icon: '📖', description: 'A gentle introduction to investing basics' },
      { title: 'Why Investing Matters', link: '/why-invest', icon: '💡', description: 'Understanding the importance of investing' },
      { title: 'Basic Money Concepts', link: '/basics', icon: '💰', description: 'Fundamental concepts explained simply' },
      { title: 'Common Fears & Myths', link: '/fears', icon: '😰', description: 'Addressing common concerns and misconceptions' },
      { title: 'Financial Definitions', link: '/definitions', icon: '📚', description: 'Plain-language explanations of financial terms' }
    ]
  },
  {
    title: 'Asset Class Guides',
    description: 'Comprehensive, in-depth guides on each investment type available in the UK. Each guide covers what it is, how it works, risks, benefits, and where to invest.',
    guides: assetClasses.map(asset => ({
      title: asset.name,
      link: `/${asset.id}`,
      icon: '📊',
      description: asset.tagline
    }))
  },
  {
    title: 'Tools & Calculators',
    description: 'Interactive tools and visualizations to help you plan, understand projections, and see how different parameters affect your investments.',
    guides: [
      { title: 'Compound Growth Calculator', link: '/tools', icon: '📈', description: 'See how your investments grow over time with interactive graphs' },
      { title: 'Inflation Impact Calculator', link: '/tools', icon: '📉', description: 'Understand how inflation affects purchasing power with visual projections' },
      { title: 'Risk vs Return Comparison', link: '/risk-return', icon: '⚖️', description: 'Compare risk and return profiles across asset classes' },
      { title: 'Historical Returns', link: '/historical', icon: '📊', description: 'View historical performance data across different asset classes' }
    ]
  },
  {
    title: 'Advanced Topics',
    description: 'Deeper dives into specific investment strategies, tax considerations, and portfolio management.',
    guides: [
      { title: 'Portfolio Diversification', link: '/learning', icon: '🎯', description: 'Learn how to build a balanced, diversified portfolio' },
      { title: 'Passive vs Active Investing', link: '/basics', icon: '🔄', description: 'Understand the difference and which approach suits you' },
      { title: 'Tax-Efficient Investing', link: '/isa', icon: '💼', description: 'Learn about ISAs and other tax-advantaged accounts' },
      { title: 'Retirement Planning', link: '/pension', icon: '🏦', description: 'Guide to pension funds and long-term retirement planning' }
    ]
  }
]

export default function Learning() {
  return (
    <main id="main" className="px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Free Investment Guides</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Everything you need to understand UK investing—all free, all right here. No courses, no programs, just clear guides and tools.
          </p>
        </div>

        {guideCategories.map((category) => (
          <section key={category.title} className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-2">{category.title}</h2>
              <p className="text-slate-600">{category.description}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.guides.map((guide) => (
                <Link
                  key={guide.title}
                  to={guide.link}
                  className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-slate-100 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl" aria-hidden="true" role="img">{guide.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-600 transition-colors">
                        {guide.title}
                      </h3>
                      {guide.description && (
                        <p className="text-sm text-slate-600 mb-2">{guide.description}</p>
                      )}
                      <span className="text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        Read guide →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100">
          <h2 className="text-2xl font-semibold mb-4">All Asset Classes</h2>
          <p className="text-slate-700 mb-6">
            Explore comprehensive guides on every major investment type available in the UK.
          </p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {assetClasses.map((asset) => (
              <Link
                key={asset.id}
                to={`/${asset.id}`}
                className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium hover:underline"
              >
                <span aria-hidden="true">→</span>
                {asset.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
            <h2 className="text-2xl font-semibold mb-4">How to Use These Guides</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">1.</span>
                <span><strong>Start anywhere:</strong> Jump to any guide that interests you. No need to follow a specific order.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">2.</span>
                <span><strong>Use the tools:</strong> Try the calculators with interactive graphs to see how investing works with your own numbers.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">3.</span>
                <span><strong>Take your time:</strong> Read at your own pace. Bookmark pages to return later.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">4.</span>
                <span><strong>Explore thoroughly:</strong> Each asset class guide includes detailed sections on how it works, risks, benefits, and where to invest.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">5.</span>
                <span><strong>Remember:</strong> This is educational information only, not financial advice. Always do your own research.</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg p-8 border-2 border-blue-100">
            <h2 className="text-2xl font-semibold mb-4">What Makes Our Guides Different</h2>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span><strong>Comprehensive coverage:</strong> Each asset class guide includes detailed explanations, risk profiles, beginner steps, and platform recommendations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span><strong>Visual tools:</strong> Interactive calculators with graphs show projections based on your specific parameters.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span><strong>Plain language:</strong> No jargon, no assumptions. We explain everything as if you're brand new to investing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 font-bold mt-1">✓</span>
                <span><strong>UK-focused:</strong> All guides are tailored to UK investors, covering UK platforms, tax considerations, and regulations.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
