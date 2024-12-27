import Navbar from "@/components/Navbar";
import Image from "next/image";
import type { Metadata } from "next";
import { FaChevronDown, FaUserGraduate, FaMicroscope, FaHandsHelping } from "react-icons/fa";

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
        <div className="py-16 lg:w-1/2 lg:ml-1 text-center lg:text-left">
          <h3 className="text-3xl text-sky-blue font-bold mb-4">More About Me</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            PLACEHOLDER this section is about me, Ishan Vengurlekar. I am a clinical psychiatrist, researcher, leader, visionary, and advocate. I am passionate about mental health and am dedicated to improving the lives of my patients. I am also a researcher and have published numerous papers on various topics in psychiatry. I am a leader in my field and am constantly striving to improve the quality of care that my patients receive. I am a visionary and am always looking for new and innovative ways to help my patients. I am also an advocate for mental health and work tirelessly to raise awareness and reduce the stigma surrounding mental illness.
          </p>
        </div>
      </section>

      {/* Page section overview */}
<section className="py-16 bg-light-pearl text-gray-900 bg-soft-peach">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">Explore My Work</h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
      {/* About Me */}
      <div className="text-center">
        <div className="mb-6">
          <FaUserGraduate className="text-7xl text-deep-coral mx-auto" />
        </div>
        <h3 className="text-xl font-semibold mb-4">About Me</h3>
        <p className="text-sm mb-6">
          Discover my academic journey, scholarly focus, and personal interests.
        </p>
        <a
          href="/about"
          className="px-6 py-2 bg-deep-coral text-white font-medium rounded-lg shadow-md hover:bg-soft-salmon transition duration-300"
        >
          See more
        </a>
      </div>

      {/* Research & Practice */}
      <div className="text-center">
        <div className="mb-6">
          <FaMicroscope className="text-7xl text-deep-coral mx-auto" />
        </div>
        <h3 className="text-xl font-semibold mb-4">Research & Practice</h3>
        <p className="text-sm mb-6">
          Learn about my research interests, clinical practice, grants, publications, and CV.
        </p>
        <a
          href="/research-and-practice"
          className="px-6 py-2 bg-deep-coral text-white font-medium rounded-lg shadow-md hover:bg-soft-salmon transition duration-300"
        >
          See more
        </a>
      </div>

      {/* Mentoring */}
      <div className="text-center">
        <div className="mb-6">
          <FaHandsHelping className="text-7xl text-deep-coral mx-auto" />
        </div>
        <h3 className="text-xl font-semibold mb-4">Mentoring</h3>
        <p className="text-sm mb-6">
          Explore my mentoring experiences and passion for guiding students.
        </p>
        <a
          href="/mentoring"
          className="px-6 py-2 bg-deep-coral text-white font-medium rounded-lg shadow-md hover:bg-soft-salmon transition duration-300"
        >
          See more
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
