import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useId, useRef, useState } from 'react'
import { sites } from '../data/projects'
import MagneticLink from './MagneticLink'
import Reveal from './Reveal'

const ease = [0.22, 1, 0.36, 1]

function pad(index) {
  return String(index + 1).padStart(2, '0')
}

function hostOf(url) {
  try {
    return new URL(url).host.replace(/^www\./, '')
  } catch {
    return url
  }
}

function StageFrame({ site, reduced, index, total }) {
  const frameRef = useRef(null)

  const onMove = (event) => {
    if (reduced || !frameRef.current) return
    const rect = frameRef.current.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    frameRef.current.style.setProperty('--rx', `${(0.5 - py) * 8}deg`)
    frameRef.current.style.setProperty('--ry', `${(px - 0.5) * 10}deg`)
    frameRef.current.style.setProperty('--mx', `${px * 100}%`)
    frameRef.current.style.setProperty('--my', `${py * 100}%`)
  }

  const reset = () => {
    if (!frameRef.current) return
    frameRef.current.style.setProperty('--rx', '0deg')
    frameRef.current.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={frameRef}
      className="work-frame"
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <div className="work-chrome" aria-hidden="true">
        <span />
        <span />
        <span />
        <p>{hostOf(site.liveUrl)}</p>
        <b>
          {pad(index)} / {String(total).padStart(2, '0')}
        </b>
      </div>
      <a
        className="work-shot"
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
          loading="eager"
          decoding="async"
        />
        <span className="work-shot-glint" aria-hidden="true" />
      </a>
    </div>
  )
}

export default function Work() {
  const reduced = useReducedMotion()
  const baseId = useId()
  const [active, setActive] = useState(0)
  const site = sites[active]
  const panelId = `${baseId}-panel`
  const tabId = (index) => `${baseId}-tab-${index}`

  const indexRef = useRef(null)

  useEffect(() => {
    const onKey = (event) => {
      if (!indexRef.current?.contains(document.activeElement)) return
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowRight' && event.key !== 'ArrowUp' && event.key !== 'ArrowLeft') {
        return
      }
      event.preventDefault()
      const delta = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1
      setActive((current) => {
        const next = (current + delta + sites.length) % sites.length
        const tabs = indexRef.current?.querySelectorAll('[role="tab"]')
        tabs?.[next]?.focus()
        return next
      })
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const copy = {
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    exit: reduced ? { opacity: 0 } : { opacity: 0, y: -12 },
    transition: { duration: 0.38, ease },
  }

  return (
    <section className="section work" id="work">
      <div className="shell">
        <header className="section-head">
          <Reveal as="p" className="eyebrow">
            Work
          </Reveal>
          <Reveal as="h2" className="section-title" delay={0.06}>
            Pick a trade. The site fills the stage.
          </Reveal>
          <Reveal as="p" className="section-copy" delay={0.12}>
            Six sites I designed and built for the kinds of small businesses around Calgary. They
            are demos rather than client work — each one says so on the page — but they are
            complete and live. Arrow keys cycle the reel.
          </Reveal>
        </header>

        <div className="work-studio">
          <ol
            ref={indexRef}
            className="work-index"
            role="tablist"
            aria-label="Selected sites"
            aria-orientation="vertical"
          >
            {sites.map((entry, index) => {
              const selected = index === active
              return (
                <li key={entry.slug}>
                  <button
                    type="button"
                    role="tab"
                    id={tabId(index)}
                    aria-selected={selected}
                    aria-controls={panelId}
                    tabIndex={selected ? 0 : -1}
                    className={selected ? 'is-active' : undefined}
                    style={{ '--accent': entry.accent }}
                    onMouseEnter={() => {
                      if (!reduced) setActive(index)
                    }}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                  >
                    <span className="work-index-num">{pad(index)}</span>
                    <span className="work-index-copy">
                      <span className="work-index-trade">{entry.trade}</span>
                      <span className="work-index-name">{entry.name}</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>

          <div
            className="work-stage"
            role="tabpanel"
            id={panelId}
            aria-labelledby={tabId(active)}
            style={{ '--accent': site.accent }}
          >
            <AnimatePresence mode="wait">
              <motion.div key={site.slug} className="work-stage-inner" {...copy}>
                <StageFrame site={site} reduced={reduced} index={active} total={sites.length} />

                <div className="work-meta">
                  <p className="work-count vis-hidden" aria-live="polite">
                    {site.name}, {pad(active)} of {sites.length}
                  </p>
                  <p className="work-trade">{site.trade}</p>
                  <h3 className="work-name">{site.name}</h3>
                  <p className="work-desc">{site.description}</p>
                  <div className="work-actions">
                    <MagneticLink
                      href={site.liveUrl}
                      className="btn btn-primary"
                      strength={6}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Open live site
                      <span className="btn-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </MagneticLink>
                    <MagneticLink
                      href={site.repoUrl}
                      className="btn btn-ghost"
                      strength={6}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </MagneticLink>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
