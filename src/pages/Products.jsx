import { useMemo, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, PRODUCTS } from '../data/products'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const urlCat = params.get('cat')
  const [cat, setCat] = useState(urlCat && CATEGORIES.includes(urlCat) ? urlCat : 'All')
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (urlCat && CATEGORIES.includes(urlCat)) setCat(urlCat)
  }, [urlCat])

  const list = useMemo(() => {
    let out = PRODUCTS
    if (cat !== 'All') out = out.filter((prod) => prod.cat === cat)
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      out = out.filter((prod) => prod.name.toLowerCase().includes(q))
    }
    return out
  }, [cat, query])

  const pick = (c) => {
    setCat(c)
    setParams(c === 'All' ? {} : { cat: c }, { replace: true })
  }

  return (
    <>
      <section className="page-hero dotted">
        <div className="container">
          <Reveal>
            <span className="overline" style={{ color: '#c99ad6' }}>
              <span className="diamond" />
              2026 catalogues · PPE · Farming & Mining
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display-xl">The catalogue.</h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede">
              Every product below is drawn from our printed 2026 catalogues — same
              items, same photos, same honest pricing. Add what you need to a quote
              list and send it straight to sales.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 56 }}>
        <div className="container">
          <Reveal>
            <div
              style={{
                display: 'flex',
                gap: 18,
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div className="chips" style={{ marginTop: 0, flex: '1 1 auto' }}>
                {CATEGORIES.map((c) => (
                  <button
                    key={c}
                    className={`chip ${cat === c ? 'chip--active' : ''}`}
                    onClick={() => pick(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="field" style={{ flex: '0 1 260px' }}>
                <input
                  type="search"
                  placeholder="Search products…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search products"
                />
              </div>
            </div>
          </Reveal>

          <motion.div layout className="grid-products">
            <AnimatePresence mode="popLayout">
              {list.map((prod) => (
                <motion.div
                  layout
                  key={prod.name}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProductCard product={prod} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {list.length === 0 && (
            <p className="center lede" style={{ margin: '64px auto' }}>
              Nothing matches "{query}" — but if it belongs on a site, we can source it.
              <br />
              <a href="mailto:sales@dbw.co.zw">Ask sales directly →</a>
            </p>
          )}

          <p
            className="center"
            style={{ marginTop: 56, color: 'var(--text-soft)', fontSize: '0.92rem' }}
          >
            Prices shown as printed in the 2026 catalogues and subject to confirmation.
            Items without a printed price are quoted per project.
          </p>
        </div>
      </section>
    </>
  )
}
