"use client";

import { useEffect, useState, type FormEvent } from "react";

// ─────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────

const IconStore = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const IconLinkedIn = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const IconPayment = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
    <line x1="1" y1="10" x2="23" y2="10"/>
  </svg>
);

const IconCheck = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IconArrow = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12 5 19 12 12 19"/>
  </svg>
);

const IconShield = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IconZap = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const IconStar = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const IconMail = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const IconPhone = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.64A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const IconMap = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const IconMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const IconClose = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const IconClock = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);

const IconTrendingUp = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
);

const IconSettings = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
  </svg>
);

const IconDollar = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"/>
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
  </svg>
);

// ─────────────────────────────────────────────
// HERO ORB — Animated visual
// ─────────────────────────────────────────────

function HeroOrb() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "relative", width: "100%", maxWidth: 420, aspectRatio: "1", margin: "0 auto" }}
    >
      {/* Halo */}
      <div style={{ position: "absolute", inset: "-15%", borderRadius: "50%", background: "radial-gradient(circle, rgba(79,124,255,0.14) 0%, transparent 65%)", animation: "pulse-glow 5s ease-in-out infinite" }} />
      {/* Ring 1 CW */}
      <div style={{ position: "absolute", inset: "5%", borderRadius: "50%", border: "1px solid rgba(79,124,255,0.22)", animation: "spin-cw 28s linear infinite" }}>
        <div style={{ position: "absolute", top: "-5px", left: "50%", transform: "translateX(-50%)", width: 10, height: 10, borderRadius: "50%", background: "var(--blue)", boxShadow: "0 0 14px var(--blue)" }} />
      </div>
      {/* Ring 2 CCW */}
      <div style={{ position: "absolute", inset: "13%", borderRadius: "50%", border: "1px solid rgba(123,97,255,0.18)", animation: "spin-ccw 20s linear infinite" }}>
        <div style={{ position: "absolute", bottom: "-4px", right: "22%", width: 8, height: 8, borderRadius: "50%", background: "var(--violet)", boxShadow: "0 0 10px var(--violet)" }} />
      </div>
      {/* Ring 3 dashed */}
      <div style={{ position: "absolute", inset: "21%", borderRadius: "50%", border: "1px dashed rgba(79,124,255,0.1)", animation: "spin-cw 14s linear infinite" }} />
      {/* Core */}
      <div style={{ position: "absolute", inset: "27%", borderRadius: "50%", background: "radial-gradient(circle at 33% 33%, #7BAEFF 0%, #4F7CFF 35%, #2D4ED8 65%, #0E1A50 100%)", boxShadow: "0 0 60px rgba(79,124,255,0.6), 0 0 120px rgba(79,124,255,0.22), inset 0 0 40px rgba(255,255,255,0.06)", animation: "pulse-glow 6s ease-in-out infinite" }} />
      {/* Floating card */}
      <div style={{ position: "absolute", bottom: "12%", left: "-6%", background: "rgba(12,12,24,0.92)", backdropFilter: "blur(16px)", border: "1px solid rgba(79,124,255,0.25)", borderRadius: "1rem", padding: "0.875rem 1.125rem", animation: "float-y 7s ease-in-out infinite", minWidth: 148 }}>
        <div style={{ fontSize: "0.6rem", color: "var(--t3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 5 }}>Transacciones</div>
        <div className="font-sora" style={{ fontSize: "1.375rem", fontWeight: 800, color: "var(--t1)", lineHeight: 1 }}>+$2.4M</div>
        <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 5 }}>
          <span style={{ color: "#22C55E", fontSize: "0.75rem", fontWeight: 600 }}>▲ 18.4%</span>
          <span style={{ color: "var(--t3)", fontSize: "0.75rem" }}>este mes</span>
        </div>
      </div>
      {/* Speed badge */}
      <div style={{ position: "absolute", top: "13%", right: "-4%", background: "rgba(123,97,255,0.1)", backdropFilter: "blur(16px)", border: "1px solid rgba(123,97,255,0.3)", borderRadius: "100px", padding: "0.5rem 0.875rem", display: "flex", alignItems: "center", gap: 6, animation: "float-y 9s ease-in-out infinite 2s" }}>
        <span style={{ color: "var(--violet)" }}><IconZap size={13} /></span>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--t1)", whiteSpace: "nowrap" }}>Listo en días</span>
      </div>
      {/* Particles */}
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
// NAVBAR
// ─────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#ventajas",  label: "Ventajas"  },
    { href: "#pasarela",  label: "Pasarela"  },
    { href: "#about",     label: "About"     },
    { href: "#contacto",  label: "Contacto"  },
  ];

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(10,10,20,0.93)" : "rgba(10,10,20,0.5)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.06)" : "transparent"}`,
      boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.3)" : "none",
      transition: "background 0.35s, border-color 0.35s, box-shadow 0.35s",
    }}>
      <div className="nav-inner">
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0, background: "linear-gradient(135deg, var(--blue) 0%, var(--violet) 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1" fill="rgba(255,255,255,0.2)"/>
              <path d="M8 4L11 5.8V9.2L8 11L5 9.2V5.8L8 4Z" fill="white"/>
            </svg>
          </div>
          <span className="font-sora" style={{ fontWeight: 700, fontSize: "1rem", color: "var(--t1)" }}>
            Scale <span style={{ color: "var(--blue)" }}>Automatization</span>
          </span>
        </a>

        {/* Desktop links — controlled by .nav-links CSS class */}
        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#contacto" className="btn btn-blue nav-cta-btn" style={{ padding: "0.625rem 1.375rem", fontSize: "0.875rem" }}>
          Contáctanos
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="nav-mobile-btn"
          style={{ background: "none", border: "none", color: "var(--t1)", cursor: "pointer", padding: 4 }}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className="nav-mobile-menu" style={{
        overflow: "hidden",
        maxHeight: open ? 440 : 0,
        transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
        borderTop: open ? "1px solid var(--b1)" : "none",
        background: "rgba(10,10,20,0.97)",
      }}>
        <div style={{ padding: "1rem 1.5rem 1.5rem" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              style={{ display: "block", color: "var(--t2)", padding: "0.875rem 0", fontSize: "1rem", textDecoration: "none", borderBottom: "1px solid var(--b1)", fontWeight: 500 }}>
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="btn btn-blue"
            style={{ marginTop: "1.25rem", width: "100%", padding: "0.875rem" }}>
            Contáctanos
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", overflow: "hidden", padding: "5rem 1.5rem 4rem" }}>
      {/* BG decorations */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "70%", aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle, rgba(79,124,255,0.12) 0%, transparent 65%)" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-10%", width: "50%", aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle, rgba(123,97,255,0.08) 0%, transparent 65%)" }} />
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.025 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#4F7CFF" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-inner" style={{ width: "100%", position: "relative", zIndex: 1 }}>
        {/* hero-grid: 1 col mobile → 2 col lg */}
        <div className="hero-grid">
          {/* Copy */}
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
            {/* Trust row */}
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

          {/* Orb visual */}
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
  const services = [
    {
      icon: <IconStore size={22} />,
      tag: "Ecommerce",
      headline: "Ecommerce en tiempo récord",
      quote: "Tu tienda online lista para vender",
      desc: "Ecommerce completo con diseño profesional, catálogo de productos, carrito de compras, pasarela de pagos integrada y panel de administración intuitivo.",
      bullets: ["Diseño profesional a medida", "Catálogo y carrito optimizados", "Pasarela de pagos integrada", "Panel admin completo"],
      b1: "Inversión mínima", b2: "Tiempo récord",
      accent: "var(--blue)", featured: false,
    },
    {
      icon: <IconLinkedIn size={22} />,
      tag: "Automatización",
      headline: "Automatización de LinkedIn",
      quote: "Tu marca siempre visible en LinkedIn",
      desc: "Sistema de publicaciones automáticas para mantener presencia constante y profesional en LinkedIn sin esfuerzo manual. Tu marca activa 24/7.",
      bullets: ["Publicaciones automáticas", "Presencia constante y profesional", "Sin esfuerzo manual", "Estrategia de contenido"],
      b1: "Automatización 24/7", b2: "Sin esfuerzo manual",
      accent: "var(--violet)", featured: true,
    },
    {
      icon: <IconPayment size={22} />,
      tag: "Pagos",
      headline: "Conexión con Pasarela de Pagos",
      quote: "Cobra en línea con tarifas preferenciales",
      desc: "Conectamos tu sitio con nuestra pasarela aliada con tarifas de las más bajas del comercio electrónico colombiano. Rápido y seguro.",
      bullets: ["Tarifas preferenciales", "Múltiples métodos de pago", "Integración rápida", "Liquidaciones transparentes"],
      b1: "Tarifas preferenciales", b2: "Integración rápida",
      accent: "#22C55E", featured: false,
    },
  ];

  return (
    <section id="servicios" style={{ padding: "6rem 1.5rem" }}>
      <div className="section-inner">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div data-aos style={{ marginBottom: "1rem" }}><span className="section-tag"><IconStore size={10} />Servicios</span></div>
          <h2 data-aos data-delay="1" className="font-sora" style={{ fontSize: "clamp(1.875rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "1rem" }}>
            Todo lo que necesitas para <span className="text-gradient">crecer</span>
          </h2>
          <p data-aos data-delay="2" style={{ color: "var(--t2)", fontSize: "1rem", maxWidth: 480, margin: "0 auto" }}>
            Soluciones digitales completas, accesibles y entregadas con velocidad real.
          </p>
        </div>

        {/* services-grid: 1 col mobile → 3 col md */}
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} data-aos data-delay={String(i + 1)}
              className={s.featured ? "glass-card-featured" : "glass-card"}
              style={{ padding: "2.25rem", position: "relative", overflow: "hidden" }}>
              {s.featured && (
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--blue), var(--violet))" }} />
              )}
              <div style={{ width: 52, height: 52, borderRadius: "0.875rem", background: s.featured ? "var(--blue-dim)" : "rgba(255,255,255,0.04)", border: `1px solid ${s.featured ? "rgba(79,124,255,0.25)" : "var(--b1)"}`, display: "flex", alignItems: "center", justifyContent: "center", color: s.accent, marginBottom: "1.5rem" }}>
                {s.icon}
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <span className="section-tag" style={{ fontSize: "0.6rem" }}>{s.tag}</span>
              </div>
              <h3 className="font-sora" style={{ fontSize: "1.375rem", fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "-0.02em", lineHeight: 1.3 }}>{s.headline}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--blue)", lineHeight: 1.65, fontStyle: "italic", marginBottom: "1rem", fontWeight: 500 }}>&ldquo;{s.quote}&rdquo;</p>
              <p style={{ fontSize: "0.9375rem", color: "var(--t2)", lineHeight: 1.7, marginBottom: "1.5rem" }}>{s.desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.75rem" }}>
                {s.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.875rem", color: "var(--t1)" }}>
                    <span style={{ color: s.accent, flexShrink: 0 }}><IconCheck size={14} /></span>{b}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <span className="pay-badge" style={{ color: s.accent }}>✦ {s.b1}</span>
                <span className="pay-badge">{s.b2}</span>
              </div>
            </div>
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

        {/* bento-grid: 1 col mobile → 4 col md */}
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
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 50%, rgba(79,124,255,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />

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

        <div data-aos data-delay="1" style={{ background: "linear-gradient(145deg, #0D0F24 0%, #0A0A18 100%)", border: "1px solid rgba(79,124,255,0.2)", borderRadius: "2rem", padding: "clamp(1.75rem,4vw,3.5rem)", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", background: "radial-gradient(circle at 80% 20%, rgba(79,124,255,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, rgba(79,124,255,0.5), transparent)" }} />

          {/* pasarela-grid: 1 col mobile → 2 col lg */}
          <div className="pasarela-grid">
            {/* Features — features-grid: 2 col always */}
            <div className="features-grid">
              {features.map((f, i) => (
                <div key={i} data-aos data-delay={String(i + 1)}
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "1.25rem", padding: "1.25rem", transition: "border-color 0.25s, background 0.25s", cursor: "default" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,124,255,0.3)"; (e.currentTarget as HTMLElement).style.background = "rgba(79,124,255,0.06)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"; }}>
                  <div style={{ color: "var(--blue)", marginBottom: "0.75rem" }}>{f.icon}</div>
                  <div className="font-sora" style={{ fontSize: "0.9375rem", fontWeight: 700, marginBottom: "0.375rem" }}>{f.label}</div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--t2)", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              ))}
            </div>

            {/* Right */}
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
                    <div key={m.name} className="pay-badge"
                      style={{ transition: "border-color 0.25s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,124,255,0.3)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"}>
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
        {/* about-grid: 1 col mobile → 2 col lg */}
        <div className="about-grid">
          {/* Visual */}
          <div data-aos>
            <div style={{ background: "var(--bg-card)", border: "1px solid var(--b1)", borderRadius: "2rem", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
              <div aria-hidden style={{ position: "absolute", top: 0, left: 0, width: "60%", height: "60%", background: "radial-gradient(circle at 0% 0%, rgba(79,124,255,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
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
              <div style={{ marginTop: "1.5rem", padding: "1.25rem", background: "var(--blue-dim)", border: "1px solid rgba(79,124,255,0.2)", borderRadius: "1.25rem", display: "flex", alignItems: "center", gap: "1rem" }}>
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

          {/* Text */}
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
        <div data-aos style={{ background: "linear-gradient(145deg, #0E1030 0%, #0A0A20 50%, #0E0E28 100%)", border: "1px solid rgba(79,124,255,0.25)", borderRadius: "2rem", padding: "clamp(2.5rem,6vw,5rem) clamp(1.5rem,5vw,4rem)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", top: "-50%", left: "50%", transform: "translateX(-50%)", width: "80%", height: "100%", background: "radial-gradient(ellipse at 50% 0%, rgba(79,124,255,0.18) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, rgba(79,124,255,0.6), transparent)" }} />

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

        {/* contact-grid: 1 col mobile → 3fr 2fr lg */}
        <div className="contact-grid">
          {/* Form */}
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
                {/* form-row: 1 col mobile → 2 col sm */}
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

          {/* Contact info */}
          <div data-aos data-delay="2" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {contactInfo.map((c, i) => (
              <div key={i} className="bento-cell" style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ width: 40, height: 40, borderRadius: "0.75rem", background: "var(--blue-dim)", border: "1px solid rgba(79,124,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--t3)", marginBottom: 4 }}>{c.label}</div>
                  {c.href ? (
                    <a href={c.href} style={{ color: "var(--t1)", fontSize: "0.9375rem", fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--blue)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--t1)"}>
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
// FOOTER
// ─────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();
  const quickLinks = [
    { href: "#servicios", label: "Servicios"  },
    { href: "#ventajas",  label: "Ventajas"   },
    { href: "#pasarela",  label: "Pasarela"   },
    { href: "#about",     label: "Nosotros"   },
    { href: "#contacto",  label: "Contacto"   },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--b1)", padding: "4rem 1.5rem 2rem" }}>
      <div className="section-inner">
        {/* footer-grid: 1 col mobile → 3 col sm */}
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8, marginBottom: "1rem" }}>
              <div style={{ width: 28, height: 28, borderRadius: 7, background: "linear-gradient(135deg, var(--blue) 0%, var(--violet) 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1" fill="rgba(255,255,255,0.2)"/>
                  <path d="M8 4L11 5.8V9.2L8 11L5 9.2V5.8L8 4Z" fill="white"/>
                </svg>
              </div>
              <span className="font-sora" style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--t1)" }}>
                Scale <span style={{ color: "var(--blue)" }}>Automatization</span>
              </span>
            </a>
            <p style={{ fontSize: "0.875rem", color: "var(--t2)", lineHeight: 1.7, maxWidth: 260 }}>
              Tecnología accesible para escalar tu negocio digital. Ecommerce, automatización y pagos seguros.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
              <a href="#" aria-label="LinkedIn"
                style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.04)", border: "1px solid var(--b1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t2)", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(79,124,255,0.4)"; el.style.color = "var(--blue)"; el.style.background = "var(--blue-dim)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--b1)"; el.style.color = "var(--t2)"; el.style.background = "rgba(255,255,255,0.04)"; }}>
                <IconLinkedIn />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="font-sora" style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--t1)", marginBottom: "1.25rem", letterSpacing: "0.04em" }}>Navegación</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {quickLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="nav-link" style={{ fontSize: "0.9rem" }}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-sora" style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--t1)", marginBottom: "1.25rem", letterSpacing: "0.04em" }}>Contacto directo</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { icon: <IconMail />,  text: "contacto@scaleautomatization.com", href: "mailto:contacto@scaleautomatization.com" },
                { icon: <IconPhone />, text: "+57 312 807 9460",                 href: "https://wa.me/573128079460"              },
                { icon: <IconMap />,   text: "Manizales, Colombia",              href: ""                                        },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <span style={{ color: "var(--blue)", flexShrink: 0 }}>{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} style={{ fontSize: "0.875rem", color: "var(--t2)", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--t1)"}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--t2)"}>
                      {c.text}
                    </a>
                  ) : (
                    <span style={{ fontSize: "0.875rem", color: "var(--t2)" }}>{c.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider" style={{ marginBottom: "1.5rem" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.8125rem", color: "var(--t3)" }}>© {year} Scale Automatization. Todos los derechos reservados.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacidad", "Términos"].map((l) => (
              <a key={l} href="#" style={{ fontSize: "0.8125rem", color: "var(--t3)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--t2)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--t3)"}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
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
