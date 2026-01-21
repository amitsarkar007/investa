import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useMemo, useState } from 'react'

export default function WhyInvest() {
  const [inflationAmount, setInflationAmount] = useState(10000)
  const [inflationRate, setInflationRate] = useState(3)
  const [inflationYears, setInflationYears] = useState(10)

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(value)

  const inflationResult = useMemo(() => {
    return inflationAmount * Math.pow(1 + inflationRate / 100, inflationYears)
  }, [inflationAmount, inflationRate, inflationYears])

  const inflationDataPoints = useMemo(() => {
    const points = []
    for (let i = 0; i <= inflationYears; i += 1) {
      const value = inflationAmount * Math.pow(1 + inflationRate / 100, i)
      points.push({
        year: i,
        value: Math.round(value * 100) / 100,
        original: inflationAmount,
        loss: Math.round((value - inflationAmount) * 100) / 100
      })
    }
    return points
  }, [inflationAmount, inflationRate, inflationYears])

  return (
    <main id="main" className="px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Why Investing Matters</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Saving is important, but inflation quietly reduces what your money can buy. Investing gives your money a chance to grow faster than inflation over the long term.
          </p>
        </div>

        <section className="space-y-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl section-title">The Problem with Cash</h2>
              <p className="text-lg text-slate-600">
                While keeping money in a savings account feels safe, inflation means your money loses purchasing power over time. Prices rise, but cash stays the same.
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold" aria-hidden="true">•</span>
                  <span><strong>Inflation:</strong> Prices rise while cash stays still.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold" aria-hidden="true">•</span>
                  <span><strong>Time matters:</strong> The earlier you start, the easier it is.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold" aria-hidden="true">•</span>
                  <span><strong>Real-life goals:</strong> Retirement, kids, freedom, emergencies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold" aria-hidden="true">•</span>
                  <span><strong>Long-term thinking:</strong> Ignore daily noise, focus on decades.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
              <h3 className="text-xl font-semibold">The cost of not investing</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={inflationDataPoints}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: '£ Value', angle: -90, position: 'insideLeft' }} />
                    <Tooltip formatter={(value: number | undefined) => value !== undefined ? formatCurrency(value) : ''} />
                    <Line type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={3} name="Purchasing Power" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm">
                <strong>Example:</strong> If inflation averages 3% a year, £10,000 buys the same as £5,500 in 20 years. Investing helps protect your future purchasing power.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Interactive Inflation Calculator</h2>
          <p className="text-slate-700">
            See how inflation affects your purchasing power over time. Adjust the values below to see how much more you'll need in the future.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="inflationAmount" className="text-sm text-slate-600 block mb-2">Current cost (£)</label>
              <input
                id="inflationAmount"
                type="number"
                min="0"
                name="inflationAmount"
                inputMode="decimal"
                className="w-full border border-slate-200 rounded-lg p-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                value={inflationAmount}
                onChange={(event) => setInflationAmount(Number(event.target.value))}
              />
            </div>
            <div>
              <label htmlFor="inflationRate" className="text-sm text-slate-600 block mb-2">Inflation rate (%)</label>
              <input
                id="inflationRate"
                type="number"
                min="0"
                step="0.1"
                name="inflationRate"
                inputMode="decimal"
                className="w-full border border-slate-200 rounded-lg p-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                value={inflationRate}
                onChange={(event) => setInflationRate(Number(event.target.value))}
              />
            </div>
            <div>
              <label htmlFor="inflationYears" className="text-sm text-slate-600 block mb-2">Years</label>
              <input
                id="inflationYears"
                type="number"
                min="0"
                name="inflationYears"
                inputMode="numeric"
                className="w-full border border-slate-200 rounded-lg p-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                value={inflationYears}
                onChange={(event) => setInflationYears(Number(event.target.value))}
              />
            </div>
          </div>
          <div className="rounded-xl bg-white p-4 border border-blue-200">
            <p className="text-sm text-slate-700 mb-1">
              <strong>Future cost:</strong> {formatCurrency(inflationResult)}
            </p>
            <p className="text-xs text-slate-600 mb-1">
              Original cost: {formatCurrency(inflationAmount)}
            </p>
            <p className="text-xs text-red-700 font-semibold">
              Additional needed: {formatCurrency(inflationResult - inflationAmount)} ({((inflationResult / inflationAmount - 1) * 100).toFixed(1)}% increase)
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl section-title">Why Start Now?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Time is your friend',
                body: 'The earlier you start, the more time your money has to grow through compounding.',
                icon: '⏰'
              },
              {
                title: 'Beat inflation',
                body: 'Investing helps your money grow faster than prices rise, protecting your purchasing power.',
                icon: '📈'
              },
              {
                title: 'Real goals',
                body: 'Whether it\'s retirement, a house, or financial freedom, investing helps you reach your goals.',
                icon: '🎯'
              },
              {
                title: 'Start small',
                body: 'You don\'t need a lot to begin. Small, consistent amounts build powerful habits.',
                icon: '💰'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-slate-100">
                <div className="text-4xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p className="text-slate-700 mb-6">
            Ready to learn more? Explore our guides to understand how investing works and what options are available to you.
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
