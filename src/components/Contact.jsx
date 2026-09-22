import Reveal from './Reveal'

export default function Contact() {
  const year = new Date().getFullYear()

  return (
    <>
      <section className="contact" id="contact">
        <span className="contact-halo" aria-hidden="true" />
        <div className="shell contact-block">
          <header className="section-head">
            <Reveal as="p" className="eyebrow">
              Contact
            </Reveal>
            <Reveal as="h2" className="section-title" delay={0.06}>
              Tell me what you’re working on
            </Reveal>
            <Reveal as="p" className="section-copy" delay={0.12}>
              I’m open to new work — a site, a rebuild, or something you haven’t figured out how to
              scope yet. Email is the easiest way to reach me, and I’m glad to just talk it through
              if that is where you are at.
            </Reveal>
          </header>

          <Reveal delay={0.18}>
            <a className="contact-email" href="mailto:pabelnwa@gmail.com">
              pabelnwa@gmail.com
            </a>
          </Reveal>

          <Reveal as="ul" className="contact-links" delay={0.24}>
            <li>
              <a href="https://github.com/patrickcabel" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#work">Back to work</a>
            </li>
          </Reveal>
        </div>
      </section>

      <footer className="footer">
        <span>© {year} Patrick Abel</span>
        <span>Built with React</span>
      </footer>
    </>
  )
}
