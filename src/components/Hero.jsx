import { data } from '../data/portfolio';
import './Hero.css';
import resumePDF from '../assets/Athulya Joseph Resume.pdf';

export default function Hero() {
  return (
    <section id="hero" className="hero">

      {/* ── TOP — photo + details ── */}
      <div className="hero-top">

        {/* LEFT */}
        <div className="hero-photo-wrap anim anim-1">
          <div className="hero-photo-placeholder">
                <div className="hero-photo-hint">
              <img src={require('../assets/photo.jpeg')} alt="Athulya Joseph" />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-details">
          <div className="hero-badge anim anim-1">
            <span className="hero-badge-dot" />
            {data.title}
          </div>

          <h1 className="hero-name anim anim-2">
            {data.name}
          </h1>

          <p className="hero-desc anim anim-3">{data.summary}</p>
          <p className="hero-desc anim anim-3">
            <ul className="about-bullets">
              {data.aboutBullets.map((b, i) => (
                <li key={i} className="about-bullet">{b}</li>
              ))}
            </ul>
          </p>

          <div className="hero-cta anim anim-5">
            <a href="#experience" className="btn btn--primary">
              View Experience →
            </a>
            <a href={`mailto:${data.email}`} className="btn btn--outline">
              Get In Touch
            </a>
            <a href={resumePDF} download="Athulya_Joseph_Resume.pdf" className="btn btn--download" title="Download Resume">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1v9M8 10l-3-3M8 10l3-3M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Resume
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
