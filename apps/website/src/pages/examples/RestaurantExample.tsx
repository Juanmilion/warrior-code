import {
    Container,
    Heading,
    MenuSection,
    ServicesSection,
    Stack,
    StatsSection,
    StorySection,
    Text,
    type MenuCategory,
} from "@warrior-code/ui"

import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { Seo } from "@/components/seo/Seo"

interface RestaurantExampleProps {
    heroImage: string
}

const menu: MenuCategory[] = [
    {
        category: "Entrantes", items: [
            { name: "Burrata cremosa", description: "Tomate de temporada, aceite de albahaca y pan crujiente.", image: "https://i0.wp.com/koketo.es/wp-content/uploads/2025/05/Burrata_chefkoketo_009-copia.jpg?resize=790%2C593&ssl=1", price: "12,50 €"},
            { name: "Croquetas de jamón", description: "Bechamel suave, jamón ibérico y un toque de trufa.", image: "https://i.blogs.es/70b1b8/croquetas_jamon/450_1000.jpg", price: "10,00 €" },
            { name: "Carpaccio de presa", description: "Presa ibérica, parmesano, rúcula y aceite de oliva.", image: "https://blog.beher.com/wp-content/uploads/2025/09/carpaccio-de-presa-iberica-secretos-beher-1024x683.jpg", price: "14,50 €" },
        ]
    },
    {
        category: "Principales", items: [
            { name: "Lubina a la brasa", description: "Verduras asadas, patata panadera y jugo de limón.", price: "21,00 €" },
            { name: "Arroz meloso de temporada", description: "Caldo casero, producto de mercado y parmesano.", price: "18,50 €" },
            { name: "Carrillera al vino tinto", description: "Cocción lenta, puré de patata y verduras glaseadas.", price: "19,50 €" },
        ]
    },
]

const services = [
    { title: "Producto de temporada", description: "Trabajamos con ingredientes frescos para que cada plato tenga su mejor momento." },
    { title: "Cocina honesta", description: "Recetas reconocibles, producto protagonista y elaboraciones hechas con calma." },
    { title: "Un lugar para quedarse", description: "Un espacio pensado para comer bien, conversar y disfrutar sin prisas." },
]

const restaurantStats = [
    { value: String(menu.flatMap((section) => section.items).length), label: "platos fuera de carta" },
    { value: "4", label: "postres especiales" },
    { value: "3", label: "locales en la ciudad" },
]

