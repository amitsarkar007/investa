import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <main className="px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="text-lg text-slate-600">
            If you have any questions or inquiries, please feel free to contact us. We are here to assist you.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow p-8 space-y-2 text-slate-600">
          <strong className="text-slate-800">Investa Bonds</strong>
          <div>123 Investment Street</div>
          <div>Financial District, City</div>
          <div>Country</div>
          <div className="pt-2">
            Email: <a className="text-blue-600" href="mailto:info@investabonds.com">info@investabonds.com</a>
          </div>
          <div>Phone: +1 (555) 123-4567</div>
        </div>

        <div className="bg-white rounded-3xl shadow p-8 space-y-4">
          <h2 className="text-2xl font-semibold">Send us a message</h2>
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault()
              setSubmitted(true)
            }}
          >
            <div>
              <label className="block mb-2 text-sm text-slate-600" htmlFor="name">
                Name
              </label>
              <input id="name" name="name" required className="w-full border border-slate-200 rounded-lg p-2" />
            </div>
            <div>
              <label className="block mb-2 text-sm text-slate-600" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-slate-200 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm text-slate-600" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full border border-slate-200 rounded-lg p-2"
              />
            </div>
            <button className="rounded-lg bg-blue-600 text-white px-4 py-2 font-semibold" type="submit">
              Submit
            </button>
            {submitted && <p className="text-sm text-green-600">Thanks! We will get back to you soon.</p>}
          </form>
        </div>
      </div>
    </main>
  )
}
