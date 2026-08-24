import type { ReactNode } from "react"

export interface StackProps {
    children?: ReactNode
    className?: string
    direction?: "vertical" | "horizontal"
    gap?: "xs" | "sm" | "md" | "lg" | "xl"
    align?: "start" | "center" | "end" | "stretch"
    justify?: "start" | "center" | "end" | "between"
}

const gapClasses = {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
}

const alignClasses = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
}

const justifyClasses = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
}

export function Stack({
    children,
    className = "",
    direction = "vertical",
    gap = "md",
    align = "stretch",
    justify = "start",
}: StackProps) {
    const directionClass =
        direction === "horizontal" ? "flex-row" : "flex-col"

    return (
        <div
            className={`flex ${directionClass} ${gapClasses[gap]} ${alignClasses[align]} ${justifyClasses[justify]} ${className}`}
        >
            {children}
        </div>
    )
}