"use client";
import { usePathname } from "next/navigation";
import { FaTwitter, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  const getLinkClass = (href: string): string => {
    return `block transition-colors ${
      pathname === href
        ? "text-gray-900 font-poppins"
        : "hover:text-gray-900 text-off-white"
    }`;
  };

  return (
    <footer className="bg-gray-500 text-off-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center border-r border-off-white">
          <ul className="space-y-2 text-center text-lg font-poppins">
            {[
              { path: "/", title: "Home" },
              { path: "/about", title: "About" },
            ].map(({ path, title }) => (
              <li key={path}>
                <a href={path} className={getLinkClass(path)}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col items-center justify-center border-r border-off-white">
          <h3 className="text-3xl font-serif font-bold mb-6">Follow Me</h3>
          <div className="flex space-x-6 text-center">
            <a
              href="https://www.linkedin.com/in/ishan-vengurlekar-1ab277172/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="mailto:ishanvengurlekar1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition duration-300"
            >
              <FaEnvelope className="text-2xl" />
            </a>
            <a
              href="https://x.com/Vengurlekar_I"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition duration-300"
            >
              <FaTwitter className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center">
          <ul className="space-y-2 text-center text-lg font-poppins">
            {[
              { path: "/research-and-practice", title: "Research & Practice" },
              { path: "/mentoring", title: "Mentoring" },
              { path: "/contact", title: "Contact" },
            ].map(({ path, title }) => (
              <li key={path}>
                <a href={path} className={getLinkClass(path)}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-black">
        Copyright &copy; 2025 Ishan Vengurlekar. All rights reserved.
      </div>
    </footer>
  );
}
