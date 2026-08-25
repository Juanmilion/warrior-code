import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Link } from "react-router-dom"

export function Hero() {
    return (
        <Section className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-32">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <Container>
                <div className="mx-auto max-w-5xl text-center">
                    <div className="mb-8 flex items-center justify-center gap-2">
                        <div className="h-px w-8 bg-primary/30" />
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                            Warrior Code
                        </p>
                        <div className="h-px w-8 bg-primary/30" />
                    </div>

                    <Badge className="mb-6 border-primary/30 bg-primary/15 text-primary">
                        ✦ WEBS PARA NEGOCIOS QUE QUIEREN CRECER
                    </Badge>

                    <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-[-0.06em] text-foreground sm:text-6xl lg:text-7xl">
                        Una web profesional
                        <br />
                        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            que te ayuda a vender mejor
                        </span>
                    </h1>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                        Diseñamos, publicamos y mantenemos páginas para pequeños
                        negocios sin complicaciones, con un enfoque claro en la
                        conversión y la confianza.
                    </p>

                    <div className="mx-auto mt-10 flex items-center justify-center gap-8">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-foreground">50+</p>
                            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                webs activas
                            </p>
                        </div>
                        <div className="h-8 w-px bg-border" />
                        <div className="text-center">
                            <p className="text-2xl font-bold text-foreground">4.9★</p>
                            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                satisfacción
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            render={<a href="#contacto" />}
                            size="lg"
                            className="px-8 shadow-[0_18px_35px_rgba(168,85,247,0.28)]"
                        >
                            Quiero mi web →
                        </Button>

                        <Button
                            render={<Link to="/ejemplos" />}
                            size="lg"
                            variant="outline"
                            className="px-8"
                        >
                            Ver ejemplos
                        </Button>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">50 €</span>
                        <span className="text-xs uppercase tracking-[0.14em]">primer mes</span>
                        <span>·</span>
                        <span className="font-semibold text-foreground">25 €/mes</span>
                        <span className="text-xs uppercase tracking-[0.14em]">mantenimiento</span>
                    </div>
                </div>
            </Container>
        </Section>
    )
}