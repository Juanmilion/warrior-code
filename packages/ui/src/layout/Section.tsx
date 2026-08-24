import type { ReactNode } from "react"

export interface SectionProps {
    children?: ReactNode
    eyebrow?: string
    title?: string
    description?: string
    id?: string
    className?: string
    contentClassName?: string
    align?: "left" | "center"
}

export function Section({
    children,
    eyebrow,
    title,
    description,
    id,
    className = "",
    contentClassName = "",
    align = "left",
}: SectionProps) {
    const isCentered = align === "center"

    return (
        <section
            id={id}
            className={`py-20 sm:py-24 lg:py-32 ${className}`}
        >
            <div
                className={`mx-auto max-w-7xl px-6 ${contentClassName}`}
            >
                {(eyebrow || title || description) && (
                    <header
                        className={`mb-12 max-w-2xl ${isCentered ? "mx-auto text-center" : ""
                            }`}
                    >
                        {eyebrow && (
                            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                                {eyebrow}
                            </p>
                        )}

                        {title && (
                            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                                {title}
                            </h2>
                        )}

                        {description && (
                            <p className="mt-4 text-base leading-7 text-muted-foreground sm:text-lg">
                                {description}
                            </p>
                        )}
                    </header>
                )}

                {children}
            </div>
        </section>
    )
}