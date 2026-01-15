import { Link } from 'react-router-dom'

const steps = [
  'Understand what investing is and is not.',
  'Learn the difference between saving and investing.',
  'Start with bonds to build confidence and stability.',
  'Use simple tools to estimate long-term growth.'
]

export default function Start() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold">Start Here</h1>
          <p className="text-lg text-slate-600">
            Investing is simply using your money to help you later. This site is for complete beginners with no finance
            background needed. We do not promise quick wins.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow p-8 space-y-4">
          <h2 className="text-2xl font-semibold">A gentle starting point</h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            {steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link className="rounded-full bg-blue-600 text-white px-5 py-2 font-semibold" to="/bonds">
            Explore bonds
          </Link>
          <Link className="rounded-full border border-slate-300 px-5 py-2 font-semibold text-slate-700" to="/learning">
            Learning paths
          </Link>
        </div>
      </div>
    </main>
  )
}
