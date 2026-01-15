const learningPaths = [
  {
    title: 'I know nothing',
    steps: ['Read Start Here', 'Why investing matters', 'Basic money concepts', 'Bonds basics'],
    time: 'Estimated time: 1-2 hours'
  },
  {
    title: 'I am ready to start',
    steps: ['Beginner strategies', 'Getting started steps', 'Mistakes to avoid'],
    time: 'Estimated time: 45 minutes'
  },
  {
    title: 'I already started',
    steps: ['Risk & emotions', 'Long-term mindset', 'Review asset classes'],
    time: 'Estimated time: 45 minutes'
  }
]

export default function Learning() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold">Learning Paths</h1>
          <p className="text-lg text-slate-600">
            Choose a path that matches where you are today. Keep it simple and move at your own pace.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {learningPaths.map((path) => (
            <div key={path.title} className="bg-white rounded-3xl shadow p-6 space-y-4">
              <div>
                <h2 className="text-xl font-semibold">{path.title}</h2>
                <p className="text-sm text-slate-500">{path.time}</p>
              </div>
              <ul className="list-disc list-inside text-sm text-slate-600 space-y-2">
                {path.steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
