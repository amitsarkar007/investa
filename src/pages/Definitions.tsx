import { useState } from 'react'

type Definition = {
  term: string
  definition: string
  category: string
  icon: string
}

const definitions: Definition[] = [
  // Business Reporting Terms
  {
    term: '13-Week Cashflow Statement',
    definition: "It's like a special report that helps us understand how much money a business has coming in and going out over a period of 13 weeks (around 3 months). It's important because it helps us plan and make sure we have enough money to pay for things and keep the business running smoothly.",
    category: 'Business Reporting Terms',
    icon: '📊'
  },
  {
    term: 'Company Scorecard',
    definition: 'Imagine a report card for a business. It tells us how well the business is doing by looking at different important things like sales, profits, and customer satisfaction. It helps us see if the business is doing a good job and if there are any areas that need improvement.',
    category: 'Business Reporting Terms',
    icon: '📊'
  },
  {
    term: 'P&L (Profit and Loss)',
    definition: "This is a special report that shows how much money a business made (revenue) and how much it spent (expenses). It's like a summary of all the money the business earned and all the costs it had to pay. By looking at the P&L, we can see if the business is making a profit or if it's losing money.",
    category: 'Business Reporting Terms',
    icon: '📊'
  },
  {
    term: 'Capitalization Table',
    definition: 'Think of this as a table that shows who owns what part of the business. It tells us who has invested money into the business and how much they own. It\'s important because it helps us understand how the ownership of the business is divided among different people or investors.',
    category: 'Business Reporting Terms',
    icon: '📊'
  },
  {
    term: 'Cash Burn Rate or Runway',
    definition: 'This term tells us how quickly a business is spending its money. It\'s like counting how fast the money is "burning" or going away. The cash burn rate helps us see how long the business can keep running before it runs out of money (runway). It\'s important to keep an eye on this to make sure the business can stay afloat.',
    category: 'Business Reporting Terms',
    icon: '📊'
  },
  {
    term: 'EBITDA',
    definition: 'EBITDA is a big word that stands for Earnings Before Interest, Taxes, Depreciation, and Amortization. It\'s a way to measure how much money a business is making from its core operations without including other factors like taxes or interest on loans. It helps us understand the business\'s profitability and how well it\'s performing.',
    category: 'Business Reporting Terms',
    icon: '📊'
  },
  // Personal Finance Terms
  {
    term: 'Net Worth',
    definition: 'Net worth is like counting all the money and valuable things you own (like your savings, investments, and property) and subtracting all the money you owe (like loans or debts). It helps us understand how financially healthy we are and how much money we have overall.',
    category: 'Personal Finance Terms',
    icon: '💰'
  },
  {
    term: 'Accredited Investor',
    definition: 'This term is for grown-ups who have a lot of money or high income. It means they are allowed to invest in certain investments that are only available to wealthy or experienced investors. It\'s a special status that comes with some extra opportunities and risks.',
    category: 'Personal Finance Terms',
    icon: '💰'
  },
  {
    term: 'Debt-to-Assets Ratio',
    definition: 'This ratio compares how much debt or money you owe to how much stuff you own (like your house, car, or savings). It helps us see if we have too much debt compared to our assets. It\'s important because a high ratio may mean we have trouble paying off our debts.',
    category: 'Personal Finance Terms',
    icon: '💰'
  },
  {
    term: 'Cashflow',
    definition: 'Cashflow is like the money that flows in and out of your pocket. It\'s the money you receive (like your salary or income) and the money you spend (like bills or groceries). It\'s important to manage cashflow well so that you always have enough money to cover your expenses.',
    category: 'Personal Finance Terms',
    icon: '💰'
  },
  {
    term: 'Total Liquid Assets',
    definition: 'Liquid assets are things that you own that can be easily turned into cash. It could be money in your bank account, stocks you can sell quickly, or bonds that you can cash out. Total liquid assets is the sum of all these things. It\'s important because it tells us how much money we can access quickly if we need it.',
    category: 'Personal Finance Terms',
    icon: '💰'
  },
  // Downside Scenario Planning
  {
    term: 'Liquidation Preference',
    definition: 'Imagine you have a toy that you want to sell. Liquidation preference is like a special rule that says if you sell your toy, some people might get their money back before others. It\'s like certain people get to be in line first to get their money if something goes wrong.',
    category: 'Downside Scenario Planning',
    icon: '⚠️'
  },
  {
    term: 'Worst-Case Scenario',
    definition: 'Sometimes things don\'t go as planned, and it\'s important to be prepared for the worst. Worst-case scenario means thinking about what could go wrong with a business and how it might affect us. By planning for the worst, we can try to make sure we\'re ready to handle any problems that come up.',
    category: 'Downside Scenario Planning',
    icon: '⚠️'
  },
  // Payment Terms
  {
    term: '50% Upfront',
    definition: 'Imagine you\'re selling a toy, and someone wants to buy it. If they pay 50% upfront, it means they give you half of the money before you give them the toy. It helps ensure that you\'ll get some money right away and the rest later.',
    category: 'Payment Terms',
    icon: '💳'
  },
  {
    term: 'Installment Agreements',
    definition: 'Let\'s say you want to buy a big toy but don\'t have all the money at once. With an installment agreement, you can make smaller payments over time until you\'ve paid for the whole toy. It helps you buy things without having to pay all the money right away.',
    category: 'Payment Terms',
    icon: '💳'
  },
  {
    term: 'Lines of Credit',
    definition: 'Lines of credit are like having a special pot of money that you can borrow from whenever you need it. It\'s like having a toy bank where you can take out money when you want to buy something. But remember, you have to pay back the money you borrow, just like returning the toys you borrow from a friend.',
    category: 'Payment Terms',
    icon: '💳'
  },
  {
    term: 'CIA (Cash in Advance)',
    definition: 'Cash in advance means that when you sell a toy, the person buying it has to pay you right away before they can get the toy. It\'s like asking for the money upfront before giving them the toy.',
    category: 'Payment Terms',
    icon: '💳'
  },
  {
    term: 'PIA (Payment in Advance)',
    definition: 'Payment in advance is similar to cash in advance. It means the person buying the toy has to pay you before you give them the toy. It\'s like buying the toy first and paying for it right away.',
    category: 'Payment Terms',
    icon: '💳'
  },
  {
    term: 'Net 7, 10, 15, 30, 60, or 90',
    definition: 'Imagine you sell a toy and give the buyer an invoice with a due date. If it says "Net 7," it means they have to pay you within 7 days after they receive the invoice. The number (7, 10, 15, etc.) tells us how many days they have to pay.',
    category: 'Payment Terms',
    icon: '💳'
  },
  {
    term: 'EOM (End of Month)',
    definition: 'End of month means that if you sell a toy and the invoice says "EOM," it means the buyer has to pay you by the last day of the month. It\'s like setting a deadline for them to pay by the end of the month.',
    category: 'Payment Terms',
    icon: '💳'
  },
  {
    term: 'COD (Cash on Delivery)',
    definition: 'Cash on delivery is when the person buying the toy has to pay you in cash right when you give them the toy. It\'s like getting the money immediately when you hand over the toy.',
    category: 'Payment Terms',
    icon: '💳'
  },
  {
    term: 'CND (Cash Next Delivery)',
    definition: 'Cash next delivery means the buyer has to pay you in cash the next time you deliver the toy. It\'s like asking for the money right after giving them the toy.',
    category: 'Payment Terms',
    icon: '💳'
  },
  {
    term: 'CBS (Cash Before Shipment)',
    definition: 'Cash before shipment means the buyer has to pay you in cash before you send or deliver the toy. It\'s like making sure you get the money before you send the toy to them.',
    category: 'Payment Terms',
    icon: '💳'
  },
  // Due Diligence Terms
  {
    term: 'LOI (Letter of Intent)',
    definition: 'LOI stands for Letter of Intent. It\'s like writing a letter to say you\'re interested in buying or investing in something. It\'s not a final agreement, but it shows that you\'re serious about the idea and want to learn more.',
    category: 'Due Diligence Terms',
    icon: '📋'
  },
  {
    term: 'Purchase Agreement',
    definition: 'When you buy something, like a toy or a business, you usually sign a purchase agreement. It\'s like a special paper that says you promise to buy it and the seller promises to sell it. It has all the important details, like the price, what you\'re buying, and any conditions or rules.',
    category: 'Due Diligence Terms',
    icon: '📋'
  },
  {
    term: 'Operating Agreement',
    definition: 'An operating agreement is like a set of rules or instructions for how a business should be run. It\'s like a toy instruction manual that tells everyone involved in the business what they should do and how they should work together.',
    category: 'Due Diligence Terms',
    icon: '📋'
  },
  {
    term: 'Add-backs',
    definition: 'Add-backs are like special things we add or count as extra when we look at the financial information of a business. It\'s like finding some extra toys hidden under the bed and adding them to the total count.',
    category: 'Due Diligence Terms',
    icon: '📋'
  },
  {
    term: 'Break-up Fee',
    definition: 'Sometimes when two businesses are planning to work together, they sign an agreement. If one of them changes their mind and doesn\'t want to go ahead, they may have to pay a break-up fee. It\'s like saying sorry for changing their mind and compensating the other party for the time and effort spent.',
    category: 'Due Diligence Terms',
    icon: '📋'
  },
  {
    term: 'Data Room',
    definition: 'A data room is like a secret place where important documents and information about a business are kept. It\'s like a special toy chest with all the important papers and files related to the business.',
    category: 'Due Diligence Terms',
    icon: '📋'
  },
  {
    term: 'Due Diligence Questionnaire or Checklist',
    definition: 'When someone wants to buy or invest in a business, they often have a lot of questions to ask. A due diligence questionnaire or checklist is like a list of questions that they go through to learn more about the business. It\'s like asking the seller a lot of questions to make sure everything is okay.',
    category: 'Due Diligence Terms',
    icon: '📋'
  },
  {
    term: 'Guarantees',
    definition: 'Guarantees are like promises that someone makes to be responsible for something. It\'s like when a friend promises to fix a toy if it breaks. In business, guarantees can be promises to fix problems or take care of something if it doesn\'t work as expected.',
    category: 'Due Diligence Terms',
    icon: '📋'
  },
  {
    term: 'Historical Lawsuits',
    definition: 'Sometimes businesses get involved in legal problems called lawsuits. Historical lawsuits mean looking at the past legal problems a business has faced. It helps us understand if there have been any challenges or issues in the past.',
    category: 'Due Diligence Terms',
    icon: '📋'
  },
  // Debt Terms
  {
    term: 'Interest (Variable vs Fixed)',
    definition: 'Imagine you borrowed some toys from a friend, and when you give them back, you also have to give something extra as a thank-you. That extra thing is called interest. Variable interest means the amount you give might change over time, like playing with different toys each time you return them. Fixed interest means the amount you give stays the same, like always giving two extra toys back no matter how many toys you borrowed.',
    category: 'Debt Terms',
    icon: '💸'
  },
  {
    term: 'SBA Loans',
    definition: 'SBA stands for Small Business Administration. It\'s like a special place that helps small businesses borrow money. SBA loans are loans given to small businesses to help them start or grow. It\'s like borrowing toys from a special toy lending library for small businesses.',
    category: 'Debt Terms',
    icon: '💸'
  },
  {
    term: 'Debt Service Ratio',
    definition: 'Debt service ratio is like a way to see if a business can handle the money it owes. It compares the money the business has to pay for its debts (like loans) with the money it earns. It helps us understand if the business has enough money to cover its debts and still have some left over.',
    category: 'Debt Terms',
    icon: '💸'
  },
  {
    term: 'Warrants',
    definition: 'Warrants are like special coupons or tickets that give you the right to buy something at a certain price in the future. It\'s like having a special toy coupon that lets you buy a toy for a discounted price later.',
    category: 'Debt Terms',
    icon: '💸'
  },
  {
    term: 'Buy-out Provision',
    definition: 'A buy-out provision is like a special rule that says if certain things happen, someone can buy or sell a business or a part of it. It\'s like having a special option to buy a friend\'s toy collection if they decide to sell it.',
    category: 'Debt Terms',
    icon: '💸'
  },
  {
    term: 'Closings',
    definition: 'Closings are like special events or meetings where important documents are signed and money is exchanged. It\'s like having a ceremony to finalize a deal, just like when you give back borrowed toys and say goodbye to your friend.',
    category: 'Debt Terms',
    icon: '💸'
  },
  {
    term: 'Debt Service Cost',
    definition: 'Debt service cost is like the money you have to pay for borrowing toys. It includes both the amount you borrowed (the principal) and the extra money you have to give back (interest). It\'s important to know the debt service cost to understand how much you\'ll have to repay.',
    category: 'Debt Terms',
    icon: '💸'
  },
  {
    term: 'Promissory Notes',
    definition: 'Promissory notes are like special IOUs or promises to repay borrowed money. It\'s like writing a note to your friend, saying you\'ll give back the toys you borrowed and when you\'ll do it. It helps make sure everyone knows the terms of the borrowing agreement.',
    category: 'Debt Terms',
    icon: '💸'
  },
  // Business Operating Terms
  {
    term: 'Budget',
    definition: 'A budget is like a plan that helps you decide how much money you should spend on different things. It\'s like making a list of toys you want to buy and how much you can afford to spend. A budget helps you stay organized and make sure you have enough money for everything you need.',
    category: 'Business Operating Terms',
    icon: '📈'
  },
  {
    term: 'Capacity Planning',
    definition: 'Capacity planning is like figuring out how many toys you can make or how many customers you can serve. It helps businesses know if they have enough resources (like time, money, and people) to meet the demands of their customers.',
    category: 'Business Operating Terms',
    icon: '📈'
  },
  {
    term: 'Quality Assurance',
    definition: 'Quality assurance is like making sure toys are made or delivered in the best possible way. It\'s like checking the toys to make sure they are safe, work well, and make kids happy. Quality assurance helps businesses make sure their products or services are of high quality.',
    category: 'Business Operating Terms',
    icon: '📈'
  },
  {
    term: 'Supply Chain',
    definition: 'A supply chain is like a long journey that toys take from being made to reaching the hands of customers. It involves many steps, like getting materials, making the toys, packaging them, and delivering them to stores. Managing the supply chain means making sure everything happens smoothly and efficiently.',
    category: 'Business Operating Terms',
    icon: '📈'
  },
  {
    term: 'Procurement',
    definition: 'Procurement is like going to a toy store to buy toys for your business. It involves finding the best toys at the best prices from suppliers. Procurement helps businesses get the toys or materials they need to operate.',
    category: 'Business Operating Terms',
    icon: '📈'
  },
  // Revenue Terms
  {
    term: 'Net Revenue',
    definition: 'Net revenue is like the money a business earns after taking away all the costs and expenses. It\'s like counting the money you make from selling toys and subtracting the money you spent to make or sell them. Net revenue shows how much money is left over.',
    category: 'Revenue Terms',
    icon: '💵'
  },
  {
    term: 'Net Income',
    definition: 'Net income is like the money a business earns after subtracting all the costs, expenses, and taxes. It\'s like the money you have left after paying for toys, rent, and other things, and after giving a part of it to the government as taxes.',
    category: 'Revenue Terms',
    icon: '💵'
  },
  {
    term: 'Gross Revenue',
    definition: 'Gross revenue is like the total amount of money a business makes from selling toys without taking away any costs. It\'s like counting all the money you earned from selling toys without considering the money you spent to make or sell them.',
    category: 'Revenue Terms',
    icon: '💵'
  },
  {
    term: 'Gross Income',
    definition: 'Gross income is like the money a business earns from selling toys without taking away the costs directly related to making or selling them. It\'s like counting the money you made from selling toys before subtracting things like the cost of materials or shipping.',
    category: 'Revenue Terms',
    icon: '💵'
  },
  {
    term: 'Profit',
    definition: 'Profit is like the money a business makes after subtracting all the costs and expenses. It\'s like counting the money you have left after paying for everything, like toys, rent, and wages. Profit is what helps a business grow and invest in new things.',
    category: 'Revenue Terms',
    icon: '💵'
  },
  {
    term: 'SDE (Seller\'s Discretionary Earnings)',
    definition: 'SDE is a way to measure the profits of a small business. It\'s like counting all the money the business earns and adding back certain expenses that the owner doesn\'t need to pay for. SDE helps understand how much money the business makes for the owner to use.',
    category: 'Revenue Terms',
    icon: '💵'
  },
  {
    term: 'Owner\'s Salary',
    definition: 'Owner\'s salary is like the money the owner of a business pays themselves for their work. It\'s like giving yourself an allowance or a payment for all the time and effort you put into running the business.',
    category: 'Revenue Terms',
    icon: '💵'
  },
  // Investing Terms
  {
    term: 'Fund Term',
    definition: 'A fund term is like the length of time that an investment fund will be active. It\'s like saying how long the toy fund will be around to buy and sell toys.',
    category: 'Investing Terms',
    icon: '📊'
  },
  {
    term: 'Investment Period',
    definition: 'The investment period is like a specific time when you can put money into an investment fund. It\'s like a toy shop being open for a limited time to accept new toys for the fund.',
    category: 'Investing Terms',
    icon: '📊'
  },
  {
    term: 'LP (Limited Partner)',
    definition: 'An LP is like a person who puts money into an investment fund but doesn\'t have full control over the fund\'s decisions. It\'s like being a toy investor who gives money to a toy fund manager to make investment decisions.',
    category: 'Investing Terms',
    icon: '📊'
  },
  {
    term: 'GP (General Partner)',
    definition: 'A GP is like a person or group responsible for managing an investment fund and making decisions on behalf of the fund and its partners. It\'s like being a toy fund manager who decides which toys to buy or sell.',
    category: 'Investing Terms',
    icon: '📊'
  },
  {
    term: 'Distribution Waterfall',
    definition: 'A distribution waterfall is like a special way of sharing the profits from an investment among the partners in a fund. It\'s like a system that decides how the money is divided and who gets it first, second, and so on.',
    category: 'Investing Terms',
    icon: '📊'
  },
  {
    term: 'GP or LP Clawbacks',
    definition: 'A clawback is like a rule that says if someone received too much money in the past, they might have to give some of it back. It\'s like taking back some toys that were given as a gift but were later found to be too many.',
    category: 'Investing Terms',
    icon: '📊'
  },
  {
    term: 'Catchups',
    definition: 'Catchups are like extra toys or bonuses that some partners in an investment fund might receive. It\'s like getting extra toys when you\'ve been a good toy investor and helped the fund do well.',
    category: 'Investing Terms',
    icon: '📊'
  },
  {
    term: 'Capital Calls',
    definition: 'Capital calls are like special messages that ask partners in an investment fund to give more money when needed. It\'s like getting a call or a reminder to bring more toys to the toy fund when there\'s a need.',
    category: 'Investing Terms',
    icon: '📊'
  },
  {
    term: 'In-kind Distributions',
    definition: 'In-kind distributions are like getting paid in toys instead of money. Instead of getting money back from an investment, you might receive toys or other assets as your share of the profits.',
    category: 'Investing Terms',
    icon: '📊'
  },
  {
    term: 'Management Fees',
    definition: 'Management fees are like payments that the fund manager receives for taking care of the investment fund. It\'s like a fee or a payment for the work they do to make sure the toys in the fund grow in value.',
    category: 'Investing Terms',
    icon: '📊'
  },
  {
    term: 'Fund Expenses',
    definition: 'Fund expenses are like the costs or fees that are associated with running an investment fund. It\'s like the money needed to cover things like rent, salaries, and other expenses for managing the fund.',
    category: 'Investing Terms',
    icon: '📊'
  },
  {
    term: 'Gates',
    definition: 'Gates are like special rules that control the flow of money in or out of an investment fund. It\'s like having a gatekeeper who decides when and how much money can come in or go out of the toy fund.',
    category: 'Investing Terms',
    icon: '📊'
  },
  {
    term: 'Lockups',
    definition: 'Lockups are like special rules that say you can\'t touch or sell your investment for a certain period of time. It\'s like keeping your toys in a locked box and not being able to play with or sell them until a specific time has passed.',
    category: 'Investing Terms',
    icon: '📊'
  },
  // Business Acquisition Terms
  {
    term: 'Key Person Provision',
    definition: 'A key person provision is like a special rule that says if someone important in a business, like the owner or a key employee, can\'t be there anymore, it might affect the deal or the business. It\'s like understanding that if a friend who knows a lot about toys can\'t be part of the toy business anymore, it might change things.',
    category: 'Business Acquisition Terms',
    icon: '🤝'
  },
  {
    term: 'Owner Transfer Period',
    definition: 'An owner transfer period is like a specific time when the owner of a business can transfer or sell their ownership to someone else. It\'s like having a limited time to find a new owner for your toy business if you want to sell it.',
    category: 'Business Acquisition Terms',
    icon: '🤝'
  },
  {
    term: 'Noncompete',
    definition: 'Noncompete is like a promise that someone makes to not compete with a business they used to be a part of. It\'s like a friend who agrees not to start a toy business that will compete with your toy store if they decide to leave.',
    category: 'Business Acquisition Terms',
    icon: '🤝'
  },
  {
    term: 'Indemnification',
    definition: 'Indemnification is like a way to protect someone from financial loss or damage. It\'s like having insurance that helps you recover or get money if something bad happens related to the business deal.',
    category: 'Business Acquisition Terms',
    icon: '🤝'
  },
  {
    term: 'Reporting',
    definition: 'Reporting is like keeping track of and sharing important information about a business. It\'s like telling someone about all the toys you sold, how much money you made, and other important details so they can understand the business better.',
    category: 'Business Acquisition Terms',
    icon: '🤝'
  },
  {
    term: 'Financial Reporting Requirements',
    definition: 'Financial reporting requirements are like rules or guidelines that say how a business should report its financial information. It\'s like having a checklist of things you need to share, like your toy sales, expenses, and profits, so that others can understand your business better.',
    category: 'Business Acquisition Terms',
    icon: '🤝'
  },
  {
    term: 'Non-solicitation',
    definition: 'Non-solicitation is like a promise not to persuade or hire away employees or customers from a business. It\'s like not asking your friend\'s toy store employees to come and work for your toy business.',
    category: 'Business Acquisition Terms',
    icon: '🤝'
  }
]

