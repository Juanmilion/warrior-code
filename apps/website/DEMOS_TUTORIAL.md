# Tutorial para principiantes: crear una web desde una demo

Este proyecto ya tiene una demo real funcionando: **Café Norte**.

Abre `http://localhost:5173/demos/cafe-norte` con el servidor de desarrollo activo. Su código está en `src/demos/restaurante/cafe-norte/demo.tsx`.

## Paso 1: entiende qué archivo hace qué

```text
src/demos/
├── _shared/
│   ├── BusinessDemo.tsx  ← estructura que no cambias normalmente
│   └── types.ts          ← tipos de los datos de la plantilla
└── restaurante/
    └── cafe-norte/
        └── demo.tsx      ← aquí cambias el cliente, colores y contenido
```

La idea es sencilla: `BusinessDemo.tsx` es el molde; `demo.tsx` es la ficha del negocio.

## Paso 2: crea una nueva carpeta de cliente

Para hacer una web para `Bar Luna`, copia esta carpeta:

```text
src/demos/restaurante/cafe-norte
```

Pégala como:

```text
src/demos/restaurante/bar-luna
```

No copies `_shared` otra vez: ya existe una sola vez y todas las demos lo reutilizan.

## Paso 3: cambia el nombre del componente

Abre `src/demos/restaurante/bar-luna/demo.tsx` y cambia:

```tsx
export function CafeNorteDemo() {
```

por:

```tsx
export function BarLunaDemo() {
```

## Paso 4: cambia solo el objeto `config`

Empieza por `config.seo`:

```ts
seo: {
    title: "Bar Luna | Copas y tapas en Huelva",
    description: "Tapas, vinos y copas en el centro de Huelva.",
},
```

Después cambia `business`. Ahí están el nombre, el gran titular, la foto de portada y los dos botones:

```ts
business: {
    name: "BAR LUNA",
    eyebrow: "Tapas y copas · Huelva",
    headline: "Tu rincón para alargar la noche.",
    description: "Tapas, vinos y una barra con ambiente.",
    heroImage: "/demos/bar-luna/hero.jpg",
    primaryAction: { label: "Ver carta", href: "#carta" },
    secondaryAction: { label: "Cómo llegar", href: "#contacto" },
},
```

## Paso 5: añade tus imágenes

Guarda la foto principal en:

```text
public/demos/bar-luna/hero.jpg
```

Y usa exactamente esta ruta dentro de `heroImage`:

```ts
heroImage: "/demos/bar-luna/hero.jpg"
```

Las rutas que empiezan por `/` apuntan a la carpeta `public`.

## Paso 6: personaliza los colores

Dentro de `theme`, cambia los valores hexadecimales, pero no borres los nombres de variables:

```ts
theme: {
    "--background": "#171216",
    "--foreground": "#fff7f4",
    "--card": "#241c21",
    "--primary": "#e09a5e",
    "--primary-foreground": "#1e1515",
    "--secondary": "#21191e",
    "--muted-foreground": "#d4c0c5",
    "--border": "rgba(255,247,244,.13)",
},
```

`--primary` colorea botones y detalles. `--primary-foreground` es el texto que aparece encima de esos botones.

## Paso 7: edita secciones sin tocar el molde

En el mismo `config` encontrarás:

- `story.paragraphs`: los textos de presentación.
- `services.items`: las tarjetas de servicios.
- `menu.sections`: categorías y platos; úsalo para bares y restaurantes.
- `stats`: tres cifras cortas y reales.
- `contact`: dirección, teléfono y correo.

Para añadir un servicio, duplica un objeto dentro de `services.items`:

```ts
{ title: "Terraza", description: "Mesas al aire libre hasta medianoche." },
```

## Paso 8: crea la ruta

Abre `src/App.tsx`, añade la importación:

```tsx
import { BarLunaDemo } from "@/demos/restaurante/bar-luna/demo"
```

Y dentro de `<Routes>` añade:

```tsx
<Route path="/demos/bar-luna" element={<BarLunaDemo />} />
```

Ahora la demo estará en `http://localhost:5173/demos/bar-luna`.

## Paso 9: revisa antes de entregar

Desde la raíz ejecuta:

```powershell
npm.cmd run lint --workspace=@warrior-code/website
npm.cmd run build:website
```

Antes de publicar, sustituye contenido de ejemplo, comprueba el teléfono y correo, y revisa la página tanto en móvil como en escritorio.
