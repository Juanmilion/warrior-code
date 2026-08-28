import {
    Container,
    Grid,
    Heading,
    Section,
    Stack,
    StatsGrid,
    Text,
    MenuCard,
} from "@warrior-code/ui"
// import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { Seo } from "@/components/seo/Seo"

interface RestaurantExampleProps {
    heroImage: string
}

interface MenuItem {
    name: string
    description: string
    image?: string
    price: string
}

interface MenuSection {
    category: string
    items: MenuItem[]
}

const menu: MenuSection[] = [
    {
        category: "Entrantes",
        items: [
            {
                name: "Burrata cremosa",
                description: "Tomate de temporada, aceite de albahaca y pan crujiente.",
                image: "https://i0.wp.com/koketo.es/wp-content/uploads/2025/05/Burrata_chefkoketo_009-copia.jpg?resize=790%2C593&ssl=1",
                price: "12,50 €",
            },
            {
                name: "Croquetas de jamón",
                description: "Bechamel suave, jamón ibérico y un toque de trufa.",
                image: "https://i.blogs.es/70b1b8/croquetas_jamon/450_1000.jpg",
                price: "10,00 €",
            },
            {
                name: "Carpaccio de presa",
                description: "Presa ibérica, parmesano, rúcula y aceite de oliva.",
                image: "https://blog.beher.com/wp-content/uploads/2025/09/carpaccio-de-presa-iberica-secretos-beher-1024x683.jpg",
                price: "14,50 €",
            },
        ],
    },
    {
        category: "Principales",
        items: [
            {
                name: "Lubina a la brasa",
                description: "Verduras asadas, patata panadera y jugo de limón.",
                price: "21,00 €",
            },
            {
                name: "Arroz meloso de temporada",
                description: "Caldo casero, producto de mercado y parmesano.",
                price: "18,50 €",
            },
            {
                name: "Carrillera al vino tinto",
                description: "Cocción lenta, puré de patata y verduras glaseadas.",
                price: "19,50 €",
            },
        ],
    },
]

const services = [
    {
        title: "Producto de temporada",
        description:
            "Trabajamos con ingredientes frescos para que cada plato tenga su mejor momento.",
    },
    {
        title: "Cocina honesta",
        description:
            "Recetas reconocibles, producto protagonista y elaboraciones hechas con calma.",
    },
    {
        title: "Un lugar para quedarse",
        description:
            "Un espacio pensado para comer bien, conversar y disfrutar sin prisas.",
    },
]

const restaurantStats = [
    {
        value: `${menu.reduce((total, section) => total + section.items.length, 0)}`,
        label: "platos fuera de carta",
    },
    {
        value: "4",
        label: "postres especiales",
    },
    {
        value: "3",
        label: "locales en la ciudad",
    },
]

