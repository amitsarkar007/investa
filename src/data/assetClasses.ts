export type AssetClass = {
  id: string
  name: string
  tagline: string
  overview: string
  whyItMatters: string
  howItWorks: string
  keyIdeas: string[]
  risks: string[]
  beginnerSteps: string[]
  goodFor: string[]
  watchOuts: string[]
  sections?: {
    title: string
    body: string
    bullets?: string[]
  }[]
  platforms?: { name: string; url: string; frn?: string; note?: string }[]
  categories?: { name: string; description: string }[]
}

export const assetClasses: AssetClass[] = [
  {
    id: 'bonds',

    name: 'Bonds',
    tagline: 'Lend your money, get paid interest. The steady one in the family.',
    overview:
      'A bond is an IOU. You lend money to a government or a company. They pay you interest while they have it. At the end, they hand your money back.',
    whyItMatters:
      'Bonds are the calm part of a money pot. When shares jump up and down, bonds usually move less. They also pay a steady income, which is why people near retirement like them.',
    howItWorks:
      'Think of lending a friend £20. A reliable friend pays you back with a thank-you on top. A flaky friend might not pay at all. Bonds work the same way. Safe borrowers, like the UK government, pay less interest. Risky companies have to pay more to tempt you.',
    keyIdeas: [
      'A bond is a loan, not a share. You are the bank.',
      'When interest rates rise, old bond prices fall. It works like a seesaw.',
      'UK government bonds are called gilts. They are about as safe as lending gets.'
    ],
    risks: [
      'Rate risk: if interest rates rise, your bond is worth less if you sell early.',
      'Default risk: a weak company might not pay you back.',
      'Inflation risk: if prices rise faster than your interest, your money buys less.'
    ],
    beginnerSteps: [
      'Learn two words: gilt (a UK government bond) and yield (the interest you earn).',
      'Most beginners buy a bond fund: one pot holding hundreds of bonds.',
      'Hold bonds inside an Individual Savings Account (ISA) so the interest is tax-free.'
    ],
    goodFor: ['Steady income', 'Calming a share-heavy pot', 'Money you need in 5 to 10 years'],
    watchOuts: ['Chasing high interest from shaky borrowers', 'Panic-selling when rates rise', 'Thinking bonds can never lose money - they can'],
    sections: [
      {
        title: 'What are bonds?',
        body: 'A bond is a written promise. It says: you lent us £100, we will pay you interest every year, and on a set date we will give you your £100 back. Governments and big companies sell bonds to raise money, the way you might borrow from family to fix the roof.'
      },
      {
        title: 'What are gilts?',
        body: 'Gilts are bonds from the UK government. The name comes from old paper certificates with gold (gilt) edges. The UK government has never missed a payment on its own £ GBP debt, so gilts are treated as one of the safest loans in the world. Safe means lower interest: you swap excitement for sleep.'
      },
      {
        title: 'How do you make money?',
        bullets: [
          'Interest: the borrower pays you a fixed amount, usually once or twice a year. This payment is called the coupon.',
          'Selling early: if interest rates fall after you buy, your bond becomes more attractive and you can sell it for more than you paid.',
          'Or both together.'
        ],
        body: 'There are two ways bonds pay you.'
      },
      {
        title: 'What can go wrong?',
        bullets: [
          'Interest rates rise. New bonds pay more, so nobody wants your old one at full price.',
          'The borrower goes bust. Rare for the UK government, real for weak companies. This is called default.',
          'Inflation runs hot. If prices rise 5% and your bond pays 3%, you are going backwards in buying power.'
        ],
        body: 'Bonds feel safe, but three things can still bite.'
      },
      {
        title: 'Bonds and tax (UK)',
        body: 'Gilts have a handy tax quirk. You pay income tax on the interest, but no Capital Gains Tax (CGT) when you sell a gilt or it pays out at the end. Inside an ISA or a pension, even the interest is tax-free. Rules are set by HM Revenue and Customs (HMRC) and can change.'
      },
      {
        title: 'How do you buy bonds?',
        body: 'One single gilt is fiddly for most people. The simple route is a bond fund through a normal investment platform: one buy spreads your money across hundreds of bonds. The platforms below are regulated by the Financial Conduct Authority (FCA), the UK’s money referee, and we have checked each firm’s FCA registration number.'
      }
    ],
    platforms: [
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk', frn: '115248' },
      { name: 'AJ Bell', url: 'https://www.ajbell.co.uk', frn: '155593' },
      { name: 'interactive investor', url: 'https://www.ii.co.uk', frn: '141282' },
      { name: 'NS&I (government savings)', url: 'https://www.nsandi.com', note: 'Backed by HM Treasury, not FCA-regulated' },
    ],
    categories: [
      {
        name: 'Government Bonds',
        description: 'Bonds issued by national governments. They are generally considered lower risk.'
      },
      {
        name: 'Municipal Bonds',
        description: 'Bonds issued by local governments or municipalities. They often offer tax advantages.'
      },
      {
        name: 'Corporate Bonds',
        description: 'Bonds issued by corporations to raise capital. Higher yields, higher risk.'
      },
      {
        name: 'High-Yield Bonds',
        description: 'Lower credit ratings and higher risk, but higher yields.'
      },
      {
        name: 'Convertible Bonds',
        description: 'Bonds that can be converted into a set number of company shares.'
      },
      {
        name: 'Zero-Coupon Bonds',
        description: 'No periodic interest; issued at a discount and mature at face value.'
      },
      {
        name: 'Inflation-Linked Bonds',
        description: 'Principal and interest payments adjust with inflation.'
      },
      {
        name: 'Foreign Bonds',
        description: 'Issued by foreign governments or corporations with currency risk.'
      }
    ]
  },
  {
    id: 'stocks',

    name: 'Stocks',
    tagline: 'Own a tiny slice of a real business.',
    overview:
      'A stock (also called a share) is a small piece of a company. Buy one share of Tesco and you own a tiny bit of Tesco. If the business does well, your slice becomes worth more. Many companies also share their profits with owners. Those payments are called dividends.',
    whyItMatters:
      'Shares have beaten cash and bonds over long periods. Broad share funds in the UK and US have returned roughly 5-7% a year after inflation over long stretches. That growth is lumpy: some years are strongly negative.',
    howItWorks:
      'Imagine a pizza cut into a million slices. Buying a share is buying one slice. If the pizza place gets popular, everyone wants a slice, so yours costs more. If the place burns down, slices are worthless. Share prices move every day because millions of people keep changing their minds about the future.',
    keyIdeas: [
      'A share is part-ownership of a business, not a lottery ticket.',
      'Price is what you pay. Value is what the company actually earns.',
      'Time in the market beats timing the market: missing just a few of the best days badly hurts long-term returns.'
    ],
    risks: [
      'Prices swing. A bad year can mean minus 20% or worse.',
      'One company can fail completely. Owning many protects you.',
      'Your own behaviour is the biggest risk: panic-selling turns a dip into a real loss.'
    ],
    beginnerSteps: [
      'Start with a fund holding hundreds of companies, not a single company.',
      'Use a Stocks and Shares Individual Savings Account (ISA): up to £20,000 a year, and all growth and dividends inside are tax-free.',
      'Invest monthly. Small regular amounts beat big one-off guesses.'
    ],
    goodFor: ['Long-term growth (5+ years)', 'Beating inflation', 'Building wealth slowly and steadily'],
    watchOuts: ['Checking prices every day', 'Buying whatever is popular this month', 'Thinking a fall means you must sell'],
    sections: [
      {
        title: 'What are stocks?',
        body: 'When a company wants money to grow, it can sell small pieces of itself to the public. Each piece is a share. Together all the shares are the company’s stock. After the first sale, shares trade between investors on a stock exchange, like second-hand tickets changing hands.'
      },
      {
        title: 'How do you make money?',
        bullets: [
          'Growth: you sell your shares for more than you paid.',
          'Dividends: some companies pay owners a slice of profits, usually every few months.',
          'Both: over decades, reinvested dividends have made up a big chunk of total returns.'
        ],
        body: 'Shares pay you in two ways.'
      },
      {
        title: 'What can go wrong?',
        bullets: [
          'The whole market falls. Even great companies get dragged down for a while.',
          'Your company stumbles. Profits shrink, the price follows.',
          'You sell at the bottom. The loss only becomes real when you sell in fear.'
        ],
        body: 'Shares reward patience and punish panic.'
      },
      {
        title: 'How do you buy shares in the UK?',
        bullets: [
          'Open an account with a platform regulated by the Financial Conduct Authority (FCA), the UK’s money referee.',
          'Pick a Stocks and Shares ISA first. It is a tax-free wrapper, not an investment itself.',
          'Then buy: a broad fund for most people, individual shares only if you have done the homework.'
        ],
        body: 'Three steps, in order.'
      },
      {
        title: 'Tax on shares (UK, 2026/27)',
        body: 'Inside an ISA you pay no tax at all. Outside one, you get a £3,000 Capital Gains Tax (CGT) allowance and a £500 dividend allowance each year. Above those, CGT is 18% or 24% depending on your income, and dividends are taxed at 10.75%, 35.75% or 39.35% by band. You report taxable gains to HM Revenue and Customs (HMRC) through Self Assessment. See our income tax guide for the full picture.'
      },
      {
        title: 'Who are shares for?',
        body: 'Anyone with money they will not need for at least five years, and the stomach to watch it dip without selling. If you need the cash next year, shares are the wrong home for it.'
      }
    ],
    platforms: [
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk', frn: '115248' },
      { name: 'AJ Bell', url: 'https://www.ajbell.co.uk', frn: '155593' },
      { name: 'interactive investor', url: 'https://www.ii.co.uk', frn: '141282' },
      { name: 'Trading 212 UK', url: 'https://www.trading212.com', frn: '609146' },
    ],
    categories: [
      {
        name: 'Market Capitalization',
        description: 'Large-cap (>$10B), mid-cap ($2B-$10B), and small-cap (<$2B) companies.'
      },
      {
        name: 'Sector or Industry',
        description: 'Technology, healthcare, finance, consumer goods, energy, and more.'
      },
      {
        name: 'Growth vs. Value',
        description: 'Growth stocks target higher earnings growth; value stocks are priced below perceived worth.'
      },
      {
        name: 'Dividend Yield',
        description: 'Dividend-paying stocks vs companies that reinvest profits instead of paying dividends.'
      },
      {
        name: 'Geographic Location',
        description: 'UK-based companies vs international stocks.'
      },
      {
        name: 'Blue-Chip Stocks',
        description: 'Well-established, financially stable companies with strong track records.'
      },
      {
        name: 'Cyclical vs. Defensive',
        description: 'Cyclical stocks move with the economy; defensive stocks stay steadier in downturns.'
      },
      {
        name: 'Risk Profile',
        description: 'Ranges from high-risk/high-reward to lower-risk/lower-reward stocks.'
      },
      {
        name: 'Penny Stocks vs. Blue-Chip',
        description: 'Penny stocks are low-priced and speculative; blue-chip stocks are established and stable.'
      },
      {
        name: 'International Stocks',
        description: 'Companies based outside the UK that trade in the market.'
      }
    ]
  },
  {
    id: 'funds',

    name: 'Funds',
    tagline: 'One pot, hundreds of investments, someone else does the picking.',
    overview:
      'A fund pools money from lots of people and spreads it across many investments. One buy gives you a slice of everything inside. A professional manager picks for an active fund. A computer following a list picks for a passive (index) fund.',
    whyItMatters:
      'Diversification: if you own 500 companies, one going bust barely dents you. Funds make that possible with £50 instead of £50,000. They are the main building block for most UK investors.',
    howItWorks:
      'Think of a fruit basket instead of one apple. One bad apple does not spoil your lunch. You pay a small yearly fee called the Ongoing Charges Figure (OCF): often around 0.1% for a simple index fund, 1% or more for an active one.',
    keyIdeas: [
      'One fund can hold hundreds of companies, bonds or both.',
      'Fees matter more than almost anything: 1% a year compounds into a fortune over decades.',
      'Most active managers fail to beat their index over ten years or more, after fees.'
    ],
    risks: [
      'Market risk stays: funds spread company risk, not whole-market crashes.',
      'High fees quietly eat your returns year after year.',
      'Some funds are riskier than their name suggests. Always read what is inside.'
    ],
    beginnerSteps: [
      'Look at a global index fund first: the whole world’s big companies in one buy.',
      'Check the OCF before anything else. Lower is usually better.',
      'Hold it inside an Individual Savings Account (ISA) or a pension so growth is sheltered from tax.'
    ],
    goodFor: ['Beginners', 'Hands-off investing', 'Diversification on a small budget'],
    watchOuts: ['Paying 1%+ for a fund that quietly copies an index', 'Chasing last year’s winner', 'Owning five funds that all hold the same companies'],
    sections: [
      {
        title: 'Active vs passive',
        body: 'An active fund pays clever humans to pick winners. A passive fund (also called an index fund or tracker) just buys everything on a list. Decades of data say the list usually wins after fees. Passive funds are also far cheaper, which is why most beginners start there.'
      },
      {
        title: 'What is an index?',
        body: 'An index is just a list. The FTSE 100 is a list of the 100 biggest companies on the London market. The S&P 500 lists 500 big US companies. An index fund buys the list and holds it. No genius required, which is exactly why it is cheap.'
      },
      {
        title: 'What does a fund cost?',
        body: 'The OCF is skimmed quietly from the fund every day, so you never see a bill. A 0.2% fee on £10,000 is about £20 a year. A 1.5% fee is about £150. Over 25 years of growth, that gap can cost you tens of thousands of pounds. This is why fee-checking is the one habit every investor needs.'
      },
      {
        title: 'Accumulating or income?',
        body: 'Funds come in two flavours. Income (Inc) funds pay dividends out to you as cash. Accumulation (Acc) funds roll the dividends back in to buy more, like a snowball picking up snow. For long-term growth inside an ISA, accumulation is usually the tidy choice.'
      },
      {
        title: 'Funds and tax (UK)',
        body: 'Inside an ISA or pension: no tax on growth or income. Outside one: dividends and gains can be taxable above your allowances. The same Capital Gains Tax (CGT) and dividend rules apply as for shares. Keep it sheltered and the paperwork mostly disappears.'
      },
      {
        title: 'Who are funds for?',
        body: 'Almost everyone. If picking individual companies sounds like homework, funds are the answer. They are the default choice of most pensions for a reason.'
      }
    ],
    platforms: [
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk', frn: '115248' },
      { name: 'AJ Bell', url: 'https://www.ajbell.co.uk', frn: '155593' },
      { name: 'Vanguard Investor UK', url: 'https://www.vanguardinvestor.co.uk', frn: '527839' },
      { name: 'interactive investor', url: 'https://www.ii.co.uk', frn: '141282' },
    ],
    categories: [
      {
        name: 'Equity Funds',
        description: 'Funds focused on stocks, often split by size, sector, or style.'
      },
      {
        name: 'Bond Funds',
        description: 'Funds that hold government, municipal, or corporate bonds.'
      },
      {
        name: 'Money Market Funds',
        description: 'Short-term, high-quality investments aiming for liquidity and safety.'
      },
      {
        name: 'Balanced Funds',
        description: 'Mix of stocks and bonds for growth and income.'
      },
      {
        name: 'Index Funds',
        description: 'Track a market index for broad exposure and lower fees.'
      },
      {
        name: 'Sector Funds',
        description: 'Focus on a specific sector such as technology or healthcare.'
      },
      {
        name: 'International Funds',
        description: 'Invest in companies outside the investor’s home country; adds currency risk.'
      },
      {
        name: 'Specialty Funds',
        description: 'Target specific strategies or asset classes like real estate or commodities.'
      }
    ]
  },
  {
    id: 'etf',

    name: 'ETFs (Exchange Traded Funds)',
    tagline: 'A fund that trades like a share.',
    overview:
      'An Exchange Traded Fund (ETF) is a fund you buy and sell on a stock exchange, any time the market is open, exactly like buying a share. Most ETFs follow an index and charge very small fees.',
    whyItMatters:
      'ETFs made investing cheap for everyone. One global ETF can spread your money across thousands of companies for around 0.1-0.25% a year. Before ETFs, that kind of spread was for the wealthy only.',
    howItWorks:
      'A normal fund sets one price a day, like a shop that updates its price tag each evening. An ETF has a live price tag that moves every second. You buy it through any investment platform, the same way you would buy a share.',
    keyIdeas: [
      'An ETF is a fund with a live price.',
      'Fees are usually very low, but always compare the Ongoing Charges Figure (OCF).',
      'Check what the ETF actually holds. The name alone can mislead.'
    ],
    risks: [
      'Same market risk as any fund: the whole market can fall.',
      'Some ETFs use complex machinery (leverage or synthetic copies). Avoid those until you fully understand them.',
      'Buying and selling often stacks up dealing fees and bid-offer spreads.'
    ],
    beginnerSteps: [
      'Search your platform for a global equity ETF, for example one tracking the MSCI World index.',
      'Compare fees: the big providers publish them clearly on their factsheets.',
      'Buy inside your Stocks and Shares Individual Savings Account (ISA), and set up a monthly purchase if the platform allows it.'
    ],
    goodFor: ['Low-cost long-term investing', 'Beginners who want the whole market', 'Monthly drip-feeding'],
    watchOuts: ['Leveraged and inverse ETFs: not for beginners', 'Owning many ETFs that quietly hold the same companies', 'Trading in and out like a day trader'],
    sections: [
      {
        title: 'ETF vs ordinary fund',
        body: 'Both are baskets of investments. The differences are practical: an ETF trades all day at live prices, while an ordinary fund prices once a day. Ordinary funds often let you invest from £25 a month with no dealing fee; ETFs usually charge a small dealing fee per trade but often have the very lowest OCFs. Either works. Pick on cost and convenience.'
      },
      {
        title: 'What does an ETF cost?',
        bullets: [
          'OCF: the yearly fund fee, often 0.07-0.25% for plain index ETFs.',
          'Dealing fee: what your platform charges per trade, often £0-£12.',
          'Spread: the tiny gap between the buy and sell price, like a currency exchange booth’s margin.'
        ],
        body: 'Three small costs add up.'
      },
      {
        title: 'Physical or synthetic?',
        body: 'A physical ETF really buys the companies on its list. A synthetic ETF uses a contract with a bank to copy the list’s returns. Both are legal and regulated, but synthetic adds a layer of bank risk. Beginners usually stick with physical.'
      },
      {
        title: 'ETFs and tax (UK)',
        body: 'Tax works the same as for funds: free inside an Individual Savings Account (ISA) or pension, taxable above your allowances outside. One UK wrinkle: stamp duty does not apply to most ETF purchases, unlike individual UK shares which carry 0.5%.'
      },
      {
        title: 'Who are ETFs for?',
        body: 'Anyone who wants the whole market at the lowest possible cost and is happy to place the trade themselves. If your platform offers free regular investing into ordinary funds, that can be even cheaper for small monthly amounts.'
      }
    ],
    platforms: [
      { name: 'interactive investor', url: 'https://www.ii.co.uk', frn: '141282' },
      { name: 'InvestEngine', url: 'https://www.investengine.com', frn: '801128' },
      { name: 'Trading 212 UK', url: 'https://www.trading212.com', frn: '609146' },
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk', frn: '115248' },
    ],
    categories: [
      {
        name: 'Equity ETFs',
        description: 'Invest in stocks and track a specific index.'
      },
      {
        name: 'Bond ETFs',
        description: 'Provide exposure to fixed-income securities.'
      },
      {
        name: 'Commodity ETFs',
        description: 'Track commodities like gold, silver, or oil.'
      },
      {
        name: 'Sector and Industry ETFs',
        description: 'Focus on a specific sector like technology or healthcare.'
      },
      {
        name: 'International ETFs',
        description: 'Provide exposure to global markets.'
      }
    ]
  },
  {
    id: 'realestate',

    name: 'Real Estate',
    tagline: 'Bricks, mortar and rent: investing you can touch.',
    overview:
      'Property investing means owning buildings or land. You can buy a whole property yourself, or buy small slices through funds and Real Estate Investment Trusts (REITs), which are companies that own property and trade on the stock market.',
    whyItMatters:
      'Property has two ways to pay: rent coming in and the building hopefully rising in value. For many UK families their home is their biggest asset, so understanding property matters even if you never buy to let.',
    howItWorks:
      'Think of buying a vending machine. You pay a big sum up front. People keep putting coins in (rent). Some years the machine itself becomes worth more. But it can break, sit empty, or fall in value - and you cannot sell half a vending machine quickly.',
    keyIdeas: [
      'Rent is income; price growth is a bonus. Do not count on both.',
      'REITs let you own property slices from a few pounds, without being a landlord.',
      'Property is illiquid: selling takes months, not seconds.'
    ],
    risks: [
      'Prices fall too: UK house prices have dropped 20%+ in past slumps.',
      'Empty months, repairs and bad tenants eat rent.',
      'Mortgage rates rise: leveraged property magnifies losses as well as gains.'
    ],
    beginnerSteps: [
      'Start paper-free: a REIT or property fund inside your Individual Savings Account (ISA).',
      'Learn the words yield (rent as a % of price) and leverage (buying with borrowed money).',
      'Before any buy-to-let, add up every cost: stamp duty, agent fees, repairs, empty months, tax.'
    ],
    goodFor: ['Income from rent', 'Diversifying away from shares', 'Long holding periods (10+ years)'],
    watchOuts: ['Forgetting the 3% extra Stamp Duty Land Tax on second properties in England and Northern Ireland', 'Assuming house prices only go up', 'Being a landlord with no cash buffer for repairs'],
    sections: [
      {
        title: 'Ways to invest in property',
        bullets: [
          'Buy-to-let: you buy a whole property and rent it out. High effort, high cost, concentrated risk.',
          'REITs: companies that own offices, shops or warehouses. You buy shares in them like any stock, from a few pounds.',
          'Property funds: pooled pots that own buildings or REIT shares.',
          'Your own home: an investment you live in, though not one that pays rent.'
        ],
        body: 'Four very different routes.'
      },
      {
        title: 'What is a REIT?',
        body: 'A Real Estate Investment Trust (REIT) is a company that owns income-producing property. UK law says REITs must pay out most of their rental profits to shareholders. You get property income without fixing a single boiler, and you can sell your shares in seconds. Inside an ISA, that income and any growth is tax-free.'
      },
      {
        title: 'The true cost of buy-to-let',
        body: 'The sticker price is just the start. Add Stamp Duty Land Tax (with a 3% surcharge on second properties in England and Northern Ireland), legal fees, letting agent fees of around 10-15% of rent, insurance, safety certificates, repairs and months with no tenant. Many new landlords find the real yield is half what they expected.'
      },
      {
        title: 'Property and tax (UK, 2026/27)',
        body: 'Rent is taxed as income at your band (20%, 40% or 45%). The first £1,000 of property income is covered by the property allowance. When you sell a property that is not your main home, you pay Capital Gains Tax (CGT): 18% or 24% above the £3,000 annual exempt amount. Your own main home is usually free of CGT thanks to Private Residence Relief.'
      },
      {
        title: 'Who is property for?',
        body: 'People with a long horizon, a cash buffer, and either the patience to be a landlord or the sense to use REITs instead. If you might need the money at short notice, property is a risky place to park it.'
      }
    ],
    platforms: [
      { name: 'Hargreaves Lansdown (property funds and REITs)', url: 'https://www.hl.co.uk', frn: '115248' },
      { name: 'AJ Bell (property funds and REITs)', url: 'https://www.ajbell.co.uk', frn: '155593' },
      { name: 'interactive investor (property funds and REITs)', url: 'https://www.ii.co.uk', frn: '141282' },
    ],
    categories: [
      {
        name: 'Residential Real Estate',
        description: 'Homes, apartments, and condos used for living.'
      },
      {
        name: 'Commercial Real Estate',
        description: 'Office buildings, retail spaces, and warehouses.'
      },
      {
        name: 'Industrial Real Estate',
        description: 'Factories, manufacturing plants, and distribution centers.'
      },
      {
        name: 'Land',
        description: 'Undeveloped land, agricultural land, or future development sites.'
      },
      {
        name: 'REITs',
        description: 'Companies that own or finance income-producing real estate.'
      }
    ]
  },
  {
    id: 'commodities',

    name: 'Commodities',
    tagline: 'Gold, oil, wheat: the raw stuff the world runs on.',
    overview:
      'Commodities are raw materials: gold, silver, oil, gas, wheat, coffee. Investors buy them hoping prices rise, often as protection when inflation bites or markets panic.',
    whyItMatters:
      'Commodities often move differently from shares. When inflation jumps, the price of raw stuff usually jumps too, so a small slice can steady a portfolio. Gold in particular is the age-old hiding place in scary times.',
    howItWorks:
      'Think of a bag of sugar. It does not grow, pay you pocket money or build anything. You only profit if someone pays more for it later. Gold is the same: a shiny rock that pays nothing. Its price depends purely on what the next person will pay.',
    keyIdeas: [
      'Commodities pay no interest and no dividends. Price moves are everything.',
      'Gold is the classic crisis hedge, but it can fall for years at a stretch.',
      'Most beginners should use an Exchange Traded Commodity (ETC): a stock-market product that tracks the price.'
    ],
    risks: [
      'No income: dead money if prices go nowhere.',
      'Big swings: oil has halved in weeks before.',
      'Fancy products (futures, leveraged trackers) can lose more than you put in.'
    ],
    beginnerSteps: [
      'Decide why you want it: inflation hedge, crisis hedge, or speculation. Only the first two make sense for most.',
      'Use a simple physical-gold ETC inside your Individual Savings Account (ISA).',
      'Keep it small: many investors cap commodities at 5-10% of their pot.'
    ],
    goodFor: ['Inflation protection', 'Diversification', 'A small crisis hedge'],
    watchOuts: ['Buying gold after it has already soared on fear', 'Leveraged commodity trackers', 'Thinking commodities always beat inflation year by year - they do not'],
    sections: [
      {
        title: 'The main types',
        bullets: [
          'Precious metals: gold and silver. The classic stores of value.',
          'Energy: oil and gas. Prices swing with wars, weather and politics.',
          'Agriculture: wheat, coffee, cocoa. Harvests and droughts rule prices.',
          'Industrial metals: copper, lithium. They follow the world economy’s ups and downs.'
        ],
        body: 'Four families, four different moods.'
      },
      {
        title: 'How do beginners buy gold?',
        body: 'You do not need a safe. A gold ETC on the stock exchange tracks the gold price, backed by real bars in a vault. You buy it like a share through any Financial Conduct Authority (FCA) regulated platform. Inside an ISA, gains are tax-free. Sovereign and Britannia coins from the Royal Mint are also free of Capital Gains Tax (CGT) for UK residents, as they are legal tender.'
      },
      {
        title: 'Why do prices swing so much?',
        body: 'Commodities obey supply and demand in its rawest form. A war closes an oil route: price spikes. A bumper wheat harvest: price sinks. There is no company quietly earning profits underneath to steady things, so the ride is bumpier than shares.'
      },
      {
        title: 'Commodities and tax (UK)',
        body: 'Gains on commodity ETCs count for Capital Gains Tax (CGT) above the £3,000 annual exempt amount, at 18% or 24% (2026/27). Inside an ISA or pension: no tax. UK legal-tender gold coins are CGT-free even outside a wrapper.'
      },
      {
        title: 'Who are commodities for?',
        body: 'Investors who already own shares and bonds and want a small slice of something that zigs when they zag. As a first or only investment, commodities are a poor choice: no income, no growth engine, just price hope.'
      }
    ],
    platforms: [
      { name: 'Hargreaves Lansdown (gold and commodity ETCs)', url: 'https://www.hl.co.uk', frn: '115248' },
      { name: 'interactive investor (gold and commodity ETCs)', url: 'https://www.ii.co.uk', frn: '141282' },
      { name: 'Trading 212 UK (commodity ETCs)', url: 'https://www.trading212.com', frn: '609146' },
    ],
    categories: [
      {
        name: 'Precious Metals',
        description: 'Gold, silver, platinum, and palladium; often used as a store of value.'
      },
      {
        name: 'Energy',
        description: 'Crude oil, natural gas, and coal used for power and transport.'
      },
      {
        name: 'Agricultural',
        description: 'Wheat, corn, soybeans, coffee, and other food staples.'
      },
      {
        name: 'Industrial Metals',
        description: 'Copper, aluminum, and zinc used in construction and manufacturing.'
      },
      {
        name: 'Livestock',
        description: 'Cattle and hogs used in meat production.'
      },
      {
        name: 'Soft Commodities',
        description: 'Cotton, sugar, and cocoa used in textiles and food production.'
      }
    ]
  },
  {
    id: 'crypto',

    name: 'Cryptocurrencies',
    tagline: 'Digital money bets. Huge swings, real losses, zero safety net.',
    overview:
      'Cryptocurrencies like Bitcoin are digital tokens recorded on a shared database called a blockchain. No government or bank backs them. Their price is set purely by what buyers will pay.',
    whyItMatters:
      'Crypto is the loudest corner of investing, and the one where beginners lose most. Understanding what it is (and what it is not) protects you from hype, scams and adverts promising riches.',
    howItWorks:
      'Think of a rare trading card. It has value only because other collectors agree it does. If the crowd loses interest, the price can fall to near zero. Crypto is the same, but traded globally, 24 hours a day, by people often using borrowed money.',
    keyIdeas: [
      'Crypto pays no interest or dividends. Only price moves.',
      'Swings of minus 50% or more in months have happened repeatedly.',
      'If a platform fails or your keys are stolen, there is usually no compensation. The Financial Services Compensation Scheme (FSCS) does not cover crypto.'
    ],
    risks: [
      'Total loss is possible. Many tokens have gone to zero.',
      'Scams are everywhere: fake coins, fake platforms, fake giveaways.',
      'The Financial Conduct Authority (FCA) bans crypto adverts to UK consumers unless registered, and says you should be prepared to lose everything.'
    ],
    beginnerSteps: [
      'Learn before you buy: our guide explains blockchains without jargon.',
      'Never invest money you cannot afford to lose completely.',
      'If you still want exposure, keep it tiny (many suggest under 5% of a portfolio) and use an FCA-registered firm.'
    ],
    goodFor: ['Nobody, as a core investment', 'A very small speculative slice for people who accept total loss'],
    watchOuts: ['Social media tips and celebrity coins', 'Platforms that are not FCA-registered', 'Borrowing money to buy crypto'],
    sections: [
      {
        title: 'What is a blockchain?',
        body: 'A blockchain is a shared notebook that thousands of computers keep identical copies of. Every transaction is a new line in the notebook. Once written, lines cannot be changed. That is the whole trick: no bank needed to keep score, but also no bank to call when things go wrong.'
      },
      {
        title: 'Why do prices swing so wildly?',
        body: 'There is no profit, rent or interest underneath to anchor the price. It floats on mood alone: news, tweets, fear and greed. When mood flips, everyone runs for the exit at once, and there is no floor.'
      },
      {
        title: 'Is crypto regulated in the UK?',
        body: 'Partly. Crypto firms serving UK customers must register with the Financial Conduct Authority (FCA) for anti-money-laundering checks, and financial promotions rules mean only registered firms can advertise crypto to UK consumers. But crypto itself is largely unregulated: if you lose money to a collapse or hack, you are on your own. The FCA’s line is blunt: be prepared to lose all your money. A new, fuller UK regime is being built now.'
      },
      {
        title: 'Crypto and tax (UK)',
        body: 'HM Revenue and Customs (HMRC) treats crypto as an asset. Selling, swapping one coin for another, or spending it can all trigger Capital Gains Tax (CGT): 18% or 24% above the £3,000 annual exempt amount (2026/27). You must keep records and report gains on Self Assessment. Our income tax and extra income guides walk through the forms.'
      },
      {
        title: 'Our honest view',
        body: 'Crypto is speculation, not investing. Speculation can be fine as entertainment money you can afford to lose. It is not a retirement plan, not a savings pot, and never something to borrow for. Nothing on this page is a recommendation or a financial promotion - it is education only.'
      }
    ],
    platforms: [
      { name: 'FCA Financial Services Register', url: 'https://register.fca.org.uk', note: 'Check any crypto firm is on the FCA cryptoasset register before using it. Crypto is not FSCS protected and scams are common.' },
    ],
    categories: [
      {
        name: 'Bitcoin',
        description: 'The first and most well-known cryptocurrency.'
      },
      {
        name: 'Ethereum',
        description: 'A platform enabling smart contracts and decentralized applications.'
      },
      {
        name: 'Altcoins',
        description: 'Cryptocurrencies other than Bitcoin, such as Litecoin or Ripple.'
      },
      {
        name: 'Stablecoins',
        description: 'Cryptocurrencies pegged to assets like the US dollar to reduce volatility.'
      },
      {
        name: 'Privacy Coins',
        description: 'Coins with enhanced privacy features such as Monero and Zcash.'
      }
    ]
  },
  {
    id: 'p2plending',

    name: 'Peer-to-Peer Lending',
    tagline: 'Be the bank: lend your money to strangers for interest.',
    overview:
      'Peer-to-peer (P2P) lending platforms match people who want to lend with people or businesses who want to borrow. Your money is sliced into many small loans, and borrowers repay with interest.',
    whyItMatters:
      'P2P pays more interest than a savings account - that is the attraction. The extra interest exists because the risk is real: borrowers can stop paying, and unlike a bank account there is no £85,000 Financial Services Compensation Scheme (FSCS) safety net.',
    howItWorks:
      'Imagine lending £10 each to 100 strangers at a market. Most pay you back with interest. A few vanish. The platform does the collecting and takes a cut. Your return is the interest minus the vanishers and the fees.',
    keyIdeas: [
      'Higher interest means higher risk. Always.',
      'Spreading across hundreds of loans softens the blow of defaults.',
      'No FSCS protection: if borrowers default or the platform collapses, you can lose money.'
    ],
    risks: [
      'Default risk: borrowers stop paying, especially in recessions.',
      'Platform risk: the P2P firm itself can fail.',
      'Liquidity risk: getting your money out early can take months or cost you.'
    ],
    beginnerSteps: [
      'Check the platform is authorised by the Financial Conduct Authority (FCA) - our list below shows verified registration numbers.',
      'Start small and spread across the maximum number of loans.',
      'Consider an Innovative Finance Individual Savings Account (ISA) so the interest is tax-free.'
    ],
    goodFor: ['A small income-seeking slice for people who accept the risks', 'Investors who understand there is no FSCS cover'],
    watchOuts: ['Chasing double-digit rates', 'Putting in money you might need back quickly', 'Assuming it works like a savings account - it does not'],
    sections: [
      {
        title: 'How does P2P make money?',
        body: 'Borrowers pay interest on their loans. The platform keeps some as its fee and passes the rest to you. Advertised rates of 5-9% look great next to savings accounts, but they are before defaults. After bad debts, real returns are lower and bumpier.'
      },
      {
        title: 'What can go wrong?',
        bullets: [
          'A recession hits and many borrowers default at once. Diversification helps, but bad years still bite.',
          'The platform fails. Your loans are contracts with borrowers, but collecting them without the platform is messy.',
          'You need money out fast. Selling loans early depends on other investors buying them.'
        ],
        body: 'Three honest answers.'
      },
      {
        title: 'The Innovative Finance ISA',
        body: 'An Innovative Finance Individual Savings Account (IF ISA) wraps P2P loans so the interest is tax-free, within your overall £20,000 ISA allowance. Tax-free is nice, but it does not reduce the risk of the loans themselves.'
      },
      {
        title: 'P2P and tax (UK)',
        body: 'Outside an ISA, P2P interest counts as savings income and is taxed at your income band. You can usually offset losses from defaulted loans against interest from other P2P loans. Report it through Self Assessment - see our extra income guide.'
      },
      {
        title: 'Who is P2P for?',
        body: 'Experienced savers who already have a cash buffer and understand that no FSCS cover means real losses are possible. As a first home for your money, a high-street savings account or a cash ISA is far safer.'
      }
    ],
    platforms: [
      { name: 'Funding Circle (loans to small businesses)', url: 'https://www.fundingcircle.com/uk/', frn: '722513' },
      { name: 'FCA Financial Services Register', url: 'https://register.fca.org.uk', note: 'Retail P2P lending has shrunk in the UK and is not FSCS protected - check any platform here first.' },
    ],
    categories: [
      {
        name: 'Personal Loans',
        description: 'Loans for debt consolidation, home improvements, or medical expenses.'
      },
      {
        name: 'Business Loans',
        description: 'Loans to finance business operations or expansion.'
      },
      {
        name: 'Student Loans',
        description: 'Loans to finance tuition, books, and living costs.'
      },
      {
        name: 'Auto Loans',
        description: 'Loans for vehicle purchases.'
      },
      {
        name: 'Real Estate Loans',
        description: 'Loans for residential or commercial property investments.'
      }
    ]
  },
  {
    id: 'collectibles',

    name: 'Collectibles',
    tagline: 'Watches, art, cards: passion purchases, not pension plans.',
    overview:
      'Collectibles are physical things people buy hoping they rise in value: art, watches, wine, trading cards, classic cars. They pay no income, cost money to keep, and are worth only what the next fan will pay.',
    whyItMatters:
      'Collectibles are where hobby meets money - and where beginners most often confuse the two. A love of watches is a fine hobby. It is not a retirement strategy. Knowing the difference saves painful lessons.',
    howItWorks:
      'Think of a rare toy in its original box. If more collectors want it next year, the price rises. If tastes change, it is just an old toy. Meanwhile you pay to insure it, store it, and prove it is real. Unlike shares, one collectible is one single bet with no earnings underneath.',
    keyIdeas: [
      'No income: the only return is selling for more than you paid.',
      'Value depends on fashion, rarity and condition - all three can change.',
      'Fakes are a real industry. Provenance (proof of history) is everything.'
    ],
    risks: [
      'Illiquid: finding a buyer at a fair price can take months.',
      'Costs eat returns: insurance, storage, auction fees of 15-25%.',
      'Fashion risk: what is hot today can be unloved for decades.'
    ],
    beginnerSteps: [
      'Buy with your heart, not your spreadsheet: only spend what you would enjoy owning at zero profit.',
      'Learn the market for years before spending serious money.',
      'Keep records and receipts: HM Revenue and Customs (HMRC) may want them when you sell.'
    ],
    goodFor: ['Joy first, money second', 'Genuine experts in a niche', 'Money you can lock away for decades'],
    watchOuts: ['Anyone who calls collectibles a safe investment', 'Storage and insurance costs quietly compounding', 'Selling through auction without adding up the fees'],
    sections: [
      {
        title: 'Why do people invest in collectibles?',
        body: 'Part passion, part scarcity. There are only so many vintage Rolex watches or first-edition Charizard cards. When rich collectors compete for fixed supply, prices rocket. The same scarcity story is told about everything from whisky casks to trainers - sometimes true, often marketing.'
      },
      {
        title: 'What do the numbers really look like?',
        body: 'Headlines love record auction prices. They rarely mention the seller’s 20% auction fee, ten years of insurance, or the hundreds of similar items that never rose at all. After costs, most collectibles underperform a simple global index fund - with far more effort and risk.'
      },
      {
        title: 'Collectibles and tax (UK)',
        body: 'HMRC calls these chattels: tangible, movable objects. Good news: items sold for under £6,000 are usually free of Capital Gains Tax (CGT). Above that, gains count towards your £3,000 annual exempt amount, taxed at 18% or 24% (2026/27). Wasting assets with a predictable life of 50 years or less (like most cars and wine) are usually CGT-free, but rules have traps - check GOV.UK.'
      },
      {
        title: 'Who are collectibles for?',
        body: 'Collectors who would buy the item anyway and treat any profit as a happy accident. If your goal is building wealth, boring index funds beat shiny objects for almost everyone.'
      }
    ],
    platforms: [
      { name: "Sotheby's (auction house)", url: 'https://www.sothebys.com', note: 'Auction houses are not FCA-regulated - no FSCS protection' },
      { name: "Christie's (auction house)", url: 'https://www.christies.com', note: 'Auction houses are not FCA-regulated - no FSCS protection' },
    ],
    categories: [
      {
        name: 'Art',
        description: 'Paintings, sculptures, and visual art with historical or aesthetic value.'
      },
      {
        name: 'Antiques',
        description: 'Items over 100 years old with historical or cultural significance.'
      },
      {
        name: 'Coins',
        description: 'Rare coins collected for historical and monetary value.'
      },
      {
        name: 'Stamps',
        description: 'Rare postage stamps valued for history and scarcity.'
      },
      {
        name: 'Memorabilia',
        description: 'Items tied to famous people, events, or periods.'
      }
    ]
  },
  {
    id: 'pension',

    name: 'Pension Funds',
    tagline: 'The government’s best gift to your future self.',
    overview:
      'A pension is a long-term savings pot with powerful tax breaks. Money goes in before income tax, grows untaxed, and from age 55 (rising to 57 in 2028) you can start taking it out - usually 25% of it tax-free.',
    whyItMatters:
      'The tax boost is unbeatable. For a basic-rate payer, £100 in your pocket becomes £125 in a pension instantly, because the tax you paid is handed back. Higher-rate payers get even more. Plus most employers must add money on top: turning that down is refusing part of your pay.',
    howItWorks:
      'Think of a locked money box with a generous sponsor. Every time you put in £80, the government adds £20 (basic rate). Your boss often adds more. The box stays locked until your mid-to-late fifties, then a quarter comes out tax-free and the rest is taxed as income when you withdraw it.',
    keyIdeas: [
      'Tax relief is free money: the government adds 20% automatically, and 40/45% payers claim back more.',
      'Employer contributions are part of your pay - always grab the full match.',
      'Your pension is usually invested in funds, so it grows like any other investing pot.'
    ],
    risks: [
      'Locked away: you cannot touch it until at least age 55 (57 from 2028).',
      'Rules change: governments tinker with ages, limits and tax.',
      'Fees and poor fund choices can quietly shrink the pot over decades.'
    ],
    beginnerSteps: [
      'Check you are opted into your workplace pension and getting the full employer match.',
      'Find old pensions from past jobs and consider combining them.',
      'Look at what your pension is actually invested in - many default funds are more cautious than a young saver needs.'
    ],
    goodFor: ['Almost everyone with earned income', 'Employed people (free employer money)', 'Higher-rate taxpayers (biggest relief)'],
    watchOuts: ['Opting out to boost take-home pay - you lose free employer cash', 'Ignoring old small pots', 'Paying high fees for decades without noticing'],
    sections: [
      {
        title: 'The two main types',
        bullets: [
          'Defined Contribution (DC): your pot depends on what goes in and how investments grow. Most modern workplace pensions and all personal pensions (SIPPs) work this way.',
          'Defined Benefit (DB): a promised income based on your salary and years of service. Common in the public sector, rare elsewhere now. Also called final salary schemes.'
        ],
        body: 'One is a pot, one is a promise.'
      },
      {
        title: 'What is a SIPP?',
        body: 'A Self-Invested Personal Pension (SIPP) is a pension you run yourself: you pick the provider and the investments, usually cheap index funds. It suits freelancers, or employees who want more choice than their workplace scheme offers. The same tax relief applies.'
      },
      {
        title: 'How much can you put in?',
        body: 'For 2026/27 the annual allowance is £60,000 or 100% of your earnings, whichever is lower. Very high earners see this taper down. Unused allowance from the last three years can sometimes be carried forward. Check GOV.UK for the latest, as these rules change often.'
      },
      {
        title: 'Taking money out',
        body: 'From age 55 (57 from April 2028) you can normally take 25% of the pot tax-free. The rest is taxed as income in the year you withdraw it, so taking it all at once can push you into a higher band. Many people draw it gradually, or buy an annuity (a guaranteed income for life).'
      },
      {
        title: 'Pension vs ISA',
        body: 'Pensions give tax relief going in but tax withdrawals later; an Individual Savings Account (ISA) gets no relief going in but everything out is tax-free. The classic answer: grab the employer match and pension relief first, then use ISAs for flexibility, since ISA money is never locked away.'
      }
    ],
    platforms: [
      { name: 'PensionBee', url: 'https://www.pensionbee.com', frn: '744931' },
      { name: 'Vanguard Investor UK', url: 'https://www.vanguardinvestor.co.uk', frn: '527839' },
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk', frn: '115248' },
      { name: 'AJ Bell', url: 'https://www.ajbell.co.uk', frn: '155593' },
    ],
    categories: [
      {
        name: 'Defined Benefit Plans',
        description: 'Promise a specified monthly benefit based on salary and years of service.'
      },
      {
        name: 'Defined Contribution Plans',
        description: 'Contributions are invested and outcomes depend on performance.'
      },
      {
        name: 'Public Pension Funds',
        description: 'Pensions for public sector employees like teachers or government workers.'
      },
      {
        name: 'Private Pension Funds',
        description: 'Pensions for private sector employees managed by private companies.'
      },
      {
        name: 'Cash Balance Plans',
        description: 'Hybrid plans combining defined benefit and defined contribution features.'
      }
    ]
  },
  {
    id: 'isa',

    name: 'ISAs',
    tagline: 'The tax-free wrapper every UK saver should use first.',
    overview:
      'An Individual Savings Account (ISA) is not an investment - it is a tax-free wrapper around savings or investments. Whatever grows inside is free of income tax and Capital Gains Tax (CGT), forever. You can put in up to £20,000 each tax year (2026/27).',
    whyItMatters:
      'Tax is the silent leak in every money pot. An ISA plugs it. Over 30 years, avoiding tax on growth and dividends can leave you tens of thousands of pounds better off than the same investments in a plain account.',
    howItWorks:
      'Think of a greenhouse. Plants (your investments) grow inside exactly the same as outside, but the weather (tax) cannot touch them. You can grow cash, shares, funds or peer-to-peer loans in there. Each tax year you get a fresh £20,000 allowance to add - use it or lose it.',
    keyIdeas: [
      'ISA = a wrapper, not an investment. You choose what goes inside.',
      '£20,000 per tax year across all your ISAs combined (2026/27).',
      'No tax ever on what happens inside: no income tax, no CGT, no paperwork.'
    ],
    risks: [
      'The wrapper has no risk - but whatever you put inside carries its normal risk.',
      'Unused annual allowance does not roll over: 5 April is the deadline each year.',
      'Withdrawing from a normal (non-flexible) ISA does not give you the allowance back.'
    ],
    beginnerSteps: [
      'Pick your type: Cash ISA for safety, Stocks and Shares ISA for growth (see below).',
      'Open one with an FCA-regulated provider - our list shows verified registration numbers.',
      'Set a monthly payment. Using the allowance steadily beats a panicked lump sum in March.'
    ],
    goodFor: ['Literally every UK adult saver and investor', 'Long-term tax-free growth', 'Keeping tax paperwork at zero'],
    watchOuts: ['Opening a Stocks and Shares ISA and leaving the money as cash', 'Paying platform fees you have not compared', 'Forgetting the £20,000 limit covers all ISAs together'],
    sections: [
      {
        title: 'The four main types',
        bullets: [
          'Cash ISA: a savings account where interest is always tax-free. Safe, steady, low growth.',
          'Stocks and Shares ISA: holds funds, shares and Exchange Traded Funds (ETFs). All growth and dividends tax-free.',
          'Lifetime ISA (LISA): for 18-39 year olds. Save up to £4,000 a year and the government adds 25%. For a first home (up to £450,000) or retirement from 60. Early withdrawals for anything else lose 25%.',
          'Innovative Finance ISA (IF ISA): wraps peer-to-peer lending so the interest is tax-free.'
        ],
        body: 'One allowance, four flavours.'
      },
      {
        title: 'Cash ISA or Stocks and Shares ISA?',
        body: 'Money you need within five years belongs in cash: markets can drop right when you need it. Money for the long haul has historically grown far faster invested. Many people use both: a Cash ISA for the emergency fund, a Stocks and Shares ISA for the future.'
      },
      {
        title: 'What is the Lifetime ISA catch?',
        body: 'The 25% government bonus is generous, but the exit rules are strict. Withdraw for anything other than a first home (under £450,000) or age 60, and the government takes 25% of the whole pot back - which claws back its bonus plus a slice of your own money. Only open one if you are sure about the purpose.'
      },
      {
        title: 'ISA rules worth knowing',
        bullets: [
          'The tax year runs 6 April to 5 April. Allowance resets on 6 April.',
          'You can pay into one of each type per year (one Cash, one Stocks and Shares, and so on).',
          'Transfers between providers keep the tax-free status - never just withdraw and move the cash.',
          'Some ISAs are flexible: take money out and put it back in the same tax year without losing allowance.'
        ],
        body: 'Four rules that catch people out.'
      },
      {
        title: 'Where to open one',
        body: 'Banks, building societies and investment platforms all offer ISAs. For a Stocks and Shares ISA, compare platform fees and fund choice - the platforms below are regulated by the Financial Conduct Authority (FCA) and we have verified each registration number on the FCA register.'
      }
    ],
    platforms: [
      { name: 'Moneybox', url: 'https://www.moneyboxapp.com', frn: '712935' },
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk', frn: '115248' },
      { name: 'AJ Bell', url: 'https://www.ajbell.co.uk', frn: '155593' },
      { name: 'interactive investor', url: 'https://www.ii.co.uk', frn: '141282' },
      { name: 'Vanguard Investor UK', url: 'https://www.vanguardinvestor.co.uk', frn: '527839' },
    ],
    categories: [
      {
        name: 'Cash ISAs',
        description: 'Tax-free savings interest with lower risk.'
      },
      {
        name: 'Stocks and Shares ISAs',
        description: 'Invest in stocks, bonds, and funds for higher potential returns.'
      },
      {
        name: 'Innovative Finance ISAs',
        description: 'Access peer-to-peer lending and alternative finance.'
      },
      {
        name: 'Lifetime ISAs',
        description: 'Save for your first home or retirement with a 25% government bonus.'
      },
      {
        name: 'Junior ISAs',
        description: 'Tax-free accounts for children under 18.'
      }
    ]
  }
]

export const assetClassMap = assetClasses.reduce((acc, item) => {
  acc[item.id] = item
  return acc
}, {} as Record<string, AssetClass>)
