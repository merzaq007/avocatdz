import { useState } from 'react'

const subjectOptions = {
  fr: ['Droit Pénal','Droit de la Famille','Droit Commercial','Droit Immobilier','Droit Administratif','Autre'],
  ar: ['القانون الجنائي','قانون الأسرة','القانون التجاري','قانون العقارات','القانون الإداري','أخرى'],
  en: ['Criminal Law','Family Law','Business Law','Real Estate Law','Administrative Law','Other'],
}

export default function Contact({ t }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const isAr = t.dir === 'rtl'
  const isEn = !isAr && t.nav.home === 'Home'
  const langKey = isAr ? 'ar' : isEn ? 'en' : 'fr'
  const subjects = subjectOptions[langKey]

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="page-header__bg" />
        <div className="container page-header__content">
          <p className="page-header__tag">{t.contactPage.tag}</p>
          <h1 className="page-header__title">{t.contactPage.title}</h1>
          <p className="page-header__sub">{t.contactPage.sub}</p>
        </div>
      </div>

      <section className="contact-section">
        <div className="container contact-inner">
          {/* Info */}
          <div className="contact-info">
            <h2 className="contact-info__title">{t.contactPage.infoTitle}</h2>
            <div className="gold-line" />
            <div className="contact-cards">
              {[
                ['📍', t.contactPage.address, t.contactPage.addressVal],
                ['📞', t.contactPage.phone, '+213 XX XX XX XX'],
                ['✉️', t.contactPage.email, 'contact@avocat-tiaret.dz'],
                ['🕐', t.contactPage.hours, t.contactPage.hoursVal],
              ].map(([icon, label, val], i) => (
                <div key={i} className="contact-card">
                  <div className="contact-card__icon">{icon}</div>
                  <div>
                    <strong>{label}</strong>
                    <span style={{ whiteSpace: 'pre-line' }}>{val}</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/213XXXXXXXXX" className="whatsapp-btn" target="_blank" rel="noreferrer">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {t.contactPage.whatsapp}
            </a>

            <div className="map-container">
              <iframe
                title="Tiaret Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51840.12345678!2d1.3167!3d35.3706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128d5b5555555555%3A0x0!2sTiaret%2C%20Algeria!5e0!3m2!1sfr!2sdz!4v1234567890"
                width="100%" height="220"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <h2 className="contact-form__title">{t.contactPage.formTitle}</h2>
            <div className="gold-line" />

            {status === 'success' ? (
              <div className="form-success">
                <div className="form-success__icon">✅</div>
                <h3>{t.contactPage.successTitle}</h3>
                <p>{t.contactPage.successSub}</p>
                <button className="btn-primary" onClick={() => setStatus(null)}>{t.contactPage.successBtn}</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>{t.contactPage.name}</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={t.contactPage.namePh} required />
                  </div>
                  <div className="form-group">
                    <label>{t.contactPage.emailL}</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={t.contactPage.emailPh} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>{t.contactPage.phone}</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder={t.contactPage.phonePh} />
                  </div>
                  <div className="form-group">
                    <label>{t.contactPage.subject}</label>
                    <select name="subject" value={form.subject} onChange={handleChange} required>
                      <option value="">{t.contactPage.subjectPh}</option>
                      {subjects.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>{t.contactPage.message}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder={t.contactPage.messagePh} rows={6} required />
                </div>
                <button type="submit" className="btn-primary form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? <><span className="spinner" /> {t.contactPage.sending}</> : t.contactPage.send}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .page-header { position: relative; padding: 160px 0 80px; text-align: center; overflow: hidden; }
        .page-header__bg { position: absolute; inset: 0; background: linear-gradient(135deg,var(--navy) 0%,var(--navy-mid) 100%); }
        .page-header__bg::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 70%); }
        .page-header__content { position: relative; z-index: 1; }
        .page-header__tag { font-size: 0.78rem; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 16px; }
        .page-header__title { font-size: clamp(2.2rem,5vw,3.5rem); color: var(--white); margin-bottom: 16px; }
        .page-header__sub { color: rgba(255,255,255,0.6); font-size: 1.05rem; max-width: 500px; margin: 0 auto; line-height: 1.7; }
        .contact-section { padding: 96px 0; background: var(--off-white); }
        .contact-inner { display: grid; grid-template-columns: 1fr 1.4fr; gap: 64px; align-items: start; }
        .contact-info__title { font-size: 1.6rem; color: var(--navy); margin-bottom: 4px; }
        .contact-cards { display: flex; flex-direction: column; gap: 16px; margin-bottom: 28px; }
        .contact-card { display: flex; align-items: flex-start; gap: 16px; background: var(--white); border-radius: 10px; padding: 18px 20px; border: 1px solid var(--gray-light); transition: all 0.3s; }
        .contact-card:hover { border-color: rgba(201,168,76,0.3); box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        .contact-card__icon { font-size: 1.4rem; flex-shrink: 0; width: 40px; height: 40px; background: rgba(201,168,76,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center; }
        .contact-card div { display: flex; flex-direction: column; gap: 4px; }
        .contact-card strong { font-size: 0.82rem; color: var(--navy); font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }
        .contact-card span, .contact-card a { font-size: 0.9rem; color: var(--gray); line-height: 1.5; text-decoration: none; }
        .contact-card a:hover { color: var(--gold-dark); }
        .whatsapp-btn { display: flex; align-items: center; justify-content: center; gap: 10px; background: #25D366; color: white; padding: 14px 24px; border-radius: 8px; font-weight: 600; font-size: 0.95rem; text-decoration: none; margin-bottom: 24px; transition: all 0.3s; box-shadow: 0 4px 20px rgba(37,211,102,0.3); }
        .whatsapp-btn:hover { background: #1ebe5d; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(37,211,102,0.4); }
        .map-container { border-radius: 10px; overflow: hidden; border: 1px solid var(--gray-light); box-shadow: 0 4px 20px rgba(0,0,0,0.06); }
        .contact-form-wrap { background: var(--white); border-radius: 16px; padding: 48px 40px; border: 1px solid var(--gray-light); box-shadow: 0 8px 40px rgba(0,0,0,0.06); }
        .contact-form__title { font-size: 1.6rem; color: var(--navy); margin-bottom: 4px; }
        .contact-form { display: flex; flex-direction: column; gap: 20px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label { font-size: 0.82rem; font-weight: 600; color: var(--navy); letter-spacing: 0.3px; text-transform: uppercase; }
        .form-group input, .form-group select, .form-group textarea { padding: 12px 16px; border: 1.5px solid var(--gray-light); border-radius: 6px; font-size: 0.92rem; color: var(--text); font-family: 'Inter',sans-serif; background: var(--white); transition: border-color 0.3s, box-shadow 0.3s; outline: none; resize: vertical; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(201,168,76,0.12); }
        .form-submit { width: 100%; justify-content: center; padding: 15px; font-size: 1rem; }
        .form-submit:disabled { opacity: 0.7; cursor: not-allowed; transform: none !important; }
        .spinner { width: 16px; height: 16px; border: 2px solid rgba(10,22,40,0.3); border-top-color: var(--navy); border-radius: 50%; animation: spin 0.7s linear infinite; display: inline-block; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .form-success { text-align: center; padding: 48px 24px; display: flex; flex-direction: column; align-items: center; gap: 16px; }
        .form-success__icon { font-size: 3.5rem; }
        .form-success h3 { font-size: 1.5rem; color: var(--navy); }
        .form-success p { color: var(--gray); font-size: 0.95rem; }
        @media (max-width: 1024px) { .contact-inner { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .form-row { grid-template-columns: 1fr; } .contact-form-wrap { padding: 32px 24px; } }
      `}</style>
    </div>
  )
}