export function RestaurantExample({
    heroImage,
}: RestaurantExampleProps) {
    return (
        <main className="theme-restaurant min-h-screen bg-background text-foreground">
            {/* <ScrollToTop /> */}
            <Seo
                title="Casa Olivo | Ejemplo de web para restaurante"
                description="Ejemplo de una página web gastronómica para Casa Olivo, con carta, propuesta culinaria, horarios y reservas."
            />

            {/* NAVBAR */}
            <header className="absolute inset-x-0 top-0 z-20">
                <Container>
                    <nav className="flex h-20 items-center justify-between border-b border-primary-foreground/20">
                        <a
                            href="#"
                            className="font-serif text-xl font-semibold tracking-tight text-primary-foreground"
                        >
                            CASA OLIVO
                        </a>

                        <div className="hidden items-center gap-8 text-sm text-primary-foreground/85 md:flex">
                            <a
                                href="#historia"
                                className="transition-colors hover:text-primary-foreground"
                            >
                                Nuestra historia
                            </a>

                            <a
                                href="#carta"
                                className="transition-colors hover:text-primary-foreground"
                            >
                                Carta
                            </a>

                            <a
                                href="#contacto"
                                className="transition-colors hover:text-primary-foreground"
                            >
                                Contacto
                            </a>
                        </div>

                        <a
                            href="#reserva"
                            className="rounded-full border border-primary-foreground/40 px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-background"
                        >
                            Reservar mesa
                        </a>
                    </nav>
                </Container>
            </header>

            {/* HERO */}
            <section className="relative isolate flex min-h-[720px] items-end overflow-hidden">
                <div
                    className="absolute inset-[-16px] -z-20 scale-105 bg-cover bg-center blur-[3px]"
                    style={{
                        backgroundImage: `url(${heroImage})`,
                    }}
                />

                <div className="absolute inset-0 -z-10 bg-background/45" />

                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/70 via-background/20 to-background/30" />

                <Container className="pb-24 pt-40">
                    <div className="max-w-3xl text-primary-foreground">
                        <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-primary-foreground/70">
                            Cocina mediterránea
                        </p>

                        <Heading
                            as="h1"
                            size="hero"
                            className="max-w-3xl text-primary-foreground"
                        >
                            Sabores que merecen quedarse.
                        </Heading>

                        <Text
                            size="lg"
                            className="mt-6 max-w-xl text-primary-foreground/80"
                        >
                            Producto de temporada, cocina honesta y un espacio
                            pensado para disfrutar de cada momento alrededor de
                            la mesa.
                        </Text>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#reserva"
                                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
                            >
                                Reservar mesa
                            </a>

                            <a
                                href="#carta"
                                className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
                            >
                                Ver carta
                            </a>
                        </div>
                    </div>
                </Container>
            </section>

            {/* HISTORIA */}
            <Section id="historia">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                                Nuestra historia
                            </p>

                            <Heading
                                as="h2"
                                size="xl"
                                className="max-w-xl"
                            >
                                Una mesa donde el producto habla.
                            </Heading>
                        </div>

                        <Stack gap="md" className="max-w-2xl">
                            <Text size="lg">
                                Casa Olivo nace de una idea sencilla: cocinar
                                bien, utilizar buen producto y crear un lugar
                                al que apetezca volver.
                            </Text>

                            <Text muted>
                                Nuestra cocina parte de recetas mediterráneas,
                                producto local y una mirada contemporánea. No
                                buscamos complicar las cosas, sino hacerlas
                                bien.
                            </Text>
                        </Stack>
                    </div>
                </Container>
            </Section>

            {/* SERVICIOS / PROPUESTA */}
            <section className="bg-card py-24">
                <Container>
                    <Stack gap="xl">
                        <div className="max-w-2xl">
                            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                                Lo que nos define
                            </p>

                            <Heading as="h2" size="xl">
                                Comer bien también es una experiencia.
                            </Heading>
                        </div>

                        <Grid columns={3} gap="lg">
                            {services.map((service) => (
                                <article
                                    key={service.title}
                                    className="border-t border-border pt-6"
                                >
                                    <Stack gap="sm">
                                        <Heading as="h3" size="sm">
                                            {service.title}
                                        </Heading>

                                        <Text muted>
                                            {service.description}
                                        </Text>
                                    </Stack>
                                </article>
                            ))}
                        </Grid>
                    </Stack>
                </Container>
            </section>

            {/* CARTA */}
            <Section id="carta">
                <Container size="narrow">
                    <div className="mb-14 text-center">
                        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                            Nuestra carta
                        </p>

                        <Heading as="h2" size="xl" align="center">
                            Para compartir. Para disfrutar.
                        </Heading>

                        <Text
                            size="lg"
                            muted
                            align="center"
                            className="mx-auto mt-5 max-w-2xl"
                        >
                            Una selección que cambia con el producto y la
                            temporada.
                        </Text>
                    </div>

                    <Stack gap="xl">
                        {menu.map((section) => (
                            <div key={section.category}>
                                <div className="mb-6 flex items-center gap-4">
                                    <Heading as="h3" size="md">
                                        {section.category}
                                    </Heading>

                                    <div className="h-px flex-1 bg-border" />
                                </div>

                                <Stack gap="lg">
                                    {section.items.map((item) => (
                                        <MenuCard
                                            key={item.name}
                                            item={item}
                                            variant={item.image ? "card" : "list"}
                                        />
                                    ))}
                                </Stack>
                            </div>
                        ))}
                    </Stack>
                </Container>
            </Section>

            <section className="border-y border-border bg-card">
                <Container>
                    <StatsGrid
                        items={restaurantStats}
                        className="[&>div]:px-4 sm:[&>div]:px-6"
                    />
                </Container>
            </section>

            {/* CTA VISUAL */}
            <section
                id="reserva"
                className="relative overflow-hidden bg-secondary py-28 text-primary-foreground"
            >
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-primary">
                            Tu mesa te espera
                        </p>

                        <Heading
                            as="h2"
                            size="xl"
                            align="center"
                            className="text-primary-foreground"
                        >
                            Una buena comida empieza mucho antes del primer
                            bocado.
                        </Heading>

                        <Text
                            size="lg"
                            align="center"
                            className="mx-auto mt-6 max-w-2xl text-primary-foreground/70"
                        >
                            Reserva tu mesa y ven a disfrutar de nuestra cocina
                            con calma.
                        </Text>

                        <a
                            href="#contacto"
                            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-accent"
                        >
                            Reservar mesa
                        </a>
                    </div>
                </Container>
            </section>

            {/* HORARIOS + CONTACTO */}
            <Section id="contacto">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <Stack gap="lg">
                            <div>
                                <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                                    Visítanos
                                </p>

                                <Heading as="h2" size="xl">
                                    Estamos en el centro de Huelva.
                                </Heading>
                            </div>

                            <Text size="lg" muted>
                                Calle Ejemplo, 24
                                <br />
                                21001 Huelva
                            </Text>
                        </Stack>

                        <div className="grid gap-8 sm:grid-cols-2">
                            <Stack gap="sm">
                                <Heading as="h3" size="sm">
                                    Horarios
                                </Heading>

                                <Text muted>
                                    Martes — Domingo
                                    <br />
                                    13:00 — 16:00
                                    <br />
                                    20:00 — 23:30
                                </Text>
                            </Stack>

                            <Stack gap="sm">
                                <Heading as="h3" size="sm">
                                    Reservas
                                </Heading>

                                <Text muted>
                                    959 000 000
                                    <br />
                                    reservas@casaolivo.es
                                </Text>
                            </Stack>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* FOOTER */}
            <footer className="border-t border-border bg-card py-8">
                <Container>
                    <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © 2026 Casa Olivo | Warrior Code. Todos los derechos reservados.
                        </p>

                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="transition-colors hover:text-accent"
                            >
                                Instagram
                            </a>

                            <a
                                href="#"
                                className="transition-colors hover:text-accent"
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