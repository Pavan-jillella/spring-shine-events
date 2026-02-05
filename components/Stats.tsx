"use client";

import { useEffect, useState, useRef } from "react";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 500, suffix: "+", label: "Events Completed", icon: "🎉" },
    { number: 1000, suffix: "+", label: "Happy Clients", icon: "😊" },
    { number: 10, suffix: "+", label: "Years Experience", icon: "⭐" },
    { number: 50, suffix: "+", label: "Team Members", icon: "👥" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.number / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.number) {
            current = stat.number;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, 30);
      });
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-pink-400 via-rose-400 to-orange-300 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-white/90">
            Numbers that speak for our excellence
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center transform hover:scale-110 transition-transform duration-300"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                  {counts[index]}
                  {stat.suffix}
                </div>
                <div className="text-lg text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-white/90 text-lg mb-6">Trusted by leading brands and individuals</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
            {["ISO Certified", "Award Winning", "100% Satisfaction", "24/7 Support"].map(
              (badge) => (
                <div
                  key={badge}
                  className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30"
                >
                  <span className="text-white font-semibold">{badge}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
