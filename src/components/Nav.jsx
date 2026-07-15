import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logoWhite from '../assets/brand/logo-white.png'
import { useQuote } from './QuoteContext'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Catalogue' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const { setOpen: openQuote, items } = useQuote()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${solid || open ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo" aria-label="DBW — Decor Builders Warehouse" onClick={() => setOpen(false)}>
          <img src={logoWhite} alt="DBW — Decor Builders Warehouse" />
        </Link>

        <ul className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {LINKS.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `nav__link ${isActive ? 'nav__link--active' : ''}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li>
            <button
              className="btn btn--primary btn--small"
              style={{ marginLeft: 10 }}
              onClick={() => {
                setOpen(false)
                openQuote(true)
              }}
            >
              Get a quote{items.length > 0 ? ` (${items.length})` : ''}
            </button>
          </li>
        </ul>

        <button
          className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
