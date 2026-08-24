import type { ReactNode } from "react"

export interface GridProps {
    children?: ReactNode
    className?: string
    columns?: 1 | 2 | 3 | 4 | 5 | 6
    gap?: "xs" | "sm" | "md" | "lg" | "xl"
}

const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
}

const gapClasses = {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
}

export function Grid({
    children,
    className = "",
    columns = 3,
    gap = "md",
}: GridProps) {
    return (
        <div
            className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}
        >
            {children}
        </div>
    )
}