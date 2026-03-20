import { useEffect, useRef, useState } from 'react';
import './Cursor.css';

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.13;
      ring.current.y += (pos.current.y - ring.current.y) * 0.13;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      raf.current = requestAnimationFrame(animate);
    };

    const onEnter = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setHovered(true);
    };
    const onLeave = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setHovered(false);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className={`cursor-dot${hovered ? ' hovered' : ''}`} />
      <div ref={ringRef} className={`cursor-ring${hovered ? ' hovered' : ''}`} />
    </>
  );
}
