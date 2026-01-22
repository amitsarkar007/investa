import { Link } from 'react-router-dom'
import { assetClasses } from '../data/assetClasses'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3">
              <img 
                src="/assets/images/Investa.png" 
                alt="Investa" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-slate-300">
              Free, comprehensive UK investment education covering all asset classes. All information is available on-site—no courses or programs required.
            </p>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-white font-semibold">Learn</div>
            <Link className="block hover:text-white" to="/start">
              Start Here
            </Link>
            <Link className="block hover:text-white" to="/learning">
              Guides
            </Link>
            <Link className="block hover:text-white" to="/faq">
              FAQs
            </Link>
            <Link className="block hover:text-white" to="/definitions">
              Definitions
            </Link>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-white font-semibold">Asset Classes</div>
            {assetClasses.map((asset) => (
              <Link key={asset.id} className="block hover:text-white" to={`/${asset.id}`}>
                {asset.name}
              </Link>
            ))}
          </div>
          <div className="text-sm space-y-2">
            <div className="text-white font-semibold">Trust & Support</div>
            <Link className="block hover:text-white" to="/about">
              About
            </Link>
            <Link className="block hover:text-white" to="/contact">
              Contact
            </Link>
            <Link className="block hover:text-white" to="/ethics">
              Ethics & Warnings
            </Link>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-slate-400 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>Education only. Not financial advice. Do your own research.</p>
          <p>&copy; 2026 Investa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
