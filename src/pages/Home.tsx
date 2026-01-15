import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { assetClasses } from '../data/assetClasses'

const startCards = [
  {
    title: 'What investing is',
    body: 'Putting money to work so it can grow over time.'
  },
  {
    title: 'Who it is for',
    body: 'Complete beginners with no finance background needed.'
  },
  {
    title: 'What it is not',
    body: 'Not gambling, not a get-rich-quick scheme.'
  },
  {
    title: 'How to use this site',
    body: 'Follow a learning path or jump to any topic.'
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

const learningPaths = [
  {
    title: 'I know nothing',
    body: 'Start with sections 1-4, then bonds, then tools.',
    time: 'Estimated time: 1-2 hours'
  },
  {
    title: 'I am ready to start',
    body: 'Read sections 8-10 and use the calculators.',
    time: 'Estimated time: 45 minutes'
  },
  {
    title: 'I already started',
    body: 'Review risk, mistakes, and long-term habits.',
    time: 'Estimated time: 45 minutes'
  }
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
    let balance = principal
    for (let i = 0; i < periods; i += 1) {
      balance = balance * (1 + monthlyRate) + monthly
    }
    const contributions = principal + monthly * periods
    return {
      balance,
      contributions
    }
  }, [principal, monthly, rate, years])

  const inflationResult = useMemo(() => {
    return inflationAmount * Math.pow(1 + inflationRate / 100, inflationYears)
  }, [inflationAmount, inflationRate, inflationYears])

  return (
    <main id="main" className="space-y-16 pb-20">
      <section className="pt-12 pb-10 px-6">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="uppercase tracking-widest text-sm text-blue-600 font-semibold">Welcome / Start Here</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Calm, bonds-first investing education for complete beginners.
            </h1>
            <p className="text-lg text-slate-600">
              Investa removes fear and overwhelm. Learn how investing works across asset classes, with a clear focus on
              bonds and steady long-term habits.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700" to="/start">
                Start learning
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-700" to="/bonds">
                Explore bonds
              </Link>
            </div>
            <p className="text-sm text-slate-500">Education only. Not financial advice.</p>
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
                  title: 'Bonds-first',
                  body: 'Understand stability and income before riskier assets.'
                },
                {
                  title: 'Step-by-step',
                  body: 'Follow simple learning paths without overwhelm.'
                }
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl">●</span>
                  <div>
                    <div className="font-semibold text-slate-800">{item.title}</div>
                    <p className="text-sm text-slate-600">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center text-sm">
              {[
                ['17', 'Core lessons'],
                ['3', 'Calculators'],
                ['0', 'Sales hype']
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xl font-bold text-slate-900">{value}</div>
                  <div className="text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="start" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl section-title">Start Here</h2>
            <p className="text-lg text-slate-600">
              Investing is simply using your money to help you later. This site is for complete beginners, with no
              finance background needed. We do not promise quick wins. We teach calm, long-term habits.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {startCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 shadow card-hover">
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6 text-sm text-blue-900">
            <strong>Disclaimer:</strong> This website is for education only, not financial advice. Always do your own
            research.
          </div>
        </div>
      </section>

      <section id="why-invest" className="px-6">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl section-title">Why Investing Matters</h2>
            <p className="text-lg text-slate-600">
              Saving is important, but inflation quietly reduces what your money can buy. Investing gives your money a
              chance to grow faster than inflation over the long term.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li><strong>Inflation:</strong> Prices rise while cash stays still.</li>
              <li><strong>Time matters:</strong> The earlier you start, the easier it is.</li>
              <li><strong>Real-life goals:</strong> Retirement, kids, freedom, emergencies.</li>
              <li><strong>Long-term thinking:</strong> Ignore daily noise, focus on decades.</li>
            </ul>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
            <h3 className="text-xl font-semibold">The cost of not investing</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <p>If inflation averages 3% a year, £10,000 buys the same as £5,500 in 20 years.</p>
              <p>Investing is not about being rich, it is about protecting your future self.</p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm">
              <strong>Simple example:</strong> £100/month over 30 years can outgrow a one-time £10,000 deposit.
            </div>
          </div>
        </div>
      </section>

      <section id="basics" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl section-title">Basic Money Concepts</h2>
            <p className="text-lg text-slate-600">We make zero assumptions. Here are the building blocks you need.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              ['Money', 'A tool to trade time and effort today for options later.'],
              ['Saving vs Investing', 'Saving is safety. Investing is growth with risk.'],
              ['Interest', "A fee paid for using someone else's money."],
              ['Compound growth', 'Your returns earn returns. Time makes it powerful.'],
              ['Risk vs Reward', 'Higher potential returns usually mean bigger ups and downs.'],
              ['Time', 'Time smooths short-term noise and helps growth.'],
              ['Financial literacy', 'Knowing how money decisions affect your future choices.']
            ].map(([title, body]) => (
              <div key={title} className="bg-white rounded-2xl p-6 shadow card-hover">
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-slate-600">{body}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-semibold mb-3">Compounding in one sentence</h3>
              <p className="text-slate-600 mb-4">
                Compounding means you earn returns on your original money and on the growth it has already made.
              </p>
              <div className="grid grid-cols-3 text-center text-sm">
                {[
                  ['Year 1', '£1,000'],
                  ['Year 10', '£1,967'],
                  ['Year 30', '£5,743']
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl bg-slate-50 p-4">
                    <div className="text-slate-500">{label}</div>
                    <div className="font-bold">{value}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">Example uses 6% annual growth. Real returns vary.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="text-xl font-semibold mb-3">Passive vs Active investing</h3>
              <p className="text-slate-600 mb-4">
                Passive investing aims to match the market with lower fees. Active investing tries to beat the market
                with more trading and higher fees. Beginners usually start with simple, passive strategies.
              </p>
              <div className="grid gap-3 text-sm">
                <div className="flex items-center justify-between bg-slate-50 rounded-xl p-3">
                  <span className="font-semibold">Passive</span>
                  <span className="text-slate-500">Low cost, long-term focus</span>
                </div>
                <div className="flex items-center justify-between bg-slate-50 rounded-xl p-3">
                  <span className="font-semibold">Active</span>
                  <span className="text-slate-500">Higher effort, higher risk of mistakes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bonds-focus" className="px-6">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl section-title">Bonds: the calm foundation</h2>
            <p className="text-lg text-slate-600">
              Bonds are IOUs issued by governments and companies. You lend money, they pay you interest, and return your
              principal at maturity. Bonds often feel steadier than stocks, which makes them a helpful starting point.
            </p>
            <ul className="space-y-3 text-slate-700">
              <li><strong>Why beginners like bonds:</strong> predictable income, clearer timelines.</li>
              <li><strong>Main risks:</strong> interest rate changes, inflation, and credit risk.</li>
              <li><strong>Common types:</strong> government, corporate, inflation-linked bonds.</li>
            </ul>
            <Link className="inline-flex items-center gap-2 text-blue-700 font-semibold" to="/bonds">
              Go deeper on bonds →
            </Link>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 space-y-4">
            <h3 className="text-xl font-semibold">Bonds in one minute</h3>
            <p className="text-sm text-slate-600">
              Think of a bond like a fixed-term loan. The issuer promises to pay interest along the way, then pay back
              the original amount. Bond prices can move, but the cash flows are the main story.
            </p>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
              Bonds can balance a portfolio by adding stability while still providing growth potential.
            </div>
          </div>
        </div>
      </section>

      <section id="assets" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl section-title">Types of Investments (High-Level)</h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Awareness without overwhelm. Here is a quick map of the main options and why beginners often start with
              bonds and funds.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {assetClasses.map((asset) => (
              <Link key={asset.id} to={`/${asset.id}`} className="bg-white rounded-2xl p-6 shadow card-hover">
                <h3 className="font-semibold text-lg mb-2">{asset.name}</h3>
                <p className="text-sm text-slate-600">{asset.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="fears" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl section-title">Common Fears & Myths</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fears.map((fear) => (
              <div key={fear.title} className="bg-white rounded-2xl p-6 shadow card-hover">
                <h3 className="font-semibold mb-2">{fear.title}</h3>
                <p className="text-sm text-slate-600">{fear.body}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 text-sm text-slate-600">
            <strong>Beginner story:</strong> Sam started with £25/month in a simple bond fund. One year later, it was not
            huge, but Sam felt confident and in control. Small steps build momentum.
          </div>
        </div>
      </section>

      <section id="tools" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl section-title">Simple Tools & Calculators</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-lg mb-4">Compound growth</h3>
              <label className="text-sm text-slate-600">Starting amount</label>
              <input
                type="number"
                min="0"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-3"
                value={principal}
                onChange={(event) => setPrincipal(Number(event.target.value))}
              />
              <label className="text-sm text-slate-600">Monthly contribution</label>
              <input
                type="number"
                min="0"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-3"
                value={monthly}
                onChange={(event) => setMonthly(Number(event.target.value))}
              />
              <label className="text-sm text-slate-600">Annual growth rate (%)</label>
              <input
                type="number"
                min="0"
                step="0.1"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-3"
                value={rate}
                onChange={(event) => setRate(Number(event.target.value))}
              />
              <label className="text-sm text-slate-600">Years</label>
              <input
                type="number"
                min="0"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-4"
                value={years}
                onChange={(event) => setYears(Number(event.target.value))}
              />
              <p className="text-sm text-slate-600 mt-3">
                Estimated balance: {formatCurrency(compoundResult.balance)} (contributions:{' '}
                {formatCurrency(compoundResult.contributions)})
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-lg mb-4">Inflation impact</h3>
              <label className="text-sm text-slate-600">Current cost</label>
              <input
                type="number"
                min="0"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-3"
                value={inflationAmount}
                onChange={(event) => setInflationAmount(Number(event.target.value))}
              />
              <label className="text-sm text-slate-600">Inflation rate (%)</label>
              <input
                type="number"
                min="0"
                step="0.1"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-3"
                value={inflationRate}
                onChange={(event) => setInflationRate(Number(event.target.value))}
              />
              <label className="text-sm text-slate-600">Years</label>
              <input
                type="number"
                min="0"
                className="w-full border border-slate-200 rounded-lg p-2 mt-1 mb-4"
                value={inflationYears}
                onChange={(event) => setInflationYears(Number(event.target.value))}
              />
              <p className="text-sm text-slate-600 mt-3">
                Future cost: {formatCurrency(inflationResult)}. Your money buys less over time.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow">
              <h3 className="font-semibold text-lg mb-4">Time vs money</h3>
              <p className="text-sm text-slate-600 mb-3">
                Time is the most powerful factor. Even small amounts can grow with enough years.
              </p>
              <div className="rounded-xl bg-slate-50 p-4 text-sm">
                Start with time, then add consistency. Focus on decades, not weeks.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="learning" className="px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl section-title">Learning Paths</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {learningPaths.map((path) => (
              <div key={path.title} className="bg-white rounded-2xl p-6 shadow card-hover">
                <h3 className="font-semibold text-lg mb-2">{path.title}</h3>
                <p className="text-sm text-slate-600">{path.body}</p>
                <p className="text-xs text-slate-500 mt-2">{path.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-blue-600 text-white p-8 md:p-12 grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl section-title">Next steps</h2>
              <p className="text-lg text-blue-100 mt-3">
                Start small. Pick one lesson today. Keep learning and take it one step at a time.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link className="inline-flex items-center justify-center rounded-full bg-white text-blue-700 font-semibold px-6 py-3" to="/start">
                Begin the lessons
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 font-semibold" to="/bonds">
                Explore bonds
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
