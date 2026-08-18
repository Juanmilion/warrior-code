import { ArrowUpRight, Sparkles } from "lucide-react"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
    return (
        <Section>
            <Container>
                <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),transparent_35%),linear-gradient(135deg,#100d1a_0%,#171426_50%,#0f172a_100%)] px-6 py-16 shadow-[0_32px_120px_rgba(124,58,237,0.12)] sm:px-10 sm:py-20 lg:px-16">
                    <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-primary/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-24 -left-16 size-80 rounded-full bg-accent/10 blur-3xl" />
                    <div className="pointer-events-none absolute right-8 top-8 hidden size-20 rounded-full border border-primary/20 sm:block" />
                    <div className="pointer-events-none absolute bottom-10 right-24 hidden size-2.5 rounded-full bg-primary sm:block" />

                    <div className="relative mx-auto max-w-3xl text-center">
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                            <Sparkles className="size-3.5" />
                            Tu negocio, online
                        </div>

                        <h2 className="mt-6 text-4xl font-bold tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
                            ¿Empezamos?
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                            Tu negocio ya funciona. Ahora damos el paso que lo
                            convierte en una marca con presencia, autoridad y
                            ventas constantes.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                            <Button
                                size="lg"
                                className="h-11 rounded-xl px-6 shadow-[0_18px_35px_rgba(168,85,247,0.3)]"
                            >
                                Quiero mi web
                                <ArrowUpRight className="size-4" />
                            </Button>

                            <span className="text-sm text-muted-foreground">
                                50 € el primer mes · 25 €/mes después
                            </span>
                        </div>

                        <div className="mx-auto mt-10 flex max-w-lg flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground/90">
                            <span>Sin grandes inversiones</span>
                            <span className="text-primary/80">•</span>
                            <span>Dominio y hosting incluidos</span>
                            <span className="text-primary/80">•</span>
                            <span>Mantenimiento incluido</span>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    )
}