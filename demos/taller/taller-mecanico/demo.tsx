import { BusinessDemo } from "../../_shared/BusinessDemo"
import type { DemoConfig } from "../../_shared/types"

const config: DemoConfig = {
    seo: { title: "Motor Norte | Taller mecánico", description: "Mantenimiento, diagnosis y reparación para tu vehículo." },
    theme: { "--background": "#121719", "--foreground": "#edf1f2", "--card": "#1b2326", "--primary": "#ef8442", "--primary-foreground": "#171817", "--secondary": "#182023", "--muted-foreground": "#aeb9bc", "--border": "rgba(237,241,242,.12)" },
    business: { name: "MOTOR NORTE", eyebrow: "Taller mecánico · Huelva", headline: "Tu coche, en buenas manos.", description: "Revisamos, explicamos y reparamos con un presupuesto claro antes de empezar.", heroImage: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=85", primaryAction: { label: "Pedir presupuesto", href: "#contacto" }, secondaryAction: { label: "Llamar ahora", href: "tel:+34959000300" } },
    story: { eyebrow: "El taller", title: "Diagnóstico claro, reparación fiable.", paragraphs: ["No cambiamos piezas a ciegas: localizamos el problema antes de proponer una solución.", "Te mantenemos informado durante todo el proceso y entregamos el vehículo listo para volver a la carretera."] },
    services: { eyebrow: "Servicios", title: "Todo lo que necesita tu vehículo.", items: [{ title: "Mecánica general", description: "Mantenimiento y reparación multimarca." }, { title: "Diagnosis", description: "Localizamos averías con equipos profesionales." }, { title: "Frenos y suspensión", description: "Seguridad y confort en cada trayecto." }, { title: "Neumáticos", description: "Montaje, equilibrado y alineación." }] },
    stats: [{ value: "+15", label: "años de experiencia" }, { value: "12 meses", label: "de garantía" }, { value: "1 día", label: "para diagnóstico habitual" }],
    process: { eyebrow: "Cómo trabajamos", title: "Sin sorpresas.", items: [{ number: "01", title: "Revisamos", description: "Escuchamos el problema y revisamos el vehículo." }, { number: "02", title: "Presupuestamos", description: "Te explicamos el trabajo antes de hacerlo." }, { number: "03", title: "Reparamos", description: "Entregamos el coche probado y listo." }] },
    contact: { eyebrow: "Contacto", title: "Pide cita para tu vehículo.", address: ["Avenida Industria, 18", "21007 Huelva"], phone: "959 000 300", email: "citas@motornorte.es" },
}

export function TallerMecanicoDemo() { return <BusinessDemo config={config} /> }
