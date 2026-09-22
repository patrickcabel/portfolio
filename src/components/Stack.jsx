import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { folders } from '../data/stack'
import Reveal from './Reveal'

const ease = [0.22, 1, 0.36, 1]

export default function Stack() {
  const [activeId, setActiveId] = useState(folders[0].id)
  const reduced = useReducedMotion()
  const active = folders.find((folder) => folder.id === activeId)

  return (
    <section className="section stack" id="stack">
      <div className="shell">
        <header className="section-head">
          <Reveal as="p" className="eyebrow">
            Stack
          </Reveal>
          <Reveal as="h2" className="section-title" delay={0.06}>
            What I build with
          </Reveal>
          <Reveal as="p" className="section-copy" delay={0.12}>
            Sorted into folders. Open one to see what is inside.
          </Reveal>
        </header>

        <Reveal className="folder" delay={0.18}>
          <div className="folder-tabs" role="tablist" aria-label="Technology categories">
            {folders.map((folder) => {
              const isActive = folder.id === activeId
              return (
                <button
                  key={folder.id}
                  type="button"
                  role="tab"
                  id={`tab-${folder.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${folder.id}`}
                  className={`folder-tab${isActive ? ' is-active' : ''}`}
                  onClick={() => setActiveId(folder.id)}
                >
                  <svg className="folder-tab-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M3 7.5A1.5 1.5 0 0 1 4.5 6h4l2 2.5h9A1.5 1.5 0 0 1 21 10v8a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18z"
                      fill="currentColor"
                      opacity={isActive ? '1' : '0.45'}
                    />
                  </svg>
                  {folder.label}
                  <span className="folder-tab-count">{folder.count}</span>
                </button>
              )
            })}
          </div>

          <div className="folder-stack">
            <span className="folder-sheet folder-sheet-2" aria-hidden="true" />
            <span className="folder-sheet folder-sheet-1" aria-hidden="true" />

            <div
              className="folder-body"
              role="tabpanel"
              id={`panel-${activeId}`}
              aria-labelledby={`tab-${activeId}`}
            >
              <AnimatePresence mode="wait">
                <motion.ul
                  key={activeId}
                  className="chips"
                  initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease }}
                >
                  {active.items.map((item, index) => (
                    <motion.li
                      key={item.name}
                      className="chip"
                      style={{ '--brand': item.color }}
                      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: 0.04 + index * 0.045, duration: 0.4, ease }}
                    >
                      <item.Icon className="chip-icon" aria-hidden="true" />
                      <span>{item.name}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
