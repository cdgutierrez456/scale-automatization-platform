"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IconChevronDown, IconClose, IconMenu } from "./icons";
import { services } from "@/lib/services";

interface NavbarProps {
  homeHref?: string;
}

export default function Navbar({ homeHref = "/" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const links: { href: string; label: string }[] = [
    { href: `${homeHref}#ventajas`, label: "Ventajas" },
    { href: `${homeHref}#pasarela`, label: "Pasarela" },
    { href: "/about", label: "About" },
    { href: `${homeHref}#contacto`, label: "Contacto" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,10,20,0.93)" : "rgba(10,10,20,0.5)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: `1px solid ${scrolled ? "rgba(255,255,255,0.06)" : "transparent"}`,
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.3)" : "none",
        transition: "background 0.35s, border-color 0.35s, box-shadow 0.35s",
      }}
    >
      <div className="nav-inner">
        {/* Logo */}
        <Link href={homeHref} style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              flexShrink: 0,
              overflow: "hidden",
              background: "linear-gradient(135deg, rgba(147,51,234,0.18), rgba(192,132,252,0.18))",
              border: "1px solid rgba(147,51,234,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image src="/apple-touch-icon.png" alt="Scale Automatization" width={32} height={32} priority />
          </div>
          <span className="font-sora" style={{ fontWeight: 700, fontSize: "1rem", color: "var(--t1)" }}>
            Scale <span style={{ color: "var(--blue)" }}>Automatization</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="nav-links">
          {/* Servicios dropdown */}
          <div ref={dropdownRef} style={{ position: "relative" }}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="nav-link"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: 0,
                color: servicesOpen ? "var(--t1)" : undefined,
              }}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Servicios
              <span
                style={{
                  transition: "transform 0.25s",
                  transform: servicesOpen ? "rotate(180deg)" : "rotate(0)",
                  display: "inline-flex",
                }}
              >
                <IconChevronDown />
              </span>
            </button>
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 14px)",
                left: "-1rem",
                minWidth: 320,
                background: "rgba(13,13,28,0.97)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(147,51,234,0.18)",
                borderRadius: "1.25rem",
                padding: "0.625rem",
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                opacity: servicesOpen ? 1 : 0,
                visibility: servicesOpen ? "visible" : "hidden",
                transform: servicesOpen ? "translateY(0)" : "translateY(-8px)",
                transition: "opacity 0.2s, transform 0.2s, visibility 0.2s",
              }}
            >
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  onClick={() => setServicesOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.75rem 0.875rem",
                    borderRadius: "0.75rem",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(147,51,234,0.08)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                >
                  <div
                    style={{
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: s.accent,
                      marginBottom: 4,
                    }}
                  >
                    {s.tag}
                  </div>
                  <div className="font-sora" style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--t1)", marginBottom: 2 }}>
                    {s.headline}
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--t2)", lineHeight: 1.5 }}>{s.quote}</div>
                </Link>
              ))}
              <Link
                href={`${homeHref}#servicios`}
                onClick={() => setServicesOpen(false)}
                style={{
                  display: "block",
                  marginTop: "0.25rem",
                  padding: "0.625rem 0.875rem",
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--blue)",
                  textAlign: "center",
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                Ver todos los servicios →
              </Link>
            </div>
          </div>

          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={`${homeHref}#contacto`}
          className="btn btn-blue nav-cta-btn"
          style={{ padding: "0.625rem 1.375rem", fontSize: "0.875rem" }}
        >
          Contáctanos
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          style={{ background: "none", border: "none", color: "var(--t1)", cursor: "pointer", padding: 4 }}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className="nav-mobile-menu"
        style={{
          overflow: "hidden",
          maxHeight: open ? 640 : 0,
          transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
          borderTop: open ? "1px solid var(--b1)" : "none",
          background: "rgba(10,10,20,0.97)",
        }}
      >
        <div style={{ padding: "1rem 1.5rem 1.5rem" }}>
          {/* Mobile Servicios collapsible */}
          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              background: "none",
              border: "none",
              color: "var(--t2)",
              padding: "0.875rem 0",
              fontSize: "1rem",
              fontWeight: 500,
              borderBottom: "1px solid var(--b1)",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Servicios
            <span style={{ transition: "transform 0.25s", transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0)", display: "inline-flex" }}>
              <IconChevronDown />
            </span>
          </button>
          <div
            style={{
              overflow: "hidden",
              maxHeight: mobileServicesOpen ? 400 : 0,
              transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div style={{ paddingLeft: "0.5rem", paddingTop: "0.5rem" }}>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  onClick={() => {
                    setOpen(false);
                    setMobileServicesOpen(false);
                  }}
                  style={{
                    display: "block",
                    color: "var(--t1)",
                    padding: "0.75rem 0",
                    fontSize: "0.9375rem",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  <span style={{ color: s.accent, marginRight: 8 }}>•</span>
                  {s.headline}
                </Link>
              ))}
            </div>
          </div>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                color: "var(--t2)",
                padding: "0.875rem 0",
                fontSize: "1rem",
                textDecoration: "none",
                borderBottom: "1px solid var(--b1)",
                fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`${homeHref}#contacto`}
            onClick={() => setOpen(false)}
            className="btn btn-blue"
            style={{ marginTop: "1.25rem", width: "100%", padding: "0.875rem" }}
          >
            Contáctanos
          </a>
        </div>
      </div>
    </nav>
  );
}
