import { useState } from 'react';
import { useReveal } from './useReveal';
import SectionHeader from './SectionHeader';
import { data } from '../data/portfolio';
import './Experience.css';

function ExpItem({ role, company, period, bullets, tags, index }) {
  const [open, setOpen] = useState(index === 0);
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={`exp-item${visible ? ' visible' : ''}${open ? ' open' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button className="exp-header" onClick={() => setOpen((v) => !v)} data-hover>
        <div className="exp-header-left">
          <div className="exp-date">{period}</div>
          <div className="exp-company">{company}</div>
        </div>
        <div className="exp-role">{role}</div>
        <div className="exp-toggle">{open ? '−' : '+'}</div>
      </button>
      <div className="exp-body">
        <div>
          <div className="exp-body-inner">
            <ul className="exp-bullets">
              {bullets.map((b, i) => (
                <li key={i}><span className="exp-arrow">→</span>{b}</li>
              ))}
            </ul>
            <div className="exp-tags">
              {tags.map((t) => <span key={t} className="exp-tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-inner">
        <SectionHeader num="03" title="Experience" />
        <div className="exp-list">
          {data.experience.map((e, i) => (
            <ExpItem key={i} {...e} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
