const timelineData = {
  fr: [
    { year: '2008', title: 'Admission au Barreau', desc: 'Inscription au Barreau de Tiaret après l\'obtention du CAPA.' },
    { year: '2012', title: 'Spécialisation Pénale', desc: 'Formation avancée en droit pénal et procédure pénale.' },
    { year: '2016', title: 'Ouverture du Cabinet', desc: 'Création du cabinet indépendant au centre de Tiaret.' },
    { year: '2020', title: 'Expansion des Services', desc: 'Extension aux domaines commercial, immobilier et administratif.' },
    { year: '2024', title: 'Reconnaissance Régionale', desc: 'Reconnu parmi les meilleurs avocats de la région de Tiaret.' },
  ],
  ar: [
    { year: '2008', title: 'القبول في نقابة المحامين', desc: 'التسجيل في نقابة محامي تيارت بعد الحصول على شهادة الكفاءة.' },
    { year: '2012', title: 'التخصص الجنائي', desc: 'تدريب متقدم في القانون الجنائي والإجراءات الجزائية.' },
    { year: '2016', title: 'افتتاح المكتب', desc: 'إنشاء المكتب المستقل في قلب مدينة تيارت.' },
    { year: '2020', title: 'توسيع الخدمات', desc: 'التوسع في مجالات القانون التجاري والعقاري والإداري.' },
    { year: '2024', title: 'الاعتراف الإقليمي', desc: 'مُعترف به كأحد أفضل المحامين في منطقة تيارت.' },
  ],
  en: [
    { year: '2008', title: 'Bar Admission', desc: 'Enrolled at the Tiaret Bar after obtaining the CAPA certificate.' },
    { year: '2012', title: 'Criminal Specialization', desc: 'Advanced training in criminal law and criminal procedure.' },
    { year: '2016', title: 'Office Opening', desc: 'Founded the independent firm in the center of Tiaret.' },
    { year: '2020', title: 'Service Expansion', desc: 'Extended to commercial, real estate and administrative law.' },
    { year: '2024', title: 'Regional Recognition', desc: 'Recognized among the best lawyers in the Tiaret region.' },
  ],
}

const valuesData = {
  fr: [
    { icon: '⚖️', title: 'Justice', desc: 'Nous croyons en un accès équitable à la justice pour tous.' },
    { icon: '🔒', title: 'Intégrité', desc: 'La transparence et l\'honnêteté sont au cœur de notre pratique.' },
    { icon: '🎯', title: 'Excellence', desc: 'Nous visons l\'excellence dans chaque dossier.' },
    { icon: '🤝', title: 'Engagement', desc: 'Votre cause devient notre cause.' },
  ],
  ar: [
    { icon: '⚖️', title: 'العدل', desc: 'نؤمن بحق الجميع في الوصول إلى العدالة.' },
    { icon: '🔒', title: 'النزاهة', desc: 'الشفافية والأمانة في صميم ممارستنا المهنية.' },
    { icon: '🎯', title: 'التميز', desc: 'نسعى للتميز في كل ملف نتولاه.' },
    { icon: '🤝', title: 'الالتزام', desc: 'قضيتك هي قضيتنا.' },
  ],
  en: [
    { icon: '⚖️', title: 'Justice', desc: 'We believe in fair access to justice for everyone.' },
    { icon: '🔒', title: 'Integrity', desc: 'Transparency and honesty are at the core of our practice.' },
    { icon: '🎯', title: 'Excellence', desc: 'We strive for excellence in every case.' },
    { icon: '🤝', title: 'Commitment', desc: 'Your cause becomes our cause.' },
  ],
}

const qualsData = {
  fr: [
    ['🎓', 'Licence en Droit', 'Université de Tiaret'],
    ['📜', 'CAPA — Certificat d\'Aptitude', 'École Nationale de la Magistrature'],
    ['⚖️', 'Membre du Barreau de Tiaret', 'Depuis 2008'],
  ],
  ar: [
    ['🎓', 'ليسانس في القانون', 'جامعة تيارت'],
    ['📜', 'شهادة الكفاءة المهنية', 'المدرسة الوطنية للقضاء'],
    ['⚖️', 'عضو نقابة محامي تيارت', 'منذ 2008'],
  ],
  en: [
    ['🎓', 'Law Degree', 'University of Tiaret'],
    ['📜', 'CAPA — Professional Certificate', 'National School of Magistracy'],
    ['⚖️', 'Member of Tiaret Bar', 'Since 2008'],
  ],
}

