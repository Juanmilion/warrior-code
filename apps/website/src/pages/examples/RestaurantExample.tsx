// import { Button } from "@/components/ui/button"
import {
    Container,
    Grid,
    Section,
    Stack,
} from "@warrior-code/ui"

export function RestaurantExample() {
    return (
        <main>
            <Section
                eyebrow="Restaurante"
                title="Una sección construida con nuestro sistema"
                description="Container, Stack y Grid son componentes reutilizables."
                align="center"
            >
                <Container>
                    <Grid columns={3} gap="lg">
                        <div className="rounded-2xl border border-border p-6">
                            <Stack gap="sm">
                                <h3 className="font-semibold">
                                    Cocina
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    Producto fresco y cocina de mercado.
                                </p>
                            </Stack>
                        </div>

                        <div className="rounded-2xl border border-border p-6">
                            <Stack gap="sm">
                                <h3 className="font-semibold">
                                    Experiencia
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    Un espacio pensado para disfrutar.
                                </p>
                            </Stack>
                        </div>

                        <div className="rounded-2xl border border-border p-6">
                            <Stack gap="sm">
                                <h3 className="font-semibold">
                                    Reservas
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    Reserva tu mesa de forma sencilla.
                                </p>
                            </Stack>
                        </div>
                    </Grid>
                </Container>
            </Section>
        </main>
    )
}