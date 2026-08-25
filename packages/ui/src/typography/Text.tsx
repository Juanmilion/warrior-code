import type { ElementType, ReactNode } from "react"

export interface TextProps {
    children: ReactNode
    as?: Extract<
        ElementType,
        "p" | "span" | "div" | "small"
    >
    size?: "sm" | "md" | "lg"
    muted?: boolean
    align?: "left" | "center" | "right"
    className?: string
}

const sizeClasses = {
    sm: "text-sm leading-6",
    md: "text-base leading-7",
    lg: "text-lg leading-8",
}

const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
}

export function Text({
    children,
    as: Component = "p",
    size = "md",
    muted = false,
    align = "left",
    className = "",
}: TextProps) {
    return (
        <Component
            className={`${muted ? "text-muted-foreground" : "text-foreground"
                } ${sizeClasses[size]} ${alignClasses[align]} ${className}`}
        >
            {children}
        </Component>
    )
}