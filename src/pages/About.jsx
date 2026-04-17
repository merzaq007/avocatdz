const values = [
  { icon: '⚖️', title: '[ قيمة 1 ]', desc: '[ وصف ]' },
  { icon: '🔒', title: '[ قيمة 2 ]', desc: '[ وصف ]' },
  { icon: '🎯', title: '[ قيمة 3 ]', desc: '[ وصف ]' },
  { icon: '🤝', title: '[ قيمة 4 ]', desc: '[ وصف ]' },
]

const timeline = [
  { year: '----', title: '[ حدث 1 ]', desc: '[ وصف ]' },
  { year: '----', title: '[ حدث 2 ]', desc: '[ وصف ]' },
  { year: '----', title: '[ حدث 3 ]', desc: '[ وصف ]' },
  { year: '----', title: '[ حدث 4 ]', desc: '[ وصف ]' },
  { year: '----', title: '[ حدث 5 ]', desc: '[ وصف ]' },
]

export default function About() {
  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="page-header__bg" />
        <div className="container page-header__content">
          <p className="page-header__tag">Notre histoire</p>
          <h1 className="page-header__title">À Propos du Cabinet</h1>
          <p className="page-header__sub">[ وصف قصير للمكتب ]</p>
        </div>
      </div>

      {/* Profile */}
      <section className="about-profile">
        <div className="container about-profile__inner">
          <div className="about-profile__card">
            <div className="about-profile__avatar"><span>⚖️</span></div>
            <div className="about-profile__badge">Maître</div>
            <h2 className="about-profile__name">[ اسم المحامي ]</h2>
            <p className="about-profile__title">Avocat au Barreau de Tiaret</p>
            <div className="about-profile__divider" />
            <div className="about-profile__stats">
              <div><strong>---</strong><span>[ إحصاء 1 ]</span></div>
              <div><strong>---</strong><span>[ إحصاء 2 ]</span></div>
              <div><strong>---</strong><span>[ إحصاء 3 ]</span></div>
            </div>
          </div>
          <div className="about-profile__text">
            <p className="section-tag">Présentation</p>
            <h2 className="section-title">[ عنوان التقديم ]</h2>
            <div className="gold-line" />
            <p className="about-p">[ فقرة 1 عن المحامي ]</p>
            <p className="about-p">[ فقرة 2 عن المحامي ]</p>
            <p className="about-p">[ فقرة 3 عن المحامي ]</p>
            <div className="about-profile__quals">
              <div className="qual-item">
                <span className="qual-icon">🎓</span>
                <div>
                  <strong>[ شهادة 1 ]</strong>
                  <span>[ المؤسسة ]</span>
                </div>
              </div>
              <div className="qual-item">
                <span className="qual-icon">📜</span>
                <div>
                  <strong>[ شهادة 2 ]</strong>
                  <span>[ المؤسسة ]</span>
                </div>
              </div>
              <div className="qual-item">
                <span className="qual-icon">⚖️</span>
                <div>
                  <strong>[ عضوية ]</strong>
                  <span>[ التفاصيل ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Parcours</p>
            <h2 className="section-title">Notre Histoire</h2>
            <div className="gold-line" style={{ margin: '16px auto 0' }} />
          </div>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}>
                <div className="timeline-item__content">
                  <div className="timeline-item__year">{t.year}</div>
                  <h3 className="timeline-item__title">{t.title}</h3>
                  <p className="timeline-item__desc">{t.desc}</p>
                </div>
                <div className="timeline-item__dot" />
              </div>
            ))}
            <div className="timeline__line" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">Ce qui nous guide</p>
            <h2 className="section-title">Nos Valeurs</h2>
            <div className="gold-line" style={{ margin: '16px auto 24px' }} />
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon">{v.icon}</div>
                <h3 className="value-card__title">{v.title}</h3>
                <p className="value-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .page-header { position: relative; padding: 160px 0 80px; text-align: center; overflow: hidden; }
        .page-header__bg { position: absolute; inset: 0; background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%); }
        .page-header__bg::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%); }
        .page-header__content { position: relative; z-index: 1; }
        .page-header__tag { font-size: 0.78rem; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 16px; }
        .page-header__title { font-size: clamp(2.2rem, 5vw, 3.5rem); color: var(--white); margin-bottom: 16px; }
        .page-header__sub { color: rgba(255,255,255,0.6); font-size: 1.05rem; max-width: 500px; margin: 0 auto; line-height: 1.7; }
        .about-profile { padding: 96px 0; background: var(--white); }
        .about-profile__inner { display: grid; grid-template-columns: 320px 1fr; gap: 72px; align-items: start; }
        .about-profile__card {
          background: linear-gradient(135deg, var(--navy), var(--navy-mid));
          border-radius: 16px; padding: 48px 32px; text-align: center; color: var(--white);
          border: 1px solid rgba(201,168,76,0.2); position: sticky; top: 100px;
        }
        .about-profile__avatar {
          width: 100px; height: 100px; background: rgba(201,168,76,0.15); border-radius: 50%;
          display: flex; align-items: center; justify-content: center; font-size: 2.8rem;
          margin: 0 auto 16px; border: 2px solid rgba(201,168,76,0.3);
        }
        .about-profile__badge {
          display: inline-block; background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.3);
          color: var(--gold-light); padding: 4px 16px; border-radius: 50px; font-size: 0.75rem; letter-spacing: 1px; margin-bottom: 12px;
        }
        .about-profile__name { font-size: 1.3rem; color: var(--white); margin-bottom: 6px; }
        .about-profile__title { font-size: 0.82rem; color: var(--gold); letter-spacing: 0.5px; }
        .about-profile__divider { width: 40px; height: 2px; background: var(--gold); margin: 20px auto; border-radius: 1px; }
        .about-profile__stats { display: flex; justify-content: space-around; }
        .about-profile__stats div { display: flex; flex-direction: column; gap: 4px; }
        .about-profile__stats strong { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--gold); }
        .about-profile__stats span { font-size: 0.72rem; color: rgba(255,255,255,0.5); letter-spacing: 0.5px; }
        .about-p { color: var(--gray); line-height: 1.8; margin-bottom: 16px; font-size: 0.95rem; }
        .about-profile__quals { margin-top: 32px; display: flex; flex-direction: column; gap: 16px; }
        .qual-item { display: flex; align-items: center; gap: 14px; padding: 14px 18px; background: var(--off-white); border-radius: 8px; border-left: 3px solid var(--gold); }
        .qual-icon { font-size: 1.3rem; }
        .qual-item div { display: flex; flex-direction: column; gap: 2px; }
        .qual-item strong { font-size: 0.88rem; color: var(--navy); font-weight: 600; }
        .qual-item span { font-size: 0.78rem; color: var(--gray); }
        .timeline-section { padding: 96px 0; background: var(--off-white); }
        .section-header { text-align: center; margin-bottom: 56px; }
        .section-tag { font-size: 0.78rem; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 12px; }
        .timeline { position: relative; max-width: 800px; margin: 56px auto 0; }
        .timeline__line { position: absolute; left: 50%; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, var(--gold), rgba(201,168,76,0.1)); transform: translateX(-50%); }
        .timeline-item { display: flex; justify-content: flex-end; padding-right: calc(50% + 32px); margin-bottom: 40px; position: relative; }
        .timeline-item--right { justify-content: flex-start; padding-right: 0; padding-left: calc(50% + 32px); }
        .timeline-item__content { background: var(--white); border-radius: 10px; padding: 24px 28px; max-width: 320px; border: 1px solid var(--gray-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); transition: transform 0.3s; }
        .timeline-item__content:hover { transform: translateY(-3px); }
        .timeline-item__year { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--gold); font-weight: 700; margin-bottom: 6px; }
        .timeline-item__title { font-size: 1rem; color: var(--navy); margin-bottom: 8px; font-family: 'Inter', sans-serif; font-weight: 600; }
        .timeline-item__desc { font-size: 0.85rem; color: var(--gray); line-height: 1.6; }
        .timeline-item__dot { position: absolute; left: 50%; top: 24px; width: 14px; height: 14px; background: var(--gold); border-radius: 50%; transform: translateX(-50%); border: 3px solid var(--white); box-shadow: 0 0 0 3px rgba(201,168,76,0.3); }
        .values-section { padding: 96px 0; background: var(--navy); }
        .values-section .section-title { color: var(--white); }
        .values-section .section-tag { color: var(--gold); }
        .values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .value-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 36px 24px; text-align: center; transition: all 0.3s; }
        .value-card:hover { background: rgba(201,168,76,0.08); border-color: rgba(201,168,76,0.3); transform: translateY(-4px); }
        .value-card__icon { font-size: 2.2rem; margin-bottom: 16px; }
        .value-card__title { font-size: 1.1rem; color: var(--white); margin-bottom: 12px; }
        .value-card__desc { font-size: 0.85rem; color: rgba(255,255,255,0.5); line-height: 1.7; }
        @media (max-width: 1024px) {
          .about-profile__inner { grid-template-columns: 1fr; }
          .about-profile__card { position: static; }
          .values-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .timeline__line { left: 16px; }
          .timeline-item, .timeline-item--right { padding: 0 0 0 48px; justify-content: flex-start; }
          .timeline-item__dot { left: 16px; }
          .timeline-item__content { max-width: 100%; }
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  )
}
