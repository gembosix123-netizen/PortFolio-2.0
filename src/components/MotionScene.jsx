import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

export default function MotionScene() {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [12, -12]), { stiffness: 90, damping: 18 })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-14, 14]), { stiffness: 90, damping: 18 })

  const handlePointer = (event) => {
    if (reduceMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <div className="motion-scene" onPointerMove={handlePointer} onPointerLeave={() => { pointerX.set(0); pointerY.set(0) }} aria-hidden="true">
      <motion.div className="motion-object" style={{ rotateX, rotateY }}>
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <span className="orb orb-three" />
        <span className="orbit orbit-one" />
        <span className="orbit orbit-two" />
        <span className="orbit orbit-three" />
        <span className="scene-core">A</span>
      </motion.div>
      <p>Move your pointer</p>
    </div>
  )
}
