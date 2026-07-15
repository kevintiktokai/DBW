import { useState } from 'react'
import Reveal from '../components/Reveal'
import { CONTACT } from '../data/site'

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)
const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const PinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const ChatIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
)

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', topic: 'Quotation request', message: '' })

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      form.company && `Company: ${form.company}`,
      form.phone && `Phone: ${form.phone}`,
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `${form.topic} — ${form.name || 'Website enquiry'}`
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <section className="page-hero dotted grain">
        <div className="aurora aurora--one" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <span className="overline" style={{ color: '#c99ad6' }}>
              <span className="diamond" />
              Contact us
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="display-xl" style={{ maxWidth: '15ch' }}>
              Your success is <em>our priority.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lede">
              Reach out to our team to discover how we can tailor our solutions to
              your specific needs — quotations, project supply, or a quick stock check.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <div>
              <div className="contact-item">
                <div className="contact-item__icon"><PhoneIcon /></div>
                <div>
                  <b>Call sales</b>
                  <a href={`tel:${CONTACT.phoneIntl}`}>{CONTACT.phone}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item__icon"><ChatIcon /></div>
                <div>
                  <b>WhatsApp</b>
                  <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer">
                    Message us directly
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item__icon"><MailIcon /></div>
                <div>
                  <b>Email</b>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </div>
              </div>
              <div className="contact-item" style={{ borderBottom: 'none' }}>
                <div className="contact-item__icon"><PinIcon /></div>
                <div>
                  <b>Warehouse & showroom</b>
                  <a href={CONTACT.mapsUrl} target="_blank" rel="noreferrer">
                    {CONTACT.address}
                  </a>
                </div>
              </div>

              <div
                style={{
                  marginTop: 32,
                  padding: '26px 28px',
                  borderRadius: 20,
                  background: 'linear-gradient(140deg, var(--plum-deep), var(--ink))',
                  color: 'var(--text-on-dark-soft)',
                }}
              >
                <span className="overline" style={{ color: 'var(--gold)' }}>
                  <span className="diamond" />
                  Trade hours
                </span>
                <p style={{ marginTop: 12, fontSize: '0.98rem' }}>
                  Contractors welcome from opening — bring your bill of quantities
                  and leave with a priced schedule the same day.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form className="form" onSubmit={submit}>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="cf-name">Name</label>
                  <input id="cf-name" required value={form.name} onChange={set('name')} placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="cf-company">Company</label>
                  <input id="cf-company" value={form.company} onChange={set('company')} placeholder="Optional" />
                </div>
              </div>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="cf-phone">Phone</label>
                  <input id="cf-phone" value={form.phone} onChange={set('phone')} placeholder="07…" />
                </div>
                <div className="field">
                  <label htmlFor="cf-topic">Topic</label>
                  <select id="cf-topic" value={form.topic} onChange={set('topic')}>
                    <option>Quotation request</option>
                    <option>Project supply</option>
                    <option>Stock enquiry</option>
                    <option>Account / trade terms</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="cf-msg">Message</label>
                <textarea
                  id="cf-msg"
                  rows="6"
                  required
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Tell us what you're building and what you need…"
                />
              </div>
              <button type="submit" className="btn btn--primary">
                Send message
              </button>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-soft)' }}>
                Opens your email app with the message pre-filled — nothing is stored on this site.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
