import { useMemo, useState } from 'react'
import Slider from './Slider'

export const gbp = (v: number) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 }).format(v)
const gbp2 = (v: number) =>
  new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 2 }).format(v)
const pct = (v: number) => `${v}%`

function Bar({ segments }: { segments: { label: string; value: number; color: string }[] }) {
  const total = segments.reduce((s, x) => s + x.value, 0)
  if (total <= 0) return null
  return (
    <div>
      <div className="flex h-5 w-full overflow-hidden rounded-full bg-slate-100">
        {segments.map(
          (s) =>
            s.value > 0 && (
              <div key={s.label} style={{ width: `${(s.value / total) * 100}%`, backgroundColor: s.color }} />
            )
        )}
      </div>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        {segments.map((s) => (
          <span key={s.label} className="inline-flex items-center gap-1.5 text-xs text-slate-600">
            <span className="inline-block h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: s.color }} />
            {s.label}: <strong>{gbp(s.value)}</strong>
          </span>
        ))}
      </div>
    </div>
  )
}

function Result({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl bg-emerald-50 p-4 border border-emerald-100 mb-4 text-sm text-slate-700">{children}</div>
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
      <h3 className="font-semibold text-lg mb-4 text-[#0f2a43]">{title}</h3>
      {children}
    </div>
  )
}

function project(pot: number, monthly: number, ratePct: number, feePct: number, years: number) {
  const r = (ratePct - feePct) / 100 / 12
  let bal = pot
  for (let i = 0; i < years * 12; i++) bal = bal * (1 + r) + monthly
  return bal
}

export function CompoundGrowthCalc() {
  const [pot, setPot] = useState(5000)
  const [monthly, setMonthly] = useState(200)
  const [rate, setRate] = useState(6)
  const [fee, setFee] = useState(0.5)
  const [years, setYears] = useState(20)

  const r = useMemo(() => {
    const end = project(pot, monthly, rate, fee, years)
    const endNoFee = project(pot, monthly, rate, 0, years)
    const contributions = pot + monthly * years * 12
    return { end, growth: end - contributions, contributions, feeCost: endNoFee - end }
  }, [pot, monthly, rate, fee, years])

  return (
    <Card title="Returns: what could my money grow to?">
      <Slider id="cg-pot" label="Starting amount" min={0} max={100000} step={500} value={pot} onChange={setPot} format={gbp} />
      <Slider id="cg-monthly" label="Monthly contribution" min={0} max={2000} step={10} value={monthly} onChange={setMonthly} format={gbp} />
      <Slider id="cg-rate" label="Annual growth rate" min={0} max={12} step={0.5} value={rate} onChange={setRate} format={pct} />
      <Slider id="cg-fee" label="Annual fees (platform + fund)" min={0} max={2.5} step={0.1} value={fee} onChange={setFee} format={pct} />
      <Slider id="cg-years" label="Years" min={1} max={40} value={years} onChange={setYears} format={(v) => `${v}`} />
      <Result>
        <p className="mb-1">
          Estimated value after {years} years: <strong className="text-emerald-800">{gbp(r.end)}</strong>
        </p>
        <p className="text-xs">
          Fees cost you <strong>{gbp(r.feeCost)}</strong> versus a zero-fee world.
        </p>
      </Result>
      <Bar
        segments={[
          { label: 'You put in', value: r.contributions, color: '#94a3b8' },
          { label: 'Growth', value: Math.max(0, r.growth), color: '#10b981' },
        ]}
      />
      <p className="text-xs text-slate-500 mt-3">Illustration only - real returns vary year to year and can be negative.</p>
    </Card>
  )
}

export function FeeImpactCalc() {
  const [pot, setPot] = useState(20000)
  const [monthly, setMonthly] = useState(300)
  const [years, setYears] = useState(25)
  const [feeA, setFeeA] = useState(0.25)
  const [feeB, setFeeB] = useState(1.5)
  const rate = 6

  const r = useMemo(() => {
    const a = project(pot, monthly, rate, feeA, years)
    const b = project(pot, monthly, rate, feeB, years)
    return { a, b, diff: a - b }
  }, [pot, monthly, years, feeA, feeB])

  return (
    <Card title="Fee impact: cheap vs expensive">
      <Slider id="fi-pot" label="Starting amount" min={0} max={200000} step={1000} value={pot} onChange={setPot} format={gbp} />
      <Slider id="fi-monthly" label="Monthly contribution" min={0} max={2000} step={10} value={monthly} onChange={setMonthly} format={gbp} />
      <Slider id="fi-years" label="Years" min={1} max={40} value={years} onChange={setYears} format={(v) => `${v}`} />
      <Slider id="fi-feea" label="Low-cost option (total annual fee)" min={0} max={2.5} step={0.05} value={feeA} onChange={setFeeA} format={pct} />
      <Slider id="fi-feeb" label="Higher-cost option (total annual fee)" min={0} max={2.5} step={0.05} value={feeB} onChange={setFeeB} format={pct} />
      <Result>
        <p className="mb-1">
          At {pct(feeA)} fees: <strong className="text-emerald-800">{gbp(r.a)}</strong> &nbsp;·&nbsp; At {pct(feeB)} fees:{' '}
          <strong>{gbp(r.b)}</strong>
        </p>
        <p className="text-xs">
          The expensive option leaves you <strong className="text-red-700">{gbp(r.diff)}</strong> worse off after {years} years (same {rate}%
          growth).
        </p>
      </Result>
      <Bar
        segments={[
          { label: `Kept at ${pct(feeA)} fees`, value: r.a, color: '#10b981' },
          { label: 'Lost to higher fees', value: Math.max(0, r.diff), color: '#ef4444' },
        ]}
      />
      <p className="text-xs text-slate-500 mt-3">Fees include platform + fund + advice charges. Small percentages compound into big money.</p>
    </Card>
  )
}

