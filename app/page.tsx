import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Dumbbell, Users, Calendar, MapPin, Phone, Instagram } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative">
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-in slide-in-from-bottom-4 duration-1000 delay-200">
            MiniClub Almafuerte en <span className="text-secondary">Reconquista, Santa Fe</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-400">
            Gimnasio moderno, cancha de fútbol 5 con iluminación y parrilla ideal para encuentros familiares y
            deportivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-4 duration-1000 delay-600">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 hover:scale-105"
            >
              <Link href="/servicios">Ver Servicios</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent transition-all duration-300 hover:scale-105"
            >
              <Link href="/contacto">Contactanos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in duration-1000">
            <h2 className="text-4xl font-bold mb-4 text-primary">Servicios del MiniClub Almafuerte</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Desde 2019 brindamos el mejor servicio deportivo y de entretenimiento en Reconquista, Santa Fe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-left duration-1000 delay-200">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-primary/20">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gimnasio Moderno Equipado</h3>
                <p className="text-foreground/70">
                  Equipamiento moderno y completo para todos tus entrenamientos. Ambiente cómodo y profesional con
                  máquinas de última generación.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-bottom duration-1000 delay-400">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-secondary/20">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cancha de Fútbol 5 con Iluminación</h3>
                <p className="text-foreground/70">
                  Cancha de césped sintético con iluminación LED. Perfecta para partidos nocturnos y entrenamientos
                  profesionales.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-in slide-in-from-right duration-1000 delay-600">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-accent/20">
                  <Calendar className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Parrilla para Encuentros</h3>
                <p className="text-foreground/70">
                  Parrilla ideal para encuentros familiares, cumpleaños y eventos especiales con familia y amigos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-in fade-in duration-1000">
            <h2 className="text-4xl font-bold mb-4 text-primary">Ubicación</h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Visitanos en nuestras instalaciones en el corazón de Reconquista
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-in slide-in-from-left duration-1000 delay-200">
              <h3 className="text-2xl font-semibold mb-4">Nuestra Dirección</h3>
              <div className="bg-background p-6 rounded-lg shadow-lg border transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start space-x-3 mb-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">MiniClub Almafuerte</p>
                    <p className="text-foreground/80 font-medium">Almafuerte 760</p>
                    <p className="text-foreground/80 font-medium">Reconquista, Santa Fe, Argentina</p>
                  </div>
                </div>
                <p className="text-foreground/70 font-medium">
                  Fácil acceso y estacionamiento disponible. Ubicado en zona céntrica de Reconquista.
                </p>
              </div>
            </div>

            <div className="animate-in slide-in-from-right duration-1000 delay-400">
              <h3 className="text-2xl font-semibold mb-4">Cómo Llegar</h3>
              <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8234567890123!2d-59.644663!3d-29.1377347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944ebb69f7237be1%3A0x86e8d3cb7e7c1cf4!2sMiniclub%20Almafuerte%2C%20S3560%20Reconquista%2C%20Santa%20Fe!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación MiniClub Almafuerte en Google Maps"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center animate-in fade-in duration-1000">
          <h2 className="text-4xl font-bold mb-6 animate-in slide-in-from-bottom duration-1000 delay-200">
            Reservas y Consultas
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto animate-in slide-in-from-bottom duration-1000 delay-400">
            Únete a nuestra comunidad deportiva y disfruta de las mejores instalaciones en Reconquista.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-1000 delay-600">
            <Button asChild size="lg" variant="secondary" className="transition-all duration-300 hover:scale-105">
              <Link href="/servicios">Ver Precios</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent transition-all duration-300 hover:scale-105"
            >
              <Link href="/galeria">Ver Galería</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-in slide-in-from-left duration-1000">
              <h3 className="font-bold text-lg mb-4 text-primary">MiniClub Almafuerte</h3>
              <p className="text-foreground mb-4">
                Tu espacio para el deporte y eventos familiares en Reconquista, Santa Fe.
              </p>
              <div className="flex items-center space-x-2 text-foreground">
                <MapPin className="h-4 w-4" />
                <span>Almafuerte 760, Reconquista, Santa Fe, Argentina</span>
              </div>
            </div>

            <div className="animate-in slide-in-from-bottom duration-1000 delay-200">
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <Link
                  href="/sobre-nosotros"
                  className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Sobre Nosotros
                </Link>
                <Link
                  href="/servicios"
                  className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Servicios
                </Link>
                <Link
                  href="/galeria"
                  className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Galería
                </Link>
                <Link
                  href="/contacto"
                  className="block text-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                >
                  Contacto
                </Link>
              </div>
            </div>

            <div className="animate-in slide-in-from-right duration-1000 delay-400">
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-foreground">
                  <Phone className="h-4 w-4" />
                  <a
                    href="https://wa.me/5493482647277"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    +54 9 3482 647277
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-foreground">
                  <Instagram className="h-4 w-4" />
                  <a
                    href="https://www.instagram.com/miniclubalmafuerte?igsh=OGp6dTd1ajI0MTA="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    @miniclubalmafuerte
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-foreground animate-in fade-in duration-1000 delay-800">
            <p>© MiniClub Almafuerte - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
