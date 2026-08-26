import type { ReactNode } from "react"
import { Heading } from "../typography/Heading"
import { Text } from "../typography/Text"
import { Container } from "../layout/Container"
import { cn } from "../lib/utils"

export interface ImageHeroAction {
    label: string
    href: string
    variant?: "primary" | "secondary"
}

interface ImageHeroProps {
    image: string
    eyebrow?: string
    title: ReactNode
    description?: string
    actions?: ImageHeroAction[]
    tone?: "dark" | "light" | "primary"
    className?: string
}

export function ImageHero({
    image,
    eyebrow,
    title,
    description,
    actions = [],
    tone = "dark",
    className,
}: ImageHeroProps) {
    const isDark = tone === "dark"
    const isLight = tone === "light"
    const isPrimary = tone === "primary"

    const usesLightOverlay = isLight || isPrimary

    return (
        <section
            className={cn(
                "relative isolate flex min-h-[720px] items-end overflow-hidden",
                className,
            )}
        >
            {/* IMAGE */}
            <div
                className="absolute inset-[-16px] -z-20 scale-105 bg-cover bg-center blur-[3px]"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            />

            {/* CONTRASTE */}
            <div
                className={cn(
                    "absolute inset-0 -z-10",
                    usesLightOverlay
                        ? "bg-black/60"
                        : "bg-white/40",
                )}
            />

            {/* GRADIENT */}
            <div
                className={cn(
                    "absolute inset-0 -z-10",
                    usesLightOverlay
                        ? "bg-gradient-to-t from-black/90 via-black/55 to-black/20"
                        : "bg-gradient-to-t from-white/85 via-white/35 to-white/10",
                )}
            />

            <Container className="pb-24 pt-40">
                <div className="max-w-3xl">

                    {/* EYEBROW */}
                    {eyebrow && (
                        <p
                            className={cn(
                                "mb-5 text-sm font-medium uppercase tracking-[0.25em]",
                                isDark && "text-black/65",
                                isLight && "text-white/70",
                                isPrimary && "text-primary",
                            )}
                        >
                            {eyebrow}
                        </p>
                    )}

                    {/* TITLE */}
                    <Heading
                        as="h1"
                        size="hero"
                        className={cn(
                            "max-w-3xl",
                            isDark && "text-black",
                            isLight && "text-white",
                            isPrimary && "text-primary",
                        )}
                    >
                        {title}
                    </Heading>

                    {/* DESCRIPTION */}
                    {description && (
                        <Text
                            size="lg"
                            className={cn(
                                "mt-6 max-w-xl",
                                isDark && "text-black/70",
                                isLight && "text-white/80",
                                isPrimary && "text-primary/80",
                            )}
                        >
                            {description}
                        </Text>
                    )}

                    {/* ACTIONS */}
                    {actions.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-3">
                            {actions.map((action) => (
                                <a
                                    key={`${action.label}-${action.href}`}
                                    href={action.href}
                                    className={cn(
                                        "rounded-full px-6 py-3 text-sm font-semibold transition-colors",
                                        action.variant === "secondary"
                                            ? isDark
                                                ? "border border-black/20 bg-black/5 text-black backdrop-blur-sm hover:bg-black/10"
                                                : "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                                            : "bg-primary text-primary-foreground hover:bg-accent",
                                    )}
                                >
                                    {action.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    )
}