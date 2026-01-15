export default function About() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold">About Investa</h1>
          <p className="text-lg text-slate-600">
            Investa is your guide to understanding investment asset classes in the UK. Whether you are a complete
            beginner or want to diversify, our goal is to make investing feel simple, calm, and achievable.
          </p>
        </div>
        <div className="bg-white rounded-3xl shadow p-8 space-y-4">
          <h2 className="text-2xl font-semibold">Our values</h2>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Integrity: We uphold high standards in everything we publish.</li>
            <li>Client focus: Beginners come first, with zero judgment.</li>
            <li>Innovation: We simplify complex topics without watering them down.</li>
            <li>Excellence: We aim for clarity and accuracy in every lesson.</li>
          </ul>
        </div>
        <div className="bg-white rounded-3xl shadow p-8 space-y-4">
          <h2 className="text-2xl font-semibold">Our team</h2>
          <p className="text-slate-600">
            Our team builds beginner-friendly guidance so you can make informed decisions with confidence. We focus on
            clarity, patience, and long-term thinking rather than hype or short-term trends.
          </p>
        </div>
      </div>
    </main>
  )
}
