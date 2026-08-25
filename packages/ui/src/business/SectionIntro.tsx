import { Heading } from "../typography/Heading"
import { Text } from "../typography/Text"

export interface SectionIntroProps {
    eyebrow: string
    title: string
    description?: string
    align?: "left" | "center"
    eyebrowClassName?: string
    titleClassName?: string
    descriptionClassName?: string
    className?: string
}

export function SectionIntro({
    eyebrow,
    title,
    description,
    align = "left",
    eyebrowClassName = "",
    titleClassName = "",
    descriptionClassName = "",
    className = "",
}: SectionIntroProps) {
    return (
        <div className={className}>
            <p
                className={`mb-4 text-sm font-medium uppercase tracking-[0.2em] text-primary ${eyebrowClassName} ${
                    align === "center" ? "text-center" : "text-left"
                }`}
            >
                {eyebrow}
            </p>

            <Heading
                as="h2"
                size="xl"
                align={align}
                className={titleClassName}
            >
                {title}
            </Heading>

            {description && (
                <Text
                    size="lg"
                    muted
                    align={align}
                    className={`mt-5 ${descriptionClassName}`}
                >
                    {description}
                </Text>
            )}
        </div>
    )
}
