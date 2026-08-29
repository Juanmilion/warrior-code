# Tutorial: crear una web de cliente desde `demos`

Este tutorial usa la demo de cafetería/bar. El mismo proceso funciona para restaurante, taller y fontanería.

## 1. Elige una base

| Tipo de negocio | Carpeta base |
| --- | --- |
| Cafetería o bar | `demos/restaurante/cafeteria-bar` |
| Restaurante | `demos/restaurante/restaurante` |
| Taller | `demos/taller/taller-mecanico` |
| Fontanero | `demos/fontanero/fontaneria-urgente` |

Cada `demo.tsx` contiene el contenido y la paleta. `demos/_shared/BusinessDemo.tsx` contiene la estructura reutilizable.

## 2. Copia los archivos a la web

Para una cafetería llamada **Café Norte**, conserva esta estructura dentro de `apps/website/src`:

```text
apps/website/src/demos/
├── _shared/
│   ├── BusinessDemo.tsx
│   └── types.ts
└── restaurante/
    └── cafe-norte/
        └── demo.tsx
```

La ruta relativa `../../_shared/BusinessDemo` del archivo de demo seguirá funcionando al mantener esta estructura.

## 3. Renombra el componente y configura SEO

En `apps/website/src/demos/restaurante/cafe-norte/demo.tsx`, añade `Seo` y cambia el nombre del componente:

```tsx
import { Seo } from "@/components/seo/Seo"
import { BusinessDemo } from "../../_shared/BusinessDemo"

export function CafeNorteDemo() {
    return (
        <>
            <Seo
                title={config.seo.title}
                description={config.seo.description}
            />
            <BusinessDemo config={config} />
        </>
    )
}
```

Cada plantilla deja `title` y `description` en `config.seo`. Deben describir el negocio real y ser únicos para esa página.

## 4. Cambia la paleta

La paleta se define con tokens CSS dentro de `config.theme`. Cambia los valores, no los nombres de los tokens:

```ts
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
```

`primary` se usa para botones, enlaces y elementos de énfasis. Mantén buen contraste con `primary-foreground`.

## 5. Sustituye el contenido del negocio

El bloque `business` controla el hero, CTA y cabecera:

```ts
business: {
    name: "CAFÉ NORTE",
    eyebrow: "Café de especialidad · Huelva",
    headline: "Un buen café cambia el ritmo del día.",
    description: "Café de origen, desayunos y aperitivos.",
    heroImage: "/demos/cafe-norte/hero.jpg",
    primaryAction: { label: "Ver carta", href: "#carta" },
    secondaryAction: { label: "Cómo llegar", href: "#contacto" },
},
```

Coloca la imagen en `apps/website/public/demos/cafe-norte/hero.jpg` y usa la ruta que empieza por `/`. Si la imagen aporta información, actualiza el `alt` que se usa en `BusinessDemo`; si es decorativa, deja el actual `alt=""`.

Después actualiza, sin cambiar la estructura:

- `story`: presentación del negocio.
- `services.items`: servicios o puntos fuertes.
- `stats`: cifras comprobables.
- `contact`: teléfono, correo y dirección reales.

## 6. Carta y proceso

Las plantillas de restaurante incluyen `menu`. Añade, elimina o edita categorías y platos:

```ts
menu: {
    eyebrow: "Carta",
    title: "Para cualquier hora.",
    sections: [
        {
            category: "Desayunos",
            items: [
                {
                    name: "Tostada de aguacate",
                    description: "Pan de masa madre, aguacate y semillas.",
                    price: "6,50 €",
                    image: "/demos/cafe-norte/tostada.jpg",
                },
            ],
        },
    ],
},
```

Taller y fontanería incluyen `process`. Conserva tres pasos simples: contacto, valoración y resolución.

## 7. Registra la ruta

En `apps/website/src/App.tsx`, importa y añade la ruta:

```tsx
import { CafeNorteDemo } from "@/demos/restaurante/cafe-norte/demo"

// Dentro de <Routes>
<Route path="/demos/cafe-norte" element={<CafeNorteDemo />} />
```

Prueba la página en `http://localhost:5173/demos/cafe-norte`.

## 8. Revisión antes de publicar

Ejecuta desde la raíz:

```powershell
npm.cmd run lint --workspace=@warrior-code/website
npm.cmd run build:website
```

Comprueba en móvil y escritorio:

- Un solo título principal (`h1`).
- Botones y enlaces con destinos reales.
- Teléfono mediante `tel:` y correo mediante `mailto:`.
- Fotos proporcionadas y comprimidas.
- Contraste legible entre texto, fondo y botones.
- Título y descripción SEO con el negocio real.

