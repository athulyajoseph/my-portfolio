import { useReveal } from './useReveal';
import SectionHeader from './SectionHeader';
import { data } from '../data/portfolio';
import './About.css';

export default function About() {
  const [leftRef, leftVisible] = useReveal();
  const [rightRef, rightVisible] = useReveal();

  return (
    <section id="about" className="about">
      <div className="section-inner">
        <SectionHeader num="01" title="About" />
        <div className="about-grid">
          <div ref={leftRef} className={`about-left${leftVisible ? ' visible' : ''}`}>
            <blockquote className="about-quote">
              "Engineering systems that scale, teams that grow, products that last."
            </blockquote>
            {/* <div className="about-contact">
              <a href={`mailto:${data.email}`} className="contact-item">
                <span className="contact-icon">✉</span>
                {data.email}
              </a>
              <a href={`tel:${data.phone}`} className="contact-item">
                <span className="contact-icon">☏</span>
                {data.phone}
              </a>
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="contact-item">
                <span className="contact-icon">in</span>
                linkedin.com/in/athulyajoseph
              </a>
              <span className="contact-item">
                <span className="contact-icon">◉</span>
                {data.location}
              </span>
            </div> */}
          </div>
          <div ref={rightRef} className={`about-right${rightVisible ? ' visible' : ''}`}>
            {data.about.map((p, i) => (
              <p key={i} className="about-text">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
