import { useReveal } from './useReveal';
import './SectionHeader.css';

export default function SectionHeader({ num, title, dark }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`section-header${visible ? ' visible' : ''}${dark ? ' section-header--dark' : ''}`}>
      <span className="section-num">{num}</span>
      <h2 className="section-title">{title}</h2>
      <div className="section-line" />
    </div>
  );
}
