import type { LandingContent } from '@/types/landing';

// Single source of truth for the WhatsApp number used by every CTA that
// purchases or contacts. International format, digits only, no +.
// 54 (Argentina) + 9 (mobile) + 11 (Buenos Aires area) + 54930725.
const WHATSAPP_PHONE = '5491154930725';

function wa(message: string): string {
  const phone = WHATSAPP_PHONE.replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const landing: LandingContent = {
  meta: {
    title: 'Mora Sampaio — Entrenamiento',
    description: {
      es: 'Rutinas para ganar músculo, progresar y sentirte segura en el gym.',
      en: 'Training programs to build muscle, progress, and feel confident in the gym.',
    },
  },

  contact: {
    whatsapp: WHATSAPP_PHONE,
  },

  nav: {
    logo: 'Mora Sampaio',
    links: [
      { label: { es: 'Conoceme', en: 'About' }, href: '#conoceme' },
      { label: { es: 'Rutinas', en: 'Programs' }, href: '#rutinas' },
      { label: { es: 'Hábitos', en: 'Habits' }, href: '#habitos' },
      { label: { es: 'Empezar', en: 'Start' }, href: '#empezar' },
    ],
  },

  hero: {
    tag: {
      es: 'Mora Sampaio · Rutinas para mujeres',
      en: 'Mora Sampaio · Training for women',
    },
    title: { es: 'Tu cuerpo.\nTu ritmo.\nTu', en: 'Your body.\nYour pace.\nYour' },
    titleEmphasis: { es: 'transformación.', en: 'transformation.' },
    subtitleLines: [
      {
        es: 'Tres programas diseñados para ganar músculo, progresar en el entrenamiento y sentirte segura en el gym. Un espacio sin juicios, pensado para vos.',
        en: 'Three programs designed to build muscle, progress in your training and feel confident in the gym. A safe, judgment-free space built for you.',
      },
    ],
    ctas: [
      { label: { es: 'Ver programas', en: 'See programs' }, href: '#rutinas', variant: 'primary' },
      { label: { es: 'Conoceme', en: 'Meet Mora' }, href: '#conoceme', variant: 'outline' },
    ],
    badge: {
      value: '3',
      valueSuffix: { es: 'meses', en: 'months' },
      label: { es: 'para resultados reales y visibles', en: 'to real, visible results' },
    },
    photoLabel: {
      es: 'Tu foto entrenando va acá',
      en: 'Your training photo goes here',
    },
  },

  about: {
    label: { es: 'Conoceme', en: 'About me' },
    title: { es: 'Entrené todo lo que te da', en: "I've trained through everything" },
    titleEmphasis: { es: 'miedo.', en: 'you fear.' },
    subtitleLines: [
      {
        es: 'Entreno hace 5 años. Los primeros dos los pasé sin un plan claro, copiando rutinas de internet, frustrada porque los resultados no llegaban. Entonces decidí formarme.',
        en: "I've been training for 5 years. The first two I spent with no clear plan, copying workouts from the internet, frustrated that results weren't coming. So I decided to get certified.",
      },
    ],
    quote: {
      es: '"Sé lo que se siente entrar a un gimnasio sin saber qué hacer. Este programa es lo que me hubiera gustado tener ese día."',
      en: '"I know what it feels like to walk into a gym with no idea what to do. This program is what I wish I had that day."',
    },
    certs: [
      'Gualda Training International',
      'Alianza Latinoamericana de Instructores de Fitness y Deporte',
      'ISLA — Instituto Superior Latinoamericano',
    ],
    stats: [
      {
        num: { es: '5', en: '5' },
        label: {
          es: 'años de experiencia entrenando',
          en: 'years of training experience',
        },
      },
      {
        num: { es: '3', en: '3' },
        label: {
          es: 'programas completos listos para vos',
          en: 'complete programs ready for you',
        },
      },
      {
        num: { es: '3 meses', en: '3 months' },
        label: {
          es: 'para ver resultados reales',
          en: 'to see real results',
        },
      },
    ],
    photoLabel: {
      es: 'Tu foto de perfil va acá',
      en: 'Your profile photo goes here',
    },
    photoBadge: {
      es: 'Personal Trainer Certificada',
      en: 'Certified Personal Trainer',
    },
  },

  paradigm: {
    label: { es: 'Lo que nadie te dice', en: 'What nobody tells you' },
    title: {
      es: 'No necesitás una rutina larga.\nNecesitás una que',
      en: "You don't need a long routine.\nYou need one you'll",
    },
    titleEmphasis: { es: 'sostengas.', en: 'stick to.' },
    pillars: [
      {
        num: '01',
        title: { es: 'Técnica antes que peso', en: 'Technique before weight' },
        desc: {
          es: 'Cada ejercicio arranca aprendiendo el movimiento correcto. El peso viene después, cuando el cuerpo ya sabe qué tiene que hacer.',
          en: 'Each exercise starts by learning the correct movement pattern. Weight comes after, when your body already knows what to do.',
        },
      },
      {
        num: '02',
        title: { es: '30–45 minutos es suficiente', en: '30–45 minutes is enough' },
        desc: {
          es: 'La ciencia dice que entre 12 y 20 series por grupo muscular por semana es el rango óptimo. No necesitás horas — necesitás hacerlo bien.',
          en: "Science says 12–20 sets per muscle group per week is optimal. You don't need hours — you need to do it right.",
        },
      },
      {
        num: '03',
        title: { es: 'La constancia gana siempre', en: 'Consistency always wins' },
        desc: {
          es: 'Un día sin gym no arruina tu progreso. Un mes sin movimiento, sí. Lo más importante es el entrenamiento que hacés seguido.',
          en: "One day off doesn't ruin your progress. A month without movement does. The best workout is the one you do consistently.",
        },
      },
    ],
  },

  products: {
    label: { es: 'Los programas', en: 'The programs' },
    title: { es: 'Elegí tu', en: 'Choose your' },
    titleEmphasis: { es: 'punto de partida.', en: 'starting point.' },
    subtitle: {
      es: 'Tres programas diseñados para ganar músculo y progresar, sin importar desde dónde empezás. Todos efectivos, todos con mi respaldo. Un espacio seguro para entrenar.',
      en: "Three programs designed to build muscle and help you progress, no matter where you're starting from. All effective, all backed by me. A safe space to train.",
    },
    cards: [
      {
        slug: 'tu-primera-vez',
        stripePriceId: 'price_PLACEHOLDER_principiante',
        level: { es: 'Principiante', en: 'Beginner' },
        name: { es: 'Tu primera vez', en: 'Your first time' },
        desc: {
          es: 'Para las que nunca entrenaron o van esporádicamente. Sin miedo, sin juicios. Con técnica y estructura desde el día uno.',
          en: 'For those who have never trained or go sporadically. No fear, no judgment. With technique and structure from day one.',
        },
        includes: [
          {
            es: '3 días de entrenamiento detallados',
            en: '3 detailed training days',
          },
          {
            es: 'Rutina de calentamiento incluida',
            en: 'Warm-up routine included',
          },
          {
            es: 'Técnica y progresión explicada',
            en: 'Technique and progression explained',
          },
          {
            es: 'Guía de cardio y movimiento diario',
            en: 'Cardio & daily movement guide',
          },
        ],
        price: '19',
        photoVariant: 'rose',
        photoLabel: {
          es: 'Foto de principiante / primera vez',
          en: 'Beginner / first time photo',
        },
        ctaLabel: { es: 'Quiero este programa', en: 'I want this program' },
      },
      {
        slug: 'estoy-lista-para-mas',
        stripePriceId: 'price_PLACEHOLDER_intermedio',
        level: { es: 'Intermedio', en: 'Intermediate' },
        name: { es: 'Estoy lista para más', en: "I'm ready for more" },
        desc: {
          es: 'Para las que ya van 2–3 veces por semana pero quieren estructura, progresión real y resultados concretos.',
          en: 'For those already going 2–3 times a week but want real structure, progression, and concrete results.',
        },
        includes: [
          {
            es: '4 días de entrenamiento con volumen progresivo',
            en: '4 training days with progressive volume',
          },
          {
            es: 'Glúteos + tren superior + piernas + upper body',
            en: 'Glutes + upper body + legs + full upper',
          },
          {
            es: 'Series, reps y cargas orientativas',
            en: 'Sets, reps, and load guidance',
          },
          {
            es: 'Guía de progresión semana a semana',
            en: 'Week-by-week progression guide',
          },
        ],
        price: '35',
        photoVariant: 'lilac',
        photoLabel: {
          es: 'Foto de entrenamiento intermedio',
          en: 'Intermediate training photo',
        },
        ctaLabel: { es: 'Quiero este programa', en: 'I want this program' },
        featured: true,
        featuredLabel: { es: 'Más popular', en: 'Most popular' },
        levelColor: 'var(--lilac)',
      },
      {
        slug: 'entrena-como-yo',
        stripePriceId: 'price_PLACEHOLDER_challenge',
        level: {
          es: 'Avanzado · Challenge 8 semanas',
          en: 'Advanced · 8-Week Challenge',
        },
        name: { es: 'Entrena como yo', en: 'Train like me' },
        desc: {
          es: 'Mi rutina real. El Glute & Strength Challenge de 8 semanas con progresión de cargas, sesión 1 a 1 conmigo y recetas fit que uso en mi día a día.',
          en: 'My real routine. The 8-Week Glute & Strength Challenge with load progression, a 1-on-1 session with me, and the fit recipes I use daily.',
        },
        includes: [
          {
            es: 'Programa completo 8 semanas con progresión Double Progression',
            en: 'Full 8-week program with Double Progression system',
          },
          {
            es: 'Semana de descarga (deload) incluida',
            en: 'Deload week included',
          },
          {
            es: 'Sesión 1 a 1 online conmigo (30 min)',
            en: '1-on-1 online session with me (30 min)',
          },
          {
            es: 'Acceso a grupo privado del challenge',
            en: 'Access to private challenge group',
          },
          {
            es: '🎁 Bonus: recetas fit de mi día a día',
            en: '🎁 Bonus: my everyday fit recipes',
          },
        ],
        price: '59',
        photoVariant: 'sand',
        photoLabel: {
          es: 'Tu foto del challenge / entrenamiento real',
          en: 'Your challenge / real training photo',
        },
        ctaLabel: { es: 'Quiero el challenge', en: 'I want the challenge' },
        levelColor: '#7A5C3A',
      },
    ],
    bundle: {
      stripePriceId: 'price_PLACEHOLDER_bundle',
      badge: { es: 'Mejor precio', en: 'Best value' },
      title: {
        es: 'Bundle: programa + recetas fit',
        en: 'Bundle: program + fit recipes',
      },
      desc: {
        es: 'Elegí cualquiera de los 3 programas y sumale la guía de 10 recetas fit altas en proteínas que uso en mi día a día. Recetas simples, ricas y pensadas para acompañar tu entrenamiento y ayudarte a alcanzar tu objetivo.',
        en: 'Choose any of the 3 programs and add my guide of 10 high-protein fit recipes that I use daily. Simple, delicious recipes designed to complement your training and help you reach your goals.',
      },
      includes: [
        {
          es: 'El programa que elijas (principiante, intermedio o challenge)',
          en: 'Your chosen program (beginner, intermediate or challenge)',
        },
        {
          es: '10 recetas fit altas en proteínas',
          en: '10 high-protein fit recipes',
        },
        {
          es: 'Desayunos, almuerzos, cenas y snacks que uso yo',
          en: 'Breakfasts, lunches, dinners & snacks I use daily',
        },
      ],
      priceStrike: { es: 'Desde $29+ por separado', en: 'From $29+ separately' },
      priceLabel: { es: 'desde 25', en: 'from 25' },
      priceSuffix: { es: 'programa + recetas', en: 'program + recipes' },
      ctaLabel: { es: 'Quiero el bundle', en: 'I want the bundle' },
    },
  },

  preview: {
    label: { es: 'Un vistazo', en: 'A sneak peek' },
    title: { es: 'Lo que te esperá', en: "What's waiting for you" },
    titleEmphasis: { es: 'adentro.', en: 'inside.' },
    subtitle: {
      es: 'Esto es solo una muestra. El programa completo — con cada ejercicio, serie, progresión y detalle — lo recibís al comprar.',
      en: 'This is just a preview. The full program — every exercise, set, progression, and detail — is yours when you purchase.',
    },
    cards: [
      {
        stripePriceId: 'price_PLACEHOLDER_principiante',
        level: { es: 'Principiante', en: 'Beginner' },
        name: { es: 'Tu primera vez', en: 'Your first time' },
        meta: [
          { es: '3–4 días/semana', en: '3–4 days/week' },
          { es: '30–45 min por sesión', en: '30–45 min per session' },
        ],
        days: [
          { es: 'Día 1 — Piernas y glúteos', en: 'Day 1 — Legs & glutes' },
          { es: 'Día 2 — Tren superior', en: 'Day 2 — Upper body' },
          { es: 'Día 3 — Full body', en: 'Day 3 — Full body' },
        ],
        extra: {
          es: '+ calentamiento, técnica y guía de cardio',
          en: '+ warm-up, technique & cardio guide',
        },
        ctaLabel: {
          es: 'Quiero este programa — $19',
          en: 'I want this program — $19',
        },
        variant: 'rose',
      },
      {
        stripePriceId: 'price_PLACEHOLDER_intermedio',
        level: { es: 'Intermedio', en: 'Intermediate' },
        name: { es: 'Estoy lista para más', en: "I'm ready for more" },
        meta: [
          { es: '4–5 días/semana', en: '4–5 days/week' },
          { es: 'Más volumen y fuerza', en: 'More volume & strength' },
        ],
        days: [
          { es: 'Día 1 — Glúteos (enfoque)', en: 'Day 1 — Glutes (focus)' },
          { es: 'Día 2 — Tren superior', en: 'Day 2 — Upper body' },
          { es: 'Día 3 — Piernas', en: 'Day 3 — Legs' },
          { es: 'Día 4 — Upper body', en: 'Day 4 — Upper body' },
        ],
        extra: {
          es: '+ guía de progresión semana a semana',
          en: '+ week-by-week progression guide',
        },
        ctaLabel: {
          es: 'Quiero este programa — $35',
          en: 'I want this program — $35',
        },
        variant: 'lilac',
        featured: true,
        levelColor: 'var(--lilac)',
      },
      {
        stripePriceId: 'price_PLACEHOLDER_challenge',
        level: {
          es: 'Avanzado · 8 semanas',
          en: 'Advanced · 8 weeks',
        },
        name: { es: 'Entrena como yo', en: 'Train like me' },
        meta: [
          { es: '5 días/semana', en: '5 days/week' },
          {
            es: 'Glute & Strength Challenge',
            en: 'Glute & Strength Challenge',
          },
        ],
        days: [
          { es: 'Lun & Vie — Glúteos', en: 'Mon & Fri — Glutes' },
          {
            es: 'Mar & Jue — Espalda + hombros + core',
            en: 'Tue & Thu — Back + shoulders + core',
          },
          { es: 'Mié — Piernas', en: 'Wed — Legs' },
        ],
        extra: {
          es: '+ sesión 1:1, progresión, deload y recetas',
          en: '+ 1:1 session, progression, deload & recipes',
        },
        ctaLabel: { es: 'Quiero el challenge — $59', en: 'I want the challenge — $59' },
        variant: 'sand',
        levelColor: '#7A5C3A',
      },
    ],
  },

  habits: {
    label: { es: 'El extra que cambia todo', en: 'The extra that changes everything' },
    title: { es: 'Moverse es gratis.\nY es', en: "Moving is free.\nAnd it's" },
    titleEmphasis: {
      es: 'lo más importante.',
      en: 'the most important thing.',
    },
    quote: {
      es: '"Al principio puede ser complicado. Pero ahora es mi parte favorita del día."',
      en: '"At first it can feel hard. But now it\'s my favorite part of the day."',
    },
    tips: [
      {
        text: {
          es: 'Stack de hábitos: cuando el movimiento entra en tu rutina diaria, el entrenamiento deja de sentirse como un esfuerzo extra.',
          en: 'Habit stacking: when movement becomes part of your daily routine, training stops feeling like extra effort.',
        },
      },
      {
        text: {
          es: 'Si un día no podés ir al gym, no pasa nada. Pero moverse debería ser no negociable — aunque sean 20 minutos.',
          en: "If you can't make it to the gym one day, that's fine. But moving should be non-negotiable — even if it's just 20 minutes.",
        },
      },
    ],
  },

  timeline: {
    label: { es: 'La promesa concreta', en: 'The concrete promise' },
    title: { es: 'Qué podés esperar,', en: 'What to expect,' },
    titleEmphasis: { es: 'y cuándo.', en: 'and when.' },
    steps: [
      {
        dot: '1',
        time: { es: 'Semana 1–2', en: 'Week 1–2' },
        title: { es: 'Aprendizaje', en: 'Learning' },
        desc: {
          es: 'Empezás a entender los movimientos. El gym ya no se siente tan ajeno.',
          en: 'You start understanding the movements. The gym no longer feels foreign.',
        },
      },
      {
        dot: '2',
        time: { es: 'Semana 3–6', en: 'Week 3–6' },
        title: { es: 'Primeras adaptaciones', en: 'First adaptations' },
        desc: {
          es: 'Más fuerte, más coordinada. El sistema nervioso ya aprendió los patrones.',
          en: 'Stronger, more coordinated. Your nervous system has learned the patterns.',
        },
      },
      {
        dot: '3',
        time: { es: 'Mes 2', en: 'Month 2' },
        title: { es: 'La rutina se instala', en: 'The routine is set' },
        desc: {
          es: 'Ir al gym ya no es un esfuerzo. Empieza a ser parte de quién sos.',
          en: "Going to the gym is no longer effort. It's starting to be part of who you are.",
        },
      },
      {
        dot: '4',
        time: { es: 'Mes 3', en: 'Month 3' },
        title: { es: 'Resultados visibles', en: 'Visible results' },
        desc: {
          es: 'Cambios reales en tonificación, composición y energía.',
          en: 'Real changes in tone, body composition, and energy.',
        },
      },
    ],
  },

  footerCta: {
    label: { es: 'El primer paso', en: 'The first step' },
    title: {
      es: 'Si no te comprometés con\nvos misma, nadie más\nlo va a hacer. Pero podés\nempezar',
      en: "If you don't commit to\nyourself, nobody else\nwill. But you can start",
    },
    titleEmphasis: { es: 'hoy.', en: 'today.' },
    subtitle: {
      es: 'No necesitás estar lista. No necesitás tener todo claro. Solo necesitás aparecer. Lo demás lo hacemos juntas.',
      en: "You don't need to be ready. You don't need to have it all figured out. You just need to show up. We'll do the rest together.",
    },
    cta: {
      label: {
        es: 'Escribime por WhatsApp',
        en: 'Message me on WhatsApp',
      },
      href: wa(
        '¡Hola Mora! Me gustaría empezar pero no tengo claro cuál programa elegir. ¿Me ayudás?',
      ),
      variant: 'primary',
    },
    signoff: '— Mora',
  },
};
