"use client";

import Link from "next/link";
import { useEffect } from "react";
import {
  IconArrow,
  IconArrowLeft,
  IconCheck,
  IconLinkedIn,
  IconPayment,
  IconStore,
  IconZap,
} from "@/components/icons";
import type { Service } from "@/lib/services";

const serviceIcon = (key: string, size = 28) => {
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

interface Props {
  service: Service;
}

export default function ServiceDetail({ service }: Props) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("aos-on");
        }),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    document.querySelectorAll("[data-aos]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [service.slug]);

  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", padding: "5rem 1.5rem 4rem", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "-30%",
              right: "-10%",
              width: "60%",
              aspectRatio: "1",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${service.accent === "var(--blue)" ? "rgba(147,51,234,0.16)" : service.accent === "var(--violet)" ? "rgba(192,132,252,0.16)" : "rgba(34,197,94,0.14)"} 0%, transparent 65%)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              left: "-10%",
              width: "40%",
              aspectRatio: "1",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(147,51,234,0.08) 0%, transparent 65%)",
            }}
          />
        </div>

        <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
          <Link
            href="/#servicios"
            data-aos
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "var(--t2)",
              fontSize: "0.875rem",
              fontWeight: 500,
              textDecoration: "none",
              marginBottom: "2rem",
              transition: "color 0.2s",
            }}
          >
            <IconArrowLeft size={16} /> Volver a servicios
          </Link>

          <div className="service-hero-grid">
            <div>
              <div data-aos data-delay="1" style={{ marginBottom: "1.25rem" }}>
                <span className="section-tag" style={{ color: service.accent, borderColor: `${service.accent === "var(--blue)" ? "rgba(147,51,234,0.3)" : service.accent === "var(--violet)" ? "rgba(192,132,252,0.3)" : "rgba(34,197,94,0.3)"}` }}>
                  {service.tag}
                </span>
              </div>
              <h1
                data-aos
                data-delay="2"
                className="font-sora"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "1.25rem",
                  color: "var(--t1)",
                }}
              >
                {service.headline}
              </h1>
              <p
                data-aos
                data-delay="3"
                style={{
                  fontSize: "1.125rem",
                  fontStyle: "italic",
                  color: service.accent,
                  fontWeight: 500,
                  marginBottom: "1.5rem",
                }}
              >
                &ldquo;{service.quote}&rdquo;
              </p>
              <p
                data-aos
                data-delay="4"
                style={{
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  color: "var(--t2)",
                  maxWidth: 560,
                  marginBottom: "2.25rem",
                }}
              >
                {service.detail.intro}
              </p>
              <div data-aos data-delay="5" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a href="/#contacto" className="btn btn-blue">
                  {service.detail.cta} <IconArrow />
                </a>
                <a href="#detalle" className="btn btn-outline">
                  Conocer más
                </a>
              </div>
            </div>

            {/* Visual lateral */}
            <div data-aos data-delay="3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 380,
                  aspectRatio: "1",
                  borderRadius: "2rem",
                  background: "linear-gradient(145deg, #2D1B4E 0%, #150F20 100%)",
                  border: "1px solid rgba(147,51,234,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  boxShadow: "0 24px 80px rgba(147,51,234,0.12)",
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at 30% 20%, ${service.accent === "var(--blue)" ? "rgba(147,51,234,0.22)" : service.accent === "var(--violet)" ? "rgba(192,132,252,0.22)" : "rgba(34,197,94,0.16)"} 0%, transparent 60%)`,
                  }}
                />
                <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04 }}>
                  <defs>
                    <pattern id={`g-${service.slug}`} width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#9333EA" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#g-${service.slug})`} />
                </svg>
                <div
                  style={{
                    position: "relative",
                    width: 130,
                    height: 130,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, rgba(147,51,234,0.18), rgba(192,132,252,0.18))",
                    border: `1px solid ${service.accent === "var(--blue)" ? "rgba(147,51,234,0.4)" : service.accent === "var(--violet)" ? "rgba(192,132,252,0.4)" : "rgba(34,197,94,0.4)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: service.accent,
                    boxShadow: "0 0 60px rgba(147,51,234,0.3)",
                    animation: "pulse-glow 5s ease-in-out infinite",
                  }}
                >
                  {serviceIcon(service.iconKey, 52)}
                </div>
                {/* Floating badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "10%",
                    left: "8%",
                    background: "rgba(12,12,24,0.92)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "100px",
                    padding: "0.5rem 0.875rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--t1)",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    animation: "float-y 7s ease-in-out infinite",
                  }}
                >
                  <span style={{ color: service.accent }}>
                    <IconZap size={12} />
                  </span>
                  {service.badges[0]}
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "12%",
                    right: "8%",
                    background: "rgba(12,12,24,0.92)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "100px",
                    padding: "0.5rem 0.875rem",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--t1)",
                    animation: "float-y 9s ease-in-out infinite 1.5s",
                  }}
                >
                  {service.badges[1]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      {service.detail.stats && (
        <section style={{ padding: "0 1.5rem 1rem" }}>
          <div className="section-inner">
            <div className="stats-band">
              {service.detail.stats.map((st, i) => (
                <div key={i} data-aos data-delay={String(i + 1)} className="glass-card" style={{ padding: "1.5rem 1.25rem", textAlign: "center" }}>
                  <div className="font-sora text-gradient" style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>
                    {st.value}
                  </div>
                  <div style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--t2)", lineHeight: 1.4 }}>{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* AUDIENCIAS */}
      {service.detail.audiences && (
        <section style={{ padding: "4rem 1.5rem 1rem" }}>
          <div className="section-inner">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div data-aos style={{ marginBottom: "1rem" }}>
                <span className="section-tag">A quién sirve</span>
              </div>
              <h2 data-aos data-delay="1" className="font-sora" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
                Beneficios <span className="text-gradient">para cada perfil</span>
              </h2>
            </div>
            <div className="audiences-grid">
              {service.detail.audiences.map((aud, i) => (
                <div key={i} data-aos data-delay={String(i + 1)} className="glass-card" style={{ padding: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                  <h3 className="font-sora" style={{ fontSize: "1.375rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>{aud.title}</h3>
                  <p style={{ fontSize: "0.9375rem", color: service.accent, fontWeight: 500, marginBottom: "1.5rem" }}>{aud.subtitle}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    {aud.benefits.map((b, j) => (
                      <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                        <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: "50%", background: "var(--blue-dim)", border: "1px solid rgba(147,51,234,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: service.accent, marginTop: 2 }}>
                          <IconCheck size={13} />
                        </span>
                        <span style={{ fontSize: "0.9375rem", color: "var(--t1)", lineHeight: 1.5 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DETALLE */}
      <section id="detalle" style={{ padding: "5rem 1.5rem", background: "rgba(255,255,255,0.01)", position: "relative" }}>
        <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
        <div className="divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />

        <div className="section-inner">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div data-aos style={{ marginBottom: "1rem" }}>
              <span className="section-tag">Qué incluye</span>
            </div>
            <h2 data-aos data-delay="1" className="font-sora" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
              Una solución <span className="text-gradient">completa</span>
            </h2>
          </div>

          <div className="detail-grid">
            {service.detail.sections.map((sec, i) => (
              <div key={i} data-aos data-delay={String(i + 1)} className="bento-cell">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "0.75rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: service.accent,
                    marginBottom: "1.25rem",
                    fontWeight: 700,
                  }}
                >
                  0{i + 1}
                </div>
                <h3 className="font-sora" style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.625rem", letterSpacing: "-0.01em" }}>
                  {sec.title}
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "var(--t2)", lineHeight: 1.7 }}>{sec.body}</p>
              </div>
            ))}
          </div>

          {/* Entregables */}
          <div data-aos data-delay="2" style={{ marginTop: "3.5rem" }}>
            <div className="glass-card" style={{ padding: "clamp(1.75rem, 3vw, 2.5rem)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.5rem" }}>
                <span className="section-tag">Entregables</span>
              </div>
              <h3 className="font-sora" style={{ fontSize: "clamp(1.25rem,2.5vw,1.75rem)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "1.5rem" }}>
                Esto recibes contratando este servicio
              </h3>
              <div className="deliverables-grid">
                {service.detail.deliverables.map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "0.875rem 0" }}>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: "var(--blue-dim)",
                        border: "1px solid rgba(147,51,234,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: service.accent,
                      }}
                    >
                      <IconCheck size={14} />
                    </span>
                    <span style={{ fontSize: "0.9375rem", color: "var(--t1)", lineHeight: 1.5, paddingTop: 4 }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA inline */}
          <div data-aos data-delay="3" style={{ marginTop: "3rem", textAlign: "center" }}>
            <a href="/#contacto" className="btn btn-blue" style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}>
              {service.detail.cta} <IconArrow />
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .service-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .service-hero-grid { grid-template-columns: 1.1fr 1fr; }
        }
        .stats-band {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (min-width: 768px) {
          .stats-band { grid-template-columns: repeat(4, 1fr); }
        }
        .audiences-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        @media (min-width: 768px) {
          .audiences-grid { grid-template-columns: 1fr 1fr; }
        }
        .detail-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }
        @media (min-width: 768px) {
          .detail-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .deliverables-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.25rem 1.5rem;
        }
        @media (min-width: 640px) {
          .deliverables-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </>
  );
}
