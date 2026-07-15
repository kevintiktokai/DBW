import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { CONTACT } from '../data/site'

const QuoteContext = createContext(null)

export function QuoteProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('dbw-quote') || '[]')
    } catch {
      return []
    }
  })
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    localStorage.setItem('dbw-quote', JSON.stringify(items))
  }, [items])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2200)
    return () => clearTimeout(t)
  }, [toast])

  const toggle = useCallback((product) => {
    setItems((prev) => {
      const exists = prev.some((i) => i.name === product.name)
      if (exists) return prev.filter((i) => i.name !== product.name)
      setToast(`${product.name} added to quote list`)
      return [...prev, { name: product.name, img: product.img, price: product.price }]
    })
  }, [])

  const remove = useCallback((name) => {
    setItems((prev) => prev.filter((i) => i.name !== name))
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const message = useMemo(() => {
    const lines = items.map((i) => `• ${i.name}${i.price ? ` (${i.price})` : ''}`)
    return `Hello DBW, I would like a quotation for:\n\n${lines.join('\n')}\n\nThank you.`
  }, [items])

  const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    'Quotation Request — DBW Website'
  )}&body=${encodeURIComponent(message)}`
  const whatsapp = `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`

  const value = {
    items,
    open,
    setOpen,
    toggle,
    remove,
    clear,
    mailto,
    whatsapp,
    toast,
    has: (name) => items.some((i) => i.name === name),
  }

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export const useQuote = () => useContext(QuoteContext)
