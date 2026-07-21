import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { ease, reveal } from '../lib/motion'
import MotionChrome from './MotionChrome'
import SiteHeader from './SiteHeader'

export function Reveal({ children, className = '', delay = 0, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{ hidden: reveal.hidden, visible: { ...reveal.visible, transition: { ...reveal.visible.transition, delay } } }}
    >
      {children}
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <span>Have an idea?</span>
        <Link to="/contact">Let&apos;s make it real <ArrowUpRight /></Link>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Allan Andan</p>
        <p>Founder · Developer · Designer</p>
        <p>Kota Kinabalu, Sabah, Malaysia</p>
      </div>
    </footer>
  )
}

export default function PageFrame({ children }) {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#page-content">Skip to content</a>
      <MotionChrome />
      <SiteHeader />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -22 }}
          transition={{ duration: 0.5, ease }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
