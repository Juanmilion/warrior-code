import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { Container } from "@/components/layout/Container"

export function LegalNotice() {

    const nif = "29631390F"
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
                            Aviso legal
                        </h1>

                        <p className="mt-4 text-sm text-muted-foreground">
                            Última actualización: 22 de agosto de 2026
                        </p>
                    </div>

                    <div className="space-y-10 text-muted-foreground leading-7">
                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                1. Datos identificativos
                            </h2>

                            <p>
                                En cumplimiento de las obligaciones previstas en la normativa
                                aplicable a los servicios de la sociedad de la información, se
                                facilitan los siguientes datos identificativos del titular de
                                este sitio web:
                            </p>

                            <dl className="mt-5 space-y-3">
                                <div>
                                    <dt className="font-medium text-foreground">Titular</dt>
                                    <dd>Juan Manuel Guerrero Vides</dd>
                                </div>

                                <div>
                                    <dt className="font-medium text-foreground">NIF</dt>
                                    <dd>{nif}</dd>
                                </div>

                                <div>
                                    <dt className="font-medium text-foreground">Domicilio</dt>
                                    <dd>
                                        Av. de las Fuerzas Armadas, 8, 21007 Huelva, España
                                    </dd>
                                </div>

                                <div>
                                    <dt className="font-medium text-foreground">Email</dt>
                                    <dd>adminwarriorcode@gmail.com</dd>
                                </div>

                                <div>
                                    <dt className="font-medium text-foreground">
                                        Nombre comercial
                                    </dt>
                                    <dd>Warrior Code</dd>
                                </div>
                            </dl>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                2. Actividad
                            </h2>

                            <p>
                                Warrior Code ofrece servicios de diseño, desarrollo,
                                despliegue, alojamiento y mantenimiento de sitios web para
                                pequeños negocios y profesionales.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                3. Condiciones de acceso y uso
                            </h2>

                            <p>
                                El acceso y uso de este sitio web atribuye la condición de
                                usuario e implica la aceptación de las presentes condiciones
                                de uso.
                            </p>

                            <p className="mt-4">
                                El usuario se compromete a utilizar el sitio web de forma
                                diligente, lícita y respetuosa con la legislación aplicable,
                                los derechos de terceros y las presentes condiciones.
                            </p>

                            <p className="mt-4">
                                Queda prohibido utilizar el sitio web para fines ilícitos,
                                fraudulentos, lesivos de derechos o que puedan perjudicar,
                                sobrecargar o alterar su funcionamiento.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                4. Propiedad intelectual e industrial
                            </h2>

                            <p>
                                Los elementos propios de Warrior Code presentes en este sitio
                                web, incluyendo, entre otros, código, diseño, estructura,
                                componentes, recursos gráficos, textos y demás elementos
                                desarrollados por Warrior Code, están protegidos por la
                                normativa aplicable en materia de propiedad intelectual e
                                industrial.
                            </p>

                            <p className="mt-4">
                                El acceso al sitio web no implica la cesión, transmisión o
                                concesión de ningún derecho de propiedad intelectual o
                                industrial sobre sus contenidos.
                            </p>

                            <p className="mt-4">
                                La reproducción, distribución, transformación o comunicación
                                pública de los contenidos propios del sitio requerirá la
                                autorización correspondiente cuando así lo exija la normativa
                                aplicable.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                5. Contenidos proporcionados por clientes
                            </h2>

                            <p>
                                En el marco de los servicios ofrecidos por Warrior Code, el
                                cliente será responsable de garantizar que los contenidos,
                                imágenes, textos, logotipos, datos e información comercial que
                                facilite para la elaboración de su sitio web son exactos,
                                lícitos y cuentan con los derechos o autorizaciones necesarios
                                para su utilización.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                6. Disponibilidad del sitio web
                            </h2>

                            <p>
                                Warrior Code procurará mantener el sitio web disponible y
                                funcionando correctamente. No obstante, no garantiza una
                                disponibilidad ininterrumpida cuando existan causas técnicas,
                                tareas de mantenimiento, incidencias de proveedores externos,
                                problemas de conectividad, fuerza mayor u otras circunstancias
                                ajenas a su control razonable.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                7. Enlaces a terceros
                            </h2>

                            <p>
                                Este sitio web puede contener enlaces a páginas o servicios de
                                terceros. Warrior Code no controla ni asume responsabilidad por
                                los contenidos, políticas, disponibilidad o funcionamiento de
                                dichos sitios externos.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                8. Portfolio
                            </h2>

                            <p>
                                Warrior Code podrá mostrar trabajos realizados como parte de su
                                portfolio únicamente cuando cuente con la autorización
                                correspondiente del cliente, salvo que exista otro acuerdo
                                aplicable.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                9. Legislación aplicable
                            </h2>

                            <p>
                                La relación entre el titular del sitio web y el usuario se
                                regirá por la legislación española que resulte aplicable.
                            </p>
                        </section>

                        <section className="border-t border-border pt-8">
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                Documentación relacionada
                            </h2>

                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/privacidad"
                                    className="text-primary underline-offset-4 hover:underline"
                                >
                                    Política de privacidad
                                </Link>

                                <Link
                                    to="/cookies"
                                    className="text-primary underline-offset-4 hover:underline"
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