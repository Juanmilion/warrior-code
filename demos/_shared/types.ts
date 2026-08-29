import type { CSSProperties } from "react"

import type { MenuCategory, ProcessStep, ServiceItem, StatItem } from "@warrior-code/ui"

export interface DemoConfig {
    seo: {
        title: string
        description: string
    }
    theme: CSSProperties & Record<`--${string}`, string>
    business: {
        name: string
        eyebrow: string
        headline: string
        description: string
        heroImage: string
        primaryAction: { label: string; href: string }
        secondaryAction?: { label: string; href: string }
    }
    story: {
        eyebrow: string
        title: string
        paragraphs: string[]
    }
    services: {
        eyebrow: string
        title: string
        description?: string
        items: ServiceItem[]
    }
    stats: StatItem[]
    process?: {
        eyebrow: string
        title: string
        items: ProcessStep[]
    }
    menu?: {
        eyebrow: string
        title: string
        description?: string
        sections: MenuCategory[]
    }
    contact: {
        eyebrow: string
        title: string
        address: string[]
        phone: string
        email?: string
    }
}
