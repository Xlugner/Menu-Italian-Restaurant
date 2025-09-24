// Configuración del restaurante
export const restaurantConfig = {
  // Información básica
  name: "D'Rossi",
  tagline: "Auténtica Cocina Italiana",
  description: "¡Disfruta el auténtico sabor italiano!",
  
  // Contacto y WhatsApp
  phone: "+1 (555) 123-4567",
  whatsappNumber: "5358014616", // Incluye código de país (ej: 54 para Argentina)
  
  // Horarios
  openTime: 8, // 8:00 AM
  closeTime: 18, // 6:00 PM
  
  // Especialidades para mostrar en el header
  specialties: [
    { emoji: "🍕", name: "Pizzas Artesanales" },
    { emoji: "🍝", name: "Pastas Frescas" },
    { emoji: "🍷", name: "Vinos Selectos" }
  ],
  
  // Colores del tema (deben coincidir con tailwind.config.mjs)
  colors: {
    primary: "#157f71",
    secondary: "#db1d00"
  },
  
  // Mensajes personalizables
  messages: {
    cartEmpty: "Tu carrito está vacío",
    cartEmptySubtext: "¡Agrega algunos productos deliciosos!",
    addedToCart: "agregado al carrito",
    whatsappGreeting: "¡Hola! Me gustaría hacer el siguiente pedido:",
    whatsappClosing: "¡Gracias!"
  }
};

export default restaurantConfig;
