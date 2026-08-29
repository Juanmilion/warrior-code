import { Grid } from "../layout/Grid"
import { Stack } from "../layout/Stack"
import { Section } from "../layout/Section"
import { MenuCard } from "../business/restaurant/MenuCard"
import type { MenuCardProps } from "../business/restaurant/MenuCard"
import type { MenuItem } from "../business/restaurant/types"

export interface MenuCategory {
    category: string
    items: MenuItem[]
}

export interface MenuSectionProps {
    eyebrow?: string
    title: string
    description?: string
    sections: MenuCategory[]
    id?: string
    align?: "left" | "center"
    columns?: 1 | 2 | 3 | 4 | 5 | 6
    layout?: "grid" | "stack"
    itemVariant?: MenuCardProps["variant"] | ((item: MenuItem) => MenuCardProps["variant"])
    imageAspect?: MenuCardProps["imageAspect"]
    className?: string
}

export function MenuSection({
    eyebrow,
    title,
    description,
    sections,
    id,
    align,
    columns = 2,
    layout = "grid",
    itemVariant = "list",
    imageAspect,
    className = "",
}: MenuSectionProps) {
    const getItemVariant = (item: MenuItem) =>
        typeof itemVariant === "function" ? itemVariant(item) : itemVariant

    const getItemClassName = (item: MenuItem) =>
        layout === "stack" && getItemVariant(item) === "card"
            ? "mx-auto w-full lg:w-64 lg:max-w-none"
            : ""

    return (
        <Section
            id={id}
            eyebrow={eyebrow}
            title={title}
            description={description}
            align={align}
            className={className}
            contentClassName={layout === "stack" ? "max-w-5xl" : ""}
        >
            <div className="mt-6 sm:mt-8">
                {sections.map((section) => (
                    <div
                        key={section.category}
                        className="pb-24 last:pb-0 sm:pb-28"
                    >
                        <div className="mb-8 flex items-center gap-5">
                            <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                                {section.category}
                            </h3>
                            <div className="h-px flex-1 bg-border" />
                        </div>

                        {layout === "grid" ? (
                            <Grid columns={columns} gap="lg">
                                {section.items.map((item) => (
                                    <MenuCard
                                        key={`${section.category}-${item.name}`}
                                        item={item}
                                        variant={getItemVariant(item)}
                                        className={getItemClassName(item)}
                                        imageAspect={imageAspect}
                                    />
                                ))}
                            </Grid>
                        ) : (
                            <Stack gap="lg">
                                {section.items.map((item) => (
                                    <MenuCard
                                        key={`${section.category}-${item.name}`}
                                        item={item}
                                        variant={getItemVariant(item)}
                                        className={getItemClassName(item)}
                                        imageAspect={imageAspect}
                                    />
                                ))}
                            </Stack>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    )
}
