const services = [
  {
    icon: '⚖️',
    title: 'Droit Pénal',
    desc: '[ وصف خدمة الدroit Pénal ]',
    items: ['[ بند 1 ]', '[ بند 2 ]', '[ بند 3 ]', '[ بند 4 ]', '[ بند 5 ]'],
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Droit de la Famille',
    desc: '[ وصف خدمة Droit de la Famille ]',
    items: ['[ بند 1 ]', '[ بند 2 ]', '[ بند 3 ]', '[ بند 4 ]', '[ بند 5 ]'],
  },
  {
    icon: '🏢',
    title: 'Droit Commercial',
    desc: '[ وصف خدمة Droit Commercial ]',
    items: ['[ بند 1 ]', '[ بند 2 ]', '[ بند 3 ]', '[ بند 4 ]', '[ بند 5 ]'],
  },
  {
    icon: '🏠',
    title: 'Droit Immobilier',
    desc: '[ وصف خدمة Droit Immobilier ]',
    items: ['[ بند 1 ]', '[ بند 2 ]', '[ بند 3 ]', '[ بند 4 ]', '[ بند 5 ]'],
  },
  {
    icon: '📋',
    title: 'Droit Administratif',
    desc: '[ وصف خدمة Droit Administratif ]',
    items: ['[ بند 1 ]', '[ بند 2 ]', '[ بند 3 ]', '[ بند 4 ]', '[ بند 5 ]'],
  },
  {
    icon: '📜',
    title: 'Droit Civil',
    desc: '[ وصف خدمة Droit Civil ]',
    items: ['[ بند 1 ]', '[ بند 2 ]', '[ بند 3 ]', '[ بند 4 ]', '[ بند 5 ]'],
  },
]

export default function Services() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="page-header__bg" />
        <div className="container page-header__content">
          <p className="page-header__tag">Notre expertise</p>
          <h1 className="page-header__title">Services Juridiques</h1>
          <p className="page-header__sub">[ وصف قسم الخدمات ]</p>
        </div>
      </div>

      <section className="services-page">
        <div className="container">
          {services.map((s, i) => (
            <div key={i} className={`service-row ${i % 2 === 1 ? 'service-row--reverse' : ''}`}>
              <div className="service-row__visual">
                <div className="service-row__icon-wrap">
                  <span className="service-row__icon">{s.icon}</span>
                </div>
                <div className="service-row__number">0{i + 1}</div>
              </div>
              <div className="service-row__content">
                <h2 className="service-row__title">{s.title}</h2>
                <div className="gold-line" />
                <p className="service-row__desc">{s.desc}</p>
                <ul className="service-row__list">
                  {s.items.map((item, j) => (
                    <li key={j} className="service-row__list-item">
                      <span className="service-row__check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .page-header {
          position: relative; padding: 160px 0 80px; text-align: center; overflow: hidden;
        }
        .page-header__bg {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%);
        }
        .page-header__bg::after {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%);
        }
        .page-header__content { position: relative; z-index: 1; }
        .page-header__tag { font-size: 0.78rem; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 16px; }
        .page-header__title { font-size: clamp(2.2rem, 5vw, 3.5rem); color: var(--white); margin-bottom: 16px; }
        .page-header__sub { color: rgba(255,255,255,0.6); font-size: 1.05rem; max-width: 500px; margin: 0 auto; line-height: 1.7; }
        .services-page { padding: 96px 0; background: var(--off-white); }
        .service-row {
          display: grid; grid-template-columns: 280px 1fr; gap: 64px;
          align-items: center; padding: 56px 0; border-bottom: 1px solid var(--gray-light);
        }
        .service-row:last-child { border-bottom: none; }
        .service-row--reverse { grid-template-columns: 1fr 280px; }
        .service-row--reverse .service-row__visual { order: 2; }
        .service-row--reverse .service-row__content { order: 1; }
        .service-row__visual { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 16px; position: relative; }
        .service-row__icon-wrap {
          width: 120px; height: 120px;
          background: linear-gradient(135deg, var(--navy), var(--navy-mid));
          border-radius: 24px; display: flex; align-items: center; justify-content: center;
          box-shadow: 0 20px 50px rgba(10,22,40,0.2);
          border: 1px solid rgba(201,168,76,0.2); transition: transform 0.3s;
        }
        .service-row__icon-wrap:hover { transform: scale(1.05) rotate(3deg); }
        .service-row__icon { font-size: 3rem; }
        .service-row__number {
          font-family: 'Playfair Display', serif; font-size: 4rem; font-weight: 700;
          color: rgba(10,22,40,0.06); line-height: 1; position: absolute; bottom: -20px; right: 0;
        }
        .service-row__title { font-size: 1.8rem; color: var(--navy); margin-bottom: 4px; }
        .service-row__desc { color: var(--gray); line-height: 1.75; margin-bottom: 28px; font-size: 0.95rem; }
        .service-row__list { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .service-row__list-item { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: var(--text); }
        .service-row__check {
          width: 20px; height: 20px; background: rgba(201,168,76,0.15); border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: var(--gold-dark); font-size: 0.7rem; font-weight: 700; flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .service-row, .service-row--reverse { grid-template-columns: 1fr; gap: 32px; }
          .service-row--reverse .service-row__visual { order: 0; }
          .service-row--reverse .service-row__content { order: 0; }
          .service-row__list { grid-template-columns: 1fr; }
          .service-row__number { display: none; }
        }
      `}</style>
    </div>
  )
}
