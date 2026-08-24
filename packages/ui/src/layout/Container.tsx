import type { ReactNode } from "react"

export interface ContainerProps {
    children?: ReactNode
    className?: string
    size?: "default" | "wide" | "narrow"
}

const sizeClasses = {
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
    narrow: "max-w-4xl",
}

export function Container({
    children,
    className = "",
    size = "default",
}: ContainerProps) {
    return (
        <div
            className={`mx-auto w-full px-6 ${sizeClasses[size]} ${className}`}
        >
            {children}
        </div>
    )
}