import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Events Management - Spring Shine",
  description: "Professional corporate event management for conferences, seminars, product launches, and team building activities.",
};

export default function CorporatePage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-200 via-cyan-200 to-blue-300">
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🏢</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Corporate Events
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Professional event management that enhances your brand and engages your audience.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Plan Your Event
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Corporate Event Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Conference Management", description: "Full-scale conference planning with registration, speakers, and logistics.", icon: "🎤" },
              { title: "Product Launch Events", description: "Create buzz with memorable product launch experiences.", icon: "🚀" },
              { title: "Team Building Activities", description: "Engaging activities that strengthen team bonds and morale.", icon: "🤝" },
              { title: "Award Ceremonies", description: "Prestigious events to celebrate achievements and milestones.", icon: "🏆" },
              { title: "Business Seminars", description: "Educational seminars with professional setup and AV support.", icon: "💼" },
              { title: "Trade Shows", description: "Booth design, setup, and management for maximum impact.", icon: "🎪" }
            ].map((service) => (
              <div key={service.title} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Why Choose Us for Corporate Events
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Professional Excellence", description: "Years of experience in corporate event management" },
              { title: "Attention to Detail", description: "Every aspect meticulously planned and executed" },
              { title: "ROI Focused", description: "Events designed to meet your business objectives" },
              { title: "Technology Integration", description: "Latest AV equipment and virtual event capabilities" },
              { title: "Brand Enhancement", description: "Consistent with your corporate identity" },
              { title: "Seamless Coordination", description: "Single point of contact for all your needs" }
            ].map((benefit) => (
              <div key={benefit.title} className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-sm">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Let's Create a Successful Corporate Event
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact us to discuss your corporate event needs and objectives.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
