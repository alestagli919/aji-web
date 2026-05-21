import React, { useState, useRef, useEffect } from 'react';
import { Flame } from 'lucide-react';
import MenuCard from './MenuCard';

const CATEGORIES = ['Todos', 'Entrantes', 'Cachapas', 'Platos Fuertes', 'Panadería', 'Postres', 'Bebidas'];

const DISHES = [
  // ENTRANTES
  {
    name: 'Tequeños',
    desc: 'Ración de 5 unidades de palitos crujientes rellenos de queso fundido venezolano. Incluye 1 salsa a elección.',
    price: '8.50',
    category: 'Entrantes',
    popular: true,
  },
  {
    name: 'Chicharrón',
    desc: 'Panceta de cerdo frita crujiente con patacones.',
    price: '8.90',
    category: 'Entrantes',
    popular: false,
  },
  {
    name: 'Papas Bravas Campesinas',
    desc: 'Patatas rústicas con salsa brava casera.',
    price: '6.70',
    category: 'Entrantes',
    popular: false,
  },
  {
    name: 'Mini Empanadas',
    desc: '5 mini empanadas de queso y pollo con salsa de la casa.',
    price: '8.50',
    category: 'Entrantes',
    popular: true,
  },
  {
    name: 'Plátanos Maduros',
    desc: '6 unidades de plátano macho maduro en tajadas con queso latino.',
    price: '6.90',
    category: 'Entrantes',
    popular: false,
  },
  {
    name: 'Yuca Frita',
    desc: 'Ración de yuca frita con salsa brava o cilantro y nata.',
    price: '9.00',
    category: 'Entrantes',
    popular: false,
  },
  // CACHAPAS
  {
    name: 'Cachapa Grande Tradicional',
    desc: 'Tortilla de maíz dulce (20cm) con queso fresco de mano.',
    price: '11.90',
    category: 'Cachapas',
    popular: true,
  },
  {
    name: 'Cachapa Grande Doble Queso',
    desc: 'Tortilla de maíz (20cm) con doble queso de mano venezolano.',
    price: '13.50',
    category: 'Cachapas',
    popular: false,
  },
  {
    name: 'Cachapa Grande Con Carne',
    desc: 'Tortilla de maíz (20cm) con queso de mano y carne: ternera, pollo, cerdo, chicharrón o chorizo.',
    price: '13.90',
    category: 'Cachapas',
    popular: false,
  },
  {
    name: 'Cachapa Mediana Tradicional',
    desc: 'Tortilla de maíz dulce (15cm) con queso fresco de mano.',
    price: '9.90',
    category: 'Cachapas',
    popular: false,
  },
  // PLATOS FUERTES
  {
    name: 'Sancocho',
    desc: 'Sopa del día con 2 guarniciones a elegir: arepa, arroz, patacones o aguacate. Consultar disponibilidad.',
    price: '15.90',
    category: 'Platos Fuertes',
    popular: true,
  },
  {
    name: 'Tabla Degustación (2 personas)',
    desc: 'Tequeños, patacones, empanada argentina, pastel de yuca, mini cachapas, mini arepas fritas, frijoles, carne a elegir y 2 salsas variadas.',
    price: '28.90',
    category: 'Platos Fuertes',
    popular: true,
  },
  // PANADERÍA
  {
    name: 'Empanadas Colombianas',
    desc: '2 empanadas rellenas de ternera y patata con salsa ají.',
    price: '5.90',
    category: 'Panadería',
    popular: false,
  },
  {
    name: 'Empanadas Argentinas Fritas',
    desc: '2 empanadas de harina rellenas de ternera.',
    price: '5.90',
    category: 'Panadería',
    popular: false,
  },
  {
    name: 'Arepa de Yuca',
    desc: 'Arepa rellena de queso latino.',
    price: '4.50',
    category: 'Panadería',
    popular: false,
  },
  {
    name: 'Tamales de Chicharrón',
    desc: 'Tamal de harina de maíz con chicharrón y cerdo desmechado, topping de pico de gallo.',
    price: '5.20',
    category: 'Panadería',
    popular: false,
  },
  {
    name: 'Humitas de Maíz Dulce',
    desc: 'Humitas de maíz dulce con queso latino.',
    price: '5.20',
    category: 'Panadería',
    popular: false,
  },
  {
    name: 'Tamales Mexicanos',
    desc: 'Tamales de pollo con mole, pico de gallo y salsa de cilantro.',
    price: '5.20',
    category: 'Panadería',
    popular: false,
  },
  // POSTRES
  {
    name: 'Tres Leches Tradicional',
    desc: 'Bizcocho empapado en tres tipos de leche. El postre emblema de Latinoamérica.',
    price: '5.00',
    category: 'Postres',
    popular: true,
  },
  {
    name: 'Tres Leches con Dulce de Leche',
    desc: 'Bizcocho tres leches con dulce de leche artesanal.',
    price: '5.50',
    category: 'Postres',
    popular: false,
  },
  {
    name: 'Tequeño de Nutella y Helado',
    desc: 'Tequeño dulce relleno de Nutella servido con bola de helado.',
    price: '5.00',
    category: 'Postres',
    popular: false,
  },
  {
    name: 'Marquesa de Maracuyá',
    desc: 'Marquesa de maracuyá, chocolate o dulce de leche.',
    price: '4.00',
    category: 'Postres',
    popular: false,
  },
  {
    name: 'Golfeado con Queso',
    desc: 'Pan dulce venezolano con queso latino o queso de mano.',
    price: '4.50',
    category: 'Postres',
    popular: false,
  },
  // BEBIDAS
  {
    name: 'Zumos Naturales',
    desc: 'Mango, lulo, mora, maracuyá, guanábana, mix tropical. Combina dos sabores.',
    price: '4.00',
    category: 'Bebidas',
    popular: true,
  },
  {
    name: 'Postobón (1L)',
    desc: 'Uva, manzana o colombiana. La bebida gaseosa colombiana por excelencia.',
    price: '11.00',
    category: 'Bebidas',
    popular: false,
  },
  {
    name: 'Malta Polar / Maltin Polar',
    desc: 'Refresco de malta venezolano sin alcohol.',
    price: '3.50',
    category: 'Bebidas',
    popular: false,
  },
  {
    name: 'Jarritos de México',
    desc: 'Guayaba, pomelo, lima y mango. Refrescos mexicanos artesanales.',
    price: '3.70',
    category: 'Bebidas',
    popular: false,
  },
  {
    name: 'Cerveza Nacional',
    desc: 'Tercio, caña o doble. Cerveza española fría.',
    price: '2.60 – 3.00',
    category: 'Bebidas',
    popular: false,
  },
  {
    name: 'Cerveza Internacional',
    desc: 'Venezuela: Polar, Zulia. Colombia: Poker, Águila, Club Colombia. México: Modelo, Pacífico.',
    price: '3.90',
    category: 'Bebidas',
    popular: false,
  },
  {
    name: 'Sangría',
    desc: 'Tradicional o de mango. Disponible por copa o litro.',
    price: '4.50 / 14.00',
    category: 'Bebidas',
    popular: false,
  },
  {
    name: 'Cubatas y Mojitos',
    desc: 'Cócteles clásicos preparados al momento.',
    price: '7.00 / 8.00',
    category: 'Bebidas',
    popular: false,
  },
];

