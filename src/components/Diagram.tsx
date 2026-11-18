// Hand-drawn inline SVG diagrams for Investa guides. Visuals first, no animation, SSR-safe.
// Palette: navy #0f2a43, emerald #10b981, slate #94a3b8, amber #f59e0b, red #ef4444.

import type { FC } from 'react'

type P = { className?: string }

const W = 'w-full h-auto'

function TaxBands({ className }: P) {
  // widths proportional: PA 12570, basic 37700, higher 74870, additional (open-ended cap shown to 125140+)
  const segs = [
    { x: 0, w: 62, c: '#cbd5e1', label: '£0', name: 'Allowance', rate: '0%' },
    { x: 62, w: 188, c: '#10b981', label: '£12,570', name: 'Basic rate', rate: '20%' },
    { x: 250, w: 372, c: '#f59e0b', label: '£50,270', name: 'Higher rate', rate: '40%' },
    { x: 622, w: 98, c: '#ef4444', label: '£125,140', name: 'Additional', rate: '45%' },
  ]
  return (
    <svg viewBox="0 0 760 130" className={className ?? W} role="img" aria-label="Income tax bands 2026/27: 0% up to £12,570, 20% to £50,270, 40% to £125,140, 45% above">
      {segs.map((s) => (
        <g key={s.name}>
          <rect x={s.x} y={20} width={s.w} height={44} rx={6} fill={s.c} />
          <text x={s.x + s.w / 2} y={40} textAnchor="middle" fontSize={14} fontWeight={700} fill={s.c === '#cbd5e1' ? '#334155' : '#ffffff'}>
            {s.rate}
          </text>
          <text x={s.x + s.w / 2} y={56} textAnchor="middle" fontSize={s.w < 100 ? 9 : 11} fill={s.c === '#cbd5e1' ? '#334155' : '#ffffff'}>
            {s.name}
          </text>
          <text x={s.x} y={82} textAnchor="middle" fontSize={11} fill="#64748b">
            {s.label}
          </text>
        </g>
      ))}
      <text x={735} y={82} textAnchor="end" fontSize={11} fill="#64748b">
        and above
      </text>
      <text x={8} y={112} fontSize={12} fill="#334155" fontWeight={600}>
        Each slice of income is taxed at its own rate - moving into a higher band never taxes your whole income at that rate.
      </text>
    </svg>
  )
}

function Taper({ className }: P) {
  // PA shrinks £1 per £2 over £100k, zero at £125,140
  return (
    <svg viewBox="0 0 760 180" className={className ?? W} role="img" aria-label="Personal Allowance taper: £12,570 until £100,000 income, shrinking to zero at £125,140">
      <line x1={60} y1={140} x2={730} y2={140} stroke="#e2e8f0" strokeWidth={2} />
      <line x1={60} y1={140} x2={60} y2={20} stroke="#e2e8f0" strokeWidth={2} />
      <path d="M 60 40 L 500 40 L 650 140" fill="none" stroke="#10b981" strokeWidth={4} strokeLinejoin="round" />
      <path d="M 500 40 L 650 140 L 650 140 L 500 140 Z" fill="#fef3c7" opacity={0.7} />
      <text x={280} y={30} textAnchor="middle" fontSize={13} fill="#0f2a43" fontWeight={700}>
        Personal Allowance: £12,570
      </text>
      <text x={500} y={158} textAnchor="middle" fontSize={12} fill="#64748b">
        £100,000 income
      </text>
      <text x={650} y={158} textAnchor="middle" fontSize={12} fill="#64748b">
        £125,140
      </text>
      <text x={575} y={80} textAnchor="middle" fontSize={12} fill="#b45309" fontWeight={700} transform="rotate(38 575 80)">
        taper: -£1 per £2
      </text>
      <text x={700} y={120} textAnchor="end" fontSize={11} fill="#b45309" fontWeight={700}>
        effective 60% tax zone
      </text>
    </svg>
  )
}

