import { useState, useEffect } from 'react'

const services = [
  { icon: '⚖️', title: 'Droit Pénal', desc: '...' },
  { icon: '👨‍👩‍👧', title: 'Droit de la Famille', desc: '...' },
  { icon: '🏢', title: 'Droit Commercial', desc: '...' },
  { icon: '🏠', title: 'Droit Immobilier', desc: '...' },
  { icon: '📋', title: 'Droit Administratif', desc: '...' },
  { icon: '📜', title: 'Droit Civil', desc: '...' },
]

const stats = [
  { value: '---', label: '---' },
  { value: '---', label: '---' },
  { value: '---', label: '---' },
  { value: '---', label: '---' },
]

const testimonials = [
  { name: '---', role: '---', text: '---', stars: 5 },
  { name: '---', role: '---', text: '---', stars: 5 },
  { name: '---', role: '---', text: '---', stars: 5 },
]

export default function Home({ setPage }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setVisible(true) }, [])

  return (
    <div className="page-enter">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__overlay" />
          <div className="hero__pattern" />
        </div>
        <div className="container hero__content">
          <div className={`hero__badge ${visible ? 'animate-fadeIn' : ''}`}>
            <span>⚖</span> Cabinet Juridique — Tiaret, Algérie
          </div>
          <h1 className={`hero__title ${visible ? 'animate-fadeInUp delay-1' : ''}`}>
            Avocat à <span className="hero__title-gold">Tiaret</span>
          </h1>
          <p className={`hero__subtitle ${visible ? 'animate-fadeInUp delay-2' : ''}`}>
            Expertise juridique et défense de vos droits
          </p>
          <p className={`hero__desc ${visible ? 'animate-fadeInUp delay-3' : ''}`}>
            [ وصف قصير للمكتب ]
          </p>
          <div className={`hero__actions ${visible ? 'animate-fadeInUp delay-4' : ''}`}>
            <button className="btn-primary" onClick={() => setPage('contact')}>
              📅 Prendre rendez-vous
            </button>
            <button className="btn-outline" onClick={() => setPage('services')}>
              Nos services →
            </button>
          </div>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-dot" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats">
        <div className="container stats__grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card animate-fadeInUp" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="stat-card__value">{s.value}</div>
              <div className="stat-card__label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Nos Domaines</p>
            <h2 className="section-title">Services Juridiques</h2>
            <div className="gold-line" />
            <p className="section-subtitle">[ وصف قسم الخدمات ]</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={i} className="service-card">
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <button className="service-card__link" onClick={() => setPage('services')}>
                  En savoir plus →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section why-section">
        <div className="container why-inner">
          <div className="why-text">
            <p className="section-tag">Pourquoi nous choisir</p>
            <h2 className="section-title">[ عنوان القسم ]</h2>
            <div className="gold-line" />
            <div className="why-list">
              {[
                ['🎓', '[ ميزة 1 ]', '[ وصف ]'],
                ['🤝', '[ ميزة 2 ]', '[ وصف ]'],
                ['🔒', '[ ميزة 3 ]', '[ وصف ]'],
                ['💡', '[ ميزة 4 ]', '[ وصف ]'],
              ].map(([icon, title, desc], i) => (
                <div key={i} className="why-item">
                  <div className="why-item__icon">{icon}</div>
                  <div>
                    <h4 className="why-item__title">{title}</h4>
                    <p className="why-item__desc">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="btn-primary" onClick={() => setPage('about')}>
              En savoir plus sur nous
            </button>
          </div>
          <div className="why-visual">
            <div className="why-card-main">
              <div className="why-card-main__icon">⚖️</div>
              <h3>Cabinet Avocat Tiaret</h3>
              <p>Justice • Intégrité • Excellence</p>
              <div className="why-card-main__divider" />
              <div className="why-card-main__badges">
                <span>Barreau de Tiaret</span>
                <span>Algérie</span>
              </div>
            </div>
            <div className="why-card-float why-card-float--1">
              <span>✅</span> [ ميزة عائمة 1 ]
            </div>
            <div className="why-card-float why-card-float--2">
              <span>⭐</span> [ ميزة عائمة 2 ]
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Témoignages</p>
            <h2 className="section-title">Ce que disent nos clients</h2>
            <div className="gold-line" />
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-card__stars">{'★'.repeat(t.stars)}</div>
                <p className="testimonial-card__text">"{t.text}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <div>
            <h2 className="cta-banner__title">Besoin d'un conseil juridique ?</h2>
            <p className="cta-banner__sub">[ وصف قصير ]</p>
          </div>
          <div className="cta-banner__actions">
            <button className="btn-primary" onClick={() => setPage('contact')}>
              📅 Prendre rendez-vous
            </button>
            <a href="https://wa.me/213XXXXXXXXX" className="btn-outline" target="_blank" rel="noreferrer">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero__bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #060e1c 0%, #0a1628 40%, #112240 70%, #1a3a5c 100%);
        }
        .hero__overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 60%);
        }
        .hero__pattern {
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            0deg, transparent, transparent 60px,
            rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px
          ),
          repeating-linear-gradient(
            90deg, transparent, transparent 60px,
            rgba(255,255,255,0.015) 60px, rgba(255,255,255,0.015) 61px
          );
        }
        .hero__content {
          position: relative;
          z-index: 1;
          padding-top: 120px;
          padding-bottom: 80px;
          max-width: 720px;
        }
        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(201,168,76,0.12);
          border: 1px solid rgba(201,168,76,0.3);
          color: var(--gold-light);
          padding: 8px 18px;
          border-radius: 50px;
          font-size: 0.82rem;
          letter-spacing: 0.5px;
          margin-bottom: 28px;
          opacity: 0;
        }
        .hero__title {
          font-size: clamp(2.8rem, 6vw, 5rem);
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 16px;
          opacity: 0;
        }
        .hero__title-gold { color: var(--gold); display: block; }
        .hero__subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: rgba(255,255,255,0.7);
          font-style: italic;
          margin-bottom: 20px;
          opacity: 0;
        }
        .hero__desc {
          font-size: 1rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.7;
          max-width: 500px;
          margin-bottom: 40px;
          opacity: 0;
        }
        .hero__actions { display: flex; gap: 16px; flex-wrap: wrap; opacity: 0; }
        .hero__scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
        }
        .hero__scroll-dot {
          width: 6px;
          height: 6px;
          background: var(--gold);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }
        .stats { background: var(--navy); padding: 48px 0; }
        .stats__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.08);
          border-radius: 8px;
          overflow: hidden;
        }
        .stat-card {
          background: var(--navy-light);
          padding: 32px 24px;
          text-align: center;
          opacity: 0;
          transition: background 0.3s;
        }
        .stat-card:hover { background: var(--navy-mid); }
        .stat-card__value {
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          font-weight: 700;
          color: var(--gold);
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-card__label { font-size: 0.85rem; color: rgba(255,255,255,0.55); }
        .section { padding: 96px 0; }
        .section-header { text-align: center; margin-bottom: 56px; }
        .section-header .gold-line { margin: 16px auto 24px; }
        .section-tag {
          font-size: 0.78rem;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 600;
          margin-bottom: 12px;
        }
        .services-section { background: var(--off-white); }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .service-card {
          background: var(--white);
          border-radius: 8px;
          padding: 36px 28px;
          border: 1px solid var(--gray-light);
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold), var(--gold-light));
          transform: scaleX(0);
          transition: transform 0.35s ease;
        }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.1); border-color: transparent; }
        .service-card:hover::before { transform: scaleX(1); }
        .service-card__icon { font-size: 2.2rem; margin-bottom: 20px; display: block; }
        .service-card__title { font-size: 1.15rem; color: var(--navy); margin-bottom: 12px; font-weight: 600; }
        .service-card__desc { font-size: 0.9rem; color: var(--gray); line-height: 1.7; margin-bottom: 20px; }
        .service-card__link { background: none; border: none; color: var(--gold-dark); font-size: 0.88rem; font-weight: 600; cursor: pointer; padding: 0; }
        .service-card__link:hover { color: var(--gold); }
        .why-section { background: var(--white); }
        .why-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .why-list { display: flex; flex-direction: column; gap: 24px; margin-bottom: 36px; }
        .why-item { display: flex; gap: 16px; align-items: flex-start; }
        .why-item__icon {
          font-size: 1.5rem; flex-shrink: 0;
          width: 44px; height: 44px;
          background: rgba(201,168,76,0.1);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
        }
        .why-item__title { font-size: 1rem; color: var(--navy); margin-bottom: 4px; font-family: 'Inter', sans-serif; font-weight: 600; }
        .why-item__desc { font-size: 0.88rem; color: var(--gray); line-height: 1.6; }
        .why-visual { position: relative; height: 420px; }
        .why-card-main {
          position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
          background: linear-gradient(135deg, var(--navy), var(--navy-mid));
          border-radius: 16px; padding: 48px 40px; text-align: center;
          color: var(--white); width: 280px;
          box-shadow: 0 30px 80px rgba(10,22,40,0.3);
          border: 1px solid rgba(201,168,76,0.2);
        }
        .why-card-main__icon { font-size: 3rem; margin-bottom: 16px; }
        .why-card-main h3 { font-size: 1.1rem; color: var(--white); margin-bottom: 8px; }
        .why-card-main p { font-size: 0.8rem; color: var(--gold); letter-spacing: 1px; }
        .why-card-main__divider { width: 40px; height: 2px; background: var(--gold); margin: 20px auto; border-radius: 1px; }
        .why-card-main__badges { display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; }
        .why-card-main__badges span {
          background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.3);
          color: var(--gold-light); padding: 4px 12px; border-radius: 50px; font-size: 0.75rem;
        }
        .why-card-float {
          position: absolute; background: var(--white); border-radius: 10px;
          padding: 12px 18px; font-size: 0.82rem; font-weight: 600; color: var(--navy);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          display: flex; align-items: center; gap: 8px;
          border: 1px solid var(--gray-light);
        }
        .why-card-float--1 { top: 40px; left: 0; animation: pulse 3s infinite; }
        .why-card-float--2 { bottom: 40px; right: 0; animation: pulse 3s infinite 1.5s; }
        .testimonials-section { background: var(--off-white); }
        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .testimonial-card {
          background: var(--white); border-radius: 10px; padding: 32px 28px;
          border: 1px solid var(--gray-light); transition: all 0.3s;
        }
        .testimonial-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.08); }
        .testimonial-card__stars { color: var(--gold); font-size: 1.1rem; letter-spacing: 2px; margin-bottom: 16px; }
        .testimonial-card__text { font-size: 0.92rem; color: var(--gray); line-height: 1.75; margin-bottom: 24px; font-style: italic; }
        .testimonial-card__author { display: flex; align-items: center; gap: 12px; }
        .testimonial-card__avatar {
          width: 42px; height: 42px;
          background: linear-gradient(135deg, var(--navy), var(--navy-mid));
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          color: var(--gold); font-weight: 700; font-size: 1rem; flex-shrink: 0;
        }
        .testimonial-card__name { font-weight: 600; font-size: 0.9rem; color: var(--navy); }
        .testimonial-card__role { font-size: 0.78rem; color: var(--gray); }
        .cta-banner {
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%);
          padding: 72px 0; position: relative; overflow: hidden;
        }
        .cta-banner::before {
          content: '⚖'; position: absolute; right: 5%; top: 50%;
          transform: translateY(-50%); font-size: 12rem; opacity: 0.04; pointer-events: none;
        }
        .cta-banner__inner { display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap; }
        .cta-banner__title { font-size: 2rem; color: var(--white); margin-bottom: 8px; }
        .cta-banner__sub { color: rgba(255,255,255,0.6); font-size: 0.95rem; }
        .cta-banner__actions { display: flex; gap: 16px; flex-wrap: wrap; }
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .why-inner { grid-template-columns: 1fr; gap: 48px; }
          .why-visual { height: 300px; }
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .stats__grid { grid-template-columns: repeat(2, 1fr); }
          .services-grid { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .cta-banner__inner { flex-direction: column; text-align: center; }
          .cta-banner__actions { justify-content: center; }
          .section { padding: 64px 0; }
        }
      `}</style>
    </div>
  )
}
