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
  platforms?: { name: string; url: string }[]
  categories?: { name: string; description: string }[]
}

export const assetClasses: AssetClass[] = [
  {
    id: 'bonds',
    name: 'Bonds',
    tagline: 'The calm foundation of many long-term portfolios.',
    overview:
      'Bonds are loans you make to governments or companies. In return, they pay interest and return your original amount at maturity.',
    whyItMatters:
      'Bonds can add stability and income, especially when markets are volatile. They help balance riskier assets like stocks.',
    howItWorks:
      'Bond prices move based on interest rates and the issuer’s credit quality. You can hold a bond to maturity or trade it along the way.',
    keyIdeas: [
      'Government bonds are usually more stable than corporate bonds.',
      'Bond prices move opposite to interest rates.',
      'Inflation-linked bonds help protect purchasing power.'
    ],
    risks: [
      'Interest rate risk when rates rise.',
      'Credit risk if the issuer struggles.',
      'Inflation risk for fixed payments.'
    ],
    beginnerSteps: [
      'Start by learning government vs corporate bonds.',
      'Consider bond funds for diversification.',
      'Match bond duration to your time horizon.'
    ],
    goodFor: ['Stability', 'Income-focused goals', 'Balancing a stock-heavy portfolio'],
    watchOuts: ['Chasing yield without understanding risk', 'Ignoring inflation effects'],
    sections: [
      {
        title: 'What are gilts?',
        body: 'Gilts are UK government bonds. When you buy one, you are lending money to the government in exchange for interest payments.'
      },
      {
        title: 'Why are they interesting right now?',
        body: 'Rising interest rates can make new gilt yields more attractive, but prices of older bonds may fall. Focus on your time horizon and income needs.'
      },
      {
        title: 'Tax advantages (UK)',
        body: 'Some UK government bonds can offer tax advantages depending on your account type. Always check current rules and use ISAs or pensions where possible.'
      },
      {
        title: 'Where can you buy them?',
        body: 'You can buy gilts through brokers, investment platforms, or via bond funds.'
      },
      {
        title: 'How can you buy them?',
        body: 'You can buy individual gilts or bond funds/ETFs. Funds can offer instant diversification and simpler access.'
      },
      {
        title: 'Step-by-step guide',
        body: 'Know what you are buying. Focus on maturity date, yield, and how prices move when interest rates change.',
        bullets: [
          'Understand cash flows: interest payments plus principal at maturity.',
          'Learn terms like clean price vs dirty price.',
          'Decide whether you want income now or stability over time.'
        ]
      },
      {
        title: 'Who should consider them?',
        body: 'People who want stability, predictable income, or a lower-risk anchor in a diversified portfolio.'
      },
      {
        title: 'Who should not consider them?',
        body: 'Anyone needing very high growth or who cannot tolerate interest-rate driven price changes.'
      },
      {
        title: 'Where to go for more information',
        body: 'Use trusted, regulated sources and official government resources when learning about gilts.'
      }
    ],
    platforms: [
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk' },
      { name: 'AJ Bell Youinvest', url: 'https://www.youinvest.co.uk' },
      { name: 'Interactive Investor', url: 'https://www.ii.co.uk' },
      { name: "Government's Savings and Investments (NS&I)", url: 'https://www.nsandi.com' },
      { name: 'Fidelity', url: 'https://www.fidelity.co.uk' },
      { name: 'Vanguard Investor', url: 'https://www.vanguardinvestor.co.uk' }
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
    tagline: 'Ownership in companies with long-term growth potential.',
    overview:
      'Stocks represent a share of a company. When the company grows, the value of your share can increase.',
    whyItMatters:
      'Stocks historically offer higher long-term returns than cash or bonds, but they can be volatile.',
    howItWorks:
      'Prices move based on earnings, expectations, and sentiment. Long-term investors focus on business quality and time.',
    keyIdeas: ['Ownership, not lottery tickets', 'Diversify across sectors', 'Time smooths volatility'],
    risks: ['Short-term price swings', 'Company-specific risk', 'Emotional decision-making'],
    beginnerSteps: ['Learn what a share represents', 'Use broad index funds to diversify', 'Invest regularly'],
    goodFor: ['Long-term growth', 'Building wealth over decades'],
    watchOuts: ['Overtrading', 'Chasing hype'],
    platforms: [
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk' },
      { name: 'AJ Bell Youinvest', url: 'https://www.youinvest.co.uk' },
      { name: 'Interactive Investor', url: 'https://www.ii.co.uk' }
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
    name: 'Mutual Funds',
    tagline: 'Professionally managed baskets of investments.',
    overview:
      'Mutual funds pool money from many investors and invest in a diversified set of assets.',
    whyItMatters:
      'They make diversification easier and can fit different risk levels depending on the fund strategy.',
    howItWorks:
      'You buy units in the fund, and the manager invests according to the fund’s stated goals.',
    keyIdeas: ['Diversification built in', 'Check fees carefully', 'Understand the fund’s strategy'],
    risks: ['Manager risk', 'Fees reduce returns', 'Not all funds are diversified'],
    beginnerSteps: ['Compare fees and strategies', 'Start with broad market funds', 'Review fund objectives'],
    goodFor: ['Hands-off diversification', 'Beginner-friendly investing'],
    watchOuts: ['High fees', 'Style drift'],
    platforms: [
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk' },
      { name: 'AJ Bell Youinvest', url: 'https://www.youinvest.co.uk' },
      { name: 'Interactive Investor', url: 'https://www.ii.co.uk' },
      { name: 'Vanguard Investor', url: 'https://www.vanguardinvestor.co.uk' },
      { name: 'iShares (BlackRock)', url: 'https://www.ishares.com/uk' },
      { name: 'Legal & General Investment Management (LGIM)', url: 'https://www.lgim.com/uk/en' }
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
    name: 'ETFs',
    tagline: 'Index-style diversification that trades like a stock.',
    overview:
      'ETFs (Exchange Traded Funds) bundle many assets and trade on an exchange throughout the day.',
    whyItMatters:
      'They are flexible, often low-cost, and can give broad exposure with one purchase.',
    howItWorks:
      'Prices move throughout the day, but the underlying assets follow the index or strategy.',
    keyIdeas: ['Low cost', 'Diversified', 'Transparent holdings'],
    risks: ['Market risk', 'Niche ETFs can be volatile'],
    beginnerSteps: ['Start with broad market ETFs', 'Check expense ratios', 'Avoid overly complex products'],
    goodFor: ['Passive investing', 'Low-cost diversification'],
    watchOuts: ['Overly narrow or leveraged ETFs'],
    platforms: [
      { name: 'Vanguard', url: 'https://www.vanguard.com' },
      { name: 'iShares', url: 'https://www.ishares.com' },
      { name: 'SPDR', url: 'https://www.spdrs.com' },
      { name: 'Legal & General Investment Management (LGIM)', url: 'https://www.lgim.com/uk/en' }
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
    tagline: 'Property exposure through ownership or funds.',
    overview:
      'Real estate includes physical property or real estate funds/REITs that provide property exposure.',
    whyItMatters:
      'Real estate can provide income and diversification, but it is less liquid than stocks or bonds.',
    howItWorks:
      'Returns come from rental income and property value changes. REITs trade like stocks.',
    keyIdeas: ['Location matters', 'Income potential', 'Illiquid compared to markets'],
    risks: ['Property market cycles', 'High transaction costs', 'Liquidity constraints'],
    beginnerSteps: ['Learn about REITs as a starting point', 'Understand total costs', 'Avoid over-leverage'],
    goodFor: ['Income seekers', 'Diversification'],
    watchOuts: ['Too much concentration in one property'],
    platforms: [
      { name: 'Zillow', url: 'https://www.zillow.com' },
      { name: 'Realtor', url: 'https://www.realtor.com' },
      { name: 'Redfin', url: 'https://www.redfin.com' },
      { name: 'Property Partner', url: 'https://www.propertypartner.co' },
      { name: 'Bricklane', url: 'https://www.bricklane.com' },
      { name: 'The House Crowd', url: 'https://www.thehousecrowd.com' }
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
    tagline: 'Exposure to physical resources like gold or oil.',
    overview:
      'Commodities include energy, metals, and agriculture. They often behave differently than stocks and bonds.',
    whyItMatters:
      'They can help hedge inflation or provide diversification in certain market conditions.',
    howItWorks:
      'Prices move based on global supply, demand, and geopolitics.',
    keyIdeas: ['Cyclical', 'Sensitive to global events', 'Useful in small doses'],
    risks: ['High volatility', 'Complex pricing drivers'],
    beginnerSteps: ['Keep exposure small', 'Use diversified funds', 'Understand what drives prices'],
    goodFor: ['Diversification', 'Inflation hedging'],
    watchOuts: ['Speculation without a plan'],
    platforms: [
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk' },
      { name: 'AJ Bell Youinvest', url: 'https://www.youinvest.co.uk' },
      { name: 'Interactive Investor', url: 'https://www.ii.co.uk' },
      { name: 'eToro', url: 'https://www.etoro.com' },
      { name: 'Plus500', url: 'https://www.plus500.com' },
      { name: 'Interactive Brokers', url: 'https://www.interactivebrokers.co.uk' }
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
    tagline: 'High-risk digital assets with extreme volatility.',
    overview:
      'Cryptocurrencies are digital tokens that rely on blockchain technology. They are highly speculative.',
    whyItMatters:
      'Some investors use crypto for diversification, but it requires a high risk tolerance.',
    howItWorks:
      'Prices are driven by adoption, speculation, and sentiment, with large daily swings.',
    keyIdeas: ['Very volatile', 'Still evolving', 'Speculative by nature'],
    risks: ['Regulatory risk', 'Security risk', 'Extreme volatility'],
    beginnerSteps: ['Learn basics before buying', 'Only invest what you can lose', 'Avoid leverage'],
    goodFor: ['High-risk tolerance', 'Speculative learning'],
    watchOuts: ['Scams and hype cycles'],
    platforms: [
      { name: 'Coinbase', url: 'https://www.coinbase.com' },
      { name: 'Binance', url: 'https://www.binance.com' },
      { name: 'Kraken', url: 'https://www.kraken.com' },
      { name: 'Bitstamp', url: 'https://www.bitstamp.net/' }
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
    tagline: 'Lending directly to individuals or businesses.',
    overview:
      'Peer-to-peer platforms connect borrowers and lenders. You earn interest if borrowers repay.',
    whyItMatters:
      'It can offer steady income, but risks depend on borrower defaults.',
    howItWorks:
      'You spread your money across many loans to reduce default risk.',
    keyIdeas: ['Diversify loans', 'Understand platform risk', 'Income focused'],
    risks: ['Borrower defaults', 'Platform failures', 'Liquidity limits'],
    beginnerSteps: ['Start small', 'Diversify across many loans', 'Review platform track record'],
    goodFor: ['Income seekers', 'Alternative diversification'],
    watchOuts: ['Concentration in few loans'],
    platforms: [
      { name: 'LendingClub', url: 'https://www.lendingclub.com' },
      { name: 'Prosper', url: 'https://www.prosper.com' },
      { name: 'RateSetter', url: 'https://www.ratesetter.com' },
      { name: 'Zopa', url: 'https://www.zopa.com' },
      { name: 'Funding Circle', url: 'https://www.fundingcircle.com' }
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
    tagline: 'Alternative assets like art, wine, or rare items.',
    overview:
      'Collectibles are tangible items whose value depends on scarcity and demand.',
    whyItMatters:
      'They can provide diversification but require expertise and patience.',
    howItWorks:
      'Value is subjective and often tied to trends or cultural demand.',
    keyIdeas: ['Illiquid', 'Hard to value', 'High transaction costs'],
    risks: ['Market illiquidity', 'Authenticity risk', 'Storage costs'],
    beginnerSteps: ['Learn the market deeply', 'Avoid speculative hype', 'Start with small purchases'],
    goodFor: ['Passion-driven investing'],
    watchOuts: ['Overpaying due to hype'],
    platforms: [
      { name: "Sotheby's", url: 'https://www.sothebys.com' },
      { name: "Christie's", url: 'https://www.christies.com' },
      { name: 'eBay', url: 'https://www.ebay.com' },
      { name: 'The Fine Art Group', url: 'https://www.thefineartgroup.com' },
      { name: 'Masterworks', url: 'https://www.masterworks.io' },
      { name: 'StartEngine', url: 'https://www.startengine.com' }
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
    tagline: 'Long-term retirement investing with tax advantages.',
    overview:
      'Pension funds are retirement accounts that invest across asset classes to grow over decades.',
    whyItMatters:
      'They often come with employer contributions and tax benefits, making them powerful for long-term goals.',
    howItWorks:
      'Contributions are invested in diversified portfolios, usually with a long-term strategy.',
    keyIdeas: ['Tax advantages', 'Long time horizon', 'Diversified by default'],
    risks: ['Market risk', 'Access restrictions'],
    beginnerSteps: ['Understand contribution rules', 'Review fund choices', 'Stay invested long term'],
    goodFor: ['Retirement planning', 'Long-term wealth building'],
    watchOuts: ['Ignoring fees and fund selection'],
    platforms: [
      { name: 'Vanguard', url: 'https://www.vanguard.com' },
      { name: 'Fidelity', url: 'https://www.fidelity.com' },
      { name: 'Charles Schwab', url: 'https://www.schwab.com' },
      { name: 'AJ Bell Youinvest', url: 'https://www.youinvest.co.uk' },
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk' },
      { name: 'Nutmeg', url: 'https://www.nutmeg.com' }
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
    tagline: 'Tax-efficient savings and investing accounts in the UK.',
    overview:
      'ISAs are wrappers that allow your investments to grow tax-free, subject to annual limits.',
    whyItMatters:
      'They help you keep more of your returns by reducing tax on gains and income.',
    howItWorks:
      'You choose investments inside the ISA, which can include cash, stocks, or funds.',
    keyIdeas: ['Tax advantages', 'Flexible investment choices', 'Annual contribution limits'],
    risks: ['Still subject to market risk', 'Penalties for exceeding limits'],
    beginnerSteps: ['Choose the ISA type that fits your goal', 'Automate contributions', 'Invest simply'],
    goodFor: ['Tax-efficient investing', 'General savings goals'],
    watchOuts: ['Leaving money idle in cash'],
    platforms: [
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk' },
      { name: 'AJ Bell Youinvest', url: 'https://www.youinvest.co.uk' },
      { name: 'Interactive Investor', url: 'https://www.ii.co.uk' },
      { name: 'Nutmeg', url: 'https://www.nutmeg.com' }
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
