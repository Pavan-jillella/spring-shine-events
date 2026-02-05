export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              About Spring Shine
            </h2>
            <p className="text-lg italic text-pink-500 mb-6">we make you celebrate</p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Spring Shine is your trusted partner in creating extraordinary
              experiences. With years of expertise in event management, we transform
              your vision into reality with meticulous planning and flawless execution.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              From intimate gatherings to grand celebrations, we handle every detail
              with creativity, professionalism, and passion. Our dedicated team works
              tirelessly to ensure your event shines bright and leaves lasting memories.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: "🎯", title: "Expert Planning" },
                { icon: "💎", title: "Premium Quality" },
                { icon: "🤝", title: "Client Focused" },
                { icon: "⚡", title: "Flawless Execution" },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl">{feature.icon}</span>
                  <span className="font-semibold text-gray-800">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-rose-300 to-orange-200 opacity-90" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
                <div className="text-center space-y-6">
                  <div className="text-6xl font-bold drop-shadow-lg">500+</div>
                  <div className="text-2xl font-semibold drop-shadow-md">Events Delivered</div>
                  <div className="w-20 h-1 bg-white mx-auto rounded-full" />
                  <p className="text-lg opacity-95 drop-shadow-sm">
                    Making dreams come true, one event at a time
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full opacity-60 blur-xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-300 rounded-full opacity-60 blur-xl animate-pulse delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
}
