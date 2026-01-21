import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Sample data for asset class risk/return comparison
const riskReturnData = [
  { name: 'Cash', risk: 1, return: 2, color: '#10b981' },
  { name: 'Bonds', risk: 3, return: 4, color: '#3b82f6' },
  { name: 'Stocks', risk: 7, return: 8, color: '#8b5cf6' },
  { name: 'Real Estate', risk: 5, return: 6, color: '#f59e0b' },
  { name: 'Commodities', risk: 8, return: 7, color: '#ef4444' },
  { name: 'Crypto', risk: 10, return: 9, color: '#ec4899' }
]

// Historical returns data (simplified example)
const historicalReturnsData = [
  { year: '2015', stocks: 1, bonds: 0.5, cash: 0.1 },
  { year: '2016', stocks: 12, bonds: 3, cash: 0.2 },
  { year: '2017', stocks: 15, bonds: 2, cash: 0.3 },
  { year: '2018', stocks: -8, bonds: 1, cash: 0.4 },
  { year: '2019', stocks: 20, bonds: 4, cash: 0.5 },
  { year: '2020', stocks: 5, bonds: 2, cash: 0.1 },
  { year: '2021', stocks: 18, bonds: 3, cash: 0.2 },
  { year: '2022', stocks: -10, bonds: -2, cash: 0.5 },
  { year: '2023', stocks: 12, bonds: 4, cash: 0.6 },
  { year: '2024', stocks: 8, bonds: 3, cash: 0.5 }
]

