import { Section } from "../layout/Section"
import { Text } from "../typography/Text"

export interface StorySectionProps {
    eyebrow?: string
    title: string
    paragraphs: string[]
    id?: string
    className?: string
}

export function StorySection({
    eyebrow,
    title,
    paragraphs,
    id,
    className = "",
}: StorySectionProps) {
    return (
        <Section
            id={id}
            eyebrow={eyebrow}
            title={title}
            className={className}
            contentClassName="max-w-3xl"
            eyebrowClassName="mb-6 sm:mb-8"
            headerClassName="mb-20 sm:mb-24"
        >
            <div className="space-y-16 sm:space-y-20 mt-6">
                {paragraphs.map((paragraph, index) => (
                    <Text
                        key={`${index}-${paragraph}`}
                        size="lg"
                        muted={index > 0}
                        className="max-w-2xl mb-3"
                    >
                        {paragraph}
                    </Text>
                ))}
            </div>
        </Section>
    )
}
