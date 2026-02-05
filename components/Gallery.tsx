"use client";

import { useState } from "react";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Weddings", "Corporate", "Birthday", "Social"];

  const galleryItems = [
    { id: 1, category: "Weddings", color: "from-pink-400 to-rose-500", title: "Elegant Wedding Ceremony" },
    { id: 2, category: "Corporate", color: "from-blue-400 to-cyan-500", title: "Corporate Conference" },
    { id: 3, category: "Birthday", color: "from-purple-400 to-pink-500", title: "Birthday Celebration" },
    { id: 4, category: "Weddings", color: "from-rose-400 to-orange-500", title: "Reception Decor" },
    { id: 5, category: "Social", color: "from-orange-400 to-yellow-500", title: "Anniversary Party" },
    { id: 6, category: "Corporate", color: "from-cyan-400 to-blue-500", title: "Product Launch" },
    { id: 7, category: "Birthday", color: "from-pink-400 to-purple-500", title: "Kids Birthday Party" },
    { id: 8, category: "Weddings", color: "from-purple-400 to-pink-500", title: "Wedding Decoration" },
    { id: 9, category: "Social", color: "from-yellow-400 to-orange-500", title: "Family Gathering" },
  ];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our portfolio of successful events and celebrations
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg scale-105"
                    : "bg-pink-100 text-gray-700 hover:bg-pink-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Placeholder Image with Gradient */}
              <div className={`h-80 bg-gradient-to-br ${item.color} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                
                {/* Placeholder Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/80 text-6xl">
                    {item.category === "Weddings" && "💒"}
                    {item.category === "Corporate" && "🏢"}
                    {item.category === "Birthday" && "🎂"}
                    {item.category === "Social" && "🎉"}
                  </div>
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm">{item.category} Event</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-sm font-semibold text-gray-800">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about placeholder images */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm italic">
            * Images shown are placeholders. Replace with actual event photos for production.
          </p>
          <button className="mt-6 bg-gradient-to-r from-pink-400 to-rose-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
