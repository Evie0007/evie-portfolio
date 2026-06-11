// ─── Primitive SVG flower shapes ───────────────────────────────────────────

function Peony({ cx, cy, r = 32, color = '#F4AABB' }) {
  // 8 outer petals + 6 inner petals + centre
  function petal(angle, dist, rx, ry, op) {
    const rad = (angle * Math.PI) / 180
    const px  = cx + Math.cos(rad) * dist
    const py  = cy + Math.sin(rad) * dist
    return (
      <ellipse
        key={`${angle}-${dist}`}
        cx={px} cy={py}
        rx={rx} ry={ry}
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

function Blossom({ cx, cy, r = 14, color = '#CDB8E0' }) {
  const petals = [0, 72, 144, 216, 288]
  return (
    <g>
      {petals.map(angle => {
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

function Leaf({ x, y, w = 16, h = 38, color = '#6B9E7A', angle = 0 }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${angle})`}>
      <path
        d={`M0,${h} Q-${w},${h * 0.5} 0,0 Q${w},${h * 0.5} 0,${h} Z`}
        fill={color} opacity="0.60"
      />
      <line x1="0" y1={h} x2="0" y2="0" stroke={color} strokeWidth="0.8" opacity="0.35" />
    </g>
  )
}

function SmallLeaf({ x, y, w = 10, h = 24, color = '#85B07A', angle = 0 }) {
  return <Leaf x={x} y={y} w={w} h={h} color={color} angle={angle} />
}

// ─── Composed LEFT arrangement ──────────────────────────────────────────────

export function FlowerGroupLeft({ visible }) {
  return (
    <div className={`flower-decor flower-left${visible ? ' flower-visible' : ''}`}>
      <svg width="170" height="420" viewBox="0 0 170 420" overflow="visible" aria-hidden="true">
        {/* Top peony */}
        <Peony cx={88} cy={62} r={44} color="#F4AABB" />
        <Leaf  x={28}  y={42}  w={14} h={44} color="#6B9E7A"  angle={-38} />
        <Leaf  x={120} y={55}  w={12} h={36} color="#85B07A"  angle={32}  />
        <SmallLeaf x={55} y={98} w={11} h={30} color="#A8C5A0" angle={18} />

        {/* Middle blossom cluster */}
        <Blossom cx={40}  cy={172} r={22} color="#CDB8E0" />
        <Blossom cx={118} cy={192} r={17} color="#B0CCE8" />
        <Leaf    x={62}  y={158} w={13} h={34} color="#6B9E7A" angle={-18} />
        <Leaf    x={88}  y={170} w={11} h={28} color="#85B07A" angle={12}  />

        {/* Small peony */}
        <Peony cx={112} cy={248} r={30} color="#FADADD" />
        <Leaf  x={80}   y={232} w={12} h={32} color="#6B9E7A" angle={-14} />
        <SmallLeaf x={136} y={256} w={9} h={22} color="#A8C5A0" angle={28} />

        {/* Lower section */}
        <Blossom cx={46}  cy={308} r={19} color="#F4AABB" />
        <Leaf    x={68}  y={296} w={14} h={36} color="#85B07A" angle={20}  />
        <Leaf    x={24}  y={318} w={12} h={28} color="#6B9E7A" angle={-42} />

        {/* Bottom peony + accents */}
        <Peony cx={65}  cy={375} r={34} color="#F5C8A0" />
        <Blossom cx={120} cy={390} r={15} color="#CDB8E0" />
        <Leaf    x={95}  y={362} w={12} h={28} color="#6B9E7A" angle={-10} />
        <SmallLeaf x={34} y={378} w={10} h={24} color="#85B07A" angle={35} />
      </svg>
    </div>
  )
}

// ─── Composed RIGHT arrangement ─────────────────────────────────────────────

export function FlowerGroupRight({ visible }) {
  return (
    <div className={`flower-decor flower-right${visible ? ' flower-visible' : ''}`}>
      <svg width="170" height="420" viewBox="0 0 170 420" overflow="visible" aria-hidden="true">
        {/* Top cluster — mixed pinks + lavender */}
        <Peony cx={88}  cy={55} r={40} color="#FADADD" />
        <Blossom cx={35} cy={72} r={20} color="#CDB8E0" />
        <Leaf    x={50}  y={36} w={13} h={42} color="#85B07A" angle={-26} />
        <Leaf    x={118} y={48} w={14} h={36} color="#6B9E7A" angle={34}  />

        {/* Second cluster */}
        <Peony cx={45}  cy={188} r={32} color="#E8829A" />
        <Blossom cx={128} cy={172} r={18} color="#F5C8A0" />
        <Leaf    x={74}  y={166} w={12} h={34} color="#6B9E7A" angle={-20} />
        <Leaf    x={104} y={186} w={13} h={30} color="#A8C5A0" angle={24}  />
        <SmallLeaf x={40} y={212} w={10} h={22} color="#85B07A" angle={-35} />

        {/* Third cluster */}
        <Blossom cx={128} cy={268} r={20} color="#CDB8E0" />
        <Peony   cx={62}  cy={290} r={26} color="#F4AABB" />
        <Leaf    x={90}  y={256} w={14} h={36} color="#85B07A" angle={-14} />
        <Leaf    x={144} y={278} w={10} h={26} color="#6B9E7A" angle={40}  />

        {/* Bottom cluster */}
        <Peony cx={80}  cy={360} r={38} color="#FADADD" />
        <Peony cx={138} cy={390} r={24} color="#F4AABB" />
        <Leaf  x={46}  y={346} w={13} h={32} color="#6B9E7A" angle={-24} />
        <Leaf  x={106} y={358} w={11} h={26} color="#A8C5A0" angle={18}  />
        <SmallLeaf x={142} y={348} w={9} h={20} color="#85B07A" angle={-36} />
      </svg>
    </div>
  )
}
