import { Link } from "react-router-dom"
import { Container } from "@/components/layout/Container"
import { ArrowLeft } from "lucide-react"
import { ScrollToTop } from "@/components/layout/ScrollToTop"

export function PrivacyPolicy() {
    const nif = "29631390F"

    return (
        <main className="min-h-screen bg-background text-foreground">
            <ScrollToTop />
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
                            Política de privacidad
                        </h1>

                        <p className="mt-4 text-sm text-muted-foreground">
                            Última actualización: 22 de agosto de 2026
                        </p>
                    </div>

                    <div className="space-y-10 text-muted-foreground leading-7">
                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                1. Responsable del tratamiento
                            </h2>

                            <p>
                                El responsable del tratamiento de los datos personales
                                recogidos a través de este sitio web es:
                            </p>

                            <dl className="mt-5 space-y-3">
                                <div>
                                    <dt className="font-medium text-foreground">Responsable</dt>
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
                            </dl>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                2. Datos personales que podemos tratar
                            </h2>

                            <p>
                                A través del formulario de contacto de Warrior Code pueden
                                solicitarse los siguientes datos:
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-6">
                                <li>Nombre.</li>
                                <li>Nombre del negocio.</li>
                                <li>Dirección de correo electrónico.</li>
                                <li>Número de teléfono, cuando el usuario decida facilitarlo.</li>
                                <li>Tipo de negocio.</li>
                                <li>Información incluida en el mensaje enviado.</li>
                            </ul>

                            <p className="mt-4">
                                El usuario deberá evitar incluir en el formulario información
                                personal que no sea necesaria para gestionar su solicitud.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                3. Finalidad del tratamiento
                            </h2>

                            <p>
                                Los datos personales se tratarán con la finalidad de gestionar
                                y responder a las solicitudes de contacto realizadas a través
                                del sitio web y, cuando corresponda, proporcionar información
                                sobre los servicios de Warrior Code.
                            </p>

                            <p className="mt-4">
                                Los datos facilitados mediante el formulario no se utilizarán
                                inicialmente para el envío de comunicaciones comerciales no
                                solicitadas.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                4. Base jurídica
                            </h2>

                            <p>
                                La base jurídica del tratamiento dependerá de la naturaleza de
                                la solicitud realizada por el usuario.
                            </p>

                            <p className="mt-4">
                                Cuando la solicitud esté relacionada con la posible contratación
                                de servicios, el tratamiento podrá basarse en la adopción de
                                medidas precontractuales a petición del interesado.
                            </p>

                            <p className="mt-4">
                                Para consultas generales, el tratamiento se realizará sobre la
                                base jurídica que resulte aplicable conforme a la normativa de
                                protección de datos.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                5. Conservación de los datos
                            </h2>

                            <p>
                                Los datos personales se conservarán durante el tiempo necesario
                                para atender y gestionar la solicitud realizada y,
                                posteriormente, durante los plazos necesarios para cumplir las
                                obligaciones legales aplicables y atender posibles
                                responsabilidades.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                6. Destinatarios y proveedores
                            </h2>

                            <p>
                                Los datos podrán ser tratados por proveedores tecnológicos que
                                presten servicios necesarios para el funcionamiento de Warrior
                                Code, como servicios de alojamiento, infraestructura,
                                comunicaciones electrónicas o gestión del formulario de
                                contacto.
                            </p>

                            {/*
                TODO LEGAL:
                Cuando decidamos definitivamente el sistema del formulario y
                correo, sustituir esta sección por los proveedores concretos,
                sus funciones y las garantías aplicables.
                
                Opciones actualmente valoradas:
                - Servicio externo de formularios.
                - Cloudflare Worker + servicio de email.
                - Otro proveedor de correo.
              */}

                            <p className="mt-4">
                                Estos proveedores solo tendrán acceso a los datos en la medida
                                necesaria para prestar los servicios contratados y estarán
                                sujetos a las obligaciones correspondientes en materia de
                                protección de datos.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                7. Transferencias internacionales
                            </h2>

                            <p>
                                Algunos proveedores tecnológicos utilizados por Warrior Code
                                podrían estar establecidos fuera del Espacio Económico Europeo
                                o utilizar infraestructura ubicada en terceros países.
                            </p>

                            <p className="mt-4">
                                Cuando se produzcan transferencias internacionales de datos,
                                estas se realizarán únicamente cuando exista una base jurídica
                                y las garantías exigidas por la normativa aplicable.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                8. Derechos del usuario
                            </h2>

                            <p>
                                El usuario puede ejercer, cuando resulten aplicables, los
                                siguientes derechos:
                            </p>

                            <ul className="mt-4 list-disc space-y-2 pl-6">
                                <li>Derecho de acceso.</li>
                                <li>Derecho de rectificación.</li>
                                <li>Derecho de supresión.</li>
                                <li>Derecho de oposición.</li>
                                <li>Derecho a la limitación del tratamiento.</li>
                                <li>Derecho a la portabilidad de los datos.</li>
                            </ul>

                            <p className="mt-4">
                                El usuario también puede solicitar no ser objeto de decisiones
                                basadas únicamente en tratamientos automatizados cuando
                                concurran los requisitos establecidos por la normativa
                                aplicable.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                9. Cómo ejercer los derechos
                            </h2>

                            <p>
                                Para ejercer sus derechos, el usuario puede enviar una
                                solicitud a:
                            </p>

                            <p className="mt-4 font-medium text-foreground">
                                adminwarriorcode@gmail.com
                            </p>

                            <p className="mt-4">
                                La solicitud deberá permitir identificar al solicitante y
                                especificar el derecho que desea ejercer. Cuando resulte
                                necesario, podrá solicitarse información adicional para
                                verificar la identidad del solicitante.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                10. Derecho a reclamar ante la autoridad de control
                            </h2>

                            <p>
                                Si el usuario considera que el tratamiento de sus datos
                                personales no se ajusta a la normativa aplicable, puede
                                presentar una reclamación ante la Agencia Española de
                                Protección de Datos (AEPD).
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                11. Seguridad
                            </h2>

                            <p>
                                Warrior Code adoptará las medidas técnicas y organizativas
                                adecuadas para proteger los datos personales frente a pérdida,
                                acceso no autorizado, alteración, divulgación o destrucción,
                                teniendo en cuenta la naturaleza de los datos y los riesgos
                                asociados al tratamiento.
                            </p>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold text-foreground">
                                12. Actualizaciones de esta política
                            </h2>

                            <p>
                                Esta Política de Privacidad podrá actualizarse cuando resulte
                                necesario para reflejar cambios en los servicios, proveedores,
                                tratamientos realizados o requisitos legales aplicables.
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