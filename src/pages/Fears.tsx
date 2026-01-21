import { Link } from 'react-router-dom'

const fears = [
  {
    title: '"Investing is gambling"',
    body: 'Long-term investing is about discipline, not luck. While short-term markets can be volatile, historical data shows that diversified portfolios tend to grow over decades.',
    icon: '🎲'
  },
  {
    title: '"I need a lot of money"',
    body: 'Small, consistent amounts build powerful habits. Many platforms let you start with as little as £25 per month. The key is starting, not the amount.',
    icon: '💰'
  },
  {
    title: '"I am too late"',
    body: 'The second-best time to start is today. While starting earlier is better, time in the market beats timing the market. Every year counts.',
    icon: '⏰'
  },
  {
    title: '"I will lose everything"',
    body: 'Diversification reduces risk. Education reduces fear. By spreading investments across different asset classes, you reduce the chance of losing everything.',
    icon: '😰'
  },
  {
    title: '"It\'s too complicated"',
    body: 'You don\'t need to understand everything at once. Start with the basics, learn gradually, and use simple strategies like index funds.',
    icon: '📚'
  },
  {
    title: '"I need to watch it daily"',
    body: 'Long-term investing means checking occasionally, not daily. Set up automatic contributions and review quarterly or annually.',
    icon: '👀'
  },
  {
    title: '"Markets always crash"',
    body: 'While markets do have downturns, they have historically recovered and grown over the long term. Time in the market helps smooth out volatility.',
    icon: '📉'
  },
  {
    title: '"Only experts can do it"',
    body: 'With index funds and simple strategies, you don\'t need to be an expert. Many successful investors use passive, low-cost approaches.',
    icon: '🎓'
  }
]

export default function Fears() {
  return (
    <main id="main" className="px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Common Fears & Myths</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Many people avoid investing because of common fears and misconceptions. Let's address them directly with facts and perspective.
          </p>
        </div>

        <section className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fears.map((fear) => (
              <div key={fear.title} className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-slate-100">
                <div className="text-3xl mb-3" aria-hidden="true">{fear.icon}</div>
                <h3 className="font-semibold mb-2">{fear.title}</h3>
                <p className="text-sm text-slate-600">{fear.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">The Reality of Risk</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-3">Not investing is risky too</h3>
              <p className="text-slate-700 text-sm mb-3">
                Keeping all your money in cash means it loses purchasing power to inflation. Over 20 years, inflation can cut your purchasing power in half.
              </p>
              <p className="text-slate-600 text-xs">
                Investing with diversification helps protect against this risk while giving your money a chance to grow.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-3">Risk can be managed</h3>
              <p className="text-slate-700 text-sm mb-3">
                You don't have to take extreme risks. Start with lower-risk options like bonds or diversified funds, then gradually learn about other options.
              </p>
              <p className="text-slate-600 text-xs">
                Education and diversification are your best tools for managing risk.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl section-title">How to Overcome These Fears</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: '1',
                title: 'Start small',
                body: 'Begin with amounts you\'re comfortable with. You can always increase contributions as you become more confident.'
              },
              {
                step: '2',
                title: 'Learn gradually',
                body: 'You don\'t need to know everything at once. Start with the basics and build your knowledge over time.'
              },
              {
                step: '3',
                title: 'Use simple strategies',
                body: 'Index funds and diversified portfolios don\'t require daily attention or expert knowledge.'
              }
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="text-3xl font-bold text-blue-600 mb-3">{item.step}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-700 mb-6">
            Understanding these fears is the first step. Now learn the basics and start your investing journey with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/basics"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Learn the Basics
            </Link>
            <Link
              to="/start"
              className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Getting Started Guide
            </Link>
            <Link
              to="/learning"
              className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Browse All Guides
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
