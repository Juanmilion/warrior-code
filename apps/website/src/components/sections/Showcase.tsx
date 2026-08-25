import { ArrowDownRight } from "lucide-react"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { AcademyMockup } from "@/components/showcase/AcademyMockup"
import { RestaurantMockup } from "@/components/showcase/RestaurantMockup"
import { ServicesMockup } from "@/components/showcase/ServicesMockup"

export function Showcase() {
    return (
        <Section id="ejemplos">
            <Container>
                <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            Ejemplos
                        </p>

                        <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
                            Una web diferente para
                            <br />
                            cada negocio.
                        </h2>
                    </div>

                    <div className="max-w-md lg:justify-self-end">
                        <p className="text-base leading-relaxed text-muted-foreground">
                            No creemos en webs idénticas para todo el mundo. Adaptamos
                            el diseño, la estructura y el contenido a lo que cada negocio
                            necesita para vender mejor y conectar con la gente adecuada.
                        </p>

                        <div className="mt-5 flex items-center gap-2 text-sm font-medium text-foreground">
                            <ArrowDownRight className="size-4 text-primary" />
                            Algunos conceptos que podemos crear
                        </div>
                    </div>
                </div>

                <div className="mt-16 space-y-10">
                    <div className="grid gap-6 rounded-[28px] border border-border/80 bg-card/60 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] lg:grid-cols-[0.28fr_1fr] lg:items-center lg:p-7">
                        <div className="lg:pr-4">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                01 / Restauración
                            </span>

                            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                                Una presencia que abre el apetito.
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                Diseños más visuales y editorializados para restaurantes,
                                cafeterías y negocios de hostelería con identidad propia.
                            </p>
                        </div>

                        <RestaurantMockup />
                    </div>

                    <div className="grid gap-6 rounded-[28px] border border-border/80 bg-card/60 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] lg:grid-cols-[1fr_0.28fr] lg:items-center lg:p-7">
                        <div className="order-2 lg:order-1">
                            <ServicesMockup />
                        </div>

                        <div className="order-1 lg:order-2 lg:pl-4">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                02 / Servicios
                            </span>

                            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                                Directa cuando el cliente necesita actuar.
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                Diseños orientados a servicios profesionales, contacto rápido
                                y mayor conversión desde el primer vistazo.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6 rounded-[28px] border border-border/80 bg-card/60 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] lg:grid-cols-[0.28fr_1fr] lg:items-center lg:p-7">
                        <div className="lg:pr-4">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                03 / Formación
                            </span>

                            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
                                Diseñada para enseñar y conectar.
                            </h3>

                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                Estructuras pensadas para academias, cursos, profesores y
                                centros de formación con mayor claridad y posicionamiento.
                            </p>
                        </div>

                        <AcademyMockup />
                    </div>
                </div>

                <div className="mx-auto mt-20 max-w-2xl text-center">
                    <p className="text-lg font-medium tracking-tight text-foreground sm:text-xl">
                        Tu negocio no tiene que parecerse al de nadie más.
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        El diseño, la estructura y el contenido se adaptan a lo que haces
                        y a cómo quieres que te encuentren.
                    </p>
                </div>
            </Container>
        </Section>
    )
}
