import React, { useRef, useEffect, useState } from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Claudia F.',
    platform: 'TripAdvisor',
    text: 'Lo mejor de la comida latina en un solo lugar. Las cachapas son espectaculares, la atención excelente y el ambiente muy acogedor. Volvería una y otra vez.',
    rating: 5,
    time: 'Hace 2 meses',
    color: 'text-[#34E0A1]',
  },
  {
    name: 'Ivan Acevedo',
    platform: 'Google',
    text: 'Menú espectacular que te hace sentir como en casa. Excelente relación calidad / precio. Sin duda el mejor restaurante latino de Valencia.',
    rating: 5,
    time: 'Hace 2 meses',
    color: 'text-habanero',
  },
  {
    name: 'Marisol V.',
    platform: 'TripAdvisor',
    text: 'Un ambiente colorido, alegre y con comida deliciosa. El sancocho es increíble y los tequeños los mejores que he probado fuera de Venezuela.',
    rating: 5,
    time: 'Hace 3 meses',
    color: 'text-[#34E0A1]',
  },
  {
    name: 'Jesus Ron',
    platform: 'Google',
    text: 'Solía ser mi lugar favorito para comer. La comida tiene sabores auténticos que me transportan a Venezuela. Las arepas son increíbles.',
    rating: 4,
    time: 'Hace 6 meses',
    color: 'text-habanero',
  },
  {
    name: 'Laura P.',
    platform: 'TripAdvisor',
    text: 'Fuimos a cenar y pedimos la tabla degustación para dos. Todo estaba delicioso. El patacón de plátano macho con carne fue la estrella de la noche.',
    rating: 5,
    time: 'Hace 1 mes',
    color: 'text-[#34E0A1]',
  },
  {
    name: 'Carlos Mendoza',
    platform: 'Google',
    text: 'Nos recomendaron las empanadillas de queso y pollo + tequeños como entrantes. Todo riquísimo. Volveremos seguro. ¡Las cachapas imprescindibles!',
    rating: 5,
    time: 'Hace 1 mes',
    color: 'text-habanero',
  },
];

function ReviewCard({ review, index, visible }) {
  return (
    <div
      className={`group bg-bone/70 backdrop-blur-md border border-cacao/5 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-500 ${
        visible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <Quote className="w-7 h-7 text-habanero/20" />
        <span className={`font-body text-xs font-medium ${review.color}`}>{review.platform}</span>
      </div>

      <p className="font-body text-cacao/80 text-sm leading-relaxed mb-5">
        "{review.text}"
      </p>

      <div className="flex items-center justify-between">
        <div>
          <span className="block font-heading font-semibold text-cacao text-sm">{review.name}</span>
          <span className="block font-body text-cacao/40 text-xs mt-0.5">{review.time}</span>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 fill-habanero text-habanero`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" ref={ref} className="bg-bone py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-habanero/10 rounded-full px-4 py-2 mb-4">
            <Star className="w-4 h-4 text-habanero fill-habanero" />
            <span className="text-habanero font-heading font-semibold text-sm uppercase tracking-wider">Opiniones Reales</span>
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-cacao tracking-tight">
            LO QUE<br />
            <span className="text-habanero">DICEN</span>
          </h2>

          {/* Dual rating */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
            <div className="text-center">
              <span className="block font-display text-5xl font-black text-cacao">4.5</span>
              <div className="flex gap-1 justify-center my-1">
                {[1,2,3,4].map(i => <Star key={i} className="w-5 h-5 fill-habanero text-habanero" />)}
                <Star className="w-5 h-5 fill-habanero/50 text-habanero" />
              </div>
              <span className="font-body text-cacao/40 text-xs">759 opiniones · Google</span>
            </div>
            <div className="w-px h-16 bg-cacao/10 hidden sm:block" />
            <div className="text-center">
              <span className="block font-display text-5xl font-black text-cacao">4.8</span>
              <div className="flex gap-1 justify-center my-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-[#34E0A1] text-[#34E0A1]" />)}
              </div>
              <span className="font-body text-cacao/40 text-xs">12 opiniones · TripAdvisor</span>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} visible={visible} />
          ))}
        </div>

        {/* TripAdvisor link */}
        <div className="text-center mt-12">
          <a
            href="https://www.tripadvisor.es/Restaurant_Review-g187529-d24969153-Reviews-Aji_Cocina_Latina-Valencia_Province_of_Valencia_Valencian_Community.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#34E0A1]/10 border border-[#34E0A1]/30 text-cacao font-heading font-semibold text-sm px-7 py-3.5 rounded-full hover:bg-[#34E0A1]/20 active:scale-95 transition-all duration-300"
          >
            <span className="text-[#34E0A1] font-bold">●</span>
            Ver todas las opiniones en TripAdvisor
            <ExternalLink className="w-4 h-4 text-cacao/40" />
          </a>
        </div>
      </div>
    </section>
  );
}