import { ArrowUpRight, Check, Mail, MessageSquare, Phone } from "lucide-react"

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
    return (
        <Section id="contacto">
            <Container>
                <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
                    {/* Intro */}
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
                                {["Qué necesita tu negocio hoy", "Qué podemos lanzar primero", "Cómo mantenerlo sin complicaciones"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
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
                                        hola@warriorcode.es
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

                    {/* Form */}
                    <form className="rounded-3xl border border-white/10 bg-card p-6 shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:p-8 lg:p-10">
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
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium"
                                >
                                    Nombre
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="Tu nombre"
                                    required
                                    className="h-11 w-full rounded-xl border border-white/10 bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-3 focus:ring-primary/10"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="business"
                                    className="text-sm font-medium"
                                >
                                    Negocio
                                </label>

                                <input
                                    id="business"
                                    name="business"
                                    type="text"
                                    autoComplete="organization"
                                    placeholder="Nombre de tu negocio"
                                    required
                                    className="h-11 w-full rounded-xl border border-white/10 bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-3 focus:ring-primary/10"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="tu@email.com"
                                    required
                                    className="h-11 w-full rounded-xl border border-white/10 bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-3 focus:ring-primary/10"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="phone"
                                    className="text-sm font-medium"
                                >
                                    Teléfono
                                    {/* <span className="ml-1 text-muted-foreground">
                                        (opcional)
                                    </span> */}
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
                                <label
                                    htmlFor="businessType"
                                    className="text-sm font-medium"
                                >
                                    Tipo de negocio
                                </label>

                                <select
                                    id="businessType"
                                    name="businessType"
                                    required
                                    defaultValue=""
                                    className="h-11 w-full appearance-none rounded-xl border border-white/10 bg-background px-3 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-3 focus:ring-primary/10"
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
                            </div>

                            <div className="space-y-2 sm:col-span-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium"
                                >
                                    Cuéntanos qué necesitas
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Cuéntanos brevemente qué hace tu negocio y qué te gustaría conseguir con tu web..."
                                    className="w-full resize-none rounded-xl border border-white/10 bg-background px-3 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-3 focus:ring-primary/10"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    name="privacy"
                                    required
                                    className="mt-0.5 size-4 shrink-0 accent-primary"
                                />

                                <span className="text-xs leading-relaxed text-muted-foreground">
                                    He leído y acepto la{" "}
                                    <a
                                        href="/privacidad"
                                        className="text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                                    >
                                        Política de Privacidad
                                    </a>
                                    .
                                </span>
                            </label>
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="mt-6 w-full sm:w-auto"
                        >
                            Enviar solicitud
                            <ArrowUpRight className="size-4" />
                        </Button>

                        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                            Te responderemos en un plazo aproximado de 1–2
                            días laborables.
                        </p>
                    </form>
                </div>
            </Container>
        </Section>
    )
}