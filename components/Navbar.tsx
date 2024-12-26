'use client'
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    if (isMenuOpen) {
      document.addEventListener('click', closeMenu);
    }
    return () => document.removeEventListener('click', closeMenu);
  }, [isMenuOpen]);

  return (
    <nav className={`bg-white border-b fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo - Responsive sizing */}
          <Link href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
            BoardingClaims
          </Link>
          
          {/* Main Navigation - Desktop and Tablet */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            <Link href="/your-rights" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium hover:scale-105 transform">
              Your Rights
            </Link>
            <Link href="/how-we-work" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium hover:scale-105 transform">
              How We Work
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium hover:scale-105 transform">
              About Us
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium hover:scale-105 transform">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium hover:scale-105 transform">
              Contact
            </Link>
          </div>

          {/* CTA Button - Desktop and Tablet */}
          <div className="hidden lg:block">
            <Button asChild variant="cta" className="shadow-md hover:shadow-lg transform hover:scale-102 transition-all">
              <Link href="/claim-form">
                Check Your Claim
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden hover:bg-emerald-50"
            onClick={(e) => {
              e.stopPropagation();
              toggleMenu();
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </Button>
        </div>

        {/* Mobile and Tablet Menu - Slide down animation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-3 space-y-3">
            <Link href="/your-rights" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md">
              Your Rights
            </Link>
            <Link href="/how-we-work" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md">
              How We Work
            </Link>
            <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md">
              About Us
            </Link>
            <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md">
              FAQ
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md">
              Contact
            </Link>
            <div className="px-4 pt-2 pb-4">
              <Button asChild variant="cta" className="w-full shadow-md">
                <Link href="/claim-form">
                  Check Your Claim
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
