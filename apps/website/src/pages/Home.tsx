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

export function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.08),transparent_30%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.06),transparent_25%)]" />
            <Navbar />
            <Hero />
            <ValueProps />
            <Services />
            <Showcase />
            <Pricing />
            <FAQ />
            <Contact />
            {/* <FinalCTA /> */}
            <Footer />
        </main>
    )
}
