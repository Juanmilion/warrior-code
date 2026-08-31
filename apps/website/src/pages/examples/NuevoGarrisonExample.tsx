import {
    Card,
    Container,
    InfoPill,
    MenuSection,
    Stack,
    StatsSection,
    Text,
} from "@warrior-code/ui"

import garrisonLogo from "../../assets/examples/nuevo-garrison/nuevo-garrison.png"
import garrisonHero from "../../assets/examples/nuevo-garrison/nuevo-garrison-hero.jpeg"

export function NuevoGarrisonExample() {
    const menu = [
        {
            category: "Burgers",
            items: [
                {
                    name: "The Shelby",
                    description:
                        "Doble smash burger, cheddar madurado, bacon crujiente, cebolla caramelizada y salsa de la casa.",
                    price: "13,90 €",
                },
                {
                    name: "The Garrison",
                    description:
                        "Carne de vaca, cheddar, pepinillo, cebolla a la plancha, mostaza y nuestra salsa Garrison.",
                    price: "12,90 €",
                    featured: true,
                },
                {
                    name: "Arthur's",
                    description:
                        "Doble carne, doble cheddar, bacon, cebolla crujiente y salsa bourbon.",
                    price: "14,50 €",
                },
                {
                    name: "The Tommy",
                    description:
                        "Smash burger, provolone, bacon, cebolla caramelizada y salsa ahumada.",
                    price: "13,50 €",
                },
                {
                    name: "Polly",
                    description:
                        "Pollo crujiente, cheddar, lechuga, pepinillo y mayonesa de la casa.",
                    price: "12,90 €",
                },
                {
                    name: "John",
                    description:
                        "Doble smash, cheddar, bacon y salsa barbacoa ahumada.",
                    price: "13,90 €",
                },
            ],
        },
        {
            category: "Para acompañar",
            items: [
                {
                    name: "Fries",
                    description:
                        "Patatas crujientes con sal de la casa.",
                    price: "3,50 €",
                },
                {
                    name: "Loaded Fries",
                    description:
                        "Patatas, cheddar fundido, bacon crujiente y salsa Garrison.",
                    price: "6,50 €",
                },
                {
                    name: "Onion Rings",
                    description:
                        "Aros de cebolla crujientes con salsa de la casa.",
                    price: "5,50 €",
                },
            ],
        },
        {
            category: "Postres",
            items: [
                {
                    name: "Brownie",
                    description:
                        "Brownie de chocolate con interior fundente.",
                    price: "5,50 €",
                },
                {
                    name: "Cheesecake",
                    description:
                        "Tarta de queso cremosa con base de galleta.",
                    price: "5,90 €",
                },
            ],
        },
    ]

    const stats = [
        {
            value: "100%",
            label: "carne seleccionada",
        },
        {
            value: "SMASH",
            label: "hechas al momento",
        },
        {
            value: "HUELVA",
            label: "nuestra casa",
        },
    ]

    const contact =
    {
        phone: "666 48 60 88",
        email: "nuevogarrisonburger@gmail.com",
        address: ["Calle Cartagenera, 15", "21006"]
    }


    return (
        <main
            className="theme-nuevo-garrison min-h-screen overflow-x-hidden bg-background text-foreground"
        >
            {/* NAVBAR */}

            <header className="absolute inset-x-0 top-0 z-30">
                <Container>
                    <nav className="flex h-24 items-center justify-between border-b border-white/10">
                        <a
                            href="#inicio"
                            className="text-sm font-bold uppercase tracking-[0.25em] text-white transition-opacity hover:opacity-70"
                        >
                            Nuevo Garrison
                        </a>

                        <div className="flex items-center gap-8">
                            <a
                                href="#carta"
                                className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-primary sm:block"
                            >
                                Carta
                            </a>

                            <a
                                href="#contacto"
                                className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-primary sm:block"
                            >
                                Contacto
                            </a>

                            <a
                                href="#carta"
                                className="border border-primary px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                            >
                                Ver carta
                            </a>
                        </div>
                    </nav>
                </Container>
            </header>

            {/* HERO */}

            <section
                id="inicio"
                className="relative isolate min-h-[850px] overflow-hidden bg-black"
            >
                <img
                    src={garrisonHero}
                    alt="Nuevo Garrison Burger"
                    className="absolute left-1/2 top-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-20 blur-[1px]"
                />

                <div className="absolute inset-0 bg-black/80" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(143,38,54,0.18),transparent_55%)]" />

                <Container className="relative z-10 flex min-h-[850px] items-center justify-center pt-24">
                    <div className="mx-auto max-w-4xl text-center">

                        <p className="mb-8 text-xs font-bold uppercase tracking-[0.5em] text-primary">
                            Huelva · Since 2026
                        </p>

                        <div className="mx-auto mb-10 flex justify-center">
                            <img
                                src={garrisonLogo}
                                alt="Nuevo Garrison Burger"
                                className="max-h-48 w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
                            />
                        </div>

                        <div className="mx-auto mb-9 h-px w-20 bg-primary" />

                        <h1 className="font-serif text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
                            Burgers con
                            <br />
                            <span className="text-primary">
                                carácter.
                            </span>
                        </h1>

                        <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
                            Carne, fuego y actitud. Hamburguesas hechas al
                            momento para quienes no vienen a pedir permiso.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <a
                                href="#carta"
                                className="border border-primary bg-primary px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
                            >
                                Ver nuestra carta
                            </a>

                            <a
                                href="#contacto"
                                className="border border-white/25 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all hover:border-white hover:bg-white/5"
                            >
                                Dónde estamos
                            </a>
                        </div>
                    </div>
                </Container>

                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10">
                    <Container>
                        <div className="flex h-16 items-center justify-between">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/30">
                                Nuevo Garrison Burger
                            </span>

                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/70">
                                Huelva
                            </span>
                        </div>
                    </Container>
                </div>
            </section>

            {/* MANIFIESTO */}

            <section className="border-b border-border bg-background py-28 sm:py-36">
                <Container>
                    <div className="mx-auto max-w-4xl text-center">

                        <p className="mb-6 text-xs font-bold uppercase tracking-[0.4em] text-primary">
                            Nuestro código
                        </p>

                        <h2 className="font-serif text-4xl font-bold uppercase leading-tight tracking-tight sm:text-6xl">
                            Carne primero.
                            <br />
                            Todo lo demás después.
                        </h2>

                        <div className="mx-auto my-8 flex items-center justify-center gap-4">
                            <span className="h-px w-16 bg-primary/50" />
                            <span className="text-sm text-primary">◆</span>
                            <span className="h-px w-16 bg-primary/50" />
                        </div>

                        <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                            Seleccionamos buenos ingredientes, los tratamos
                            como se merecen y los ponemos entre dos panes.
                            Sin complicaciones. Sin hacer ruido.
                        </p>
                    </div>
                </Container>
            </section>

            {/* ESPECIALIDADES */}

            <section className="bg-secondary py-24 sm:py-32">
                <Container>
                    <div className="mb-14 max-w-2xl">
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-primary">
                            The Garrison
                        </p>

                        <h2 className="font-serif text-4xl font-bold uppercase tracking-tight sm:text-5xl">
                            Nuestra forma de hacerlo.
                        </h2>
                    </div>

                    <div className="grid gap-px border border-border bg-border md:grid-cols-3">
                        {[
                            {
                                number: "01",
                                title: "Carne",
                                text: "Carne seleccionada, preparada y cocinada al momento.",
                            },
                            {
                                number: "02",
                                title: "Fuego",
                                text: "La plancha caliente. El queso fundido. El punto exacto.",
                            },
                            {
                                number: "03",
                                title: "Actitud",
                                text: "Una burger no tiene que ser complicada para ser memorable.",
                            },
                        ].map((item) => (
                            <article
                                key={item.number}
                                className="group bg-background p-9 transition-colors hover:bg-card sm:p-11"
                            >
                                <span className="mb-10 block text-xs font-bold tracking-[0.3em] text-primary">
                                    {item.number}
                                </span>

                                <h3 className="font-serif text-3xl font-bold uppercase">
                                    {item.title}
                                </h3>

                                <div className="my-6 h-px w-10 bg-primary/60 transition-all duration-300 group-hover:w-20" />

                                <p className="text-sm leading-7 text-muted-foreground">
                                    {item.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CARTA */}

            <section
                id="carta"
                className="bg-background py-28 sm:py-36"
            >
                <Container>
                    <div className="mx-auto mb-16 max-w-3xl text-center">

                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.45em] text-primary">
                            The Menu
                        </p>

                        <h2 className="font-serif text-5xl font-bold uppercase tracking-tight sm:text-7xl">
                            La carta
                        </h2>

                        <div className="mx-auto my-8 flex items-center justify-center gap-4">
                            <span className="h-px w-20 bg-primary/50" />
                            <span className="text-primary">◆</span>
                            <span className="h-px w-20 bg-primary/50" />
                        </div>

                        <p className="text-sm leading-7 text-muted-foreground">
                            Lo que sale de nuestra cocina. Nada más.
                        </p>
                    </div>

                    <MenuSection
                        eyebrow=""
                        title=""
                        description=""
                        sections={menu}
                        align="center"
                        columns={3}
                        itemVariant={(item) =>
                            item.image ? "card" : "list"
                        }
                        imageAspect="wide"
                    />
                </Container>
            </section>

            {/* STATS */}

            <section className="border-y border-primary/20 bg-card">
                <Container>
                    <StatsSection
                        items={stats}
                        className="py-0"
                    />
                </Container>
            </section>

            {/* FRASE */}

            <section className="relative overflow-hidden bg-black py-32 sm:py-40">
                <div className="absolute inset-0 opacity-[0.08]">
                    <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary" />
                    <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary" />
                    <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary" />
                </div>

                <Container className="relative">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-9 text-xs font-bold uppercase tracking-[0.4em] text-primary">
                            Nuevo Garrison
                        </p>

                        <blockquote className="font-serif text-3xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
                            Buena carne.
                            <br />
                            Buen pan.
                            <br />
                            <span className="text-primary">
                                Cero tonterías.
                            </span>
                        </blockquote>
                    </div>
                </Container>
            </section>

            {/* CONTACTO */}

            <section
                id="contacto"
                className="bg-secondary py-24 sm:py-32"
            >
                <Container>
                    <Card className="mx-auto max-w-4xl border-border bg-background p-0 shadow-none">
                        <div className="grid md:grid-cols-2">

                            <div className="border-b border-border p-8 sm:p-12 md:border-b-0 md:border-r">
                                <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-primary">
                                    Find us
                                </p>

                                <h2 className="font-serif text-4xl font-bold uppercase">
                                    Ven a vernos.
                                </h2>

                                <div className="my-7 h-px w-12 bg-primary" />

                                <Text muted>
                                    <span className="block">
                                        Huelva, Andalucía
                                    </span>

                                    <span className="mt-1 block">
                                        {contact?.address?.join(" · ") ??
                                            "Huelva"}
                                    </span>
                                </Text>
                            </div>

                            <div className="p-8 sm:p-12">
                                <Stack gap="md">
                                    <InfoPill
                                        label="Teléfono"
                                        value={
                                            contact?.phone ??
                                            "959 000 000"
                                        }
                                        href={`tel:${(
                                            contact?.phone ??
                                            "959000000"
                                        ).replace(/\s/g, "")}`}
                                    />

                                    {contact?.email && (
                                        <InfoPill
                                            label="Email"
                                            value={contact.email}
                                            href={`mailto:${contact.email}`}
                                        />
                                    )}

                                </Stack>
                            </div>

                        </div>
                    </Card>
                </Container>
            </section>

            {/* FOOTER */}

            <footer className="border-t border-white/10 bg-black">
                <Container>
                    <div className="flex min-h-28 flex-col items-center justify-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">

                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                                Nuevo Garrison
                            </p>

                            <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/30">
                                Burgers · Huelva
                            </p>
                        </div>

                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                            © {new Date().getFullYear()} Nuevo Garrison
                        </p>
                    </div>
                </Container>
            </footer>
        </main>
    )
}