import { cn } from "../lib/utils"

export interface StatItem {
    value: string
    label: string
}

interface StatsGridProps {
    items: StatItem[]
    className?: string
}

export function StatsGrid({
    items,
    className,
}: StatsGridProps) {
    return (
        <div
            className={cn(
                "grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0",
                className,
            )}
        >
            {items.map((item) => (
                <div
                    key={`${item.value}-${item.label}`}
                    className="px-6 py-10 text-center sm:py-12"
                >
                    <p className="text-3xl font-black tracking-tight text-primary">
                        {item.value}
                    </p>

                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                        {item.label}
                    </p>
                </div>
            ))}
        </div>
    )
}