function Stacking({ className }: P) {
  return (
    <svg viewBox="0 0 760 210" className={className ?? W} role="img" aria-label="Income stacks: earnings first, then savings interest, then dividends on top">
      {[
        { y: 140, h: 56, c: '#10b981', t: '1. Earnings, pensions, rent, side business', s: 'uses your Personal Allowance and basic band first' },
        { y: 78, h: 56, c: '#3b82f6', t: '2. Savings interest', s: 'taxed at the band your earnings reached' },
        { y: 16, h: 56, c: '#8b5cf6', t: '3. Dividends', s: 'always on top - often the highest rate you pay' },
      ].map((l) => (
        <g key={l.t}>
          <rect x={90} y={l.y} width={500} height={l.h} rx={8} fill={l.c} />
          <text x={340} y={l.y + 24} textAnchor="middle" fontSize={14} fontWeight={700} fill="#ffffff">
            {l.t}
          </text>
          <text x={340} y={l.y + 44} textAnchor="middle" fontSize={11} fill="#f1f5f9">
            {l.s}
          </text>
        </g>
      ))}
      <path d="M 660 180 L 660 30" stroke="#64748b" strokeWidth={2} markerEnd="url(#stackArrow)" />
      <defs>
        <marker id="stackArrow" markerWidth={8} markerHeight={8} refX={4} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#64748b" />
        </marker>
      </defs>
      <text x={676} y={110} fontSize={11} fill="#64748b" transform="rotate(90 676 110)">
        higher rates this way
      </text>
    </svg>
  )
}

function PaymentsOnAccount({ className }: P) {
  return (
    <svg viewBox="0 0 760 150" className={className ?? W} role="img" aria-label="Payments on account timeline: balancing payment plus first payment on 31 January, second payment on 31 July">
      <line x1={60} y1={80} x2={720} y2={80} stroke="#cbd5e1" strokeWidth={3} />
      {[
        { x: 160, t: '31 January', s: 'last year’s bill (balancing)', s2: '+ 1st payment on account', c: '#ef4444' },
        { x: 560, t: '31 July', s: '2nd payment on account', s2: '(half of last year’s bill)', c: '#f59e0b' },
      ].map((m) => (
        <g key={m.t}>
          <circle cx={m.x} cy={80} r={10} fill={m.c} />
          <text x={m.x} y={48} textAnchor="middle" fontSize={14} fontWeight={700} fill="#0f2a43">
            {m.t}
          </text>
          <text x={m.x} y={112} textAnchor="middle" fontSize={11} fill="#64748b">
            {m.s}
          </text>
          <text x={m.x} y={128} textAnchor="middle" fontSize={11} fill="#64748b">
            {m.s2}
          </text>
        </g>
      ))}
      <text x={370} y={66} textAnchor="middle" fontSize={11} fill="#94a3b8">
        each payment on account = 50% of last year’s bill
      </text>
    </svg>
  )
}

function CgtWorked({ className }: P) {
  // Example: £10,000 gain: £3,000 AEA free, £7,000 taxable at 18% = £1,260
  return (
    <svg viewBox="0 0 760 130" className={className ?? W} role="img" aria-label="Capital Gains Tax example: £10,000 gain - £3,000 tax-free allowance, £7,000 taxed at 18% = £1,260 tax">
      <rect x={20} y={24} width={216} height={48} rx={8} fill="#cbd5e1" />
      <rect x={236} y={24} width={504} height={48} rx={8} fill="#10b981" />
      <text x={128} y={45} textAnchor="middle" fontSize={13} fontWeight={700} fill="#334155">
        £3,000 allowance
      </text>
      <text x={128} y={62} textAnchor="middle" fontSize={11} fill="#475569">
        tax-free every year
      </text>
      <text x={488} y={45} textAnchor="middle" fontSize={13} fontWeight={700} fill="#ffffff">
        £7,000 taxable gain
      </text>
      <text x={488} y={62} textAnchor="middle" fontSize={11} fill="#d1fae5">
        x 18% (basic rate) = £1,260 tax to HM Revenue and Customs (HMRC)
      </text>
      <text x={20} y={100} fontSize={12} fill="#334155" fontWeight={600}>
        A £10,000 gain outside an Individual Savings Account (ISA): you keep £8,740. Inside an ISA you would keep all £10,000.
      </text>
    </svg>
  )
}

