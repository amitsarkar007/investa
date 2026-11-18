export type ContentSection = {
  title: string
  diagram?: string
  body?: string
  bullets?: string[]
  table?: { head: string[]; rows: string[][] }
}

export type ContentPageData = {
  path: string
  title: string
  tagline: string
  description: string
  lastChecked: string
  sections: ContentSection[]
  sources: { label: string; url: string }[]
  related: { label: string; to: string }[]
  warning?: string
}

export const contentPages: ContentPageData[] = [
  {
    path: '/tax',
    title: 'Tax & Allowances Hub',
    tagline: 'The UK tax rules every investor should know, in plain English.',
    description:
      'UK investment tax explained: Capital Gains Tax rates and the £3,000 annual exempt amount, the £20,000 ISA allowance, dividend tax, and how to report investment gains on Self Assessment.',
    lastChecked: '18 November 2026',
    sections: [
      {
        title: 'Why tax matters more than picking winners',
        body: 'Two investors can hold the same funds and end up with very different returns, purely because of tax. The UK gives you generous tax-free wrappers and allowances - but only if you know they exist and use them. This hub covers the four things that matter most: ISAs, Capital Gains Tax, dividend tax, and how to tell HMRC what you owe.',
      },
      {
        title: 'The big numbers for 2026/27',
        diagram: 'tax-bands',
        body: 'The UK tax year runs from 6 April to 5 April. These are the key figures for the 2026 to 2027 tax year, taken from GOV.UK:',
        table: {
          head: ['Allowance or rate', '2026 to 2027'],
          rows: [
            ['ISA allowance (all ISA types combined)', '£20,000 per tax year'],
            ['Capital Gains Tax annual exempt amount (individuals)', '£3,000'],
            ['Capital Gains Tax rates (individuals)', '18% (basic rate) / 24% (higher rate)'],
            ['Dividend allowance', '£500 per tax year'],
            ['Dividend tax rates above the allowance', '10.75% basic / 35.75% higher / 39.35% additional'],
            ['Personal Allowance (income tax)', '£12,570'],
            ['Income tax bands (England, Wales, NI)', '20% / 40% / 45% above the Personal Allowance'],
            ['Employee National Insurance (Class 1)', '8% main rate / 2% above £50,270'],
          ],
        },
      },
      {
        title: 'The order most beginners should think in',
        bullets: [
          'First: use your ISA allowance. Investments inside an ISA are free of UK income tax and Capital Gains Tax.',
          'Second: know your Capital Gains Tax annual exempt amount. Gains outside an ISA are only taxed above £3,000 per tax year.',
          'Third: dividends outside an ISA have their own £500 allowance, then are taxed at your income tax band.',
          'Finally: if you owe tax, you usually tell HMRC through Self Assessment - there is a whole page on that here.',
        ],
      },
      {
        title: 'Where to go next',
        bullets: [
          'Capital Gains Tax - rates, the allowance, and a worked example.',
          'Self Assessment - who must file, the deadlines, and exactly how to report investment gains and foreign income.',
          'ISAs & Tax Allowances - the wrappers and allowances that keep more of your return.',
        ],
      },
    ],
    sources: [
      { label: 'GOV.UK - Capital Gains Tax rates and allowances', url: 'https://www.gov.uk/guidance/capital-gains-tax-rates-and-allowances' },
      { label: 'GOV.UK - Individual Savings Accounts (ISAs)', url: 'https://www.gov.uk/individual-savings-accounts' },
      { label: 'GOV.UK - Tax on dividends', url: 'https://www.gov.uk/tax-on-dividends' },
      { label: 'GOV.UK - Self Assessment tax returns', url: 'https://www.gov.uk/self-assessment-tax-returns' },
    ],
    related: [
      { label: 'Income Tax Bands & Allowances', to: '/tax/income-tax' },
      { label: 'Extra Income & Your Tax', to: '/tax/extra-income' },
      { label: 'Capital Gains Tax', to: '/tax/capital-gains-tax' },
      { label: 'Self Assessment', to: '/tax/self-assessment' },
      { label: 'ISAs & Tax Allowances', to: '/tax/isa-and-allowances' },
      { label: 'What Investing Costs', to: '/costs' },
    ],
    warning: 'Tax rules change and depend on your personal circumstances. This is education, not tax or financial advice.',
  },
  {
    path: '/tax/capital-gains-tax',
    title: 'Capital Gains Tax, Explained',
    tagline: 'What you pay when you sell investments at a profit - and how to pay less of it, legally.',
    description:
      'UK Capital Gains Tax for investors in plain English: the £3,000 annual exempt amount, the 18% and 24% rates, a worked example, and how to report and pay via Self Assessment.',
    lastChecked: '18 November 2026',
    sections: [
      {
        title: 'What Capital Gains Tax is',
        diagram: 'cgt-worked',
        body: 'Capital Gains Tax (CGT) is the tax on the profit when you sell or "dispose of" something that has increased in value - shares, funds, ETFs, a second property, crypto, and more. You are taxed on the gain (what you sold it for minus what you paid, minus certain costs), not on the full sale price. Buying and holding triggers nothing: CGT only becomes relevant when you dispose of an asset.',
      },
      {
        title: 'The tax-free allowance: the annual exempt amount',
        body: 'Everyone gets a tax-free allowance for gains each tax year, called the annual exempt amount (AEA). You only pay CGT on total gains above it, after deducting losses and reliefs.',
        table: {
          head: ['Tax year', 'Annual exempt amount (individuals)'],
          rows: [
            ['2026 to 2027', '£3,000'],
            ['2025 to 2026', '£3,000'],
            ['2024 to 2025', '£3,000'],
            ['2023 to 2024', '£6,000'],
            ['2022 to 2023', '£12,300'],
          ],
        },
      },
      {
        title: 'The rates for individuals',
        body: 'For gains other than carried interest, individuals currently pay 18% or 24%. Which rate applies depends on your income: add your taxable gains to your taxable income - the part that falls within the basic-rate income tax band is taxed at 18%, and anything above it at 24%. Gains qualifying for Business Asset Disposal Relief or Investors\u2019 Relief are taxed at 14%. Trustees and personal representatives pay 24%.',
        bullets: [
          'Basic-rate taxpayers: 18% on gains that fall within the basic-rate band.',
          'Higher and additional-rate taxpayers: 24%.',
          'Business Asset Disposal Relief / Investors\u2019 Relief: 14%.',
        ],
      },
      {
        title: 'A worked example',
        body: 'Imagine you sell shares held outside an ISA for £20,000 that you bought for £14,000. Your gain is £6,000. After the £3,000 annual exempt amount, £3,000 is taxable. If you are a basic-rate taxpayer with room in the basic band, the CGT bill is 18% of £3,000 = £540. Inside an ISA, the same sale would cost you £0 in tax.',
      },
      {
        title: 'What does not trigger CGT',
        bullets: [
          'Investments held inside an ISA or a pension - gains are tax-free.',
          'Simply holding an investment while it rises in value (no disposal).',
          'Transfers between spouses or civil partners.',
          'Your main home, in most cases (private residence relief).',
        ],
      },
      {
        title: 'Reporting and paying',
        bullets: [
          'Most people report gains through a Self Assessment tax return (the capital gains summary pages, form SA108).',
          'For UK residential property, you must usually report and pay any CGT within 60 days of the sale completing.',
          'If you make a loss, you can offset it against gains - but you must claim losses, so keep records and report them to HMRC.',
          'Keep purchase and sale records (contract notes, statements) for every disposal.',
        ],
      },
      {
        title: 'Legitimate ways to reduce the bill',
        bullets: [
          'Use your ISA allowance first - up to £20,000 per tax year (2026/27) grows free of CGT.',
          'Use each tax year\u2019s £3,000 exempt amount - gains cannot be carried forward, so spreading sales across tax years can help.',
          'Offset losses against gains in the same or future years.',
          'Transfer assets between spouses or civil partners tax-free to use both allowances and lower tax bands.',
        ],
      },
    ],
    sources: [
      { label: 'GOV.UK - Capital Gains Tax rates and allowances', url: 'https://www.gov.uk/guidance/capital-gains-tax-rates-and-allowances' },
      { label: 'GOV.UK - Capital Gains Tax: what you pay it on, rates and allowances', url: 'https://www.gov.uk/capital-gains-tax' },
      { label: 'GOV.UK - Tax when you sell property', url: 'https://www.gov.uk/tax-sell-property' },
    ],
    related: [
      { label: 'Self Assessment: reporting gains', to: '/tax/self-assessment' },
      { label: 'ISAs & Tax Allowances', to: '/tax/isa-and-allowances' },
      { label: 'Tax & Allowances Hub', to: '/tax' },
    ],
    warning: 'CGT rules depend on your circumstances and change over time. Always confirm the current rates on GOV.UK before making decisions.',
  },
  {
    path: '/tax/self-assessment',
    title: 'Self Assessment for Investors',
    tagline: 'How to report your investment gains and income to HMRC - deadlines included.',
    description:
      'How UK investors report capital gains, dividends and foreign income on Self Assessment: who must file, the 5 October, 31 October and 31 January deadlines, which forms to use, and what records to keep.',
    lastChecked: '18 November 2026',
    sections: [
      {
        title: 'Who must send a tax return',
        body: 'You must send a Self Assessment tax return if, in the last tax year (6 April to 5 April), any of these applied:',
        bullets: [
          'You had to pay Capital Gains Tax when you sold or disposed of something that increased in value.',
          'You were self-employed as a sole trader and earned more than £1,000.',
          'You were a partner in a business partnership.',
          'HMRC asked you to send one.',
        ],
      },
      {
        title: 'Dividends and savings interest',
        body: 'Dividend income above both your unused Personal Allowance and the £500 dividend allowance must be reported to HMRC. If you already file a return, it goes on there. If you do not, HMRC may be able to collect the tax by adjusting your tax code instead - check the GOV.UK dividends guidance for your situation. Dividends from shares held in an ISA are tax-free and are not reported.',
      },
      {
        title: 'The deadlines that matter',
        diagram: 'payments-on-account',
        table: {
          head: ['Deadline', 'What happens'],
          rows: [
            ['5 October', 'Tell HMRC you need to complete a return for the previous tax year (register for Self Assessment if it is your first time).'],
            ['31 October', 'Paper tax returns must reach HMRC.'],
            ['30 December', 'Last date to file online if you want the tax collected through your PAYE tax code.'],
            ['31 January', 'Online tax return due, and the tax you owe must be paid by 11:59pm.'],
            ['31 July', 'Second payment on account deadline, if you make payments towards your bill.'],
          ],
        },
        body: 'Miss the 31 January filing deadline and you get an automatic late-filing penalty, even if you owe no tax. Interest and further penalties apply to late payment.',
      },
      {
        title: 'How to report investment gains, step by step',
        bullets: [
          'Register for Self Assessment with HMRC (you get a Unique Taxpayer Reference, or UTR). Allow time - activation codes arrive by post.',
          'Gather your records: broker statements, contract notes for every purchase and sale, dividend vouchers, and details of any losses.',
          'Complete the capital gains summary pages (form SA108) with total gains, losses and the annual exempt amount.',
          'Report dividend income and any foreign income or gains (the foreign pages, SA106) - foreign amounts must be converted to pounds.',
          'Submit online by 31 January and pay what you owe the same day.',
        ],
      },
      {
        title: 'Foreign income and gains',
        body: 'If you hold overseas investments, you usually report foreign dividends, interest and gains in the same Self Assessment return, in pounds sterling. If the other country also taxed the income, you can usually claim Foreign Tax Credit Relief so you are not taxed twice on the same money. The US, for example, normally withholds tax on dividends to UK investors at a reduced treaty rate if you have filed a W-8BEN form with your broker.',
      },
      {
        title: 'Making Tax Digital is coming',
        body: 'Self-employed people and landlords with qualifying income over £50,000 (2024/25) are moving to Making Tax Digital for Income Tax first, with the threshold falling to £30,000 (2025/26) and £20,000 (2026/27). Pure investment income is not qualifying income for MTD, but if you also have self-employment or property income, check whether the new rules apply to you.',
      },
      {
        title: 'Records to keep',
        bullets: [
          'Purchase and sale contract notes for every investment disposal.',
          'Dividend vouchers and broker consolidated tax certificates.',
          'Records of losses you want to claim.',
          'Foreign income statements and evidence of tax withheld abroad.',
          'Keep records for at least 5 years after the 31 January filing deadline for the relevant tax year.',
        ],
      },
    ],
    sources: [
      { label: 'GOV.UK - Who must send a tax return', url: 'https://www.gov.uk/self-assessment-tax-returns/who-must-send-a-tax-return' },
      { label: 'GOV.UK - Self Assessment deadlines', url: 'https://www.gov.uk/self-assessment-tax-returns/deadlines' },
      { label: 'GOV.UK - Tax on dividends', url: 'https://www.gov.uk/tax-on-dividends' },
      { label: 'GOV.UK - Tax on foreign income', url: 'https://www.gov.uk/tax-foreign-income' },
    ],
    related: [
      { label: 'Capital Gains Tax', to: '/tax/capital-gains-tax' },
      { label: 'Investing in Foreign Currency', to: '/investing-abroad' },
      { label: 'Tax & Allowances Hub', to: '/tax' },
    ],
    warning: 'Deadlines and thresholds are for the returns relating to the 2025/26 tax year (filed in 2026/27). Always confirm current dates on GOV.UK.',
  },
  {
    path: '/tax/isa-and-allowances',
    title: 'ISAs & Tax Allowances',
    tagline: 'The legal tax shelters and free allowances that should come before almost everything else.',
    description:
      'The UK ISA allowance (£20,000 in 2026/27), the four ISA types, the dividend allowance and rates, the Personal Savings Allowance and the Capital Gains Tax exempt amount - and how to use them together.',
    lastChecked: '18 November 2026',
    sections: [
      {
        title: 'The ISA: your £20,000 tax-free wrapper',
        body: 'In the 2026 to 2027 tax year you can save or invest up to £20,000 in ISAs. Everything inside the wrapper - interest, dividends and capital gains - is free of UK tax, and you do not report it on a tax return. The allowance is "use it or lose it": it resets every 6 April and cannot be carried forward.',
      },
      {
        title: 'The four ISA types',
        diagram: 'isa-wrapper',
        table: {
          head: ['Type', 'What it holds'],
          rows: [
            ['Cash ISA', 'Savings in cash - tax-free interest.'],
            ['Stocks & Shares ISA', 'Funds, shares, ETFs, bonds - tax-free growth and dividends.'],
            ['Innovative Finance ISA', 'Peer-to-peer lending - tax-free interest (higher risk, no FSCS protection in most cases).'],
            ['Lifetime ISA', 'Cash or investments for a first home or retirement - 25% government bonus, up to £4,000 per year within your £20,000 allowance, for those aged 18 to 39 to open.'],
          ],
        },
      },
      {
        title: 'Dividend allowance',
        body: 'Outside an ISA, the first £500 of dividend income each tax year is tax-free. Above that, dividends are taxed at your income tax band. For the 2026 to 2027 tax year the rates are:',
        table: {
          head: ['Tax band', 'Dividend tax rate (2026/27)'],
          rows: [
            ['Basic rate', '10.75%'],
            ['Higher rate', '35.75%'],
            ['Additional rate', '39.35%'],
          ],
        },
      },
      {
        title: 'Personal Savings Allowance',
        body: 'Interest on ordinary savings (outside an ISA) is covered by the Personal Savings Allowance: £1,000 of tax-free interest for basic-rate taxpayers, £500 for higher-rate taxpayers, and £0 for additional-rate taxpayers.',
      },
      {
        title: 'Capital Gains Tax annual exempt amount',
        body: 'Outside an ISA or pension, your first £3,000 of capital gains each tax year is tax-free. Combined with the ISA wrapper, most small investors can invest for years without paying any investment tax at all.',
      },
      {
        title: 'How it fits together: a sensible order',
        bullets: [
          'Build an emergency cash buffer first (a Cash ISA or easy-access savings).',
          'Invest through a Stocks & Shares ISA before using a general investment account.',
          'If you are eligible, a Lifetime ISA\u2019s 25% bonus is hard to beat for a first home deposit.',
          'Only then use taxable accounts - and track gains against the £3,000 exempt amount and dividends against the £500 allowance.',
        ],
      },
    ],
    sources: [
      { label: 'GOV.UK - Individual Savings Accounts (ISAs)', url: 'https://www.gov.uk/individual-savings-accounts' },
      { label: 'GOV.UK - Tax on dividends', url: 'https://www.gov.uk/tax-on-dividends' },
      { label: 'GOV.UK - Tax-free interest on savings', url: 'https://www.gov.uk/apply-tax-free-interest-on-savings' },
      { label: 'GOV.UK - Capital Gains Tax rates and allowances', url: 'https://www.gov.uk/guidance/capital-gains-tax-rates-and-allowances' },
    ],
    related: [
      { label: 'ISAs as an asset class', to: '/isa' },
      { label: 'Capital Gains Tax', to: '/tax/capital-gains-tax' },
      { label: 'What Investing Costs', to: '/costs' },
    ],
  },
  {
    path: '/costs',
    title: 'What Investing Actually Costs',
    tagline: 'Every fee and tax you will meet between your pay packet and your portfolio.',
    description:
      'UK investing costs explained: platform fees, fund charges (OCF), dealing fees, FX conversion fees, bid-offer spreads and the 0.5% Stamp Duty on UK shares - with a worked example of how costs compound.',
    lastChecked: '18 November 2026',
    sections: [
      {
        title: 'Why costs matter so much',
        diagram: 'fee-drag',
        body: 'Costs are the one part of investing you can control. Markets go up and down, but fees are certain - and they compound against you every year. A 1% annual cost difference on a £10,000 portfolio growing at 6% for 25 years is worth roughly £15,000. Understanding every layer of cost is one of the highest-return things a beginner can learn.',
      },
      {
        title: 'The main layers of cost',
        table: {
          head: ['Cost', 'What it is', 'Typical shape'],
          rows: [
            ['Platform fee', 'What your broker or app charges to hold your account.', 'Flat monthly fee, or a percentage of your portfolio (often with a cap).'],
            ['Fund charges (OCF)', 'The fund manager\u2019s ongoing charge, taken inside the fund.', 'Around 0.05%-0.3% for index trackers; 0.5%-1%+ for active funds.'],
            ['Dealing fees', 'Charged when you buy or sell shares or ETFs.', 'Zero on some apps, up to about £12 per trade elsewhere; funds often trade free.'],
            ['FX conversion fee', 'Charged each time pounds are converted to buy foreign assets.', 'Commonly around 0.15%-1.5% of the amount converted, each way.'],
            ['Bid-offer spread', 'The gap between the buying and selling price of an asset.', 'Tiny on big markets, wide on small or exotic ones.'],
            ['Stamp Duty (SDRT)', 'A UK government tax when you buy UK shares.', '0.5% of the purchase price; not charged on most ETFs and funds.'],
          ],
        },
      },
      {
        title: 'Stamp Duty on shares',
        body: 'When you buy UK shares electronically you pay Stamp Duty Reserve Tax at 0.5% of the price, collected automatically by your broker. Paper transfers over £1,000 also pay 0.5% Stamp Duty, and some depositary receipt schemes carry a 1.5% charge. You do not pay stamp duty when you sell, and most funds and ETFs are exempt.',
      },
      {
        title: 'A worked example',
        body: 'Invest £200 a month for 20 years at 6% growth before costs. With total costs of 0.2% a year you end up with roughly £89,000. With total costs of 1.2% a year, roughly £78,000. Same market, same contributions - about £11,000 quietly transferred from you to the industry. This is why low-cost index funds inside a cheap ISA dominate so much sensible beginner investing.',
      },
      {
        title: 'How to keep costs low',
        bullets: [
          'Compare the total annual cost (platform + fund + dealing + FX), not any single headline fee.',
          'Prefer broad, low-cost index funds and ETFs for the core of a portfolio.',
          'Trade less - every trade can carry dealing fees, spreads and, for UK shares, stamp duty.',
          'Watch FX fees if you buy overseas assets regularly; some platforms are far cheaper than others.',
          'Fee caps matter as your portfolio grows: percentage fees scale with your money, flat fees do not.',
        ],
      },
      {
        title: 'Costs that are not money',
        body: 'Time and complexity are costs too. A simple portfolio you understand and can stick with usually beats a fiddly one you abandon after the first crash. Cheap and boring is a feature, not a compromise.',
      },
    ],
    sources: [
      { label: 'GOV.UK - Tax when you buy shares', url: 'https://www.gov.uk/tax-buy-shares' },
      { label: 'FCA - Investing: what to know before you start', url: 'https://www.fca.org.uk/consumers/investing-information' },
    ],
    related: [
      { label: 'ETFs explained', to: '/etf' },
      { label: 'Mutual Funds explained', to: '/funds' },
      { label: 'Start Here', to: '/start' },
    ],
  },
  {
    path: '/investing-abroad',
    title: 'Investing in Foreign Currency',
    tagline: '$ USD, € EUR, ¥ JPY, ¥ CNY, ₹ INR - how UK investors buy overseas assets, and the tax that follows.',
    description:
      'How UK investors invest in USD, EUR, JPY, CNY and INR assets: currency conversion and FX fees, currency risk and hedged funds, how to access restricted markets like China and India, withholding tax, and reporting foreign gains to HMRC in pounds.',
    lastChecked: '18 November 2026',
    sections: [
      {
        title: 'How buying foreign assets actually works',
        body: 'You do not usually need a foreign bank account. A UK investment platform holds your pounds and, when you buy a US share for example, converts £ GBP to $ USD at its exchange rate plus an FX conversion fee. The same conversion happens in reverse when you sell or receive dividends. Many platforms also offer multi-currency accounts so you can hold $ USD or € EUR between trades instead of converting every time.',
      },
      {
        title: 'Currency risk: the return you did not sign up for',
        diagram: 'currency-risk',
        body: 'When you invest abroad you are making two bets at once: one on the asset, one on the currency. If the US market rises 10% but £ GBP strengthens 10% against $ USD, your return in £ GBP is roughly zero. Over long periods currency moves can help or hurt - it is an extra source of volatility, not free money.',
        bullets: [
          'Unhedged funds leave currency movements in your returns (the default, and fine for most long-term investors).',
          'Hedged funds use financial contracts to strip out most currency movement, for a small extra fee - common for bond funds, where currency swings can swamp the underlying return.',
        ],
      },
      {
        title: 'Currency by currency',
        table: {
          head: ['Currency', 'How UK investors usually get exposure'],
          rows: [
            ['$ USD (US dollar)', 'Directly - most UK platforms offer US shares and ETFs. Expect an FX fee per trade and a W-8BEN form for reduced dividend withholding tax.'],
            ['€ EUR (euro)', 'Directly on many platforms via European exchanges, or through eurozone ETFs and funds priced in £ GBP.'],
            ['¥ JPY (Japanese yen)', 'Through Japan index funds and ETFs, or Japanese shares on platforms that offer the Tokyo market.'],
            ['¥ CNY (Chinese yuan)', 'Direct mainland (A-share) access is restricted for most retail investors; the usual route is China ETFs and funds, sometimes using Stock Connect. Rules change - check what your platform offers.'],
            ['₹ INR (Indian rupee)', 'Non-residents generally cannot invest directly in Indian markets; the practical route is India ETFs and funds listed in London or the US.'],
          ],
        },
      },
      {
        title: 'The tax that follows you',
        bullets: [
          'HMRC taxes UK residents on worldwide gains and income. Foreign gains and dividends must be converted into £ GBP for your tax return.',
          'Many countries withhold tax on dividends before you receive them (the US normally takes 15% under the UK-US treaty if you have filed a W-8BEN).',
          'You can usually claim Foreign Tax Credit Relief in Self Assessment so the same income is not fully taxed twice.',
          'Foreign income and gains go on the foreign pages (SA106) of your tax return; capital gains still count towards your £3,000 annual exempt amount.',
        ],
      },
      {
        title: 'Practical beginner rules',
        bullets: [
          'Start with globally diversified funds priced in £ GBP - you get foreign exposure without managing currencies at all.',
          'If you trade foreign shares directly, compare platforms on FX fees - they vary widely and apply both ways.',
          'Do not hold large foreign-currency cash balances "waiting" - that is currency speculation, not investing.',
          'Remember: a fund priced in £ GBP can still carry full currency risk if it holds overseas assets. The label currency is not the exposure currency.',
        ],
      },
    ],
    sources: [
      { label: 'GOV.UK - Tax on foreign income', url: 'https://www.gov.uk/tax-foreign-income' },
      { label: 'GOV.UK - Self Assessment: who must send a tax return', url: 'https://www.gov.uk/self-assessment-tax-returns/who-must-send-a-tax-return' },
      { label: 'HMRC - Exchange rates', url: 'https://www.gov.uk/government/collections/exchange-rates-for-customs-and-vat' },
    ],
    related: [
      { label: 'Self Assessment for Investors', to: '/tax/self-assessment' },
      { label: 'What Investing Costs', to: '/costs' },
      { label: 'Stocks & Shares', to: '/stocks' },
    ],
    warning: 'Overseas markets add currency and political risk on top of normal investment risk. Access rules for markets like China and India change - check current arrangements before investing.',
  },
  {
    path: '/regulation',
    title: 'Regulation & Your Protection',
    tagline: 'Who polices UK investing, what protection you really have, and how to check any firm in two minutes.',
    description:
      'UK investment regulation in plain English: what the FCA does, the financial promotion rules and why crypto ads are restricted, FSCS protection up to £85,000 per firm, the Financial Ombudsman, and how to check a firm on the FCA register and warning list.',
    lastChecked: '18 November 2026',
    sections: [
      {
        title: 'The FCA: the referee',
        body: 'The Financial Conduct Authority (FCA) authorises and supervises almost every firm offering investments to UK consumers. Being FCA-authorised means the firm must meet standards on how it treats customers, handles your money and markets its products. Almost every legitimate platform you will use is FCA-authorised - and checking takes two minutes on the Financial Services Register.',
      },
      {
        title: 'Financial promotions: the rules behind every advert',
        body: 'In the UK, a communication that invites or encourages someone to invest is a "financial promotion". By law (section 21 of the Financial Services and Markets Act 2000) it must be made by an FCA-authorised firm, approved by one, or fall within an exemption. Breaking this rule is a criminal offence. This is why legitimate investing sites are careful about how they mention specific platforms and products - and why this site keeps to education rather than telling you what to buy. Cryptoasset promotions have extra restrictions: since October 2023 they may only be communicated by, or with the approval of, FCA-authorised or FCA-registered firms, which is why we carry no crypto promotions at all.',
      },
      {
        title: 'FSCS: your safety net, up to £85,000',
        diagram: 'fscs-shield',
        body: 'The Financial Services Compensation Scheme (FSCS) pays compensation if an FCA-authorised firm fails. For investments, the limit is up to £85,000 per eligible person, per firm (for firms that failed after 1 April 2019). Two things to understand:',
        bullets: [
          'FSCS covers firm failure and certain bad advice - not normal market losses. If your fund falls 30%, that is investing, not a claim.',
          'Many products are not protected at all: cryptoassets, most peer-to-peer lending and unregulated investments sit outside the scheme.',
        ],
      },
      {
        title: 'The Financial Ombudsman Service',
        body: 'If you have a dispute with a regulated firm that you cannot resolve directly, the Financial Ombudsman Service (FOS) can investigate and order redress, free of charge. It only covers regulated firms and activities - another reason to check authorisation before you invest.',
      },
      {
        title: 'Your two-minute safety check',
        bullets: [
          'Search the firm on the FCA Financial Services Register - check it is authorised and for what activities.',
          'Search the FCA Warning List - firms on it are operating without authorisation and should be avoided entirely.',
          'Be suspicious of guaranteed returns, pressure to act fast, and anyone who contacts you out of the blue about investing.',
          'Check the exact website domain - scammers clone real firms with near-identical names and sites.',
        ],
      },
      {
        title: 'Where Investa sits',
        body: 'Investa is an educational project of A2JS Technologies. We are not FCA-authorised, we do not provide financial advice or personal recommendations, and we do not arrange deals in investments. That is deliberate: this site explains how the system works so you can make your own decisions or speak to a qualified, authorised adviser.',
      },
    ],
    sources: [
      { label: 'FCA - Financial promotions: what content creators need to know', url: 'https://www.fca.org.uk/firms/financial-promotions-adverts/what-content-creators-need-know-posting' },
      { label: 'FCA - Cryptoassets', url: 'https://www.fca.org.uk/firms/cryptoassets' },
      { label: 'FCA - Financial Services Register', url: 'https://register.fca.org.uk/' },
      { label: 'FSCS - Investment protection', url: 'https://www.fscs.org.uk/what-we-cover/investments/' },
    ],
    related: [
      { label: 'Financial Advisers, Explained', to: '/financial-advisers' },
      { label: 'Ethics & Warnings', to: '/ethics' },
      { label: 'Common Fears & Myths', to: '/fears' },
      { label: 'Cryptocurrencies (education only)', to: '/crypto' },
    ],
  },
  {
    path: '/tax/income-tax',
    title: 'Income Tax Bands & Allowances',
    tagline: 'What the UK takes from what you earn - the bands, the allowance, and the £100,000 trap.',
    description:
      'UK income tax for 2026/27 in plain English: the £12,570 Personal Allowance, the 20%, 40% and 45% bands, the Personal Allowance taper above £100,000, employee National Insurance at 8% and 2%, and a worked example.',
    lastChecked: '18 November 2026',
    sections: [
      {
        title: 'The bands for 2026/27',
        diagram: 'tax-bands',
        body: 'Income tax is charged in slices. You never pay the higher rate on your whole income - only on the part that falls inside each band. These are the rates for England, Wales and Northern Ireland (Scotland sets its own bands):',
        table: {
          head: ['Band', 'Taxable income (2026/27)', 'Rate'],
          rows: [
            ['Personal Allowance', 'Up to £12,570', '0%'],
            ['Basic rate', '£12,571 to £50,270', '20%'],
            ['Higher rate', '£50,271 to £125,140', '40%'],
            ['Additional rate', 'Over £125,140', '45%'],
          ],
        },
      },
      {
        title: 'Worked example: a £60,000 salary',
        bullets: [
          'First £12,570: Personal Allowance - no tax.',
          '£12,571 to £50,270 (£37,700): taxed at 20% = £7,540.',
          '£50,271 to £60,000 (£9,730): taxed at 40% = £3,892.',
          'Total income tax: £11,432. The higher rate only touched the slice above £50,270.',
        ],
      },
      {
        title: 'The £100,000 trap: the Personal Allowance taper',
        diagram: 'taper',
        body: 'Once your adjusted net income goes above £100,000, your Personal Allowance shrinks by £1 for every £2 over the line. It reaches zero at £125,140. Losing the allowance while paying 40% creates an effective 60% tax rate on income between £100,000 and £125,140 - one of the highest marginal rates in the UK system. Pension contributions can bring adjusted net income back below £100,000 and restore the allowance.',
      },
      {
        title: 'National Insurance is separate - and extra',
        body: 'Employees also pay Class 1 National Insurance on earnings: 8% on earnings between £12,570 and £50,270, then 2% above £50,270 (2026/27). It shows on your payslip alongside income tax but funds different things, including your State Pension record. Self-employed people pay Class 4 instead - covered on the Extra Income page.',
      },
      {
        title: 'Scotland is different',
        body: 'Scottish taxpayers pay Scottish income tax with its own bands (including starter, intermediate, advanced and top rates - 48% above £125,140 in 2026/27) on earnings, rental and pension income. Savings and dividend income still use UK-wide rates. If you live in Scotland, check the Scottish bands on GOV.UK.',
      },
      {
        title: 'Allowances that can raise your tax-free amount',
        bullets: [
          'Marriage Allowance: if one partner earns under £12,570 and the other is a basic-rate taxpayer, up to £1,260 of allowance can be transferred, saving up to £252 a year.',
          'Blind Person\'s Allowance: an extra tax-free amount added to your Personal Allowance.',
          'Trading and property allowances: up to £1,000 each of side income can be tax-free - see Extra Income & Your Tax.',
        ],
      },
    ],
    sources: [
      { label: 'GOV.UK - Income Tax rates and Personal Allowances', url: 'https://www.gov.uk/income-tax-rates' },
      { label: 'GOV.UK - Rates and thresholds for employers 2026 to 2027', url: 'https://www.gov.uk/guidance/rates-and-thresholds-for-employers-2026-to-2027' },
      { label: 'GOV.UK - Scottish income tax', url: 'https://www.gov.uk/scottish-income-tax' },
    ],
    related: [
      { label: 'Extra Income & Your Tax', to: '/tax/extra-income' },
      { label: 'Self Assessment', to: '/tax/self-assessment' },
      { label: 'Tax & Allowances Hub', to: '/tax' },
      { label: 'ISAs & Tax Allowances', to: '/tax/isa-and-allowances' },
    ],
    warning: 'Tax rules depend on your circumstances and change. This is education, not tax advice - check GOV.UK or speak to a qualified adviser for your situation.',
  },
  {
    path: '/tax/extra-income',
    title: 'Extra Income & Your Tax',
    tagline: 'Side business, dividends, interest, rent, trading profits - how each one stacks on top of your salary.',
    description:
      'How additional income affects your UK tax: side business profits and Class 4 National Insurance, the £1,000 trading and property allowances, dividend and savings tax, rental income, payments on account, and a worked example for 2026/27.',
    lastChecked: '18 November 2026',
    sections: [
      {
        title: 'The golden rule: income stacks',
        diagram: 'stacking',
        body: 'HMRC adds up almost everything you earn in a tax year and taxes the total in slices. Your salary usually uses up your Personal Allowance and basic-rate band first - so extra income often lands in a higher band than you expect. The stacking order is: earnings and pensions first, then savings interest, then dividends on top.',
      },
      {
        title: 'Side business and freelancing (sole trader)',
        bullets: [
          'Trading allowance: if your gross trading income is £1,000 or less in a tax year, you do not need to tell HMRC at all.',
          'Above £1,000 you register for Self Assessment (by 5 October after the tax year) and pay income tax on profits - income minus allowable expenses - at your marginal band.',
          'Class 4 National Insurance: 6% on profits between £12,570 and £50,270, then 2% above (2026/27).',
          'Trading through a limited company instead? Profits pay Corporation Tax first, and you are then taxed on salary and dividends you take out - a different calculation entirely.',
        ],
      },
      {
        title: 'Payments on account: the January surprise',
        diagram: 'payments-on-account',
        body: 'If your Self Assessment bill is over £1,000 (and less than 80% of your tax is collected at source), HMRC asks for advance payments towards next year: half on 31 January and half on 31 July, each usually half of last year\'s bill. First-timers are often caught out: your first January payment can be 150% of the year\'s tax - the bill itself plus the first payment on account. If you expect to earn less, you can apply to reduce them, but underpaying means interest.',
      },
      {
        title: 'Savings interest',
        body: 'Interest outside ISAs is taxed as income, but most people pay nothing thanks to two allowances: the starting rate for savings (up to £5,000 of tax-free interest for lower earners, shrinking £1 for every £1 of other income above £12,570) and the Personal Savings Allowance (£1,000 of interest tax-free for basic-rate taxpayers, £500 for higher-rate, £0 for additional-rate). Banks report interest to HMRC automatically.',
      },
      {
        title: 'Dividends',
        body: 'Dividends stack on top of everything else. The first £500 is tax-free (2026/27); above that you pay 10.75% in the basic band, 35.75% in the higher band and 39.35% in the additional band. Dividends inside an ISA or pension are always tax-free.',
      },
      {
        title: 'Rental income',
        bullets: [
          'Property allowance: gross rental income of £1,000 or less in a tax year does not need to be declared.',
          'Above that, rental profits (rent minus allowable costs) are taxed as income at your marginal band.',
          'Individual landlords get only a 20% tax credit on mortgage interest - it is no longer fully deductible, which can push "profitable" rentals into real losses for higher-rate taxpayers.',
        ],
      },
      {
        title: 'Worked example: salary + side business + dividends',
        body: 'A £40,000 salary, £8,000 of sole-trader profit and £1,500 of dividends in 2026/27:',
        bullets: [
          'Salary: £27,430 taxable after the Personal Allowance, all in the basic band = £5,486 tax.',
          'Side profit £8,000: total income is now £48,000, still basic rate, so £8,000 x 20% = £1,600 income tax, plus Class 4 NI: £8,000 x 6% = £480.',
          'Dividends: £1,500 minus the £500 allowance = £1,000 at 10.75% = £107.50.',
          'Total extra tax on top of PAYE: £2,187.50 - reported through Self Assessment, with payments on account likely the following year.',
        ],
      },
    ],
    sources: [
      { label: 'GOV.UK - Tax-free allowances on property and trading income', url: 'https://www.gov.uk/guidance/tax-free-allowances-on-property-and-trading-income' },
      { label: 'GOV.UK - Self-employed National Insurance rates', url: 'https://www.gov.uk/self-employed-national-insurance-rates' },
      { label: 'GOV.UK - Payments on account', url: 'https://www.gov.uk/understand-self-assessment-bill/payments-on-account' },
      { label: 'GOV.UK - Tax on dividends', url: 'https://www.gov.uk/tax-on-dividends' },
      { label: 'GOV.UK - Tax on savings interest', url: 'https://www.gov.uk/apply-tax-free-interest-on-savings' },
    ],
    related: [
      { label: 'Income Tax Bands & Allowances', to: '/tax/income-tax' },
      { label: 'Self Assessment', to: '/tax/self-assessment' },
      { label: 'Capital Gains Tax', to: '/tax/capital-gains-tax' },
      { label: 'Tax & Allowances Hub', to: '/tax' },
    ],
    warning: 'Everyone\'s stack is different and small changes can move you between bands. This is general education for 2026/27, not tax advice.',
  },
  {
    path: '/financial-advisers',
    title: 'Financial Advisers, Explained',
    tagline: 'What advisers actually do, what they cost, how to check one - and when you do not need one.',
    description:
      'UK financial advisers in plain English: independent vs restricted advice, typical fees (hourly £100-£350, initial 1-3%, ongoing 0.5-1%), how to verify an adviser on the FCA register and Firm Checker, FSCS and Ombudsman protection, and the questions to ask before paying.',
    lastChecked: '18 November 2026',
    sections: [
      {
        title: 'What a financial adviser does',
        body: 'A regulated financial adviser gives personal recommendations: they assess your situation, goals and risk tolerance, then recommend specific products or investments for you. That is different from education (like this site) and from execution-only platforms (where you choose yourself). Good advisers also handle tax planning, pension consolidation, inheritance planning and keeping you calm in a crash.',
      },
      {
        title: 'Independent vs restricted',
        bullets: [
          'Independent (IFA): can recommend from the whole market and must genuinely consider all product types.',
          'Restricted: can only recommend certain products, providers or types - which might be fine, but you should know what the restriction is before paying.',
          'An adviser must tell you which they are. "Tied" or salespeople for one company are not advisers in this sense at all.',
        ],
      },
      {
        title: 'What advice costs',
        body: 'Advisers charge in three ways, sometimes combined. Typical ranges, from MoneyHelper:',
        table: {
          head: ['Fee type', 'Typical range'],
          rows: [
            ['Hourly rate', '£100 to £350 an hour'],
            ['Initial advice on pensions/investments', '1% to 3% of the amount (e.g. £1,000 to £3,000 on £100,000)'],
            ['Ongoing advice', '0.5% to 1% a year'],
            ['Fixed one-off fee', 'Agreed in advance for a defined piece of work'],
          ],
        },
      },
      {
        title: 'Ongoing fees: do the maths every year',
        body: 'A 0.5% ongoing fee sounds small. On a £200,000 pot it is £1,000 every single year - and it grows as your pot grows. MoneyHelper\'s own guidance is to compare the total annual cost, not just the initial fee. Ask what you actually get each year for the ongoing fee: a review meeting, rebalancing, tax checks - or nothing.',
      },
      {
        title: 'How to check an adviser in five minutes',
        diagram: 'adviser-check',
        bullets: [
          'Use the FCA Firm Checker or Financial Services Register (register.fca.org.uk): search the firm and confirm it is authorised - and for the activities you need.',
          'Check the individual adviser on the same register; ask the firm for their full name as registered.',
          'Search the FCA Warning List for the firm name - a hit means walk away.',
          'Match contact details: clone firms copy real firms\' names, so call the number on the register, not the one you were given.',
          'If a firm is only "registered" (e.g. for payments or crypto AML) rather than authorised, you are unlikely to have FSCS or Ombudsman protection.',
        ],
      },
      {
        title: 'Your protection if things go wrong',
        bullets: [
          'Financial Ombudsman Service: free dispute resolution if advice was unsuitable - the adviser must be FCA-authorised for you to use it.',
          'FSCS: if an authorised firm fails and owes you money (including for bad advice), compensation is available up to £85,000 per person per firm.',
          'Neither covers normal investment losses - a recommendation that performed badly but was suitable is not a claim.',
        ],
      },
      {
        title: 'When advice is worth paying for - and when it is not',
        bullets: [
          'Often worth it: defined-benefit pension transfers (legally required above £30,000 of safeguarded benefits), complex tax and inheritance situations, large lump sums, retirement drawdown planning.',
          'Often not needed: starting a simple ISA into a diversified low-cost fund - the education on this site plus a mainstream platform covers it.',
          'A middle option: many advisers offer a one-off "advice surgery" or fixed-fee review instead of ongoing management.',
          'Pensions advice allowance: you can take up to £500 tax-free from your pension to pay for retirement advice, up to three times in total (once per tax year).',
        ],
      },
      {
        title: 'Questions to ask before you sign anything',
        bullets: [
          'Are you independent or restricted - and restricted to what, exactly?',
          'What is your FCA Firm Reference Number (FRN)? (Then check it.)',
          'What are ALL the charges - initial, ongoing, exit, and the underlying product fees - in pounds per year?',
          'What do I receive each year for the ongoing fee?',
          'Are you advising me or selling to me - and are you paid commission on anything you recommend?',
        ],
      },
    ],
    sources: [
      { label: 'MoneyHelper - Guide to financial adviser fees', url: 'https://www.moneyhelper.org.uk/en/getting-help-and-advice/financial-advisers/guide-to-financial-adviser-fees' },
      { label: 'FCA - How to check a firm or individual is authorised', url: 'https://www.fca.org.uk/consumers/how-check-firm-individual-authorised' },
      { label: 'FCA - Financial Services Register', url: 'https://register.fca.org.uk/' },
      { label: 'FSCS - Investment protection', url: 'https://www.fscs.org.uk/what-we-cover/investments/' },
    ],
    related: [
      { label: 'Regulation & Your Protection', to: '/regulation' },
      { label: 'What Investing Costs', to: '/costs' },
      { label: 'Tax & Allowances Hub', to: '/tax' },
      { label: 'FAQs', to: '/faq' },
    ],
    warning: 'Investa does not recommend any adviser or firm. Always verify authorisation on the FCA register yourself before paying for advice.',
  },
]

export const contentPageByPath = (path: string) => contentPages.find((p) => p.path === path)