export default function MenuSection() {
  const [active, setActive] = useState('Todos');
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = active === 'Todos' ? DISHES : DISHES.filter(d => d.category === active);

  return (
    <section id="menu" ref={ref} className="bg-bone py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-habanero/10 rounded-full px-4 py-2 mb-4">
            <Flame className="w-4 h-4 text-habanero" />
            <span className="text-habanero font-heading font-semibold text-sm uppercase tracking-wider">Nuestro Menú</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-cacao tracking-tight">
            SABORES QUE<br />
            <span className="text-habanero">ENAMORAN</span>
          </h2>
          <p className="font-body text-cacao/60 text-lg mt-4 max-w-xl mx-auto">
            La mayor variedad de cocina latina en un solo lugar. Desde entrantes crujientes hasta cachapas venezolanas y postres irresistibles.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-heading text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 active:scale-95 ${
                active === cat
                  ? 'bg-cacao text-bone shadow-lg'
                  : 'bg-cacao/5 text-cacao/70 hover:bg-cacao/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((dish, i) => (
            <MenuCard
              key={dish.name}
              dish={dish}
              index={i}
              visible={visible}
            />
          ))}
        </div>

        {/* TripAdvisor CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://www.tripadvisor.es/Restaurant_Review-g187529-d24969153-Reviews-Aji_Cocina_Latina-Valencia_Province_of_Valencia_Valencian_Community.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#34E0A1]/10 border border-[#34E0A1]/30 text-cacao font-heading font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#34E0A1]/20 active:scale-95 transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#34E0A1">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
            </svg>
            Ver menú completo en TripAdvisor
          </a>
        </div>
      </div>
    </section>
  );
}