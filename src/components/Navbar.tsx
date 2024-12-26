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

  interface LinkItem {
    path: string;
    title: string;
  }

  const getLinkClass = (href: string): string => {
    return `block px-4 py-3 transition-colors ${
      pathname === href
        ? "text-soft-peach font-bold"
        : "hover:text-soft-peach text-calm-charcoal"
    }`;
  };

  return (
    <header className="sticky top-0 bg-cloud-white shadow-md z-50 backdrop-blur-md">
  {isMobile ? (
    <nav className="flex items-center justify-between px-6 h-20 font-sans text-calm-charcoal relative">
      {/* Title on Left */}
      <h2 className="text-3xl font-bold text-deep-navy tracking-wide">
        Dr. Ishan Vengurlekar
      </h2>

      {/* Hamburger Menu */}
      <button
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="text-calm-charcoal focus:outline-none text-2xl"
      >
        ☰
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full bg-cloud-white shadow-md">
          <ul className="flex flex-col items-stretch text-calm-charcoal">
            {[
              { path: "/", title: "Home" },
              { path: "/about", title: "About" },
              { path: "/current-projects", title: "Current Projects" },
              { path: "/publications-cv", title: "Publications + CV" },
              { path: "/contact", title: "Contact" },
            ].map(({ path, title }, index) => (
              <li key={index} className="border-b">
                <Link
                  href={path}
                  className={getLinkClass(path)}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  ) : (
    // Desktop Navbar
    <nav className="flex items-center justify-between px-8 h-20 font-sans text-calm-charcoal">
      <ul className="flex gap-6">
        {[
          { path: "/", title: "Home" },
          { path: "/about", title: "About" },
        ].map(({ path, title }) => (
          <li key={path}>
            <Link href={path} className={getLinkClass(path)}>
              {title}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold text-deep-navy tracking-wide">
        Dr. Ishan Vengurlekar
      </h2>

      <ul className="flex gap-6">
        {[
          { path: "/current-projects", title: "Current Projects" },
          { path: "/publications-cv", title: "Publications + CV" },
          { path: "/contact", title: "Contact" },
        ].map(({ path, title }) => (
          <li key={path}>
            <Link href={path} className={getLinkClass(path)}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )}
</header>

  );
}
