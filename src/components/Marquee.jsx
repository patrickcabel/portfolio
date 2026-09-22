import { marqueeItems } from '../data/projects'

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      {[0, 1].map((copy) => (
        <div className="marquee-track" key={copy}>
          {marqueeItems.map((item) => (
            <span className="marquee-item" key={`${copy}-${item}`}>
              {item}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}