function IsaWrapper({ className }: P) {
  return (
    <svg viewBox="0 0 760 170" className={className ?? W} role="img" aria-label="ISA wrapper: investments inside the ISA shield are protected from UK income tax and Capital Gains Tax">
      <rect x={140} y={20} width={480} height={130} rx={16} fill="#ecfdf5" stroke="#10b981" strokeWidth={3} strokeDasharray="10 6" />
      <text x={380} y={44} textAnchor="middle" fontSize={11} fontWeight={700} fill="#047857">
        INDIVIDUAL SAVINGS ACCOUNT (ISA) WRAPPER - £20,000 per tax year
      </text>
      {[
        { x: 190, t: 'Stocks' },
        { x: 300, t: 'Funds' },
        { x: 415, t: 'ETFs (funds)' },
        { x: 520, t: 'Cash' },
      ].map((b) => (
        <g key={b.t}>
          <rect x={b.x} y={64} width={90} height={36} rx={8} fill="#10b981" />
          <text x={b.x + 45} y={87} textAnchor="middle" fontSize={13} fontWeight={700} fill="#ffffff">
            {b.t}
          </text>
        </g>
      ))}
      <text x={380} y={130} textAnchor="middle" fontSize={11} fill="#047857">
        no UK income tax · no Capital Gains Tax · nothing to report to HMRC (the tax office)
      </text>
      <text x={700} y={85} textAnchor="middle" fontSize={26} fill="#ef4444" fontWeight={700}>
        ✕
      </text>
      <text x={700} y={110} textAnchor="middle" fontSize={11} fill="#ef4444">
        tax kept out
      </text>
    </svg>
  )
}

function FeeDrag({ className }: P) {
  // Two diverging growth lines: 6% - 0.2% vs 6% - 1.5% over 25y on 10k + 200/mo (approx endpoints 118k vs 91k)
  return (
    <svg viewBox="0 0 760 190" className={className ?? W} role="img" aria-label="Fee drag: the same growth with 0.2 percent fees versus 1.5 percent fees diverges dramatically over 25 years">
      <line x1={60} y1={150} x2={730} y2={150} stroke="#e2e8f0" strokeWidth={2} />
      <path d="M 60 150 C 250 138, 450 110, 720 40" fill="none" stroke="#10b981" strokeWidth={4} />
      <path d="M 60 150 C 250 142, 450 125, 720 82" fill="none" stroke="#ef4444" strokeWidth={4} strokeDasharray="8 5" />
      <path d="M 720 40 L 720 82" stroke="#94a3b8" strokeWidth={2} strokeDasharray="3 3" />
      <text x={700} y={32} textAnchor="end" fontSize={13} fontWeight={700} fill="#047857">
        0.2% fees
      </text>
      <text x={700} y={100} textAnchor="end" fontSize={13} fontWeight={700} fill="#b91c1c">
        1.5% fees
      </text>
      <text x={724} y={65} textAnchor="start" fontSize={11} fill="#64748b">
        gap
      </text>
      <text x={60} y={172} fontSize={11} fill="#64748b">
        today
      </text>
      <text x={720} y={172} textAnchor="end" fontSize={11} fill="#64748b">
        25 years
      </text>
      <text x={300} y={172} fontSize={12} fill="#334155" fontWeight={600}>
        Same investments, same growth - the only difference is the fee.
      </text>
    </svg>
  )
}

