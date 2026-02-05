"use client";

import { useState } from "react";

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Wedding Planning",
      icon: "💍",
      description: "Create your dream wedding with our comprehensive planning services. From venue selection to decoration, catering, and entertainment.",
      features: [
        "Venue Selection & Booking",
        "Theme & Decoration Design",
        "Catering & Menu Planning",
        "Photography & Videography",
        "Entertainment Management",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Corporate Events",
      icon: "🏢",
      description: "Professional corporate event management for conferences, seminars, product launches, and team building activities.",
      features: [
        "Conference Management",
        "Product Launch Events",
        "Team Building Activities",
        "Award Ceremonies",
        "Business Meetings & Seminars",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Birthday Parties",
      icon: "🎂",
      description: "Make birthdays unforgettable with themed decorations, entertainment, and customized party experiences for all ages.",
      features: [
        "Themed Decorations",
        "Entertainment & Activities",
        "Custom Cake & Catering",
        "Photography Services",
        "Party Favors & Gifts",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Social Gatherings",
      icon: "🎉",
      description: "Perfect planning for anniversaries, reunions, festivals, and any special celebration that brings people together.",
      features: [
        "Anniversary Celebrations",
        "Family Reunions",
        "Festival Events",
        "Engagement Parties",
        "Farewell Events",
      ],
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive event management solutions tailored to your needs
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => setActiveService(index)}                className={`cursor-pointer p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                activeService === index
                  ? "bg-gradient-to-br " + service.color + " text-white shadow-2xl"
                  : "bg-gradient-to-br from-pink-50 to-rose-50 hover:from-pink-100 hover:to-rose-100 border border-pink-100"
              }`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p
                className={`text-sm ${
                  activeService === index ? "text-white/90" : "text-gray-600"
                }`}
              >
                {service.description.substring(0, 80)}...
              </p>
            </div>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 md:p-12 border border-pink-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-6xl">{services[activeService].icon}</span>
                <h3 className="text-3xl font-bold text-gray-800">
                  {services[activeService].title}
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {services[activeService].description}
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                What We Offer:
              </h4>
              <ul className="space-y-3">
                {services[activeService].features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-pink-500 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
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
