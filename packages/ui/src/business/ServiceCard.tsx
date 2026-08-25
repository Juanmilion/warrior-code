import type { ReactNode } from "react"

import { Card } from "../cards/Card"
import { Heading } from "../typography/Heading"
import { Text } from "../typography/Text"
import { Stack } from "../layout/Stack"

export interface ServiceCardProps {
    title: string
    description: string
    icon?: ReactNode
    href?: string
    className?: string
}

export function ServiceCard({
    title,
    description,
    icon,
    href,
    className = "",
}: ServiceCardProps) {
    const content = (
        <Card
            variant="bordered"
            className={`h-full transition-transform duration-200 hover:-translate-y-1 ${className}`}
        >
            <Stack gap="md">
                {icon && (
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {icon}
                    </div>
                )}

                <Stack gap="sm">
                    <Heading as="h3" size="sm">
                        {title}
                    </Heading>

                    <Text size="sm" muted>
                        {description}
                    </Text>
                </Stack>
            </Stack>
        </Card>
    )

    if (!href) {
        return content
    }

    return (
        <a
            href={href}
            className="block rounded-2xl outline-none focus-visible:ring-3 focus-visible:ring-primary/30"
        >
            {content}
        </a>
    )
}