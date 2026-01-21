export default function About() {
  return (
    <main id="main" className="px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Investa</h1>
          <p className="text-xl text-slate-700 leading-relaxed">
            <strong>Investa helps you understand UK investing.</strong> We provide free, comprehensive guides on all asset classes—stocks, bonds, property, commodities, and more. Everything you need is right here on the website. No courses, no programs, just clear information when you need it.
          </p>
        </div>

        <section className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 space-y-6">
          <h2 className="text-2xl font-semibold">How This Site Works</h2>
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="font-semibold text-lg mb-2">Free Guides</h3>
              <p>Comprehensive guides on every major UK investment type. Written in plain language for complete beginners. No jargon, no judgment.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Interactive Tools</h3>
              <p>Calculators and visualizations to help you understand concepts like compound growth, inflation impact, and risk vs return.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">No Courses or Programs</h3>
              <p>We don't offer structured courses, lessons, or education programs. All information is freely available on the website. Read what you need, when you need it.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Editorially Independent</h3>
              <p>Our guides are written to help you, not sell you anything. We may include affiliate links to platforms (clearly disclosed), but our content remains independent and focused on your benefit.</p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100 space-y-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-slate-700 leading-relaxed">
            To make UK investing accessible to everyone. We believe everyone should understand how different asset classes work, regardless of their background or experience. Our goal is to remove fear and overwhelm, replacing it with clarity and confidence.
          </p>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 space-y-6">
          <h2 className="text-2xl font-semibold">What Makes Us Different</h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>Free & Always Free:</strong> Everything on this site is free. No paywalls, no premium content, no courses to buy.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>Beginner-Focused:</strong> Written for people with zero finance background. We explain things like you're brand new—because you might be.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>UK-Specific:</strong> All guides focus on UK markets, regulations, and platforms. No generic international advice.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>Visual Learning:</strong> Charts, graphs, and calculators help you understand concepts, not just read about them.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">✓</span>
              <span><strong>No Hype:</strong> We focus on long-term, calm investing. No get-rich-quick schemes, no trading tips, no hype.</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 space-y-4">
          <h2 className="text-2xl font-semibold">Important Legal Notice</h2>
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 text-sm text-yellow-900">
            <p className="font-semibold mb-2">This website provides educational information only, not financial advice.</p>
            <p>We are not regulated financial advisers. The information on this site is for educational purposes to help you understand investing concepts. It should not be considered as personalized financial advice tailored to your circumstances.</p>
            <p className="mt-2">Always do your own research and consider seeking advice from a qualified financial adviser before making investment decisions.</p>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 space-y-4">
          <h2 className="text-2xl font-semibold">How We're Funded</h2>
          <p className="text-slate-700">
            This site is free to use. We may earn commissions through affiliate links to investment platforms (always clearly disclosed). This helps us keep the site running and free for everyone. Our editorial content remains independent—we only recommend platforms we believe are genuinely useful.
          </p>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8 border border-slate-100 space-y-4">
          <h2 className="text-2xl font-semibold">Contact & Feedback</h2>
          <p className="text-slate-700">
            Have questions, suggestions, or found an error? We'd love to hear from you. Visit our <a href="/contact" className="text-blue-600 hover:underline font-semibold">Contact page</a> to get in touch.
          </p>
        </section>
      </div>
    </main>
  )
}
