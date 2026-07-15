import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ClientsMarquee from '../components/ClientsMarquee'
import ProductCard from '../components/ProductCard'
import CountUp from '../components/CountUp'
import Magnetic from '../components/Magnetic'
import { PRODUCTS } from '../data/products'
import { SECTORS } from '../data/site'

import steelHero from '../assets/photos/steel-hero.png'
import valvesHero from '../assets/photos/valves-hero.jpg'
import pipesHero from '../assets/photos/pipes-hero.png'
import weldingHero from '../assets/photos/welding-hero.png'
import fencingHero from '../assets/photos/fencing-hero.png'
import ppeCover from '../assets/photos/ppe-cover.png'
import timberImg from '../assets/products/rough-sawn-timber.png'
import doorsImg from '../assets/products/doors.png'
import teamTogether from '../assets/photos/team-together.jpg'

const Hero3D = lazy(() => import('../components/Hero3D'))
const DiamondSpin = lazy(() => import('../components/DiamondSpin'))

const DEPARTMENTS = [
  {
    title: 'Steel',
    text: 'Round tubes, lipped channel, angle iron, deformed bars, sheets, plates, mesh and grating.',
    img: steelHero,
    cat: 'Steel',
  },
  {
    title: 'Safety & PPE',
    text: 'Head-to-toe protection — hard hats to gumboots — priced for whole crews, from $0.35.',
    img: ppeCover,
    cat: 'Safety & PPE',
  },
  {
    title: 'Valves',
    text: 'Glencock, gate, non-return, ballcock, flanged and butterfly valves with pipe flanges.',
    img: valvesHero,
    cat: 'Valves',
  },
  {
    title: 'Pipes & Fittings',
    text: 'Galvanised, PVC, HDPE poly, black steel, steam and copper — with every fitting.',
    img: pipesHero,
    cat: 'Pipes & Fittings',
  },
  {
    title: 'Welding & Cutting',
    text: 'Welding machines and rods, drill bits, cutting, diamond and grinding discs.',
    img: weldingHero,
    cat: 'Welding & Cutting',
  },
  {
    title: 'Fencing',
    text: 'Palisade fencing, diamond razor wire, diamond fence and all accessories.',
    img: fencingHero,
    cat: 'Fencing',
  },
  {
    title: 'Timber & Boards',
    text: 'Structural and rough sawn timber in all sizes; shutter, structural and furniture boards.',
    img: timberImg,
    cat: 'Timber, Boards %26 Doors',
  },
  {
    title: 'Doors & Sanitary',
    text: 'Interior and exterior doors, plus a one-stop shop for all your sanitary ware.',
    img: doorsImg,
    cat: 'Timber, Boards %26 Doors',
  },
]

const featured = PRODUCTS.filter((x) => x.badge === 'Best seller').concat(
  PRODUCTS.filter((x) => ['Hard Hats', 'Palisade Fencing', 'Copper Pipes & Fittings'].includes(x.name))
)

