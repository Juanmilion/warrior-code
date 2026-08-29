import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

import { Container } from "@/components/layout/Container"
import { ScrollToTop } from "@/components/layout/ScrollToTop"
import { Seo } from "@/components/seo/Seo"

export function LegalNotice() {
    const nif = "**********" 

    return (
        <main className="min-h-screen bg-background text-foreground">
            <ScrollToTop />
            <Seo
                title="Aviso legal | Warrior Code"
                description="Aviso legal de Warrior Code y datos identificativos del titular del sitio web."
            />
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.06),transparent_28%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.05),transparent_30%)]" />

            <Container>
                <article className="mx-auto max-w-4xl py-24 sm:py-28 lg:py-32">
                    <Link
                        to="/"
                        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="size-4" />
                        Volver a Warrior Code
                    </Link>

                    <div className="mb-8 rounded-[28px] border border-white/10 bg-card/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-8">
                        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-primary">
                            Warrior Code
                        </p>

                        <h1 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                            Aviso legal
                        </h1>

                        <p className="mt-4 text-sm text-muted-foreground">
                            Última actualización: 22 de agosto de 2026
                        </p>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                1. Datos identificativos
                            </h2>

                            <p className="leading-7">
                                En cumplimiento de las obligaciones previstas en la normativa aplicable a los servicios de la sociedad de la información, se facilitan los siguientes datos identificativos del titular de este sitio web:
                            </p>

                            <dl className="mt-5 space-y-3 text-sm leading-7 sm:text-base">
                                <div className="rounded-xl border border-white/8 bg-background/50 p-3">
                                    <dt className="font-medium text-foreground">Titular</dt>
                                    <dd>Juan Manuel Guerrero Vides</dd>
                                </div>

                                <div className="rounded-xl border border-white/8 bg-background/50 p-3">
                                    <dt className="font-medium text-foreground">NIF</dt>
                                    <dd>{nif}</dd>
                                </div>

                                <div className="rounded-xl border border-white/8 bg-background/50 p-3">
                                    <dt className="font-medium text-foreground">Domicilio</dt>
                                    <dd>Av. de las Fuerzas Armadas, 8, 21007 Huelva, España</dd>
                                </div>

                                <div className="rounded-xl border border-white/8 bg-background/50 p-3">
                                    <dt className="font-medium text-foreground">Email</dt>
                                    <dd>adminwarriorcode@gmail.com</dd>
                                </div>

                                <div className="rounded-xl border border-white/8 bg-background/50 p-3">
                                    <dt className="font-medium text-foreground">Nombre comercial</dt>
                                    <dd>Warrior Code</dd>
                                </div>
                            </dl>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                2. Actividad
                            </h2>
                            <p className="leading-7">
                                Warrior Code ofrece servicios de diseño, desarrollo, despliegue, alojamiento y mantenimiento de sitios web para pequeños negocios y profesionales.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                3. Condiciones de acceso y uso
                            </h2>
                            <div className="space-y-4 leading-7">
                                <p>
                                    El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones de uso.
                                </p>
                                <p>
                                    El usuario se compromete a utilizar el sitio web de forma diligente, lícita y respetuosa con la legislación aplicable, los derechos de terceros y las presentes condiciones.
                                </p>
                                <p>
                                    Queda prohibido utilizar el sitio web para fines ilícitos, fraudulentos, lesivos de derechos o que puedan perjudicar, sobrecargar o alterar su funcionamiento.
                                </p>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                4. Propiedad intelectual e industrial
                            </h2>
                            <div className="space-y-4 leading-7">
                                <p>
                                    Los elementos propios de Warrior Code presentes en este sitio web, incluyendo, entre otros, código, diseño, estructura, componentes, recursos gráficos, textos y demás elementos desarrollados por Warrior Code, están protegidos por la normativa aplicable en materia de propiedad intelectual e industrial.
                                </p>
                                <p>
                                    El acceso al sitio web no implica la cesión, transmisión o concesión de ningún derecho de propiedad intelectual o industrial sobre sus contenidos.
                                </p>
                                <p>
                                    La reproducción, distribución, transformación o comunicación pública de los contenidos propios del sitio requerirá la autorización correspondiente cuando así lo exija la normativa aplicable.
                                </p>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                5. Contenidos proporcionados por clientes
                            </h2>
                            <p className="leading-7">
                                En el marco de los servicios ofrecidos por Warrior Code, el cliente será responsable de garantizar que los contenidos, imágenes, textos, logotipos, datos e información comercial que facilite para la elaboración de su sitio web son exactos, lícitos y cuentan con los derechos o autorizaciones necesarios para su utilización.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                6. Disponibilidad del sitio web
                            </h2>
                            <p className="leading-7">
                                Warrior Code procurará mantener el sitio web disponible y funcionando correctamente. No obstante, no garantiza una disponibilidad ininterrumpida cuando existan causas técnicas, tareas de mantenimiento, incidencias de proveedores externos, problemas de conectividad, fuerza mayor u otras circunstancias ajenas a su control razonable.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                7. Enlaces a terceros
                            </h2>
                            <p className="leading-7">
                                Este sitio web puede contener enlaces a páginas o servicios de terceros. Warrior Code no controla ni asume responsabilidad por los contenidos, políticas, disponibilidad o funcionamiento de dichos sitios externos.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                8. Portfolio
                            </h2>
                            <p className="leading-7">
                                Warrior Code podrá mostrar trabajos realizados como parte de su portfolio únicamente cuando cuente con la autorización correspondiente del cliente, salvo que exista otro acuerdo aplicable.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                9. Legislación aplicable
                            </h2>
                            <p className="leading-7">
                                La relación entre el titular del sitio web y el usuario se regirá por la legislación española que resulte aplicable.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                Documentación relacionada
                            </h2>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    to="/privacidad"
                                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-primary transition-colors hover:bg-primary/10"
                                >
                                    Política de privacidad
                                </Link>

                                <Link
                                    to="/cookies"
                                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-primary transition-colors hover:bg-primary/10"
                                >
                                    Política de cookies
                                </Link>
                            </div>
                        </section>
                    </div>
                </article>
            </Container>
        </main>
    )
}
