import {
    Card,
    Container,
    Grid,
    Heading,
    ProcessSteps,
    Section,
    ServiceCard,
    StatsGrid,
    Stack,
    Text,
    SectionIntro,
} from "@warrior-code/ui"
import { ScrollToTop } from "../../components/layout/ScrollToTop"
import { Seo } from "../../components/seo/Seo"

interface WorkshopExampleProps {
    heroImage: string
}

const services = [
    {
        title: "Mecánica general",
        description:
            "Mantenimiento y reparación de los principales sistemas mecánicos de tu vehículo.",
    },
    {
        title: "Diagnosis electrónica",
        description:
            "Detectamos averías electrónicas con equipos de diagnosis profesionales.",
    },
    {
        title: "Frenos y suspensión",
        description:
            "Revisión, sustitución y puesta a punto de frenos, amortiguadores y suspensión.",
    },
    {
        title: "Mantenimiento",
        description:
            "Aceite, filtros, batería, distribución y todo lo necesario para mantener tu vehículo.",
    },
]

const trustPoints = [
    {
        value: "+15",
        label: "años de experiencia",
    },
    {
        value: "12 meses",
        label: "de garantía",
    },
    {
        value: "100%",
        label: "transparencia",
    },
]

const process = [
    {
        number: "01",
        title: "Revisamos",
        description:
            "Escuchamos el problema y revisamos tu vehículo para encontrar el origen de la avería.",
    },
    {
        number: "02",
        title: "Presupuestamos",
        description:
            "Te explicamos qué necesita el vehículo y el coste antes de realizar cualquier reparación.",
    },
    {
        number: "03",
        title: "Reparamos",
        description:
            "Nos ponemos manos a la obra y dejamos tu vehículo listo para volver a la carretera.",
    },
]

