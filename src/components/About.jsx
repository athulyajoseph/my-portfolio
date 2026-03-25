import { useReveal } from './useReveal';
import SectionHeader from './SectionHeader';
import { data } from '../data/portfolio';
import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

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
            <div className="hero-contact anim anim-4">
            <a href={`mailto:${data.email}`} className="hero-contact-item">
              <span className="hero-contact-icon">
                <FontAwesomeIcon icon={faEnvelope} size="1x" />
              </span>
              {data.email}
            </a>
            <a href={`tel:${data.phone}`} className="hero-contact-item">
              <span className="hero-contact-icon">
                <FontAwesomeIcon icon={faPhone} size="1x" />
              </span>
              {data.phone}
            </a>
            <a href={data.linkedin} target="_blank" rel="noreferrer" className="hero-contact-item">
              <span className="hero-contact-icon">
                <FontAwesomeIcon icon={faLinkedin} size="1x" />
              </span>
             linkedin.com/in/athulyajoseph
            </a>
            <a href={data.github} target="_blank" rel="noreferrer" className="hero-contact-item">
              <span className="hero-contact-icon">
                <FontAwesomeIcon icon={faGithub} size="1x" />
              </span>
              github.com/athulyajoseph
            </a>
            <span className="hero-contact-item">
              <span className="hero-contact-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" />
              </span>
              {data.location}
            </span>
          </div>
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
