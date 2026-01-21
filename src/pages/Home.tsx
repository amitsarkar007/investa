import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { assetClasses } from '../data/assetClasses'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const startCards = [
  {
    title: 'What investing is',
    body: 'Putting money to work so it can grow over time.',
    icon: '💰'
  },
  {
    title: 'Who it is for',
    body: 'Complete beginners with no finance background needed.',
    icon: '👋'
  },
  {
    title: 'What it is not',
    body: 'Not gambling, not a get-rich-quick scheme.',
    icon: '🚫'
  },
  {
    title: 'How to use this site',
    body: 'All information is free and available right here. No courses, no programs.',
    icon: '📚'
  }
]

const fears = [
  {
    title: '"Investing is gambling"',
    body: 'Long-term investing is about discipline, not luck.'
  },
  {
    title: '"I need a lot of money"',
    body: 'Small, consistent amounts build powerful habits.'
  },
  {
    title: '"I am too late"',
    body: 'The second-best time to start is today.'
  },
  {
    title: '"I will lose everything"',
    body: 'Diversification reduces risk. Education reduces fear.'
  }
]

const whatWeOffer = [
  {
    title: 'Comprehensive Guides',
    body: 'In-depth guides on all UK asset classes—stocks, bonds, property, and more.',
    icon: '📚'
  },
  {
    title: 'Interactive Tools',
    body: 'Calculators and visualizations to help you understand and plan.',
    icon: '🛠️'
  },
  {
    title: 'Clear Explanations',
    body: 'Plain language explanations for complete beginners. No jargon, no judgment.',
    icon: '💬'
  }
]

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

export default function Home() {
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
    <main id="main" className="space-y-16 pb-20">
      <section className="pt-12 pb-10 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-widest text-sm text-blue-600 font-semibold">Welcome / Start Here</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight" style={{ textWrap: 'balance' }}>
              UK Investment Education: All Asset Classes Explained
            </h1>
            <p className="text-lg text-slate-700">
              Free, comprehensive guides on stocks, bonds, funds, property, commodities, and more. Everything you need to understand UK investing—all in one place, no courses required.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors" to="/start">
                Start learning
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition-colors" to="/learning">
                Browse Guides
              </Link>
            </div>
            <p className="text-sm text-slate-600">✓ Free educational content ✓ No courses or programs ✓ UK-focused</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 space-y-4">
            <div className="text-sm font-semibold text-blue-600">Why people use Investa</div>
            <div className="grid gap-4">
              {[
                {
                  title: 'Plain language',
                  body: 'We explain investing like you are brand new. No shame.'
                },
                {
                  title: 'All asset classes',
                  body: 'Comprehensive coverage of stocks, bonds, property, and more.'
                },
                {
                  title: 'Tools & Calculators',
                  body: 'Interactive calculators and visualizations to make concepts clear.'
                }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl" aria-hidden="true">●</span>
                  <div>
                    <div className="font-semibold text-slate-800">{item.title}</div>
                    <p className="text-sm text-slate-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center text-sm">
              {[
                ['11', 'Asset Classes'],
                ['3', 'Calculators'],
                ['100%', 'Free']
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                  <div className="text-xl font-bold text-blue-700">{value}</div>
                  <div className="text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="start" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl section-title">Start Here</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Investing is simply using your money to help you later. This site is for complete beginners, with no finance background needed. All information is available here—no courses, no programs, just free education.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {startCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-slate-100">
                <div className="text-4xl mb-3" aria-hidden="true">{card.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-blue-50 border-2 border-blue-100 p-6 text-sm text-blue-900">
            <strong>Important:</strong> This website provides free educational information only, not financial advice. All content is available on-site—we don't offer courses or education programs. Always do your own research.
          </div>
        </div>
      </section>

      <section id="why-invest" className="px-6">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl section-title">Why Investing Matters</h2>
            <p className="text-lg text-slate-600">
              Saving is important, but inflation quietly reduces what your money can buy. Investing gives your money a chance to grow faster than inflation over the long term.
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

      <section id="basics" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl section-title">Basic Money Concepts</h2>
            <p className="text-lg text-slate-600">We make zero assumptions. Here are the building blocks you need.</p>
          </div>
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
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold mb-3">Compounding in action</h3>
              <p className="text-slate-600 mb-4">
                Compounding means you earn returns on your original money and on the growth it has already made.
              </p>
              {compoundResult.dataPoints && compoundResult.dataPoints.length > 0 && (
                <div className="h-64 mb-4">
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
              <p className="text-xs text-slate-500">Example uses 6% annual growth. Real returns vary.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-xl font-semibold mb-3">Passive vs Active investing</h3>
              <p className="text-slate-600 mb-4">
                Passive investing aims to match the market with lower fees. Active investing tries to beat the market with more trading and higher fees.
              </p>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                  <span className="font-semibold text-green-800">Passive</span>
                  <span className="text-green-600">Low cost, long-term focus</span>
                </div>
                <div className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
                  <span className="font-semibold text-orange-800">Active</span>
                  <span className="text-orange-600">Higher effort, higher risk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="assets" className="px-6 bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl section-title">All Asset Classes</h2>
              <p className="text-lg text-slate-600 mt-2 max-w-2xl">
                Comprehensive guides on every major investment type available in the UK. Click any to learn more.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assetClasses.map((asset) => (
              <Link key={asset.id} to={`/${asset.id}`} className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-slate-100 group">
                <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">{asset.name}</h3>
                <p className="text-sm text-slate-600">{asset.tagline}</p>
                <div className="mt-3 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="risk-return" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl section-title">Risk vs Return</h2>
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
        </div>
      </section>

      <section id="historical" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
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
        </div>
      </section>

      <section id="fears" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl section-title text-center">Common Fears & Myths</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fears.map((fear) => (
              <div key={fear.title} className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-slate-100">
                <h3 className="font-semibold mb-2">{fear.title}</h3>
                <p className="text-sm text-slate-600">{fear.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl section-title text-center">Interactive Calculators</h2>
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
        </div>
      </section>

      <section id="what-we-offer" className="px-6 bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl section-title">What We Offer</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Free guides, tools, and resources to help you understand UK investing. No courses, no programs—just clear information when you need it.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {whatWeOffer.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-slate-100">
                <div className="text-4xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link 
              to="/learning" 
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Browse All Guides
            </Link>
          </div>
        </div>
      </section>

      <section id="cta" className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 grid gap-6 md:grid-cols-2 items-center shadow-xl">
            <div>
              <h2 className="text-3xl md:text-4xl section-title">Ready to Get Started?</h2>
              <p className="text-lg text-blue-100 mt-3">
                All information is free and available right here. No courses, no programs—just clear, comprehensive guides on UK investing.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link className="inline-flex items-center justify-center rounded-full bg-white text-blue-700 font-semibold px-6 py-3 hover:bg-blue-50 transition-colors shadow-lg" to="/start">
                Start Here
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border-2 border-white/60 px-6 py-3 font-semibold hover:bg-white/10 transition-colors" to="/learning">
                Browse Guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
