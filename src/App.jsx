import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Footer from './components/Footer'
import QuoteDrawer from './components/QuoteDrawer'
import { QuoteProvider } from './components/QuoteContext'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  return (
    <QuoteProvider>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Intro />
      <Nav />
      <main id="main">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      </main>
      <Footer />
      <QuoteDrawer />
    </QuoteProvider>
  )
}
