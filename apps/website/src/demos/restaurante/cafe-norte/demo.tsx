import { Seo } from "@/components/seo/Seo"

import { BusinessDemo } from "../../_shared/BusinessDemo"
import type { DemoConfig } from "../../_shared/types"

const config: DemoConfig = {
    seo: {
        title: "Café Norte | Café de especialidad en Huelva",
        description: "Café de especialidad, desayunos y aperitivos en el centro de Huelva.",
    },
    theme: {
        "--background": "#17211f",
        "--foreground": "#f6f2e9",
        "--card": "#22302c",
        "--primary": "#d6a25c",
        "--primary-foreground": "#1b211e",
        "--secondary": "#1d2925",
        "--muted-foreground": "#bec7bd",
        "--border": "rgba(246,242,233,.13)",
    },
    business: {
        name: "CAFÉ NORTE",
        eyebrow: "Café de especialidad · Huelva",
        headline: "Un buen café cambia el ritmo del día.",
        description: "Café de origen, desayunos tranquilos y una barra pensada para alargar la conversación.",
        heroImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=85",
        heroImageAlt: "Taza de café de especialidad sobre una mesa de madera",
        primaryAction: { label: "Ver carta", href: "#carta" },
        secondaryAction: { label: "Cómo llegar", href: "#contacto" },
    },
    story: {
        eyebrow: "La casa",
        title: "Café hecho con atención.",
        paragraphs: ["Seleccionamos cada grano y cuidamos cada extracción para que la taza hable por sí sola.", "Por la mañana somos pausa; por la tarde, punto de encuentro."],
    },
    services: {
        eyebrow: "Nuestra propuesta",
        title: "De la primera taza al último aperitivo.",
        items: [
            { title: "Café de origen", description: "Rotamos cafés de temporada y ajustamos cada receta." },
            { title: "Desayunos", description: "Bollería, tostadas y platos sencillos bien resueltos." },
            { title: "Barra de tarde", description: "Vinos, vermut y pequeños platos para compartir." },
        ],
    },
    menu: {
        eyebrow: "Carta",
        title: "Para cualquier hora.",
        sections: [{ category: "Favoritos", items: [{ name: "Flat white", description: "Espresso doble y leche texturizada.", price: "3,20 €" }, { name: "Tostada Norte", description: "Pan de masa madre, tomate y aceite.", price: "5,80 €" }, { name: "Bikini de sobrasada", description: "Queso curado y miel picante.", price: "7,50 €" }] }],
    },
    stats: [{ value: "08:00", label: "abrimos cada día" }, { value: "12", label: "cafés de origen al año" }, { value: "100%", label: "café de especialidad" }],
    contact: { eyebrow: "Visítanos", title: "Tu mesa junto a la barra.", address: ["Calle del Puerto, 12", "21001 Huelva"], phone: "959 000 100", email: "hola@cafenorte.es" },
}

export function CafeNorteDemo() {
    return <><Seo title={config.seo.title} description={config.seo.description} /><BusinessDemo config={config} /></>
}
