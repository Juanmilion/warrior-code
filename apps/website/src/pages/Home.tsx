import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { FAQ } from "@/components/sections/FAQ"
// import { FinalCTA } from "@/components/sections/FinalCTA"
import { Hero } from "@/components/sections/Hero"
import { Pricing } from "@/components/sections/Pricing"
import { Services } from "@/components/sections/Services"
import { Showcase } from "@/components/sections/Showcase"
import { ValueProps } from "@/components/sections/ValueProps"
import { Contact } from "@/components/sections/Contact"
import { Seo, SITE_URL } from "@/components/seo/Seo"

const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Warrior Code",
    description:
        "Diseño, publicación y mantenimiento de páginas web profesionales para pequeños negocios.",
    serviceType: "Diseño y desarrollo web",
    areaServed: "ES",
    url: SITE_URL,
}

export function Home() {
    return (
        <main id="inicio" tabIndex={-1} className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
            <Seo
                title="Tu web desde 25 €/mes | Warrior Code"
                description="Tu web profesional desde 25 €/mes. Diseñamos, publicamos y mantenemos páginas web para pequeños negocios, con un enfoque claro en conversión y confianza."
                structuredData={homeStructuredData}
            />
            <a
                href="#contenido-principal"
                className="sr-only fixed left-4 top-4 z-[60] rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground focus:not-sr-only focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
                Saltar al contenido principal
            </a>
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.08),transparent_30%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.06),transparent_25%)]" />
            <Navbar />
            <div id="contenido-principal">
                <Hero />
                <ValueProps />
                <Services />
                <Showcase />
                <Pricing />
                <FAQ />
                <Contact />
                {/* <FinalCTA /> */}
            </div>
            <Footer />
        </main>
    )
}
