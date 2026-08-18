import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

const services = [
    {
        number: "01",
        title: "Diseñamos",
        description:
            "Adaptamos la web a tu negocio, tus colores, tus servicios y tu identidad.",
    },
    {
        number: "02",
        title: "Publicamos",
        description:
            "Nos encargamos del dominio, hosting, SSL y de poner tu web online.",
    },
    {
        number: "03",
        title: "Mantenemos",
        description:
            "Cuando necesites cambiar información, horarios, precios o contenido, nos lo dices y nosotros lo hacemos.",
    },
]

export function Services() {
    return (
        <Section id="como-funciona">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <div className="h-px w-8 bg-primary/30" />
                        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                            Cómo trabajamos
                        </p>
                        <div className="h-px w-8 bg-primary/30" />
                    </div>

                    <h2 className="mt-6 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                        Simple, claro y sin complicarte la vida.
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
                        Te acompañamos desde la idea hasta el mantenimiento para que tu
                        presencia online funcione sin depender de ti en lo técnico.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-4xl divide-y divide-border border-y border-border">
                    {services.map((service) => (
                        <div
                            key={service.number}
                            className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-3 py-8 sm:grid-cols-[minmax(3.5rem,5rem)_minmax(9rem,12rem)_minmax(0,1fr)] sm:gap-x-6 sm:gap-y-0 sm:items-start"
                        >
                            <span className="text-sm font-medium text-primary">
                                {service.number}
                            </span>

                            <h3 className="col-start-2 row-start-1 text-xl font-semibold">
                                {service.title}
                            </h3>

                            <p className="col-start-2 row-start-2 max-w-xl leading-relaxed text-muted-foreground sm:col-start-3 sm:row-start-1">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-8 text-center text-sm text-muted-foreground">
                    Tú gestionas tu negocio. Nosotros gestionamos tu web.
                </p>
            </Container>
        </Section>
    )
}
