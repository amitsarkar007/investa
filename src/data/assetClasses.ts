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
    sections: [
      {
        title: 'What are stocks?',
        body: 'Stocks (also called shares or equities) represent ownership in a company. When you buy a stock, you own a small piece of that company. If the company does well, your share can increase in value. You may also receive dividends—regular payments from the company\'s profits.'
      },
      {
        title: 'Why invest in stocks?',
        body: 'Historically, stocks have provided higher long-term returns than cash or bonds. Over decades, well-diversified stock portfolios have typically grown faster than inflation, helping build real wealth. However, this comes with higher short-term volatility.',
        bullets: [
          'Potential for higher returns over long periods (typically 5-7% annually after inflation)',
          'Ownership in growing businesses',
          'Dividend income from profitable companies',
          'Liquidity—you can usually sell quickly if needed'
        ]
      },
      {
        title: 'How do stock prices work?',
        body: 'Stock prices change constantly based on supply and demand. Factors include company earnings, economic conditions, investor sentiment, and news. Prices can swing daily, but long-term investors focus on business fundamentals rather than daily movements.',
        bullets: [
          'Prices reflect what buyers are willing to pay and sellers are willing to accept',
          'Earnings reports, news, and economic data can cause price movements',
          'Market sentiment and emotions can drive short-term volatility',
          'Long-term value is driven by company performance and growth'
        ]
      },
      {
        title: 'Types of stocks',
        body: 'Stocks can be categorized in many ways. Understanding these categories helps you build a diversified portfolio.',
        bullets: [
          'By size: Large-cap (established companies), mid-cap, small-cap (smaller, potentially faster-growing)',
          'By style: Growth stocks (focus on expansion) vs value stocks (priced below perceived worth)',
          'By sector: Technology, healthcare, finance, consumer goods, energy, etc.',
          'By geography: UK stocks, international stocks, emerging markets',
          'By dividend policy: Dividend-paying vs growth companies that reinvest profits'
        ]
      },
      {
        title: 'How to buy stocks in the UK',
        body: 'You can buy stocks through investment platforms, brokers, or stockbrokers. Most beginners use online platforms that offer easy access, research tools, and often lower fees.',
        bullets: [
          'Open an account with a UK-regulated investment platform',
          'Consider using a Stocks and Shares ISA for tax-free investing (up to £20,000 per year)',
          'Compare platform fees: trading fees, annual charges, and foreign exchange fees',
          'Start with index funds or ETFs for instant diversification',
          'Consider fractional shares if you want to invest small amounts'
        ]
      },
      {
        title: 'Step-by-step: Buying your first stock',
        body: 'If you want to buy individual stocks, here\'s a simple process. However, most beginners should start with diversified funds.',
        bullets: [
          'Research the company: understand what it does, its financial health, and growth prospects',
          'Check the stock price and valuation metrics (P/E ratio, etc.)',
          'Decide how much to invest (never invest more than you can afford to lose)',
          'Place an order through your platform (market order or limit order)',
          'Monitor your investment, but avoid checking daily—focus on long-term performance',
          'Consider setting up automatic investments to build discipline'
        ]
      },
      {
        title: 'Risks and how to manage them',
        body: 'Stock investing carries risks. Understanding and managing these risks is crucial for long-term success.',
        bullets: [
          'Company-specific risk: A single company can fail. Solution: Diversify across many stocks',
          'Market risk: Entire markets can decline. Solution: Invest for the long term (5+ years)',
          'Volatility risk: Prices swing daily. Solution: Ignore short-term noise, focus on decades',
          'Emotional risk: Fear and greed lead to poor decisions. Solution: Stick to a plan, avoid panic selling',
          'Inflation risk: Returns may not beat inflation. Solution: Choose quality companies with growth potential'
        ]
      },
      {
        title: 'Tax considerations (UK)',
        body: 'Understanding UK tax rules helps you keep more of your returns. ISAs and pensions offer tax advantages.',
        bullets: [
          'Stocks and Shares ISA: Up to £20,000 per year, all gains and dividends are tax-free',
          'Capital Gains Tax: Applies if you sell outside an ISA and profits exceed the annual allowance (£6,000 in 2023/24)',
          'Dividend tax: First £1,000 of dividends are tax-free, then taxed at your income tax rate',
          'Pension contributions: Get tax relief, but money is locked until age 55+',
          'Always check current tax rules as they change regularly'
        ]
      },
      {
        title: 'Common mistakes to avoid',
        body: 'Many beginners make these mistakes. Learning from them can save you money and stress.',
        bullets: [
          'Overtrading: Buying and selling too frequently increases fees and taxes',
          'Chasing hot stocks: What\'s popular today may not be tomorrow',
          'Not diversifying: Putting all money in one stock is risky',
          'Panic selling: Selling during market downturns locks in losses',
          'Ignoring fees: High fees eat into returns over time',
          'Trying to time the market: Even professionals struggle with this'
        ]
      },
      {
        title: 'Who should invest in stocks?',
        body: 'Stocks suit investors with a long time horizon (5+ years) who can tolerate volatility. They\'re less suitable for money needed soon or for risk-averse investors.'
      },
      {
        title: 'Where to go for more information',
        body: 'Use trusted, regulated sources. The FCA (Financial Conduct Authority) website has investor guides. Many platforms offer educational content. Avoid get-rich-quick schemes and unregulated "gurus".'
      }
    ],
    platforms: [
      { name: 'Hargreaves Lansdown', url: 'https://www.hl.co.uk' },
      { name: 'AJ Bell Youinvest', url: 'https://www.youinvest.co.uk' },
      { name: 'Interactive Investor', url: 'https://www.ii.co.uk' },
      { name: 'Vanguard Investor', url: 'https://www.vanguardinvestor.co.uk' },
      { name: 'Fidelity', url: 'https://www.fidelity.co.uk' },
      { name: 'Trading 212', url: 'https://www.trading212.com' }
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
    sections: [
      {
        title: 'What are mutual funds?',
        body: 'Mutual funds pool money from many investors to buy a diversified portfolio of stocks, bonds, or other assets. A professional fund manager makes investment decisions based on the fund\'s stated objectives. You buy units in the fund, and the value of your units rises or falls with the fund\'s performance.'
      },
      {
        title: 'Why invest in mutual funds?',
        body: 'Funds offer instant diversification, professional management, and convenience. Instead of buying dozens of individual stocks, you can invest in one fund that holds many investments.',
        bullets: [
          'Instant diversification across many investments',
          'Professional management (though this comes with fees)',
          'Access to investments you might not be able to buy individually',
          'Convenience: one purchase gives you exposure to many assets',
          'Suitable for beginners who want hands-off investing'
        ]
      },
      {
        title: 'Types of mutual funds',
        body: 'Funds come in many varieties, each with different strategies, risks, and costs.',
        bullets: [
          'Equity funds: Invest primarily in stocks (can focus on regions, sectors, or styles)',
          'Bond funds: Invest in government and corporate bonds',
          'Balanced funds: Mix of stocks and bonds',
          'Index funds: Track a market index (usually lower fees)',
          'Active funds: Managers try to beat the market (usually higher fees)',
          'Sector funds: Focus on specific industries like technology or healthcare',
          'International funds: Invest in companies outside the UK'
        ]
      },
      {
        title: 'Understanding fund fees',
        body: 'Fees matter significantly over time. A 1% annual fee can reduce your returns by thousands over decades. Always check the Ongoing Charges Figure (OCF) or Total Expense Ratio (TER).',
        bullets: [
          'Ongoing Charges Figure (OCF): Annual fee covering management and administration',
          'Entry/exit fees: Some funds charge when you buy or sell',
          'Performance fees: Some active funds charge extra if they beat targets',
          'Platform fees: Your investment platform may charge separately',
          'Compare funds with similar strategies—lower fees often mean better long-term returns'
        ]
      },
      {
        title: 'How to choose a fund',
        body: 'Selecting the right fund depends on your goals, risk tolerance, and time horizon. Here\'s a systematic approach.',
        bullets: [
          'Define your goal: What are you investing for? Retirement? House deposit?',
          'Assess your risk tolerance: Can you handle volatility?',
          'Check the fund\'s objective: Does it match your goals?',
          'Review past performance: But remember, past performance doesn\'t guarantee future results',
          'Compare fees: Lower is usually better, especially for similar strategies',
          'Check the fund manager\'s track record (for active funds)',
          'Read the fund factsheet: Understand what the fund invests in'
        ]
      },
      {
        title: 'Step-by-step: Investing in a fund',
        body: 'Getting started with funds is straightforward, especially through UK investment platforms.',
        bullets: [
          'Open an account with a UK-regulated investment platform',
          'Consider using a Stocks and Shares ISA for tax-free investing',
          'Research funds that match your goals and risk tolerance',
          'Compare fees and performance (but don\'t rely solely on past performance)',
          'Decide how much to invest (many platforms allow small regular investments)',
          'Set up automatic monthly investments to build discipline',
          'Review your funds annually, but avoid constant switching'
        ]
      },
      {
        title: 'Active vs passive funds',
        body: 'Active funds have managers who try to beat the market. Passive funds (index funds) simply track a market index. Most evidence suggests passive funds often outperform active funds after fees.',
        bullets: [
          'Active funds: Higher fees, managers make investment decisions, aim to beat the market',
          'Passive funds: Lower fees, track an index automatically, aim to match the market',
          'For most investors, low-cost passive funds are a better choice',
          'Active funds can make sense if you find a skilled manager with reasonable fees',
          'Many investors use passive funds as the core of their portfolio'
        ]
      },
      {
        title: 'Risks and considerations',
        body: 'While funds offer diversification, they still carry risks. Understanding these helps you invest wisely.',
        bullets: [
          'Market risk: Funds can still lose value if markets decline',
          'Manager risk: Active fund managers can underperform',
          'Fees: High fees significantly reduce returns over time',
          'Style drift: Some funds change strategy over time',
          'Liquidity: Most funds can be sold quickly, but some specialized funds may have restrictions',
          'Currency risk: International funds are affected by exchange rates'
        ]
      },
      {
        title: 'Tax considerations (UK)',
        body: 'Fund investing has tax implications. Using tax-advantaged accounts can help you keep more of your returns.',
        bullets: [
          'Stocks and Shares ISA: Up to £20,000 per year, all gains are tax-free',
          'Dividend tax: Applies outside ISAs after the £1,000 annual dividend allowance',
          'Capital Gains Tax: Applies if you sell outside an ISA and profits exceed the annual allowance',
          'Pension funds: Get tax relief on contributions, but money is locked until age 55+',
          'Always check current tax rules as they change regularly'
        ]
      },
      {
        title: 'Common mistakes to avoid',
        body: 'Avoid these common pitfalls when investing in funds.',
        bullets: [
          'Chasing past performance: Top performers often revert to average',
          'Ignoring fees: Small percentage differences compound over decades',
          'Over-diversifying: Too many similar funds doesn\'t help',
          'Switching funds too often: This increases costs and taxes',
          'Not reading fund documents: Understand what you\'re investing in',
          'Paying for active management when passive would work'
        ]
      },
      {
        title: 'Who should invest in mutual funds?',
        body: 'Funds suit investors who want diversification without picking individual stocks. They\'re especially good for beginners and those who prefer hands-off investing.'
      },
      {
        title: 'Where to go for more information',
        body: 'Use trusted sources. The FCA website, fund factsheets, and reputable investment platforms offer educational content. Avoid unregulated advice and get-rich-quick schemes.'
      }
    ],
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
    sections: [
      {
        title: 'What are ETFs?',
        body: 'ETFs (Exchange Traded Funds) are investment funds that trade on stock exchanges like individual stocks. They hold a basket of assets (stocks, bonds, commodities) and aim to track an index or follow a specific strategy. You can buy and sell ETF shares throughout the trading day at market prices.'
      },
      {
        title: 'Why invest in ETFs?',
        body: 'ETFs combine the diversification of mutual funds with the flexibility of stocks. They\'re often low-cost, transparent, and easy to trade.',
        bullets: [
          'Low costs: Many ETFs have expense ratios under 0.5%',
          'Diversification: One ETF can hold hundreds of investments',
          'Transparency: Holdings are usually disclosed daily',
          'Flexibility: Trade throughout the day like stocks',
          'Tax efficiency: Often more tax-efficient than mutual funds',
          'Access: Easy to buy through most investment platforms'
        ]
      },
      {
        title: 'How ETFs work',
        body: 'ETFs are created by financial institutions that buy the underlying assets and issue ETF shares. The price should track the value of the underlying assets, though it can deviate slightly during trading hours.',
        bullets: [
          'Creation/redemption process: Large institutions can create or redeem ETF shares',
          'Market price vs NAV: ETF price may differ slightly from net asset value',
          'Bid-ask spread: The difference between buying and selling prices',
          'Trading: Buy and sell like stocks through your investment platform',
          'Dividends: Many ETFs pay dividends from underlying holdings'
        ]
      },
      {
        title: 'Types of ETFs',
        body: 'ETFs cover virtually every asset class and investment strategy. Understanding the types helps you choose wisely.',
        bullets: [
          'Equity ETFs: Track stock indices (FTSE 100, S&P 500, etc.)',
          'Bond ETFs: Provide exposure to government and corporate bonds',
          'Commodity ETFs: Track gold, oil, agricultural products',
          'Sector ETFs: Focus on specific industries (technology, healthcare)',
          'International ETFs: Provide exposure to global markets',
          'Thematic ETFs: Focus on trends (renewable energy, AI, etc.)',
          'Leveraged/inverse ETFs: Use derivatives (high risk, avoid unless you understand them)'
        ]
      },
      {
        title: 'ETFs vs mutual funds',
        body: 'ETFs and mutual funds are similar but have key differences. ETFs often have lower costs and more flexibility.',
        bullets: [
          'Trading: ETFs trade throughout the day; mutual funds price once daily',
          'Costs: ETFs often have lower expense ratios',
          'Minimum investment: ETFs can be bought for the price of one share; mutual funds may have minimums',
          'Tax efficiency: ETFs are often more tax-efficient due to structure',
          'Transparency: ETFs usually disclose holdings daily; mutual funds monthly/quarterly',
          'Both offer diversification and professional management'
        ]
      },
      {
        title: 'How to choose an ETF',
        body: 'Selecting the right ETF involves understanding what it tracks, its costs, and whether it fits your goals.',
        bullets: [
          'Check what index or strategy it tracks: Does it match your goals?',
          'Compare expense ratios: Lower is usually better for similar strategies',
          'Check tracking error: How closely does it follow its index?',
          'Review assets under management: Very small ETFs may have liquidity issues',
          'Understand the underlying holdings: Read the ETF factsheet',
          'Check dividend policy: Does it pay dividends? How often?',
          'Consider currency hedging: International ETFs may or may not hedge currency risk'
        ]
      },
      {
        title: 'Step-by-step: Buying an ETF',
        body: 'Buying ETFs is straightforward through UK investment platforms.',
        bullets: [
          'Open an account with a UK-regulated investment platform',
          'Consider using a Stocks and Shares ISA for tax-free investing',
          'Research ETFs that match your investment goals',
          'Compare costs: expense ratio, trading fees, platform fees',
          'Decide how many shares to buy (you can buy fractional shares on some platforms)',
          'Place a market order or limit order through your platform',
          'Set up automatic investments if your platform supports it',
          'Monitor your investment, but focus on long-term performance'
        ]
      },
      {
        title: 'Understanding ETF costs',
        body: 'ETF costs include the expense ratio, trading fees, and platform fees. Understanding all costs helps you make better decisions.',
        bullets: [
          'Expense ratio: Annual fee (shown as a percentage) deducted from the fund',
          'Trading fees: Commission charged by your platform (many platforms offer free ETF trading)',
          'Bid-ask spread: Difference between buying and selling prices (usually small for popular ETFs)',
          'Platform fees: Annual charges from your investment platform',
          'Foreign exchange fees: May apply to international ETFs',
          'Total cost: Add all fees to understand your true cost'
        ]
      },
      {
        title: 'Risks and considerations',
        body: 'ETFs carry market risk and other considerations. Understanding these helps you invest appropriately.',
        bullets: [
          'Market risk: ETF values can decline if underlying assets fall',
          'Tracking error: ETF may not perfectly match its index',
          'Liquidity risk: Some niche ETFs may be harder to sell',
          'Currency risk: International ETFs are affected by exchange rates',
          'Concentration risk: Sector or thematic ETFs may be less diversified',
          'Leveraged ETFs: Use derivatives and are very risky—avoid unless you fully understand them'
        ]
      },
      {
        title: 'Tax considerations (UK)',
        body: 'ETFs have tax implications. Using tax-advantaged accounts maximizes your returns.',
        bullets: [
          'Stocks and Shares ISA: Up to £20,000 per year, all gains are tax-free',
          'Dividend tax: Applies outside ISAs after the £1,000 annual dividend allowance',
          'Capital Gains Tax: Applies if you sell outside an ISA and profits exceed the annual allowance',
          'Withholding tax: Some international ETFs may have foreign tax implications',
          'Always check current tax rules as they change regularly'
        ]
      },
      {
        title: 'Common mistakes to avoid',
        body: 'Avoid these pitfalls when investing in ETFs.',
        bullets: [
          'Chasing performance: Past returns don\'t guarantee future results',
          'Over-complicating: Simple broad-market ETFs often work best',
          'Ignoring costs: Small fee differences compound over time',
          'Trading too frequently: Increases costs and taxes',
          'Using leveraged ETFs: These are complex and risky',
          'Not understanding what you\'re buying: Read the ETF factsheet'
        ]
      },
      {
        title: 'Who should invest in ETFs?',
        body: 'ETFs suit investors who want low-cost, diversified exposure to markets. They\'re especially good for passive investors and those building long-term portfolios.'
      },
      {
        title: 'Where to go for more information',
        body: 'Use trusted sources. ETF providers\' websites, the FCA website, and reputable investment platforms offer educational content. Avoid unregulated advice.'
      }
    ],
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