export default function Tools() {
  const [principal, setPrincipal] = useState(1000)
  const [monthly, setMonthly] = useState(100)
  const [rate, setRate] = useState(6)
  const [years, setYears] = useState(20)

  const [inflationAmount, setInflationAmount] = useState(10000)
  const [inflationRate, setInflationRate] = useState(3)
  const [inflationYears, setInflationYears] = useState(10)

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(value)

  const compoundResult = useMemo(() => {
    const periods = years * 12
    const monthlyRate = rate / 100 / 12
    const dataPoints = []
    
    // Generate data points for every year (or more frequently for better visualization)
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
    
    // Calculate final values
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

  const inflationResult = useMemo(() => {
    return inflationAmount * Math.pow(1 + inflationRate / 100, inflationYears)
  }, [inflationAmount, inflationRate, inflationYears])

  const inflationDataPoints = useMemo(() => {
    const points = []
    // Generate points for every year for smoother visualization
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
          <h1 className="text-4xl md:text-5xl font-extrabold">Investment Tools & Calculators</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Free, interactive tools to help you plan, understand projections, and see how different parameters affect your investments. All tools include visual graphs and projections based on your inputs.
          </p>
        </div>

        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl section-title">Interactive Calculators</h2>
            <p className="text-lg text-slate-600">
              Experiment with different amounts, rates, and time horizons to see how they affect your investments.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="font-semibold text-lg mb-4">Compound growth</h3>
              <label htmlFor="principal" className="text-sm text-slate-600">Starting amount (£)</label>
              <input
                id="principal"
                type="number"
                min="0"
                name="principal"
                inputMode="decimal"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                value={principal}
                onChange={(event) => setPrincipal(Number(event.target.value))}
              />
              <label htmlFor="monthly" className="text-sm text-slate-600">Monthly contribution (£)</label>
              <input
                id="monthly"
                type="number"
                min="0"
                name="monthly"
                inputMode="decimal"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                value={monthly}
                onChange={(event) => setMonthly(Number(event.target.value))}
              />
              <label htmlFor="rate" className="text-sm text-slate-600">Annual growth rate (%)</label>
              <input
                id="rate"
                type="number"
                min="0"
                step="0.1"
                name="rate"
                inputMode="decimal"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                value={rate}
                onChange={(event) => setRate(Number(event.target.value))}
              />
              <label htmlFor="years" className="text-sm text-slate-600">Years</label>
              <input
                id="years"
                type="number"
                min="0"
                name="years"
                inputMode="numeric"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-4 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                value={years}
                onChange={(event) => setYears(Number(event.target.value))}
              />
              <div className="rounded-xl bg-blue-50 p-4 border border-blue-100 mb-4">
                <p className="text-sm text-slate-700 mb-1">
                  <strong>Estimated balance:</strong> {formatCurrency(compoundResult.balance)}
                </p>
                <p className="text-xs text-slate-600 mb-1">
                  Total contributions: {formatCurrency(compoundResult.contributions)}
                </p>
                <p className="text-xs text-green-700 font-semibold">
                  Investment growth: {formatCurrency(compoundResult.growth)} ({((compoundResult.growth / compoundResult.contributions) * 100).toFixed(1)}%)
                </p>
              </div>
              {compoundResult.dataPoints && compoundResult.dataPoints.length > 0 && (
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={compoundResult.dataPoints} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
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
                        formatter={(value: number | undefined, name?: string) => {
                          if (value === undefined) return ''
                          return [formatCurrency(value), name || '']
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
              <p className="text-xs text-slate-500 mt-2">Example uses 6% annual growth. Real returns vary.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="font-semibold text-lg mb-4">Inflation impact</h3>
              <label htmlFor="inflationAmount" className="text-sm text-slate-600">Current cost (£)</label>
              <input
                id="inflationAmount"
                type="number"
                min="0"
                name="inflationAmount"
                inputMode="decimal"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                value={inflationAmount}
                onChange={(event) => setInflationAmount(Number(event.target.value))}
              />
              <label htmlFor="inflationRate" className="text-sm text-slate-600">Inflation rate (%)</label>
              <input
                id="inflationRate"
                type="number"
                min="0"
                step="0.1"
                name="inflationRate"
                inputMode="decimal"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                value={inflationRate}
                onChange={(event) => setInflationRate(Number(event.target.value))}
              />
              <label htmlFor="inflationYears" className="text-sm text-slate-600">Years</label>
              <input
                id="inflationYears"
                type="number"
                min="0"
                name="inflationYears"
                inputMode="numeric"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-4 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                value={inflationYears}
                onChange={(event) => setInflationYears(Number(event.target.value))}
              />
              <div className="rounded-xl bg-red-50 p-4 border border-red-100 mb-4">
                <p className="text-sm text-slate-700 mb-1">
                  <strong>Future cost:</strong> {formatCurrency(inflationResult)}
                </p>
                <p className="text-xs text-slate-600 mb-1">
                  Original cost: {formatCurrency(inflationAmount)}
                </p>
                <p className="text-xs text-red-700 font-semibold">
                  Additional needed: {formatCurrency(inflationResult - inflationAmount)} ({((inflationResult / inflationAmount - 1) * 100).toFixed(1)}% increase)
                </p>
                <p className="text-xs text-slate-600 mt-1">Your money buys less over time.</p>
              </div>
              {inflationDataPoints && inflationDataPoints.length > 0 && (
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={inflationDataPoints} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis 
                        dataKey="year" 
                        label={{ value: 'Years', position: 'insideBottom', offset: -5 }}
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis 
                        label={{ value: '£ Value', angle: -90, position: 'insideLeft' }}
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => `£${(value / 1000).toFixed(0)}k`}
                      />
                      <Tooltip 
                        formatter={(value: number | undefined, name?: string) => {
                          if (value === undefined) return ''
                          return [formatCurrency(value), name || '']
                        }}
                        labelFormatter={(label) => `Year ${label}`}
                        contentStyle={{ backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px' }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#ef4444" 
                        strokeWidth={3} 
                        name="Future Cost"
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="original" 
                        stroke="#94a3b8" 
                        strokeWidth={2} 
                        strokeDasharray="5 5" 
                        name="Original Value"
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="font-semibold text-lg mb-4">Time vs money</h3>
              <p className="text-sm text-slate-600 mb-3">
                Time is the most powerful factor. Even small amounts can grow with enough years.
              </p>
              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 p-4 border border-purple-100 text-sm">
                <p className="font-semibold text-slate-800 mb-2">Key insight:</p>
                <p className="text-slate-700">Start with time, then add consistency. Focus on decades, not weeks.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl section-title">Risk vs Return Comparison</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Understanding the relationship between risk and potential returns helps you make informed decisions.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={riskReturnData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis type="number" domain={[0, 10]} label={{ value: 'Risk Level', position: 'insideBottom', offset: -5 }} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="risk" fill="#ef4444" name="Risk (1-10)" />
                  <Bar dataKey="return" fill="#10b981" name="Expected Return %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              * Risk and return are approximate and vary based on market conditions. Past performance does not guarantee future results.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl section-title">Historical Returns Comparison</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              See how different asset classes have performed over time (simplified example data).
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalReturnsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Return %', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value: number | undefined) => value !== undefined ? `${value}%` : ''} />
                  <Legend />
                  <Line type="monotone" dataKey="stocks" stroke="#8b5cf6" strokeWidth={2} name="Stocks" />
                  <Line type="monotone" dataKey="bonds" stroke="#3b82f6" strokeWidth={2} name="Bonds" />
                  <Line type="monotone" dataKey="cash" stroke="#10b981" strokeWidth={2} name="Cash" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              * This is example data for illustration purposes. Actual returns vary significantly.
            </p>
          </div>
        </section>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100">
          <h2 className="text-2xl font-semibold mb-4">How to Use These Tools</h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">1.</span>
              <span><strong>Experiment with parameters:</strong> Change amounts, rates, and time horizons to see how they affect projections. The graphs update in real-time based on your inputs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">2.</span>
              <span><strong>Understand the graphs:</strong> Each calculator includes visual graphs showing projections. Hover over data points to see exact values at different time periods.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">3.</span>
              <span><strong>Compare scenarios:</strong> Try different combinations to understand trade-offs. For example, see how starting earlier affects long-term growth.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">4.</span>
              <span><strong>Use for planning:</strong> These tools help you set realistic goals and understand what's possible with different investment strategies.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">5.</span>
              <span><strong>Remember:</strong> These are projections based on assumptions. Real returns vary. Use these tools for education and planning, not as guarantees.</span>
            </li>
          </ul>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
            <h2 className="text-2xl font-semibold mb-4">About Our Tools</h2>
            <p className="text-slate-700 mb-4">
              All our calculators are free to use and include interactive graphs that show projections based on your specific parameters. The graphs update in real-time as you change inputs, helping you visualize how different factors affect your investments.
            </p>
            <p className="text-slate-700">
              These tools are for educational purposes only. They provide projections based on assumptions and should not be considered financial advice. Always do your own research and consider consulting a qualified financial adviser for personalized advice.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg p-8 border-2 border-blue-100">
            <h2 className="text-2xl font-semibold mb-4">Need More Help?</h2>
            <p className="text-slate-700 mb-4">
              If you're new to investing, start with our beginner guides to understand the basics before using these tools.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/start"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Start Learning
              </Link>
              <Link
                to="/learning"
                className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-5 py-2 font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Browse Guides
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
