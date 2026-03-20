import { data } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">

      {/* ── TOP: Photo | Details ── */}
      <div className="hero-top">

        {/* LEFT — photo placeholder */}
        <div className="hero-photo-wrap anim anim-1">
          <div className="hero-photo-placeholder">
            {/* Replace this div with: <img src={require('../assets/photo.jpg')} alt="Athulya Joseph" /> */}
            
            {/* <div className="hero-photo-initials">AJ</div> */}
            <div className="hero-photo-hint">
              <img src={require('../assets/photo.jpeg')} alt="Athulya Joseph" />
            </div>
          </div>
        </div>

        {/* RIGHT — details */}
        <div className="hero-details">
          <div className="hero-badge anim anim-1">
            <span className="hero-badge-dot" />
            {data.title}
          </div>

          <h1 className="hero-name anim anim-2">
            {data.name.split(' ')[0]}{' '}
            <em>{data.name.split(' ')[1]}</em>
          </h1>

          <p className="hero-desc anim anim-3">{data.summary}</p>

          <div className="hero-contact anim anim-4">
            <a href={`mailto:${data.email}`} className="hero-contact-item">
              <span className="hero-contact-icon">✉</span>{data.email}
            </a>
            <a href={`tel:${data.phone}`} className="hero-contact-item">
              <span className="hero-contact-icon">☏</span>{data.phone}
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="hero-contact-item">
              <span className="hero-contact-icon">in</span>linkedin.com/in/athulyajoseph
            </a>
            <span className="hero-contact-item">
              <span className="hero-contact-icon">◉</span>{data.location}
            </span>
          </div>

          <div className="hero-cta anim anim-5">
            <a href="#experience" className="btn btn--primary">
              View Experience →
            </a>
            <a href={`mailto:${data.email}`} className="btn btn--outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* ── BOTTOM — stats strip ── */}
      <div className="hero-stats-strip">
        <div className="hero-bg-text" aria-hidden="true">AJ</div>
        <div className="hero-stats-inner">
          <span className="hero-location">
            <span className="hero-location-dot" />
            {data.location}
          </span>
          <div className="hero-stats-grid">
            {data.stats.map((s, i) => (
              <div key={i} className={`hero-stat anim anim-${i + 1}`}>
                <div className="hero-stat-num">
                  {s.num.replace('+', '')}<span>{s.num.includes('+') ? '+' : ''}</span>
                </div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
