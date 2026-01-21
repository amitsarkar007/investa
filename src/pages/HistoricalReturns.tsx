import { Link } from 'react-router-dom'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

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

export default function HistoricalReturns() {
  return (
    <main id="main" className="px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Historical Returns Comparison</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            See how different asset classes have performed over time. This data helps illustrate the relationship between risk and return, though past performance does not guarantee future results.
          </p>
        </div>

        <section className="space-y-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Annual Returns by Asset Class</h2>
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
              * This is example data for illustration purposes. Actual returns vary significantly and past performance does not guarantee future results.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl section-title">Key Insights from Historical Data</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Volatility Varies',
                body: 'Stocks show more ups and downs year-to-year, while cash and bonds are more stable but offer lower returns.',
                icon: '📊'
              },
              {
                title: 'Long-term Trends',
                body: 'Over longer periods, stocks have historically outperformed bonds and cash, despite short-term volatility.',
                icon: '📈'
              },
              {
                title: 'No Guarantees',
                body: 'Past performance doesn\'t predict future results. Markets can change, and what worked before may not work again.',
                icon: '⚠️'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Understanding Historical Returns</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-3">What This Data Shows</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Different asset classes have different return patterns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Higher returns often come with higher volatility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Some years show negative returns, especially for stocks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Diversification can help smooth out returns</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-3">Important Limitations</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>This is example data, not real historical data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Past performance doesn't guarantee future results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Market conditions change over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Your actual returns will vary based on timing and choices</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl section-title">How to Use This Information</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="font-semibold text-lg mb-3">For Planning</h3>
              <p className="text-slate-700 text-sm">
                Historical data can help you set realistic expectations. Understand that returns vary year-to-year, but long-term trends can inform your strategy.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="font-semibold text-lg mb-3">For Diversification</h3>
              <p className="text-slate-700 text-sm">
                Seeing how different asset classes perform helps you understand why diversification matters. A mix can help smooth out volatility.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p className="text-slate-700 mb-6">
            Understanding historical patterns is useful, but remember that your investment strategy should match your goals, timeline, and risk tolerance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/risk-return"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Learn About Risk & Return
            </Link>
            <Link
              to="/learning"
              className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Browse Asset Classes
            </Link>
            <Link
              to="/tools"
              className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Use Calculators
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
