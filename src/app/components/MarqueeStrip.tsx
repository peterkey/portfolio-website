'use client';

import { useReducedMotion } from 'framer-motion';

const PHRASES = [
  'IT SUPPORT · INFRASTRUCTURE · SOUTH WALES',
  'BUILD IT · BREAK IT · FIX IT · SHIP IT',
  'LINUX · DOCKER · NETWORKING · WINDOWS',
];

// Build a long enough track: repeat phrases with separators
const ITEMS = Array.from({ length: 4 }, () => PHRASES.map(p => [p, '·']).flat()).flat();

export default function MarqueeStrip() {
  const reduced = useReducedMotion();
  // Duplicate for seamless loop: animation moves -50% so the repeat is invisible
  const track = [...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden bg-accent border-y border-accent/20 py-4 select-none"
      aria-hidden="true"
    >
      <div
        className={reduced ? 'flex gap-8 items-center' : 'marquee-track flex gap-8 items-center'}
        style={{ width: 'max-content' }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className={
              item === '·'
                ? 'text-white/40 text-lg leading-none'
                : 'font-heading font-semibold text-white text-sm tracking-[0.16em] uppercase whitespace-nowrap'
            }
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
