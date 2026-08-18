import {
    ArrowUpRight,
    Clock,
    Coffee,
    Flame,
    MapPin,
    Sparkles,
    Star,
    UtensilsCrossed,
} from "lucide-react"
import fondo from "../../assets/fondo-cafeteria.jpg"
import plato from "../../assets/plato-estrella.jpg"

export function RestaurantMockup() {
    return (
        <div className="group relative overflow-hidden rounded-[28px] border border-[#d6b58d]/25 bg-[#f7f2ea] shadow-[0_35px_80px_rgba(74,52,31,0.18)] transition-all duration-500 hover:-translate-y-1 hover:border-[#b87232]/40">
            <div className="flex items-center justify-between border-b border-[#d8c4a5]/70 px-5 py-3">
                <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#cf7a2a]" />
                    <span className="size-2 rounded-full bg-[#8c5b34]" />
                    <span className="size-2 rounded-full bg-[#d3a36d]" />
                </div>

                <span className="text-[10px] font-semibold tracking-[0.24em] text-[#7c5a3b] uppercase">
                    cafecentral.es
                </span>

                <div className="w-8" />
            </div>

            <div className="relative min-h-[500px] overflow-hidden bg-[linear-gradient(135deg,#f8f0e6_0%,#f1e1cb_32%,#e7d2b0_100%)]">
                <div className="absolute -right-14 -top-14 size-64 rounded-full bg-[#d98f3f]/20 blur-3xl" />
                <div className="absolute -bottom-16 left-10 size-52 rounded-full bg-[#7a4b22]/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.5),transparent_30%),linear-gradient(135deg,rgba(122,75,34,0.08),transparent_60%)]" />
                <div className="absolute inset-0 opacity-80">
                    <div className="h-full w-full border border-[#7a4b22]/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%,rgba(122,75,34,0.05))]" />
                </div>

                {/* PON LA RUTA LOCAL DE LA IMAGEN DE FONDO AQUÍ */}
                {/* Ejemplo: /assets/restaurante/fondo.jpg */}
                <div style={{ backgroundImage: `url(${fondo})` }} className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30" />

                <div className="relative flex min-h-[500px] flex-col p-6 sm:p-8">
                    <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0.14),transparent)]" />

                    <header className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                            <div className="flex size-8 items-center justify-center rounded-full bg-[#5a2d18] text-[#f9f2e9]">
                                <Coffee className="size-3.5" />
                            </div>
                            <span className="text-xs font-semibold tracking-[0.18em] text-[#3a2518]">
                                CAFÉ CENTRAL
                            </span>
                        </div>

                        <nav className="hidden items-center gap-5 text-[10px] font-semibold tracking-[0.2em] text-[#6e4d36] sm:flex">
                            <span>MENU</span>
                            <span>RESERVAS</span>
                            <span>CONTACTO</span>
                        </nav>

                        <button className="inline-flex items-center justify-center rounded-full border border-[#7a4b22]/20 bg-white/40 px-2.5 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-[#4a3320] sm:hidden">
                            MENU
                        </button>
                    </header>

                    <main className="mt-8 grid flex-1 gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                        <div className="flex flex-col justify-center">
                            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#b87232]/25 bg-[#f7dcc0] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7a4b22]">
                                <UtensilsCrossed className="size-3.5" />
                                Cocina artesanal
                            </div>

                            <h3 className="max-w-md text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[#2e1f17] sm:text-5xl">
                                Sabor para
                                <br />
                                cada momento.
                            </h3>

                            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#5d4638]">
                                Brunch, café de especialidad y platos caseros pensados para
                                compartir en buena compañía.
                            </p>

                            <div className="mt-7 flex flex-wrap items-center gap-3">
                                <button className="inline-flex items-center gap-2 rounded-full bg-[#5a2d18] px-5 py-2.5 text-xs font-semibold text-[#f7f2ea] transition-transform duration-200 hover:translate-x-0.5">
                                    Ver carta
                                    <ArrowUpRight className="size-3.5" />
                                </button>

                                <button className="inline-flex items-center gap-2 rounded-full border border-[#7a4b22]/20 bg-white/40 px-5 py-2.5 text-xs font-semibold text-[#3b291f] transition-all duration-200 hover:border-[#b87232]/40 hover:bg-[#fff8f3]">
                                    Reservar mesa
                                </button>
                            </div>

                            <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-[#8a6a4d]/20 pt-5 text-[11px] text-[#6d5240]">
                                <div className="flex items-center gap-2">
                                    <Clock className="size-3.5 text-[#914d1f]" />
                                    <span>Hoy · 09:00 — 23:30</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="size-3.5 text-[#914d1f]" />
                                    <span>Centro · Huelva</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative overflow-hidden rounded-[24px] border border-[#d4bb94]/50 bg-[linear-gradient(135deg,#f9efe3_0%,#e8d8c2_100%)] p-4 shadow-[0_30px_60px_rgba(74,52,31,0.18)]">
                                <div className="rounded-[20px] border border-[#c7935d]/20 bg-[radial-gradient(circle_at_top,_rgba(183,114,50,0.12),transparent_35%),linear-gradient(135deg,#f8f4ee,#f0e5d4_60%)] p-4">
                                    <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-[#73553c]">
                                        <span>Especial del día</span>
                                        <span className="inline-flex items-center gap-1 rounded-full bg-[#f0d7b7] px-2 py-1 text-[#7a4b22]">
                                            <Star className="size-3" fill="currentColor" />
                                            4.9
                                        </span>
                                    </div>

                                    <div className="rounded-[20px] bg-[linear-gradient(135deg,#f7efe5,#efe1cd)] p-4 shadow-inner shadow-[#8b6b48]/10">
                                        <div className="mb-4 flex items-center justify-between">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7a4b22]">
                                                Plato estrella
                                            </span>
                                            <span className="text-[11px] text-[#6e4d36]">18 €</span>
                                        </div>

                                        {/* PON LA RUTA LOCAL DE LA IMAGEN DEL PLATO AQUÍ */}
                                        {/* Ejemplo: /assets/restaurante/plato.jpg */}
                                        <div style={{ backgroundImage: `url(${plato})` }} className="mb-4 flex h-32 items-center justify-center overflow-hidden rounded-[18px] border border-[#c7955f]/30 bg-cover bg-center bg-no-repeat text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5a2d18]">
                                            {/* <span className="rounded-full border border-[#5a2d18]/20 bg-white/20 px-3 py-1.5 backdrop-blur-sm">
                                                IMAGEN PLATO
                                            </span> */}
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="text-base font-semibold text-[#2f1f17]">
                                                    Toast de la casa
                                                </span>
                                                <span className="flex items-center gap-1 text-[#a75d1b]">
                                                    <Sparkles className="size-3.5" />
                                                </span>
                                            </div>
                                            <p className="text-xs leading-relaxed text-[#5f463a]">
                                                Pan artesanal, huevo, aguacate, tomate y café recién hecho.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-3 -left-3 rounded-2xl border border-[#a96b38]/20 bg-[#fffaf4]/90 p-3 shadow-xl backdrop-blur-sm">
                                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#6d5240]">
                                    <span className="flex size-2 items-center justify-center rounded-full bg-[#b87232]">
                                        <Flame className="size-1.5 text-white" />
                                    </span>
                                    Reserva rápida
                                </div>
                                <p className="mt-2 text-sm font-semibold text-[#312118]">2 mesas libres</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}