function CurrencyRisk({ className }: P) {
  return (
    <svg viewBox="0 0 760 190" className={className ?? W} role="img" aria-label="Currency risk: US shares up 10 percent but pound up 10 percent against the dollar leaves roughly zero return in pounds">
      <line x1={60} y1={95} x2={730} y2={95} stroke="#e2e8f0" strokeWidth={2} />
      <path d="M 60 95 C 250 80, 450 60, 720 45" fill="none" stroke="#10b981" strokeWidth={4} />
      <path d="M 60 95 C 250 110, 450 130, 720 145" fill="none" stroke="#f59e0b" strokeWidth={4} strokeDasharray="8 5" />
      <path d="M 60 95 L 720 95" stroke="#0f2a43" strokeWidth={3} />
      <text x={706} y={36} textAnchor="end" fontSize={12} fontWeight={700} fill="#047857">
        US shares +10% ($ USD)
      </text>
      <text x={706} y={162} textAnchor="end" fontSize={12} fontWeight={700} fill="#b45309">
        £ GBP stronger +10%
      </text>
      <text x={370} y={88} textAnchor="middle" fontSize={12} fontWeight={700} fill="#0f2a43">
        your return in £ GBP: about 0%
      </text>
      <text x={60} y={175} fontSize={12} fill="#334155" fontWeight={600}>
        Two bets at once: the asset and the currency. Either one can move against you.
      </text>
    </svg>
  )
}

function FscsShield({ className }: P) {
  return (
    <svg viewBox="0 0 760 150" className={className ?? W} role="img" aria-label="FSCS protection: up to £85,000 per person per firm if an FCA-authorised firm fails">
      <path d="M 180 20 L 260 44 L 260 84 C 260 118 226 138 180 148 C 134 138 100 118 100 84 L 100 44 Z" fill="#0f2a43" />
      <text x={180} y={86} textAnchor="middle" fontSize={20} fontWeight={800} fill="#ffffff">
        £85k
      </text>
      <text x={180} y={106} textAnchor="middle" fontSize={11} fill="#94a3b8">
        per person, per firm
      </text>
      <g fontSize={13} fill="#334155">
        <text x={320} y={52} fontWeight={700} fill="#0f2a43">
          FSCS covers:
        </text>
        <text x={320} y={74}>✓ firm failure, certain bad advice</text>
        <text x={320} y={96} fontWeight={700} fill="#0f2a43">
          FSCS does not cover:
        </text>
        <text x={320} y={118}>✕ market falls, crypto, most P2P</text>
      </g>
    </svg>
  )
}

function AdviserCheck({ className }: P) {
  return (
    <svg viewBox="0 0 760 160" className={className ?? W} role="img" aria-label="Check an adviser: FCA register, warning list, fees in pounds, independence">
      {[
        { x: 30, t: '1. FCA Register', s: 'authorised? for what?' },
        { x: 220, t: '2. Warning List', s: 'any hit = walk away' },
        { x: 410, t: '3. Fees in £/year', s: 'initial + ongoing + exit' },
        { x: 600, t: '4. Independent?', s: 'or restricted to what?' },
      ].map((c) => (
        <g key={c.t}>
          <rect x={c.x} y={30} width={160} height={86} rx={12} fill="#ffffff" stroke="#10b981" strokeWidth={2} />
          <text x={c.x + 80} y={66} textAnchor="middle" fontSize={13} fontWeight={700} fill="#0f2a43">
            {c.t}
          </text>
          <text x={c.x + 80} y={92} textAnchor="middle" fontSize={11} fill="#64748b">
            {c.s}
          </text>
        </g>
      ))}
      <text x={380} y={146} textAnchor="middle" fontSize={12} fill="#334155" fontWeight={600}>
        Five minutes of checking beats years of regret - register.fca.org.uk
      </text>
    </svg>
  )
}

// ---- Asset class illustrations ----

