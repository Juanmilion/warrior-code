import { useEffect } from "react"

export const SITE_URL = "https://warriorcodeweb.com"

interface SeoProps {
    title: string
    description: string
    type?: "website" | "article"
    noindex?: boolean
    structuredData?: Record<string, unknown>
}

export function Seo({
    title,
    description,
    type = "website",
    noindex = false,
    structuredData,
}: SeoProps) {
    useEffect(() => {
        document.title = title
        const canonicalUrl = new URL(
            window.location.pathname,
            SITE_URL,
        ).toString()

        const setMeta = (name: string, content: string, property = false) => {
            const attribute = property ? "property" : "name"
            let meta = document.head.querySelector<HTMLMetaElement>(
                `meta[${attribute}="${name}"]`,
            )

            if (!meta) {
                meta = document.createElement("meta")
                meta.setAttribute(attribute, name)
                document.head.appendChild(meta)
            }

            meta.content = content
        }

        setMeta("description", description)
        setMeta("robots", noindex ? "noindex, nofollow" : "index, follow")
        setMeta("og:title", title, true)
        setMeta("og:description", description, true)
        setMeta("og:type", type, true)
        setMeta("og:url", canonicalUrl, true)
        setMeta("twitter:card", "summary", false)
        setMeta("twitter:title", title, false)
        setMeta("twitter:description", description, false)

        let canonical = document.head.querySelector<HTMLLinkElement>(
            'link[data-seo="canonical"]',
        )

        if (!canonical) {
            canonical = document.createElement("link")
            canonical.rel = "canonical"
            canonical.dataset.seo = "canonical"
            document.head.appendChild(canonical)
        }

        canonical.href = canonicalUrl

        const existingStructuredData = document.head.querySelector(
            'script[data-seo="structured-data"]',
        )

        existingStructuredData?.remove()

        if (structuredData) {
            const script = document.createElement("script")
            script.type = "application/ld+json"
            script.dataset.seo = "structured-data"
            script.textContent = JSON.stringify(structuredData)
            document.head.appendChild(script)
        }
    }, [description, noindex, structuredData, title, type])

    return null
}
