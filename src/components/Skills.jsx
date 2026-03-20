import { useReveal } from './useReveal';
import SectionHeader from './SectionHeader';
import { data } from '../data/portfolio';
import './Skills.css';

function SkillCard({ icon, title, tags, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`skill-card${visible ? ' visible' : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      data-hover
    >
      <div className="skill-card-accent" />
      <div className="skill-card-icon">{icon}</div>
      <div className="skill-card-title">{title}</div>
      <div className="skill-tags">
        {tags.map((t) => (
          <span key={t} className="skill-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-inner">
        <SectionHeader num="02" title="Technical Skills" />
      </div>
      <div className="skills-grid-wrap">
        <div className="skills-grid">
          {data.skills.map((s, i) => (
            <SkillCard key={i} {...s} delay={(i % 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
