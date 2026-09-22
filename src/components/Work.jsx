import { motion, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { sites } from '../data/projects'
import Reveal from './Reveal'

const ease = [0.22, 1, 0.36, 1]

// The grid never goes wider than three columns, so the first row loads eagerly.
const EAGER_COUNT = 3

function PreviewCard({ site, index }) {
  const reduced = useReducedMotion()
  const ref = useRef(null)
  const eager = index < EAGER_COUNT

  const onMove = (event) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`)
    ref.current.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`)
  }

  return (
    <motion.li
      ref={ref}
      className="preview"
      onPointerMove={onMove}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: (index % 3) * 0.08, duration: 0.6, ease }}
    >
      <span className="preview-glow" aria-hidden="true" />

      <a
        className="preview-shot"
        href={site.liveUrl}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden="true"
      >
        <img
          src={site.image}
          alt={`Screenshot of the ${site.name} home page`}
          width={site.width}
          height={site.height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={eager ? 'high' : 'auto'}
        />
      </a>

      <div className="preview-body">
        <span className="preview-trade">{site.trade}</span>
        <h3 className="preview-name">{site.name}</h3>
        <p className="preview-desc">{site.description}</p>
        <div className="preview-actions">
          <a
            className="preview-link preview-link-live"
            href={site.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live site
            <span className="preview-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
          <a className="preview-link" href={site.repoUrl} target="_blank" rel="noreferrer">
            Code
            <span className="preview-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        </div>
      </div>
    </motion.li>
  )
}

export default function Work() {
  return (
    <section className="section work" id="work">
      <div className="shell">
        <header className="section-head">
          <Reveal as="p" className="eyebrow">
            Work
          </Reveal>
          <Reveal as="h2" className="section-title" delay={0.06}>
            Sites you can open right now
          </Reveal>
          <Reveal as="p" className="section-copy" delay={0.12}>
            Six sites I designed and built for the kinds of small businesses around Calgary. They
            are demos rather than client work — each one says so on the page — but they are
            complete and live. Every card links to the site and to the code.
          </Reveal>
        </header>

        <ul className="preview-grid">
          {sites.map((site, index) => (
            <PreviewCard key={site.slug} site={site} index={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}
