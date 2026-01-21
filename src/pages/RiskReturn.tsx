import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const riskReturnData = [
  { name: 'Cash', risk: 1, return: 2, color: '#10b981' },
  { name: 'Bonds', risk: 3, return: 4, color: '#3b82f6' },
  { name: 'Stocks', risk: 7, return: 8, color: '#8b5cf6' },
  { name: 'Real Estate', risk: 5, return: 6, color: '#f59e0b' },
  { name: 'Commodities', risk: 8, return: 7, color: '#ef4444' },
  { name: 'Crypto', risk: 10, return: 9, color: '#ec4899' }
]

export default function RiskReturn() {
  return (
    <main id="main" className="px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Risk vs Return</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Understanding the relationship between risk and potential returns helps you make informed decisions about your investments.
          </p>
        </div>

        <section className="space-y-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Risk vs Return by Asset Class</h2>
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

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl section-title">Understanding Risk and Return</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="font-semibold text-lg mb-3">What is Risk?</h3>
              <p className="text-slate-700 text-sm mb-3">
                Risk in investing refers to the possibility that you might lose money or that your investment won't perform as expected. Different investments have different levels of risk.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Low risk:</strong> Cash, government bonds - stable but lower returns</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Medium risk:</strong> Corporate bonds, property - moderate volatility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>High risk:</strong> Stocks, crypto - higher volatility, potential for bigger gains or losses</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="font-semibold text-lg mb-3">What is Return?</h3>
              <p className="text-slate-700 text-sm mb-3">
                Return is the profit or loss you make on an investment. It's usually expressed as a percentage of what you originally invested.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Capital gains:</strong> When your investment increases in value</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Income:</strong> Dividends, interest, or rental income from investments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Total return:</strong> The combination of capital gains and income</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold">The Risk-Return Trade-off</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Low Risk, Low Return',
                body: 'Cash and government bonds offer stability but typically lower returns. Good for short-term goals or emergency funds.',
                examples: 'Savings accounts, government bonds'
              },
              {
                title: 'Medium Risk, Medium Return',
                body: 'Diversified funds and property offer a balance. Moderate volatility with potential for steady growth over time.',
                examples: 'Index funds, property funds'
              },
              {
                title: 'High Risk, High Return',
                body: 'Individual stocks and crypto can offer higher returns but come with significant volatility. Requires higher risk tolerance.',
                examples: 'Individual stocks, cryptocurrency'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6">
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-slate-700 text-sm mb-3">{item.body}</p>
                <p className="text-xs text-slate-600">
                  <strong>Examples:</strong> {item.examples}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl section-title">How to Use This Information</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="font-semibold text-lg mb-3">Match Risk to Your Goals</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Short-term goals (1-3 years):</strong> Lower risk investments like cash or bonds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Medium-term goals (3-10 years):</strong> Balanced mix of stocks and bonds</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Long-term goals (10+ years):</strong> Can take more risk with stocks for higher growth potential</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <h3 className="font-semibold text-lg mb-3">Diversification Reduces Risk</h3>
              <p className="text-slate-700 text-sm mb-3">
                Spreading your investments across different asset classes helps reduce overall risk. If one investment performs poorly, others may perform well.
              </p>
              <p className="text-slate-600 text-xs">
                A diversified portfolio might include stocks, bonds, property, and cash in proportions that match your risk tolerance and goals.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
          <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
          <p className="text-slate-700 mb-6">
            Now that you understand risk and return, explore different asset classes to see how they fit your goals and risk tolerance.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/learning"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Browse Asset Classes
            </Link>
            <Link
              to="/basics"
              className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
            >
              Learn the Basics
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
