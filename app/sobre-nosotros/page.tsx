import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Calendar, User, MapPin, Trophy, Heart, Users } from "lucide-react"

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Desde 2019
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary text-balance">Nuestra Historia</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Conoce la historia de MiniClub Almafuerte y cómo nos convertimos en el lugar de referencia para el deporte
              y los eventos familiares en Reconquista, Santa Fe.
            </p>
          </div>
        </div>
      </section>

      {/* Historia Principal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Fundado con Pasión</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground">
                  En el año <strong className="text-primary">2019</strong>, José Luis Magnago tuvo la visión de crear un
                  espacio único en Reconquista, Santa Fe, donde las familias y amigos pudieran reunirse para disfrutar
                  del deporte y compartir momentos especiales.
                </p>
                <p className="text-muted-foreground">
                  Con dedicación y esfuerzo, nació <strong className="text-primary">MiniClub Almafuerte</strong>, un
                  lugar que combina la pasión por el deporte con el ambiente familiar que caracteriza a nuestra
                  comunidad.
                </p>
                <p className="text-muted-foreground">
                  Desde nuestros inicios, nos hemos comprometido a brindar instalaciones de primera calidad y un
                  servicio excepcional, convirtiéndonos en el punto de encuentro favorito para deportistas y familias de
                  toda la región.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/club-exterior.jpg"
                alt="Fachada del MiniClub Almafuerte"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">Desde 2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundador */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">Nuestro Fundador</h2>
              <p className="text-xl text-muted-foreground">
                Conoce a la persona detrás de la visión de MiniClub Almafuerte
              </p>
            </div>

            <Card className="p-8">
              <CardContent className="pt-0">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">José Luis Magnago</h3>
                    <p className="text-muted-foreground">Fundador y Director</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                      José Luis Magnago es un apasionado del deporte y la comunidad. Con años de experiencia en el
                      ámbito deportivo y una profunda conexión con Reconquista, decidió crear un espacio donde las
                      personas pudieran no solo ejercitarse, sino también crear vínculos duraderos.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Su visión de combinar instalaciones deportivas de calidad con un ambiente familiar y acogedor ha
                      sido la clave del éxito de MiniClub Almafuerte, convirtiéndolo en mucho más que un simple gimnasio
                      o club deportivo.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Nuestros Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían cada día nuestro trabajo y nos conectan con nuestra comunidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Pasión por el Deporte</h3>
                <p className="text-muted-foreground">
                  Creemos en el poder transformador del deporte y su capacidad para unir a las personas y mejorar la
                  calidad de vida.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ambiente Familiar</h3>
                <p className="text-muted-foreground">
                  Fomentamos un ambiente cálido y acogedor donde todas las edades pueden disfrutar y sentirse como en
                  casa.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excelencia</h3>
                <p className="text-muted-foreground">
                  Nos comprometemos a ofrecer instalaciones y servicios de la más alta calidad para superar las
                  expectativas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="h-12 w-12 text-secondary mr-4" />
              <h2 className="text-3xl font-bold">Ubicados en el Corazón de Reconquista</h2>
            </div>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Estratégicamente ubicados en Reconquista, Santa Fe, Argentina, somos fácilmente accesibles para toda la
              comunidad. Nuestras instalaciones están diseñadas para ser el punto de encuentro ideal para deportistas y
              familias de toda la región.
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-secondary">¿Por qué Reconquista?</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• Comunidad deportiva activa y comprometida</li>
                  <li>• Ubicación central y accesible</li>
                  <li>• Tradición familiar y valores comunitarios</li>
                  <li>• Crecimiento constante en infraestructura deportiva</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-secondary">Nuestro Compromiso</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• Contribuir al desarrollo deportivo local</li>
                  <li>• Crear espacios de encuentro familiar</li>
                  <li>• Promover hábitos saludables</li>
                  <li>• Fortalecer los lazos comunitarios</li>
                </ul>
              </div>
            </div>
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
                <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </a>
                <a href="/servicios" className="block text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </a>
                <a href="/galeria" className="block text-muted-foreground hover:text-primary transition-colors">
                  Galería
                </a>
                <a href="/contacto" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <span>📱</span>
                  <a href="https://wa.me/5493482647277" className="hover:text-primary transition-colors">
                    +54 9 3482 647277
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <span>📷</span>
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
            <p>&copy; 2025 MiniClub Almafuerte. Fundado en 2019 por José Luis Magnago.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
