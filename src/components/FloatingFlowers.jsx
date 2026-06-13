import { useEffect, useState } from 'react'

// ─── SVG primitives ──────────────────────────────────────────────────────────

function Peony({ cx, cy, r, color }) {
  function petal(angle, dist, rx, ry, op) {
    const rad = (angle * Math.PI) / 180
    const px  = cx + Math.cos(rad) * dist
    const py  = cy + Math.sin(rad) * dist
    return (
      <ellipse
        key={`${angle}-${dist}`}
        cx={px} cy={py} rx={rx} ry={ry}
        fill={color} opacity={op}
        transform={`rotate(${angle + 90}, ${px}, ${py})`}
      />
    )
  }
  const outer = [0, 45, 90, 135, 180, 225, 270, 315]
  const inner = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5]
  return (
    <g>
      {outer.map(a => petal(a, r * 0.56, r * 0.38, r * 0.62, 0.50))}
      {inner.map(a => petal(a, r * 0.30, r * 0.30, r * 0.52, 0.68))}
      <circle cx={cx} cy={cy} r={r * 0.26} fill={color}  opacity="0.90" />
      <circle cx={cx} cy={cy} r={r * 0.13} fill="#FFF0F5" opacity="0.80" />
    </g>
  )
}

function Blossom({ cx, cy, r, color }) {
  return (
    <g>
      {[0, 72, 144, 216, 288].map(angle => {
        const rad = (angle * Math.PI) / 180
        const px  = cx + Math.cos(rad) * r * 0.72
        const py  = cy + Math.sin(rad) * r * 0.72
        return (
          <ellipse
            key={angle}
            cx={px} cy={py}
            rx={r * 0.44} ry={r * 0.72}
            fill={color} opacity="0.70"
            transform={`rotate(${angle + 90}, ${px}, ${py})`}
          />
        )
      })}
      <circle cx={cx} cy={cy} r={r * 0.30} fill="#FFF8DC" opacity="0.90" />
    </g>
  )
}

// ─── Standalone SVG wrappers ─────────────────────────────────────────────────

function PeonySVG({ size, color }) {
  const s = size * 3
  const c = s / 2
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} overflow="visible" aria-hidden="true">
      <Peony cx={c} cy={c} r={size} color={color} />
    </svg>
  )
}

function BlossomSVG({ size, color }) {
  const s = size * 3
  const c = s / 2
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} overflow="visible" aria-hidden="true">
      <Blossom cx={c} cy={c} r={size} color={color} />
    </svg>
  )
}

function LeafSVG({ size, color, flipped }) {
  const w  = size * 0.38
  const h  = size * 1.2
  const s  = size * 3
  const lx = s / 2
  const ly = (s - h) / 2
  const angle = flipped ? 14 : -14
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} overflow="visible" aria-hidden="true">
      <g transform={`translate(${lx},${ly}) rotate(${angle},0,${h / 2})`}>
        <path
          d={`M0,${h} Q-${w},${h * 0.5} 0,0 Q${w},${h * 0.5} 0,${h} Z`}
          fill={color} opacity="0.62"
        />
        <line x1="0" y1={h} x2="0" y2="0" stroke={color} strokeWidth="0.9" opacity="0.35" />
      </g>
    </svg>
  )
}

// ─── Flower configuration ────────────────────────────────────────────────────
//
// threshold: scroll progress (0–1) at which this flower slides in
// delay / duration: control each flower's floating bob independently

const FLOWERS = [
  // ── Left side ──────────────────────────────────────────────────────────────
  { id:'l1', side:'left',  top:'9%',  shape:'peony',   size:44, color:'#F4AABB', threshold:0.03, delay:'0.0s',  duration:'4.0s' },
  { id:'l2', side:'left',  top:'27%', shape:'blossom', size:23, color:'#CDB8E0', threshold:0.21, delay:'0.5s',  duration:'3.6s' },
  { id:'l3', side:'left',  top:'46%', shape:'leaf',    size:38, color:'#6B9E7A', threshold:0.40, delay:'1.1s',  duration:'5.2s' },
  { id:'l4', side:'left',  top:'65%', shape:'peony',   size:31, color:'#FADADD', threshold:0.58, delay:'0.3s',  duration:'4.8s' },
  { id:'l5', side:'left',  top:'83%', shape:'blossom', size:19, color:'#F5C8A0', threshold:0.77, delay:'0.8s',  duration:'3.9s' },
  // ── Right side ─────────────────────────────────────────────────────────────
  { id:'r1', side:'right', top:'17%', shape:'blossom', size:21, color:'#B0CCE8', threshold:0.11, delay:'0.65s', duration:'4.4s' },
  { id:'r2', side:'right', top:'36%', shape:'peony',   size:39, color:'#FADADD', threshold:0.30, delay:'0.15s', duration:'3.7s' },
  { id:'r3', side:'right', top:'54%', shape:'blossom', size:25, color:'#CDB8E0', threshold:0.48, delay:'1.2s',  duration:'4.9s' },
  { id:'r4', side:'right', top:'72%', shape:'peony',   size:27, color:'#E8829A', threshold:0.66, delay:'0.45s', duration:'5.0s' },
  { id:'r5', side:'right', top:'88%', shape:'leaf',    size:29, color:'#85B07A', threshold:0.84, delay:'0.9s',  duration:'3.8s' },
]

// ─── Single flower item ──────────────────────────────────────────────────────

function FlowerItem({ flower, visible }) {
  const { side, top, shape, size, color, delay, duration } = flower
  const flipped = side === 'right'

  const svg =
    shape === 'peony'   ? <PeonySVG   size={size} color={color} /> :
    shape === 'blossom' ? <BlossomSVG size={size} color={color} /> :
                          <LeafSVG    size={size} color={color} flipped={flipped} />

  return (
    <div
      className={`floating-flower fl-${side}${visible ? ' fl-visible' : ''}`}
      style={{ top }}
      aria-hidden="true"
    >
      {/* Inner wrapper handles the gentle up-down float independently of the slide-in */}
      <div
        className="floating-flower-inner"
        style={{ animationDelay: delay, animationDuration: duration }}
      >
        {svg}
      </div>
    </div>
  )
}

// ─── Main export — mounts once in App, tracks page scroll ───────────────────

export default function FloatingFlowers() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function update() {
      const el  = document.documentElement
      const max = el.scrollHeight - el.clientHeight
      setProgress(max > 0 ? el.scrollTop / max : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    update() // capture initial position
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <>
      {FLOWERS.map(f => (
        <FlowerItem key={f.id} flower={f} visible={progress >= f.threshold} />
      ))}
    </>
  )
}
