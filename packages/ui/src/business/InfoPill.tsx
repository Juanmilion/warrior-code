export interface InfoPillProps {
    label: string
    value?: string
    href?: string
    className?: string
}

export function InfoPill({
    label,
    value,
    href,
    className = "",
}: InfoPillProps) {
    return (
        <div className={`rounded-[1.25rem] border border-border bg-card p-5 ${className}`}>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {label}
            </p>

            {value && (
                href ? (
                    <a href={href} className="mt-3 block rounded-sm text-lg font-semibold text-foreground outline-none hover:text-primary focus-visible:ring-2 focus-visible:ring-primary">
                        {value}
                    </a>
                ) : <p className="mt-3 text-lg font-semibold text-foreground">{value}</p>
            )}
        </div>
    )
}
