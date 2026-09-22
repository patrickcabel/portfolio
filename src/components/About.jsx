import Reveal from './Reveal'

const stats = [
  { label: 'Design & build', detail: 'Layout and visual design through to the shipped front end' },
  { label: 'Full stack', detail: 'React and Next.js front ends through to CMS and Stripe checkout' },
  { label: 'Calgary', detail: 'Based here, open to local and remote work' },
]

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="shell about-layout">
        <div>
          <header className="section-head">
            <Reveal as="p" className="eyebrow">
              About
            </Reveal>
            <Reveal as="h2" className="section-title" delay={0.06}>
              How I got into this
            </Reveal>
          </header>
          <Reveal className="about-body" delay={0.12}>
            <p>
              I played a lot of video games growing up, and at some point I got more curious about
              how they were put together than about finishing them. Wanting to know what was
              underneath turned into writing code, and it stuck.
            </p>
            <p>
              Most of it now goes into websites for small businesses around Calgary — trades,
              clinics, restaurants. Away from that I build full-stack web apps: storefronts with
              Stripe checkout and Sanity behind the content, mostly React and Next.js.
            </p>
            <p>
              I keep the sites plain and quick. A lot of them get opened one-handed, on a phone, by
              someone who needs a number right now — so that is the case I build for.
            </p>
          </Reveal>
        </div>

        <aside className="about-aside" aria-label="Highlights">
          {stats.map((stat, index) => (
            <Reveal className="about-stat" key={stat.label} delay={index * 0.1}>
              <strong>{stat.label}</strong>
              <span>{stat.detail}</span>
            </Reveal>
          ))}
        </aside>
      </div>
    </section>
  )
}