export function WorkshopExample({
    heroImage,
}: WorkshopExampleProps) {
    return (
        <main className="theme-workshop min-h-screen bg-background text-foreground antialiased">
            <ScrollToTop />
            <Seo
                title="Motor Huelva | Ejemplo de web para taller"
                description="Ejemplo de una página web para taller mecánico, con servicios, proceso de trabajo y contacto."
            />
            <header className="absolute inset-x-0 top-0 z-20">
                <Container>
                    <nav className="mt-4 flex h-20 items-center justify-between rounded-full border border-white/10 bg-[#101416]/35 px-5 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.18)] md:px-7">
                        <a
                            href="#"
                            className="text-lg font-black uppercase tracking-tight text-white"
                        >
                            Motor<span className="text-primary">Huelva</span>
                        </a>


                        <div className="hidden items-center gap-8 text-sm font-medium text-white/75 md:flex">
                            <a
                                href="#servicios"
                                className="transition-colors hover:text-white"
                            >
                                Servicios
                            </a>

                            <a
                                href="#proceso"
                                className="transition-colors hover:text-white"
                            >
                                Cómo trabajamos
                            </a>

                            <a
                                href="#contacto"
                                className="transition-colors hover:text-white"
                            >
                                Contacto
                            </a>
                        </div>

                        <a
                            href="#presupuesto"
                            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:brightness-110"
                        >
                            Pedir presupuesto
                        </a>
                    </nav>
                </Container>
            </header>

            <section className="relative isolate flex min-h-[720px] items-center overflow-hidden">
                <div
                    className="absolute inset-[-12px] -z-20 scale-105 bg-cover bg-center blur-[2px]"
                    style={{
                        backgroundImage: `url(${heroImage})`,
                    }}
                />


                <div className="absolute inset-0 -z-10 bg-black/60" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/25" />

                <Container className="pt-24">
                    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                        <div className="max-w-3xl">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-10 bg-primary" />

                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                    Taller mecánico · Huelva
                                </p>
                            </div>

                            <Heading
                                as="h1"
                                size="hero"
                                className="max-w-3xl text-white"
                            >
                                Tu vehículo.
                                <br />
                                En buenas manos.
                            </Heading>

                            <Text
                                size="lg"
                                className="mt-6 max-w-xl text-white/75"
                            >
                                Mantenimiento, diagnosis y reparación con
                                profesionales que te explican lo que necesita tu
                                vehículo antes de empezar.
                            </Text>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <a
                                    href="#presupuesto"
                                    className="rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition-all hover:brightness-110"
                                >
                                    Pedir presupuesto
                                </a>

                                <a
                                    href="tel:+34959000000"
                                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                                >
                                    Llamar ahora
                                </a>
                            </div>
                        </div>

                        <div className="rounded-[1.75rem] border border-white/10 bg-[#101416]/55 p-5 backdrop-blur-md">
                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                                Servicio rápido
                            </p>


                            <div className="mt-5 space-y-4 text-sm text-white/75">
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span>Diagnóstico</span>
                                    <span className="font-semibold text-white">Sin compromiso</span>
                                </div>
                                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                    <span>Garantía</span>
                                    <span className="font-semibold text-white">12 meses</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Atención</span>
                                    <span className="font-semibold text-white">Lunes a sábado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            <Section id="servicios">
                <Container>
                    <Stack gap="xl">
                        <SectionIntro
                            eyebrow="Servicios"
                            title="Todo lo que tu vehículo necesita."
                            description="Desde el mantenimiento habitual hasta las averías más complejas."
                        />

                        <Grid columns={2} gap="md">
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.title}
                                    title={service.title}
                                    description={service.description}
                                    className="rounded-[1.5rem]"
                                />
                            ))}
                        </Grid>
                    </Stack>
                </Container>
            </Section>

            <section className="border-y border-border bg-secondary">
                <Container>
                    <StatsGrid items={trustPoints} />
                </Container>
            </section>

            <Section id="proceso">
                <Container>
                    <Stack gap="xl">
                        <div className="max-w-2xl">
                            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                Así trabajamos
                            </p>

                            <Heading as="h2" size="xl">
                                Sin sorpresas. Sin complicaciones.
                            </Heading>
                        </div>

                        <ProcessSteps
                            items={process}
                            itemClassName="rounded-[1.5rem]"
                        />
                    </Stack>
                </Container>
            </Section>

            <section
                id="presupuesto"
                className="bg-primary py-20 text-primary-foreground"
            >
                <Container>
                    <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                        <div className="max-w-2xl">
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                                ¿Necesitas una revisión?
                            </p>

                            <Heading
                                as="h2"
                                size="xl"
                                className="text-white"
                            >
                                Cuéntanos qué le pasa a tu vehículo.
                            </Heading>

                            <Text className="mt-4 text-white/75">
                                Te explicaremos qué necesita y prepararemos un
                                presupuesto antes de empezar.
                            </Text>
                        </div>

                        <a
                            href="#contacto"
                            className="shrink-0 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#151719] transition-colors hover:bg-white/90"
                        >
                            Pedir presupuesto
                        </a>
                    </div>
                </Container>
            </section>

            <Section id="contacto">
                <Container>
                    <Grid columns={2} gap="lg">
                        <Card className="rounded-[1.5rem] border border-border bg-card">
                            <Stack gap="md">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                    Encuéntranos
                                </p>

                                <Heading as="h2" size="lg">
                                    Estamos en Huelva.
                                </Heading>

                                <Text muted>
                                    Avenida de ejemplo, 24
                                    <br />
                                    21001 Huelva
                                </Text>

                                <a
                                    href="#"
                                    className="w-fit text-sm font-bold text-primary hover:underline"
                                >
                                    Cómo llegar →
                                </a>
                            </Stack>
                        </Card>

                        <Card className="rounded-[1.5rem] border border-border bg-card">
                            <Stack gap="md">
                                <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                                    Horarios
                                </p>

                                <Heading as="h2" size="lg">
                                    Cuando puedes encontrarnos.
                                </Heading>

                                <Text muted>
                                    Lunes — Viernes
                                    <br />
                                    08:00 — 14:00 · 16:00 — 19:00
                                    <br />
                                    <br />
                                    Sábado
                                    <br />
                                    09:00 — 13:00
                                </Text>

                                <a
                                    href="tel:+34959000000"
                                    className="w-fit text-sm font-bold text-primary hover:underline"
                                >
                                    959 000 000
                                </a>
                            </Stack>
                        </Card>
                    </Grid>
                </Container>
            </Section>

            <footer className="border-t border-border bg-secondary py-8">
                <Container>
                    <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                        <p>© 2026 Motor Huelva</p>

                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="transition-colors hover:text-foreground"
                            >
                                Instagram
                            </a>

                            <a
                                href="#"
                                className="transition-colors hover:text-foreground"
                            >
                                Contacto
                            </a>
                        </div>
                    </div>
                </Container>
            </footer>
        </main>
    )
}