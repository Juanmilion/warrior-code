import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"

import { Container } from "@/components/layout/Container"
import { ScrollToTop } from "@/components/layout/ScrollToTop"

export function CookiePolicy() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <ScrollToTop />
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
                            Política de cookies
                        </h1>

                        <p className="mt-4 text-sm text-muted-foreground">
                            Última actualización: 22 de agosto de 2026
                        </p>
                    </div>

                    <div className="space-y-6 text-muted-foreground">
                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                1. ¿Qué son las cookies?
                            </h2>
                            <p className="leading-7">
                                Las cookies son pequeños archivos que pueden almacenarse en el dispositivo del usuario cuando visita determinados sitios web. Pueden utilizarse para permitir el funcionamiento técnico del sitio, recordar determinadas preferencias o realizar otras funciones.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                2. Cookies utilizadas en Warrior Code
                            </h2>
                            <div className="space-y-4 leading-7">
                                <p>
                                    En la configuración actual de Warrior Code no se utilizan cookies de análisis, publicidad, personalización o seguimiento con fines comerciales.
                                </p>
                                <p>
                                    El sitio está diseñado para funcionar sin herramientas de analítica o seguimiento de terceros.
                                </p>
                                <p>
                                    En caso de que determinadas tecnologías estrictamente necesarias fueran utilizadas para garantizar el funcionamiento técnico del sitio, estas se emplearán únicamente para dicha finalidad.
                                </p>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                3. Cookies que requieren consentimiento
                            </h2>
                            <div className="space-y-4 leading-7">
                                <p>
                                    Actualmente no se han incorporado cookies de análisis, publicidad o seguimiento que requieran el consentimiento previo del usuario.
                                </p>
                                <p>
                                    Si en el futuro se incorporan tecnologías que requieran consentimiento, Warrior Code actualizará esta política y establecerá el mecanismo correspondiente para que el usuario pueda aceptar, rechazar o configurar dichas tecnologías antes de su utilización.
                                </p>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                4. Cambios en las cookies utilizadas
                            </h2>
                            <div className="space-y-4 leading-7">
                                <p>
                                    La incorporación de nuevas herramientas, servicios o funcionalidades puede modificar las tecnologías utilizadas por este sitio web.
                                </p>
                                <p>
                                    Cuando dichos cambios impliquen la utilización de cookies o tecnologías similares que requieran información o consentimiento, esta política será actualizada antes de su utilización.
                                </p>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                5. Configuración del navegador
                            </h2>
                            <div className="space-y-4 leading-7">
                                <p>
                                    El usuario puede configurar su navegador para bloquear o eliminar determinadas cookies. Las opciones disponibles dependen del navegador y del dispositivo utilizados.
                                </p>
                                <p>
                                    El bloqueo de determinadas cookies técnicas puede afectar al funcionamiento de algunos sitios web o servicios.
                                </p>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                6. Actualización de esta política
                            </h2>
                            <p className="leading-7">
                                Esta Política de Cookies podrá actualizarse cuando cambien las tecnologías utilizadas en Warrior Code o cuando resulte necesario para adaptarla a modificaciones normativas o técnicas.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                Documentación relacionada
                            </h2>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    to="/aviso-legal"
                                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-primary transition-colors hover:bg-primary/10"
                                >
                                    Aviso legal
                                </Link>

                                <Link
                                    to="/privacidad"
                                    className="rounded-full border border-primary/20 bg-primary/5 px-3 py-2 text-sm text-primary transition-colors hover:bg-primary/10"
                                >
                                    Política de privacidad
                                </Link>
                            </div>
                        </section>
                    </div>
                </article>
            </Container>
        </main>
    )
}
