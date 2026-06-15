import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceDetail from "./ServiceDetail";
import { getService, services, type ServiceSlug } from "@/lib/services";

interface Params {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Servicio no encontrado" };
  return {
    title: service.headline,
    description: service.shortDesc,
    openGraph: {
      title: `${service.headline} · Scale Automatization`,
      description: service.shortDesc,
      images: ["/android-chrome-512x512.png"],
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Navbar />
      <main>
        <ServiceDetail service={service} />

        {/* Otros servicios */}
        <section style={{ padding: "5rem 1.5rem 6rem", position: "relative" }}>
          <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
          <div className="section-inner">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span className="section-tag">Otros servicios</span>
              <h2 className="font-sora" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, letterSpacing: "-0.03em", marginTop: "1rem" }}>
                Explora todo lo que <span className="text-gradient">ofrecemos</span>
              </h2>
            </div>
            <div className="services-grid">
              {others.map((s) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className="glass-card"
                  style={{ padding: "2rem", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}
                >
                  <div style={{ marginBottom: "0.75rem" }}>
                    <span className="section-tag" style={{ fontSize: "0.6rem" }}>{s.tag}</span>
                  </div>
                  <h3 className="font-sora" style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
                    {s.headline}
                  </h3>
                  <p style={{ fontSize: "0.9375rem", color: "var(--t2)", lineHeight: 1.6, marginBottom: "1.5rem" }}>{s.shortDesc}</p>
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 8, color: s.accent, fontSize: "0.875rem", fontWeight: 600 }}>
                    Ver detalle →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export const dynamicParams = false;
export type { ServiceSlug };
