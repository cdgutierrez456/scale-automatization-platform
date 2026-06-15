"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";
import {
  IconArrow,
  IconCheck,
  IconClock,
  IconDollar,
  IconLinkedIn,
  IconMail,
  IconMap,
  IconPayment,
  IconPhone,
  IconSettings,
  IconShield,
  IconStar,
  IconStore,
  IconTrendingUp,
  IconZap,
} from "@/components/icons";

const serviceIcon = (key: string, size = 22) => {
  switch (key) {
    case "store":
      return <IconStore size={size} />;
    case "linkedin":
      return <IconLinkedIn size={size} />;
    case "payment":
      return <IconPayment size={size} />;
    default:
      return null;
  }
};

// ─────────────────────────────────────────────
// HERO ORB — Animated visual
// ─────────────────────────────────────────────

function HeroOrb() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "relative", width: "100%", maxWidth: 420, aspectRatio: "1", margin: "0 auto" }}
    >
      <div style={{ position: "absolute", inset: "-15%", borderRadius: "50%", background: "radial-gradient(circle, rgba(147,51,234,0.14) 0%, transparent 65%)", animation: "pulse-glow 5s ease-in-out infinite" }} />
      <div style={{ position: "absolute", inset: "5%", borderRadius: "50%", border: "1px solid rgba(147,51,234,0.22)", animation: "spin-cw 28s linear infinite" }}>
        <div style={{ position: "absolute", top: "-5px", left: "50%", transform: "translateX(-50%)", width: 10, height: 10, borderRadius: "50%", background: "var(--blue)", boxShadow: "0 0 14px var(--blue)" }} />
      </div>
      <div style={{ position: "absolute", inset: "13%", borderRadius: "50%", border: "1px solid rgba(192,132,252,0.18)", animation: "spin-ccw 20s linear infinite" }}>
        <div style={{ position: "absolute", bottom: "-4px", right: "22%", width: 8, height: 8, borderRadius: "50%", background: "var(--violet)", boxShadow: "0 0 10px var(--violet)" }} />
      </div>
      <div style={{ position: "absolute", inset: "21%", borderRadius: "50%", border: "1px dashed rgba(147,51,234,0.1)", animation: "spin-cw 14s linear infinite" }} />
      {/* Core — logo en el centro */}
      <div
        style={{
          position: "absolute",
          inset: "27%",
          borderRadius: "50%",
          background: "radial-gradient(circle at 33% 33%, #3B0764 0%, #3B0764 65%, #0F0F1A 100%)",
          boxShadow: "0 0 60px rgba(147,51,234,0.6), 0 0 120px rgba(147,51,234,0.22), inset 0 0 40px rgba(255,255,255,0.06)",
          animation: "pulse-glow 6s ease-in-out infinite",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "14%",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/android-chrome-512x512.png"
          alt="Scale Automatization"
          style={{ width: "100%", height: "100%", objectFit: "contain", filter: "drop-shadow(0 6px 24px rgba(147,51,234,0.45))" }}
        />
      </div>
      <div style={{ position: "absolute", bottom: "12%", left: "-6%", background: "rgba(12,12,24,0.92)", backdropFilter: "blur(16px)", border: "1px solid rgba(147,51,234,0.25)", borderRadius: "1rem", padding: "0.875rem 1.125rem", animation: "float-y 7s ease-in-out infinite", minWidth: 148 }}>
        <div style={{ fontSize: "0.6rem", color: "var(--t3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 5 }}>Transacciones</div>
        <div className="font-sora" style={{ fontSize: "1.375rem", fontWeight: 800, color: "var(--t1)", lineHeight: 1 }}>+$2.4M</div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5 }}>
          <span style={{ color: "#22C55E", fontSize: "0.75rem", fontWeight: 600 }}>▲ 18.4%</span>
          <span style={{ color: "var(--t3)", fontSize: "0.75rem" }}>este mes</span>
        </div>
      </div>
      <div style={{ position: "absolute", top: "13%", right: "-4%", background: "rgba(192,132,252,0.1)", backdropFilter: "blur(16px)", border: "1px solid rgba(192,132,252,0.3)", borderRadius: "100px", padding: "0.5rem 0.875rem", display: "flex", alignItems: "center", gap: 6, animation: "float-y 9s ease-in-out infinite 2s" }}>
        <span style={{ color: "var(--violet)" }}><IconZap size={13} /></span>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--t1)", whiteSpace: "nowrap" }}>Listo en días</span>
      </div>
      {([
        { top: "6%",  left: "20%",  size: 5, delay: "0s",   color: "var(--blue)" },
        { top: "72%", right: "8%",  size: 4, delay: "1.5s", color: "var(--violet)" },
        { top: "42%", left: "1%",   size: 3, delay: "3s",   color: "var(--blue)" },
      ] as Array<{ top: string; left?: string; right?: string; size: number; delay: string; color: string }>).map((p, i) => (
        <div key={i} style={{ position: "absolute", top: p.top, left: p.left, right: p.right, width: p.size, height: p.size, borderRadius: "50%", background: p.color, animation: `particle-drift ${6 + i}s ease-in-out infinite ${p.delay}`, opacity: 0.7 }} />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "5rem 1.5rem 4rem" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "70%", aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "50%", aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle, rgba(192,132,252,0.08) 0%, transparent 65%)" }} />
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.025 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#9333EA" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-inner" style={{ width: "100%", position: "relative", zIndex: 1 }}>
        <div className="hero-grid">
          <div>
            <div data-aos data-delay="1" style={{ marginBottom: "1.5rem" }}>
              <span className="section-tag"><IconZap size={10} />Tecnología accesible para todos</span>
            </div>
            <h1 data-aos data-delay="2" className="font-sora" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: "1.5rem", color: "var(--t1)" }}>
              Escala tu negocio{" "}
              <span className="text-gradient">digital</span>{" "}
              sin complicaciones
            </h1>
            <p data-aos data-delay="3" style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "var(--t2)", maxWidth: 520, marginBottom: "2.5rem" }}>
              Creamos tu ecommerce, automatizamos tus procesos y conectamos tu pasarela de pagos. Todo con{" "}
              <strong style={{ color: "var(--t1)", fontWeight: 600 }}>inversión mínima</strong>{" "}y resultados reales.
            </p>
            <div data-aos data-delay="4" className="hero-cta-row">
              <a href="#servicios" className="btn btn-blue">Ver servicios <IconArrow /></a>
              <a href="#contacto" className="btn btn-outline">Contáctanos</a>
            </div>
            <div data-aos data-delay="5" className="trust-row">
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ display: "flex" }}>{[...Array(5)].map((_, i) => <span key={i} style={{ color: "#FBBF24" }}><IconStar /></span>)}</div>
                <span style={{ fontSize: "0.8rem", color: "var(--t2)", fontWeight: 500 }}>Proyectos entregados</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#22C55E" }}><IconShield size={13} /></span>
                <span style={{ fontSize: "0.8rem", color: "var(--t2)", fontWeight: 500 }}>Transacciones 100% seguras</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "var(--blue)" }}><IconClock size={13} /></span>
                <span style={{ fontSize: "0.8rem", color: "var(--t2)", fontWeight: 500 }}>Entrega en días</span>
              </div>
            </div>
          </div>

          <div data-aos data-delay="3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <HeroOrb />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// SERVICIOS
