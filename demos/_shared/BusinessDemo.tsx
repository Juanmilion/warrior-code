import {
    Card,
    Container,
    Heading,
    MenuSection,
    ProcessSteps,
    Section,
    ServicesSection,
    Stack,
    StatsSection,
    StorySection,
    Text,
} from "@warrior-code/ui"

import type { DemoConfig } from "./types"

interface BusinessDemoProps {
    config: DemoConfig
}

export function BusinessDemo({ config }: BusinessDemoProps) {
    const { business, contact, menu, process, services, stats, story } = config

    return (
        <main id="inicio" style={config.theme} className="min-h-screen bg-background text-foreground">
            <header className="absolute inset-x-0 top-0 z-10">
                <Container>
                    <nav aria-label="Navegación principal" className="flex h-20 items-center justify-between border-b border-primary-foreground/20">
                        <a href="#inicio" className="rounded-sm text-lg font-bold tracking-tight text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground">
                            {business.name}
                        </a>
                        <a href={business.primaryAction.href} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary-foreground">
                            {business.primaryAction.label}
                        </a>
                    </nav>
                </Container>
            </header>

            <section className="relative isolate flex min-h-[640px] items-end overflow-hidden">
                <img src={business.heroImage} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
                <div className="absolute inset-0 -z-10 bg-background/65" />
                <Container className="pb-20 pt-36 sm:pb-24">
                    <div className="max-w-3xl text-primary-foreground">
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">{business.eyebrow}</p>
                        <Heading as="h1" size="hero" className="text-primary-foreground">{business.headline}</Heading>
                        <Text size="lg" className="mt-6 max-w-2xl text-primary-foreground/80">{business.description}</Text>
                        <div className="mt-9 flex flex-wrap gap-3">
                            <a href={business.primaryAction.href} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary-foreground">{business.primaryAction.label}</a>
                            {business.secondaryAction && <a href={business.secondaryAction.href} className="rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground outline-none transition-colors hover:bg-primary-foreground/10 focus-visible:ring-2 focus-visible:ring-primary-foreground">{business.secondaryAction.label}</a>}
                        </div>
                    </div>
                </Container>
            </section>

            <StorySection eyebrow={story.eyebrow} title={story.title} paragraphs={story.paragraphs} />
            <ServicesSection eyebrow={services.eyebrow} title={services.title} description={services.description} items={services.items} className="bg-card" cardClassName="bg-background/40" />
            {menu && <MenuSection eyebrow={menu.eyebrow} title={menu.title} description={menu.description} sections={menu.sections} align="center" columns={3} itemVariant={(item) => item.image ? "card" : "list"} imageAspect="wide" />}
            <StatsSection items={stats} className="border-y border-border bg-secondary py-0" />

            {process && <Section><Container><Stack gap="xl"><div className="max-w-2xl"><p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{process.eyebrow}</p><Heading as="h2" size="xl">{process.title}</Heading></div><ProcessSteps items={process.items} /></Stack></Container></Section>}

            <Section id="contacto" className="bg-card"><Container><Card className="mx-auto max-w-3xl bg-background/40"><Stack gap="md"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{contact.eyebrow}</p><Heading as="h2" size="lg">{contact.title}</Heading><Text muted>{contact.address.map((line) => <span key={line} className="block">{line}</span>)}</Text><div className="flex flex-wrap gap-x-6 gap-y-3"><a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="rounded-sm font-semibold text-primary outline-none hover:underline focus-visible:ring-2 focus-visible:ring-primary">{contact.phone}</a>{contact.email && <a href={`mailto:${contact.email}`} className="rounded-sm font-semibold text-primary outline-none hover:underline focus-visible:ring-2 focus-visible:ring-primary">{contact.email}</a>}</div></Stack></Card></Container></Section>
        </main>
    )
}
