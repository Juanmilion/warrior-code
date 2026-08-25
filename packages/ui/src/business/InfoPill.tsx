export interface InfoPillProps {
    label: string
    value?: string
    className?: string
}

export function InfoPill({
    label,
    value,
    className = "",
}: InfoPillProps) {
    return (
        <div
            className={`rounded-[1.25rem] border border-border bg-card p-5 ${className}`}
        >
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {label}
            </p>

            {value && (
                <p className="mt-3 text-lg font-semibold text-foreground">
                    {value}
                </p>
            )}
        </div>
    )
}
