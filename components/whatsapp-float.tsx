import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const phoneNumber = "5493482647277"
  const message =
    "¡Hola! Me interesa conocer más sobre los servicios del MiniClub Almafuerte. ¿Podrían brindarme más información?"

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
