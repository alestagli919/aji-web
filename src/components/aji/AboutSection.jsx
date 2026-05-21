import React, { useRef, useEffect, useState } from 'react';
import { Wifi, Heart, Utensils, Users, Flag, Clock } from 'lucide-react';

const INTERIOR_IMG = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/4f/d2/3a/caption.jpg?w=800&h=600&s=1';
const FOOD_IMG = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/0d/8a/78/un-ambiente-colorido.jpg?w=800&h=800&s=1';

const FEATURES = [
  { icon: Heart, label: 'LGBTQ+ Friendly', desc: 'Espacio seguro para todos' },
  { icon: Wifi, label: 'WiFi Gratis', desc: 'Conexión de alta velocidad' },
  { icon: Utensils, label: 'Consumo en Local', desc: 'Ambiente acogedor' },
  { icon: Users, label: 'Grupos Grandes', desc: 'Mesas para celebraciones' },
  { icon: Flag, label: 'Cocina Auténtica', desc: 'Recetas tradicionales' },
  { icon: Clock, label: 'Cocina Latina 360°', desc: 'Colombia · Venezuela · México' },
];

const HOURS = [
  { day: 'Lunes', hours: '11:00 – 16:00 / 20:00 – 23:00' },
  { day: 'Martes', hours: 'Cerrado', closed: true },
  { day: 'Miércoles', hours: '11:00 – 16:00 / 20:00 – 23:00' },
  { day: 'Jueves', hours: '11:00 – 16:00 / 20:00 – 23:00' },
  { day: 'Viernes', hours: '11:00 – 16:00 / 20:00 – 23:00' },
  { day: 'Sábado', hours: '11:00 – 23:00' },
  { day: 'Domingo', hours: '11:00 – 23:00' },
];

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="bg-cacao py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Images */}
          <div className={`relative ${visible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] col-span-1">
                <img
                  src={INTERIOR_IMG}
                  alt="Interior del restaurante Ají con mural tropical colorido y mesas llenas de platos latinos"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] col-span-1 mt-8">
                <img
                  src={FOOD_IMG}
                  alt="Mesa de Ají Cocina Latina con platos variados, ambiente colorido y alegre"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-habanero rounded-2xl p-4 shadow-2xl text-center whitespace-nowrap">
              <span className="block font-display text-4xl font-black text-cacao leading-none">4.8 ★</span>
              <span className="block font-body text-xs text-cacao/80 mt-1">TripAdvisor · Top 1.102</span>
            </div>
          </div>

          {/* Content */}
          <div className={`${visible ? 'animate-fade-in-up' : 'opacity-0'} mt-8 lg:mt-0`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 bg-bone/10 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-habanero" />
              <span className="text-bone/60 font-heading text-sm uppercase tracking-wider">Sobre Nosotros</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl font-black text-bone tracking-tight leading-none">
              DONDE EL<br />
              <span className="text-habanero">SABOR</span> SE<br />
              SIENTE
            </h2>

            <p className="font-body text-bone/60 text-base mt-6 leading-relaxed">
              En el corazón de Ciutat Vella, Valencia, Ají Cocina Latina trae la esencia de Colombia, Venezuela y México a tu mesa.
              La mayor variedad de cocina latina en un solo lugar: arepas, cachapas, tequeños, sancocho y mucho más.
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-8">
              {FEATURES.map((f) => (
                <div
                  key={f.label}
                  className="group bg-bone/5 border border-bone/10 rounded-xl p-3 hover:bg-bone/10 transition-all duration-300"
                >
                  <f.icon className="w-5 h-5 text-habanero mb-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="block font-heading font-semibold text-bone text-xs">{f.label}</span>
                  <span className="block font-body text-bone/40 text-xs mt-0.5">{f.desc}</span>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="mt-8 bg-bone/5 border border-bone/10 rounded-2xl p-5">
              <h3 className="font-heading font-bold text-bone text-sm uppercase tracking-wider mb-4">Horario</h3>
              <ul className="space-y-2">
                {HOURS.map(h => (
                  <li key={h.day} className="flex justify-between font-body text-sm">
                    <span className="text-bone/60">{h.day}</span>
                    <span className={h.closed ? 'text-habanero/70' : 'text-bone/80'}>{h.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}