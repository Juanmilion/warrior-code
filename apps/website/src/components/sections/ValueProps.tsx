import { Monitor, Package, Wrench } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Card } from "@/components/ui/Card"

const valueProps = [
    {
        title: "Diseño pensado para vender",
        description:
            "Cada sección está orientada a generar confianza, explicar mejor tu oferta y convertir visitas en clientes.",
        icon: Monitor,
    },
    {
        title: "Todo en una sola solución",
        description:
            "Dominio, hosting, SSL y despliegue incluidos para que no tengas que gestionar nada técnico.",
        icon: Package,
    },
    {
        title: "Cambios sin fricción",
        description:
            "Si necesitas actualizar horarios, servicios o mensajes, lo hacemos sin que te compliques la vida.",
        icon: Wrench,
    },
]

export function ValueProps() {
    return (
        <Section id="servicios">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="h-px w-8 bg-primary/30" />
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                            Todo incluido
                        </p>
                        <div className="h-px w-8 bg-primary/30" />
                    </div>

                    <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                        Una web que funciona como
                        <br />
                        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            tu mejor vendedor
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
                        Te ayudamos a presentarte mejor, ganar confianza y convertir
                        más visitas en clientes reales.
                    </p>
                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-3">
                    {valueProps.map((item) => (
                        <Card key={item.title} className="min-h-64 flex flex-col">
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                                <item.icon className="h-6 w-6 text-primary" />
                            </div>

                            <h3 className="text-lg font-bold text-foreground">
                                {item.title}
                            </h3>

                            <p className="mt-4 flex-grow leading-relaxed text-muted-foreground">
                                {item.description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                                <span>Conocer más</span>
                                <span>→</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </Container>
        </Section>
    )
}