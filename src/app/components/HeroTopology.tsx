'use client';

/**
 * HeroTopology — the hero's signature element.
 * An etched schematic of the actual home lab: WAN → router (Pi-hole DNS) →
 * Proxmox host (2012 iMac) → Docker services, with the Tailscale mesh drawn
 * as a dashed overlay. Packets travel the edges via CSS motion paths; under
 * prefers-reduced-motion the packets stay hidden and the diagram is static.
 * Every node is real — this is documentation, not decoration.
 */

interface Node {
  id: string;
  x: number;
  y: number;
  label: string;
  sub?: string;
  r?: number;           // ring radius
  labelSide?: 'above' | 'below' | 'left' | 'right';
  delay?: number;       // breathe stagger, seconds
}

const NODES: Node[] = [
  { id: 'wan',       x: 260, y: 48,  label: 'WAN',            sub: 'INTERNET',      labelSide: 'right', delay: 0    },
  { id: 'router',    x: 260, y: 168, label: 'ROUTER',         sub: 'PI-HOLE DNS',   labelSide: 'right', delay: 0.6  },
  { id: 'pihole',    x: 104, y: 252, label: 'PI-HOLE',        sub: 'AD-BLOCK DNS',  labelSide: 'below', delay: 1.1  },
  { id: 'laptop',    x: 420, y: 252, label: 'MACBOOK',        sub: 'FEDORA',        labelSide: 'right', delay: 1.7  },
  { id: 'proxmox',   x: 260, y: 352, label: 'PROXMOX',        sub: '2012 IMAC',     labelSide: 'right', r: 13, delay: 0.3 },
  { id: 'nextcloud', x: 86,  y: 512, label: 'NEXTCLOUD',      r: 8, labelSide: 'below', delay: 0.9 },
  { id: 'ha',        x: 202, y: 540, label: 'HOME ASSISTANT', r: 8, labelSide: 'below', delay: 1.4 },
  { id: 'plex',      x: 318, y: 540, label: 'PLEX',           r: 8, labelSide: 'below', delay: 0.2 },
  { id: 'portainer', x: 434, y: 512, label: 'PORTAINER',      r: 8, labelSide: 'below', delay: 1.9 },
];

// Edge paths in SVG user units (trimmed to stop at node rings)
const EDGES = [
  { id: 'wan-router',    d: 'M260,60 L260,155' },
  { id: 'router-pihole', d: 'M248,175 C200,196 152,222 114,245' },
  { id: 'router-laptop', d: 'M272,175 C320,196 368,222 408,245' },
  { id: 'router-prox',   d: 'M260,181 L260,338' },
  { id: 'prox-nc',       d: 'M249,360 C190,404 128,462 93,503' },
  { id: 'prox-ha',       d: 'M255,365 C235,420 215,478 205,530' },
  { id: 'prox-plex',     d: 'M265,365 C285,420 305,478 315,530' },
  { id: 'prox-port',     d: 'M271,360 C330,404 392,462 427,503' },
];

// Tailscale mesh — dashed, dusty blue, laptop → proxmox
const TAILSCALE_EDGE = 'M420,265 C428,330 340,336 276,349';

// Packets: which edge, timing. Kept sparse — traffic, not fireworks.
const PACKETS = [
  { d: 'M260,60 L260,155',                          duration: 3.2, delay: 0   },
  { d: 'M260,181 L260,338',                          duration: 3.6, delay: 1.4 },
  { d: 'M248,175 C200,196 152,222 114,245',          duration: 3.4, delay: 2.2 },
  { d: 'M249,360 C190,404 128,462 93,503',           duration: 4.2, delay: 0.8 },
  { d: 'M265,365 C285,420 305,478 315,530',          duration: 4.0, delay: 2.9 },
  { d: TAILSCALE_EDGE,                               duration: 4.6, delay: 1.8, blue: true },
];

function labelPosition(node: Node) {
  const r = node.r ?? 10;
  switch (node.labelSide) {
    case 'left':  return { x: node.x - r - 10, y: node.y + 3,      anchor: 'end'    as const };
    case 'below': return { x: node.x,          y: node.y + r + 16, anchor: 'middle' as const };
    case 'above': return { x: node.x,          y: node.y - r - 10, anchor: 'middle' as const };
    default:      return { x: node.x + r + 10, y: node.y + 3,      anchor: 'start'  as const };
  }
}

export default function HeroTopology({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 600"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ overflow: 'visible' }}
    >
      {/* Edges */}
      {EDGES.map((edge) => (
        <path
          key={edge.id}
          d={edge.d}
          stroke="rgba(250,250,250,0.13)"
          strokeWidth="1"
        />
      ))}

      {/* Tailscale mesh — dashed overlay */}
      <path
        d={TAILSCALE_EDGE}
        stroke="rgba(91,127,166,0.45)"
        strokeWidth="1"
        strokeDasharray="3 5"
      />
      <text
        x="408"
        y="330"
        fill="rgba(143,174,206,0.6)"
        fontSize="8"
        letterSpacing="0.16em"
        textAnchor="middle"
        style={{ fontFamily: 'var(--font-mono, monospace)' }}
      >
        TAILSCALE
      </text>

      {/* Packets — luminous dots on CSS motion paths */}
      {PACKETS.map((p, i) => (
        <circle
          key={i}
          className="topo-packet"
          r="2.4"
          fill={p.blue ? '#8FAECE' : '#4FB3A0'}
          style={{
            offsetPath: `path("${p.d}")`,
            ['--packet-duration' as string]: `${p.duration}s`,
            ['--packet-delay' as string]: `${p.delay}s`,
            filter: `drop-shadow(0 0 4px ${p.blue ? 'rgba(143,174,206,0.9)' : 'rgba(79,179,160,0.9)'})`,
          }}
        />
      ))}

      {/* Nodes */}
      {NODES.map((node) => {
        const r = node.r ?? 10;
        const pos = labelPosition(node);
        return (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={r}
              stroke="rgba(79,179,160,0.4)"
              strokeWidth="1"
            />
            <circle
              className="topo-node-core"
              cx={node.x}
              cy={node.y}
              r={r > 9 ? 3 : 2.4}
              fill="#4FB3A0"
              style={{ ['--node-delay' as string]: `${node.delay ?? 0}s` }}
            />
            <text
              x={pos.x}
              y={pos.y}
              fill="rgba(250,250,250,0.6)"
              fontSize="10"
              letterSpacing="0.14em"
              textAnchor={pos.anchor}
              style={{ fontFamily: 'var(--font-mono, monospace)' }}
            >
              {node.label}
            </text>
            {node.sub && (
              <text
                x={pos.x}
                y={pos.y + 12}
                fill="rgba(147,166,156,0.55)"
                fontSize="7.5"
                letterSpacing="0.14em"
                textAnchor={pos.anchor}
                style={{ fontFamily: 'var(--font-mono, monospace)' }}
              >
                {node.sub}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
