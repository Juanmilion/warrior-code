import type { ElementType, ReactNode } from "react"

export interface HeadingProps {
    children: ReactNode
    as?: Extract<ElementType, "h1" | "h2" | "h3" | "h4" | "h5" | "h6">
    size?: "sm" | "md" | "lg" | "xl" | "hero"
    align?: "left" | "center" | "right"
    className?: string
}

const sizeClasses = {
    sm: "text-xl font-semibold tracking-tight sm:text-2xl",
    md: "text-2xl font-semibold tracking-tight sm:text-3xl",
    lg: "text-3xl font-bold tracking-tight sm:text-4xl",
    xl: "text-4xl font-bold tracking-tight sm:text-5xl",
    hero: "text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl",
}

const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
}

export function Heading({
    children,
    as: Component = "h2",
    size = "md",
    align = "left",
    className = "",
}: HeadingProps) {
    return (
        <Component
            className={`text-foreground ${sizeClasses[size]} ${alignClasses[align]} ${className}`}
        >
            {children}
        </Component>
    )
}