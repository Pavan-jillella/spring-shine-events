import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Gatherings & Events - Spring Shine",
  description: "Perfect planning for anniversaries, reunions, festivals, and any special celebration that brings people together.",
};

export default function SocialPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-200 via-yellow-200 to-pink-200">
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Social Gatherings
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Bringing people together for memorable celebrations and meaningful connections.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Plan Your Event
          </Link>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Types of Social Events We Plan
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Anniversary Celebrations", description: "Mark milestones with elegant anniversary parties.", icon: "💕" },
              { title: "Family Reunions", description: "Bring the family together with organized reunion events.", icon: "👨‍👩‍👧‍👦" },
              { title: "Festival Celebrations", description: "Cultural and religious festival event planning.", icon: "🪔" },
              { title: "Engagement Parties", description: "Celebrate the start of a beautiful journey together.", icon: "💍" },
              { title: "Farewell Events", description: "Send-offs and retirement parties with heartfelt touches.", icon: "👋" },
              { title: "Holiday Parties", description: "Seasonal celebrations and holiday gatherings.", icon: "🎄" }
            ].map((event) => (
              <div key={event.title} className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{event.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            What We Provide
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Venue selection and booking",
              "Custom decorations and themes",
              "Catering and menu planning",
              "Entertainment coordination",
              "Photography and videography",
              "Guest management",
              "Timeline and schedule planning",
              "Setup and cleanup services"
            ].map((feature) => (
              <div key={feature} className="flex items-center space-x-3 bg-white rounded-xl p-4 shadow-sm">
                <svg className="w-6 h-6 text-pink-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-200 via-rose-200 to-orange-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Let's Celebrate Together
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Whatever the occasion, we'll help you create an unforgettable gathering.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
