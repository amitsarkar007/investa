import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { assetClasses } from '../data/assetClasses'
import Icon from '../components/Icon'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { CompoundGrowthCalc, FeeImpactCalc, CgtCalc } from '../components/Calculators'

const startCards = [
  {
    title: 'What investing is',
    body: 'Putting money to work so it can grow over time.',
    icon: 'banknote'
  },
  {
    title: 'Who it is for',
    body: 'Complete beginners with no finance background needed.',
    icon: 'user'
  },
  {
    title: 'What it is not',
    body: 'Not gambling, not a get-rich-quick scheme.',
    icon: 'no'
  },
  {
    title: 'How to use this site',
    body: 'All information is free and available right here. No courses, no programs.',
    icon: 'book'
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
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(value)



  // Worked example: £1,000 up front plus £100 a month at 6% a year, for 20 years.
  const compoundingPoints = useMemo(() => {
    const points = []
    let balance = 1000
    points.push({ year: 0, balance: 1000, contributions: 1000, growth: 0 })
    for (let y = 1; y <= 20; y += 1) {
      for (let m = 0; m < 12; m += 1) {
        balance = balance * (1 + 0.06 / 12) + 100
      }
      const contributions = 1000 + 100 * 12 * y
      points.push({
        year: y,
        balance: Math.round(balance * 100) / 100,
        contributions,
        growth: Math.round((balance - contributions) * 100) / 100
      })
    }
    return points
  }, [])

  // What £10,000 cash is really worth over 20 years if inflation runs at 3% a year.
  const inflationDataPoints = useMemo(() => {
    const points = []
    for (let i = 0; i <= 20; i += 1) {
      points.push({
        year: i,
        value: Math.round((10000 / Math.pow(1.03, i)) * 100) / 100
      })
    }
    return points
  }, [])

  return (
    <main id="main" className="space-y-16 pb-20">
      <section className="pt-14 pb-12 px-6 bg-[#0f2a43]">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-widest text-sm text-emerald-400 font-semibold">UK investing, explained in plain English</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white" style={{ textWrap: 'balance' }}>
              Every asset class. Every cost. Every tax rule. Free.
            </h1>
            <p className="text-lg text-slate-300">
              Investa is a free educational guide to UK investing: how each asset class works, what it really costs, how Capital Gains Tax (CGT) and Individual Savings Accounts (ISAs) work, how to invest in dollars, euros and yen, and how to report it all on Self Assessment. Like a money-saving guide, but for learning to invest.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-white font-semibold shadow-lg hover:bg-emerald-600 transition-colors" to="/start">
                Start learning
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border-2 border-emerald-400 px-6 py-3 font-semibold text-emerald-300 hover:bg-white/5 transition-colors" to="/learning">
                Browse Guides
              </Link>
            </div>
            <p className="text-sm text-slate-400">✓ Free educational content ✓ Sourced from GOV.UK &amp; the Financial Conduct Authority (FCA) ✓ Education, never advice</p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 space-y-4">
            <div className="text-sm font-semibold text-emerald-700">New to all of this?</div>
            <div className="grid gap-4">
              {[
                {
                  title: '1. Learn the basics',
                  body: 'What investing is, why it matters, and the fears worth ignoring.',
                  to: '/start'
                },
                {
                  title: '2. Understand each asset class',
                  body: 'From bonds to funds to ISAs, one plain-English guide at a time.',
                  to: '/learning'
                },
                {
                  title: '3. Know the costs and the tax',
                  body: 'Fees, CGT, ISAs and Self Assessment - before you invest a pound.',
                  to: '/tax'
                }
              ].map((item) => (
                <Link key={item.title} to={item.to} className="flex items-start gap-3 rounded-2xl p-3 hover:bg-emerald-50 transition-colors">
                  <span className="text-emerald-600 text-xl" aria-hidden="true">●</span>
                  <div>
                    <div className="font-semibold text-slate-800">{item.title}</div>
                    <p className="text-sm text-slate-600">{item.body}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center text-sm">
              {[
                ['11', 'Asset Classes'],
                ['4', 'Tax Guides'],
                ['100%', 'Free']
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-emerald-50 p-4">
                  <div className="text-xl font-bold text-emerald-700">{value}</div>
                  <div className="text-slate-600">{label}</div>
                </div>
              ))}
            </div>
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
                  <Line isAnimationActive={false} type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={3} name="Purchasing Power" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm">
              <strong>Example:</strong> If inflation averages 3% a year, £10,000 buys the same as £5,500 in 20 years. Investing helps protect your future purchasing power.
            </div>
          </div>
        </div>
      </section>

      <section id="tax-costs-rules" className="px-6 py-12 bg-slate-100">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl section-title">The rules of the game</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Most people lose more to costs and tax than to bad investments. Learn the rules first.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { to: '/tax', icon: 'receipt', title: 'Tax & Allowances', body: 'CGT rates, the £3,000 exempt amount, ISAs and dividend tax.' },
              { to: '/costs', icon: 'coins', title: 'What It Costs', body: 'Platform fees, fund charges, FX fees and stamp duty, explained.' },
              { to: '/investing-abroad', icon: 'globe', title: 'Foreign Currency', body: 'Investing in $ USD, € EUR, ¥ JPY and ₹ INR, and the tax that follows.' },
              { to: '/regulation', icon: 'shield', title: 'Regulation & Safety', body: 'Financial Conduct Authority (FCA) rules, the £85,000 Financial Services Compensation Scheme (FSCS) safety net, and checking any firm.' }
            ].map((card) => (
              <Link key={card.to} to={card.to} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:border-emerald-400 transition-colors block">
                <div className="mb-3"><Icon name={card.icon as never} /></div>
                <h3 className="font-semibold text-lg mb-2 text-[#0f2a43]">{card.title}</h3>
                <p className="text-sm text-slate-600">{card.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl section-title">Start Here</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Investing is simply using your money to help you later. This site is for complete beginners, with no finance background needed. All information is available here - no courses, no programs, just free education.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {startCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-slate-100">
                <div className="mb-3"><Icon name={card.icon as never} /></div>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-blue-50 border-2 border-blue-100 p-6 text-sm text-blue-900">
            <strong>Important:</strong> This website provides free educational information only, not financial advice. All content is available on-site - we don't offer courses or education programs. Always do your own research.
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
              ['Money', 'A tool to trade time and effort today for options later.', 'pound'],
              ['Saving vs Investing', 'Saving is safety. Investing is growth with risk.', 'bank'],
              ['Interest', "A fee paid for using someone else's money.", 'chart-up'],
              ['Compound growth', 'Your returns earn returns. Time makes it powerful.', 'chart-bar'],
              ['Risk vs Reward', 'Higher potential returns usually mean bigger ups and downs.', 'scale'],
              ['Time', 'Time smooths short-term noise and helps growth.', 'clock'],
              ['Financial literacy', 'Knowing how money decisions affect your future choices.', 'book']
            ].map(([title, body, icon]) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow-lg card-hover border border-slate-100">
                <div className="mb-2"><Icon name={icon as never} className="h-8 w-8 text-emerald-600" /></div>
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
              {compoundingPoints.length > 0 && (
                <div className="h-64 mb-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={compoundingPoints} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
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
                      <Line isAnimationActive={false} 
                        type="monotone" 
                        dataKey="balance" 
                        stroke="#3b82f6" 
                        strokeWidth={3} 
                        name="Total Value" 
                        dot={{ r: 3 }}
                        activeDot={{ r: 5 }}
                      />
                      <Line isAnimationActive={false} 
                        type="monotone" 
                        dataKey="contributions" 
                        stroke="#94a3b8" 
                        strokeWidth={2} 
                        strokeDasharray="5 5" 
                        name="Your Contributions"
                        dot={false}
                      />
                      <Line isAnimationActive={false} 
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
                  <Bar isAnimationActive={false} dataKey="risk" fill="#ef4444" name="Risk (1-10)" />
                  <Bar isAnimationActive={false} dataKey="return" fill="#10b981" name="Expected Return %" />
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
                  <Line isAnimationActive={false} type="monotone" dataKey="stocks" stroke="#8b5cf6" strokeWidth={2} name="Stocks" />
                  <Line isAnimationActive={false} type="monotone" dataKey="bonds" stroke="#3b82f6" strokeWidth={2} name="Bonds" />
                  <Line isAnimationActive={false} type="monotone" dataKey="cash" stroke="#10b981" strokeWidth={2} name="Cash" />
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
          <div className="space-y-3 text-center">
            <h2 className="text-3xl md:text-4xl section-title">Interactive Calculators</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">Drag the sliders. Watch the numbers move. No maths needed.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <CompoundGrowthCalc />
            <FeeImpactCalc />
            <CgtCalc />
          </div>
          <p className="text-center text-sm text-slate-500">
            More tools, including income tax and Self Assessment calculators, on the <Link to="/tools" className="text-blue-600 underline">Tools page</Link>.
          </p>
        </div>
      </section>

      <section id="cta" className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-12 grid gap-6 md:grid-cols-2 items-center shadow-xl">
            <div>
              <h2 className="text-3xl md:text-4xl section-title">Ready to Get Started?</h2>
              <p className="text-lg text-blue-100 mt-3">
                All information is free and available right here. No courses, no programs - just clear, comprehensive guides on UK investing.
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
