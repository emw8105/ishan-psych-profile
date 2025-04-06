import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-calm-charcoal text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Ishan Vengurlekar</h3>
            <p className="text-gray-300 mb-4">
              Doctoral Candidate in Clinical Psychology specializing in child and adolescent mental health.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 shrink-0" />
                <span>
                  Department of Psychology
                  <br />
                  University of Example
                  <br />
                  San Francisco, CA 94110
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 shrink-0" />
                <span>ishan.vengurlekar@example.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Site Map</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/research-practice" className="text-gray-300 hover:text-white transition-colors">
                  Research & Practice
                </Link>
              </li>
              <li>
                <Link href="/mentoring" className="text-gray-300 hover:text-white transition-colors">
                  Mentoring
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Research Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/research-practice" className="text-gray-300 hover:text-white transition-colors">
                  Child Psychology
                </Link>
              </li>
              <li>
                <Link href="/research-practice" className="text-gray-300 hover:text-white transition-colors">
                  School Psychology
                </Link>
              </li>
              <li>
                <Link href="/research-practice" className="text-gray-300 hover:text-white transition-colors">
                  Trauma & Resilience
                </Link>
              </li>
              <li>
                <Link href="/research-practice" className="text-gray-300 hover:text-white transition-colors">
                  Family-Centered Approaches
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ishan Vengurlekar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

