import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  ['Development', '/development'],
  ['Design', '/design'],
  ['Company', '/company'],
  ['About', '/about'],
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
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
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {[['Home', '/'], ...navItems, ['Contact', '/contact']].map(([label, href], index) => (
              <NavLink key={href} to={href} onClick={() => setOpen(false)}>
                <span>0{index + 1}</span>{label}
              </NavLink>
            ))}
            <p>Kota Kinabalu · Sabah · Malaysia</p>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
