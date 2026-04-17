import { useState, useEffect } from 'react'

const ScalesIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3v18M5 21h14M3 9l4-6 4 6M13 9l4-6 4 6"/>
    <path d="M3 9h8M13 9h8"/>
    <path d="M3 9c0 2.2 1.8 4 4 4s4-1.8 4-4M13 9c0 2.2 1.8 4 4 4s4-1.8 4-4"/>
  </svg>
)

const langOptions = [
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'ar', label: 'AR', flag: '🇩🇿' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
]

export default function Navbar({ currentPage, setPage, lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = (id) => {
    setPage(id)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ]

  const currentLang = langOptions.find(l => l.code === lang)

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <button className="navbar__logo" onClick={() => navigate('home')}>
          <span className="navbar__logo-icon"><ScalesIcon /></span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-main">Avocat</span>
            <span className="navbar__logo-sub">Tiaret</span>
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={`navbar__link ${currentPage === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => navigate(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="navbar__right">
          {/* Language Switcher */}
          <div className="lang-switcher">
            <button className="lang-switcher__btn" onClick={() => setLangOpen(!langOpen)}>
              <span>{currentLang.flag}</span>
              <span>{currentLang.label}</span>
              <span className="lang-switcher__arrow">▾</span>
            </button>
            {langOpen && (
              <div className="lang-switcher__dropdown">
                {langOptions.map(l => (
                  <button
                    key={l.code}
                    className={`lang-switcher__option ${lang === l.code ? 'active' : ''}`}
                    onClick={() => { setLang(l.code); setLangOpen(false) }}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <button className="btn-primary navbar__cta" onClick={() => navigate('contact')}>
            {t.nav.cta}
          </button>
        </div>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <button
            key={link.id}
            className={`navbar__mobile-link ${currentPage === link.id ? 'active' : ''}`}
            onClick={() => navigate(link.id)}
          >
            {link.label}
          </button>
        ))}
        {/* Mobile Lang */}
        <div className="navbar__mobile-langs">
          {langOptions.map(l => (
            <button
              key={l.code}
              className={`mobile-lang-btn ${lang === l.code ? 'active' : ''}`}
              onClick={() => { setLang(l.code); setMenuOpen(false) }}
            >
              {l.flag} {l.label}
            </button>
          ))}
        </div>
        <button className="btn-primary" style={{margin:'16px 24px'}} onClick={() => navigate('contact')}>
          {t.nav.cta}
        </button>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.4s ease;
          background: transparent;
        }
        .navbar--scrolled {
          background: rgba(10, 22, 40, 0.97);
          backdrop-filter: blur(12px);
          padding: 12px 0;
          box-shadow: 0 4px 30px rgba(0,0,0,0.3);
        }
        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--white);
          flex-shrink: 0;
        }
        .navbar__logo-icon { color: var(--gold); display: flex; }
        .navbar__logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          text-align: start;
        }
        .navbar__logo-main {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: 1px;
        }
        .navbar__logo-sub {
          font-size: 0.65rem;
          color: var(--gold);
          letter-spacing: 3px;
          text-transform: uppercase;
          font-weight: 500;
        }
        .navbar__links {
          display: flex;
          list-style: none;
          gap: 4px;
          flex: 1;
          justify-content: center;
        }
        .navbar__link {
          background: none;
          border: none;
          color: rgba(255,255,255,0.8);
          font-size: 0.88rem;
          font-weight: 500;
          padding: 8px 14px;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.3s;
          position: relative;
          font-family: 'Inter', sans-serif;
        }
        .navbar__link::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 50%; right: 50%;
          height: 2px;
          background: var(--gold);
          transition: all 0.3s;
          border-radius: 1px;
        }
        .navbar__link:hover::after,
        .navbar__link--active::after { left: 14px; right: 14px; }
        .navbar__link:hover, .navbar__link--active { color: var(--white); }

        .navbar__right {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        /* Lang Switcher */
        .lang-switcher { position: relative; }
        .lang-switcher__btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.85);
          padding: 7px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 0.3s;
          font-family: 'Inter', sans-serif;
        }
        .lang-switcher__btn:hover {
          background: rgba(201,168,76,0.15);
          border-color: rgba(201,168,76,0.4);
          color: var(--gold-light);
        }
        .lang-switcher__arrow { font-size: 0.65rem; opacity: 0.7; }
        .lang-switcher__dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          background: var(--navy);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          overflow: hidden;
          min-width: 110px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
          z-index: 100;
        }
        .lang-switcher__option {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          padding: 10px 14px;
          background: none;
          border: none;
          color: rgba(255,255,255,0.7);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
        }
        .lang-switcher__option:hover { background: rgba(255,255,255,0.06); color: var(--white); }
        .lang-switcher__option.active { color: var(--gold); background: rgba(201,168,76,0.08); }

        .navbar__cta { padding: 9px 18px; font-size: 0.82rem; }

        /* Hamburger */
        .navbar__hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .navbar__hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--white);
          border-radius: 2px;
          transition: all 0.3s;
        }
        .navbar__hamburger span.open:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .navbar__hamburger span.open:nth-child(2) { opacity: 0; }
        .navbar__hamburger span.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        /* Mobile Menu */
        .navbar__mobile {
          display: none;
          flex-direction: column;
          background: var(--navy);
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }
        .navbar__mobile--open { max-height: 500px; }
        .navbar__mobile-link {
          background: none;
          border: none;
          color: rgba(255,255,255,0.8);
          font-size: 1rem;
          padding: 16px 24px;
          text-align: start;
          cursor: pointer;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .navbar__mobile-link:hover, .navbar__mobile-link.active {
          color: var(--gold);
          background: rgba(201,168,76,0.05);
        }
        .navbar__mobile-langs {
          display: flex;
          gap: 8px;
          padding: 12px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .mobile-lang-btn {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.7);
          padding: 6px 14px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 0.2s;
          font-family: 'Inter', sans-serif;
        }
        .mobile-lang-btn.active {
          background: rgba(201,168,76,0.15);
          border-color: rgba(201,168,76,0.4);
          color: var(--gold-light);
        }

        @media (max-width: 900px) {
          .navbar__links, .navbar__right { display: none; }
          .navbar__hamburger { display: flex; }
          .navbar__mobile { display: flex; }
        }
      `}</style>
    </nav>
  )
}
