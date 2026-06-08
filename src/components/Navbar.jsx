const PAGES = ['about', 'projects', 'contact']

export default function InfoPanel({ current, goTo, navLabels }) {
  return (
    <div className="info-panel">
      <div>
        <div className="ip-tag">Portfolio · 2026</div>
        <div className="ip-name">Evie<br /><em>Portfolio.</em></div>
        <div className="ip-role">CS Student &amp; Developer</div>
        <hr className="ip-divider" />
        <div className="nav-strip">
          {PAGES.map((page, i) => (
            <button
              key={page}
              className={`nav-btn${current === page ? ' active' : ''}`}
              onClick={() => goTo(page)}
            >
              <span className="nav-btn-num">0{i + 1}</span>
              {navLabels[page]}
            </button>
          ))}
        </div>
      </div>
      <div>
        <div className="ip-note">always learning, always building ✦</div>
        <div className="ip-footer">evie — portfolio</div>
      </div>
    </div>
  )
}
