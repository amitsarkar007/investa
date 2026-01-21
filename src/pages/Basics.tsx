import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { useMemo, useState } from 'react'

export default function Basics() {
  const [principal, setPrincipal] = useState(1000)
  const [monthly, setMonthly] = useState(100)
  const [rate, setRate] = useState(6)
  const [years, setYears] = useState(20)

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(value)

  const compoundResult = useMemo(() => {
    const periods = years * 12
    const monthlyRate = rate / 100 / 12
    const dataPoints = []
    
    for (let i = 0; i <= periods; i += 3) {
      if (i === 0) {
        dataPoints.push({ year: 0, balance: principal, contributions: principal, growth: 0 })
      } else {
        let tempBalance = principal
        for (let j = 0; j < i; j += 1) {
          tempBalance = tempBalance * (1 + monthlyRate) + monthly
        }
        const tempContributions = principal + monthly * i
        const growth = tempBalance - tempContributions
        dataPoints.push({ 
          year: Math.round((i / 12) * 10) / 10, 
          balance: Math.round(tempBalance * 100) / 100, 
          contributions: tempContributions,
          growth: Math.round(growth * 100) / 100
        })
      }
    }
    
    let finalBalance = principal
    for (let i = 0; i < periods; i += 1) {
      finalBalance = finalBalance * (1 + monthlyRate) + monthly
    }
    const contributions = principal + monthly * periods
    const totalGrowth = finalBalance - contributions
    
    return {
      balance: Math.round(finalBalance * 100) / 100,
      contributions,
      growth: Math.round(totalGrowth * 100) / 100,
      dataPoints
    }
  }, [principal, monthly, rate, years])

  return (
    <main id="main" className="px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Basic Money Concepts</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We make zero assumptions. Here are the building blocks you need to understand investing.
          </p>
        </div>

        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl section-title text-center">Core Concepts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Money', 'A tool to trade time and effort today for options later.', '💷'],
              ['Saving vs Investing', 'Saving is safety. Investing is growth with risk.', '🏦'],
              ['Interest', "A fee paid for using someone else's money.", '📈'],
              ['Compound growth', 'Your returns earn returns. Time makes it powerful.', '📊'],
              ['Risk vs Reward', 'Higher potential returns usually mean bigger ups and downs.', '⚖️'],
              ['Time', 'Time smooths short-term noise and helps growth.', '⏰'],
              ['Financial literacy', 'Knowing how money decisions affect your future choices.', '📚']
            ].map(([title, body, icon]) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-slate-100">
                <div className="text-3xl mb-2" aria-hidden="true">{icon}</div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold mb-3">Compounding in action</h3>
              <p className="text-slate-600 mb-4">
                Compounding means you earn returns on your original money and on the growth it has already made. This creates exponential growth over time.
              </p>
              {compoundResult.dataPoints && compoundResult.dataPoints.length > 0 && (
                <div className="h-64 mb-4">
                  <ResponsiveContainer width="100%" height="100%" margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                    <LineChart data={compoundResult.dataPoints}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis 
                        dataKey="year" 
                        label={{ value: 'Years', position: 'insideBottom', offset: -5 }}
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis 
                        label={{ value: '£', angle: -90, position: 'insideLeft' }}
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => `£${(value / 1000).toFixed(0)}k`}
                      />
                      <Tooltip 
                        formatter={(value: number | undefined, name: string) => {
                          if (value === undefined) return ''
                          return [formatCurrency(value), name]
                        }}
                        labelFormatter={(label) => `Year ${label}`}
                        contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="balance" 
                        stroke="#3b82f6" 
                        strokeWidth={3} 
                        name="Total Value" 
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="contributions" 
                        stroke="#94a3b8" 
                        strokeWidth={2} 
                        strokeDasharray="5 5" 
                        name="Your Contributions"
                        dot={false}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="growth" 
                        stroke="#10b981" 
                        strokeWidth={2} 
                        name="Investment Growth"
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                <div className="grid gap-3 md:grid-cols-3 text-sm">
                  <div>
                    <label htmlFor="principal" className="text-xs text-slate-600 block mb-1">Starting (£)</label>
                    <input
                      id="principal"
                      type="number"
                      min="0"
                      className="w-full border border-slate-200 rounded-lg p-2 text-sm focus-visible:ring-2 focus-visible:ring-blue-500"
                      value={principal}
                      onChange={(e) => setPrincipal(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor="monthly" className="text-xs text-slate-600 block mb-1">Monthly (£)</label>
                    <input
                      id="monthly"
                      type="number"
                      min="0"
                      className="w-full border border-slate-200 rounded-lg p-2 text-sm focus-visible:ring-2 focus-visible:ring-blue-500"
                      value={monthly}
                      onChange={(e) => setMonthly(Number(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor="rate" className="text-xs text-slate-600 block mb-1">Rate (%)</label>
                    <input
                      id="rate"
                      type="number"
                      min="0"
                      step="0.1"
                      className="w-full border border-slate-200 rounded-lg p-2 text-sm focus-visible:ring-2 focus-visible:ring-blue-500"
                      value={rate}
                      onChange={(e) => setRate(Number(e.target.value))}
                    />
                  </div>
                </div>
                <div className="mt-3 text-xs text-slate-600">
                  <strong>Final balance:</strong> {formatCurrency(compoundResult.balance)} after {years} years
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">Example uses 6% annual growth. Real returns vary.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold mb-3">Passive vs Active investing</h3>
              <p className="text-slate-600 mb-4">
                Passive investing aims to match the market with lower fees. Active investing tries to beat the market with more trading and higher fees.
              </p>
              <div className="grid gap-3 text-sm mb-4">
                <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                  <span className="font-semibold text-green-800">Passive</span>
                  <span className="text-green-600">Low cost, long-term focus</span>
                </div>
                <div className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
                  <span className="font-semibold text-orange-800">Active</span>
                  <span className="text-orange-600">Higher effort, higher risk</span>
                </div>
              </div>
              <div className="space-y-3 text-sm text-slate-700">
                <div>
                  <strong className="text-green-700">Passive investing:</strong>
                  <ul className="list-disc list-inside ml-2 mt-1 space-y-1 text-slate-600">
                    <li>Buy and hold index funds or ETFs</li>
                    <li>Lower fees (typically 0.1-0.3% per year)</li>
                    <li>Less time and effort required</li>
                    <li>Matches market performance</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-orange-700">Active investing:</strong>
                  <ul className="list-disc list-inside ml-2 mt-1 space-y-1 text-slate-600">
                    <li>Frequent buying and selling</li>
                    <li>Higher fees (typically 1-2% per year)</li>
                    <li>Requires more research and time</li>
                    <li>Tries to beat market performance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p className="text-slate-700 mb-6">
            Now that you understand the basics, explore different asset classes and learn how to build a portfolio.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/learning"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Browse Asset Classes
            </Link>
            <Link
              to="/why-invest"
              className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Why Investing Matters
            </Link>
            <Link
              to="/start"
              className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Getting Started Guide
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
