import type { ReactNode } from "react"

import { Grid } from "../layout/Grid"
import { Section } from "../layout/Section"
import { ServiceCard } from "../business/ServiceCard"

export interface ServiceItem {
    title: string
    description: string
    icon?: ReactNode
    href?: string
}

export interface ServicesSectionProps {
    eyebrow?: string
    title: string
    items: ServiceItem[]
    id?: string
    description?: string
    columns?: 1 | 2 | 3 | 4 | 5 | 6
    align?: "left" | "center"
    cardClassName?: string
    className?: string
}

export function ServicesSection({
    eyebrow,
    title,
    items,
    id,
    description,
    columns = 3,
    align,
    cardClassName,
    className = "",
}: ServicesSectionProps) {
    return (
        <Section
            id={id}
            eyebrow={eyebrow}
            title={title}
            description={description}
            align={align}
            className={className}
        >
            <Grid columns={columns} gap="lg" className="mt-6 sm:mt-8">
                {items.map((item) => (
                    <ServiceCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        icon={item.icon}
                        href={item.href}
                        className={cardClassName}
                    />
                ))}
            </Grid>
        </Section>
    )
}
