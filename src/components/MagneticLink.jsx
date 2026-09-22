import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useRef } from 'react'

const spring = { stiffness: 220, damping: 18, mass: 0.4 }

export default function MagneticLink({ href, className, children, strength = 8 }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), spring)
  const y = useSpring(useMotionValue(0), spring)

  const onMove = (event) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const offsetY = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    x.set(offsetX * strength)
    y.set(offsetY * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      style={{ x, y }}
      onPointerMove={onMove}
      onPointerLeave={reset}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  )
}
