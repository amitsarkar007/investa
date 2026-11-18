type SliderProps = {
  id: string
  label: string
  min: number
  max: number
  step?: number
  value: number
  onChange: (v: number) => void
  format: (v: number) => string
}

export default function Slider({ id, label, min, max, step = 1, value, onChange, format }: SliderProps) {
  const pct = max === min ? 0 : ((value - min) / (max - min)) * 100
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between mb-1">
        <label htmlFor={id} className="text-sm text-slate-600">
          {label}
        </label>
        <span className="text-sm font-semibold text-[#0f2a43]">{format(value)}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer accent-emerald-600"
        style={{
          background: `linear-gradient(to right, #10b981 0%, #10b981 ${pct}%, #e2e8f0 ${pct}%, #e2e8f0 100%)`,
        }}
        aria-valuetext={format(value)}
      />
      <div className="flex justify-between text-[11px] text-slate-400 mt-0.5">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  )
}
