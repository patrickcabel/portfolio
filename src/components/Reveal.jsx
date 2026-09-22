import { motion, useReducedMotion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 26, className, as = 'div' }) {
  const reduced = useReducedMotion()
  const Tag = motion[as] ?? motion.div

  return (
    <Tag
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}
