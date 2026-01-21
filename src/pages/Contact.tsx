import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const [submitted, setSubmitted] = useState(searchParams.get('submitted') === 'true')

  useEffect(() => {
    if (searchParams.get('submitted') === 'true') {
      setSubmitted(true)
      // Clean up URL
      window.history.replaceState({}, '', '/contact')
    }
  }, [searchParams])

  return (
    <main id="main" className="px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Investa</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100">
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
          {!submitted ? (
            <form
              action="https://formsubmit.co/its.amitsarkar@gmail.com"
              method="POST"
              className="space-y-6"
              onSubmit={() => setSubmitted(true)}
            >
              <input type="hidden" name="_subject" value="New Contact Form Submission from Investa" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://investa-amit.netlify.app/contact?submitted=true" />
              
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full border border-slate-200 rounded-lg p-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-slate-200 rounded-lg p-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full border border-slate-200 rounded-lg p-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500 transition-colors resize-y"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
                type="submit"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600 mb-6">
                Thank you for contacting us. We'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center justify-center rounded-full border-2 border-blue-600 px-6 py-2 font-semibold text-blue-700 hover:bg-blue-50 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100">
          <h2 className="text-xl font-semibold mb-3">About Investa</h2>
          <p className="text-slate-700 mb-4">
            Investa provides free, comprehensive UK investment education covering all asset classes. All information is available on-site—no courses or programs required.
          </p>
          <p className="text-sm text-slate-600">
            <strong>Note:</strong> This is educational information only, not financial advice. Always do your own research and consider consulting a qualified financial adviser for personalized advice.
          </p>
        </div>
      </div>
    </main>
  )
}
