"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaChevronDown,
  FaTwitter,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-calm-charcoal text-off-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center border-r border-off-white">
          <ul className="space-y-2 text-center">
            <li>
              <a
                href="/"
                className="hover:text-gray-900 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-gray-900 transition duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        {/* Middle Section */}
        <div className="flex flex-col items-center justify-center border-r border-off-white">
          <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
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
              href="mailto:example@gmail.com"
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
          <ul className="space-y-2 text-center">
            <li>
              <a
                href="/research-and-practice"
                className="hover:text-gray-900 transition duration-300"
              >
                Research & Practice
              </a>
            </li>
            <li>
              <a
                href="/mentoring"
                className="hover:text-gray-900 transition duration-300"
              >
                Mentoring
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-900 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-sm text-black">
        Copyright &copy; 2025 Ishan Vengurlekar. All rights reserved.
      </div>
    </footer>
  );
}
