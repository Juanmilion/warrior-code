import {
    Card,
    Container,
    ImageHero,
    InfoPill,
    MenuSection,
    ProcessSteps,
    Section,
    SectionIntro,
    ServicesSection,
    Stack,
    StatsSection,
    StorySection,
    Text,
} from "@warrior-code/ui"

import type { DemoConfig } from "./types"

export function BusinessDemo({ config }: { config: DemoConfig }) {
    const {
        business,
        contact,
        menu,
        process,
        services,
        stats,
        story,
    } = config

    return (
        <main
            id="inicio"
            style={config.theme}
            className="min-h-screen overflow-x-hidden bg-background text-foreground"
        >
            {/* NAVBAR */}

            <header className="absolute inset-x-0 top-0 z-30">
                <Container>
                    <nav
                        aria-label="Navegación principal"
                        className="flex h-24 items-center justify-between border-b border-white/15"
                    >
                        <a
                            href="#inicio"
                            className="rounded-sm text-lg font-bold tracking-tight text-white outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-white"
                        >
                            {business.name}
                        </a>

                        <div className="flex items-center gap-3">
                            <a
                                href="#contacto"
                                className="hidden rounded-full px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 sm:inline-flex"
                            >
                                Contacto
                            </a>

                            <a
                                href={business.primaryAction.href}
                                className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm outline-none transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-md focus-visible:ring-2 focus-visible:ring-white"
                            >
                                {business.primaryAction.label}
                            </a>
                        </div>
                    </nav>
                </Container>
            </header>

            {/* HERO */}

            <ImageHero
                title={business.headline}
                description={business.description}
                imageSrc={business.heroImage}
                imageAlt={business.heroImageAlt}
                eyebrow={business.eyebrow}
                overlayClassName="bg-black/45"
                actions={
                    <>
                        <a
                            href={business.primaryAction.href}
                            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg outline-none transition-all hover:-translate-y-0.5 hover:bg-accent hover:shadow-xl focus-visible:ring-2 focus-visible:ring-white"
                        >
                            {business.primaryAction.label}
                        </a>

                        {business.secondaryAction && (
                            <a
                                href={business.secondaryAction.href}
                                className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm outline-none transition-all hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white"
                            >
                                {business.secondaryAction.label}
                            </a>
                        )}
                    </>
                }
            />

            {/* STORY */}

            <Section className="bg-background">
                <Container>
                    <div className="mx-auto max-w-3xl">
                        <StorySection
                            eyebrow={story.eyebrow}
                            title={story.title}
                            paragraphs={story.paragraphs}
                        />
                    </div>
                </Container>
            </Section>

            {/* SERVICES */}

            <section className="bg-card">
                <ServicesSection
                    eyebrow={services.eyebrow}
                    title={services.title}
                    description={services.description}
                    items={services.items}
                    className="bg-card"
                    cardClassName="bg-background/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                />
            </section>

            {/* MENU */}

            {menu && (
                <section
                    id="carta"
                    className="bg-background"
                >
                    <MenuSection
                        eyebrow={menu.eyebrow}
                        title={menu.title}
                        description={menu.description}
                        sections={menu.sections}
                        align="center"
                        columns={3}
                        itemVariant={(item) =>
                            item.image ? "card" : "list"
                        }
                        imageAspect="wide"
                    />
                </section>
            )}

            {/* STATS */}

            <section className="border-y border-border bg-secondary">
                <StatsSection
                    items={stats}
                    className="py-0"
                />
            </section>

            {/* PROCESS */}

            {process && (
                <Section className="bg-background">
                    <Container>
                        <Stack gap="xl">
                            <SectionIntro
                                eyebrow={process.eyebrow}
                                title={process.title}
                            />

                            <ProcessSteps items={process.items} />
                        </Stack>
                    </Container>
                </Section>
            )}

            {/* CONTACT */}

            <section
                id="contacto"
                className="bg-card py-20 sm:py-24 lg:py-32"
            >
                <Container>
                    <Card className="mx-auto max-w-3xl border-border/60 bg-background/70 shadow-sm">
                        <Stack gap="lg">
                            <SectionIntro
                                eyebrow={contact.eyebrow}
                                title={contact.title}
                            />

                            <Text muted>
                                {contact.address.map((line) => (
                                    <span
                                        key={line}
                                        className="block"
                                    >
                                        {line}
                                    </span>
                                ))}
                            </Text>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <InfoPill
                                    label="Teléfono"
                                    value={contact.phone}
                                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                                />

                                {contact.email && (
                                    <InfoPill
                                        label="Email"
                                        value={contact.email}
                                        href={`mailto:${contact.email}`}
                                    />
                                )}
                            </div>
                        </Stack>
                    </Card>
                </Container>
            </section>

            {/* FOOTER */}

            <footer className="border-t border-border bg-background">
                <Container>
                    <div className="flex min-h-20 items-center justify-between gap-4">
                        <p className="text-sm font-medium">
                            {business.name}
                        </p>

                        <p className="text-xs text-muted-foreground">
                            © {new Date().getFullYear()}
                        </p>
                    </div>
                </Container>
            </footer>
        </main>
    )
}