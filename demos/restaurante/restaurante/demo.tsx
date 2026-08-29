import { BusinessDemo } from "../../_shared/BusinessDemo"
import type { DemoConfig } from "../../_shared/types"

const config: DemoConfig = {
    seo: { title: "Lumbre | Restaurante mediterráneo", description: "Cocina mediterránea de producto y temporada." },
    theme: { "--background": "#211814", "--foreground": "#f7efe4", "--card": "#2c211b", "--primary": "#cf8257", "--primary-foreground": "#fffaf3", "--secondary": "#33261f", "--muted-foreground": "#cdb9aa", "--border": "rgba(247,239,228,.13)" },
    business: { name: "LUMBRE", eyebrow: "Cocina mediterránea", headline: "Producto, fuego y tiempo.", description: "Una cocina de temporada construida alrededor del mercado y la brasa.", heroImage: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=85", primaryAction: { label: "Reservar mesa", href: "#contacto" }, secondaryAction: { label: "Ver carta", href: "#carta" } },
    story: { eyebrow: "Nuestra cocina", title: "Pocas cosas, bien hechas.", paragraphs: ["La carta cambia para seguir el ritmo de la huerta, la lonja y las estaciones.", "Trabajamos cada plato con precisión, sin esconder el producto detrás de lo superfluo."] },
    services: { eyebrow: "La experiencia", title: "Una mesa con intención.", items: [{ title: "Carta de temporada", description: "Platos que siguen el producto disponible." }, { title: "Bodega cercana", description: "Vinos seleccionados para acompañar sin imponerse." }, { title: "Reservas de grupo", description: "Menús flexibles para celebraciones y equipos." }] },
    menu: { eyebrow: "Carta", title: "Del mercado a la mesa.", sections: [{ category: "Para empezar", items: [{ name: "Burrata y tomate", description: "Albahaca, aceite y pan crujiente.", price: "13 €" }, { name: "Presa ibérica", description: "Carpaccio, parmesano y rúcula.", price: "15 €" }] }, { category: "Principales", items: [{ name: "Lubina a la brasa", description: "Verduras asadas y jugo de limón.", price: "23 €" }, { name: "Carrillera", description: "Vino tinto, patata y verduras.", price: "20 €" }] }] },
    stats: [{ value: "3", label: "pases por semana" }, { value: "18", label: "platos de temporada" }, { value: "1", label: "cocina abierta" }],
    contact: { eyebrow: "Reservas", title: "Te esperamos en Lumbre.", address: ["Plaza del Mercado, 4", "21002 Huelva"], phone: "959 000 200", email: "reservas@lumbre.es" },
}

export function RestauranteDemo() { return <BusinessDemo config={config} /> }
