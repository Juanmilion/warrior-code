import { cn } from "../lib/utils"
import { Heading } from "../typography/Heading"
import { Text } from "../typography/Text"
import { Stack } from "../layout/Stack"

export interface ProcessStep {
    number: string
    title: string
    description: string
}

interface ProcessStepsProps {
    items: ProcessStep[]
    className?: string
    itemClassName?: string
}

export function ProcessSteps({
    items,
    className,
    itemClassName,
}: ProcessStepsProps) {
    return (
        <div
            className={cn(
                "grid gap-6 lg:grid-cols-3",
                className,
            )}
        >
            {items.map((step) => (
                <div
                    key={step.number}
                    className={cn(
                        "rounded-[var(--radius)] border border-border bg-card p-6",
                        itemClassName,
                    )}
                >
                    <Stack gap="md">
                        <span className="text-sm font-black tracking-[0.15em] text-primary">
                            {step.number}
                        </span>

                        <Heading as="h3" size="md">
                            {step.title}
                        </Heading>

                        <Text muted>
                            {step.description}
                        </Text>
                    </Stack>
                </div>
            ))}
        </div>
    )
}