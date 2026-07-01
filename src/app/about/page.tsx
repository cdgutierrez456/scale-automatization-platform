import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  IconArrowLeft,
  IconDollar,
  IconLinkedIn,
  IconMail,
  IconShield,
  IconStar,
  IconZap,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About · Scale Automatization",
  description:
    "Quiénes somos y quién está detrás de Scale Automatization. Conoce al fundador y nuestra misión de democratizar el éxito digital.",
  openGraph: {
    title: "About · Scale Automatization",
    description:
      "Quiénes somos y quién está detrás de Scale Automatization.",
    images: ["/android-chrome-512x512.png"],
  },
};

const values = [
  { icon: <IconDollar size={14} />, label: "Accesibilidad", color: "var(--blue)" },
  { icon: <IconZap size={14} />, label: "Velocidad", color: "var(--violet)" },
  { icon: <IconShield size={14} />, label: "Seguridad", color: "#22C55E" },
  { icon: <IconStar size={14} />, label: "Innovación", color: "#FBBF24" },
];

const LINKEDIN = "https://www.linkedin.com/in/cdgutierrez456-dev/";
const GMAIL = "cdgutierrez456@gmail.com";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ───── QUIÉNES SOMOS ───── */}
        <section style={{ padding: "5rem 1.5rem 4rem", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", top: "-25%", right: "-10%", width: "60%", aspectRatio: "1", borderRadius: "50%", background: "radial-gradient(circle, rgba(147,51,234,0.12) 0%, transparent 65%)", pointerEvents: "none" }} />

          <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
            <Link
              href="/"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--t2)", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none", marginBottom: "2rem" }}
            >
              <IconArrowLeft size={16} /> Volver al inicio
            </Link>

            <div style={{ maxWidth: 760, marginBottom: "1.25rem" }}>
              <span className="section-tag">¿Quiénes somos?</span>
            </div>
            <h1 className="font-sora" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.5rem", maxWidth: 820 }}>
              Tecnología que <span className="text-gradient">democratiza</span> el éxito digital
            </h1>
            <div style={{ maxWidth: 720 }}>
              <p style={{ fontSize: "1.0625rem", color: "var(--t2)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Scale Automatization nació al ver la necesidad real que tienen emprendedores y pequeñas empresas de acceder a servicios digitales de calidad sin una gran inversión.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "var(--t2)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Crear un ecommerce, automatizar procesos o integrar una pasarela puede parecer costoso y complejo. Por eso construimos un modelo{" "}
                <strong style={{ color: "var(--t1)" }}>accesible, rápido y confiable</strong> para que cualquier negocio compita en el mundo digital sin barreras técnicas ni financieras.
              </p>
              <p style={{ fontSize: "1.0625rem", color: "var(--t2)", lineHeight: 1.75, marginBottom: "2rem" }}>
                Combinamos experiencia en{" "}
                <strong style={{ color: "var(--t1)" }}>desarrollo de software</strong>,{" "}
                <strong style={{ color: "var(--t1)" }}>inteligencia artificial</strong> e{" "}
                <strong style={{ color: "var(--t1)" }}>infraestructura en la nube</strong> para entregar soluciones que realmente funcionan.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                {values.map((v) => (
                  <div key={v.label} className="value-chip">
                    <span style={{ color: v.color }}>{v.icon}</span>
                    {v.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───── FUNDADOR ───── */}
        <section style={{ padding: "5rem 1.5rem 6rem", background: "rgba(255,255,255,0.01)", position: "relative" }}>
          <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />

          <div className="section-inner">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="section-tag">El fundador</span>
              <h2 className="font-sora" style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.03em", marginTop: "1rem" }}>
                Quién está <span className="text-gradient">detrás</span>
              </h2>
            </div>

            <div className="founder-grid">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 340,
                    aspectRatio: "4 / 5",
                    borderRadius: "2rem",
                    border: "1px solid rgba(147,51,234,0.4)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/FotoPersonalCompress.jpeg"
                    alt="Cristian David Gutiérrez"
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>

              <div>
                <h3 className="font-sora" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
                  Cristian David Gutiérrez
                </h3>
                <p style={{ color: "var(--blue)", fontWeight: 600, fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
                  Fundador · Desarrollador de Software
                </p>
                <p style={{ fontSize: "1rem", color: "var(--t2)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                  Desarrollador apasionado por construir tecnología que genere impacto real. Fundé Scale Automatization con la convicción de que cualquier negocio, sin importar su tamaño, merece acceder a herramientas digitales de primer nivel.
                </p>
                <p style={{ fontSize: "1rem", color: "var(--t2)", lineHeight: 1.75, marginBottom: "2rem" }}>
                  Mi enfoque combina desarrollo de software, automatización e inteligencia artificial para crear soluciones simples, rápidas y confiables que acompañan a cada cliente en su crecimiento.
                </p>

                <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--t3)", marginBottom: "0.875rem" }}>
                  Contacto
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="bento-cell" style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}>
                    <span style={{ width: 40, height: 40, borderRadius: "0.75rem", background: "var(--blue-dim)", border: "1px solid rgba(147,51,234,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <IconLinkedIn />
                    </span>
                    <span>
                      <span style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--t3)" }}>LinkedIn</span>
                      <span style={{ color: "var(--t1)", fontSize: "0.9375rem", fontWeight: 500 }}>cdgutierrez456-dev</span>
                    </span>
                  </a>
                  <a href={`mailto:${GMAIL}`} className="bento-cell" style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none" }}>
                    <span style={{ width: 40, height: 40, borderRadius: "0.75rem", background: "var(--blue-dim)", border: "1px solid rgba(147,51,234,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue)", flexShrink: 0 }}>
                      <IconMail />
                    </span>
                    <span>
                      <span style={{ display: "block", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--t3)" }}>Email</span>
                      <span style={{ color: "var(--t1)", fontSize: "0.9375rem", fontWeight: 500 }}>{GMAIL}</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .founder-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: center;
          max-width: 920px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .founder-grid { grid-template-columns: 0.8fr 1fr; gap: 3.5rem; }
        }
      `}</style>
    </>
  );
}
