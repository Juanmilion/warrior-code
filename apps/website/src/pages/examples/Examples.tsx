import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

import {
    Container,
    Grid,
    Heading,
    Section,
    Stack,
    Text,
} from "@warrior-code/ui"
import { Seo } from "@/components/seo/Seo"

const examples = [
    {
        name: "Casa Olivo",
        category: "Restaurante",
        description:
            "Una web gastronómica elegante, cálida y centrada en la experiencia del cliente.",
        href: "/ejemplos/restaurante",
        className:
            "bg-[#1c1713] text-[#f5eee4]",
        accentClassName: "text-[#c8754f]",
    },
    {
        name: "Motor Huelva",
        category: "Taller mecánico",
        description:
            "Una propuesta digital pensada para talleres mecánicos y centros de servicio.",
        href: "/ejemplos/taller",
        className:
            "bg-slate-950 text-white",
        accentClassName: "text-cyan-400",
    },
]

export function Examples() {
    return (
        <Section id="ejemplos">
            <Container>
                <Stack gap="xl">
                    <Seo
                        title="Ejemplos de páginas web | Warrior Code"
                        description="Descubre ejemplos de páginas web profesionales adaptadas a restaurantes, academias y distintos tipos de negocio."
                    />
                    <Link
                        to="/"
                        className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-primary/30"
                    >
                        <span className="flex size-9 items-center justify-center rounded-full border border-border bg-card transition-colors group-hover:border-primary group-hover:text-primary">
                            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
                        </span>

                        <span className="relative pb-1 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-primary after:transition-transform group-hover:after:scale-x-100">
                            Volver a Warrior Code
                        </span>
                    </Link>

                    <div className="max-w-2xl">
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            Ejemplos
                        </p>

                        <Heading as="h1" size="xl">
                            Cada negocio necesita una web diferente.
                        </Heading>

                        <Text
                            size="lg"
                            muted
                            className="mt-5"
                        >
                            Estos son algunos ejemplos de cómo podemos adaptar
                            diseño, estructura y contenido a distintos tipos
                            de negocio.
                        </Text>
                    </div>

                    <Grid columns={2} gap="lg">
                        {examples.map((example) => (
                            <Link
                                key={example.href}
                                to={example.href}
                                className="group block overflow-hidden rounded-3xl border border-border outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-primary/30"
                            >
                                <div
                                    className={`relative aspect-[16/10] overflow-hidden ${example.className}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-7">
                                        <p
                                            className={`text-xs font-semibold uppercase tracking-[0.2em] ${example.accentClassName}`}
                                        >
                                            {example.category}
                                        </p>

                                        <h3 className="mt-2 text-2xl font-semibold">
                                            {example.name}
                                        </h3>
                                    </div>

                                    <div className="absolute right-6 top-6 flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/20 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                                        <ArrowUpRight className="size-4" />
                                    </div>
                                </div>

                                <div className="bg-card p-6">
                                    <p className="text-sm leading-6 text-muted-foreground">
                                        {example.description}
                                    </p>

                                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                                        Ver ejemplo
                                        <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Section>
    )
}