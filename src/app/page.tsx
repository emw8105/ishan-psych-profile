import Navbar from "@/components/Navbar";
import Image from "next/image";
import type { Metadata } from "next";
import { FaChevronDown } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Home - Ishan Nitin Vengurlekar",
  description: "Welcome to Ishan Nitin Vengurlekar's personal site for his clinical psychology expertise.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

    {/* Hero Section */}
    <section className="relative h-screen bg-gray-900">
      <Image
        src="/images/Hero Image Cropped.jpg"
        alt="Hero background image of Ishan"
        layout="fill"
        objectFit="cover"
        className="opacity-40 hero-image"
      />
      <div className="px-10 absolute inset-0 flex flex-col justify-center items-end pr-10 text-cloud-white hero-text">
        <h1 className="text-6xl font-bold font-playfair">DOCTORAL STUDENT</h1>
        <h2 className="text-4xl mt-2 font-light font-serif">
          School Mental Health Professional
        </h2>
        <a href="#next" className="mt-10 text-4xl flex items-center gap-2">
          <FaChevronDown className="animate-bounce" />
        </a>
      </div>
    </section>

      {/* Characteristics Section */}
      <section id="next" className="py-16 px-8 bg-cloud-white text-center">
        <h2 className="text-4xl font-bold text-calm-charcoal leading-relaxed">
          Compassionate Care. Trustworthy Guidance. Dedicated Expertise.
        </h2>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-[#f7f7f7] flex flex-col lg:flex-row justify-center items-center"> {/* Slightly off-white background */}
        <div className="lg:w-1/3 flex justify-center">
          <Image
            src="/images/IMG_1133.jpg"
            alt="Ishan Vengurlekar"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-contain"
          />
        </div>
        <div className="py-16 lg:w-1/2 lg:ml-12 text-gray-700 text-center lg:text-left">
          <h3 className="text-3xl font-bold mb-4">More About Me</h3>
          <p className="text-lg leading-relaxed">
            PLACEHOLDER this section is about me, Ishan Vengurlekar. I am a clinical psychiatrist, researcher, leader, visionary, and advocate. I am passionate about mental health and am dedicated to improving the lives of my patients. I am also a researcher and have published numerous papers on various topics in psychiatry. I am a leader in my field and am constantly striving to improve the quality of care that my patients receive. I am a visionary and am always looking for new and innovative ways to help my patients. I am also an advocate for mental health and work tirelessly to raise awareness and reduce the stigma surrounding mental illness.
          </p>
        </div>

        {/* Page section overview */}
        


      </section>
    </div>
  );
}
