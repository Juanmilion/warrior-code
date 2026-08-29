import { Link } from "react-router-dom"

const navigation = [
    { label: "Servicios", href: "#servicios" },
    { label: "Ejemplos", href: "#ejemplos" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Precio", href: "#precio" },
    { label: "FAQ", href: "#faq" },
]

export function Footer() {
    return (
        <footer className="border-t border-border bg-background/80">
            <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14">
                <div className="grid gap-10 md:grid-cols-[1.1fr_auto] md:items-start">
                    <div className="max-w-sm">
                        <a
                            href="#inicio"
                            className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] text-foreground transition-colors hover:text-primary"
                        >
                            <span className="inline-block size-2 rounded-full bg-primary" />
                            WARRIOR CODE
                        </a>

                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                            Webs profesionales para pequeños negocios. Diseño,
                            despliegue y mantenimiento en un solo servicio.
                        </p>
                    </div>

                    <nav className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:grid-cols-2">
                        {navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-primary/60"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <span>© {new Date().getFullYear()} Warrior Code</span>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <Link to="/aviso-legal">
                            Aviso legal
                        </Link>

                        <Link to="/privacidad">
                            Privacidad
                        </Link>

                        <Link to="/cookies">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
