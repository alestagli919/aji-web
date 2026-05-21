import React from 'react';
import Navbar from '../components/aji/Navbar';
import Hero from '../components/aji/Hero';
import Ticker from '../components/aji/Ticker';
import MenuSection from '../components/aji/MenuSection';
import AboutSection from '../components/aji/AboutSection';
import ReviewsSection from '../components/aji/ReviewsSection';
import Footer from '../components/aji/Footer';
import ReservationWidget from '../components/aji/ReservationWidget';

export default function Home() {
  return (
    <main className="font-body">
      <Navbar />
      <Hero />
      <Ticker />
      <MenuSection />
      <AboutSection />
      <Ticker />
      <ReviewsSection />
      <Footer />
      <ReservationWidget />
    </main>
  );
}