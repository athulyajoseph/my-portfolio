import { useReveal } from './useReveal';
import SectionHeader from './SectionHeader';
import { data } from '../data/portfolio';
import './Skills.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

function SkillCard({ skillicon, title, tags, delay }) {
  const [ref, visible] = useReveal();
  const iconMap = { faChartLine, faServer, faCode, faDesktop, faDatabase, faCloud, faCheckSquare };
  const icon = iconMap[skillicon] || faCode; 

  return (
    <div
      ref={ref}
      className={`skill-card${visible ? ' visible' : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      data-hover
    >
      <div className="skill-card-accent" />
      <div className="skill-card-icon"><FontAwesomeIcon icon={icon} size="1x" /></div>
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
