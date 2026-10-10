import { MessagesSquare, HeartHandshake, ReceiptText, Smartphone, GraduationCap, Award, Check, Clock, ArrowRight } from 'lucide-react';
import { PROGRAMS, CARE_INCLUDES, CARE_DISCOUNTS, waLink } from '../data.js';
import { WaButton, SectionHead, Hl } from './ui.jsx';

const COMFORT = [
  [MessagesSquare, 'Primero conversamos', 'Te escuchamos y revisamos sin apuros. Nada se hace sin que lo entiendas y estés de acuerdo.'],
  [HeartHandshake, 'Vamos a tu ritmo', 'Usamos anestesia local cuando hace falta y paramos cuando lo necesites.'],
  [ReceiptText, 'Precio claro desde el inicio', 'Te damos un plan con etapas y costos antes de empezar. Sin sorpresas.'],
  [Smartphone, 'Seguimiento por WhatsApp', '¿Te quedó una duda después de la cita? Escríbenos y te orientamos.'],
];

export function Doctor() {
  return (
    <section id="doctor" className="container-x pt-16 lg:pt-24">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="reveal lg:col-span-5">
          <figure className="relative overflow-hidden rounded-[var(--radius-card)] bg-[#eefcfd] ring-1 ring-line">
            <img
              src="/img/doctor-800.webp"
              srcSet="/img/doctor-800-480.webp 480w, /img/doctor-800.webp 800w"
              sizes="(min-width: 1024px) 460px, 100vw"
              alt="Dr. Fernando Acosta Soria, dentista y rehabilitador oral de OdontoFAS"
              width="800"
              height="800"
              loading="lazy"
              className="aspect-square w-full object-cover object-top lg:aspect-[4/5]"
            />
            <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 p-4 shadow-sm backdrop-blur">
              <p className="text-lg font-semibold">Dr. Fernando Acosta Soria</p>
              <p className="text-sm text-muted">Cirujano dentista · Rehabilitador oral</p>
            </figcaption>
          </figure>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <SectionHead
            eyebrow="Conoce a tu dentista"
            title={
              <>
                Antes de tocar un diente, <Hl>te explicamos todo</Hl>
              </>
            }
            sub="Si le tienes miedo al dentista, no eres el único. Por eso cada consulta empieza igual: escuchándote. En 16 años, el Dr. Acosta ha ayudado a más de 3,000 pacientes a recuperar la función y la confianza en su sonrisa."
          />

          <ul className="reveal mt-6 flex flex-wrap gap-2.5 text-sm font-medium">
            <li className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 ring-1 ring-line">
              <GraduationCap className="size-4 text-brand-500" aria-hidden="true" /> Cirujano dentista, USMP
            </li>
            <li className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 ring-1 ring-line">
              <Award className="size-4 text-brand-500" aria-hidden="true" /> Diplomado en Rehabilitación Oral, COP
            </li>
          </ul>

          <div className="reveal card mt-8 divide-y divide-line sm:grid sm:grid-cols-2 sm:gap-4 sm:divide-y-0 sm:bg-transparent sm:ring-0">
            {COMFORT.map(([Icon, t, d]) => (
              <article key={t} className="flex gap-3.5 px-4 py-4 sm:block sm:rounded-[var(--radius-card)] sm:bg-white sm:p-6 sm:ring-1 sm:ring-line">
                <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 sm:size-10">
                  <Icon className="size-[18px] sm:size-5" aria-hidden="true" />
                </span>
                <span className="block">
                  <h3 className="text-base font-semibold sm:mt-4 sm:text-[17px]">{t}</h3>
                  <p className="mt-0.5 text-[14px] leading-snug text-muted sm:mt-1.5 sm:text-[15px] sm:leading-relaxed">{d}</p>
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Programs({ onPick }) {
  return (
    <section id="programas" className="pt-16 lg:pt-24">
      <div className="container-x">
        <SectionHead
          center
          eyebrow="Programas"
          title={
            <>
              Tratamientos con <Hl>tiempos claros</Hl> desde el primer día
            </>
          }
          sub="Cada programa tiene pasos definidos, para que sepas qué esperar y cuándo vas a ver el resultado."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {PROGRAMS.map((p) => (
            <article key={p.key} className="reveal card flex flex-col overflow-hidden p-2.5">
              <div className="relative overflow-hidden rounded-[1.25rem] bg-canvas">
                <img src={p.img} srcSet={`${p.img.replace(".webp", "-400.webp")} 400w, ${p.img} 720w`} sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw" alt={p.alt} width="720" height="495" loading="lazy" className="aspect-[16/11] w-full object-cover" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[13px] font-semibold text-brand-800 shadow-sm">
                  <Clock className="size-3.5" aria-hidden="true" /> {p.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.desc}</p>
                <ul className="mt-4 space-y-2 border-t border-line pt-4 text-[15px]">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand-500" strokeWidth={2.5} aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <WaButton interest={p.key} onPick={onPick} variant="outline" className="w-full">
                    Consultar por WhatsApp
                  </WaButton>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="reveal mt-10 text-center text-[15px] text-muted">
          ¿Buscas otro tratamiento? También hacemos limpieza, endodoncia, ortodoncia, periodoncia y rehabilitación oral.{' '}
          <a
            href={waLink('general')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onPick('general')}
            className="inline-flex items-center gap-1 font-semibold text-brand-700 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-600"
          >
            Cuéntanos qué necesitas <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}

export function Membership({ onPick }) {
  return (
    <section id="membresia" className="container-x pt-16 lg:pt-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-brand-800 px-5 py-12 text-white sm:px-10 lg:px-16 lg:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-brand-500/30 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-24 size-[360px] rounded-full bg-accent/10 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <p className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[13px] font-semibold text-ink">
              Membresía Odontofas Care
            </p>
            <h2 className="h2 mt-5">
              Cuida tu sonrisa todo el año por <span className="text-accent">menos de S/21 al mes</span>
            </h2>
            <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-brand-100">
              La mayoría va al dentista solo cuando algo duele. Con Odontofas Care tienes tus controles cubiertos y pagas menos en cualquier tratamiento.
            </p>
            <ul className="mt-8 space-y-3 text-[16px]">
              {CARE_INCLUDES.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-white/15">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Plan
                name="Individual"
                price="249"
                note="Equivale a S/20.75 al mes"
                interest="careIndividual"
                onPick={onPick}
              />
              <Plan
                name="Familiar"
                price="490"
                note="Hasta 4 personas · S/122.50 c/u"
                interest="careFamiliar"
                onPick={onPick}
                featured
              />
            </div>

            <div className="rounded-3xl bg-white/[0.07] p-5 ring-1 ring-white/10 sm:p-6">
              <p className="text-sm font-semibold text-brand-100">Tus descuentos en tratamientos</p>
              <dl className="mt-4 grid gap-x-4 gap-y-4 min-[400px]:grid-cols-2">
                {CARE_DISCOUNTS.map(([pct, cat, ex]) => (
                  <div key={cat} className="flex gap-3">
                    <dt className="w-12 shrink-0 text-xl font-semibold text-accent">{pct}</dt>
                    <dd className="text-sm leading-snug">
                      <span className="block font-semibold">{cat}</span>
                      <span className="text-brand-100/80">{ex}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <p className="px-1 text-[13px] leading-relaxed text-brand-100/75">
              Pago único anual por Yape, Plin, transferencia o tarjeta. Los beneficios se usan dentro de 12 meses. No reembolsable. En el plan familiar se registran las personas autorizadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Plan({ name, price, note, interest, onPick, featured = false }) {
  return (
    <div className={`relative flex flex-col rounded-3xl p-6 ${featured ? 'bg-white text-ink' : 'bg-white/[0.07] ring-1 ring-white/15'}`}>
      {featured && (
        <span className="absolute -top-3 right-5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">Más conveniente</span>
      )}
      <p className={`text-[15px] font-semibold ${featured ? 'text-brand-600' : 'text-brand-100'}`}>{name}</p>
      <p className="mt-2 flex items-baseline gap-1">
        <span className="text-lg font-semibold">S/</span>
        <span className="text-5xl font-semibold tracking-tight">{price}</span>
        <span className={`text-sm ${featured ? 'text-muted' : 'text-brand-100/80'}`}>/año</span>
      </p>
      <p className={`mt-1.5 text-sm ${featured ? 'text-muted' : 'text-brand-100/80'}`}>{note}</p>
      <WaButton interest={interest} onPick={onPick} variant={featured ? 'primary' : 'light'} className="mt-6 w-full">
        Quiero este plan
      </WaButton>
    </div>
  );
}
