export const CLINIC = {
  phone: '51942812794',
  phoneDisplay: '+51 942 812 794',
  email: 'fernando.acosta@odontofasperu.com',
  address: 'Av. Horacio Urteaga 1477 Int. B',
  district: 'Jesús María, Lima',
  hours: [
    ['Lunes a viernes', '9:00 a.m. – 8:00 p.m.'],
    ['Sábados', '9:00 a.m. – 6:00 p.m.'],
  ],
  rating: '5.0',
  reviews: 21,
  mapsQuery: 'Av. Horacio Urteaga 1477, Jesús María, Lima, Perú',
  social: {
    instagram: 'https://www.instagram.com/odontofasperu',
    tiktok: 'https://www.tiktok.com/@odontofasperu',
    facebook: 'https://www.facebook.com/OdontoFAS',
  },
  reclamaciones: 'https://odontofasperu.com/libro-de-reclamaciones/',
};

const GREETING = 'Hola, vengo de la web de OdontoFAS.';

// Cada interés arma su propio mensaje de WhatsApp.
export const INTERESTS = {
  general: { short: 'Evaluación', msg: `${GREETING} Quisiera agendar una evaluación.` },
  implantes: { short: 'Implantes', msg: `${GREETING} Me interesa el programa de implantes dentales (16 semanas). ¿Me pueden dar más información?` },
  blanqueamiento: { short: 'Blanqueamiento', msg: `${GREETING} Me interesa el blanqueamiento dental de 90 minutos. ¿Me pueden dar más información?` },
  carillas: { short: 'Carillas', msg: `${GREETING} Me interesan las carillas dentales en 2 sesiones. ¿Me pueden dar más información?` },
  ninos: { short: 'Niños', msg: `${GREETING} Quisiera información sobre prevención y ortodoncia para mi hijo/a.` },
  care: { short: 'Membresía', msg: `${GREETING} Me interesa la membresía Odontofas Care. ¿Cómo me afilio?` },
  careIndividual: { short: 'Membresía', msg: `${GREETING} Quiero afiliarme a la membresía Odontofas Care Individual (S/249 al año).` },
  careFamiliar: { short: 'Membresía', msg: `${GREETING} Quiero afiliarme a la membresía Odontofas Care Familiar (S/490 al año, hasta 4 personas).` },
  urgencia: { short: 'Urgencia', msg: `${GREETING} Tengo una molestia/dolor dental y quisiera que me atiendan pronto.` },
};

export const waLink = (key = 'general') =>
  `https://wa.me/${CLINIC.phone}?text=${encodeURIComponent((INTERESTS[key] ?? INTERESTS.general).msg)}`;

export const PROGRAMS = [
  {
    key: 'implantes',
    title: 'Implantes dentales',
    tag: '16 semanas',
    img: '/img/p-implantes.webp',
    alt: 'Mujer mayor sonriendo con confianza',
    desc: 'Reemplaza un diente perdido con un implante de titanio y una corona que se ve natural.',
    items: ['Evaluación clínica y tomografía', 'Plan de tratamiento a tu medida', 'Corona de porcelana de zirconio', '4 controles con radiografía'],
  },
  {
    key: 'blanqueamiento',
    title: 'Blanqueamiento dental',
    tag: '90 minutos',
    img: '/img/p-blanqueamiento.webp',
    alt: 'Mujer joven con una sonrisa amplia',
    desc: 'Una sola sesión para aclarar el tono de tus dientes, con respaldo de 12 meses.',
    items: ['Se hace en una sola cita', 'Garantía de 12 meses', 'Kit de higiene de regalo'],
  },
  {
    key: 'carillas',
    title: 'Carillas dentales',
    tag: '2 sesiones',
    img: '/img/p-carillas.webp',
    alt: 'Mujer sonriendo mirando hacia arriba',
    desc: 'Corrige manchas, fracturas y pequeñas desalineaciones con un diseño personalizado.',
    items: ['Evaluación y diseño de sonrisa', 'Carillas de porcelana', 'Controles de seguimiento'],
  },
  {
    key: 'ninos',
    title: 'Niños de 4 a 14 años',
    tag: 'Prevención + ortodoncia',
    img: '/img/p-ninos.webp',
    alt: 'Niño mostrando sus dientes',
    desc: 'Cuidamos sus dientes y revisamos su mordida a tiempo, en la etapa en que más cambian.',
    items: ['3 evaluaciones clínicas', '3 limpiezas profesionales', 'Radiografía panorámica digital', 'Ortodoncia a tiempo si la necesita'],
  },
];

export const CARE_INCLUDES = [
  '2 limpiezas profesionales al año',
  'Radiografías sin costo',
  'Consultas ilimitadas',
  '1 urgencia dental al año',
  '15% a 50% de descuento en tratamientos',
];

export const CARE_DISCOUNTS = [
  ['50%', 'Preventivos', 'Limpiezas adicionales, selladores'],
  ['30%', 'Restaurativos', 'Resinas, extracciones simples'],
  ['20%', 'Estéticos', 'Blanqueamiento, endodoncia, prótesis'],
  ['15%', 'Especialidades', 'Ortodoncia, implantes, carillas'],
];

export const REVIEWS = [
  {
    name: 'Estefanía Intriago',
    text: 'Estoy súper agradecida con el trabajo que ha hecho con mis dientes. Se ha portado increíble, con mucha paciencia y dedicación.',
  },
  {
    name: 'Jacqueline Sanchez Vilchez',
    text: 'Me explicaron cada paso del procedimiento con claridad, lo que me brindó mucha confianza. ¡Quedé súper feliz! 10/10',
  },
  {
    name: 'Elva Rosa Vinces',
    text: 'Excelente profesional y gran ser humano, muy acertado en sus diagnósticos, soluciones rápidas y con buen resultado.',
  },
];

export const FAQS = [
  {
    q: '¿Me va a doler?',
    a: 'Antes de cada paso te contamos qué vas a sentir. Los procedimientos que lo requieren se hacen con anestesia local, y si necesitas una pausa, paramos. Tú marcas el ritmo.',
  },
  {
    q: '¿Cuánto cuesta mi tratamiento?',
    a: 'Depende de lo que necesites. Después de la evaluación te damos un presupuesto detallado por etapas, sin compromiso. Si tienes la membresía Odontofas Care, ya cuentas con consultas ilimitadas y descuentos de 15% a 50%.',
  },
  {
    q: '¿Cómo puedo pagar?',
    a: 'Aceptamos Yape, Plin, transferencia bancaria y tarjeta.',
  },
  {
    q: '¿Atienden a niños?',
    a: 'Sí. Tenemos un programa de prevención y limpieza para niños de 4 a 14 años, y evaluamos a tiempo si necesitan ortodoncia.',
  },
  {
    q: '¿Qué hago si tengo una urgencia?',
    a: 'Escríbenos por WhatsApp contándonos qué sientes y te indicamos cómo proceder. La membresía Odontofas Care incluye 1 urgencia al año.',
    cta: 'urgencia',
  },
];
