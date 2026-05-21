import React from 'react';
import { Badge } from '@/components/ui/badge';

export default function MenuCard({ dish, index, visible }) {
  return (
    <div
      className={`group relative bg-white rounded-2xl overflow-hidden border border-cacao/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ${
        visible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={dish.img}
          alt={`${dish.name} — plato latinoamericano artesanal`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cacao/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {dish.popular && (
          <Badge className="absolute top-3 left-3 bg-habanero text-cacao font-heading font-bold text-xs border-0">
            Popular
          </Badge>
        )}

        {/* Price float */}
        <div className="absolute bottom-3 right-3 bg-bone/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-lg">
          <span className="font-heading font-bold text-cacao text-sm">€{dish.price}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-heading font-bold text-cacao text-lg leading-tight">{dish.name}</h3>
        <p className="font-body text-cacao/50 text-sm mt-2 leading-relaxed line-clamp-2">{dish.desc}</p>
      </div>
    </div>
  );
}