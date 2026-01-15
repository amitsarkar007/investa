import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `hover:text-blue-700 ${isActive ? 'text-blue-700' : 'text-slate-700'}`

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAssets, setShowAssets] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link className="flex items-center gap-2 text-slate-900 font-extrabold text-xl" to="/">
            <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-blue-600 text-white text-sm">IV</span>
            Investa
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold" aria-label="Primary">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/bonds" className={navLinkClass}>
              Bonds
            </NavLink>
            <NavLink to="/learning" className={navLinkClass}>
              Learning Paths
            </NavLink>
            <NavLink to="/faq" className={navLinkClass}>
              FAQs
            </NavLink>
            <div className="relative">
              <button
                className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-700"
                onClick={() => setShowAssets((prev) => !prev)}
                aria-expanded={showAssets}
                aria-controls="assetMenu"
                type="button"
              >
                Asset Classes
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showAssets && (
                <div
                  id="assetMenu"
                  className="absolute bg-white shadow-xl rounded-xl w-56 right-0 mt-3 border border-slate-200 z-50"
                  role="menu"
                >
                  {[
                    ['Stocks', '/stocks'],
                    ['Bonds', '/bonds'],
                    ['Mutual Funds', '/funds'],
                    ['ETFs', '/etf'],
                    ['Real Estate', '/realestate'],
                    ['Commodities', '/commodities'],
                    ['Cryptocurrencies', '/crypto'],
                    ['Peer-to-Peer Lending', '/p2plending'],
                    ['Collectibles', '/collectibles'],
                    ['Pension Funds', '/pension'],
                    ['ISAs', '/isa']
                  ].map(([label, path]) => (
                    <NavLink
                      key={path}
                      to={path}
                      className="block px-4 py-3 text-slate-700 hover:bg-slate-50"
                      role="menuitem"
                      onClick={() => setShowAssets(false)}
                    >
                      {label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <Link
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
              to="/start"
            >
              Start Learning
            </Link>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-slate-200 h-10 w-10 text-slate-700 hover:text-blue-700"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle menu"
            type="button"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200" id="mobile-nav">
          <div className="px-4 py-4 space-y-3 text-slate-700 font-semibold">
            <NavLink to="/" className="block" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/bonds" className="block" onClick={() => setIsOpen(false)}>
              Bonds
            </NavLink>
            <NavLink to="/learning" className="block" onClick={() => setIsOpen(false)}>
              Learning Paths
            </NavLink>
            <NavLink to="/faq" className="block" onClick={() => setIsOpen(false)}>
              FAQs
            </NavLink>
            <NavLink to="/about" className="block" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <div className="pt-2 text-xs uppercase tracking-wide text-slate-400">Asset Classes</div>
            {[
              ['Stocks', '/stocks'],
              ['Bonds', '/bonds'],
              ['Mutual Funds', '/funds'],
              ['ETFs', '/etf'],
              ['Real Estate', '/realestate'],
              ['Commodities', '/commodities'],
              ['Cryptocurrencies', '/crypto'],
              ['Peer-to-Peer Lending', '/p2plending'],
              ['Collectibles', '/collectibles'],
              ['Pension Funds', '/pension'],
              ['ISAs', '/isa']
            ].map(([label, path]) => (
              <NavLink key={path} to={path} className="block" onClick={() => setIsOpen(false)}>
                {label}
              </NavLink>
            ))}
            <Link
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700"
              to="/start"
              onClick={() => setIsOpen(false)}
            >
              Start Learning
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
