import { ArrowUpRight, Check, Mail, MessageSquare, Phone } from "lucide-react"
import { useState } from "react"

import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"

const businessTypes = [
    "Restaurante / Cafetería",
    "Fontanería / Electricidad",
    "Taller / Automoción",
    "Academia / Formación",
    "Comercio",
    "Servicios profesionales",
    "Otro",
]

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [submitError, setSubmitError] = useState<string | null>(null)

    const clearFieldError = (field: string) => {
        setErrors((current) => {
            if (!current[field]) return current

            const next = { ...current }
            delete next[field]
            return next
        })
    }

    const validateForm = (form: HTMLFormElement) => {
        const formData = new FormData(form)

        const name = String(formData.get("name") ?? "").trim()
        const business = String(formData.get("business") ?? "").trim()
        const email = String(formData.get("email") ?? "").trim()
        const businessType = String(formData.get("businessType") ?? "").trim()
        const message = String(formData.get("message") ?? "").trim()
        const privacy = formData.get("privacy")

        const newErrors: Record<string, string> = {}

        if (!name) {
            newErrors.name = "Dinos cómo te llamas."
        }

        if (!business) {
            newErrors.business = "Indica el nombre de tu negocio."
        }

        if (!email) {
            newErrors.email = "Necesitamos tu email para poder responderte."
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Introduce un email válido."
        }

        if (!businessType) {
            newErrors.businessType = "Selecciona el tipo de negocio."
        }

        if (!message) {
            newErrors.message = "Cuéntanos brevemente qué necesitas."
        }

        if (!privacy) {
            newErrors.privacy =
                "Necesitamos que aceptes la Política de Privacidad."
        }

        setErrors(newErrors)
        setSubmitError(null)

        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget

        if (!validateForm(form)) {
            return
        }

        setIsSubmitting(true)

        try {
            const formData = new FormData(form)

            const response = await fetch("https://submit-form.com/TEGqUep1P", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            })

            if (!response.ok) {
                throw new Error("No se pudo enviar el formulario.")
            }

            form.reset()
            setErrors({})
            setShowSuccess(true)
        } catch {
            setSubmitError(
                "No hemos podido enviar la solicitud. Inténtalo de nuevo en unos minutos."
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <>
            <Section id="contacto">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
                        <div className="flex flex-col justify-between gap-10 lg:pt-4">
                            <div>
                                <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                                    <span className="h-px w-8 bg-primary" />
                                    Contacto
                                </div>

                                <h2 className="mt-5 max-w-lg text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                                    Tu próxima web empieza con una conversación.
                                </h2>

                                <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                                    Cuéntanos qué hace especial a tu negocio y qué quieres conseguir. Te responderemos con una propuesta clara, sin tecnicismos ni compromiso.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-primary/20 bg-primary/[0.07] p-5 sm:p-6">
                                <p className="text-sm font-semibold text-foreground">
                                    En la primera conversación veremos
                                </p>
                                <ul className="mt-4 space-y-3">
                                    {[
                                        "Qué necesita tu negocio hoy",
                                        "Qué podemos lanzar primero",
                                        "Cómo mantenerlo sin complicaciones",
                                    ].map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-center gap-3 text-sm text-muted-foreground"
                                        >
                                            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                                <Check className="size-3" />
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                                <div className="flex items-center gap-3">
                                    <div className="flex size-9 items-center justify-center rounded-xl border border-white/8 bg-card text-primary">
                                        <Mail className="size-4" />
                                    </div>

                                    <div>
                                        <span className="block text-xs text-muted-foreground">
                                            Email
                                        </span>

                                        <span className="text-sm font-medium">
                                            adminwarriorcode@gmail.com
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex size-9 items-center justify-center rounded-xl border border-white/8 bg-card text-primary">
                                        <MessageSquare className="size-4" />
                                    </div>

                                    <div>
                                        <span className="block text-xs text-muted-foreground">
                                            Respuesta
                                        </span>

                                        <span className="text-sm font-medium">
                                            En 1–2 días laborables
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex size-9 items-center justify-center rounded-xl border border-white/8 bg-card text-primary">
                                        <Phone className="size-4" />
                                    </div>

                                    <div>
                                        <span className="block text-xs text-muted-foreground">
                                            Primera conversación
                                        </span>

                                        <span className="text-sm font-medium">
                                            Sin compromiso
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="rounded-3xl border border-white/10 bg-card p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10"
                        >
                            <div className="mb-8 flex items-start justify-between gap-6 border-b border-border pb-6">
                                <div>
                                    <p className="text-lg font-semibold text-foreground">
                                        Cuéntanos tu idea
                                    </p>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Tardarás menos de 2 minutos.
                                    </p>
                                </div>
                                <span className="hidden rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:inline-flex">
                                    Sin compromiso
                                </span>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Nombre
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Tu nombre"
                                        aria-invalid={Boolean(errors.name)}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                        onChange={() => clearFieldError("name")}
                                        className={`h-11 w-full rounded-xl border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:ring-3 ${
                                            errors.name
                                                ? "border-destructive focus:border-destructive focus:ring-destructive/10"
                                                : "border-white/10 focus:border-primary focus:ring-primary/10"
                                        }`}
                                    />
                                    {errors.name && (
                                        <p id="name-error" className="text-xs text-destructive">
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="business" className="text-sm font-medium">
                                        Negocio
                                    </label>

                                    <input
                                        id="business"
                                        name="business"
                                        type="text"
                                        autoComplete="organization"
                                        placeholder="Nombre de tu negocio"
                                        aria-invalid={Boolean(errors.business)}
                                        aria-describedby={errors.business ? "business-error" : undefined}
                                        onChange={() => clearFieldError("business")}
                                        className={`h-11 w-full rounded-xl border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:ring-3 ${
                                            errors.business
                                                ? "border-destructive focus:border-destructive focus:ring-destructive/10"
                                                : "border-white/10 focus:border-primary focus:ring-primary/10"
                                        }`}
                                    />
                                    {errors.business && (
                                        <p id="business-error" className="text-xs text-destructive">
                                            {errors.business}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        aria-invalid={Boolean(errors.email)}
                                        aria-describedby={errors.email ? "email-error" : undefined}
                                        placeholder="tu@email.com"
                                        onChange={() => clearFieldError("email")}
                                        className={`h-11 w-full rounded-xl border bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:ring-3 ${
                                            errors.email
                                                ? "border-destructive focus:border-destructive focus:ring-destructive/10"
                                                : "border-white/10 focus:border-primary focus:ring-primary/10"
                                        }`}
                                    />
                                    {errors.email && (
                                        <p id="email-error" className="text-xs text-destructive">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">
                                        Teléfono
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        autoComplete="tel"
                                        placeholder="600 000 000"
                                        className="h-11 w-full rounded-xl border border-white/10 bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-3 focus:ring-primary/10"
                                    />
                                </div>

                                <div className="space-y-2 sm:col-span-2">
                                    <label htmlFor="businessType" className="text-sm font-medium">
                                        Tipo de negocio
                                    </label>

                                    <select
                                        id="businessType"
                                        name="businessType"
                                        defaultValue=""
                                        aria-invalid={Boolean(errors.businessType)}
                                        aria-describedby={errors.businessType ? "businessType-error" : undefined}
                                        onChange={() => clearFieldError("businessType")}
                                        className={`h-11 w-full appearance-none rounded-xl border bg-background px-3 text-sm text-foreground outline-none transition-colors focus:ring-3 ${
                                            errors.businessType
                                                ? "border-destructive focus:border-destructive focus:ring-destructive/10"
                                                : "border-white/10 focus:border-primary focus:ring-primary/10"
                                        }`}
                                    >
                                        <option value="" disabled>
                                            Selecciona una opción
                                        </option>

                                        {businessTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.businessType && (
                                        <p id="businessType-error" className="text-xs text-destructive">
                                            {errors.businessType}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2 sm:col-span-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Cuéntanos qué necesitas
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Cuéntanos brevemente qué hace tu negocio y qué te gustaría conseguir con tu web..."
                                        aria-invalid={Boolean(errors.message)}
                                        aria-describedby={errors.message ? "message-error" : undefined}
                                        onChange={() => clearFieldError("message")}
                                        className={`w-full resize-none rounded-xl border bg-background px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:ring-3 ${
                                            errors.message
                                                ? "border-destructive focus:border-destructive focus:ring-destructive/10"
                                                : "border-white/10 focus:border-primary focus:ring-primary/10"
                                        }`}
                                    />
                                    {errors.message && (
                                        <p id="message-error" className="text-xs text-destructive">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="flex cursor-pointer items-start gap-3">
                                    <span className="relative mt-0.5 flex size-4 shrink-0 items-center justify-center">
                                        <input
                                            type="checkbox"
                                            name="privacy"
                                            aria-invalid={Boolean(errors.privacy)}
                                            aria-describedby={errors.privacy ? "privacy-error" : undefined}
                                            onChange={() => clearFieldError("privacy")}
                                            className="peer sr-only"
                                        />
                                        <span className="flex size-4 items-center justify-center rounded-[6px] border border-white/15 bg-background transition-all peer-checked:border-primary peer-checked:bg-primary peer-focus-visible:ring-3 peer-focus-visible:ring-primary/10" />
                                        <Check className="pointer-events-none absolute size-3 text-white opacity-0 transition-opacity peer-checked:opacity-100" />
                                    </span>

                                    <span className="text-xs leading-relaxed text-muted-foreground">
                                        He leído y acepto la{" "}
                                        <a
                                            href="/privacidad"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                                        >
                                            Política de Privacidad
                                        </a>
                                        .
                                    </span>
                                </label>
                                {errors.privacy && (
                                    <p id="privacy-error" className="mt-2 text-xs text-destructive">
                                        {errors.privacy}
                                    </p>
                                )}
                            </div>

                            {submitError && (
                                <p className="mt-4 rounded-xl border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
                                    {submitError}
                                </p>
                            )}

                            <Button
                                type="submit"
                                size="lg"
                                disabled={isSubmitting}
                                className="mt-6 w-full sm:w-auto"
                            >
                                {isSubmitting ? "Enviando..." : "Enviar solicitud"}

                                {!isSubmitting && <ArrowUpRight className="size-4" />}
                            </Button>

                            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                                Te responderemos en un plazo aproximado de 1–2 días laborables.
                            </p>
                        </form>
                    </div>
                </Container>
            </Section>

            {showSuccess && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="success-title"
                >
                    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-card p-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                        <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                            ✓
                        </div>

                        <h2 id="success-title" className="mt-6 text-2xl font-semibold text-foreground">
                            Solicitud enviada
                        </h2>

                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                            Hemos recibido tu solicitud correctamente. Te responderemos en un plazo aproximado de 1–2 días laborables.
                        </p>

                        <Button
                            type="button"
                            size="lg"
                            className="mt-6 w-full"
                            onClick={() => setShowSuccess(false)}
                        >
                            Perfecto
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}