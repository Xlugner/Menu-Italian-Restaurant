
---

# 🍝 Menú Digital - Restaurante Italiano

> Proyecto web responsive para mostrar el menú de un restaurante italiano, desarrollado con Astro, TailwindCSS y Alpine.js.

## ✨ Características

- Diseño mobile-first y totalmente responsive.
- Filtrado de productos por categoría.
- Modal con detalles de cada producto.
- Imágenes optimizadas y visualmente atractivas.
- Código limpio y fácil de personalizar.

## 🚀 Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   ├── hero-pattern.jpg
│   └── vite.svg
├── src/
│   ├── assets/         # Imágenes de productos
│   ├── components/     # Componentes Astro (Header, Footer, Menu, etc.)
│   ├── data/           # Datos de productos
│   ├── layouts/        # Layout principal
│   ├── pages/          # Páginas del sitio
│   └── styles/         # Estilos globales
├── package.json
└── tailwind.config.mjs
```

## 🧑‍💻 Instalación y uso

1. Instala las dependencias:
   ```sh
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
3. Abre [http://localhost:4321](http://localhost:4321) en tu navegador.

## 🛠️ Personalización

- Edita los productos en products.ts.
- Cambia imágenes en assets.
- Modifica colores y estilos en tailwind.config.mjs y global.css.
- Ajusta el layout en Layout.astro.

## 🖼️ Tecnologías

- [Astro](https://astro.build/)
- [TailwindCSS](https://tailwindcss.com/)
- [Alpine.js](https://alpinejs.dev/) (para interactividad del modal)

## 📦 Comandos útiles

| Comando           | Acción                                      |
|-------------------|---------------------------------------------|
| `npm install`     | Instala dependencias                        |
| `npm run dev`     | Servidor de desarrollo                      |
| `npm run build`   | Compila el sitio para producción            |
| `npm run preview` | Previsualiza el sitio compilado             |

## 📄 Licencia

MIT

---

Desarrollado con ❤️ para restaurantes modernos.

---

