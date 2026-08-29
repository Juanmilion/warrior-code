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
    overlayClassName = "bg-background/65",
}: ImageHeroProps) {
    return (
        <section className={`relative isolate flex min-h-[640px] items-end overflow-hidden ${className}`}>
            <img src={imageSrc} alt={imageAlt} className="absolute inset-0 -z-20 h-full w-full object-cover" />
            <div className={`absolute inset-0 -z-10 ${overlayClassName}`} />
            <Container className="pb-20 pt-36 sm:pb-24">
                <div className="max-w-3xl text-primary-foreground">
                    {eyebrow && <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>}
                    <Heading as="h1" size="hero" className="text-primary-foreground">{title}</Heading>
                    <Text size="lg" className="mt-6 max-w-2xl text-primary-foreground/80">{description}</Text>
                    {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
                </div>
            </Container>
        </section>
    )
}
