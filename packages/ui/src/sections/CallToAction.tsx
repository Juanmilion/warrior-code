import { Heading } from "../typography/Heading"
import { Text } from "../typography/Text"
import { Container } from "../layout/Container"
import { cn } from "../lib/utils"

export interface CallToActionAction {
    label: string
    href: string
}

interface CallToActionProps {
    id?: string
    eyebrow?: string
    title: string
    description?: string
    action?: CallToActionAction
    variant?: "primary" | "secondary"
    center?: boolean
    className?: string
}

export function CallToAction({
    id,
    eyebrow,
    title,
    description,
    action,
    variant = "primary",
    center = false,
    className,
}: CallToActionProps) {
    const isPrimary = variant === "primary"

    return (
        <section
            id={id}
            className={cn(
                "py-20",
                isPrimary
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground",
                className,
            )}
        >
            <Container>
                <div
                    className={cn(
                        center
                            ? "mx-auto flex max-w-3xl flex-col items-center text-center"
                            : "flex flex-col gap-8 md:flex-row md:items-center md:justify-between",
                    )}
                >
                    <div
                        className={cn(
                            "max-w-2xl",
                            center && "max-w-3xl",
                        )}
                    >
                        {eyebrow && (
                            <p
                                className={cn(
                                    "mb-3 text-sm font-bold uppercase tracking-[0.2em]",
                                    isPrimary
                                        ? "text-primary-foreground/70"
                                        : "text-primary",
                                )}
                            >
                                {eyebrow}
                            </p>
                        )}

                        <Heading
                            as="h2"
                            size="xl"
                            align={center ? "center" : "left"}
                            className={cn(
                                isPrimary && "text-primary-foreground",
                            )}
                        >
                            {title}
                        </Heading>

                        {description && (
                            <Text
                                size="lg"
                                align={center ? "center" : "left"}
                                className={cn(
                                    "mt-4",
                                    center && "mx-auto max-w-2xl",
                                    isPrimary
                                        ? "text-primary-foreground/75"
                                        : "text-muted-foreground",
                                )}
                            >
                                {description}
                            </Text>
                        )}
                    </div>

                    {action && (
                        <a
                            href={action.href}
                            className={cn(
                                "shrink-0 rounded-full border px-7 py-3.5 text-sm font-bold transition-colors",
                                center && "mt-5",
                                isPrimary
                                    ? "border-background/10 bg-background text-foreground hover:bg-background/90"
                                    : "border-primary/20 bg-primary text-primary-foreground hover:bg-accent",
                            )}
                        >
                            {action.label}
                        </a>
                    )}
                </div>
            </Container>
        </section>
    )
}