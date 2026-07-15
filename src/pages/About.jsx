import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ClientsMarquee from '../components/ClientsMarquee'
import { GOALS, SECTORS, TEAM } from '../data/site'
import teamTogether from '../assets/photos/team-together.jpg'
import fieldWorkers from '../assets/photos/field-workers.jpg'

export default function About() {
  return (
    <>
      <section className="page-hero dotted">
        <div className="container">
          <Reveal>
            <span className="overline" style={{ color: '#c99ad6' }}>
              <span className="diamond" />
              Our story
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display-xl" style={{ maxWidth: '16ch' }}>
              Built over 19 years. Building for generations.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede">
              Décor Builders Warehouse is a 19-year established building materials and
              hardware business in Zimbabwe — a leading supplier of timber, boards,
              doors, plumbing, sanitary ware, PPE and all building hardware.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container feature-split">
          <Reveal>
            <div className="img-frame">
              <img src={teamTogether} alt="The DBW team together" />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              overline="Where we work"
              title="A high-demand construction environment — and we deliver through it."
            />
            <ul className="checklist">
              {SECTORS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <Reveal>
              <p className="lede" style={{ marginTop: 28 }}>
                Choose Décor Builders Warehouse for your construction needs and
                experience the difference that quality and expertise can make.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GOALS */}
      <section className="section section--dark dotted">
        <div className="container">
          <SectionHeading
            center
            overline="Where we're going"
            title="Goals with a horizon."
          />
          <div className="goals">
            {GOALS.map((g, i) => (
              <Reveal key={g.horizon} delay={i * 0.1}>
                <div className="goal-card">
                  <div className="goal-card__year">{g.horizon}</div>
                  <h3>{g.title}</h3>
                  <p>{g.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section">
        <div className="container">
          <SectionHeading
            center
            overline="The people"
            title="Our professional team."
          />
          <div className="team-grid">
            {TEAM.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <div className="team-card">
                  <div className="team-card__photo">
                    <img src={t.photo} alt={t.name} loading="lazy" />
                  </div>
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section section--mist">
        <div className="container feature-split" style={{ marginBottom: 52 }}>
          <div>
            <SectionHeading
              overline="Experience"
              title="19 years, a wide array of customers."
              lede="From banks to platinum mines, hotels to housing developers — in the last 19 years we have had the privilege of serving clients across every sector of the market."
            />
            <div className="mt-lg">
              <Link to="/contact" className="btn btn--primary">
                Become a client
              </Link>
            </div>
          </div>
          <Reveal delay={0.15}>
            <div className="img-frame img-frame--tilt">
              <img src={fieldWorkers} alt="Crews on site in DBW-supplied PPE" loading="lazy" />
            </div>
          </Reveal>
        </div>
        <ClientsMarquee />
      </section>
    </>
  )
}
