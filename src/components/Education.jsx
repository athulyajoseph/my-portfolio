import { useReveal } from './useReveal';
import SectionHeader from './SectionHeader';
import { data } from '../data/portfolio';
import './Education.css';

function EduCard({ short, degree, school, year, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`edu-card${visible ? ' visible' : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      data-hover
    >
      <div className="edu-watermark" aria-hidden="true">🎓</div>
      <div className="edu-short">{short}</div>
      <div className="edu-degree">{degree}</div>
      <div className="edu-school">{school}</div>
      <div className="edu-year">{year}</div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="section-inner">
        <SectionHeader num="05" title="Education" />
        <div className="edu-grid">
          {data.education.map((e, i) => (
            <EduCard key={i} {...e} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
