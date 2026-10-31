import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowRight, faArrowDown, faArrowUpRightFromSquare, faEnvelope, faPhone, faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { useReveal } from './useReveal';
import { data } from '../data/content';
import resumePDF from '../assets/Athulya Joseph Resume.pdf';
import photo from '../assets/photo.jpeg';

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function SectionTitle({ num, kicker, title }) {
  return (
    <Reveal className="section-title">
      <span className="section-kicker"><span className="mono">{num}</span> {kicker}</span>
      <h2>{title}</h2>
    </Reveal>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = '';
      document.querySelectorAll('section[id]').forEach((s) => {
        if (window.scrollY >= s.offsetTop - 140) current = s.id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="Athulya Joseph, back to top">
          <span className="nav-mark">{data.initials}</span>
          <span className="nav-name">{data.name}</span>
        </a>
        <nav className={`nav-links${open ? ' is-open' : ''}`} aria-label="Main">
          {NAV.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={active === l.id ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href={resumePDF} download="Athulya_Joseph_Resume.pdf" className="btn btn--small btn--primary" onClick={() => setOpen(false)}>
            Résumé <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </nav>
        <button
          className={`nav-toggle${open ? ' is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span />
        </button>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker mono anim anim-1">
            <span className="status-dot" /> {data.title} · {data.role}
          </p>
          <h1 className="anim anim-2">{data.name}</h1>
          <p className="hero-headline anim anim-3">{data.headline}</p>
          <p className="hero-intro anim anim-3">{data.intro}</p>
          <div className="hero-cta anim anim-4">
            <a href="#work" className="btn btn--primary">See my work <FontAwesomeIcon icon={faArrowRight} /></a>
            <a href={resumePDF} download="Athulya_Joseph_Resume.pdf" className="btn btn--ghost">Download résumé <FontAwesomeIcon icon={faArrowDown} /></a>
          </div>
          <div className="hero-meta anim anim-5">
            <span><FontAwesomeIcon icon={faLocationDot} /> {data.location}</span>
            <a href={data.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a>
            <a href={data.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
          </div>
        </div>

        <div className="hero-visual anim anim-3">
          <div className="hero-photo">
            <img src={photo} alt="Portrait of Athulya Joseph" />
          </div>
          <div className="hero-card">
            <div className="hero-card-bar"><i /><i /><i /><span className="mono">stack.ts</span></div>
            <pre className="mono"><code>
              <span className="tk-k">const</span>{' stack = [\n'}
              {data.heroStack.map((s, i) => (
                <span key={s}>{'  '}<span className="tk-s">{`'${s}'`}</span>{i < data.heroStack.length - 1 ? ',\n' : '\n'}</span>
              ))}
              {'];\n'}
              <span className="tk-c">{'// shipping since 2017'}</span>
            </code></pre>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="stats anim anim-5">
          {data.stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>{s.num}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle num="01" kicker="About" title="Engineer, lead and the person clients call first." />
        <div className="about-grid">
          <div className="about-text">
            {data.about.map((p, i) => <Reveal as="p" key={i} delay={i * 80}>{p}</Reveal>)}
            <Reveal as="p" className="about-availability" delay={260}>
              <span className="status-dot" /> {data.availability}, based in {data.location.split(',')[0]}.
            </Reveal>
          </div>
          <div className="strengths">
            {data.strengths.map((s, i) => (
              <Reveal key={s.title} className="strength" delay={i * 70}>
                <span className="mono strength-num">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <SectionTitle num="02" kicker="Experience" title="9+ years, from PHP developer to technical lead." />
        <ol className="timeline">
          {data.experience.map((job) => (
            <Reveal as="li" key={job.company} className="job">
              <div className="job-side">
                <span className="mono job-period">{job.period}</span>
                <span className="job-location">{job.location}</span>
              </div>
              <div className="job-body">
                <h3>{job.company}</h3>
                {job.roles.length > 1 ? (
                  <ul className="role-path" aria-label="Role progression">
                    {job.roles.map((r, i) => (
                      <li key={r.title} className={i === 0 ? 'is-current' : ''}>
                        <span className="role-title">{r.title}</span>
                        <span className="mono role-period">{r.period}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="job-role">{job.roles[0].title}</p>
                )}
                <ul className="job-bullets">
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <div className="tags">
                  {job.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Work() {
  const featured = data.projects.filter((p) => p.featured);
  const rest = data.projects.filter((p) => !p.featured);
  return (
    <section id="work" className="section">
      <div className="container">
        <SectionTitle num="03" kicker="Selected work" title="Platforms I've built, rebuilt and shipped." />
        <div className="work-featured">
          {featured.map((p, i) => (
            <Reveal key={p.name} className="project project--featured" delay={i * 100}>
              <span className="mono project-client">{p.client}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <ul className="project-highlights">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
              <div className="tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            </Reveal>
          ))}
        </div>
        <div className="work-grid">
          {rest.map((p, i) => (
            <Reveal key={p.name} className="project" delay={i * 80}>
              <span className="mono project-client">{p.client}</span>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              {p.links && (
                <div className="project-links">
                  {p.links.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  ))}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionTitle num="04" kicker="Skills" title="The toolkit." />
        <div className="skills-grid">
          {data.skills.map((g, i) => (
            <Reveal key={g.title} className="skill-group" delay={(i % 3) * 70}>
              <h3>{g.title}</h3>
              <div className="tags">{g.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            </Reveal>
          ))}
        </div>
        <div className="education">
          <Reveal as="h3" className="education-title">Education</Reveal>
          <div className="education-grid">
            {data.education.map((e) => (
              <Reveal key={e.short} className="edu">
                <span className="edu-short mono">{e.short}</span>
                <div>
                  <p className="edu-degree">{e.degree}</p>
                  <p className="edu-school">{e.school} · <span className="mono">{e.year}</span></p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const year = new Date().getFullYear();
  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal className="contact-card">
          <span className="section-kicker"><span className="mono">05</span> Contact</span>
          <h2>Let's build something reliable.</h2>
          <p>{data.availability}. Based in {data.location} — available for on-site, hybrid and remote work.</p>
          <div className="contact-actions">
            <a href={`mailto:${data.email}`} className="btn btn--primary btn--large">
              <FontAwesomeIcon icon={faEnvelope} /> {data.email}
            </a>
            <a href={resumePDF} download="Athulya_Joseph_Resume.pdf" className="btn btn--ghost btn--large">
              Download résumé <FontAwesomeIcon icon={faArrowDown} />
            </a>
          </div>
          <ul className="contact-links">
            <li><a href={data.linkedin} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /> linkedin.com/in/athulyajoseph</a></li>
            <li><a href={data.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> github.com/athulyajoseph</a></li>
            <li><a href={`tel:${data.phone.replace(/\s/g, '')}`}><FontAwesomeIcon icon={faPhone} /> {data.phone}</a></li>
          </ul>
        </Reveal>
      </div>
      <footer className="container footer">
        <span>© {year} {data.name}</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </section>
  );
}
