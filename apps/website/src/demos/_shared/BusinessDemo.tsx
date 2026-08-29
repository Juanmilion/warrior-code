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
    const { business, contact, menu, process, services, stats, story } = config

    return (
        <main id="inicio" style={config.theme} className="min-h-screen bg-background text-foreground">
            <header className="absolute inset-x-0 top-0 z-10">
                <Container>
                    <nav aria-label="Navegación principal" className="flex h-20 items-center justify-between border-b border-primary-foreground/20">
                        <a href="#inicio" className="rounded-sm text-lg font-bold tracking-tight text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground">{business.name}</a>
                        <a href={business.primaryAction.href} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary-foreground">{business.primaryAction.label}</a>
                    </nav>
                </Container>
            </header>

            <ImageHero
                title={business.headline}
                description={business.description}
                imageSrc={business.heroImage}
                imageAlt={business.heroImageAlt}
                eyebrow={business.eyebrow}
                className="text-white"
                actions={<><a href={business.primaryAction.href} className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-primary-foreground">{business.primaryAction.label}</a>{business.secondaryAction && <a href={business.secondaryAction.href} className="rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground outline-none transition-colors hover:bg-primary-foreground/10 focus-visible:ring-2 focus-visible:ring-primary-foreground">{business.secondaryAction.label}</a>}</>}
            />

            <StorySection eyebrow={story.eyebrow} title={story.title} paragraphs={story.paragraphs} />
            <ServicesSection eyebrow={services.eyebrow} title={services.title} description={services.description} items={services.items} className="bg-card" cardClassName="bg-background/40" />
            {menu && <MenuSection id="carta" eyebrow={menu.eyebrow} title={menu.title} description={menu.description} sections={menu.sections} align="center" columns={3} itemVariant={(item) => item.image ? "card" : "list"} imageAspect="wide" />}
            <StatsSection items={stats} className="border-y border-border bg-secondary py-0" />
            {process && <Section><Container><Stack gap="xl"><SectionIntro eyebrow={process.eyebrow} title={process.title} /><ProcessSteps items={process.items} /></Stack></Container></Section>}
            <Section id="contacto" className="bg-card"><Container><Card className="mx-auto max-w-3xl bg-background/40"><Stack gap="lg"><SectionIntro eyebrow={contact.eyebrow} title={contact.title} /><Text muted>{contact.address.map((line) => <span key={line} className="block">{line}</span>)}</Text><div className="grid gap-3 sm:grid-cols-2"><InfoPill label="Teléfono" value={contact.phone} href={`tel:${contact.phone.replace(/\s/g, "")}`} />{contact.email && <InfoPill label="Email" value={contact.email} href={`mailto:${contact.email}`} />}</div></Stack></Card></Container></Section>
        </main>
    )
}
