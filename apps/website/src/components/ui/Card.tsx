import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface CardProps {
    children: ReactNode
    className?: string
}

export function Card({ children, className }: CardProps) {
    return (
        <div
            className={cn(
                "group relative rounded-2xl border border-primary/20 bg-gradient-to-br from-card to-card/95 p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1",
                className
            )}
        >
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
            {children}
        </div>
    )
}