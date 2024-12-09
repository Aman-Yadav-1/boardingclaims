export default function Navbar() {
    return (
      <header className="bg-white shadow-md fixed w-full z-50">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <a href="/" className="text-2xl font-bold text-black">
            BoardingClaims
          </a>
          <ul className="flex space-x-8 text-lg">
            <li>
              <a href="/about" className="text-black hover:text-emerald-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/how-we-work" className="text-black hover:text-emerald-600">
                How We Work
              </a>
            </li>
            <li>
              <a href="/faq" className="text-black hover:text-emerald-600">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="text-black hover:text-emerald-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  