/* Word-by-word masked reveal for the hero headline. */
function StaggeredTitle() {
  const words = [
    { t: 'Everything' },
    { t: 'your' },
    { t: 'site' },
    { t: 'needs,' },
    { t: 'under', em: true },
    { t: 'one', em: true },
    { t: 'roof.', em: true },
  ]
  return (
    <h1 className="display-xl hero__title" aria-label="Everything your site needs, under one roof.">
      {words.map((w, i) => (
        <span className="word-mask" key={i} aria-hidden="true">
          <motion.span
            initial={{ y: '115%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.85, delay: 0.25 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
          >
            {w.em ? <em>{w.t}</em> : w.t}
            {' '}
          </motion.span>
        </span>
      ))}
    </h1>
  )
}

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero grain">
        <div className="aurora aurora--one" aria-hidden="true" />
        <div className="aurora aurora--two" aria-hidden="true" />
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>

        <div className="container">
          <div className="hero__content">
            <motion.span
              className="overline"
              style={{ color: '#c99ad6' }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="diamond" />
              Decor Builders Warehouse · est. 19 years
            </motion.span>

            <StaggeredTitle />

            <motion.p
              className="hero__sub"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              From foundation steel to the final door handle — one warehouse,
              one delivery, and 19 years of keeping Zimbabwe's projects on schedule.
            </motion.p>

            <motion.div
              className="hero__ctas"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              <Magnetic>
                <Link to="/products" className="btn btn--primary">
                  Browse the catalogue
                </Link>
              </Magnetic>
              <Magnetic>
                <Link to="/contact" className="btn btn--ghost-light">
                  Talk to sales
                </Link>
              </Magnetic>
            </motion.div>

            <motion.div
              className="hero__stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.95 }}
            >
              <div className="hero__stat">
                <b><CountUp value={19} /></b>
                <span>Years established</span>
              </div>
              <div className="hero__stat">
                <b><CountUp value={70} suffix="+" /></b>
                <span>Product lines</span>
              </div>
              <div className="hero__stat">
                <b><CountUp value={22} suffix="+" /></b>
                <span>Corporate clients</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="hero__scroll">Scroll</div>
      </section>

      {/* ============ DEPARTMENTS ============ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            overline="What we supply"
            title={<>Eight departments. <em>One warehouse.</em></>}
            lede="From foundation steel to the final coat hook — every department is stocked, priced for projects, and ready to load."
          />
          <div className="grid-cats">
            {DEPARTMENTS.map((d, i) => (
              <Reveal key={d.title} delay={(i % 4) * 0.08}>
                <Link to={`/products?cat=${d.cat}`} className="cat-card" style={{ height: '100%' }}>
                  <div className="cat-card__img">
                    <img src={d.img} alt={d.title} loading="lazy" />
                  </div>
                  <div className="cat-card__body">
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                    <span className="cat-card__link">Explore</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ABOUT TEASER ============ */}
      <section className="section section--dark dotted">
        <div className="container feature-split">
          <div>
            <SectionHeading
              overline="Who we are"
              title={<>19 years of <em>showing up</em> for Zimbabwe's builders.</>}
              lede="Décor Builders Warehouse operates in a high-demand construction environment — and delivers through it."
            />
            <ul className="checklist" style={{ color: 'var(--text-on-dark)' }}>
              {SECTORS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="mt-lg">
              <Link to="/about" className="btn btn--ghost-light">
                Our story & team
              </Link>
            </div>
          </div>
          <Reveal delay={0.15}>
            <div className="img-frame img-frame--tilt">
              <img src={teamTogether} alt="The DBW team" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="section">
        <div className="container">
          <SectionHeading
            overline="Straight from the catalogue"
            title={<>Best sellers, <em>site-proven.</em></>}
            lede="The exact products from our 2026 catalogues — add them to a quote list and send it to sales in one tap."
          />
          <div className="grid-products">
            {featured.slice(0, 8).map((prod, i) => (
              <Reveal key={prod.name} delay={(i % 4) * 0.07}>
                <ProductCard product={prod} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="center mt-lg">
              <Link to="/products" className="btn btn--primary">
                See all {PRODUCTS.length} product lines
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ CLIENTS ============ */}
      <section className="section section--mist" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="container center" style={{ marginBottom: 34 }}>
          <SectionHeading
            center
            overline="Trusted by"
            title={<>The names on our <em>delivery notes.</em></>}
          />
        </div>
        <ClientsMarquee />
      </section>

      {/* ============ CTA ============ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="cta-band dotted grain">
              <Suspense fallback={null}>
                <DiamondSpin
                  style={{
                    position: 'absolute',
                    right: 'clamp(-40px, 2vw, 60px)',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: 'clamp(140px, 18vw, 240px)',
                    height: 'clamp(140px, 18vw, 240px)',
                    opacity: 0.85,
                  }}
                />
              </Suspense>
              <span className="overline" style={{ color: 'var(--gold)' }}>
                <span className="diamond" />
                Project supply
              </span>
              <h2 className="display-lg">Pricing a project? Send us the bill of quantities.</h2>
              <p>
                Reliable project supply, competitive pricing and professional service —
                experience the difference that quality and expertise make.
              </p>
              <div className="hero__ctas">
                <Magnetic>
                  <Link to="/contact" className="btn btn--primary">
                    Get a quote
                  </Link>
                </Magnetic>
                <Magnetic>
                  <a href="tel:+263715067556" className="btn btn--ghost-light">
                    Call 0715 067 556
                  </a>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
