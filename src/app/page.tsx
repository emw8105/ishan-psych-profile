import Navbar from "@/components/Navbar";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Dr. Ishan Vengurlekar",
  description: "Welcome to Dr. Ishan Vengurlekar's personal website.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section className="relative h-screen bg-sky-blue">
        <Image
          src="/path-to-hero-image.jpg"
          alt="Hero background image of Ishan"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-end pr-10 text-calm-charcoal">
          <h1 className="text-6xl font-bold">PSYCHIATRIST</h1>
          <h2 className="text-4xl mt-2 font-light">Children's Mental Health Professional</h2>
          <a href="#next" className="mt-10 text-4xl flex items-center gap-2">
            <span className="animate-bounce">˅</span>
          </a>
        </div>
      </section>

      {/* Characteristics Section */}
      <section id="next" className="py-16 px-8 bg-cloud-white text-center">
        <h2 className="text-4xl font-bold text-calm-charcoal leading-relaxed">
          Compassionate Care.
          Trustworthy Guidance.
          Dedicated Expertise.
        </h2>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-gray-50 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <Image
            src="/path-to-about-image.jpg" // change later
            alt="Ishan Vengurlekar"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-12 text-gray-700">
          <h3 className="text-3xl font-bold mb-4">More About Me</h3>
          <p className="text-lg leading-relaxed">
            I am a clinical psychiatrist, researcher, leader, visionary, and advocate. Passionate about mental health, 
            I dedicate myself to improving lives through evidence-based care and groundbreaking research. My work extends 
            to advocacy efforts aimed at reducing the stigma of mental illness and enhancing community awareness. I am 
            driven by a vision of equitable, compassionate care for all.
          </p>
        </div>
      </section>
    </div>
  );
}
