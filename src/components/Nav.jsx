import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    // #contact is observed too so no nav link stays lit past the last section.
    const sections = [...links.map((link) => link.href), '#contact']
      .map((href) => document.querySelector(href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <motion.header
      className={`nav${scrolled ? ' is-scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav-inner">
        <a className="nav-brand" href="#top" onClick={close}>
          <span className="nav-dot" aria-hidden="true" />
          Patrick Abel
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        <ul id="primary-nav" className={`nav-links${open ? ' is-open' : ''}`}>
          <AnimatePresence initial={false}>
            {links.map((link, index) => (
              <motion.li
                key={link.href}
                initial={open ? { opacity: 0, x: -12 } : false}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: open ? index * 0.06 : 0, duration: 0.3 }}
              >
                <a
                  href={link.href}
                  className={active === link.href ? 'is-active' : undefined}
                  onClick={close}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </AnimatePresence>
          <li>
            <a className="nav-cta" href="#contact" onClick={close}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </motion.header>
  )
}