export function CgtCalc() {
  const [gain, setGain] = useState(10000)
  const [band, setBand] = useState<'basic' | 'higher'>('basic')
  const AEA = 3000
  const rate = band === 'basic' ? 0.18 : 0.24
  const taxable = Math.max(0, gain - AEA)
  const tax = taxable * rate

  return (
    <Card title="Capital Gains Tax: what would I owe?">
      <Slider id="cgt-gain" label="Total gains this tax year (outside ISAs)" min={0} max={100000} step={250} value={gain} onChange={setGain} format={gbp} />
      <div className="mb-4">
        <span className="text-sm text-slate-600 block mb-1">Your income tax band</span>
        <div className="grid grid-cols-2 gap-2" role="group" aria-label="Income tax band">
          {(['basic', 'higher'] as const).map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBand(b)}
              aria-pressed={band === b}
              className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                band === b ? 'border-emerald-600 bg-emerald-50 text-emerald-800' : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {b === 'basic' ? 'Basic rate (18% CGT)' : 'Higher rate (24% CGT)'}
            </button>
          ))}
        </div>
      </div>
      <Result>
        <p className="mb-1">
          Tax-free allowance: <strong>{gbp(Math.min(gain, AEA))}</strong> of {gbp(AEA)} used · Taxable gain: <strong>{gbp(taxable)}</strong>
        </p>
        <p>
          CGT to pay (2026/27): <strong className="text-emerald-800">{gbp2(tax)}</strong>
        </p>
      </Result>
      <Bar
        segments={[
          { label: 'Tax-free (AEA)', value: Math.min(gain, AEA), color: '#94a3b8' },
          { label: 'HMRC', value: tax, color: '#ef4444' },
          { label: 'You keep', value: Math.max(0, taxable - tax), color: '#10b981' },
        ]}
      />
      <p className="text-xs text-slate-500 mt-3">
        Gains inside ISAs and pensions are always CGT-free. Losses can offset gains. Report via Self Assessment.
      </p>
    </Card>
  )
}

export function IncomeTaxCalc() {
  const [salary, setSalary] = useState(40000)
  const [side, setSide] = useState(8000)
  const [divs, setDivs] = useState(1500)

  const r = useMemo(() => {
    const PA = 12570
    const BASIC_MAX = 50270
    // income tax on earnings (salary + side profit), ignoring taper above 100k for clarity
    const earnings = salary + side
    const adjPA = earnings > 100000 ? Math.max(0, PA - (earnings - 100000) / 2) : PA
    const taxableEarn = Math.max(0, earnings - adjPA)
    const basicSlice = Math.min(taxableEarn, BASIC_MAX - PA)
    const higherSlice = Math.max(0, taxableEarn - basicSlice)
    const earnTax = basicSlice * 0.2 + higherSlice * 0.4
    // Class 4 NI on side profit
    const ni = Math.min(Math.max(0, side - (PA - Math.min(salary, PA))), Math.max(0, BASIC_MAX - Math.max(salary, PA))) * 0.06
    const niHigh = side > 0 && earnings > BASIC_MAX ? Math.max(0, side - Math.max(0, BASIC_MAX - salary)) * 0.02 : 0
    // dividends on top
    const divAllow = 500
    const taxableDivs = Math.max(0, divs - divAllow)
    const divRate = earnings - adjPA + taxableDivs > BASIC_MAX - PA ? 0.3575 : 0.1075
    const divTax = taxableDivs * divRate
    return { earnTax, ni: ni + niHigh, divTax, total: earnTax + ni + niHigh + divTax, takeHome: salary + side + divs - (earnTax + ni + niHigh + divTax) }
  }, [salary, side, divs])

  return (
    <Card title="Income tax: salary + side income + dividends">
      <Slider id="it-salary" label="Salary (PAYE)" min={0} max={150000} step={500} value={salary} onChange={setSalary} format={gbp} />
      <Slider id="it-side" label="Side business profit" min={0} max={50000} step={250} value={side} onChange={setSide} format={gbp} />
      <Slider id="it-divs" label="Dividends (outside ISAs)" min={0} max={20000} step={100} value={divs} onChange={setDivs} format={gbp} />
      <Result>
        <p className="mb-1">
          Income tax: <strong>{gbp(r.earnTax)}</strong> · Class 4 NI: <strong>{gbp(r.ni)}</strong> · Dividend tax:{' '}
          <strong>{gbp2(r.divTax)}</strong>
        </p>
        <p>
          Total tax: <strong className="text-emerald-800">{gbp(r.total)}</strong> - you keep <strong>{gbp(r.takeHome)}</strong>
        </p>
      </Result>
      <Bar
        segments={[
          { label: 'You keep', value: r.takeHome, color: '#10b981' },
          { label: 'Income tax', value: r.earnTax, color: '#f59e0b' },
          { label: 'Class 4 NI', value: r.ni, color: '#ef4444' },
          { label: 'Dividend tax', value: r.divTax, color: '#8b5cf6' },
        ]}
      />
      <p className="text-xs text-slate-500 mt-3">
        2026/27 rates for England/Wales/NI, standard Personal Allowance. Employee Class 1 NI on salary is not shown. Side income and dividends are
        reported through Self Assessment.
      </p>
    </Card>
  )
}
