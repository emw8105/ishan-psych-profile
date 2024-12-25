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
      <section className="relative h-screen bg-gray-900">
        <Image
          src="/path-to-hero-image.jpg" // change later
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-end pr-10">
          <div className="text-right text-white">
            <h1 className="text-6xl font-bold">CLINICAL</h1> {/* Change font later */}
            <h2 className="text-4xl mt-2 font-light">Psychiatrist</h2> {/* Change font later */}
          </div>
          <a
            href="#next"
            className="mt-10 text-white text-4xl flex items-center gap-2"
          >
            <span className="animate-bounce">˅</span>
          </a>
        </div>
      </section>

      {/* Characteristics Section */}
      <section id="next" className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold">
          CLINICAL PSYCHIATRIST. RESEARCHER. LEADER. VISIONARY. ADVOCATE.
        </h2> {/* pick different words so it's not the same as jasmin's */}
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-white flex flex-col lg:flex-row items-center">
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
            PLACEHOLDER this section is about me, Ishan Vengurlekar. I am a clinical psychiatrist, researcher, leader, visionary, and advocate. I am passionate about mental health and am dedicated to improving the lives of my patients. I am also a researcher and have published numerous papers on various topics in psychiatry. I am a leader in my field and am constantly striving to improve the quality of care that my patients receive. I am a visionary and am always looking for new and innovative ways to help my patients. I am also an advocate for mental health and work tirelessly to raise awareness and reduce the stigma surrounding mental illness. I am very handsome!
          </p>
        </div>
      </section>
    </div>
  );
}
