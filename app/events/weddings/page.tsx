import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wedding Planning Services - Spring Shine",
  description: "Create your dream wedding with our comprehensive wedding planning services. From venue selection to decoration, catering, and entertainment.",
};

export default function WeddingsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300">
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">💍</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Wedding Planning
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Your special day deserves nothing but perfection. Let us create the wedding of your dreams.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Plan Your Wedding
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Our Wedding Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Venue Selection & Booking",
                description: "Find and secure the perfect venue that matches your vision and budget.",
                icon: "🏛️"
              },
              {
                title: "Theme & Decoration Design",
                description: "Custom themes and stunning decorations to bring your dream to life.",
                icon: "🎨"
              },
              {
                title: "Catering & Menu Planning",
                description: "Delicious cuisine tailored to your preferences and dietary needs.",
                icon: "🍽️"
              },
              {
                title: "Photography & Videography",
                description: "Professional photographers to capture every precious moment.",
                icon: "📸"
              },
              {
                title: "Entertainment Management",
                description: "Live music, DJs, and entertainment to keep guests celebrating.",
                icon: "🎵"
              },
              {
                title: "Wedding Coordination",
                description: "Full day-of coordination ensuring everything runs smoothly.",
                icon: "✨"
              }
            ].map((service) => (
              <div
                key={service.title}
                className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Our Planning Process
          </h2>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Initial Consultation", description: "Meet with our team to discuss your vision, budget, and requirements." },
              { step: "2", title: "Planning & Design", description: "We create a detailed plan with themes, vendors, and timeline." },
              { step: "3", title: "Vendor Coordination", description: "We handle all vendor communications and bookings on your behalf." },
              { step: "4", title: "Regular Updates", description: "Stay informed with regular progress updates and decisions." },
              { step: "5", title: "Final Preparations", description: "Last-minute details and rehearsals to ensure perfection." },
              { step: "6", title: "Wedding Day", description: "Relax and enjoy while we manage every detail of your special day." }
            ].map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Wedding Packages
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Essential",
                price: "Contact for pricing",
                features: [
                  "Venue recommendations",
                  "Basic decoration",
                  "Vendor coordination",
                  "Day-of coordination",
                  "Timeline management"
                ]
              },
              {
                name: "Premium",
                price: "Contact for pricing",
                popular: true,
                features: [
                  "Everything in Essential",
                  "Custom theme design",
                  "Full decoration service",
                  "Catering coordination",
                  "Photography coordination",
                  "Entertainment booking"
                ]
              },
              {
                name: "Luxury",
                price: "Contact for pricing",
                features: [
                  "Everything in Premium",
                  "Personal wedding planner",
                  "Unlimited consultations",
                  "Custom invitations",
                  "Guest accommodation",
                  "Destination wedding planning"
                ]
              }
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-gradient-to-br from-pink-400 to-rose-400 text-white shadow-2xl scale-105"
                    : "bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-100"
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-pink-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? "" : "text-gray-800"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-3xl font-bold mb-6 ${pkg.popular ? "" : "text-pink-500"}`}>
                  {pkg.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.popular ? "text-white" : "text-pink-500"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={pkg.popular ? "" : "text-gray-700"}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#contact"
                  className={`block text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? "bg-white text-pink-500 hover:bg-gray-100"
                      : "bg-gradient-to-r from-pink-400 to-rose-400 text-white hover:shadow-lg"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready to Plan Your Dream Wedding?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's make your special day unforgettable. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-pink-500 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              href="/#gallery"
              className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
