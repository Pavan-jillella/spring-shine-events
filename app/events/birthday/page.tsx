import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birthday Party Planning - Spring Shine",
  description: "Make birthdays unforgettable with themed decorations, entertainment, and customized party experiences for all ages.",
};

export default function BirthdayPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200">
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">🎂</div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Birthday Parties
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Celebrate another year with a party that's as unique as you are.
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Plan Your Party
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Birthday Party Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Themed Decorations", description: "Creative themes from superheroes to princesses and everything in between.", icon: "🎨" },
              { title: "Entertainment & Activities", description: "Magicians, face painting, games, and more to keep guests entertained.", icon: "🎪" },
              { title: "Custom Cake & Catering", description: "Delicious cakes and catering options for all dietary preferences.", icon: "🍰" },
              { title: "Photography Services", description: "Professional photos to capture all the special moments.", icon: "📷" },
              { title: "Party Favors & Gifts", description: "Unique party favors and gift bag arrangements.", icon: "🎁" },
              { title: "Venue Decoration", description: "Complete venue transformation with balloons, banners, and more.", icon: "🎈" }
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

      {/* Age Groups */}
      <section className="py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Parties for All Ages
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { age: "Kids (1-12 years)", themes: ["Superheroes", "Princesses", "Cartoon Characters", "Sports", "Animals"], icon: "👶" },
              { age: "Teens (13-19 years)", themes: ["Movie Night", "Gaming Party", "Pool Party", "Dance Party", "Outdoor Adventure"], icon: "🧑" },
              { age: "Adults (20+ years)", themes: ["Milestone Birthdays", "Elegant Dinners", "Cocktail Parties", "Theme Parties", "Surprise Parties"], icon: "🎉" }
            ].map((group) => (
              <div key={group.age} className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                <div className="text-5xl mb-4 text-center">{group.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{group.age}</h3>
                <ul className="space-y-2">
                  {group.themes.map((theme) => (
                    <li key={theme} className="flex items-center space-x-2 text-gray-700">
                      <span className="text-pink-500">•</span>
                      <span>{theme}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-pink-200 via-rose-200 to-orange-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Ready for an Amazing Birthday Party?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's create a memorable celebration that everyone will love!
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Book Your Party
          </Link>
        </div>
      </section>
    </main>
  );
}
