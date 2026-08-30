import type { ReactNode } from "react"

import { Container } from "../layout/Container"
import { Heading } from "../typography/Heading"
import { Text } from "../typography/Text"

export interface ImageHeroProps {
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    eyebrow?: string
    actions?: ReactNode
    className?: string
    overlayClassName?: string
}

export function ImageHero({
    title,
    description,
    imageSrc,
    imageAlt,
    eyebrow,
    actions,
    className = "",
    overlayClassName = "bg-black/45",
}: ImageHeroProps) {
    return (
        <section
            className={`relative isolate flex min-h-[720px] items-center overflow-hidden ${className}`}
        >
            {/* Background image */}
            <div className="absolute inset-0 -z-20 overflow-hidden">
                <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full scale-105 object-cover blur-[2px] brightness-[0.6]"
                />
            </div>

            {/* Dark overlay */}
            <div
                className={`absolute inset-0 -z-10 ${overlayClassName}`}
            />

            {/* Hero content */}
            <Container className="pt-28 pb-20 sm:pt-32 sm:pb-24">
                <div className="max-w-3xl">
                    {eyebrow && (
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                            {eyebrow}
                        </p>
                    )}

                    <Heading
                        as="h1"
                        size="hero"
                        className="max-w-3xl text-white"
                    >
                        {title}
                    </Heading>

                    <Text
                        size="lg"
                        className="mt-6 max-w-2xl text-white/80"
                    >
                        {description}
                    </Text>

                    {actions && (
                        <div className="mt-9 flex flex-wrap gap-3">
                            {actions}
                        </div>
                    )}
                </div>
            </Container>
        </section>
    )
}