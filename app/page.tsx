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
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            ¡Bienvenidos a <span className="text-secondary">MiniClub Almafuerte!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed">
            Tu espacio para el deporte, el gimnasio y eventos en familia y con amigos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/servicios">Ver Servicios</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/contacto">Contactanos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">¿Por qué elegir MiniClub Almafuerte?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desde 2019 brindamos el mejor servicio deportivo y de entretenimiento en Reconquista, Santa Fe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gimnasio Completo</h3>
                <p className="text-muted-foreground">
                  Equipamiento moderno y completo para todos tus entrenamientos. Ambiente cómodo y profesional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Canchas de Fútbol</h3>
                <p className="text-muted-foreground">
                  Canchas de césped sintético con y sin iluminación. Perfectas para partidos y entrenamientos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Eventos Familiares</h3>
                <p className="text-muted-foreground">
                  Espacio ideal para celebraciones, cumpleaños y eventos especiales con familia y amigos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a nuestra comunidad deportiva y disfruta de las mejores instalaciones en Reconquista.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/servicios">Ver Precios</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
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
            <div>
              <h3 className="font-bold text-lg mb-4 text-primary">MiniClub Almafuerte</h3>
              <p className="text-muted-foreground mb-4">
                Tu espacio para el deporte y eventos familiares en Reconquista, Santa Fe.
              </p>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Reconquista, Santa Fe, Argentina</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <Link
                  href="/sobre-nosotros"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nosotros
                </Link>
                <Link href="/servicios" className="block text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
                <Link href="/galeria" className="block text-muted-foreground hover:text-primary transition-colors">
                  Galería
                </Link>
                <Link href="/contacto" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <a href="https://wa.me/5493482647277" className="hover:text-primary transition-colors">
                    +54 9 3482 647277
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
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

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© 2025 MiniClub Almafuerte. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
