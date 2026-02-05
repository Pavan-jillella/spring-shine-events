"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Creating Unforgettable Moments",
      subtitle: "Your Premier Event Management Partner",
      gradient: "from-pink-200 via-rose-200 to-pink-300",
    },
    {
      title: "Where Every Event Shines",
      subtitle: "Transform Your Dreams Into Reality",
      gradient: "from-rose-200 via-pink-300 to-orange-200",
    },
    {
      title: "Excellence in Event Planning",
      subtitle: "Making Every Celebration Extraordinary",
      gradient: "from-pink-300 via-rose-200 to-pink-200",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} transition-all duration-1000`}
      >
        <div className="absolute inset-0 bg-white/40" />
        {/* Animated Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight drop-shadow-sm">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto drop-shadow-sm">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Plan Your Event
            </Link>
            <Link
              href="#gallery"
              className="bg-white border-2 border-pink-400 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>

          {/* Event Types */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Weddings", href: "/events/weddings" },
              { name: "Corporate Events", href: "/events/corporate" },
              { name: "Birthday Parties", href: "/events/birthday" },
              { name: "Social Gatherings", href: "/events/social" }
            ].map((type) => (
              <Link
                key={type.name}
                href={type.href}
                className="bg-white/60 backdrop-blur-md px-6 py-4 rounded-xl border border-pink-200 hover:bg-white/80 hover:border-pink-300 transition-all shadow-sm"
              >
                <p className="text-gray-800 font-medium">{type.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-pink-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-pink-500 w-8" : "bg-pink-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
