"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // get current route
  const pathname = usePathname();

  // dynamically track screen size to adjust display for smaller sizes (i.e. mobile)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    handleResize(); // check the size on initial render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // function to add active class
  const getLinkClass = (href: string) =>
    `text-charcoal font-medium transition-colors ${
      pathname === href ? "text-rose-gold" : "hover:text-rose-gold"
    }`;

  return (
    <header className="sticky top-0 bg-off-white shadow-md z-50">
      {isMobile ? (
        // render the mobile-sized navbar
        <nav className="flex items-center justify-between px-6 h-20 font-sans relative">
          {/* Title on Left */}
          <h2 className="text-3xl font-bold text-deep-navy tracking-wide">
            Dr. Ishan Vengurlekar
          </h2>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="text-charcoal focus:outline-none text-2xl"
          >
            ☰
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 w-full bg-off-white shadow-md">
              <ul className="flex flex-col items-stretch">
                <li className="border-b">
                  <Link
                    href="/"
                    className={`block px-4 py-3 ${getLinkClass("/")}`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li className="border-b">
                  <Link
                    href="/about"
                    className={`block px-4 py-3 ${getLinkClass("/about")}`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="border-b">
                  <Link
                    href="/current-projects"
                    className={`block px-4 py-3 ${getLinkClass(
                      "/current-projects"
                    )}`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Current Projects
                  </Link>
                </li>
                <li className="border-b">
                  <Link
                    href="/publications-cv"
                    className={`block px-4 py-3 ${getLinkClass(
                      "/publications-cv"
                    )}`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Publications + CV
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`block px-4 py-3 ${getLinkClass("/contact")}`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      ) : (
        // otherwise, render the desktop-sized Navbar
        <nav className="flex items-center justify-between px-8 h-20 font-sans">
          {/* Left Links */}
          <ul className="flex gap-6">
            <li>
              <Link href="/" className={getLinkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={getLinkClass("/about")}>
                About
              </Link>
            </li>
          </ul>

          {/* Center Title */}
          <h2 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-deep-navy tracking-wide">
            Dr. Ishan Vengurlekar
          </h2>

          {/* Right Links */}
          <ul className="flex gap-6">
            <li>
              <Link
                href="/current-projects"
                className={getLinkClass("/current-projects")}
              >
                Current Projects
              </Link>
            </li>
            <li>
              <Link
                href="/publications-cv"
                className={getLinkClass("/publications-cv")}
              >
                Publications + CV
              </Link>
            </li>
            <li>
              <Link href="/contact" className={getLinkClass("/contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
