import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppShell } from './App'
import { assetClasses } from './data/assetClasses'
import { contentPages } from './data/contentPages'

export type RouteMeta = { path: string; title: string; description: string }

const staticRoutes: RouteMeta[] = [
  {
    path: '/',
    title: 'Investa | UK Investing, Explained - Asset Classes, Tax & Costs',
    description:
      'Free, plain-English UK investment education: every asset class, what investing costs, Capital Gains Tax and ISAs, investing in foreign currencies, and reporting gains on Self Assessment.',
  },
  { path: '/start', title: 'Start Here | Investa', description: 'New to investing? Start here: what investing is, who it is for, and how to learn step by step - free UK education.' },
  { path: '/learning', title: 'All Guides | Investa', description: 'Every Investa guide: asset classes, money basics, risk and return, historical returns and more, in plain English.' },
  { path: '/faq', title: 'FAQs | Investa', description: 'Answers to the questions UK beginners actually ask about investing, risk, tax and getting started.' },
  { path: '/about', title: 'About Investa', description: 'Investa is a free UK investment education project from A2JS Technologies. Learn how the site works and how it is funded.' },
  { path: '/contact', title: 'Contact Investa', description: 'Questions or feedback about Investa? Get in touch.' },
  { path: '/ethics', title: 'Ethics, Transparency & Warnings | Investa', description: 'How Investa stays trustworthy: education only, no get-rich-quick ideas, no hidden incentives.' },
  { path: '/definitions', title: 'Financial & Business Definitions | Investa', description: 'Over 73 financial and business terms explained in plain English for UK beginners.' },
  { path: '/tools', title: 'Tools & Calculators | Investa', description: 'Free interactive calculators: compound growth, inflation impact, and risk vs return visualisations.' },
  { path: '/why-invest', title: 'Why Invest? | Investa', description: 'Why investing matters: inflation, long-term growth and real-life goals, explained simply.' },
  { path: '/basics', title: 'Basic Money Concepts | Investa', description: 'Money, saving vs investing, interest, compounding and risk - the building blocks, with zero assumptions.' },
  { path: '/fears', title: 'Common Fears & Myths | Investa', description: 'Is investing gambling? Do you need lots of money? Honest answers to the fears that stop beginners.' },
  { path: '/risk-return', title: 'Risk vs Return | Investa', description: 'How risk and return relate across UK asset classes, with a simple visual comparison.' },
  { path: '/historical', title: 'Historical Returns | Investa', description: 'What different asset classes have returned historically, and what that does (and does not) tell you.' },
]

export function getRoutes(): RouteMeta[] {
  const assetRoutes: RouteMeta[] = assetClasses.map((a) => ({
    path: `/${a.id}`,
    title: `${a.name} Explained | Investa`,
    description: `${a.tagline} A plain-English UK guide to ${a.name.toLowerCase()}: how it works, the risks, and how beginners can start.`,
  }))
  const contentRoutes: RouteMeta[] = contentPages.map((p) => ({
    path: p.path,
    title: `${p.title} | Investa`,
    description: p.description,
  }))
  return [...staticRoutes, ...assetRoutes, ...contentRoutes]
}

export function render(path: string): string {
  return renderToString(
    <StaticRouter location={path}>
      <AppShell />
    </StaticRouter>
  )
}
