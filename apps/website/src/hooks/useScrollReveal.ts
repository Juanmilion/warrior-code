import { useEffect, useRef } from "react"

interface UseScrollRevealOptions {
    threshold?: number | number[]
    rootMargin?: string
    triggerOnce?: boolean
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
    const {
        threshold = 0.1,
        rootMargin = "0px 0px -100px 0px",
        triggerOnce = true,
    } = options

    const ref = useRef<HTMLElement>(null)
    const hasTriggered = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("scroll-reveal-active")
                if (triggerOnce && hasTriggered.current) {
                    observer.unobserve(entry.target)
                } else {
                    hasTriggered.current = true
                }
            } else if (!triggerOnce) {
                entry.target.classList.remove("scroll-reveal-active")
            }
        }, {
            threshold,
            rootMargin,
        })

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [threshold, rootMargin, triggerOnce])

    return ref
}
