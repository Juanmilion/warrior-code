import { Section } from "../layout/Section"
import { StatsGrid, type StatItem } from "../business/StatsGrid"

export interface StatsSectionProps {
    items: StatItem[]
    id?: string
    className?: string
}

export function StatsSection({
    items,
    id,
    className = "",
}: StatsSectionProps) {
    return (
        <Section id={id} className={className}>
            <StatsGrid items={items} />
        </Section>
    )
}