export function RestaurantExample({ heroImage }: RestaurantExampleProps) {
    return (
        <main id="inicio" className="theme-restaurant min-h-screen bg-background text-foreground">
            <ScrollToTop />
            <Seo title="Casa Olivo | Ejemplo de web para restaurante" description="Ejemplo de una página web gastronómica para Casa Olivo, con carta, propuesta culinaria, horarios y reservas." />

            <header className="absolute inset-x-0 top-0 z-20">
                <Container>
                    <nav aria-label="Navegación principal" className="flex h-20 items-center justify-between border-b border-primary-foreground/20">
                        <a href="#inicio" className="rounded-sm font-serif text-xl font-semibold tracking-tight text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground">CASA OLIVO</a>
                        <div className="hidden items-center gap-8 text-sm text-primary-foreground/85 md:flex">
                            <a href="#historia" className="rounded-sm outline-none transition-colors hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary-foreground">Nuestra historia</a>
                            <a href="#carta" className="rounded-sm outline-none transition-colors hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary-foreground">Carta</a>
                            <a href="#contacto" className="rounded-sm outline-none transition-colors hover:text-primary-foreground focus-visible:ring-2 focus-visible:ring-primary-foreground">Contacto</a>
                        </div>
                        <a href="#reserva" className="rounded-full border border-primary-foreground/40 px-5 py-2.5 text-sm font-medium text-primary-foreground outline-none transition-colors hover:bg-primary-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-primary-foreground">Reservar mesa</a>
                    </nav>
                </Container>
            </header>

            <section className="relative isolate flex min-h-[720px] items-end overflow-hidden">
                <div className="absolute inset-[-16px] -z-20 scale-105 bg-cover bg-center blur-[3px]" style={{ backgroundImage: `url(${heroImage})` }} />
                <div className="absolute inset-0 -z-10 bg-background/45" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background/70 via-background/20 to-background/30" />
                <Container className="pb-24 pt-40">
                    <div className="max-w-3xl text-primary-foreground">
                        <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-primary-foreground/70">Cocina mediterránea</p>
                        <Heading as="h1" size="hero" className="max-w-3xl text-primary-foreground">Sabores que merecen quedarse.</Heading>
                        <Text size="lg" className="mt-6 max-w-xl text-primary-foreground/80">Producto de temporada, cocina honesta y un espacio pensado para disfrutar de cada momento alrededor de la mesa.</Text>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <a href="#reserva" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary-foreground">Reservar mesa</a>
                            <a href="#carta" className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 text-sm font-medium text-primary-foreground outline-none backdrop-blur-sm transition-colors hover:bg-primary-foreground/20 focus-visible:ring-2 focus-visible:ring-primary-foreground">Ver carta</a>
                        </div>
                    </div>
                </Container>
            </section>

            <StorySection
                id="historia"
                eyebrow="Nuestra historia"
                title="Una mesa donde el producto habla."
                paragraphs={[
                    "Casa Olivo nace de una idea sencilla: cocinar bien, utilizar buen producto y crear un lugar al que apetezca volver.",
                    "Nuestra cocina parte de recetas mediterráneas, producto local y una mirada contemporánea. No buscamos complicar las cosas, sino hacerlas bien.",
                ]}
            />
            <ServicesSection
                eyebrow="Lo que nos define"
                title="Comer bien también es una experiencia."
                items={services}
                className="bg-card"
                cardClassName="bg-background/50"
            />
            <MenuSection
                id="carta"
                eyebrow="Nuestra carta"
                title="Para compartir. Para disfrutar."
                description="Una selección que cambia con el producto y la temporada."
                sections={menu}
                align="center"
                layout="grid"
                columns={3}
                itemVariant={(item) => item.image ? "card" : "list"}
                imageAspect="wide"
            />
            <StatsSection items={restaurantStats} className="border-y border-border bg-card py-0" />

            <section id="reserva" className="relative overflow-hidden bg-secondary py-28 text-primary-foreground">
                <Container>
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-primary">Tu mesa te espera</p>
                        <Heading as="h2" size="xl" align="center" className="text-primary-foreground">Una buena comida empieza mucho antes del primer bocado.</Heading>
                        <Text size="lg" align="center" className="mx-auto mt-6 max-w-2xl text-primary-foreground/70">Reserva tu mesa y ven a disfrutar de nuestra cocina con calma.</Text>
                        <a href="#contacto" className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary-foreground">Reservar mesa</a>
                    </div>
                </Container>
            </section>

            <section id="contacto" className="py-20 sm:py-24 lg:py-32">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        <Stack gap="lg"><div><p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">Visítanos</p><Heading as="h2" size="xl">Estamos en el centro de Huelva.</Heading></div><Text size="lg" muted>Calle Ejemplo, 24<br />21001 Huelva</Text></Stack>
                        <div className="grid gap-8 sm:grid-cols-2">
                            <Stack gap="sm"><Heading as="h3" size="sm">Horarios</Heading><Text muted>Martes — Domingo<br />13:00 — 16:00<br />20:00 — 23:30</Text></Stack>
                            <Stack gap="sm"><Heading as="h3" size="sm">Reservas</Heading><Text muted><a href="tel:+34959000000" className="rounded-sm outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-primary">959 000 000</a><br /><a href="mailto:reservas@casaolivo.es" className="rounded-sm outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-primary">reservas@casaolivo.es</a></Text></Stack>
                        </div>
                    </div>
                </Container>
            </section>

            <footer className="border-t border-border bg-card py-8"><Container><div className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Casa Olivo | Warrior Code. Todos los derechos reservados.</p><a href="#contacto" className="w-fit rounded-sm outline-none transition-colors hover:text-accent focus-visible:ring-2 focus-visible:ring-primary">Contacto</a></div></Container></footer>
        </main>
    )
}