// ─────────────────────────────────────────────

function Servicios() {
  return (
    <section id="servicios" style={{ padding: "6rem 1.5rem" }}>
      <div className="section-inner">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div data-aos style={{ marginBottom: "1rem" }}><span className="section-tag"><IconStore size={10} />Servicios</span></div>
          <h2 data-aos data-delay="1" className="font-sora" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
            Todo lo que necesitas para <span className="text-gradient">crecer</span>
          </h2>
          <p data-aos data-delay="2" style={{ color: "var(--t2)", fontSize: "1rem", maxWidth: 520, margin: "0 auto" }}>
            Soluciones digitales completas. Explora cada servicio para conocer en detalle qué incluye.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              data-aos
              data-delay={String(i + 1)}
              className={s.featured ? "glass-card-featured" : "glass-card"}
              style={{ padding: "2.25rem", position: "relative", overflow: "hidden", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}
            >
              {s.featured && (
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--blue), var(--violet))" }} />
              )}
              <div style={{ width: 52, height: 52, borderRadius: "0.875rem", background: s.featured ? "var(--blue-dim)" : "rgba(255,255,255,0.04)", border: `1px solid ${s.featured ? "rgba(147,51,234,0.25)" : "var(--b1)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: s.accent, marginBottom: "1.5rem" }}>
                {serviceIcon(s.iconKey)}
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <span className="section-tag" style={{ fontSize: "0.6rem" }}>{s.tag}</span>
              </div>
              <h3 className="font-sora" style={{ fontSize: "1.375rem", fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "-0.02em", lineHeight: 1.3 }}>{s.headline}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--blue)", lineHeight: 1.65, fontStyle: "italic", marginBottom: "1rem", fontWeight: 500 }}>&ldquo;{s.quote}&rdquo;</p>
              <p style={{ fontSize: "0.9375rem", color: "var(--t2)", lineHeight: 1.7, marginBottom: "1.5rem" }}>{s.shortDesc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.75rem" }}>
                {s.bullets.slice(0, 3).map((b, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.875rem", color: "var(--t1)" }}>
                    <span style={{ color: s.accent, flexShrink: 0 }}><IconCheck size={14} /></span>{b}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8, color: s.accent, fontSize: "0.875rem", fontWeight: 600 }}>
                Ver detalle <IconArrow size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// VENTAJAS — Bento Grid
// ─────────────────────────────────────────────

function Ventajas() {
  const items = [
    { icon: <IconDollar size={22} />,     title: "Inversión mínima",             body: "Accede a soluciones digitales de calidad sin presupuestos corporativos. Tecnología premium al alcance de todos.", wide: true,  accent: "var(--blue)"   },
    { icon: <IconClock size={22} />,      title: "Ecommerce en días, no meses",  body: "Tu tienda online lista para vender en tiempo récord. Sin demoras ni procesos interminables.",                   wide: true,  accent: "var(--violet)" },
    { icon: <IconTrendingUp size={22} />, title: "Tarifas preferenciales",       body: "Tarifas de transacción de las más bajas del e-commerce colombiano.",                                            wide: false, accent: "#22C55E"       },
    { icon: <IconShield size={22} />,     title: "100% transacciones seguras",   body: "Cada pago procesado con los más altos estándares de seguridad y verificación.",                                 wide: true,  accent: "var(--blue)"   },
    { icon: <IconPhone size={22} />,      title: "Soporte continuo",             body: "Acompañamiento técnico real, no tickets sin respuesta ni chatbots.",                                            wide: false, accent: "var(--violet)" },
    { icon: <IconZap size={22} />,        title: "Automatización 24/7",          body: "Tus procesos trabajando sin parar, sin intervención manual constante.",                                         wide: true,  accent: "#FBBF24"       },
    { icon: <IconTrendingUp size={22} />, title: "Escalabilidad sin límites",    body: "Crece sin preocuparte por la infraestructura técnica.",                                                         wide: false, accent: "var(--blue)"   },
    { icon: <IconSettings size={22} />,   title: "Panel admin intuitivo",        body: "Gestiona tu negocio desde un panel claro, rápido y fácil de usar.",                                            wide: false, accent: "var(--violet)" },
  ];

  return (
    <section id="ventajas" style={{ padding: "6rem 1.5rem", background: "rgba(255,255,255,0.01)", position: "relative" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />

      <div className="section-inner">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div data-aos style={{ marginBottom: "1rem" }}><span className="section-tag"><IconZap size={10} />Ventajas</span></div>
          <h2 data-aos data-delay="1" className="font-sora" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
            ¿Por qué elegir <span className="text-gradient">Scale Automatization?</span>
          </h2>
          <p data-aos data-delay="2" style={{ color: "var(--t2)", fontSize: "1rem", maxWidth: 480, margin: "0 auto" }}>
            Diseñado para que cualquier negocio compita en el mundo digital sin barreras.
          </p>
        </div>

        <div className="bento-grid">
          {items.map((item, i) => (
            <div key={i} data-aos data-delay={String((i % 4) + 1)}
              className={`bento-cell ${item.wide ? "bento-wide" : ""}`}>
              <div style={{ width: 44, height: 44, borderRadius: "0.75rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: item.accent, marginBottom: "1.25rem" }}>
                {item.icon}
              </div>
              <h3 className="font-sora" style={{ fontSize: "1.0625rem", fontWeight: 700, marginBottom: "0.625rem", letterSpacing: "-0.01em" }}>{item.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--t2)", lineHeight: 1.65 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PASARELA
// ─────────────────────────────────────────────

function Pasarela() {
  const features = [
    { icon: <IconDollar size={18} />,     label: "Tarifas competitivas",        desc: "De las más bajas en el mercado colombiano."     },
    { icon: <IconShield size={18} />,     label: "Transacciones verificadas",   desc: "Seguridad end-to-end en cada operación."        },
    { icon: <IconPayment size={18} />,    label: "Múltiples métodos",           desc: "Tarjetas, PSE, Nequi, Daviplata y más."        },
    { icon: <IconZap size={18} />,        label: "Integración rápida",          desc: "Tu sitio conectado en horas, no semanas."       },
    { icon: <IconTrendingUp size={18} />, label: "Liquidaciones transparentes", desc: "Reportes claros y pagos puntuales."             },
    { icon: <IconSettings size={18} />,   label: "Panel de control",            desc: "Monitorea cada transacción en tiempo real."     },
  ];

  const methods = [
    { name: "Visa",       color: "#1A1F71", letter: "V"   },
    { name: "Mastercard", color: "#EB001B", letter: "M"   },
    { name: "PSE",        color: "#00843D", letter: "PSE" },
    { name: "Nequi",      color: "#6B0FA8", letter: "N"   },
    { name: "Daviplata",  color: "#E40520", letter: "D"   },
  ];

  return (
    <section id="pasarela" style={{ padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(147,51,234,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div data-aos style={{ marginBottom: "1rem" }}><span className="section-tag"><IconPayment size={12} />Pasarela de Pagos</span></div>
          <h2 data-aos data-delay="1" className="font-sora" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1.25rem" }}>
            Pagos seguros con tarifas que <span className="text-gradient">impulsan tu negocio</span>
          </h2>
          <p data-aos data-delay="2" style={{ color: "var(--t2)", fontSize: "1rem", maxWidth: 580, margin: "0 auto" }}>
            Nuestra alianza estratégica con una pasarela reconocida nos permite ofrecerte condiciones preferenciales difíciles de encontrar en el mercado.
          </p>
        </div>

        <div data-aos data-delay="1" style={{ background: "linear-gradient(145deg, #1A1130 0%, #0F0F1A 100%)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: "2rem", padding: "clamp(1.75rem,4vw,3.5rem)", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(circle at 80% 20%, rgba(147,51,234,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, rgba(147,51,234,0.5), transparent)" }} />

          <div className="pasarela-grid">
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={i} data-aos data-delay={String(i + 1)}
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "1.25rem", padding: "1.25rem" }}>
                  <div style={{ color: "var(--blue)", marginBottom: "0.75rem" }}>{f.icon}</div>
                  <div className="font-sora" style={{ fontSize: "0.9375rem", fontWeight: 700, marginBottom: "0.375rem" }}>{f.label}</div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--t2)", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem" }}>
              <div>
                <div className="font-sora" style={{ fontSize: "clamp(2.5rem,6vw,5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>
                  <span className="text-gradient">Tarifas</span>
                </div>
                <div className="font-sora" style={{ fontSize: "clamp(1.25rem,3vw,2.5rem)", fontWeight: 700, color: "var(--t2)", letterSpacing: "-0.03em" }}>
                  preferenciales
                </div>
                <p style={{ color: "var(--t2)", fontSize: "0.9375rem", lineHeight: 1.65, marginTop: "1rem", maxWidth: 360 }}>
                  Obtén condiciones exclusivas gracias a nuestra alianza estratégica. Más ingresos, menos costos por transacción.
                </p>
              </div>
              <div>
                <p style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--t3)", marginBottom: "0.875rem" }}>
                  Métodos de pago aceptados
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {methods.map((m) => (
                    <div key={m.name} className="pay-badge">
                      <div style={{ width: 26, height: 16, borderRadius: 3, background: m.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.44rem", fontWeight: 800, color: "#fff", letterSpacing: "0.02em", flexShrink: 0 }}>
                        {m.letter}
                      </div>
                      {m.name}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                <span className="security-badge"><IconShield size={13} /> SSL Seguro</span>
                <span className="security-badge"><IconCheck size={13} /> PCI Compliant</span>
                <span className="security-badge"><IconShield size={13} /> Antifraude</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────

function About() {
  const values = [
    { icon: <IconDollar size={14} />, label: "Accesibilidad", color: "var(--blue)"   },
    { icon: <IconZap size={14} />,    label: "Velocidad",     color: "var(--violet)" },
    { icon: <IconShield size={14} />, label: "Seguridad",     color: "#22C55E"       },
    { icon: <IconStar size={14} />,   label: "Innovación",    color: "#FBBF24"       },
  ];

  return (
    <section id="about" style={{ padding: "6rem 1.5rem", position: "relative" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="section-inner">
        <div className="about-grid">
          <div data-aos>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--b1)", borderRadius: "2rem", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
              <div aria-hidden style={{ position: "absolute", top: 0, left: 0, width: "60%", height: "60%", background: "radial-gradient(circle at 0% 0%, rgba(147,51,234,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div className="stats-grid">
                {[
                  { n: "100%", label: "Proyectos exitosos",   color: "var(--blue)"   },
                  { n: "24/7", label: "Automatización activa", color: "var(--violet)" },
                  { n: "Días", label: "Tiempo de entrega",    color: "#22C55E"       },
                  { n: "🇨🇴",  label: "Desde Colombia",       color: "#FBBF24"       },
                ].map((s, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--b1)", borderRadius: "1.25rem", padding: "1.5rem", textAlign: "center" }}>
                    <div className="font-sora" style={{ fontSize: "2rem", fontWeight: 800, color: s.color, letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: "0.8125rem", color: "var(--t2)", marginTop: 8, lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "1.5rem", padding: "1.25rem", background: "var(--blue-dim)", border: "1px solid rgba(147,51,234,0.2)", borderRadius: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--blue), var(--violet))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="1.5" fill="none"/>
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--t1)" }}>Equipo multidisciplinar</div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--t2)", marginTop: 2 }}>Software · IA · Cloud Infrastructure</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div data-aos style={{ marginBottom: "1rem" }}><span className="section-tag">¿Quiénes somos?</span></div>
            <h2 data-aos data-delay="1" className="font-sora" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
              Tecnología que <span className="text-gradient">democratiza</span> el éxito digital
            </h2>
            <p data-aos data-delay="2" style={{ fontSize: "1rem", color: "var(--t2)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              Scale Automatization nació al ver la necesidad real que tienen emprendedores y pequeñas empresas de acceder a servicios digitales de calidad sin una gran inversión.
            </p>
            <p data-aos data-delay="3" style={{ fontSize: "1rem", color: "var(--t2)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              Crear un ecommerce, automatizar procesos o integrar una pasarela puede parecer costoso y complejo. Por eso construimos un modelo <strong style={{ color: "var(--t1)" }}>accesible, rápido y confiable</strong> para que cualquier negocio compita en el mundo digital sin barreras técnicas ni financieras.
            </p>
            <p data-aos data-delay="4" style={{ fontSize: "1rem", color: "var(--t2)", lineHeight: 1.75, marginBottom: "2rem" }}>
              Nuestro equipo combina experiencia en <strong style={{ color: "var(--t1)" }}>desarrollo de software</strong>, <strong style={{ color: "var(--t1)" }}>inteligencia artificial</strong> e <strong style={{ color: "var(--t1)" }}>infraestructura en la nube</strong> para entregar soluciones que realmente funcionan.
            </p>
            <div data-aos data-delay="5" style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
              {values.map((v) => (
                <div key={v.label} className="value-chip">
                  <span style={{ color: v.color }}>{v.icon}</span>{v.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// CTA FINAL
// ─────────────────────────────────────────────

function CTAFinal() {
  return (
    <section style={{ padding: "5rem 1.5rem", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div data-aos style={{ background: "linear-gradient(145deg, #2D1B4E 0%, #150F20 50%, #1A1130 100%)", border: "1px solid rgba(147,51,234,0.25)", borderRadius: "2rem", padding: "clamp(2.5rem,6vw,5rem) clamp(1.5rem,5vw,4rem)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "100%", background: "radial-gradient(ellipse at 50% 0%, rgba(147,51,234,0.18) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, rgba(147,51,234,0.6), transparent)" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div data-aos data-delay="1" style={{ marginBottom: "1.5rem" }}><span className="section-tag"><IconZap size={10} />Empieza ahora</span></div>
            <h2 data-aos data-delay="2" className="font-sora" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1.25rem", lineHeight: 1.15 }}>
              ¿Listo para escalar <span className="text-gradient">tu negocio?</span>
            </h2>
            <p data-aos data-delay="3" style={{ fontSize: "1rem", color: "var(--t2)", maxWidth: 460, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
              Hablemos de tu proyecto hoy. Sin compromisos. Solo resultados.
            </p>
            <div data-aos data-delay="4" className="cta-row">
              <a href="#contacto" className="btn btn-blue" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
                Contáctanos ahora <IconArrow />
              </a>
              <a href="#servicios" className="btn btn-outline" style={{ fontSize: "1rem" }}>
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// CONTACTO
// ─────────────────────────────────────────────

function Contacto() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  const contactInfo = [
    { icon: <IconMail />, label: "Email",      value: "contacto@scaleautomatization.com", href: "mailto:contacto@scaleautomatization.com" },
    { icon: <IconPhone />, label: "WhatsApp",  value: "+57 312 807 9460",                 href: "https://wa.me/573128079460"              },
    { icon: <IconLinkedIn />, label: "LinkedIn", value: "Scale Automatization",           href: "#"                                       },
    { icon: <IconMap />,   label: "Ubicación", value: "Manizales, Colombia",              href: ""                                        },
  ];

  return (
    <section id="contacto" style={{ padding: "6rem 1.5rem", position: "relative" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

      <div className="section-inner">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div data-aos style={{ marginBottom: "1rem" }}><span className="section-tag"><IconMail size={12} />Contacto</span></div>
          <h2 data-aos data-delay="1" className="font-sora" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
            Hablemos de tu <span className="text-gradient">próximo proyecto</span>
          </h2>
          <p data-aos data-delay="2" style={{ color: "var(--t2)", fontSize: "1rem", maxWidth: 440, margin: "0 auto" }}>
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="contact-grid">
          <div data-aos data-delay="1" className="glass-card" style={{ padding: "2.25rem" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "2.5rem 1rem" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", color: "#22C55E" }}>
                  <IconCheck size={28} />
                </div>
                <h3 className="font-sora" style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem" }}>¡Mensaje enviado!</h3>
                <p style={{ color: "var(--t2)", lineHeight: 1.65 }}>Gracias por contactarnos. Te responderemos en menos de 24 horas.</p>
                <button onClick={() => { setSent(false); setForm({ nombre: "", correo: "", mensaje: "" }); }} className="btn btn-outline" style={{ marginTop: "1.5rem" }}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div>
                    <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--t2)", marginBottom: "0.5rem" }}>Nombre *</label>
                    <input type="text" required placeholder="Tu nombre" value={form.nombre} onChange={e => setForm({ ...form, nombre: e.target.value })} className="field" />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--t2)", marginBottom: "0.5rem" }}>Correo electrónico *</label>
                    <input type="email" required placeholder="tu@email.com" value={form.correo} onChange={e => setForm({ ...form, correo: e.target.value })} className="field" />
                  </div>
                </div>
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "var(--t2)", marginBottom: "0.5rem" }}>Mensaje *</label>
                  <textarea required rows={5} placeholder="Cuéntanos sobre tu proyecto, qué necesitas y cómo podemos ayudarte..." value={form.mensaje} onChange={e => setForm({ ...form, mensaje: e.target.value })} className="field" />
                </div>
                <button type="submit" className="btn btn-blue" style={{ width: "100%", opacity: loading ? 0.75 : 1, cursor: loading ? "wait" : "pointer" }} disabled={loading}>
                  {loading ? (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: "spin-cw 0.8s linear infinite" }}>
                        <path d="M21 12a9 9 0 11-6.219-8.56"/>
                      </svg>
                      Enviando...
                    </>
                  ) : <>Enviar mensaje <IconArrow /></>}
                </button>
              </form>
            )}
          </div>

          <div data-aos data-delay="2" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {contactInfo.map((c, i) => (
              <div key={i} className="bento-cell" style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ width: 40, height: 40, borderRadius: "0.75rem", background: "var(--blue-dim)", border: "1px solid rgba(147,51,234,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--t3)", marginBottom: 4 }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} style={{ color: "var(--t1)", fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none" }}>
                      {c.value}
                    </a>
                  ) : (
                    <span style={{ color: "var(--t1)", fontSize: "0.9375rem", fontWeight: 500 }}>{c.value}</span>
                  )}
                </div>
              </div>
            ))}
            <div style={{ background: "rgba(34,197,94,0.06)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "1.5rem", padding: "1.25rem", display: "flex", alignItems: "center", gap: "0.875rem" }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22C55E", flexShrink: 0, boxShadow: "0 0 8px #22C55E" }} />
              <div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--t1)" }}>Tiempo de respuesta</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--t2)", marginTop: 2 }}>Menos de 24 horas hábiles</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// ROOT PAGE
// ─────────────────────────────────────────────

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("aos-on"); }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll("[data-aos]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Ventajas />
        <Pasarela />
        <About />
        <CTAFinal />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
