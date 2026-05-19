"use client"

import { MessageCircle } from "lucide-react"

interface WhatsAppFloatingButtonProps {
  phoneNumber?: string
  message?: string
}

export function WhatsAppFloatingButton({
  phoneNumber = "5215529131400",
  message = "Hola, me interesa conocer más sobre el Seguro en Exceso.",
}: WhatsAppFloatingButtonProps) {
  const href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir conversación por WhatsApp"
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      style={{ backgroundColor: "#25d366" }}
    >
      <MessageCircle className="w-7 h-7 text-white" strokeWidth={2.2} />
    </a>
  )
}