export default function About({ t }) {
  const isAr = t.dir === 'rtl'
  const isEn = !isAr && t.nav.home === 'Home'
  const langKey = isAr ? 'ar' : isEn ? 'en' : 'fr'
  const timeline = timelineData[langKey]
  const values = valuesData[langKey]
  const quals = qualsData[langKey]

  return (
    <div className="page-enter">
      <div className="page-header">
        <div className="page-header__bg" />
        <div className="container page-header__content">
          <p className="page-header__tag">{t.aboutPage.tag}</p>
          <h1 className="page-header__title">{t.aboutPage.title}</h1>
          <p className="page-header__sub">{t.aboutPage.sub}</p>
        </div>
      </div>

      {/* Profile */}
      <section className="about-profile">
        <div className="container about-profile__inner">
          <div className="about-profile__card">
            <div className="about-profile__avatar"><span>⚖️</span></div>
            <div className="about-profile__badge">Maître</div>
            <h2 className="about-profile__name">Avocat à Tiaret</h2>
            <p className="about-profile__title">Avocat au Barreau de Tiaret</p>
            <div className="about-profile__divider" />
            <div className="about-profile__stats">
              {t.stats.slice(0,3).map((s,i) => (
                <div key={i}><strong>{s.value}</strong><span>{s.label}</span></div>
              ))}
            </div>
          </div>
          <div className="about-profile__text">
            <p className="section-tag">{t.aboutPage.presTag}</p>
            <h2 className="section-title">{t.aboutPage.presTitle}</h2>
            <div className="gold-line" />
            <p className="about-p">{t.aboutPage.p1}</p>
            <p className="about-p">{t.aboutPage.p2}</p>
            <p className="about-p">{t.aboutPage.p3}</p>
            <div className="about-profile__quals">
              {quals.map(([icon, title, sub], i) => (
                <div key={i} className="qual-item">
                  <span className="qual-icon">{icon}</span>
                  <div>
                    <strong>{title}</strong>
                    <span>{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <p className="section-tag">{t.aboutPage.timelineTag}</p>
            <h2 className="section-title">{t.aboutPage.timelineTitle}</h2>
            <div className="gold-line" style={{ margin: '16px auto 0' }} />
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'}`}>
                <div className="timeline-item__content">
                  <div className="timeline-item__year">{item.year}</div>
                  <h3 className="timeline-item__title">{item.title}</h3>
                  <p className="timeline-item__desc">{item.desc}</p>
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
            <p className="section-tag">{t.aboutPage.valuesTag}</p>
            <h2 className="section-title">{t.aboutPage.valuesTitle}</h2>
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
        .page-header__bg { position: absolute; inset: 0; background: linear-gradient(135deg,var(--navy) 0%,var(--navy-mid) 100%); }
        .page-header__bg::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center,rgba(201,168,76,0.08) 0%,transparent 70%); }
        .page-header__content { position: relative; z-index: 1; }
        .page-header__tag { font-size: 0.78rem; letter-spacing: 3px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 16px; }
        .page-header__title { font-size: clamp(2.2rem,5vw,3.5rem); color: var(--white); margin-bottom: 16px; }
        .page-header__sub { color: rgba(255,255,255,0.6); font-size: 1.05rem; max-width: 500px; margin: 0 auto; line-height: 1.7; }
        .about-profile { padding: 96px 0; background: var(--white); }
        .about-profile__inner { display: grid; grid-template-columns: 320px 1fr; gap: 72px; align-items: start; }
        .about-profile__card {
          background: linear-gradient(135deg,var(--navy),var(--navy-mid)); border-radius: 16px;
          padding: 48px 32px; text-align: center; color: var(--white);
          border: 1px solid rgba(201,168,76,0.2); position: sticky; top: 100px;
        }
        .about-profile__avatar {
          width: 100px; height: 100px; background: rgba(201,168,76,0.15); border-radius: 50%;
          display: flex; align-items: center; justify-content: center; font-size: 2.8rem;
          margin: 0 auto 16px; border: 2px solid rgba(201,168,76,0.3);
        }
        .about-profile__badge {
          display: inline-block; background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.3);
          color: var(--gold-light); padding: 4px 16px; border-radius: 50px; font-size: 0.75rem;
          letter-spacing: 1px; margin-bottom: 12px;
        }
        .about-profile__name { font-size: 1.3rem; color: var(--white); margin-bottom: 6px; }
        .about-profile__title { font-size: 0.82rem; color: var(--gold); letter-spacing: 0.5px; }
        .about-profile__divider { width: 40px; height: 2px; background: var(--gold); margin: 20px auto; border-radius: 1px; }
        .about-profile__stats { display: flex; justify-content: space-around; }
        .about-profile__stats div { display: flex; flex-direction: column; gap: 4px; }
        .about-profile__stats strong { font-family: 'Playfair Display',serif; font-size: 1.5rem; color: var(--gold); }
        .about-profile__stats span { font-size: 0.72rem; color: rgba(255,255,255,0.5); }
        .about-p { color: var(--gray); line-height: 1.8; margin-bottom: 16px; font-size: 0.95rem; }
        .about-profile__quals { margin-top: 32px; display: flex; flex-direction: column; gap: 16px; }
        .qual-item { display: flex; align-items: center; gap: 14px; padding: 14px 18px; background: var(--off-white); border-radius: 8px; border-inline-start: 3px solid var(--gold); }
        .qual-icon { font-size: 1.3rem; }
        .qual-item div { display: flex; flex-direction: column; gap: 2px; }
        .qual-item strong { font-size: 0.88rem; color: var(--navy); font-weight: 600; }
        .qual-item span { font-size: 0.78rem; color: var(--gray); }
        .timeline-section { padding: 96px 0; background: var(--off-white); }
        .timeline { position: relative; max-width: 800px; margin: 56px auto 0; }
        .timeline__line {
          position: absolute; left: 50%; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom,var(--gold),rgba(201,168,76,0.1)); transform: translateX(-50%);
        }
        .timeline-item { display: flex; justify-content: flex-end; padding-inline-end: calc(50% + 32px); margin-bottom: 40px; position: relative; }
        .timeline-item--right { justify-content: flex-start; padding-inline-end: 0; padding-inline-start: calc(50% + 32px); }
        .timeline-item__content {
          background: var(--white); border-radius: 10px; padding: 24px 28px; max-width: 320px;
          border: 1px solid var(--gray-light); box-shadow: 0 4px 20px rgba(0,0,0,0.05); transition: transform 0.3s;
        }
        .timeline-item__content:hover { transform: translateY(-3px); }
        .timeline-item__year { font-family: 'Playfair Display',serif; font-size: 1.4rem; color: var(--gold); font-weight: 700; margin-bottom: 6px; }
        .timeline-item__title { font-size: 1rem; color: var(--navy); margin-bottom: 8px; font-family: 'Inter',sans-serif; font-weight: 600; }
        .timeline-item__desc { font-size: 0.85rem; color: var(--gray); line-height: 1.6; }
        .timeline-item__dot {
          position: absolute; left: 50%; top: 24px; width: 14px; height: 14px; background: var(--gold);
          border-radius: 50%; transform: translateX(-50%); border: 3px solid var(--white);
          box-shadow: 0 0 0 3px rgba(201,168,76,0.3);
        }
        .values-section { padding: 96px 0; background: var(--navy); }
        .values-section .section-title { color: var(--white); }
        .values-section .section-tag { color: var(--gold); }
        .values-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
        .value-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 36px 24px; text-align: center; transition: all 0.3s; }
        .value-card:hover { background: rgba(201,168,76,0.08); border-color: rgba(201,168,76,0.3); transform: translateY(-4px); }
        .value-card__icon { font-size: 2.2rem; margin-bottom: 16px; }
        .value-card__title { font-size: 1.1rem; color: var(--white); margin-bottom: 12px; }
        .value-card__desc { font-size: 0.85rem; color: rgba(255,255,255,0.5); line-height: 1.7; }
        .section-header { text-align: center; margin-bottom: 56px; }
        .section-header .gold-line { margin: 16px auto; }
        .section-tag { font-size: 0.78rem; letter-spacing: 2.5px; text-transform: uppercase; color: var(--gold); font-weight: 600; margin-bottom: 12px; }
        @media (max-width: 1024px) {
          .about-profile__inner { grid-template-columns: 1fr; }
          .about-profile__card { position: static; }
          .values-grid { grid-template-columns: repeat(2,1fr); }
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
