import { useReveal } from './useReveal';
import SectionHeader from './SectionHeader';
import { data } from '../data/portfolio';
import './Projects.css';

function ProjectCard({ num, client, name, desc, tags, delay }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`project-card${visible ? ' visible' : ''}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      data-hover
    >
      <div className="project-card-num" aria-hidden="true">{num}</div>
      <div className="project-client">{client}</div>
      <div className="project-name">{name}</div>
      <p className="project-desc">{desc}</p>
      <div className="project-tags">
        {tags.map((t) => (
          <span key={t} className="project-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-inner">
        <SectionHeader num="04" title="Key Projects" dark />
      </div>
      <div className="projects-grid-wrap">
        <div className="projects-grid">
          {data.projects.map((p, i) => (
            <ProjectCard key={i} {...p} delay={(i % 2) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
