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

    useEffect(() => {
        const element = ref.current

        if (!element) {
            return
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("scroll-reveal-active")
                if (triggerOnce) {
                    observer.unobserve(entry.target)
                }
            } else if (!triggerOnce) {
                entry.target.classList.remove("scroll-reveal-active")
            }
        }, {
            threshold,
            rootMargin,
        })

        observer.observe(element)

        return () => {
            observer.unobserve(element)
        }
    }, [threshold, rootMargin, triggerOnce])

    return ref
}
