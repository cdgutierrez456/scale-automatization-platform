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
        "Lanzar un ecommerce ya no requiere meses de desarrollo ni inversiones millonarias. Construimos tu tienda a la medida —no una plantilla genérica— para que estés vendiendo en internet en tiempo récord, con todo lo que necesitas para gestionar productos, recibir pagos y crecer desde el primer día.",
      stats: [
        { value: "24/7", label: "tu tienda vende sin horarios ni local" },
        { value: "Tiempo récord", label: "de la idea a estar vendiendo online" },
        { value: "Menor comisión", label: "tarifa de pago preferencial por venta" },
        { value: "0", label: "costos ocultos, sin sorpresas" },
      ],
      sections: [
        {
          title: "Tienda profesional y a tu medida",
          body: "Diseñamos y construimos tu ecommerce con la identidad visual de tu marca, optimizado para que tus clientes compren fácil desde el celular, la tablet o el computador.",
        },
        {
          title: "Panel administrativo completo",
          body: "Tú tienes el control total: crea y organiza productos por categorías, gestiona inventario, consulta pedidos y sigue tus ventas sin necesidad de conocimientos técnicos.",
        },
        {
          title: "Pago simple, sin abandonos",
          body: "Tus clientes completan la compra en pocos pasos, sin fricciones. Comprar es tan fácil como un clic, y eso significa menos carritos abandonados.",
        },
        {
          title: "Tarifa preferencial y tu dinero directo",
          body: "Comisión negociada con nuestra pasarela asociada, menor que la estándar del mercado: más ganancia neta por venta. El dinero se reembolsa directo a la cuenta del negocio, sin intermediarios.",
        },
        {
          title: "Inversión accesible, no un lujo",
          body: "Un solo pago inicial para crear y poner en marcha tu tienda, más una cuota mensual accesible con hosting, mantenimiento, soporte y actualizaciones. Empiezas a vender primero y creces con las ganancias de tu propio negocio.",
        },
      ],
      deliverables: [
        "Tienda online a la medida con tu identidad de marca",
        "Panel para productos, inventario y pedidos",
        "Pasarela de pagos con tarifa preferencial",
        "Reembolsos directos a tu cuenta bancaria",
        "Hosting, mantenimiento y soporte técnico incluidos",
        "Datos de ventas y comportamiento de tus clientes",
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
          title: "Publica desde Telegram",
          body: "Crea un post con solo enviar un mensaje de Telegram: tú o tu equipo escriben la idea y nosotros la convertimos en una publicación lista, programada en los horarios óptimos de tu audiencia.",
        },
        {
          title: "Costos claros y sin sorpresas",
          body: "Un único costo de creación del servicio y una suscripción mensual. Sin cargos ocultos ni por publicación: sabes exactamente lo que pagas.",
        },
      ],
      deliverables: [
        "Calendario editorial de 3–5 publicaciones semanales",
        "Contenido (texto e imagen) generado con IA en tu tono",
        "Publicación automática en horarios de mayor engagement",
        "Creación de posts a partir de un mensaje de Telegram",
        "Reporte de recomendaciones de publicación según tu perfil",
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
