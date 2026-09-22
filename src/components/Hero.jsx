import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import MagneticLink from './MagneticLink'

const ease = [0.22, 1, 0.36, 1]

const lead = 'I design and build websites — ones with some character that still do their job.'.split(
  ' ',
)

export default function Hero() {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 90])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, reduced ? 1 : 0])
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -60])

  return (
    <section className="hero" id="top" aria-label="Introduction" ref={ref}>
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="aurora aurora-1" />
        <span className="aurora aurora-2" />
        <span className="aurora aurora-3" />
      </div>
      <motion.div className="hero-grid" style={{ y: gridY }} aria-hidden="true" />

      <motion.div className="hero-content" style={{ y: contentY, opacity: contentOpacity }}>
        <motion.span
          className="hero-tag"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <i />
          Calgary, Alberta
        </motion.span>

        <h1 className="hero-brand">
          {['Patrick', 'Abel'].map((word, index) => (
            <span className="hero-brand-line" key={word}>
              <motion.span
                className={index === 1 ? 'hero-brand-accent' : undefined}
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1 + index * 0.12, duration: 0.9, ease }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <p className="hero-lead">
          {lead.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + index * 0.035, duration: 0.5, ease }}
            >
              {word}
              {index < lead.length - 1 ? '\u00A0' : ''}
            </motion.span>
          ))}
        </p>

        <motion.p
          className="hero-support"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease }}
        >
          It started as a hobby and turned into the thing I care most about. I still lose the
          afternoon when a build is going well.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.02, duration: 0.6, ease }}
        >
          <MagneticLink href="#work" className="btn btn-primary">
            See the work
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </MagneticLink>
          <MagneticLink href="#contact" className="btn btn-ghost">
            Get in touch
          </MagneticLink>
        </motion.div>
      </motion.div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-line" />
        Scroll
      </div>
    </section>
  )
}
