// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-off-white shadow-md z-50">
      <nav className="flex items-center justify-between px-8 h-20 font-sans">
        {/* Left Navigation Menu */}
        <ul className="flex gap-6">
          <li>
            <Link
            href="/"
            className="text-charcoal font-medium hover:text-rose-gold transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-charcoal font-medium hover:text-rose-gold transition-colors"
            >
              About
            </Link>
          </li>
        </ul>

        {/* Centered Title */}
        <h2 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-bold text-deep-navy tracking-wide">
            Dr. Ishan Vengurlekar
        </h2>

        {/* Right Navigation Menu */}
        <ul className="flex gap-6">
          <li>
            <Link
              href="/current-projects"
              className="text-charcoal font-medium hover:text-rose-gold transition-colors"
            >
              Current Projects
            </Link>
          </li>
          <li>
            <Link
              href="/publications-cv"
              className="text-charcoal font-medium hover:text-rose-gold transition-colors"
            >
              Publications + CV
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-charcoal font-medium hover:text-rose-gold transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