function AssetStocks({ className }: P) {
  return (
    <svg viewBox="0 0 760 150" className={className ?? W} role="img" aria-label="Stocks: you buy a small slice of a company; the slice rises and falls with the company">
      <rect x={40} y={30} width={180} height={90} rx={12} fill="#0f2a43" />
      <text x={130} y={70} textAnchor="middle" fontSize={14} fontWeight={700} fill="#ffffff">
        Company
      </text>
      <text x={130} y={94} textAnchor="middle" fontSize={11} fill="#94a3b8">
        worth £1 billion
      </text>
      <path d="M 230 75 L 320 75" stroke="#10b981" strokeWidth={3} markerEnd="url(#stkAr)" />
      <rect x={330} y={42} width={150} height={66} rx={12} fill="#10b981" />
      <text x={405} y={70} textAnchor="middle" fontSize={13} fontWeight={700} fill="#ffffff">
        Your share
      </text>
      <text x={405} y={92} textAnchor="middle" fontSize={11} fill="#d1fae5">
        one tiny slice
      </text>
      <path d="M 520 40 L 600 20 M 520 75 L 610 75 M 520 110 L 600 130" stroke="#94a3b8" strokeWidth={2} />
      <text x={640} y={28} fontSize={11} fill="#047857">
        price rises
      </text>
      <text x={640} y={79} fontSize={11} fill="#64748b">
        dividends
      </text>
      <text x={640} y={134} fontSize={11} fill="#b91c1c">
        price falls
      </text>
      <defs>
        <marker id="stkAr" markerWidth={8} markerHeight={8} refX={6} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#10b981" />
        </marker>
      </defs>
    </svg>
  )
}

function AssetBonds({ className }: P) {
  return (
    <svg viewBox="0 0 760 150" className={className ?? W} role="img" aria-label="Bonds: you lend money, receive interest, then get your money back at the end">
      <rect x={40} y={45} width={150} height={60} rx={12} fill="#10b981" />
      <text x={115} y={80} textAnchor="middle" fontSize={13} fontWeight={700} fill="#ffffff">
        You lend £1,000
      </text>
      <path d="M 200 60 L 400 60" stroke="#0f2a43" strokeWidth={3} markerEnd="url(#bndAr)" />
      <path d="M 400 90 L 200 90" stroke="#f59e0b" strokeWidth={3} markerEnd="url(#bndAr2)" />
      <rect x={410} y={45} width={170} height={60} rx={12} fill="#0f2a43" />
      <text x={495} y={70} textAnchor="middle" fontSize={13} fontWeight={700} fill="#ffffff">
        Government / company
      </text>
      <text x={495} y={92} textAnchor="middle" fontSize={11} fill="#94a3b8">
        the borrower
      </text>
      <text x={300} y={50} textAnchor="middle" fontSize={11} fill="#64748b">
        your loan
      </text>
      <text x={300} y={110} textAnchor="middle" fontSize={11} fill="#b45309">
        interest each year + £1,000 back at the end
      </text>
      <text x={640} y={80} fontSize={11} fill="#64748b">
        risk: rates rise,
      </text>
      <text x={640} y={96} fontSize={11} fill="#64748b">
        borrower defaults
      </text>
      <defs>
        <marker id="bndAr" markerWidth={8} markerHeight={8} refX={6} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#0f2a43" />
        </marker>
        <marker id="bndAr2" markerWidth={8} markerHeight={8} refX={6} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#f59e0b" />
        </marker>
      </defs>
    </svg>
  )
}

function AssetBasket({ className }: P) {
  return (
    <svg viewBox="0 0 760 150" className={className ?? W} role="img" aria-label="Funds and ETFs: one purchase holds a basket of many investments">
      <path d="M 200 40 L 560 40 L 520 130 L 240 130 Z" fill="#ecfdf5" stroke="#10b981" strokeWidth={3} />
      {[
        { x: 260, c: '#10b981' },
        { x: 320, c: '#3b82f6' },
        { x: 380, c: '#f59e0b' },
        { x: 440, c: '#8b5cf6' },
        { x: 500, c: '#ef4444' },
      ].map((d, i) => (
        <circle key={i} cx={d.x - 30} cy={i % 2 === 0 ? 70 : 100} r={18} fill={d.c} opacity={0.85} />
      ))}
      <text x={380} y={145} textAnchor="middle" fontSize={12} fill="#047857" fontWeight={700}>
        one fund = hundreds of companies inside
      </text>
      <text x={640} y={75} fontSize={11} fill="#64748b">
        spreads risk:
      </text>
      <text x={640} y={92} fontSize={11} fill="#64748b">
        one bad company
      </text>
      <text x={640} y={109} fontSize={11} fill="#64748b">
        barely matters
      </text>
    </svg>
  )
}

