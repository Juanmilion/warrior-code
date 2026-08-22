import { Link } from "react-router-dom"
import { Container } from "@/components/layout/Container"
import { ArrowLeft } from "lucide-react"

export function CookiePolicy() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Container>
                <article className="mx-auto max-w-3xl py-32">
                    <Link
                        to="/"
                        className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <ArrowLeft className="size-4" />
                        Volver a Warrior Code
                    </Link>
                    <div className="mb-12">
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            Warrior Code
                        </p>

                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Política de cookies
                        </h1>

                        <p className="mt-4 text-sm text-muted-foreground">
                            Última actualización: 22 de agosto de 2026
                        </p>
                    </div>

                    <div className="space-y-10 text-muted-foreground leading-7">
                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                1. ¿Qué son las cookies?
                            </h2>

                            <p>
                                Las cookies son pequeños archivos que pueden almacenarse en el
                                dispositivo del usuario cuando visita determinados sitios web.
                                Pueden utilizarse para permitir el funcionamiento técnico del
                                sitio, recordar determinadas preferencias o realizar otras
                                funciones.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                2. Cookies utilizadas en Warrior Code
                            </h2>

                            <p>
                                En la configuración actual de Warrior Code no se utilizan
                                cookies de análisis, publicidad, personalización o seguimiento
                                con fines comerciales.
                            </p>

                            <p className="mt-4">
                                El sitio está diseñado para funcionar sin herramientas de
                                analítica o seguimiento de terceros.
                            </p>

                            <p className="mt-4">
                                En caso de que determinadas tecnologías estrictamente
                                necesarias fueran utilizadas para garantizar el funcionamiento
                                técnico del sitio, estas se emplearán únicamente para dicha
                                finalidad.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                3. Cookies que requieren consentimiento
                            </h2>

                            <p>
                                Actualmente no se han incorporado cookies de análisis,
                                publicidad o seguimiento que requieran el consentimiento previo
                                del usuario.
                            </p>

                            <p className="mt-4">
                                Si en el futuro se incorporan tecnologías que requieran
                                consentimiento, Warrior Code actualizará esta política y
                                establecerá el mecanismo correspondiente para que el usuario
                                pueda aceptar, rechazar o configurar dichas tecnologías antes
                                de su utilización.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                4. Cambios en las cookies utilizadas
                            </h2>

                            <p>
                                La incorporación de nuevas herramientas, servicios o
                                funcionalidades puede modificar las tecnologías utilizadas por
                                este sitio web.
                            </p>

                            <p className="mt-4">
                                Cuando dichos cambios impliquen la utilización de cookies o
                                tecnologías similares que requieran información o
                                consentimiento, esta política será actualizada antes de su
                                utilización.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                5. Configuración del navegador
                            </h2>

                            <p>
                                El usuario puede configurar su navegador para bloquear o
                                eliminar determinadas cookies. Las opciones disponibles
                                dependen del navegador y del dispositivo utilizados.
                            </p>

                            <p className="mt-4">
                                El bloqueo de determinadas cookies técnicas puede afectar al
                                funcionamiento de algunos sitios web o servicios.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                6. Actualización de esta política
                            </h2>

                            <p>
                                Esta Política de Cookies podrá actualizarse cuando cambien las
                                tecnologías utilizadas en Warrior Code o cuando resulte
                                necesario para adaptarla a modificaciones normativas o
                                técnicas.
                            </p>
                        </section>

                        <section className="border-t border-border pt-8">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                Documentación relacionada
                            </h2>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/aviso-legal"
                                    className="text-primary underline-offset-4 hover:underline"
                                >
                                    Aviso legal
                                </Link>

                                <Link
                                    to="/privacidad"
                                    className="text-primary underline-offset-4 hover:underline"
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