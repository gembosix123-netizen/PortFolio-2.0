import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  ['Development', '/development'],
  ['Design', '/design'],
  ['Company', '/company'],
  ['About', '/about'],
]

const menuVariants = {
  closed: { clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.38 } },
  open: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.07, delayChildren: 0.14 },
  },
}

const menuItemVariants = {
  closed: { opacity: 0, y: 28 },
  open: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] } },
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 32))

  useEffect(() => {
    if (!open) return undefined

    const handleKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.body.classList.add('menu-open')
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.classList.remove('menu-open')
      window.removeEventListener('keydown', handleKey)
    }
  }, [open])

  return (
    <motion.header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <Link className="brand" to="/" aria-label="Allan Andan home">
        <span className="brand-mark">AA</span>
        <span>Allan Andan</span>
      </Link>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <NavLink key={href} to={href}>{label}</NavLink>
        ))}
      </nav>

      <Link className="header-contact" to="/contact">
        Let&apos;s talk <ArrowUpRight size={16} />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {[['Home', '/'], ...navItems, ['Contact', '/contact']].map(([label, href], index) => (
              <motion.div key={href} variants={menuItemVariants}>
                <NavLink to={href} onClick={() => setOpen(false)}>
                  <span>0{index + 1}</span>{label}
                </NavLink>
              </motion.div>
            ))}
            <p>Kota Kinabalu · Sabah · Malaysia</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