function AssetProperty({ className }: P) {
  return (
    <svg viewBox="0 0 760 150" className={className ?? W} role="img" aria-label="Property: rent provides income while the building value can rise or fall">
      <path d="M 300 30 L 380 70 L 380 130 L 220 130 L 220 70 Z" fill="#0f2a43" />
      <rect x={285} y={92} width={30} height={38} fill="#10b981" />
      <text x={300} y={148} textAnchor="middle" fontSize={11} fill="#64748b">
        value can rise or fall
      </text>
      <path d="M 420 75 L 520 75" stroke="#10b981" strokeWidth={3} markerEnd="url(#prpAr)" />
      <rect x={530} y={52} width={130} height={46} rx={10} fill="#10b981" />
      <text x={595} y={80} textAnchor="middle" fontSize={12} fontWeight={700} fill="#ffffff">
        rent each month
      </text>
      <text x={100} y={80} textAnchor="middle" fontSize={11} fill="#64748b">
        costs: mortgage,
      </text>
      <text x={100} y={96} textAnchor="middle" fontSize={11} fill="#64748b">
        repairs, voids, tax
      </text>
      <defs>
        <marker id="prpAr" markerWidth={8} markerHeight={8} refX={6} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#10b981" />
        </marker>
      </defs>
    </svg>
  )
}

function AssetCommodities({ className }: P) {
  return (
    <svg viewBox="0 0 760 150" className={className ?? W} role="img" aria-label="Commodities: gold, oil and food - real things with prices set by supply and demand">
      {[
        { x: 150, t: 'Gold', c: '#f59e0b' },
        { x: 340, t: 'Oil', c: '#0f2a43' },
        { x: 530, t: 'Wheat', c: '#a16207' },
      ].map((g) => (
        <g key={g.t}>
          <rect x={g.x - 60} y={40} width={120} height={56} rx={12} fill={g.c} />
          <text x={g.x} y={73} textAnchor="middle" fontSize={14} fontWeight={700} fill="#ffffff">
            {g.t}
          </text>
        </g>
      ))}
      <text x={380} y={130} textAnchor="middle" fontSize={12} fill="#334155" fontWeight={600}>
        No interest, no dividends - you profit only if the price rises. Most investors use funds, not barrels.
      </text>
    </svg>
  )
}

function AssetCrypto({ className }: P) {
  return (
    <svg viewBox="0 0 760 150" className={className ?? W} role="img" aria-label="Crypto: digital tokens with extreme price swings and no FSCS protection">
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={180 + i * 100} y={50} width={70} height={50} rx={10} fill={i % 2 ? '#0f2a43' : '#334155'} />
          {i < 3 && <line x1={250 + i * 100} y1={75} x2={280 + i * 100} y2={75} stroke="#94a3b8" strokeWidth={3} />}
        </g>
      ))}
      <text x={385} y={130} textAnchor="middle" fontSize={12} fill="#b91c1c" fontWeight={700}>
        can double or halve in weeks · no regulator protection · high scam risk
      </text>
    </svg>
  )
}

function AssetP2p({ className }: P) {
  return (
    <svg viewBox="0 0 760 150" className={className ?? W} role="img" aria-label="Peer-to-peer lending: your money is lent to people or businesses who repay with interest - unless they default">
      <circle cx={130} cy={75} r={34} fill="#10b981" />
      <text x={130} y={80} textAnchor="middle" fontSize={12} fontWeight={700} fill="#ffffff">
        You
      </text>
      <path d="M 170 75 L 330 75" stroke="#0f2a43" strokeWidth={3} markerEnd="url(#p2pAr)" />
      <rect x={340} y={45} width={130} height={60} rx={12} fill="#0f2a43" />
      <text x={405} y={80} textAnchor="middle" fontSize={12} fontWeight={700} fill="#ffffff">
        P2P platform
      </text>
      <path d="M 470 75 L 560 75" stroke="#0f2a43" strokeWidth={3} markerEnd="url(#p2pAr)" />
      <circle cx={610} cy={75} r={34} fill="#f59e0b" />
      <text x={610} y={80} textAnchor="middle" fontSize={11} fontWeight={700} fill="#ffffff">
        Borrower
      </text>
      <text x={380} y={130} textAnchor="middle" fontSize={12} fill="#334155" fontWeight={600}>
        interest is your reward - defaults are your risk. Not FSCS protected.
      </text>
      <defs>
        <marker id="p2pAr" markerWidth={8} markerHeight={8} refX={6} refY={4} orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="#0f2a43" />
        </marker>
      </defs>
    </svg>
  )
}

