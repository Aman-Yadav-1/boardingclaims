import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity">
            BoardingClaims
          </Link>
          
          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/your-rights" 
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium hover:scale-105 transform"
            >
              Your Rights
            </Link>
            <Link 
              href="/how-we-work" 
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium hover:scale-105 transform"
            >
              How We Work
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium hover:scale-105 transform"
            >
              About Us
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium hover:scale-105 transform"
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium hover:scale-105 transform"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" className="bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
              <Link href="/claim-form">
                Check Your Claim
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-emerald-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
