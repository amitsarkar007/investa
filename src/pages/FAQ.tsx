const faqs = [
  {
    question: 'What is Investa?',
    answer:
      'Investa is a free resource providing comprehensive guides on UK investment asset classes. We explain investing basics in plain language—no courses or programs, just clear information.'
  },
  {
    question: 'Do I need to open an account?',
    answer:
      'No account is required. All guides and tools are free to use. If you want to invest later, browse our guides and choose a regulated platform that fits your needs.'
  },
  {
    question: 'What types of investments do you cover?',
    answer:
      'We cover stocks, bonds, mutual funds, ETFs, real estate, commodities, cryptocurrencies, and more. See the Asset Classes section for an overview.'
  },
  {
    question: 'How can I contact support?',
    answer: 'Visit the Contact page to send us a message. We are happy to help.'
  }
]

export default function FAQ() {
  return (
    <main className="px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-extrabold">FAQs</h1>
          <p className="text-lg text-slate-600">Clear answers to common beginner questions.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="bg-white rounded-2xl p-5 shadow focus-within:ring-2 focus-within:ring-blue-500">
              <summary className="font-semibold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded">{faq.question}</summary>
              <p className="text-sm text-slate-600 mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </main>
  )
}
