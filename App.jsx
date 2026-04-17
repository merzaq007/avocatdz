import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import { translations } from './i18n/translations'
import './index.css'

function updateMeta(page, t) {
  const metas = {
    home: { title: `Avocat Tiaret — ${t.hero.subtitle}`, desc: t.hero.desc },
    services: { title: `${t.servicesPage.title} — Avocat Tiaret`, desc: t.servicesPage.sub },
    about: { title: `${t.aboutPage.title} — Avocat Tiaret`, desc: t.aboutPage.sub },
    contact: { title: `${t.contactPage.title} — Avocat Tiaret`, desc: t.contactPage.sub },
  }
  const m = metas[page] || metas.home
  document.title = m.title
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.setAttribute('content', m.desc)
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [lang, setLang] = useState('fr')

  const t = translations[lang]

  // Apply RTL/LTR to document
  document.documentElement.dir = t.dir
  document.documentElement.lang = lang

  const setPage = (page) => {
    setCurrentPage(page)
    updateMeta(page, t)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'services': return <Services t={t} setPage={setPage} />
      case 'about':    return <About t={t} />
      case 'contact':  return <Contact t={t} />
      default:         return <Home t={t} setPage={setPage} />
    }
  }

  return (
    <>
      <Navbar currentPage={currentPage} setPage={setPage} lang={lang} setLang={setLang} t={t} />
      <main>{renderPage()}</main>
      <Footer setPage={setPage} t={t} />
    </>
  )
}