function AssetCollectibles({ className }: P) {
  return (
    <svg viewBox="0 0 760 150" className={className ?? W} role="img" aria-label="Collectibles: art, watches and wine - worth what the next buyer will pay">
      {[
        { x: 180, t: 'Art' },
        { x: 330, t: 'Watches' },
        { x: 480, t: 'Wine' },
      ].map((c) => (
        <g key={c.t}>
          <rect x={c.x - 60} y={40} width={120} height={56} rx={12} fill="#8b5cf6" opacity={0.9} />
          <text x={c.x} y={73} textAnchor="middle" fontSize={13} fontWeight={700} fill="#ffffff">
            {c.t}
          </text>
        </g>
      ))}
      <text x={380} y={130} textAnchor="middle" fontSize={12} fill="#334155" fontWeight={600}>
        No income while you hold. Value = what the next buyer will pay. Storage, insurance and fakes are real costs.
      </text>
    </svg>
  )
}

function AssetPension({ className }: P) {
  return (
    <svg viewBox="0 0 760 160" className={className ?? W} role="img" aria-label="Pension: tax relief tops up contributions now; the pot is locked until minimum pension age, 55 rising to 57 in 2028">
      <path d="M 280 40 L 480 40 L 460 120 L 300 120 Z" fill="#ecfdf5" stroke="#10b981" strokeWidth={3} />
      <text x={380} y={70} textAnchor="middle" fontSize={14} fontWeight={700} fill="#047857">
        Your pension pot
      </text>
      <text x={380} y={94} textAnchor="middle" fontSize={11} fill="#047857">
        you pay £80 → HM Revenue and Customs (HMRC) adds £20 (basic rate)
      </text>
      <text x={120} y={80} textAnchor="middle" fontSize={11} fill="#64748b">
        locked until
      </text>
      <text x={120} y={96} textAnchor="middle" fontSize={12} fill="#b91c1c" fontWeight={700}>
        age 55 → 57 (2028)
      </text>
      <text x={640} y={80} textAnchor="middle" fontSize={11} fill="#64748b">
        grows tax-free
      </text>
      <text x={640} y={96} textAnchor="middle" fontSize={11} fill="#64748b">
        for decades
      </text>
      <text x={380} y={148} textAnchor="middle" fontSize={12} fill="#334155" fontWeight={600}>
        The tax relief is free money - the lock-in is the price.
      </text>
    </svg>
  )
}

export const diagrams: Record<string, FC<P>> = {
  'tax-bands': TaxBands,
  taper: Taper,
  stacking: Stacking,
  'payments-on-account': PaymentsOnAccount,
  'cgt-worked': CgtWorked,
  'isa-wrapper': IsaWrapper,
  'fee-drag': FeeDrag,
  'currency-risk': CurrencyRisk,
  'fscs-shield': FscsShield,
  'adviser-check': AdviserCheck,
  'asset-stocks': AssetStocks,
  'asset-bonds': AssetBonds,
  'asset-basket': AssetBasket,
  'asset-property': AssetProperty,
  'asset-commodities': AssetCommodities,
  'asset-crypto': AssetCrypto,
  'asset-p2p': AssetP2p,
  'asset-collectibles': AssetCollectibles,
  'asset-pension': AssetPension,
  'asset-isa': IsaWrapper,
}

export default function Diagram({ name, className }: { name: string; className?: string }) {
  const D = diagrams[name]
  if (!D) return null
  return (
    <div className={`rounded-2xl bg-slate-50 border border-slate-100 p-4 ${className ?? ''}`}>
      <D />
    </div>
  )
}
