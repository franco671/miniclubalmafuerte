"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Instagram, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Crear mensaje para WhatsApp
    const mensaje = `Hola! Me contacto desde la página web de MiniClub Almafuerte.

Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}

Mensaje: ${formData.mensaje}`

    const whatsappUrl = `https://wa.me/5493482647277?text=${encodeURIComponent(mensaje)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Estamos Aca para vos
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary text-balance">Contactanos</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ¿Tenes preguntas sobre nuestros servicios? ¿Queres reservar una cancha o conocer más sobre nuestras
              membresías? Estamos aca para ayudarte.
            </p>
          </div>
        </div>
      </section>

      {/* Información de Contacto */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">Información de Contacto</h2>

              <div className="space-y-6">
                {/* WhatsApp */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                        <p className="text-muted-foreground mb-3">
                          La forma más rápida de contactarnos. Respuesta inmediata.
                        </p>
                        <Button asChild className="bg-green-600 hover:bg-green-700">
                          <a
                            href="https://wa.me/5493482647277"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                          >
                            <MessageCircle className="h-4 w-4" />
                            <span>+54 9 3482 647277</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Instagram */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <Instagram className="h-6 w-6 text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">Instagram</h3>
                        <p className="text-muted-foreground mb-3">
                          Síguenos para ver las últimas novedades y fotos del club.
                        </p>
                        <Button
                          asChild
                          variant="outline"
                          className="border-pink-600 text-pink-600 hover:bg-pink-50 bg-transparent"
                        >
                          <a
                            href="https://www.instagram.com/miniclubalmafuerte?igsh=OGp6dTd1ajI0MTA="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                          >
                            <Instagram className="h-4 w-4" />
                            <span>@miniclubalmafuerte</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Ubicación */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
                        <p className="text-muted-foreground mb-3">Reconquista, Santa Fe, Argentina</p>
                        <Button asChild variant="outline">
                          <a
                            href="https://www.google.com/maps/place/Miniclub+Almafuerte,+S3560+Reconquista,+Santa+Fe/@-29.1377347,-59.644663,16z/data=!4m6!3m5!1s0x944ebb69f7237be1:0x86e8d3cb7e7c1cf4!8m2!3d-29.1377347!4d-59.644663!16s%2Fg%2F11h3vg90_s"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2"
                          >
                            <MapPin className="h-4 w-4" />
                            <span>Ver en Google Maps</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Horarios */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-3">Horarios de Atención</h3>
                        <div className="space-y-2 text-muted-foreground">
                          <div className="flex justify-between">
                            <span>Lunes a Viernes:</span>
                            <span className="font-medium">8:00 - 22:00</span>
                          </div>
                          <div className="mt-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
                            <p className="text-sm text-foreground font-medium">
                              <strong className="text-primary">Visitas:</strong> Podes acercarte a conocer nuestras
                              instalaciones cuando desees durante nuestros horarios de atención.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Envíanos un Mensaje</CardTitle>
                  <p className="text-muted-foreground">
                    Completa el formulario y te contactaremos por WhatsApp lo antes posible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre Completo *</Label>
                        <Input
                          id="nombre"
                          name="nombre"
                          type="text"
                          required
                          value={formData.nombre}
                          onChange={handleInputChange}
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          required
                          value={formData.telefono}
                          onChange={handleInputChange}
                          placeholder="+54 9 ..."
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        value={formData.mensaje}
                        onChange={handleInputChange}
                        placeholder="Cuéntanos en qué podemos ayudarte..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Enviar por WhatsApp
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      Al enviar este formulario, serás redirigido a WhatsApp con tu mensaje pre-cargado.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-primary">Nuestra Ubicación</h2>
            <p className="text-xl text-muted-foreground">
              Estamos ubicados en el corazón de Reconquista, Santa Fe, fácilmente accesible desde cualquier punto de la
              ciudad.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.8234567890123!2d-59.644663!3d-29.1377347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x944ebb69f7237be1:0x86e8d3cb7e7c1cf4!2sMiniclub+Almafuerte!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación MiniClub Almafuerte"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-primary">Preguntas Frecuentes</h2>
              <p className="text-xl text-muted-foreground">
                Respuestas a las consultas más comunes sobre nuestros servicios
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">¿Necesito reservar para usar el gimnasio?</h3>
                  <p className="text-muted-foreground">
                    No, con tu membresía mensual puedes acceder al gimnasio en cualquier momento durante nuestros
                    horarios de atención.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">¿Cómo reservo una cancha?</h3>
                  <p className="text-muted-foreground">
                    Puedes reservar por WhatsApp o visitándonos personalmente. Te recomendamos reservar con
                    anticipación, especialmente para horarios nocturnos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">¿Ofrecen descuentos familiares?</h3>
                  <p className="text-muted-foreground">
                    Sí, tenemos promociones especiales para familias y grupos. Contactanos por WhatsApp para conocer las
                    ofertas vigentes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">¿Puedo organizar eventos privados?</h3>
                  <p className="text-muted-foreground">
                    Por supuesto! Tenemos espacios ideales para cumpleaños y celebraciones familiares. Consultanos para
                    más detalles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            No esperes más para formar parte de la familia MiniClub Almafuerte. Contactanos hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="https://wa.me/5493482647277" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Contactar por WhatsApp
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              <a
                href="https://www.instagram.com/miniclubalmafuerte?igsh=OGp6dTd1ajI0MTA="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Seguinos en Instagram
              </a>
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
                <a href="/" className="block text-foreground hover:text-primary transition-colors">
                  Inicio
                </a>
                <a href="/sobre-nosotros" className="block text-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
                <a href="/servicios" className="block text-foreground hover:text-primary transition-colors">
                  Servicios
                </a>
                <a href="/galeria" className="block text-foreground hover:text-primary transition-colors">
                  Galería
                </a>
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
