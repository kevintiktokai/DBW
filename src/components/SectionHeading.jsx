import Reveal from './Reveal'

export default function SectionHeading({ overline, title, lede, center = false }) {
  return (
    <div className={center ? 'center' : ''}>
      <Reveal>
        <span className="overline">
          <span className="diamond" />
          {overline}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display-lg" style={{ margin: '16px 0 14px' }}>
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.16}>
          <p className="lede">{lede}</p>
        </Reveal>
      )}
    </div>
  )
}
