import {
    ArrowRight,
    BookOpen,
    CalendarDays,
    CheckCircle2,
    GraduationCap,
    Sparkles,
} from "lucide-react"

export function AcademyMockup() {
    const courses = [
        {
            number: "01",
            title: "Diseño gráfico",
            level: "Inicial · Intermedio",
        },
        {
            number: "02",
            title: "Marketing digital",
            level: "Intermedio",
        },
        {
            number: "03",
            title: "Fotografía",
            level: "Todos los niveles",
        },
    ]

    return (
        <div className="group relative overflow-hidden rounded-[28px] border border-[#e7dac5] bg-[#f6efe6] shadow-[0_35px_80px_rgba(36,28,21,0.14)] transition-all duration-500 hover:-translate-y-1 hover:border-[#c99752]/45">
            <div className="flex items-center justify-between border-b border-[#e5d7bf] bg-[#fcf8f3] px-5 py-3">
                <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-[#204f7d]" />
                    <span className="size-2 rounded-full bg-[#d7a04a]" />
                    <span className="size-2 rounded-full bg-[#cdb99d]" />
                </div>

                <span className="text-[10px] font-semibold tracking-[0.24em] text-[#685d52] uppercase">
                    aula.studio
                </span>

                <div className="w-8" />
            </div>

            <div className="relative min-h-[500px] overflow-hidden bg-[linear-gradient(135deg,#f9f3ea_0%,#f0e6d4_35%,#e8dcc4_100%)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(215,160,74,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(32,79,125,0.12),transparent_35%)]" />
                <div className="absolute -right-20 -top-20 size-80 rounded-full bg-[#d7a04a]/15 blur-3xl" />
                <div className="absolute bottom-8 -left-16 size-72 rounded-full bg-[#204f7d]/12 blur-3xl" />

                <div className="absolute inset-0 opacity-25">
                    <div className="absolute left-[10%] top-0 h-full w-px bg-[#cabba4]" />
                    <div className="absolute left-[50%] top-0 h-full w-px bg-[#cabba4]" />
                    <div className="absolute right-[10%] top-0 h-full w-px bg-[#cabba4]" />
                </div>

                <div className="relative flex min-h-[500px] flex-col">
                    <header className="flex items-center justify-between border-b border-[#e8dcc8] px-6 py-5 sm:px-8">
                        <div className="flex items-center gap-3">
                            <div className="flex size-9 items-center justify-center bg-[#204f7d] text-[#f9f6f1] shadow-[0_12px_24px_rgba(32,79,125,0.18)]">
                                <GraduationCap className="size-4" />
                            </div>

                            <div>
                                <span className="block text-[10px] font-black tracking-[0.18em] text-[#204f7d]">
                                    AULA
                                </span>
                                <span className="block text-[8px] font-medium tracking-[0.24em] text-[#6d645c] uppercase">
                                    Formación creativa
                                </span>
                            </div>
                        </div>

                        <nav className="hidden items-center gap-6 sm:flex">
                            <span className="text-[9px] font-semibold tracking-[0.18em] text-[#625d57] uppercase">
                                Cursos
                            </span>
                            <span className="text-[9px] font-semibold tracking-[0.18em] text-[#625d57] uppercase">
                                Profesores
                            </span>
                            <span className="text-[9px] font-semibold tracking-[0.18em] text-[#625d57] uppercase">
                                Nosotros
                            </span>
                        </nav>

                        <button className="border border-[#204f7d] bg-[#204f7d] px-3.5 py-2 text-[9px] font-bold tracking-[0.12em] text-white uppercase transition-colors hover:bg-[#285f8d]">
                            Acceder
                        </button>
                    </header>

                    <section className="border-b border-[#e8dcc8] px-6 py-9 sm:px-8 sm:py-10">
                        <div className="grid gap-7 sm:grid-cols-[1fr_auto] sm:items-end">
                            <div>
                                <div className="mb-4 flex items-center gap-2">
                                    <span className="size-1.5 rounded-full bg-[#d7a04a]" />
                                    <span className="text-[9px] font-bold tracking-[0.22em] text-[#8b6a2f] uppercase">
                                        Formación · Creatividad · Futuro
                                    </span>
                                </div>

                                <h3 className="max-w-xl text-4xl font-black leading-[0.9] tracking-[-0.06em] text-[#1b3b59] sm:text-5xl lg:text-6xl">
                                    Aprende algo
                                    <br />
                                    que te lleve
                                    <br />
                                    más lejos.
                                </h3>
                            </div>

                            <div className="max-w-[190px] rounded-[20px] border border-[#e0d3b8] bg-white/45 p-4 shadow-[0_10px_30px_rgba(94,77,57,0.08)] backdrop-blur-sm">
                                <p className="text-xs leading-relaxed text-[#5f564f]">
                                    Cursos prácticos para convertir tus ideas en
                                    habilidades reales y aplicables.
                                </p>

                                <button className="mt-4 inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-[#204f7d] uppercase">
                                    Explorar cursos
                                    <ArrowRight className="size-3.5" />
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="grid flex-1 sm:grid-cols-[1.35fr_0.65fr]">
                        <div className="border-b border-[#e8dcc8] px-6 py-6 sm:border-b-0 sm:border-r sm:px-8">
                            <div className="mb-5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <BookOpen className="size-3.5 text-[#204f7d]" />
                                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#766f67] uppercase">
                                        Cursos destacados
                                    </span>
                                </div>
                                <span className="text-[8px] text-[#9d9488]">03 opciones</span>
                            </div>

                            <div className="space-y-3">
                                {courses.map((course) => (
                                    <div
                                        key={course.number}
                                        className="group/course grid grid-cols-[34px_1fr_auto] items-center gap-3 rounded-[16px] border border-[#e7dcc9] bg-white/35 px-3 py-3.5 transition-all duration-200 hover:border-[#d7a04a]/40 hover:bg-[#fffdf9]"
                                    >
                                        <span className="text-[9px] font-bold text-[#bf9f57]">
                                            {course.number}
                                        </span>

                                        <div>
                                            <span className="block text-xs font-bold text-[#204f7d]">
                                                {course.title}
                                            </span>
                                            <span className="mt-1 block text-[9px] text-[#7f766e]">
                                                {course.level}
                                            </span>
                                        </div>

                                        <ArrowRight className="size-3.5 text-[#9d9488] transition-transform duration-200 group-hover/course:translate-x-1 group-hover/course:text-[#204f7d]" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col justify-between bg-[linear-gradient(180deg,#204f7d_0%,#183d5d_100%)] px-6 py-6 text-[#f8f3ec] sm:px-7">
                            <div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[9px] font-bold tracking-[0.2em] text-[#e1bf65] uppercase">
                                        Próximo curso
                                    </span>
                                    <Sparkles className="size-3.5 text-[#e1bf65]" />
                                </div>

                                <h4 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.04em] text-white">
                                    Inscripciones
                                    <br />
                                    abiertas.
                                </h4>

                                <p className="mt-3 text-[10px] leading-relaxed text-white/60">
                                    Nueva edición · Septiembre 2026
                                </p>
                            </div>

                            <div className="mt-8">
                                <div className="flex items-center gap-2 border-t border-white/10 pt-4">
                                    <CalendarDays className="size-3.5 text-[#e1bf65]" />
                                    <span className="text-[9px] text-white/65">
                                        Inicio · 15 septiembre
                                    </span>
                                </div>

                                <div className="mt-3 flex items-center gap-2">
                                    <CheckCircle2 className="size-3.5 text-[#e1bf65]" />
                                    <span className="text-[9px] text-white/65">
                                        12 plazas disponibles
                                    </span>
                                </div>

                                <button className="mt-5 flex w-full items-center justify-center gap-2 bg-[#d7a04a] px-4 py-3 text-[9px] font-bold tracking-[0.14em] text-[#1b3b59] uppercase transition-colors hover:bg-[#e2b260]">
                                    Reservar plaza
                                    <ArrowRight className="size-3.5" />
                                </button>
                            </div>
                        </div>
                    </section>

                    <footer className="grid grid-cols-3 border-t border-[#e8dcc8] bg-[#faf7f2]">
                        <div className="border-r border-[#e8dcc8] px-4 py-3.5">
                            <span className="block text-[8px] font-bold tracking-[0.16em] text-[#9d9488] uppercase">
                                Cursos
                            </span>
                            <span className="mt-1 block text-sm font-black text-[#204f7d]">+18</span>
                        </div>

                        <div className="border-r border-[#e8dcc8] px-4 py-3.5">
                            <span className="block text-[8px] font-bold tracking-[0.16em] text-[#9d9488] uppercase">
                                Alumnos
                            </span>
                            <span className="mt-1 block text-sm font-black text-[#204f7d]">+450</span>
                        </div>

                        <div className="px-4 py-3.5">
                            <span className="block text-[8px] font-bold tracking-[0.16em] text-[#9d9488] uppercase">
                                Modalidad
                            </span>
                            <span className="mt-1 block text-sm font-black text-[#204f7d]">Presencial</span>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}