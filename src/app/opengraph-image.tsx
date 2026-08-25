import { ImageResponse } from 'next/og';

export const alt = 'Peter Williams-Key — IT Support & Infrastructure';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: '#0E1512',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent left bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 6,
            height: '100%',
            backgroundColor: '#2E7D6F',
          }}
        />

        {/* Node motif — top right */}
        <div
          style={{
            position: 'absolute',
            top: 72,
            right: 80,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: 99, backgroundColor: '#4FB3A0' }} />
          <div style={{ width: 56, height: 1, backgroundColor: 'rgba(250,250,250,0.25)' }} />
          <div style={{ width: 8, height: 8, borderRadius: 99, border: '1px solid #4FB3A0' }} />
          <div style={{ width: 56, height: 1, backgroundColor: 'rgba(250,250,250,0.25)' }} />
          <div style={{ width: 8, height: 8, borderRadius: 99, backgroundColor: '#5B7FA6' }} />
        </div>

        {/* Top label */}
        <div
          style={{
            display: 'flex',
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#93A69C',
          }}
        >
          IT Support & Infrastructure — Wales, UK
        </div>

        {/* Primary name */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            lineHeight: 1,
          }}
        >
          <span
            style={{
              fontSize: 110,
              fontWeight: 800,
              color: '#FAFAFA',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            Peter Williams-
          </span>
          <span
            style={{
              fontSize: 110,
              fontWeight: 800,
              color: '#2E7D6F',
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            Key
          </span>
        </div>

        {/* Secondary descriptor */}
        <div
          style={{
            fontSize: 24,
            fontWeight: 400,
            color: '#93A69C',
            maxWidth: 760,
            lineHeight: 1.5,
          }}
        >
          First-line IT support backed by a self-hosted home lab — Docker,
          Proxmox, Tailscale, Pi-hole. CompTIA Network+ in progress.
        </div>
      </div>
    ),
    { ...size },
  );
}