const categories = ['All', ...Array.from(new Set(definitions.map(def => def.category)))]

export default function Definitions() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredDefinitions = definitions.filter((def) => {
    const matchesCategory = selectedCategory === 'All' || def.category === selectedCategory
    const matchesSearch = def.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         def.definition.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main id="main" className="px-6 py-16">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Financial & Business Definitions</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Clear, beginner-friendly explanations of financial and business terms. No jargon, just plain language.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border border-slate-100">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-slate-700 mb-2">
                Search definitions
              </label>
              <input
                id="search"
                type="text"
                placeholder="Type to search..."
                className="w-full border border-slate-200 rounded-lg p-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="md:w-64">
              <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                Category
              </label>
              <select
                id="category"
                className="w-full border border-slate-200 rounded-lg p-3 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDefinitions.map((def) => (
            <div
              key={def.term}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl" aria-hidden="true">{def.icon}</span>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wide text-blue-600 font-semibold mb-1">
                    {def.category}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{def.term}</h3>
                </div>
              </div>
              <p className="text-slate-600 leading-relaxed">{def.definition}</p>
            </div>
          ))}
        </div>

        {filteredDefinitions.length === 0 && (
          <div className="bg-white rounded-3xl shadow-lg p-12 text-center border border-slate-100">
            <p className="text-lg text-slate-600 mb-4">No definitions found matching your search.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-100">
          <h2 className="text-2xl font-semibold mb-4">About These Definitions</h2>
          <p className="text-slate-700 mb-4">
            These definitions are written in plain language for complete beginners. We avoid jargon and explain concepts as if you're brand new to finance and business.
          </p>
          <p className="text-sm text-slate-600">
            <strong>Note:</strong> This is educational information only, not financial advice. Always consult with qualified professionals for specific business or financial decisions.
          </p>
        </div>
      </div>
    </main>
  )
}
