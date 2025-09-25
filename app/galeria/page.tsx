"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, MapPin, Phone, Instagram } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gimnasio-completo.jpg",
    alt: "Gimnasio completo - Vista panorámica",
    category: "gimnasio",
    title: "Gimnasio Completo",
    description: "Vista panorámica de nuestro gimnasio completamente equipado con máquinas modernas",
  },
  {
    src: "/images/gimnasio-1.jpg",
    alt: "Gimnasio - Vista general con equipos amarillos",
    category: "gimnasio",
    title: "Gimnasio Principal",
    description: "Vista general de nuestro gimnasio con equipos modernos de musculación",
  },
  {
    src: "/images/gimnasio-2.jpg",
    alt: "Gimnasio - Equipos de musculación",
    category: "gimnasio",
    title: "Área de Musculación",
    description: "Equipos especializados para entrenamiento de fuerza y musculación",
  },
  {
    src: "/images/gimnasio-3.jpg",
    alt: "Gimnasio - Máquinas de cardio",
    category: "gimnasio",
    title: "Zona de Cardio",
    description: "Cintas de correr y equipos de cardio con vista a las canchas",
  },
  {
    src: "/images/gimnasio-vista.jpg",
    alt: "Vista desde el gimnasio hacia las canchas",
    category: "gimnasio",
    title: "Vista Panorámica",
    description: "Entrena con vista directa a nuestras canchas de fútbol",
  },
  {
    src: "/images/cancha-exterior.jpg",
    alt: "Cancha de fútbol exterior",
    category: "canchas",
    title: "Cancha Principal",
    description: "Cancha de césped sintético con iluminación LED",
  },
  {
    src: "/images/club-exterior.jpg",
    alt: "Fachada del MiniClub Almafuerte",
    category: "instalaciones",
    title: "Fachada del Club",
    description: "Vista exterior de nuestras instalaciones en Reconquista",
  },
  {
    src: "/images/eventos.jpg",
    alt: "Área de eventos con decoración",
    category: "eventos",
    title: "Salón de Eventos",
    description: "Espacio perfecto para celebraciones familiares y cumpleaños",
  },
  {
    src: "/images/futbolin.jpg",
    alt: "Mesa de futbolín",
    category: "entretenimiento",
    title: "Mesa de Futbolín",
    description: "Entretenimiento adicional para toda la familia",
  },
]

const categories = [
  { id: "todos", label: "Todos", count: galleryImages.length },
  { id: "gimnasio", label: "Gimnasio", count: galleryImages.filter((img) => img.category === "gimnasio").length },
  { id: "canchas", label: "Canchas", count: galleryImages.filter((img) => img.category === "canchas").length },
  { id: "eventos", label: "Eventos", count: galleryImages.filter((img) => img.category === "eventos").length },
  {
    id: "instalaciones",
    label: "Instalaciones",
    count: galleryImages.filter((img) => img.category === "instalaciones").length,
  },
  {
    id: "entretenimiento",
    label: "Entretenimiento",
    count: galleryImages.filter((img) => img.category === "entretenimiento").length,
  },
]

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "todos" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Nuestras Instalaciones
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary text-balance">Galería de Fotos</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Descubre nuestras modernas instalaciones, equipos de última generación y espacios diseñados para tu
              comodidad y entretenimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="mb-2"
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="capitalize">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                  <p className="text-muted-foreground text-sm">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No hay imágenes en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="relative">
              <Image
                src={filteredImages[selectedImage].src || "/placeholder.svg"}
                alt={filteredImages[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {filteredImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                    onClick={nextImage}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </>
              )}
            </div>

            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-white/80">{filteredImages[selectedImage].description}</p>
              <p className="text-white/60 text-sm mt-2">
                {selectedImage + 1} de {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Te gustaron nuestras instalaciones?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Ven a conocer personalmente nuestro club y descubre todo lo que tenemos para ofrecerte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/servicios">Ver Servicios y Precios</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <Link href="/contacto">Contactanos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Información Adicional */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">Visita Nuestras Instalaciones</h2>
              <p className="text-xl text-muted-foreground">
                Te invitamos a conocer personalmente todo lo que MiniClub Almafuerte tiene para ofrecerte
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Horarios de Atención</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Lunes a Viernes:</span>
                      <span className="text-muted-foreground">8:00 - 22:00</span>
                    </div>
                    <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                      <p className="text-sm">
                        <strong>Visitas:</strong> Puedes acercarte a conocer nuestras instalaciones cuando desees
                        durante nuestros horarios de atención.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">¿Qué Incluye la Visita?</h3>
                  <div className="space-y-2">
                    <p className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Recorrido por todas las instalaciones</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Información detallada de servicios</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Asesoramiento personalizado</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span>Consulta de precios y promociones</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
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
                <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
                <Link
                  href="/sobre-nosotros"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nosotros
                </Link>
                <Link href="/servicios" className="block text-muted-foreground hover:text-primary transition-colors">
                  Servicios
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
            <p>&copy; 2025 MiniClub Almafuerte. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
