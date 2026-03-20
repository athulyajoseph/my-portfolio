import { useReveal } from './useReveal';
import { data } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const [ref, visible] = useReveal(0.05);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div ref={ref} className={`footer-inner${visible ? ' visible' : ''}`}>
        <div className="footer-top">
          <div className="footer-cta-text">
            Let's build<br />something <em>great.</em>
          </div>
          <a href={`mailto:${data.email}`} className="footer-email-btn">
            {data.email} <span>→</span>
          </a>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-copy">
            © {year} {data.name} · {data.location}
          </div>
          <ul className="footer-links">
            <li><a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={`mailto:${data.email}`}>Email</a></li>
            <li><a href={`tel:${data.phone}`}>Phone</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
