'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef  = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = cursorRef.current;
    const label  = labelRef.current;
    if (!cursor || !label) return;

    let x = 0, y = 0, targetX = 0, targetY = 0;
    let rafId: number;
    let visible = false;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) {
        cursor.style.opacity = '1';
        visible = true;
      }
    };

    const loop = () => {
      x += (targetX - x) * 0.14;
      y += (targetY - y) * 0.14;
      cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(loop);
    };

    loop();
    document.addEventListener('mousemove', onMouseMove);

    const getLabel = (el: Element): string => {
      const dataCursor =
        el.getAttribute('data-cursor') ??
        el.closest('[data-cursor]')?.getAttribute('data-cursor');
      if (dataCursor) return dataCursor.toUpperCase();

      const href = (el as HTMLAnchorElement).href ?? '';
      if (href.includes('/writing/')) return 'READ';
      if (href && !href.startsWith(window.location.origin) && href.startsWith('http')) return 'OPEN';
      return '';
    };

    const addHover = (e: Event) => {
      const el = e.currentTarget as Element;
      const text = getLabel(el);
      label.textContent = text;
      cursor.classList.add('cursor-hover');
      if (text) cursor.classList.add('cursor-labeled');
    };

    const removeHover = () => {
      cursor.classList.remove('cursor-hover', 'cursor-labeled');
      label.textContent = '';
    };

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', addHover);
        el.addEventListener('mouseleave', removeHover);
      });
    };

    attachListeners();

    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="cursor"
      style={{ opacity: 0 }}
      aria-hidden="true"
    >
      <span ref={labelRef} className="cursor-label" aria-hidden="true" />
    </div>
  );
}
