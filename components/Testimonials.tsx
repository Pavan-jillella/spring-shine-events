"use client";

import { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Bride",
      event: "Wedding Ceremony",
      rating: 5,
      text: "Spring Shine Events made our wedding day absolutely magical! Every detail was perfect, from the stunning decorations to the seamless coordination. Our guests are still talking about it!",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Michael Chen",
      role: "CEO",
      event: "Corporate Conference",
      rating: 5,
      text: "Outstanding professionalism! They organized our annual conference with 500+ attendees flawlessly. The attention to detail and smooth execution exceeded our expectations.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Emily Rodriguez",
      role: "Mother",
      event: "Birthday Party",
      rating: 5,
      text: "My daughter's 10th birthday party was a dream come true! The themed decorations and entertainment kept all the kids engaged. Thank you for creating such beautiful memories!",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "David Thompson",
      role: "Event Organizer",
      event: "Charity Gala",
      rating: 5,
      text: "We've worked with many event companies, but Spring Shine Events stands out. Their creativity, reliability, and dedication to excellence make them our go-to choice.",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our happy clients
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br ${testimonials[currentTestimonial].color} rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden`}>
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="text-white/30 text-6xl mb-6">"</div>

              {/* Rating Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-white text-xl md:text-2xl leading-relaxed mb-8">
                {testimonials[currentTestimonial].text}
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white text-2xl font-bold">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-white/90">
                    {testimonials[currentTestimonial].role} •{" "}
                    {testimonials[currentTestimonial].event}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentTestimonial === index
                    ? "bg-pink-500 w-8"
                    : "bg-pink-200"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
