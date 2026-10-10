import { useEffect, useState } from 'react';
import { Plus, MapPin, Clock, Phone, Mail, Navigation, BookOpen } from 'lucide-react';
import { CLINIC, REVIEWS, FAQS, INTERESTS, waLink } from '../data.js';
import { WaButton, SectionHead, Hl, Stars, GoogleIcon, InstagramIcon, TiktokIcon, FacebookIcon, WhatsAppIcon } from './ui.jsx';

const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('OdontoFAS ' + CLINIC.mapsQuery)}`;
const mapsDirections = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CLINIC.mapsQuery)}`;

export function Reviews() {
  return (
    <section id="resenas" className="pt-16 lg:pt-24">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            eyebrow="Reseñas"
            title={
              <>
                Pacientes que llegaron con nervios y <Hl>se fueron tranquilos</Hl>
              </>
            }
          />
          <a
            href={mapsSearch}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal flex w-fit items-center gap-4 rounded-2xl bg-white px-5 py-4 ring-1 ring-line transition-shadow hover:shadow-md"
          >
            <GoogleIcon className="size-8 text-[#4285F4]" />
            <span>
              <span className="flex items-center gap-2 text-2xl font-semibold leading-none">
                {CLINIC.rating} <Stars />
              </span>
              <span className="mt-1 block text-sm text-muted">{CLINIC.reviews} reseñas en Google · Ver todas</span>
            </span>
          </a>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-12 lg:gap-5">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="reveal card flex flex-col p-6 lg:p-7">
              <Stars />
              <blockquote className="mt-4 flex-1 text-[17px] leading-relaxed">“{r.text}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-brand-100 text-sm font-semibold text-brand-800" aria-hidden="true">
                  {r.name
                    .split(' ')
                    .slice(0, 2)
                    .map((w) => w[0])
                    .join('')}
                </span>
                <span className="leading-tight">
                  <span className="block font-semibold">{r.name}</span>
                  <span className="text-sm text-muted">Reseña de Google</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  ['Escríbenos', 'Cuéntanos qué te pasa o qué te gustaría mejorar. Te ayudamos a elegir un horario que te acomode.'],
  ['Evaluación sin apuros', 'El doctor te revisa, te muestra lo que encuentra y responde todas tus dudas.'],
  ['Tu plan, tu decisión', 'Recibes un plan con etapas y costos. Empiezas cuando te sientas listo.'],
];

export function Steps({ onPick }) {
  return (
    <section className="container-x pt-16 lg:pt-24">
      <SectionHead
        center
        eyebrow="Tu primera visita"
        title={
          <>
            Así de simple es <Hl>dar el primer paso</Hl>
          </>
        }
      />
      <ol className="mt-12 grid gap-4 md:grid-cols-3 lg:gap-5">
        {STEPS.map(([t, d], i) => (
          <li key={t} className="reveal card p-6 lg:p-8">
            <span className="grid size-11 place-items-center rounded-full bg-brand-600 text-lg font-semibold text-white">{i + 1}</span>
            <h3 className="mt-5 text-xl font-semibold">{t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{d}</p>
          </li>
        ))}
      </ol>
      <div className="reveal mt-10 flex justify-center">
        <WaButton size="lg" onPick={onPick}>
          Agendar mi evaluación
        </WaButton>
      </div>
    </section>
  );
}

export function Faq({ onPick }) {
  return (
    <section id="preguntas" className="container-x pt-16 lg:pt-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <SectionHead
            eyebrow="Preguntas frecuentes"
            title={
              <>
                Lo que <Hl>todos preguntan</Hl> antes de venir
              </>
            }
            sub="¿Tienes otra duda? Escríbenos y te respondemos por WhatsApp."
          />
        </div>
        <div className="reveal space-y-3 lg:col-span-8">
          {FAQS.map((f, i) => (
            <details key={f.q} className="group card px-5 py-1 open:pb-4 sm:px-6" open={i === 0}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-[17px] font-semibold">
                {f.q}
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-200 group-open:rotate-45">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="pr-10 text-[15px] leading-relaxed text-muted">{f.a}</p>
              {f.cta && (
                <a
                  href={waLink(f.cta)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onPick(f.cta)}
                  className="mt-3 inline-flex items-center gap-2 text-[15px] font-semibold text-brand-700 hover:text-brand-900"
                >
                  <WhatsAppIcon className="size-4" /> Escribir ahora
                </a>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location({ onPick }) {
  return (
    <section id="ubicacion" className="container-x pt-16 lg:pt-24">
      <div className="card grid overflow-hidden lg:grid-cols-12">
        <div className="p-6 sm:p-10 lg:col-span-5 lg:p-12">
          <SectionHead
            eyebrow="Ubicación"
            title={
              <>
                Estamos en <Hl>Jesús María</Hl>
              </>
            }
          />
          <ul className="mt-8 space-y-5 text-[16px]">
            <li className="flex gap-3.5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
              <span>
                {CLINIC.address}
                <span className="block text-muted">{CLINIC.district}</span>
              </span>
            </li>
            <li className="flex gap-3.5">
              <Clock className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
              <span className="space-y-0.5">
                {CLINIC.hours.map(([d, h]) => (
                  <span key={d} className="block">
                    <span className="font-medium">{d}:</span> <span className="whitespace-nowrap text-muted">{h}</span>
                  </span>
                ))}
              </span>
            </li>
            <li className="flex gap-3.5">
              <Phone className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
              <a href={`tel:+${CLINIC.phone}`} className="hover:text-brand-600">
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3.5">
              <Mail className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden="true" />
              <a href={`mailto:${CLINIC.email}`} className="text-[15px] [overflow-wrap:anywhere] hover:text-brand-600">
                {CLINIC.email}
              </a>
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WaButton onPick={onPick}>Escríbenos</WaButton>
            <a
              href={mapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-[15px] font-semibold text-brand-800 ring-1 ring-brand-200 transition-colors hover:bg-brand-50"
            >
              <Navigation className="size-4" aria-hidden="true" /> Cómo llegar
            </a>
          </div>
        </div>
        <div className="min-h-[320px] bg-brand-50 lg:col-span-7">
          <iframe
            title="Mapa de OdontoFAS en Jesús María"
            src={`https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapsQuery)}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[320px] w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}

const PICKER = ['general', 'implantes', 'blanqueamiento', 'carillas', 'ninos', 'care'];

export function FinalCta({ interest, onPick }) {
  const current = PICKER.includes(interest) ? interest : interest?.startsWith('care') ? 'care' : 'general';
  return (
    <section className="container-x py-16 lg:py-24">
      <div className="reveal relative overflow-hidden rounded-[2rem] bg-brand-600 px-5 py-12 text-center text-white sm:px-10 lg:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 -top-24 size-80 rounded-full bg-white/10 blur-2xl" />
        <h2 className="h2 relative mx-auto max-w-2xl">¿Listo para sonreír sin miedo?</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-[17px] text-white/90">
          Elige qué te interesa y te dejamos el mensaje listo para enviar. Sin compromiso.
        </p>
        <div role="group" aria-label="¿Qué te interesa?" className="relative mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2">
          {PICKER.map((k) => (
            <button
              key={k}
              type="button"
              aria-pressed={current === k}
              onClick={() => onPick(k)}
              className={`h-10 rounded-full px-4 text-sm font-semibold transition-colors ${
                current === k ? 'bg-white text-brand-800' : 'bg-white/10 text-white ring-1 ring-white/25 hover:bg-white/20'
              }`}
            >
              {INTERESTS[k].short}
            </button>
          ))}
        </div>
        <div className="relative mt-8 flex justify-center">
          <WaButton size="lg" variant="light" interest={current} onPick={onPick} className="w-full sm:w-auto">
            Escribir por WhatsApp
          </WaButton>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-900 pb-28 pt-14 text-brand-100 lg:pb-12">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <img src="/img/logo.webp" srcSet="/img/logo-300.webp 300w, /img/logo.webp 600w" sizes="155px" alt="Odontofas" width="150" height="31" loading="lazy" className="h-8 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-brand-100/80">
            Clínica dental del Dr. Fernando Acosta Soria. Odontología general, estética y rehabilitación oral en Jesús María, Lima.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              [InstagramIcon, CLINIC.social.instagram, 'Instagram'],
              [TiktokIcon, CLINIC.social.tiktok, 'TikTok'],
              [FacebookIcon, CLINIC.social.facebook, 'Facebook'],
            ].map(([Icon, href, label]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`OdontoFAS en ${label}`}
                className="grid size-11 place-items-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
              >
                <Icon className="size-[18px]" />
              </a>
            ))}
          </div>
        </div>
        <div className="text-[15px] md:col-span-4">
          <p className="font-semibold text-white">Contacto</p>
          <ul className="mt-4 space-y-2.5 text-brand-100/80">
            <li>
              {CLINIC.address}, {CLINIC.district}
            </li>
            <li>Lun–Vie 9am–8pm · Sáb 9am–6pm</li>
            <li>
              <a href={`tel:+${CLINIC.phone}`} className="hover:text-white">
                {CLINIC.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${CLINIC.email}`} className="break-all hover:text-white">
                {CLINIC.email}
              </a>
            </li>
          </ul>
        </div>
        <div className="text-[15px] md:col-span-3">
          <p className="font-semibold text-white">Atención al paciente</p>
          <a
            href={CLINIC.reclamaciones}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2.5 rounded-xl bg-white/10 px-4 py-3 font-medium text-white transition-colors hover:bg-white/20"
          >
            <BookOpen className="size-5" aria-hidden="true" /> Libro de Reclamaciones
          </a>
          <p className="mt-4 text-brand-100/70">Pagos: Yape, Plin, transferencia y tarjeta.</p>
        </div>
      </div>
      <div className="container-x mt-12 border-t border-white/10 pt-6 text-sm text-brand-100/60">
        © {new Date().getFullYear()} OdontoFAS. Todos los derechos reservados.
      </div>
    </footer>
  );
}

// Barra fija en mobile + burbuja en desktop. Siempre visibles; el mensaje sigue al último interés elegido.
export function FloatingWa({ interest, onPick }) {
  const [pastHero, setPastHero] = useState(false);
  useEffect(() => {
    const on = () => setPastHero(window.scrollY > 420);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  const label = interest && interest !== 'general' ? `Consultar: ${INTERESTS[interest].short}` : 'Escríbenos por WhatsApp';

  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white/95 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-3">
          <WaButton interest={interest} onPick={onPick} className="h-12 flex-1 max-[359px]:!text-sm">
            {label}
          </WaButton>
          <a
            href={`tel:+${CLINIC.phone}`}
            aria-label="Llamar a OdontoFAS"
            className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <a
        href={waLink(interest)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onPick(interest)}
        aria-label={label}
        className={`group fixed bottom-6 right-6 z-50 hidden items-center gap-3 rounded-full bg-brand-600 p-4 text-white shadow-[0_12px_32px_-8px_rgb(0_124_142/0.6)] transition-[transform,opacity,padding] duration-300 hover:bg-brand-700 lg:flex ${
          pastHero ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <WhatsAppIcon className="size-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-semibold transition-[max-width] duration-300 group-hover:max-w-xs">{label}</span>
      </a>
    </>
  );
}
