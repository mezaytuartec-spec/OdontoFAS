import { useCallback, useEffect, useState } from 'react';
import { INTERESTS } from './data.js';
import { Header, Hero, Stats } from './components/Top.jsx';
import { Doctor, Programs, Membership } from './components/Middle.jsx';
import { Reviews, Steps, Faq, Location, FinalCta, Footer, FloatingWa } from './components/Bottom.jsx';

const KEY = 'odontofas:interest';

function readInterest() {
  try {
    const v = sessionStorage.getItem(KEY);
    return v && INTERESTS[v] ? v : 'general';
  } catch {
    return 'general';
  }
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            io.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  // Último tratamiento que tocó el visitante: define el mensaje del botón flotante.
  const [interest, setInterest] = useState(readInterest);
  const pick = useCallback((k) => {
    setInterest(k);
    try {
      sessionStorage.setItem(KEY, k);
    } catch {}
  }, []);
  useReveal();

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
        Saltar al contenido
      </a>
      <Header onPick={pick} />
      <main id="main">
        <Hero onPick={pick} />
        <Stats />
        <Doctor />
        <Programs onPick={pick} />
        <Membership onPick={pick} />
        <Reviews />
        <Steps onPick={pick} />
        <Faq onPick={pick} />
        <Location onPick={pick} />
        <FinalCta interest={interest} onPick={pick} />
      </main>
      <Footer />
      <FloatingWa interest={interest} onPick={pick} />
    </>
  );
}
