"use client";

import Image from "next/image";
import Link from "next/link";
import { IconLinkedIn, IconMail, IconMap, IconPhone } from "./icons";
import { services } from "@/lib/services";

interface FooterProps {
  homeHref?: string;
}

export default function Footer({ homeHref = "/" }: FooterProps) {
  const year = new Date().getFullYear();
  const quickLinks = [
    { href: `${homeHref}#ventajas`, label: "Ventajas" },
    { href: `${homeHref}#pasarela`, label: "Pasarela" },
    { href: "/about", label: "Nosotros" },
    { href: `${homeHref}#contacto`, label: "Contacto" },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--b1)", padding: "4rem 1.5rem 2rem" }}>
      <div className="section-inner">
        <div className="footer-grid">
          <div>
            <Link href={homeHref} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: "linear-gradient(135deg, rgba(147,51,234,0.18), rgba(192,132,252,0.18))",
                  border: "1px solid rgba(147,51,234,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  overflow: "hidden",
                }}
              >
                <Image src="/apple-touch-icon.png" alt="Scale Automatization" width={28} height={28} />
              </div>
              <span className="font-sora" style={{ fontWeight: 700, fontSize: "0.9375rem", color: "var(--t1)" }}>
                Scale <span style={{ color: "var(--blue)" }}>Automatization</span>
              </span>
            </Link>
            <p style={{ fontSize: "0.875rem", color: "var(--t2)", lineHeight: 1.7, maxWidth: 260 }}>
              Tecnología accesible para escalar tu negocio digital. Ecommerce, automatización y pagos seguros.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
              <a
                href="#"
                aria-label="LinkedIn"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--b1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--t2)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>

          <div>
            <div className="font-sora" style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--t1)", marginBottom: "1.25rem", letterSpacing: "0.04em" }}>
              Servicios
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem", marginBottom: "1.5rem" }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}`} className="nav-link" style={{ fontSize: "0.9rem" }}>
                    {s.headline}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="font-sora" style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--t1)", marginBottom: "0.875rem", letterSpacing: "0.04em" }}>
              Navegación
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="nav-link" style={{ fontSize: "0.9rem" }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-sora" style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--t1)", marginBottom: "1.25rem", letterSpacing: "0.04em" }}>
              Contacto directo
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { icon: <IconMail />, text: "contacto@scaleautomatization.com", href: "mailto:contacto@scaleautomatization.com" },
                { icon: <IconPhone />, text: "+57 312 807 9460", href: "https://wa.me/573128079460" },
                { icon: <IconMap />, text: "Manizales, Colombia", href: "" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <span style={{ color: "var(--blue)", flexShrink: 0 }}>{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} style={{ fontSize: "0.875rem", color: "var(--t2)", textDecoration: "none" }}>
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
              <a key={l} href="#" style={{ fontSize: "0.8125rem", color: "var(--t3)", textDecoration: "none" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
