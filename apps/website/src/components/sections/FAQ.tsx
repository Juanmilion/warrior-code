import { Container } from "@/components/layout/Container"
import { Section } from "@/components/layout/Section"

const faqs = [
    {
        question: "¿Cuánto tengo que pagar para empezar?",
        answer:
            "El primer mes son 50 €: 25 € corresponden a la puesta en marcha de la web y 25 € a la primera mensualidad. A partir del segundo mes, son 25 € al mes.",
    },
    {
        question: "¿Qué incluye la mensualidad de 25 €?",
        answer:
            "Incluye el alojamiento de la web, mantenimiento, SSL y pequeños cambios de contenido. También nos encargamos de mantener la web disponible mientras la suscripción esté activa.",
    },
    {
        question: "¿El dominio es mío?",
        answer:
            "Sí. El dominio se registra a nombre del cliente. Nosotros nos encargamos de gestionarlo y de asumir su coste dentro del servicio.",
    },
    {
        question: "¿Puedo pedir cambios en mi web?",
        answer:
            "Sí. Puedes solicitar pequeños cambios de contenido como horarios, servicios, precios, textos, información de contacto o eventos. El servicio contempla unas pocas solicitudes al mes para mantener estos cambios dentro de un volumen razonable.",
    },
    {
        question: "¿Qué pasa si necesito una funcionalidad nueva?",
        answer:
            "Las modificaciones de funcionamiento o el desarrollo de nuevas funcionalidades se valoran aparte. Por ejemplo, añadir una reserva online compleja, una zona privada o una integración con otro servicio requeriría un presupuesto específico.",
    },
    {
        question: "¿Qué pasa si cancelo la suscripción?",
        answer:
            "La web dejará de estar publicada cuando finalice el servicio. Si quieres mantenerla online y seguir utilizando nuestro alojamiento y mantenimiento, simplemente puedes continuar con la suscripción.",
    },
    {
        question: "¿Tengo que tener logo e imágenes?",
        answer:
            "No. Podemos trabajar con el material que ya tengas y, cuando sea necesario, crear recursos visuales para la web siguiendo el criterio del proyecto.",
    },
    {
        question: "¿Cuánto tardáis en tener mi web?",
        answer:
            "Una vez tengamos la información y los materiales necesarios, nuestro objetivo es tenerla preparada y desplegada en 2-5 días laborables.",
    },
]

export function FAQ() {
    return (
        <Section id="faq">
            <Container>
                <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
                    <div className="lg:sticky lg:top-28 lg:self-start">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            FAQ
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-foreground sm:text-5xl">
                            Antes de empezar,
                            <br />
                            algunas respuestas.
                        </h2>

                        <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                            Si tienes una pregunta que no aparece aquí, puedes
                            preguntarnos directamente y te responderemos sin problema.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-[24px] border border-border/80 bg-card/50">
                        {faqs.map((faq, index) => (
                            <details
                                key={faq.question}
                                className="group border-b border-border/80 last:border-b-0"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-5 py-5 text-left sm:px-6">
                                    <div className="flex items-start gap-4">
                                        <span className="pt-0.5 text-[10px] font-semibold tracking-[0.18em] text-primary">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="text-sm font-medium text-foreground sm:text-base">
                                            {faq.question}
                                        </span>
                                    </div>

                                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 group-open:rotate-45 group-open:border-primary/30 group-open:text-primary">
                                        <span className="text-lg leading-none">+</span>
                                    </span>
                                </summary>

                                <div className="px-5 pb-6 pl-11 pr-6 text-sm leading-relaxed text-muted-foreground sm:px-6">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    )
}