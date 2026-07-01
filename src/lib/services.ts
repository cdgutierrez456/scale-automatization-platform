export type ServiceSlug = "ecommerce" | "linkedin" | "pasarela-pagos";

export interface Service {
  slug: ServiceSlug;
  tag: string;
  iconKey: "store" | "linkedin" | "payment";
  headline: string;
  quote: string;
  shortDesc: string;
  longDesc: string;
  bullets: string[];
  badges: [string, string];
  accent: string;
  featured: boolean;
  detail: {
    intro: string;
    // ponytail: optional blocks, only LinkedIn fills them; render is conditional
    stats?: { value: string; label: string }[];
    audiences?: { title: string; subtitle: string; benefits: string[] }[];
    sections: { title: string; body: string }[];
    deliverables: string[];
    cta: string;
  };
}

const serviceDefs: Service[] = [
  {
    slug: "ecommerce",
    tag: "Ecommerce",
    iconKey: "store",
    headline: "Ecommerce en tiempo récord",
    quote: "Tu tienda online lista para vender",
    shortDesc:
      "Ecommerce completo con diseño profesional, catálogo, carrito y pasarela de pagos integrada.",
    longDesc:
      "Construimos tu tienda online de extremo a extremo: diseño a medida, catálogo, carrito, pagos y panel de administración intuitivo. Pensado para vender desde el día uno.",
    bullets: [
      "Diseño profesional a medida",
      "Catálogo y carrito optimizados",
      "Pasarela de pagos integrada",
      "Panel admin completo",
    ],
    badges: ["Inversión mínima", "Tiempo récord"],
    accent: "var(--blue)",
    featured: true,
    detail: {
      intro:
        "Tu tienda online lista para vender. Diseño profesional, experiencia de compra fluida y todas las piezas que necesitas para escalar.",
      sections: [
        {
          title: "Diseño y experiencia",
          body: "Interfaz adaptada a tu marca, optimizada para conversión en mobile y desktop. Cargas rápidas y navegación clara.",
        },
        {
          title: "Catálogo y operación",
          body: "Gestión sencilla de productos, variantes, inventarios y precios desde un panel pensado para no técnicos.",
        },
        {
          title: "Pagos y envíos",
          body: "Pasarela integrada con tarifas preferenciales y reglas de envío configurables por ciudad o peso.",
        },
      ],
      deliverables: [
        "Tienda online con dominio propio",
        "Panel de administración",
        "Pasarela de pagos conectada",
        "Capacitación para tu equipo",
      ],
      cta: "Quiero mi tienda online",
    },
  },
  {
    slug: "linkedin",
    tag: "Automatización",
    iconKey: "linkedin",
    headline: "Automatización de Publicaciones en LinkedIn",
    quote: "El 80% de los leads B2B nacen en LinkedIn. Estate ahí, todos los días.",
    shortDesc:
      "Publicamos por ti 3–5 veces por semana en los horarios de mayor engagement. Presencia constante que crece seguidores 7x más rápido, sin dedicarle horas.",
    longDesc:
      "LinkedIn decide negocios: 1.300M de miembros y 4 de cada 5 impulsan decisiones de compra. El problema nunca es el canal, es la consistencia. Automatizamos la publicación para que tu marca esté presente en los horarios óptimos, con contenido asistido por IA, mientras tú te dedicas al negocio.",
    bullets: [
      "Crecimiento de seguidores 7x más rápido",
      "80% de los leads B2B vienen de LinkedIn",
      "Costo por lead 28% menor que Google Ads",
      "3–5 posts/semana en horarios óptimos, sin esfuerzo",
    ],
    badges: ["Seguidores 7x más rápido", "80% de leads B2B"],
    accent: "var(--violet)",
    featured: true,
    detail: {
      intro:
        "Publicar con frecuencia es el factor #1 de crecimiento en LinkedIn — y la barrera es el tiempo: 5 a 10 horas por semana y persona. La automatización elimina esa barrera: consistencia garantizada en los horarios donde tu audiencia está activa, con contenido generado por IA y distribuido en varias plataformas a la vez.",
      stats: [
        { value: "1.300M", label: "miembros en LinkedIn" },
        { value: "80%", label: "de leads B2B nacen aquí" },
        { value: "7x", label: "crecimiento de seguidores" },
        { value: "-28%", label: "costo por lead vs Google Ads" },
      ],
      audiences: [
        {
          title: "Para profesionales",
          subtitle: "Conviértete en el referente de tu industria",
          benefits: [
            "561% más alcance que las páginas de empresa",
            "8x más engagement desde tu perfil personal",
            "45% más oportunidades de venta con actividad constante",
            "3.2x más visitas a tu perfil al publicar seguido",
          ],
        },
        {
          title: "Para empresas",
          subtitle: "El canal B2B con mayor retorno demostrable",
          benefits: [
            "Seguidores 7x más rápido y el doble de engagement por post",
            "80% de los leads B2B provienen de LinkedIn",
            "Costo por lead 28% menor que Google Ads",
            "Frena la caída del alcance orgánico (−60% desde 2024)",
          ],
        },
      ],
      sections: [
        {
          title: "Contenido con IA en tu tono",
          body: "Generamos textos e imágenes con IA (Gemini, GPT) adaptados a tu marca. Carruseles, video y texto largo: los formatos de mayor engagement, listos sin trabajo manual.",
        },
        {
          title: "Horarios óptimos automáticos",
          body: "Publicación programada de martes a jueves, 10–11 AM en la zona horaria de tu audiencia. La consistencia importa más que el volumen, y nosotros la garantizamos.",
        },
        {
          title: "Distribución multicanal",
          body: "El mismo contenido adaptado y publicado a la vez en LinkedIn, Instagram, Facebook y Twitter desde un solo flujo, con métricas consolidadas por post y plataforma.",
        },
      ],
      deliverables: [
        "Calendario editorial de 3–5 publicaciones semanales",
        "Contenido (texto e imagen) generado con IA en tu tono",
        "Publicación automática en horarios de mayor engagement",
        "Distribución simultánea en LinkedIn, IG, Facebook y X",
        "Reporte de desempeño por post, formato y plataforma",
        "70–80% menos tiempo dedicado a gestionar publicaciones",
      ],
      cta: "Activar mi LinkedIn 24/7",
    },
  },
  {
    slug: "pasarela-pagos",
    tag: "Pagos",
    iconKey: "payment",
    headline: "Conexión con Pasarela de Pagos",
    quote: "Cobra en línea con tarifas preferenciales",
    shortDesc:
      "Conectamos tu sitio con nuestra pasarela aliada con tarifas de las más bajas del e-commerce colombiano.",
    longDesc:
      "Gracias a una alianza estratégica accedes a condiciones que normalmente solo tienen los grandes: tarifas bajas, integración rápida y liquidaciones transparentes.",
    bullets: [
      "Tarifas preferenciales",
      "Múltiples métodos de pago",
      "Integración rápida",
      "Liquidaciones transparentes",
    ],
    badges: ["Tarifas preferenciales", "Integración rápida"],
    accent: "#22C55E",
    featured: false,
    detail: {
      intro:
        "Cobra online con tarifas competitivas y todos los medios de pago relevantes en Colombia. Integración rápida y soporte real.",
      sections: [
        {
          title: "Alianza estratégica",
          body: "Accede a condiciones preferenciales gracias a nuestra alianza con una pasarela reconocida en el mercado.",
        },
        {
          title: "Medios de pago",
          body: "Tarjetas, PSE, Nequi, Daviplata y más. Una sola integración para cubrir a todos tus clientes.",
        },
        {
          title: "Liquidación y reportes",
          body: "Pagos puntuales y reportes claros para que sepas exactamente qué entra y cuándo.",
        },
      ],
      deliverables: [
        "Integración con tu sitio",
        "Configuración de métodos de pago",
        "Panel de transacciones",
        "Soporte continuo",
      ],
      cta: "Conectar mi pasarela",
    },
  },
];

// Orden de despliegue: izquierda, centro (destacado), derecha
export const services: Service[] = (
  ["pasarela-pagos", "ecommerce", "linkedin"] as ServiceSlug[]
).map((slug) => serviceDefs.find((s) => s.slug === slug)!);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
