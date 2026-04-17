const ScalesIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 3v18M5 21h14M3 9l4-6 4 6M13 9l4-6 4 6"/>
    <path d="M3 9h8M13 9h8"/>
    <path d="M3 9c0 2.2 1.8 4 4 4s4-1.8 4-4M13 9c0 2.2 1.8 4 4 4s4-1.8 4-4"/>
  </svg>
)

export default function Footer({ setPage, t }) {
  const year = new Date().getFullYear()
  const navigate = (id) => { setPage(id); window.scrollTo({ top: 0, behavior: 'smooth' }) }

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ]

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          <div className="footer__brand">
            <button className="footer__logo" onClick={() => navigate('home')}>
              <span className="footer__logo-icon"><ScalesIcon /></span>
              <span className="footer__logo-text">
                <span>Avocat</span><span>Tiaret</span>
              </span>
            </button>
            <p className="footer__tagline">{t.footer.tagline}</p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="https://wa.me/213XXXXXXXXX" aria-label="WhatsApp" className="footer__social" target="_blank" rel="noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">{t.footer.nav}</h4>
            <ul className="footer__links">
              {navLinks.map(({ id, label }) => (
                <li key={id}><button onClick={() => navigate(id)} className="footer__link">{label}</button></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">{t.footer.services}</h4>
            <ul className="footer__links">
              {t.services.map(s => (
                <li key={s.title}><button onClick={() => navigate('services')} className="footer__link">{s.title}</button></li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">{t.footer.contact}</h4>
            <ul className="footer__contact-list">
              <li><span>📍</span><span>{t.contactPage.addressVal}</span></li>
              <li><span>📞</span><a href="tel:+213XXXXXXXXX">+213 XX XX XX XX</a></li>
              <li><span>✉️</span><a href="mailto:contact@avocat-tiaret.dz">contact@avocat-tiaret.dz</a></li>
              <li><span>🕐</span><span>{t.contactPage.hoursVal}</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Avocat Tiaret. {t.footer.rights}</p>
          <p>{t.footer.dev} <a href="#" className="footer__dev-link">Billionaire2025</a></p>
        </div>
      </div>

      {/* WhatsApp Float */}
      <a href="https://wa.me/213XXXXXXXXX" className="whatsapp-float" target="_blank" rel="noreferrer" aria-label="WhatsApp">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <style>{`
        .footer { background: #060e1c; color: rgba(255,255,255,0.6); position: relative; }
        .footer__top { padding: 72px 0 48px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .footer__grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1.4fr; gap: 48px; }
        .footer__logo { display: flex; align-items: center; gap: 10px; background: none; border: none; cursor: pointer; margin-bottom: 16px; }
        .footer__logo-icon { color: var(--gold); display: flex; }
        .footer__logo-text { display: flex; flex-direction: column; line-height: 1; }
        .footer__logo-text span:first-child { font-family: 'Playfair Display',serif; font-size: 1.1rem; font-weight: 700; color: var(--white); letter-spacing: 1px; }
        .footer__logo-text span:last-child { font-size: 0.6rem; color: var(--gold); letter-spacing: 3px; text-transform: uppercase; }
        .footer__tagline { font-size: 0.88rem; line-height: 1.7; margin-bottom: 24px; max-width: 260px; }
        .footer__socials { display: flex; gap: 10px; }
        .footer__social { width: 36px; height: 36px; background: rgba(255,255,255,0.06); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.6); text-decoration: none; transition: all 0.3s; border: 1px solid rgba(255,255,255,0.08); }
        .footer__social:hover { background: rgba(201,168,76,0.15); color: var(--gold); border-color: rgba(201,168,76,0.3); }
        .footer__col-title { font-size: 0.78rem; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 20px; font-family: 'Inter',sans-serif; }
        .footer__links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer__link { background: none; border: none; color: rgba(255,255,255,0.55); font-size: 0.88rem; cursor: pointer; padding: 0; text-align: start; transition: color 0.2s; font-family: 'Inter',sans-serif; }
        .footer__link:hover { color: var(--gold-light); }
        .footer__contact-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .footer__contact-list li { display: flex; gap: 10px; font-size: 0.85rem; line-height: 1.5; }
        .footer__contact-list a { color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
        .footer__contact-list a:hover { color: var(--gold-light); }
        .footer__bottom { padding: 20px 0; }
        .footer__bottom-inner { display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem; flex-wrap: wrap; gap: 8px; }
        .footer__dev-link { color: var(--gold); text-decoration: none; font-weight: 600; }
        .footer__dev-link:hover { color: var(--gold-light); }
        .whatsapp-float { position: fixed; bottom: 28px; right: 28px; width: 56px; height: 56px; background: #25D366; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; box-shadow: 0 6px 24px rgba(37,211,102,0.4); z-index: 999; transition: all 0.3s; text-decoration: none; }
        .whatsapp-float:hover { transform: scale(1.1); box-shadow: 0 10px 32px rgba(37,211,102,0.5); }
        @media (max-width: 1024px) { .footer__grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) { .footer__grid { grid-template-columns: 1fr; gap: 32px; } .footer__bottom-inner { flex-direction: column; text-align: center; } }
      `}</style>
    </footer>
  )
}
