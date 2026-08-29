import { BusinessDemo } from "../../_shared/BusinessDemo"
import type { DemoConfig } from "../../_shared/types"

const config: DemoConfig = {
    seo: { title: "AquaSur | Fontanería urgente", description: "Fontanería, reparaciones e instalaciones con atención rápida." },
    theme: { "--background": "#0e1821", "--foreground": "#edf6fb", "--card": "#152633", "--primary": "#34a9d8", "--primary-foreground": "#06202e", "--secondary": "#12212d", "--muted-foreground": "#abc2cf", "--border": "rgba(237,246,251,.13)" },
    business: { name: "AQUASUR", eyebrow: "Fontanería · Huelva", headline: "Soluciones rápidas para que todo vuelva a funcionar.", description: "Reparaciones, desatascos e instalaciones con respuesta clara y sin rodeos.", heroImage: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1600&q=85", primaryAction: { label: "Solicitar asistencia", href: "#contacto" }, secondaryAction: { label: "Llamar 24 h", href: "tel:+34959000400" } },
    story: { eyebrow: "AquaSur", title: "Cuando hay una avería, cada minuto cuenta.", paragraphs: ["Atendemos incidencias domésticas y de negocio con diagnóstico, presupuesto y reparación en el mismo proceso.", "Trabajamos con materiales fiables y explicamos cada intervención antes de empezar."] },
    services: { eyebrow: "Servicios", title: "Fontanería sin complicaciones.", items: [{ title: "Reparaciones", description: "Fugas, grifos, cisternas y tuberías." }, { title: "Desatascos", description: "Intervención rápida en cocinas, baños y bajantes." }, { title: "Instalaciones", description: "Reformas de baño, cocina y redes completas." }, { title: "Mantenimiento", description: "Prevención para comunidades y negocios." }] },
    stats: [{ value: "24 h", label: "atención urgente" }, { value: "60 min", label: "respuesta estimada" }, { value: "+10", label: "años de oficio" }],
    process: { eyebrow: "El proceso", title: "Claro desde el primer contacto.", items: [{ number: "01", title: "Nos llamas", description: "Cuéntanos la incidencia y la prioridad." }, { number: "02", title: "Valoramos", description: "Te indicamos la solución y el presupuesto." }, { number: "03", title: "Resolvemos", description: "Intervenimos y comprobamos que todo funciona." }] },
    contact: { eyebrow: "Asistencia", title: "Cuéntanos qué ha pasado.", address: ["Servicio a domicilio en Huelva", "Y alrededores"], phone: "959 000 400", email: "hola@aquasur.es" },
}

export function FontaneriaUrgenteDemo() { return <BusinessDemo config={config} /> }
