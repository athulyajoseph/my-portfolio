import { data } from '../data/portfolio';
import './Hero.css';
import resumePDF from '../assets/Athulya Joseph Resume.pdf';
import photo from '../assets/photo.jpeg';

export default function Hero() {
  return (
    <section id="hero" className="hero">

      <div className="hero-top">

        {/* LEFT - PHOTO */}
        {/* <div className="hero-photo-wrap anim anim-1">
          <img
            src={photo}
            alt="Athulya Joseph"
            className="hero-photo"
          />
        </div> */}

        <div className="hero-photo-wrap anim anim-1">
  <div className="hero-photo-frame">
    <img
      src={photo}
      alt="Athulya Joseph"
      className="hero-photo"
    />
  </div>
</div>

        {/* RIGHT - CONTENT */}
        <div className="hero-details">
          <div className="hero-badge anim anim-1">
            <span className="hero-badge-dot" />
            {data.title}
          </div>

          <h1 className="hero-name anim anim-2">
            {data.name}
          </h1>

          <p className="hero-desc anim anim-3">
            {data.summary}
          </p>

          <ul className="about-bullets anim anim-4">
            {data.aboutBullets.map((b, i) => (
              <li key={i} className="about-bullet">{b}</li>
            ))}
          </ul>

          <div className="hero-cta anim anim-5">
            <a href="#experience" className="btn btn--primary">
              View Experience →
            </a>

            <a href={`mailto:${data.email}`} className="btn btn--outline">
              Get In Touch
            </a>

            <a
              href={resumePDF}
              download="Athulya_Joseph_Resume.pdf"
              className="btn btn--outline"
            >
              Resume ↓
            </a>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="hero-stats-strip">
        <div className="hero-bg-text">AJ</div>

        <div className="hero-stats-inner">
          <span className="hero-location">
            <span className="hero-location-dot" />
            {data.location}
          </span>

          <div className="hero-stats-grid">
            {data.stats.map((s, i) => (
              <div key={i} className={`hero-stat anim anim-${i + 1}`}>
                <div className="hero-stat-num">
                  {s.num.replace('+', '')}
                  {s.num.includes('+') && <span>+</span>}
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
