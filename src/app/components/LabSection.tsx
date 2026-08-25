'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface LabItem {
  name: string;
  desc: string;
  tag: string;
  wide?: boolean;
}

const LAB_ITEMS: LabItem[] = [
  { name: 'Proxmox',        desc: 'Bare-metal hypervisor running on a repurposed 2012 iMac. Everything else lives here.',   tag: 'Hypervisor',     wide: true },
  { name: 'Docker',         desc: 'All services run in isolated containers with persistent volumes and custom networks.',     tag: 'Infrastructure'               },
  { name: 'Tailscale',      desc: 'Zero-config WireGuard mesh. The lab is one hop from anywhere — no open ports.',           tag: 'Networking'                   },
  { name: 'Nextcloud',      desc: 'Self-hosted cloud storage. My files, my server, my rules.',                               tag: 'Storage'                      },
  { name: 'Home Assistant', desc: 'Whole-home automation. If it has a switch, it\'s automated.',                             tag: 'Automation'                   },
  { name: 'Plex',           desc: 'Media server. A library of everything, accessible anywhere.',                             tag: 'Media'                        },
];

const TERMINAL_ROWS = [
  { name: 'nextcloud',       uptime: '14 days',  port: ':8080',          id: 'b2c3d4e5' },
  { name: 'homeassistant',   uptime: '8 days',   port: ':8123',          id: 'c3d4e5f6' },
  { name: 'plex',            uptime: '3 days',   port: ':32400',         id: 'd4e5f601' },
  { name: 'tailscale',       uptime: '45 days',  port: '—',              id: 'e5f60102' },
  { name: 'portainer',       uptime: '22 days',  port: ':9000',          id: 'f6010203' },
];

function TerminalBlock({ visible }: { visible: boolean }) {
  const [visibleRows, setVisibleRows] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!visible) return;

    if (reduced) {
      setShowPrompt(true);
      setVisibleRows(TERMINAL_ROWS.length);
      return;
    }

    const t1 = setTimeout(() => setShowPrompt(true), 100);
    const timers: ReturnType<typeof setTimeout>[] = [t1];

    TERMINAL_ROWS.forEach((_, i) => {
      timers.push(
        setTimeout(() => setVisibleRows(i + 1), 500 + i * 160)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [visible, reduced]);

  return (
    <div
      className="bg-ink border border-border p-5 md:p-6 font-mono overflow-x-auto"
      style={{ fontSize: '0.72rem', lineHeight: '1.7' }}
      aria-label="Docker container status"
    >
      {/* Prompt line */}
      {showPrompt && (
        <div className="text-text/40 mb-3">
          <span style={{ color: '#4FB3A0' }}>peter@homelab-01</span>
          <span className="text-text/30">:</span>
          <span style={{ color: '#8FAECE' }}>~</span>
          <span className="text-text/30">$</span>
          <span className="text-text/70 ml-2">docker ps --format &quot;table &#123;&#123;.Names&#125;&#125;\t&#123;&#123;.Status&#125;&#125;\t&#123;&#123;.Ports&#125;&#125;&quot;</span>
        </div>
      )}

      {/* Table header */}
      {visibleRows > 0 && (
        <div className="text-text/30 mb-1.5" style={{ letterSpacing: '0.08em' }}>
          <span className="inline-block w-28">CONTAINER</span>
          <span className="inline-block w-28">STATUS</span>
          <span className="inline-block">PORTS</span>
        </div>
      )}

      {/* Data rows */}
      {TERMINAL_ROWS.slice(0, visibleRows).map((row) => (
        <div key={row.id} className="flex items-center gap-1">
          <span className="text-text/20 w-20 shrink-0 hidden sm:inline">{row.id}</span>
          <span className="text-text/80 w-28 shrink-0">{row.name}</span>
          <span className="w-28 shrink-0" style={{ color: '#4FB3A0' }}>
            Up {row.uptime}
          </span>
          <span className="text-text/50">{row.port}</span>
        </div>
      ))}

      {/* Summary + host uptime */}
      {visibleRows >= TERMINAL_ROWS.length && (
        <div className="mt-3 pt-3 border-t border-border">
          <div className="text-text/50 mb-2">
            {TERMINAL_ROWS.length} containers running.{' '}
            <span style={{ color: '#4FB3A0' }}>All healthy.</span>
          </div>
          <div className="text-text/40">
            <span style={{ color: '#4FB3A0' }}>peter@homelab-01</span>
            <span className="text-text/30">:</span>
            <span style={{ color: '#8FAECE' }}>~</span>
            <span className="text-text/30">$</span>
            <span className="text-text/70 ml-2">uptime</span>
          </div>
          <div className="text-text/50">
            {' '}14:02:41 up 127 days,{' '}
            <span style={{ color: '#4FB3A0' }}>load average: 0.18, 0.11, 0.09</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function LabSection() {
  const ref     = useRef<HTMLDivElement>(null);
  const inView  = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduced = useReducedMotion();

  return (
    <section id="lab" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-[900px] h-[900px] select-none"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(46,125,111,0.06) 0%, transparent 65%)',
        }}
      />

      <div className="container-site" ref={ref}>

        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="label text-muted">Lab</span>
            <div className="h-px flex-1 bg-border max-w-16" aria-hidden="true" />
          </motion.div>

          <div className="overflow-hidden mb-4">
            <motion.h2
              initial={{ y: reduced ? '0%' : '110%' }}
              animate={inView ? { y: '0%' } : {}}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-section font-semibold text-text"
              style={{ letterSpacing: '-0.03em' }}
            >
              The Home Lab
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: reduced ? 0 : 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base max-w-[55ch]"
            style={{ color: 'rgba(250,250,250,0.74)' }}
          >
            Self-hosted infrastructure on repurposed hardware. Everything I know about
            networking and containers came from keeping this running.
          </motion.p>
        </div>

        {/* Two-column layout: service cards + terminal */}
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-10">

          {/* Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LAB_ITEMS.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: reduced ? 0 : 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.25 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative bg-base hover:bg-lift transition-all duration-300 p-6 flex flex-col gap-3 border border-border hover:border-accent/30 overflow-hidden ${item.wide ? 'sm:col-span-2' : ''}`}
                style={{ boxShadow: '0 0 0 1px rgba(250,250,250,0.02), 0 10px 24px rgba(0,0,0,0.3)' }}
              >
                {/* Dot grid */}
                <div
                  className="pointer-events-none absolute top-0 right-0 w-28 h-28"
                  aria-hidden="true"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(79,179,160,0.16) 1px, transparent 1px)',
                    backgroundSize: '8px 8px',
                    maskImage: 'radial-gradient(ellipse at top right, black 30%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at top right, black 30%, transparent 75%)',
                  }}
                />
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="status-dot inline-block w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-label="Running" />
                    <h3
                      className="font-heading font-semibold text-text group-hover:text-accent transition-colors duration-300"
                      style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', letterSpacing: '-0.02em' }}
                    >
                      {item.name}
                    </h3>
                  </div>
                  <span className="label text-muted border border-border px-2 py-0.5 shrink-0 group-hover:border-accent/30 transition-colors duration-200">
                    {item.tag}
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(250,250,250,0.72)' }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Terminal block */}
          <motion.div
            initial={{ opacity: 0, y: reduced ? 0 : 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="label text-muted mb-3">Live status</div>
            <TerminalBlock visible={inView} />
          </motion.div>

        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 label text-muted"
        >
          All services self-hosted on bare metal. Uptime: obsessively maintained.
        </motion.p>

      </div>
    </section>
  );
}
