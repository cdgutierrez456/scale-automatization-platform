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
    sections: { title: string; body: string }[];
    deliverables: string[];
    cta: string;
  };
}

export const services: Service[] = [
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
    featured: false,
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
    headline: "Automatización de LinkedIn",
    quote: "Tu marca siempre visible en LinkedIn",
    shortDesc:
      "Publicaciones automáticas para mantener presencia constante en LinkedIn sin esfuerzo manual.",
    longDesc:
      "Tu marca activa 24/7 sin que tengas que pensar en publicar. Programamos, automatizamos y mantenemos un flujo de contenido alineado a tu estrategia.",
    bullets: [
      "Publicaciones automáticas",
      "Presencia constante y profesional",
      "Sin esfuerzo manual",
      "Estrategia de contenido",
    ],
    badges: ["Automatización 24/7", "Sin esfuerzo manual"],
    accent: "var(--violet)",
    featured: true,
    detail: {
      intro:
        "Mantén una presencia profesional constante en LinkedIn sin dedicarle horas. Nosotros nos encargamos del flujo, tú del negocio.",
      sections: [
        {
          title: "Estrategia editorial",
          body: "Diseñamos un calendario alineado a tus objetivos: posicionamiento, autoridad, generación de leads.",
        },
        {
          title: "Automatización del flujo",
          body: "Publicaciones programadas, rotación de formatos y monitoreo de desempeño sin intervención manual.",
        },
        {
          title: "Métricas claras",
          body: "Reportes simples para entender qué contenido funciona y dónde duplicar la apuesta.",
        },
      ],
      deliverables: [
        "Calendario editorial mensual",
        "Publicación automática programada",
        "Reporte de desempeño",
        "Ajustes de estrategia",
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

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
