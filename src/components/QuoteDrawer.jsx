import { AnimatePresence, motion } from 'framer-motion'
import { useQuote } from './QuoteContext'

export default function QuoteDrawer() {
  const { items, open, setOpen, remove, clear, mailto, whatsapp, toast } = useQuote()

  return (
    <>
      {items.length > 0 && !open && (
        <button className="quote-fab" onClick={() => setOpen(true)}>
          <span className="quote-fab__count">{items.length}</span>
          Quote list
        </button>
      )}

      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="drawer-scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="drawer__head">
                <h3>Your quote list</h3>
                <button className="drawer__close" onClick={() => setOpen(false)} aria-label="Close">
                  ×
                </button>
              </div>
              <div className="drawer__list">
                {items.length === 0 && (
                  <p className="drawer__empty">
                    Browse the catalogue and add products —<br />
                    we'll price them for your project.
                  </p>
                )}
                {items.map((i) => (
                  <div className="drawer__item" key={i.name}>
                    <img src={i.img} alt="" />
                    <span>
                      {i.name}
                      {i.price ? (
                        <>
                          <br />
                          <small style={{ color: 'var(--wine)' }}>{i.price}</small>
                        </>
                      ) : null}
                    </span>
                    <button onClick={() => remove(i.name)} aria-label={`Remove ${i.name}`}>
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="drawer__foot">
                <a
                  className="btn btn--primary"
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  style={{ pointerEvents: items.length ? 'auto' : 'none', opacity: items.length ? 1 : 0.5 }}
                >
                  Send via WhatsApp
                </a>
                <a
                  className="btn btn--ghost"
                  href={mailto}
                  style={{ pointerEvents: items.length ? 'auto' : 'none', opacity: items.length ? 1 : 0.5 }}
                >
                  Send by email
                </a>
                {items.length > 0 && (
                  <button className="btn btn--ghost btn--small" onClick={clear}>
                    Clear list
                  </button>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
