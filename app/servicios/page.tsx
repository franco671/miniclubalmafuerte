import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Dumbbell, Users, Lightbulb, Clock, CheckCircle, MapPin, Phone, Instagram } from "lucide-react"

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Servicios Premium
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary text-balance">Nuestros Servicios</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Descubre todas las opciones que tenemos para vos. Desde gimnasio completo hasta alquiler de canchas y
              espacios para eventos especiales.
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gimnasio */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/gimnasio-completo.jpg"
                  alt="Gimnasio completo MiniClub Almafuerte"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Más Popular</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Dumbbell className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Gimnasio Completo</CardTitle>
                    <p className="text-muted-foreground">Equipamiento moderno y profesional</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-primary">$20.000</span>
                    <span className="text-muted-foreground">por mes</span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Acceso completo a todos los equipos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Máquinas de cardio y musculación</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Pesas libres y funcional</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Ambiente climatizado</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Horarios flexibles</span>
                    </div>
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/contacto">Consultar Disponibilidad</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Canchas */}
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/cancha-exterior.jpg"
                  alt="Cancha de fútbol MiniClub Almafuerte"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">Por Hora</Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Alquiler de Canchas</CardTitle>
                    <p className="text-muted-foreground">Césped sintético de primera calidad</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                        <span className="font-semibold">Sin Luz</span>
                      </div>
                      <div className="text-2xl font-bold text-primary">$4.000</div>
                      <div className="text-sm text-muted-foreground">por hora</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/10 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Lightbulb className="h-5 w-5 text-secondary mr-2" />
                        <span className="font-semibold">Con Luz</span>
                      </div>
                      <div className="text-2xl font-bold text-secondary">$5.500</div>
                      <div className="text-sm text-muted-foreground">por hora</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Césped sintético de alta calidad</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Arcos reglamentarios</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Vestuarios disponibles</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span>Estacionamiento gratuito</span>
                    </div>
                  </div>

                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/contacto">Reservar Cancha</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eventos y Servicios Adicionales */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Servicios Adicionales</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Además de nuestros servicios principales, ofrecemos espacios y opciones para hacer de tu experiencia algo
              único
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Eventos */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image src="/images/eventos.jpg" alt="Eventos familiares" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Eventos Familiares</h3>
                <p className="text-muted-foreground mb-4">
                  Espacio perfecto para cumpleaños, celebraciones y reuniones familiares con vista a las canchas.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contacto">Consultar Precios</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Futbolín */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image src="/images/futbolin.jpg" alt="Mesa de futbolín" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mesa de Futbolín</h3>
                <p className="text-muted-foreground mb-4">
                  Disfruta de partidos de futbolín mientras esperas tu turno o después del entrenamiento.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/contacto">Más Información</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Horarios y Información */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">Información Importante</h2>
              <p className="text-xl text-muted-foreground">Todo lo que necesitas saber sobre nuestros servicios</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Horarios de Atención</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Lunes a Viernes:</span>
                      <span className="text-muted-foreground">8:00 - 22:00</span>
                    </div>
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="text-sm text-foreground font-medium">
                        <strong className="text-primary">Visitas:</strong> Puedes acercarte a conocer nuestras
                        instalaciones cuando desees durante nuestros horarios de atención.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Incluido en Todos los Servicios</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Estacionamiento gratuito</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Vestuarios y duchas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Agua potable</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Ambiente climatizado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contactanos para más información sobre nuestros servicios o para reservar tu espacio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contacto">Contactar Ahora</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/galeria">Ver Instalaciones</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">MiniClub Almafuerte</h3>
              <p className="text-foreground mb-4">
                Tu espacio para el deporte y eventos familiares en Reconquista, Santa Fe.
              </p>
              <div className="flex items-center space-x-2 text-foreground">
                <MapPin className="h-4 w-4" />
                <span>Reconquista, Santa Fe, Argentina</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
                <Link href="/sobre-nosotros" className="block text-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
                <Link href="/galeria" className="block text-foreground hover:text-primary transition-colors">
                  Galería
                </Link>
                <Link href="/contacto" className="block text-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-foreground">
                  <Phone className="h-4 w-4" />
                  <a href="https://wa.me/5493482647277" className="hover:text-primary transition-colors">
                    +54 9 3482 647277
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-foreground">
                  <Instagram className="h-4 w-4" />
                  <a
                    href="https://www.instagram.com/miniclubalmafuerte?igsh=OGp6dTd1ajI0MTA="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    @miniclubalmafuerte
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-foreground">
            <p>&copy; 2025 MiniClub Almafuerte. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
