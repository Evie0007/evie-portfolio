const TONES   = ['#D8D0C1', '#E3DCCE', '#EDE7DA']
const OFFSETS = [18, 11, 5]
const ROTATES = [1.4, -0.9, 0.5]

export default function Layers() {
  return (
    <div className="layers">
      {TONES.map((bg, i) => (
        <div
          key={i}
          style={{
            position:        'absolute',
            inset:           0,
            background:      bg,
            borderRadius:    '3px',
            transform:       `translateY(${OFFSETS[i]}px) rotate(${ROTATES[i]}deg)`,
            transformOrigin: 'center bottom',
            zIndex:          i + 1,
            boxShadow:       '0 2px 6px rgba(42,51,64,0.09)',
          }}
        />
      ))}
    </div>
  )
}
