import Navbar from "@/components/Navbar";
import Image from "next/image";
import type { Metadata } from "next";
import {
  FaChevronDown,
  FaUserGraduate,
  FaMicroscope,
  FaHandsHelping,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Home - Ishan Nitin Vengurlekar",
  description:
    "Welcome to Ishan Nitin Vengurlekar's personal site for his clinical psychology expertise.",
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
      <section className="py-16 px-8 bg-off-white grid grid-cols-4 items-center">
        {/* Left Spacer */}
        <div></div>

        {/* Image Section */}
        <div className="max-w-lg flex justify-center">
          <Image
            src="/images/IMG_1133.jpg"
            alt="Ishan Vengurlekar"
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-lg text-center lg:text-left">
          <h3 className="text-5xl font-bold mb-4">More About Me</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            PLACEHOLDER this section is about me, Ishan Vengurlekar. I am a
            clinical psychiatrist, researcher, leader, visionary, and advocate.
            I am passionate about mental health and am dedicated to improving
            the lives of my patients. I am also a researcher and have published
            numerous papers on various topics in psychiatry. I am a leader in my
            field and am constantly striving to improve the quality of care that
            my patients receive. I am a visionary and am always looking for new
            and innovative ways to help my patients. I am also an advocate for
            mental health and work tirelessly to raise awareness and reduce the
            stigma surrounding mental illness.
          </p>
        </div>

        {/* Right Spacer */}
        <div></div>
      </section>

      {/* Page Overview Section*/}
      <section className="py-16 bg-light-pearl text-gray-900 bg-gradient-to-b from-blue-100 via-blue-200 to-indigo-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Explore My Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-10">
            {/* About Me */}
            <div className="text-center flex flex-col justify-between h-full">
              <div>
                <div className="mb-6">
                  <FaUserGraduate className="text-7xl mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">About Me</h3>
                <p className="text-lg mb-6">
                  Discover my academic journey, scholarly focus, and personal
                  interests.
                </p>
              </div>
              <a
                href="/about"
                className="w-fit mx-auto px-8 py-2 bg-cloud-white font-medium rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition duration-300"
              >
                See more
              </a>
            </div>

            {/* Research & Practice */}
            <div className="text-center flex flex-col justify-between h-full">
              <div>
                <div className="mb-6">
                  <FaMicroscope className="text-7xl mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  Research & Practice
                </h3>
                <p className="text-lg mb-6">
                  Learn about my research interests, clinical practice, grants,
                  publications, and CV.
                </p>
              </div>
              <a
                href="/research-and-practice"
                className="w-fit mx-auto px-8 py-2 bg-cloud-white font-medium rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition duration-300"
              >
                See more
              </a>
            </div>

            {/* Mentoring */}
            <div className="text-center flex flex-col justify-between h-full">
              <div>
                <div className="mb-6">
                  <FaHandsHelping className="text-7xl mx-auto" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Mentoring</h3>
                <p className="text-lg mb-6">
                  Explore my mentoring experiences and passion for guiding
                  students.
                </p>
              </div>
              <a
                href="/mentoring"
                className="w-fit mx-auto px-8 py-2 bg-cloud-white font-medium rounded-lg shadow-md hover:bg-gray-900 hover:text-white transition duration-300"
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
