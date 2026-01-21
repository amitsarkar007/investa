export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-white font-extrabold text-xl mb-2">Investa</div>
            <p className="text-sm text-slate-300">
              Free, comprehensive UK investment education covering all asset classes. All information is available on-site—no courses or programs required.
            </p>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-white font-semibold">Learn</div>
            <a className="block hover:text-white" href="/start">
              Start Here
            </a>
            <a className="block hover:text-white" href="/learning">
              Guides
            </a>
            <a className="block hover:text-white" href="/faq">
              FAQs
            </a>
            <a className="block hover:text-white" href="/definitions">
              Definitions
            </a>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-white font-semibold">Asset Classes</div>
            <a className="block hover:text-white" href="/bonds">
              Bonds
            </a>
            <a className="block hover:text-white" href="/stocks">
              Stocks
            </a>
            <a className="block hover:text-white" href="/funds">
              Mutual Funds
            </a>
            <a className="block hover:text-white" href="/etf">
              ETFs
            </a>
            <a className="block hover:text-white" href="/realestate">
              Real Estate
            </a>
          </div>
          <div className="text-sm space-y-2">
            <div className="text-white font-semibold">Trust & Support</div>
            <a className="block hover:text-white" href="/about">
              About
            </a>
            <a className="block hover:text-white" href="/contact">
              Contact
            </a>
            <a className="block hover:text-white" href="/ethics">
              Ethics & Warnings
            </a>
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
