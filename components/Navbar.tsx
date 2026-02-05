"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-white shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/spring-shine-logo.png" 
              alt="Spring Shine Events - We Make You Celebrate" 
              width={250}
              height={100}
              className="h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-pink-500 ${
                  isScrolled ? "text-gray-700" : "text-gray-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 transition-all ${
                  isScrolled ? "bg-gray-700" : "bg-gray-800"
                }`}
              />
              <span
                className={`w-full h-0.5 transition-all ${
                  isScrolled ? "bg-gray-700" : "bg-gray-800"
                }`}
              />
              <span
                className={`w-full h-0.5 transition-all ${
                  isScrolled ? "bg-gray-700" : "bg-gray-800"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-pink-500 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-gradient-to-r from-pink-400 to-rose-400 text-white px-6 py-3 rounded-full text-center hover:shadow-lg transition-all"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
