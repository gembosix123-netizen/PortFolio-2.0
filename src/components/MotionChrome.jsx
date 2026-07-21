import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { animate, stagger } from 'animejs'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion'
import { useLocation } from 'react-router-dom'

const routeLabels = {
  '/': 'Home',
  '/development': 'Development',
  '/design': 'Design',
  '/company': 'Company',
  '/about': 'About',
  '/contact': 'Contact',
}

function AnimeScrollDirector({ pathname, reduceMotion }) {
  useLayoutEffect(() => {
    if (reduceMotion) return undefined

    const root = document.querySelector('#page-content')
    if (!root) return undefined

    const groups = [...root.querySelectorAll('[data-anime-reveal]')]
    const running = new Set()

    groups.forEach((group) => {
      const targets = group.hasAttribute('data-anime-stagger')
        ? [...group.children]
        : [group]

      targets.forEach((target) => {
        target.style.opacity = '0'
        target.style.transform = 'translateY(38px)'
      })
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return

        const group = entry.target
        const targets = group.hasAttribute('data-anime-stagger')
          ? [...group.children]
          : [group]
        const animation = animate(targets, {
          opacity: 1,
          y: 0,
          duration: 900,
          delay: stagger(85),
          ease: 'outExpo',
        })

        running.add(animation)
        observer.unobserve(group)
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 })

    groups.forEach((group) => observer.observe(group))

    return () => {
      observer.disconnect()
      running.forEach((animation) => animation.revert())
      groups.forEach((group) => {
        const targets = group.hasAttribute('data-anime-stagger')
          ? [...group.children]
          : [group]
        targets.forEach((target) => {
          target.style.removeProperty('opacity')
          target.style.removeProperty('transform')
        })
      })
    }
  }, [pathname, reduceMotion])

  return null
}

export default function MotionChrome() {
  const { pathname } = useLocation()
  const reduceMotion = useReducedMotion()
  const [finePointer, setFinePointer] = useState(false)
  const pointerX = useMotionValue(-100)
  const pointerY = useMotionValue(-100)
  const cursorX = useSpring(pointerX, { stiffness: 520, damping: 38, mass: 0.45 })
  const cursorY = useSpring(pointerY, { stiffness: 520, damping: 38, mass: 0.45 })
  const cursorRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 170, damping: 32, restDelta: 0.001 })

  useEffect(() => {
    const query = window.matchMedia('(pointer: fine)')
    const updatePointerType = () => setFinePointer(query.matches)
    updatePointerType()
    query.addEventListener('change', updatePointerType)
    return () => query.removeEventListener('change', updatePointerType)
  }, [])

  useEffect(() => {
    if (reduceMotion || !finePointer) return undefined

    const handlePointer = (event) => {
      pointerX.set(event.clientX - 18)
      pointerY.set(event.clientY - 18)
    }
    const handleOver = (event) => {
      cursorRef.current?.classList.toggle(
        'is-active',
        Boolean(event.target.closest('a, button, [data-cursor-focus]')),
      )
    }

    window.addEventListener('pointermove', handlePointer, { passive: true })
    document.addEventListener('pointerover', handleOver, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handlePointer)
      document.removeEventListener('pointerover', handleOver)
    }
  }, [cursorX, cursorY, finePointer, pointerX, pointerY, reduceMotion])

  const routeLabel = routeLabels[pathname] || (pathname.startsWith('/development/') ? 'Case study' : 'Portfolio')

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />

      {!reduceMotion && (
        <motion.div
          className="route-curtain"
          key={pathname}
          initial={{ clipPath: 'inset(0 0 0% 0)' }}
          animate={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.82, ease: [0.76, 0, 0.24, 1], delay: 0.05 }}
          aria-hidden="true"
        >
          <span>{routeLabel}</span>
          <i />
        </motion.div>
      )}

      {!reduceMotion && finePointer && (
        <motion.div
          ref={cursorRef}
          className="cursor-aura"
          style={{ x: cursorX, y: cursorY }}
          aria-hidden="true"
        />
      )}

      <div className="ambient-layer" aria-hidden="true">
        <span className="ambient-orb ambient-orb-one" />
        <span className="ambient-orb ambient-orb-two" />
      </div>

      <AnimeScrollDirector pathname={pathname} reduceMotion={reduceMotion} />
    </>
  )
}
