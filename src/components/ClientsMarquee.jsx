import { CLIENTS } from '../data/site'

export default function ClientsMarquee() {
  const row = [...CLIENTS, ...CLIENTS]
  return (
    <div className="marquee" aria-label="Clients we have served">
      <div className="marquee__track">
        {row.map((c, i) => (
          <span className="marquee__item" key={i}>
            {c}
          </span>
        ))}
      </div>
    </div>
  )
}
