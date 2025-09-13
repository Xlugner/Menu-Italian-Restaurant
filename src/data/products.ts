import type { ImageMetadata } from "astro";

//Importamos las imagenes
import applePie from '@assets/apple-pie-slice.webp';
import bottledWater from '@assets/bottled-water.webp';
import cheeseCake from '@assets/cheesecake-slice.webp';
import chocolateBrownie from '@assets/chocolate-brownie.webp';
import chocolateCake from '@assets/chocolate-cake-slice.webp';
import classicBeefBurger from '@assets/classic-beef-burger.webp';
import crispyChicken from '@assets/crispy-chicken-wings.webp';
import crispyFrenchFries from '@assets/crispy-french-fries.webp';
import deliPizza from '@assets/delicious-pizza.webp';
import glassOrange from '@assets/glass-of-orange-juice.webp';
import iceCream from '@assets/ice-cream-sundae.webp';
import latteCoffe from '@assets/latte-coffee.webp';
import icedTea from '@assets/iced-tea.webp';
import refKola from '@assets/refreshing-cola.webp';
import mixedSalad from '@assets/vibrant-mixed-salad.webp';

export interface Product {
  name: string;
  price: number;
  info: string;
  image: ImageMetadata;
}

export interface ProductCategory {
  category: string;
  products: Product[];
}

export const productsByCategory: ProductCategory[] = [
  {
    category: "Mas Popular",
    products: [
      {
        name: "Hamburguesa Clásica",
        price: 6.99,
        info: "Carne de res, lechuga, tomate, queso y salsa especial.",
        image: classicBeefBurger
      },
      {
        name: "Pastel de Chocolate",
        price: 12.99,
        info: "Pastel cremoso de chocolate con agregados varios",
        image: chocolateBrownie
      },
      {
        name: "Malteada con Helado",
        price: 5.50,
        info: "Copa de Helado de vainilla con malta ",
        image: iceCream
      },
      {
        name: "Pizza de vegetales",
        price: 7.99,
        info: "Pizza artesanal con salsa de tomate, queso mozzarella y pepperoni.",
        image: deliPizza
      }
    ]
  },
  {
    category: "Pizza",
    products: [
      {
        name: "Pizza de vegetales",
        price: 7.99,
        info: "Pizza artesanal con salsa de tomate, queso mozzarella y pepperoni.",
        image: deliPizza
      },
      {
        name: "Pizza con cebolla",
        price: 7.99,
        info: "Pizza artesanal con salsa de tomate, queso mozzarella y cebolla blanca.",
        image: deliPizza
      }
    ]
  },
  {
    category: "Especialidades",
    products: [
      {
        name: "Pastel de Chocolate",
        price: 12.99,
        info: "Pastel cremoso de chocolate con agregados varios",
        image: chocolateBrownie
      },
      {
        name: "Cordero al Horno",
        price: 15.50,
        info: "Pierna de cordero asada con hierbas mediterráneas.",
        image: crispyChicken
      }
    ]
  },
  {
    category: "Hamburguesas",
    products: [
      {
        name: "Hamburguesa Clásica",
        price: 6.99,
        info: "Carne de res, lechuga, tomate, queso y salsa especial.",
        image: classicBeefBurger
      },
      {
        name: "Hamburguesa BBQ",
        price: 7.99,
        info: "Carne de res, cebolla caramelizada, queso cheddar y salsa BBQ.",
        image: classicBeefBurger
      }
    ]
  },
  {
    category: "Postres",
    products: [
      {
        name: "Tiramisú",
        price: 4.50,
        info: "Postre italiano de café, queso mascarpone y cacao.",
        image: applePie
      },
      {
        name: "Cheesecake de Fresa y chocolate",
        price: 4.99,
        info: "Tarta de chocolate cremosa con salsa de fresas naturales.",
        image: chocolateCake
      },
      {
        name: "Cheesecake de Fresa",
        price: 4.99,
        info: "Tarta de queso cremosa con salsa de fresas naturales.",
        image: cheeseCake
      }
    ]
  },
  {
    category: "Tapas",
    products: [
      {
        name: "Patatas Bravas",
        price: 3.99,
        info: "Papas fritas con salsa picante española.",
        image: crispyFrenchFries
      },
      {
        name: "Ensalada mixta ",
        price: 4.20,
        info: "Ensalada mixta de pepino,lechuga ,tomate y aji rojo.",
        image: mixedSalad
      }
    ]
  },
  {
    category: "Refrigerio",
    products: [
      {
        name: "Botella de agua",
        price: 2.50,
        info: "Agua mineral 250 ml",
        image: bottledWater
      },
      {
        name: "Pomo de Refresco de Cola",
        price: 2.00,
        info: "Pomo de 250 ml de refresco de cola",
        image: refKola
      }
    ]
  },
  {
    category: "Cocteles",
    products: [
      {
        name: "Te frio con saturado de ron",
        price: 5.00,
        info: "Te verde frio con ron añejo 7 años Havana Club.",
        image: icedTea
      },
      {
        name: "Malteada con Helado",
        price: 5.50,
        info: "Copa de Helado de vainilla con malta ",
        image: iceCream
      }
    ]
  },
  {
    category: "Cafes",
    products: [
      {
        name: "Espresso",
        price: 1.80,
        info: "Café concentrado de sabor intenso.",
        image: latteCoffe
      },
      {
        name: "Cappuccino",
        price: 2.20,
        info: "Café con leche vaporizada y espuma cremosa.",
        image: latteCoffe
      }
    ]
  },
  {
    category: "Cerveza",
    products: [
      {
        name: "Cerveza Rubia",
        price: 2.50,
        info: "Cerveza clara y refrescante.",
        image: glassOrange
      },
      {
        name: "Cerveza Negra",
        price: 2.80,
        info: "Cerveza oscura de sabor intenso.",
        image: bottledWater
      }
    ]
  },
  {
    category: "Licores",
    products: [
      {
        name: "Ron Añejo",
        price: 3.50,
        info: "Ron envejecido en barrica de roble.",
        image: bottledWater
      },
      {
        name: "Whisky Escocés",
        price: 4.00,
        info: "Whisky de malta escocés, suave y aromático.",
        image: bottledWater
      }
    ]
  }
];
