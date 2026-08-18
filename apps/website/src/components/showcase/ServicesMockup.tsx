import {
    ArrowRight,
    Droplets,
    Flame,
    Phone,
    ShieldCheck,
    Wrench,
} from "lucide-react"

export function ServicesMockup() {
    const services = [
        {
            number: "01",
            title: "Fugas",
            icon: Droplets,
        },
        {
            number: "02",
            title: "Desatascos",
            icon: Wrench,
        },
        {
            number: "03",
            title: "Calderas",
            icon: Flame,
        },
        {
            number: "04",
            title: "Instalaciones",
            icon: ShieldCheck,
        },
    ]

    return (
        <div className="group relative overflow-hidden rounded-[28px] border border-[#243238] bg-[#e9edef] shadow-[0_35px_80px_rgba(17,29,34,0.22)] transition-transform duration-500 hover:-translate-y-1">
            {/* Browser bar */}
            <div className="flex items-center justify-between border-b border-[#c9d1d4] bg-[#f3f5f5] px-5 py-3">
                <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#e34b35]" />
                    <span className="size-2 rounded-full bg-[#d69a32]" />
                    <span className="size-2 rounded-full bg-[#65757b]" />
                </div>

                <span className="text-[10px] font-bold tracking-[0.22em] text-[#526268] uppercase">
                    garciafontaneria.es
                </span>

                <div className="w-8" />
            </div>

            {/* Website */}
            <div className="relative min-h-[500px] overflow-hidden bg-[#111b1f] text-white">
                {/* Industrial background */}
                <div className="absolute inset-0 bg-[linear-gradient(115deg,#101a1e_0%,#17262b_55%,#21343a_100%)]" />

                <div className="absolute -right-32 top-20 size-96 rounded-full border-[70px] border-[#d94a35]/10" />

                <div className="absolute -bottom-40 -left-32 size-96 rounded-full border-[90px] border-[#d94a35]/5" />

                {/* Technical lines */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute left-[12%] top-0 h-full w-px bg-white/10" />
                    <div className="absolute left-[37%] top-0 h-full w-px bg-white/10" />
                    <div className="absolute right-[18%] top-0 h-full w-px bg-white/10" />

                    <div className="absolute left-0 top-[32%] h-px w-full bg-white/10" />
                    <div className="absolute left-0 top-[72%] h-px w-full bg-white/10" />
                </div>

                <div className="relative flex min-h-[500px] flex-col">
                    {/* Header */}
                    <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
                        <div className="flex items-center gap-3">
                            <div className="flex size-9 items-center justify-center bg-[#d94a35] text-white">
                                <Wrench className="size-4" />
                            </div>

                            <div>
                                <span className="block text-xs font-black tracking-[0.12em]">
                                    GARCÍA
                                </span>

                                <span className="block text-[8px] font-medium tracking-[0.24em] text-white/45">
                                    FONTANERÍA
                                </span>
                            </div>
                        </div>

                        <div className="hidden items-center gap-6 sm:flex">
                            <span className="text-[9px] font-bold tracking-[0.2em] text-white/45">
                                SERVICIOS
                            </span>

                            <span className="text-[9px] font-bold tracking-[0.2em] text-white/45">
                                EMPRESA
                            </span>

                            <span className="text-[9px] font-bold tracking-[0.2em] text-white/45">
                                CONTACTO
                            </span>
                        </div>

                        <div className="flex items-center gap-2 text-[#f0644c]">
                            <Phone className="size-3.5" />

                            <span className="text-[10px] font-bold tracking-wide">
                                600 123 456
                            </span>
                        </div>
                    </header>

                    {/* Emergency strip */}
                    <div className="flex items-center justify-between border-b border-[#d94a35]/20 bg-[#d94a35]/10 px-6 py-3 sm:px-8">
                        <div className="flex items-center gap-2">
                            <span className="size-1.5 animate-pulse rounded-full bg-[#f0644c]" />

                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ff8a76]">
                                Servicio de urgencias · 24/7
                            </span>
                        </div>

                        <span className="hidden text-[9px] text-white/35 sm:block">
                            Respuesta rápida
                        </span>
                    </div>

                    {/* Main */}
                    <main className="relative flex flex-1 flex-col">
                        <div className="grid flex-1 lg:grid-cols-[1.25fr_0.75fr]">
                            {/* Main message */}
                            <div className="flex flex-col justify-center border-b border-white/10 px-6 py-10 lg:border-b-0 lg:border-r lg:px-8">
                                <span className="mb-5 text-[15px] font-bold tracking-[0.3em] text-[#f0644c] uppercase">
                                    ¿Problemas con el agua?
                                </span>

                                <h3 className="max-w-xl text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-6xl">
                                    Estamos
                                    <br />
                                    en camino.
                                </h3>

                                <p className="mt-6 max-w-md text-sm leading-relaxed text-white/55">
                                    Reparaciones de emergencia, fugas, desatascos e
                                    instalaciones. Atención profesional cuando más la
                                    necesitas.
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <button className="inline-flex items-center gap-2 bg-[#d94a35] px-5 py-3 text-[10px] font-bold tracking-[0.14em] text-white uppercase transition-colors hover:bg-[#ed5942]">
                                        Llamar ahora
                                        <Phone className="size-3.5" />
                                    </button>

                                    <button className="inline-flex items-center gap-2 border border-white/15 px-5 py-3 text-[10px] font-bold tracking-[0.14em] text-white/75 uppercase transition-colors hover:bg-white/5">
                                        Presupuesto
                                        <ArrowRight className="size-3.5" />
                                    </button>
                                </div>
                            </div>

                            {/* Services */}
                            <div className="flex flex-col justify-center px-6 py-8 sm:px-8">
                                <div className="mb-5 flex items-end justify-between">
                                    <div>
                                        <span className="text-[9px] font-bold tracking-[0.24em] text-white/35 uppercase">
                                            Especialidades
                                        </span>

                                        <h4 className="mt-1 text-lg font-bold">
                                            ¿Qué necesitas?
                                        </h4>
                                    </div>

                                    <span className="text-[8px] text-white/25">
                                        04 servicios
                                    </span>
                                </div>

                                <div className="space-y-1">
                                    {services.map((service) => {
                                        const Icon = service.icon

                                        return (
                                            <div
                                                key={service.number}
                                                className="group/service flex items-center justify-between border-b border-white/10 py-4 transition-colors hover:border-[#d94a35]/50"
                                            >
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[9px] font-bold text-[#d94a35]">
                                                        {service.number}
                                                    </span>

                                                    <div className="flex size-8 items-center justify-center border border-white/10 text-white/60">
                                                        <Icon className="size-3.5" />
                                                    </div>

                                                    <span className="text-xs font-semibold">
                                                        {service.title}
                                                    </span>
                                                </div>

                                                <ArrowRight className="size-3.5 text-white/20 transition-transform group-hover/service:translate-x-1 group-hover/service:text-[#f0644c]" />
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="mt-6 border border-white/10 bg-white/[0.03] p-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-8 items-center justify-center bg-[#d94a35]/15 text-[#f0644c]">
                                            <ShieldCheck className="size-4" />
                                        </div>

                                        <div>
                                            <span className="block text-[9px] font-bold tracking-[0.12em] text-white/35 uppercase">
                                                Disponible ahora
                                            </span>

                                            <span className="mt-1 block text-xs font-semibold">
                                                Servicio activo 24 horas
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom data strip */}
                        <footer className="grid grid-cols-3 border-t border-white/10 bg-black/10">
                            <div className="border-r border-white/10 px-4 py-4">
                                <span className="block text-[8px] font-bold tracking-[0.18em] text-white/25 uppercase">
                                    Cobertura
                                </span>

                                <span className="mt-1 block text-[10px] font-semibold text-white/70">
                                    Huelva y provincia
                                </span>
                            </div>

                            <div className="border-r border-white/10 px-4 py-4">
                                <span className="block text-[8px] font-bold tracking-[0.18em] text-white/25 uppercase">
                                    Atención
                                </span>

                                <span className="mt-1 block text-[10px] font-semibold text-white/70">
                                    24 horas
                                </span>
                            </div>

                            <div className="px-4 py-4">
                                <span className="block text-[8px] font-bold tracking-[0.18em] text-white/25 uppercase">
                                    Respuesta
                                </span>

                                <span className="mt-1 block text-[10px] font-semibold text-[#f0644c]">
                                    Inmediata
                                </span>
                            </div>
                        </footer>
                    </main>
                </div>
            </div>
        </div>
    )
}