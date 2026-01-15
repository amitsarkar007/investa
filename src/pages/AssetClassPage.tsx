import { Link, useParams } from 'react-router-dom'
import { assetClassMap, assetClasses } from '../data/assetClasses'

type AssetClassPageProps = {
  assetId?: string
}

export default function AssetClassPage({ assetId }: AssetClassPageProps) {
  const params = useParams()
  const id = assetId ?? params.id ?? ''
  const asset = assetClassMap[id]

  if (!asset) {
    return (
      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 text-center">
          <h1 className="text-3xl font-extrabold mb-4">We could not find that asset class.</h1>
          <p className="text-slate-600 mb-6">Try one of the popular topics below.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {assetClasses.slice(0, 5).map((item) => (
              <Link key={item.id} to={`/${item.id}`} className="rounded-full border border-slate-300 px-4 py-2 text-sm">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="space-y-14 pb-20">
      <section className="pt-12 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <p className="uppercase tracking-widest text-sm text-blue-600 font-semibold">Asset class</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{asset.name}</h1>
            <p className="text-lg text-slate-600">{asset.tagline}</p>
            <div className="flex flex-wrap gap-3">
              <Link className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-white font-semibold shadow hover:bg-blue-700" to="/start">
                Start learning
              </Link>
              <Link className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-700" to="/learning">
                Learning paths
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-xl p-8 space-y-4">
            <h2 className="text-xl font-semibold">At a glance</h2>
            <p className="text-sm text-slate-600">{asset.overview}</p>
            <div className="grid gap-3 text-sm">
              {asset.goodFor.map((item) => (
                <div key={item} className="bg-slate-50 rounded-xl p-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-3xl shadow p-8 space-y-3">
            <h2 className="text-2xl font-semibold">Why it matters</h2>
            <p className="text-slate-600">{asset.whyItMatters}</p>
          </div>
          <div className="bg-white rounded-3xl shadow p-8 space-y-3">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <p className="text-slate-600">{asset.howItWorks}</p>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-3">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-3">Key ideas</h3>
            <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
              {asset.keyIdeas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-3">Common risks</h3>
            <ul className="text-sm text-slate-600 space-y-2 list-disc list-inside">
              {asset.risks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-lg mb-3">Beginner steps</h3>
            <ol className="text-sm text-slate-600 space-y-2 list-decimal list-inside">
              {asset.beginnerSteps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {asset.sections && (
        <section className="px-6">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-3xl font-semibold">Gilts & bonds guide</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {asset.sections.map((section) => (
                <div key={section.title} className="bg-white rounded-2xl p-6 shadow">
                  <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
                  <p className="text-sm text-slate-600">{section.body}</p>
                  {section.bullets && (
                    <ul className="text-sm text-slate-600 mt-3 list-disc list-inside space-y-1">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {(asset.platforms || asset.categories) && (
        <section className="px-6">
          <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
            {asset.platforms && (
              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="font-semibold text-lg mb-3">Where to invest</h3>
                <ul className="text-sm text-blue-700 space-y-2">
                  {asset.platforms.map((platform) => (
                    <li key={platform.url}>
                      <a href={platform.url} target="_blank" rel="noreferrer">
                        {platform.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {asset.categories && (
              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="font-semibold text-lg mb-3">Common bond categories</h3>
                <div className="space-y-3 text-sm text-slate-600">
                  {asset.categories.map((category) => (
                    <div key={category.name} className="rounded-xl border border-slate-200 p-3">
                      <div className="font-semibold text-slate-800">{category.name}</div>
                      <div>{category.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="px-6">
        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
          <div className="bg-slate-900 text-white rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-3">Good for</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              {asset.goodFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow">
            <h3 className="text-2xl font-semibold mb-3">Watch outs</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {asset.watchOuts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-6xl mx-auto bg-blue-600 text-white rounded-3xl p-8 md:p-12 grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Ready for the next topic?</h2>
            <p className="text-blue-100 mt-3">
              Keep learning by exploring another asset class or revisiting the beginner path.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {assetClasses.filter((item) => item.id !== asset.id).slice(0, 4).map((item) => (
              <Link key={item.id} to={`/${item.id}`} className="rounded-full bg-white text-blue-700 px-4 py-2 text-sm font-semibold">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
