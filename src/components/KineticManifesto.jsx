import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function KineticManifesto() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const codeX = useTransform(scrollYProgress, [0, 1], ['-14%', '10%'])
  const designX = useTransform(scrollYProgress, [0, 1], ['12%', '-13%'])
  const businessX = useTransform(scrollYProgress, [0, 1], ['-10%', '8%'])
  const labelRotate = useTransform(scrollYProgress, [0, 1], [-8, 7])
  const labelScale = useTransform(scrollYProgress, [0.2, 0.55, 0.85], [0.86, 1.08, 0.92])

  return (
    <section className="kinetic-manifesto" ref={sectionRef} aria-label="Code, design and business in one practice">
      <div className="kinetic-pin">
        <div className="kinetic-meta">
          <span>Scroll study / 01</span>
          <span>Three disciplines · One practice</span>
        </div>

        <div className="kinetic-words" aria-hidden="true">
          <motion.span style={{ x: reduceMotion ? 0 : codeX }}>Code.</motion.span>
          <motion.span style={{ x: reduceMotion ? 0 : designX }}>Design.</motion.span>
          <motion.span style={{ x: reduceMotion ? 0 : businessX }}>Business.</motion.span>
        </div>

        <motion.div
          className="kinetic-seal"
          style={{
            rotate: reduceMotion ? -4 : labelRotate,
            scale: reduceMotion ? 1 : labelScale,
          }}
          data-cursor-focus
        >
          <span>All connected</span>
          <strong>AA</strong>
          <small>Think · Make · Ship</small>
        </motion.div>
      </div>
    </section>
  )
}
