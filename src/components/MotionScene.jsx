import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

const springConfig = { stiffness: 90, damping: 18, mass: 0.7 }

export default function MotionScene() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, springConfig)
  const smoothY = useSpring(pointerY, springConfig)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12])
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14])
  const objectX = useTransform(smoothX, [-0.5, 0.5], [-10, 10])
  const objectY = useTransform(smoothY, [-0.5, 0.5], [-8, 8])
  const farX = useTransform(smoothX, [-0.5, 0.5], [10, -10])
  const farY = useTransform(smoothY, [-0.5, 0.5], [8, -8])
  const nearX = useTransform(smoothX, [-0.5, 0.5], [-22, 22])
  const nearY = useTransform(smoothY, [-0.5, 0.5], [-18, 18])
  const pointerXPercent = useTransform(smoothX, [-0.5, 0.5], ['20%', '80%'])
  const pointerYPercent = useTransform(smoothY, [-0.5, 0.5], ['20%', '80%'])

  const resetPointer = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  const handlePointer = (event) => {
    if (reduceMotion || !event.isPrimary || event.pointerType === 'touch') return

    const rect = event.currentTarget.getBoundingClientRect()
    if (!rect.width || !rect.height) return

    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    pointerX.set(Math.max(-0.5, Math.min(0.5, x)))
    pointerY.set(Math.max(-0.5, Math.min(0.5, y)))
  }

  return (
    <motion.div
      className="motion-scene"
      data-motion={reduceMotion ? 'reduced' : 'full'}
      onPointerMove={handlePointer}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
      style={{ '--scene-pointer-x': pointerXPercent, '--scene-pointer-y': pointerYPercent }}
      aria-hidden="true"
    >
      <motion.div className="scene-depth scene-depth-back" style={{ x: farX, y: farY }}>
        <span className="scene-glow scene-glow-one" />
        <span className="scene-glow scene-glow-two" />
        <span className="scene-grid-plane" />
      </motion.div>

      <motion.div className="motion-object" style={{ x: objectX, y: objectY, rotateX, rotateY }}>
        <span className="scene-shell scene-shell-outer" />
        <span className="scene-shell scene-shell-inner" />
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <span className="orb orb-three" />
        <span className="orbit orbit-one" />
        <span className="orbit orbit-two" />
        <span className="orbit orbit-three" />
        <span className="scene-orbit-node scene-orbit-node-one" />
        <span className="scene-orbit-node scene-orbit-node-two" />
        <span className="scene-orbit-node scene-orbit-node-three" />
        <span className="scene-core">A</span>

        <motion.div className="scene-chip-layer" style={{ x: nearX, y: nearY }}>
          <span className="scene-chip scene-chip-code">
            <small>01</small>
            <strong>Code</strong>
          </span>
          <span className="scene-chip scene-chip-design">
            <small>02</small>
            <strong>Design</strong>
          </span>
          <span className="scene-chip scene-chip-business">
            <small>03</small>
            <strong>Business</strong>
          </span>
        </motion.div>
      </motion.div>

      <motion.div className="scene-depth scene-depth-front" style={{ x: nearX, y: nearY }}>
        <span className="scene-crosshair" />
        <span className="scene-coordinate scene-coordinate-x">X</span>
        <span className="scene-coordinate scene-coordinate-y">Y</span>
      </motion.div>

      <p>Move your pointer</p>
    </motion.div>
  )
}
