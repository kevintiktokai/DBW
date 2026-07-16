import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import logoWhite from '../assets/brand/logo-white.png'
import { useQuote } from './QuoteContext'
import { CATEGORIES } from '../data/products'

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

const Chevron = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

const CATS = CATEGORIES.filter((c) => c !== 'All')

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const [catOpen, setCatOpen] = useState(false)
  const [term, setTerm] = useState('')
  const { setOpen: openQuote, items } = useQuote()
  const navigate = useNavigate()
  const catRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close the catalogue dropdown on outside click / escape
  useEffect(() => {
    if (!catOpen) return
    const onDown = (e) => {
      if (catRef.current && !catRef.current.contains(e.target)) setCatOpen(false)
    }
    const onKey = (e) => e.key === 'Escape' && setCatOpen(false)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [catOpen])

  const closeAll = () => {
    setOpen(false)
    setCatOpen(false)
  }

  const isDesktop = () => window.matchMedia('(min-width: 881px)').matches

  const submitSearch = (e) => {
    e.preventDefault()
    const q = term.trim()
    navigate(q ? `/products?q=${encodeURIComponent(q)}` : '/products')
    closeAll()
    setTerm('')
  }

  const goCat = (c) => {
    navigate(c ? `/products?cat=${encodeURIComponent(c)}` : '/products')
    closeAll()
  }

  return (
    <header className={`nav ${solid || open ? 'nav--solid' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo" aria-label="DBW — Decor Builders Warehouse" onClick={closeAll}>
          <img src={logoWhite} alt="DBW — Decor Builders Warehouse" />
        </Link>

        {/* centered search — desktop */}
        <form className="nav__search" role="search" onSubmit={submitSearch}>
          <SearchIcon />
          <input
            type="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search steel, PPE, sanitary, hardware…"
            aria-label="Search products"
          />
        </form>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`} aria-label="Primary">
          {/* mobile-only search inside the drawer */}
          <form className="nav__search nav__search--mobile" role="search" onSubmit={submitSearch}>
            <SearchIcon />
            <input
              type="search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search products…"
              aria-label="Search products"
            />
          </form>

          <NavLink to="/" onClick={closeAll} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`} end>
            Home
          </NavLink>

          {/* catalogue with dropdown */}
          <div
            className={`nav__dd ${catOpen ? 'nav__dd--open' : ''}`}
            ref={catRef}
            onMouseEnter={() => isDesktop() && setCatOpen(true)}
            onMouseLeave={() => isDesktop() && setCatOpen(false)}
          >
            <button
              className="nav__link nav__dd-toggle"
              aria-expanded={catOpen}
              aria-haspopup="true"
              onClick={() => {
                if (isDesktop()) navigate('/products')
                setCatOpen((v) => !v)
              }}
            >
              Catalogue <Chevron />
            </button>

            <div className="nav__menu" role="menu">
              <button className="nav__menu-item nav__menu-item--all" role="menuitem" onClick={() => goCat(null)}>
                View all products
              </button>
              <div className="nav__menu-grid">
                {CATS.map((c) => (
                  <button key={c} className="nav__menu-item" role="menuitem" onClick={() => goCat(c)}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <NavLink to="/about" onClick={closeAll} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={closeAll} className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>
            Contact
          </NavLink>

          <button
            className="btn btn--primary btn--small nav__cta"
            onClick={() => {
              closeAll()
              openQuote(true)
            }}
          >
            Get a quote{items.length > 0 ? ` (${items.length})` : ''}
          </button>
        </nav>

        <button
          className={`nav__burger ${open ? 'nav__burger--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
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
