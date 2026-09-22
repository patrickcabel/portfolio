import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function Spotlight() {
  const reduced = useReducedMotion()
  const x = useMotionValue(-1000)
  const y = useMotionValue(-1000)
  const smoothX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.6 })
  const smoothY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.6 })

  useEffect(() => {
    if (reduced) return
    const onMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduced, x, y])

  if (reduced) return null

  return <motion.div className="spotlight" style={{ x: smoothX, y: smoothY }} aria-hidden="true" />
}
