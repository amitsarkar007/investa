import { Link } from 'react-router-dom'
import { assetClasses } from '../data/assetClasses'

export default function Footer() {
  return (
    <footer className="bg-[#0f2a43] text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3 rounded-lg bg-white inline-block px-3 py-2">
              <img src="/assets/images/logo.svg" alt="Investa" className="h-8 w-auto" />
            </div>
            <p className="text-sm text-slate-300">
              Free, plain-English UK investment education: every asset class, what it costs, the tax rules, and how to stay safe. Education only - never financial advice.
            </p>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-white font-semibold">Learn</div>
            <Link className="block hover:text-white" to="/start">Start Here</Link>
            <Link className="block hover:text-white" to="/learning">Guides</Link>
            <Link className="block hover:text-white" to="/costs">What Investing Costs</Link>
            <Link className="block hover:text-white" to="/investing-abroad">Investing in Foreign Currency</Link>
            <Link className="block hover:text-white" to="/definitions">Definitions</Link>
            <Link className="block hover:text-white" to="/faq">FAQs</Link>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-white font-semibold">Tax & Rules</div>
            <Link className="block hover:text-white" to="/tax">Tax & Allowances Hub</Link>
            <Link className="block hover:text-white" to="/tax/income-tax">Income Tax Bands</Link>
            <Link className="block hover:text-white" to="/tax/extra-income">Extra Income & Your Tax</Link>
            <Link className="block hover:text-white" to="/tax/capital-gains-tax">Capital Gains Tax</Link>
            <Link className="block hover:text-white" to="/tax/self-assessment">Self Assessment</Link>
            <Link className="block hover:text-white" to="/tax/isa-and-allowances">ISAs & Allowances</Link>
            <Link className="block hover:text-white" to="/regulation">Regulation & Protection</Link>
            <Link className="block hover:text-white" to="/financial-advisers">Financial Advisers</Link>
            <Link className="block hover:text-white" to="/ethics">Ethics & Warnings</Link>
            <Link className="block hover:text-white" to="/how-investa-is-different">How Investa Is Different</Link>
            <Link className="block hover:text-white" to="/how-we-make-money">How We Make Money</Link>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-white font-semibold">Asset Classes</div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-2">
              {assetClasses.map((asset) => (
                <Link key={asset.id} className="block hover:text-white" to={`/${asset.id}`}>
                  {asset.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-slate-400 space-y-2">
          <p>
            Investa is an educational project of A2JS Technologies. We are not authorised or regulated by the Financial Conduct Authority and we do not provide financial advice, personal recommendations or investment services. Nothing on this site is a financial promotion or an inducement to invest.
          </p>
          <p>
            Capital is at risk when you invest. Tax rules can change and depend on your circumstances - always check the latest guidance on GOV.UK or speak to a qualified, FCA-authorised adviser.
          </p>
        </div>
      </div>
    </footer>
  )
}
