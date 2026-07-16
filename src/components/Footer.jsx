import { Link } from 'react-router-dom'
import logoWhite from '../assets/brand/logo-white.png'
import { CONTACT, HOURS } from '../data/site'
import Roofline from './Roofline'

export default function Footer() {
  return (
    <footer className="footer dotted">
      <Roofline flip style={{ position: 'absolute', top: -1, left: 0, color: 'var(--paper)' }} />
      <div className="container">
        <div className="footer__grid">
          <div className="footer__logo">
            <img src={logoWhite} alt="DBW — Decor Builders Warehouse" />
            <p>
              19 years supplying timber, boards, doors, plumbing, sanitary ware,
              steel, PPE and all building hardware across Zimbabwe.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Catalogue</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Supply</h4>
            <ul>
              <li><Link to="/products?cat=Steel">Steel</Link></li>
              <li><Link to="/products?cat=Safety %26 PPE">Safety & PPE</Link></li>
              <li><Link to="/products?cat=Sanitary Ware">Sanitary ware</Link></li>
              <li><Link to="/products?cat=Blinds">Blinds</Link></li>
              <li><Link to="/products?cat=Electricals">Electricals</Link></li>
              <li><Link to="/products?cat=General Hardware">General hardware</Link></li>
            </ul>
          </div>
          <div>
            <h4>Visit us</h4>
            <ul>
              <li>
                <a href={CONTACT.mapsUrl} target="_blank" rel="noreferrer">
                  {CONTACT.address}
                </a>
              </li>
              <li><a href={`tel:${CONTACT.phoneIntl}`}>{CONTACT.phone}</a></li>
              <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp sales
                </a>
              </li>
            </ul>
            <h4 style={{ marginTop: 28 }}>Opening hours</h4>
            <ul>
              {HOURS.map((h) => (
                <li key={h.days} style={{ opacity: 0.85 }}>
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__bar">
          <span>© {new Date().getFullYear()} Decor Builders Warehouse. All rights reserved.</span>
          <span>Your success is our priority.</span>
        </div>
      </div>
    </footer>
  )
}
