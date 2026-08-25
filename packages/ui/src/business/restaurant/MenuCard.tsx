import type { MenuItem } from "./types"
import { Card } from "../../cards/Card"
import { Stack } from "../../layout/Stack"
import { Text } from "../../typography/Text"
import { Heading } from "../../typography/Heading"

export interface MenuCardProps {
    item: MenuItem
    variant?: "card" | "list"
    className?: string
}

export function MenuCard({
    item,
    variant = "card",
    className = "",
}: MenuCardProps) {
    if (variant === "list") {
        return (
            <article
                className={`border-b border-border pb-6 last:border-0 ${className}`}
            >
                <div className="flex items-baseline justify-between gap-6">
                    <Heading as="h4" size="sm">
                        {item.name}
                    </Heading>

                    {item.price && (
                        <span className="shrink-0 text-sm font-semibold text-foreground">
                            {item.price}
                        </span>
                    )}
                </div>

                {item.description && (
                    <Text
                        size="sm"
                        muted
                        className="mt-2 max-w-2xl"
                    >
                        {item.description}
                    </Text>
                )}

                {item.featured && (
                    <span className="mt-3 inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        Especialidad
                    </span>
                )}
            </article>
        )
    }

    return (
        <Card
            padding="none"
            className={`overflow-hidden ${className}`}
        >
            {item.image && (
                <div className="aspect-[4/3] overflow-hidden">
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                    />
                </div>
            )}

            <div className="p-6">
                <Stack gap="sm">
                    <div className="flex items-start justify-between gap-4">
                        <Heading as="h3" size="sm">
                            {item.name}
                        </Heading>

                        {item.price && (
                            <span className="shrink-0 text-sm font-semibold">
                                {item.price}
                            </span>
                        )}
                    </div>

                    {item.description && (
                        <Text size="sm" muted>
                            {item.description}
                        </Text>
                    )}

                    {item.featured && (
                        <span className="w-fit rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                            Especialidad
                        </span>
                    )}
                </Stack>
            </div>
        </Card>
    )
}