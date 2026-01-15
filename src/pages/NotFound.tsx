import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow p-8 text-center space-y-4">
        <h1 className="text-4xl font-extrabold">Page not found</h1>
        <p className="text-slate-600">The page you are looking for does not exist. Try the homepage instead.</p>
        <Link className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold" to="/">
          Back to home
        </Link>
      </div>
    </main>
  )
}
