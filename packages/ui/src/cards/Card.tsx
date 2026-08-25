import type { ReactNode } from "react"

export interface CardProps {
    children: ReactNode
    className?: string
    padding?: "none" | "sm" | "md" | "lg"
    variant?: "default" | "bordered" | "elevated"
}

const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
}

const variantClasses = {
    default: "bg-card",
    bordered: "border border-border bg-card",
    elevated: "border border-border bg-card shadow-lg",
}

export function Card({
    children,
    className = "",
    padding = "md",
    variant = "bordered",
}: CardProps) {
    return (
        <div
            className={`rounded-2xl ${paddingClasses[padding]} ${variantClasses[variant]} ${className}`}
        >
            {children}
        </div>
    )
}