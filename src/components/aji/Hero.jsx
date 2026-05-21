import React from 'react';
import { Star, MapPin, Clock, Phone } from 'lucide-react';

const HERO_IMG = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/c3/41/81/lo-mejor-de-la-comida.jpg?w=1200&h=700&s=1';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-cacao">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Mesa llena de platos latinoamericanos en Ají Cocina Latina, el mejor restaurante latino de Valencia"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cacao via-cacao/85 to-cacao/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-cacao via-transparent to-cacao/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-bone/10 backdrop-blur-md border border-bone/10 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-habanero animate-pulse" />
            <span className="text-bone/80 font-body text-sm">Latina · Venezolana · Ciutat Vella, Valencia</span>
          </div>

          {/* Title */}
          <h1 className="animate-hero-reveal">
            <span className="block font-display text-7xl sm:text-8xl md:text-[108px] font-black text-bone leading-none tracking-tight">
              AJÍ
            </span>
            <span className="block font-heading text-2xl sm:text-3xl font-light text-bone/70 mt-1 tracking-wide">
              Cocina Latina
            </span>
          </h1>

          {/* Ratings */}
          <div className="flex flex-wrap items-center gap-6 mt-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {/* Google */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-habanero text-habanero" />)}
                <Star className="w-4 h-4 fill-habanero/50 text-habanero" />
              </div>
              <span className="text-bone font-heading font-bold">4.5</span>
              <span className="text-bone/40 font-body text-xs">(759) Google</span>
            </div>
            {/* TripAdvisor */}
            <a
              href="https://www.tripadvisor.es/Restaurant_Review-g187529-d24969153-Reviews-Aji_Cocina_Latina-Valencia_Province_of_Valencia_Valencian_Community.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#34E0A1] text-[#34E0A1]" />)}
              </div>
              <span className="text-bone font-heading font-bold">4.8</span>
              <span className="text-bone/40 font-body text-xs">(12) TripAdvisor</span>
            </a>
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap gap-3 mt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 bg-bone/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MapPin className="w-4 h-4 text-habanero" />
              <span className="text-bone/80 font-body text-sm">C/ dels Borges 3, Valencia</span>
            </div>
            <div className="flex items-center gap-2 bg-bone/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4 text-habanero" />
              <span className="text-bone/80 font-body text-sm">Dom–Sáb: 11:00 · Martes: Cerrado</span>
            </div>
            <div className="flex items-center gap-2 bg-habanero/20 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-habanero font-heading font-semibold text-sm">€10–20</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <a
              href="#menu"
              className="bg-habanero text-cacao font-heading font-bold text-base px-8 py-4 rounded-full hover:bg-habanero/90 active:scale-95 transition-all duration-300 animate-pulse-glow"
            >
              Ver Menú Completo
            </a>
            <a
              href="tel:+34673065073"
              className="flex items-center gap-2 border border-bone/30 text-bone font-heading font-medium text-base px-8 py-4 rounded-full hover:bg-bone/10 active:scale-95 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              673 06 50 73
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-habanero/60" />
        <div className="w-2 h-2 rounded-full bg-habanero/60" />
      </div>
    </section>
  );
}