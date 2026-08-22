import { Check, Sparkles } from "lucide-react"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"

const included = [
    "Diseño personalizado para tu negocio",
    "Dominio y hosting incluidos",
    "SSL y despliegue incluidos",
    "Cambios de contenido incluidos",
    "Mantenimiento de la web",
    "Atención en 1–2 días laborables",
]

export function Pricing() {
    return (
        <Section id="precio">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                        Precio sencillo
                    </p>

                    <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
                        Tu web profesional,
                        <br />
                        sin pagar por lo que no necesitas.
                    </h2>

                    <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                        Ponemos tu negocio online con una pequeña puesta en marcha y
                        una cuota mensual que incluye todo lo necesario para mantener
                        tu web funcionando.
                    </p>
                </div>

                <div className="mx-auto mt-14 max-w-5xl">
                    <div className="overflow-hidden rounded-[28px] border border-primary/20 bg-card shadow-[0_25px_80px_rgba(139,92,246,0.08)]">
                        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                            <div className="relative overflow-hidden border-b border-border/80 p-8 sm:p-10 lg:border-b-0 lg:border-r">
                                <div className="absolute -right-20 -top-20 size-56 rounded-full bg-primary/10 blur-3xl" />

                                <div className="relative">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                                        <Sparkles className="size-3.5" />
                                        Todo incluido
                                    </div>

                                    <h3 className="mt-7 text-xl font-semibold text-foreground">
                                        Tu web profesional
                                    </h3>

                                    <div className="mt-6">
                                        <div className="flex items-end gap-2">
                                            <span className="text-6xl font-bold tracking-[-0.05em] text-foreground">
                                                50 €
                                            </span>
                                            <span className="mb-2 text-sm text-muted-foreground">
                                                primer mes
                                            </span>
                                        </div>

                                        <p className="mt-3 text-sm text-muted-foreground">
                                            25 € de puesta en marcha + 25 € del primer mes.
                                        </p>
                                    </div>

                                    <div className="my-8 h-px bg-border/80" />

                                    <div>
                                        <span className="text-sm text-muted-foreground">
                                            Después
                                        </span>

                                        <div className="mt-1 flex items-baseline gap-2">
                                            <span className="text-3xl font-bold text-foreground">
                                                25 €
                                            </span>
                                            <span className="text-sm text-muted-foreground">
                                                / mes
                                            </span>
                                        </div>
                                    </div>

                                    <Button
                                        render={<a href="#contacto" />}
                                        size="lg"
                                        className="mt-8 w-full sm:w-auto"
                                    >
                                        Quiero mi web
                                    </Button>
                                </div>
                            </div>

                            <div className="p-8 sm:p-10">
                                <p className="text-sm font-semibold text-foreground">
                                    ¿Qué incluye?
                                </p>

                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    Nos encargamos de la parte técnica para que tú puedas
                                    centrarte en tu negocio y dejarlo online sin fricción.
                                </p>

                                <ul className="mt-7 space-y-4">
                                    {included.map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <Check className="size-3" />
                                            </span>
                                            <span className="text-sm text-muted-foreground">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 rounded-2xl border border-border/80 bg-background/60 p-4">
                                    <p className="text-xs font-medium text-foreground">
                                        ¿Necesitas algo diferente?
                                    </p>

                                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                                        Las funcionalidades especiales o cambios que requieran
                                        desarrollo adicional se presupuestan aparte.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-relaxed text-muted-foreground">
                    Puedes cancelar el servicio cuando quieras. Mientras la suscripción
                    esté activa, la web permanece alojada y disponible.
                </p>
            </Container>
        </Section>
    )
}