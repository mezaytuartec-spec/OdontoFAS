import { siWhatsapp, siGoogle, siInstagram, siTiktok, siFacebook } from 'simple-icons';
import { waLink } from '../data.js';

const Brand = ({ icon, className = 'size-5', title }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden={title ? undefined : true} role={title ? 'img' : undefined}>
    {title && <title>{title}</title>}
    <path d={icon.path} />
  </svg>
);

export const WhatsAppIcon = (p) => <Brand icon={siWhatsapp} {...p} />;
export const GoogleIcon = (p) => <Brand icon={siGoogle} {...p} />;
export const InstagramIcon = (p) => <Brand icon={siInstagram} {...p} />;
export const TiktokIcon = (p) => <Brand icon={siTiktok} {...p} />;
export const FacebookIcon = (p) => <Brand icon={siFacebook} {...p} />;

export function Stars({ className = 'size-4' }) {
  return (
    <span role="img" className="inline-flex text-accent" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={className} fill="currentColor" aria-hidden="true">
          <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z" />
        </svg>
      ))}
    </span>
  );
}

const SIZES = {
  md: 'h-12 px-5 text-[15px] gap-2',
  lg: 'h-14 px-6 text-base gap-2.5 max-[359px]:px-4 max-[359px]:text-[15px]',
};

const VARIANTS = {
  primary: 'bg-brand-600 text-white shadow-[0_8px_24px_-8px_rgb(0_124_142/0.6)] hover:bg-brand-700',
  light: 'bg-white text-brand-800 hover:bg-brand-50',
  outline: 'bg-white text-brand-800 ring-1 ring-brand-200 hover:ring-brand-500 hover:bg-brand-50',
};

// Único CTA del sitio: abre WhatsApp con el mensaje del interés elegido.
export function WaButton({ interest = 'general', onPick, children, size = 'md', variant = 'primary', className = '' }) {
  return (
    <a
      href={waLink(interest)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onPick?.(interest)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-[background-color,box-shadow,transform] duration-200 active:scale-[0.98] ${SIZES[size]} ${VARIANTS[variant]} ${className}`}
    >
      <WhatsAppIcon className={size === 'lg' ? 'size-[22px]' : 'size-5'} />
      {children}
    </a>
  );
}

export function SectionHead({ eyebrow, title, sub, center = false, className = '' }) {
  return (
    <div className={`reveal ${center ? 'mx-auto text-center' : ''} max-w-2xl ${className}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h2 mt-3">{title}</h2>
      {sub && <p className="mt-4 text-[17px] leading-relaxed text-muted">{sub}</p>}
    </div>
  );
}

export const Hl = ({ children }) => <span className="text-brand-500">{children}</span>;
