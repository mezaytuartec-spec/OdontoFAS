import { useEffect, useState } from 'react';
import { ArrowDown, BadgeCheck } from 'lucide-react';
import { CLINIC } from '../data.js';
import { WaButton, Stars, GoogleIcon, Hl } from './ui.jsx';
import { img } from '../img.js';

const NAV = [
  ['El doctor', '#doctor'],
  ['Programas', '#programas'],
  ['Membresía', '#membresia'],
  ['Reseñas', '#resenas'],
  ['Ubicación', '#ubicacion'],
];

export function Header({ onPick }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? 'bg-white/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md' : 'bg-canvas'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <a href="#inicio" className="-my-2 shrink-0 py-2" aria-label="OdontoFAS, ir al inicio">
          <img src={img('logo.webp')} srcSet={`${img('logo-300.webp')} 300w, ${img('logo.webp')} 600w`} sizes="155px" alt="Odontofas" width="150" height="31" className="h-7 w-auto lg:h-8" />
        </a>
        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-muted">
            {NAV.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="transition-colors hover:text-brand-600">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden lg:block">
          <WaButton onPick={onPick} className="!h-11 !px-4 text-sm">
            Escríbenos
          </WaButton>
        </div>
      </div>
    </header>
  );
}

export function Hero({ onPick }) {
  return (
    <section id="inicio" className="container-x pt-2 lg:pt-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-[#eef1f3] ring-1 ring-line lg:min-h-[640px]">
        {/* Foto: arriba en mobile, de fondo en desktop */}
        <div className="relative lg:absolute lg:inset-0">
        <picture>
          <source media="(min-width: 640px)" srcSet={`${img('hero-1600-1000.webp')} 1000w, ${img('hero-1600.webp')} 1600w`} sizes="(min-width: 1280px) 1216px, 100vw" />
          <img
            src={img('hero-mobile.webp')}
            srcSet={`${img('hero-mobile-480.webp')} 480w, ${img('hero-mobile.webp')} 800w`}
            sizes="100vw"
            alt="Paciente sonriendo en el consultorio"
            width="800"
            height="714"
            fetchpriority="high"
            className="aspect-[4/3] w-full object-cover object-[50%_20%] sm:aspect-[2.3/1] sm:object-[70%_25%] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full lg:object-[85%_center] xl:object-[70%_center]"
          />
        </picture>
          <a
            href="#doctor"
            className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-2xl bg-white/95 p-2.5 shadow-[0_8px_24px_-12px_rgb(14_27_31/0.35)] backdrop-blur sm:inset-x-auto sm:left-4 sm:bottom-4 sm:pr-5 lg:hidden"
          >
            <img src={img('doctor-avatar.webp')} alt="" width="60" height="60" className="size-[60px] shrink-0 rounded-xl bg-[#eefdfd] object-cover max-[359px]:size-12" />
            <span className="min-w-0 leading-tight">
              <span className="block text-xs font-medium text-muted">Te atiende</span>
              <span className="flex items-center gap-1 whitespace-nowrap text-base font-semibold max-[359px]:text-[14px]">
                Dr. Fernando Acosta <BadgeCheck className="size-4 shrink-0 text-brand-500" aria-hidden="true" />
              </span>
              <span className="block truncate text-[13px] text-muted">Rehabilitador oral · 16 años · USMP</span>
            </span>
          </a>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 hidden h-full bg-gradient-to-r from-[#eef1f3] via-[#eef1f3]/85 to-transparent lg:block lg:w-[72%] xl:w-[62%]"
        />

        {/* Chip de Google sobre la foto (mobile) */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('OdontoFAS ' + CLINIC.mapsQuery)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-[13px] font-semibold shadow-sm backdrop-blur lg:hidden"
        >
          <GoogleIcon className="size-3.5 text-[#4285F4]" />
          {CLINIC.rating}
          <Stars className="size-3.5" />
          <span className="font-medium text-muted">({CLINIC.reviews})</span>
        </a>

        <div className="relative px-5 pb-7 pt-6 sm:px-8 lg:flex lg:min-h-[640px] lg:max-w-[520px] lg:flex-col xl:max-w-[600px] lg:justify-center lg:px-14 lg:py-16">
          <a
            href="#resenas"
            className="mb-6 hidden w-fit items-center gap-2.5 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm ring-1 ring-line lg:inline-flex"
          >
            <GoogleIcon className="size-4 text-[#4285F4]" />
            {CLINIC.rating}
            <Stars />
            <span className="font-medium text-muted">{CLINIC.reviews} reseñas en Google</span>
          </a>

          <h1 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-5xl lg:text-[58px]">
            El dentista que <Hl>te explica todo</Hl> y va <Hl>a tu ritmo</Hl>
          </h1>
          <p className="mt-4 max-w-[460px] text-[17px] lg:max-w-[420px] xl:max-w-[460px] leading-relaxed text-muted lg:mt-6 lg:text-lg">
            Antes de empezar sabes qué te vamos a hacer, cuánto dura y cuánto cuesta. Sin apuros y sin sorpresas.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-8">
            <WaButton size="lg" onPick={onPick} className="w-full sm:w-auto">
              Escríbenos por WhatsApp
            </WaButton>
            <a
              href="#programas"
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 text-[15px] font-semibold text-brand-700 transition-colors hover:text-brand-900"
            >
              Ver programas <ArrowDown className="size-4" aria-hidden="true" />
            </a>
          </div>

        </div>

        {/* Desktop: el doctor como cara de la marca */}
        <a
          href="#doctor"
          className="absolute bottom-6 right-6 hidden w-[380px] items-center gap-4 rounded-[1.5rem] bg-white/95 p-3 pr-5 shadow-[0_24px_48px_-20px_rgb(14_27_31/0.35)] ring-1 ring-white backdrop-blur transition-transform duration-300 hover:-translate-y-1 lg:flex xl:bottom-8 xl:right-8"
        >
          <img
            src={img('doctor-avatar.webp')}
            alt="Dr. Fernando Acosta Soria"
            width="120"
            height="120"
            className="size-[120px] shrink-0 rounded-2xl bg-[#eefdfd] object-cover object-[50%_15%]"
          />
          <span className="block min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">Te atiende</span>
            <span className="mt-1 flex items-center gap-1.5 whitespace-nowrap text-lg font-semibold leading-tight">
              Dr. Fernando Acosta <BadgeCheck className="size-[18px] shrink-0 text-brand-500" aria-hidden="true" />
            </span>
            <span className="mt-0.5 block text-sm text-muted">Rehabilitador oral · USMP · COP</span>
            <span className="mt-2.5 flex gap-2 text-[13px] font-medium">
              <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-brand-800"><b className="font-semibold">16</b> años</span>
              <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-brand-800"><b className="font-semibold">+3,000</b> pacientes</span>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}

const STATS = [
  ['16', 'años de experiencia'],
  ['+3,000', 'pacientes atendidos'],
  ['+5,000', 'dientes recuperados'],
  ['5.0 ★', `en Google · ${CLINIC.reviews} reseñas`],
];

export function Stats() {
  return (
    <section aria-label="OdontoFAS en números" className="container-x mt-4 lg:mt-5">
      <dl className="card grid grid-cols-2 lg:grid-cols-4">
        {STATS.map(([n, l], i) => (
          <div
            key={l}
            className={`border-line px-5 py-5 lg:px-8 lg:py-7 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b lg:border-b-0' : ''} ${i === 1 ? 'lg:border-r' : ''}`}
          >
            <dt className="sr-only">{l}</dt>
            <dd>
              <span className="block text-[28px] font-semibold tracking-tight text-brand-600 lg:text-4xl">{n}</span>
              <span className="mt-1 block text-sm leading-snug text-muted lg:text-[15px]">{l}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
