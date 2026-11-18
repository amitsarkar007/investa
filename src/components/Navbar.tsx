import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-1 py-2 hover:text-emerald-700 ${isActive ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-slate-700'}`

const assetClassRoutes = ['/bonds', '/stocks', '/funds', '/etf', '/realestate', '/commodities', '/crypto', '/p2plending', '/collectibles', '/pension', '/isa']
const taxRoutes = ['/tax', '/tax/capital-gains-tax', '/tax/self-assessment', '/tax/isa-and-allowances']

const assetLinks = [
  { to: '/bonds', label: 'Bonds' },
  { to: '/stocks', label: 'Stocks & Shares' },
  { to: '/funds', label: 'Mutual Funds' },
  { to: '/etf', label: 'ETFs' },
  { to: '/realestate', label: 'Real Estate' },
  { to: '/commodities', label: 'Commodities' },
  { to: '/crypto', label: 'Cryptocurrencies' },
  { to: '/p2plending', label: 'Peer-to-Peer Lending' },
  { to: '/collectibles', label: 'Collectibles' },
  { to: '/pension', label: 'Pensions' },
  { to: '/isa', label: 'ISAs' },
]

const taxLinks = [
  { to: '/tax', label: 'Tax & Allowances Hub' },
  { to: '/tax/capital-gains-tax', label: 'Capital Gains Tax' },
  { to: '/tax/self-assessment', label: 'Self Assessment' },
  { to: '/tax/isa-and-allowances', label: 'ISAs & Tax Allowances' },
]

function Chevron() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<'assets' | 'tax' | null>(null)
  const location = useLocation()
  const isAssetClassPage = assetClassRoutes.includes(location.pathname)
  const isTaxPage = taxRoutes.includes(location.pathname)

  const dropdown = (
    id: 'assets' | 'tax',
    label: string,
    links: { to: string; label: string }[],
    active: boolean
  ) => (
    <div className="relative" key={id}>
      <button
        className={`inline-flex items-center gap-1 px-1 py-2 hover:text-emerald-700 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none rounded ${active ? 'text-emerald-700 border-b-2 border-emerald-600' : 'text-slate-700'}`}
        onClick={() => setOpenMenu((prev) => (prev === id ? null : id))}
        onKeyDown={(e) => {
          if (e.key === 'Escape') setOpenMenu(null)
        }}
        aria-expanded={openMenu === id}
        aria-controls={`${id}Menu`}
        aria-label={`Toggle ${label} menu`}
        type="button"
      >
        {label}
        <Chevron />
      </button>
      {openMenu === id && (
        <div id={`${id}Menu`} className="absolute left-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white shadow-lg p-2 z-50">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpenMenu(null)} className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link className="flex items-center gap-2 shrink-0" to="/" aria-label="Investa Home">
            <img src="/assets/images/logo.svg" alt="Investa" className="h-10 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-5 text-sm font-semibold" aria-label="Primary">
            <NavLink to="/start" className={navLinkClass}>
              Start Here
            </NavLink>
            {dropdown('assets', 'Asset Classes', assetLinks, isAssetClassPage)}
            {dropdown('tax', 'Tax', taxLinks, isTaxPage)}
            <NavLink to="/costs" className={navLinkClass}>
              Costs
            </NavLink>
            <NavLink to="/investing-abroad" className={navLinkClass}>
              Foreign Currency
            </NavLink>
            <NavLink to="/regulation" className={navLinkClass}>
              Regulation
            </NavLink>
            <NavLink to="/tools" className={navLinkClass}>
              Tools
            </NavLink>
          </nav>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            type="button"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {isOpen && (
          <nav className="lg:hidden pb-4 text-sm font-semibold" aria-label="Mobile">
            <div className="grid gap-1">
              {[
                { to: '/', label: 'Home' },
                { to: '/start', label: 'Start Here' },
                { to: '/learning', label: 'All Guides' },
                { to: '/tax', label: 'Tax & Allowances' },
                { to: '/costs', label: 'What Investing Costs' },
                { to: '/investing-abroad', label: 'Investing in Foreign Currency' },
                { to: '/regulation', label: 'Regulation & Protection' },
                { to: '/tools', label: 'Tools & Calculators' },
                { to: '/definitions', label: 'Definitions' },
                { to: '/faq', label: 'FAQs' },
                { to: '/about', label: 'About' },
              ].map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800">
                  {l.label}
                </Link>
              ))}
              <div className="px-3 pt-2 text-xs uppercase tracking-wide text-slate-400">Asset classes</div>
              <div className="grid grid-cols-2 gap-1">
                {assetLinks.map((l) => (
                  <Link key={l.to} to={l.to} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2 text-slate-600 hover:bg-emerald-50 hover:text-emerald-800">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
