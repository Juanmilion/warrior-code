"use client"

import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"
import warriorCodeLogo from "@/assets/warrior-code-logo.png"
import { useState } from "react"
import { Link } from "react-router-dom"

const navigation = [
    { label: "Servicios", href: "#servicios" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Ejemplos", href: "#ejemplos" },
    { label: "Precios", href: "#precio" },
    { label: "FAQ", href: "#faq" },
]

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-primary/15 bg-gradient-to-b from-background via-background to-background/95 backdrop-blur-xl">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <Container>
                <nav className="flex h-20 items-center justify-between">
                    <a
                        href="#inicio"
                        aria-label="Warrior Code"
                        className="group flex items-center gap-3 rounded-lg outline-none transition-all duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary/60"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                            <img
                                src={warriorCodeLogo}
                                alt=""
                                className="relative h-10 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>

                        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-sm font-extrabold tracking-[0.15em] text-transparent transition-all duration-300 group-hover:from-primary group-hover:to-primary/70">
                            WARRIOR CODE
                        </span>
                    </a>

                    <div className="hidden items-center gap-8 md:flex">
                        {navigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="group relative text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-primary focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary/50"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                    </div>

                    <div className="hidden items-center gap-3 md:flex">

                        <Link to="/ejemplos">
                            <Button
                                variant="outline"
                                size="sm"
                                className="group border-primary/30 text-primary hover:border-primary/50 hover:bg-primary/10"
                            >                                Ver ejemplos
                            </Button>
                        </Link>
                        <Button
                            render={<a href="#contacto" />}
                            size="sm"
                            className="group bg-gradient-to-r from-primary to-primary/80 text-primary-foreground transition-shadow hover:shadow-lg hover:shadow-primary/25"
                        >
                            Quiero mi web →
                        </Button>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="group relative flex size-11 items-center justify-center rounded-lg outline-none md:hidden focus-visible:ring-2 focus-visible:ring-primary/60"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        <div className="relative h-6 w-6">
                            <span
                                className={`absolute left-0 top-1 block h-0.5 w-5 transform bg-foreground transition-all duration-300 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
                            />
                            <span
                                className={`absolute left-0 top-2.5 block h-0.5 w-5 bg-foreground transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                            />
                            <span
                                className={`absolute left-0 top-4 block h-0.5 w-5 transform bg-foreground transition-all duration-300 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                            />
                        </div>
                    </button>
                </nav>

                {isMenuOpen && (
                    <div id="mobile-navigation" className="border-t border-primary/10 bg-background/95 pb-4 pt-3 md:hidden">
                        <div className="flex flex-col space-y-2">
                            {navigation.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="rounded-xl px-3 py-3 text-sm font-medium text-muted-foreground outline-none transition-colors hover:bg-primary/5 hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary/60"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div className="mt-4 flex flex-col gap-2">
                            <Link to="/ejemplos">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full border-primary/30 text-primary hover:border-primary/50 hover:bg-primary/10"
                                >
                                    Ver ejemplos
                                </Button>
                            </Link>
                            <Button
                                render={<a href="#contacto" />}
                                size="sm"
                                className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"
                            >
                                Quiero mi web →
                            </Button>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    )
}
