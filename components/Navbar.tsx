import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-emerald-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/">
          <span className="text-lg font-bold cursor-pointer">BoardingClaims</span>
        </Link>
        <div className="space-x-6">
          <Link href="/about">
            <span className="hover:text-emerald-300 cursor-pointer">About</span>
          </Link>
          <Link href="/how-we-work">
            <span className="hover:text-emerald-300 cursor-pointer">How We Work</span>
          </Link>
          <Link href="/your-rights">
            <span className="hover:text-emerald-300 cursor-pointer">Your Rights</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-emerald-300 cursor-pointer">Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
