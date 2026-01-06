import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-warm-sand py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-calm-charcoal mb-6">
              About Ishan Vengurlekar
            </h1>
            <p className="text-lg md:text-xl text-calm-charcoal/80">
              Doctoral candidate in School Psychology with a focus on research in child and adolescent mental health
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 md:py-24 bg-cloud-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl ring-2 ring-deep-ocean/20">
              <Image
                src="/images/Ishan_Vengurlekar.jpg?height=1000&width=800"
                alt="Ishan Vengurlekar"
                fill
                className="object-cover object-[center_17%]"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl font-bold text-calm-charcoal">Biography</h2>
              <p className="text-lg text-calm-charcoal/80">
                I am a doctoral candidate in School Psychology at the University of Wisconsin-Madison, specializing in research on child and adolescent mental health. With a strong academic foundation in evidence-based research approaches, I am dedicated to understanding and addressing the unique psychological needs of young people in educational settings.
              </p>
              <p className="text-lg text-calm-charcoal/80">
                My research focuses on school-based mental health interventions, single-session interventions, and supporting students experiencing internalizing concerns. Through rigorous quantitative and qualitative methodologies, I investigate effective strategies to support student well-being in schools.
              </p>
              <p className="text-lg text-calm-charcoal/80">
                Currently completing my doctoral studies under the mentorship of Dr. Stephen Kilgus, I am actively conducting research and gaining practical experience through advanced practica in the Madison Metropolitan School District and surrounding areas, with a focus on advancing the field through evidence-based practice and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-ocean via-calm-charcoal to-deep-ocean">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cloud-white mb-4">
              Education & Experience
            </h2>
            <p className="text-gray-300">Academic background and professional development</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-16">
            {/* Education Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-soft-teal/30"></div>
                <h3 className="text-2xl font-bold text-cloud-white flex items-center">
                  <GraduationCap className="h-6 w-6 mr-2 text-soft-teal" />
                  Education
                </h3>
                <div className="h-px flex-1 bg-soft-teal/30"></div>
              </div>

              <div className="space-y-6">
                {/* PhD Card - In Progress */}
                <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-soft-peach via-soft-peach/80 to-soft-peach rounded-l-xl"></div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-full p-2 shadow-lg ring-2 ring-soft-peach/30 transition-all relative overflow-hidden">
                        <Image
                          src="/images/University-of-Wisconsin-Madison-Seal.png"
                          alt="University of Wisconsin-Madison Seal"
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-cloud-white mb-1">Ph.D. in School Psychology</h4>
                        <p className="text-soft-teal text-base font-semibold">University of Wisconsin-Madison</p>
                        <p className="text-gray-400 text-sm mt-1">Advisor: Dr. Stephen Kilgus • School-based mental health interventions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                      <span className="px-3 py-1.5 bg-soft-peach/30 text-soft-peach text-sm font-bold rounded-full border border-soft-peach/50">Current</span>
                      <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap">Expected May 2027</span>
                    </div>
                  </div>
                </div>

                {/* MS Card */}
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-full p-2 shadow-lg ring-2 ring-soft-teal/30 transition-all relative overflow-hidden">
                        <Image
                          src="/images/University-of-Wisconsin-Madison-Seal.png"
                          alt="University of Wisconsin-Madison Seal"
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-cloud-white mb-1">M.S. in School Psychology</h4>
                        <p className="text-soft-teal text-base font-semibold">University of Wisconsin-Madison</p>
                        <p className="text-gray-400 text-sm mt-1">Advisor: Dr. Stephen Kilgus • GPA: <span className="text-cloud-white font-bold">4.00</span></p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 ml-4">August 2023</span>
                  </div>
                </div>

                {/* BA Card */}
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-white/90 rounded-full p-2 shadow-lg ring-2 ring-soft-teal/30 transition-all relative overflow-hidden">
                        <Image
                          src="/images/University-of-Arkansas-Seal.png"
                          alt="University of Arkansas Seal"
                          fill
                          className="object-contain p-0.5"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-cloud-white mb-1">B.A. in Psychology</h4>
                        <p className="text-soft-teal text-base font-semibold">University of Arkansas</p>
                        <p className="text-gray-400 text-sm mt-1">
                          Advisor: Dr. Timothy A. Cavell • GPA: <span className="text-cloud-white font-bold">4.00</span> • Minor: Social Work • First-Ranked Senior Scholar
                        </p>
                      </div>
                    </div>
                    <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 ml-4">May 2022</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Experience Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-soft-teal/30"></div>
                <h3 className="text-2xl font-bold text-cloud-white flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-soft-teal" />
                  Clinical Experience
                </h3>
                <div className="h-px flex-1 bg-soft-teal/30"></div>
              </div>

              <div className="space-y-6">
                {/* Middleton-Cross Plains Advanced Practicum */}
                <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-soft-peach via-soft-peach/80 to-soft-peach rounded-l-xl"></div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white mb-2">School Psychology Advanced Practicum Student</h4>
                      <p className="text-gray-300 text-lg mt-1">Middleton-Cross Plains Area School District – Glacier Creek Middle School</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                      <span className="px-3 py-1.5 bg-soft-peach/30 text-soft-peach text-sm font-bold rounded-full border border-soft-peach/50">Current</span>
                      <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap">2025 – Present</span>
                    </div>
                  </div>                  <p className="text-gray-400 text-sm mb-4">Supervisors: Kathryn Jackson, Ed.S., Katie Hartman, Ed.S., & Elizabeth Hagermoser-Bayley, Ph.D.</p>

                  <ul className="space-y-3">
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Conducted individual and group therapy for students with internalizing and externalizing concerns</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Conducted comprehensive evaluations for students with academic, social, emotional, and behavioral concerns</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Helped pilot and deliver the Resilience Education Program (REP) and refined Tier 2 supports</span>
                    </li>
                  </ul>
                </div>

                {/* MMSD Advanced Practicum */}
                <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-soft-peach via-soft-peach/80 to-soft-peach rounded-l-xl"></div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white mb-2">School Psychology Advanced Practicum Student</h4>
                      <p className="text-gray-300 text-lg mt-1">Madison Metropolitan School District (MMSD)</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                      <span className="px-3 py-1.5 bg-soft-peach/30 text-soft-peach text-sm font-bold rounded-full border border-soft-peach/50">Current</span>
                      <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap">2024 – Present</span>
                    </div>
                  </div>                  <p className="text-gray-400 text-sm mb-4">Supervisors: Kristi Nelson, Ed.S., & Elizabeth Hagermoser-Bayley, Ph.D.</p>

                  <ul className="space-y-3">
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Consulted with school staff district-wide regarding provision of mental health supports</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Communicated with hospitals to facilitate delivery of school-based supports</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Collaborated with district director to optimize dissemination of mental health services</span>
                    </li>
                  </ul>
                </div>

                {/* SPTC Advanced Clinician */}
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">


                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white ">Advanced Student Clinician</h4>
                      <p className="text-gray-300 text-lg mt-1">School Psychology Training Clinic (SPTC)</p>
                    </div>
                    <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 ml-4">2024 – 2025</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">Supervisors: Drs. Kristy Kelly, Haley Schultz, & Elizabeth Hagermoser-Bayley</p>

                  <ul className="space-y-3">
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Supervised first-year EdS and PhD students in summer-long assessment casework</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Supervised first-year EdS high school social-emotional intervention and group Coping Cat work</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Provided weekly didactics and feedback on case conceptualization and clinical communication</span>
                    </li>
                  </ul>
                </div>

                {/* MMSD Field Student */}
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">


                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white ">School Psychology Field Student</h4>
                      <p className="text-gray-300 text-lg mt-1">Madison Metropolitan School District (MMSD) – Milele Chikasa Anana Elementary School</p>
                    </div>
                    <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 ml-4">2024 – 2025</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">Supervisors: Margaret Pennoyer, Ed.S. and Caroline Racine-Gilles, Ph.D.</p>

                  <ul className="space-y-3">
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Conducted special education evaluations and administered standardized assessments (WISC-V, KTEA, KABC)</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Led and co-facilitated group interventions targeting internalizing symptoms, social skills, and emotion regulation</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Led individual counseling sessions and consulted with staff on student functioning</span>
                    </li>
                  </ul>
                </div>

                {/* SPTC Student Clinician */}
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">


                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white ">Student Clinician</h4>
                      <p className="text-gray-300 text-lg mt-1">School Psychology Training Clinic (SPTC)</p>
                    </div>
                    <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 ml-4">2023 – 2024</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">Supervisors: Drs. Kristy Kelly, Haley Schultz, & Elizabeth Hagermoser-Bayley</p>

                  <ul className="space-y-3">
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Conducted intake interviews and led feedback sessions for parent and university student clients</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Gained proficiency in standardized assessments (WISC-V, WIAT-IV, WAIS-IV, TOWL-4)</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Led individual therapy sessions and received training on suicide risk assessments</span>
                    </li>
                  </ul>
                </div>

                {/* Dane County Juvenile Detention - Summary Card */}
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">


                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white ">Student Clinician</h4>
                      <p className="text-gray-300 text-lg mt-1">Dane County Juvenile Detention Center</p>
                    </div>
                    <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 ml-4">2023 – 2024</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-3">Supervisors: Drs. Kristy Kelly & Elizabeth Hagermoser-Bayley</p>

                  <p className="text-gray-300">Led group therapy sessions at the Dane County Juvenile Detention Center using an adapted social-emotional learning curriculum.</p>
                </div>

                {/* Sun Prairie Practicum */}
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">


                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white ">School Psychology Practicum Student</h4>
                      <p className="text-gray-300 text-lg mt-1">Sun Prairie Area School District (SPASD)</p>
                    </div>
                    <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 ml-4">2022 – 2023</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">Supervisors: Joe Deegan, Ed.S., & Drs. Katie Eklund, & Elizabeth Hagermoser-Bayley</p>

                  <ul className="space-y-3">
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Implemented revised criteria for Advanced Learning identification using local norms at district level</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Conducted comprehensive assessments including systematic observations and behavior rating scales</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Consulted with educators on evidence-based behavioral management strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Research Experience Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-soft-teal/30"></div>
                <h3 className="text-2xl font-bold text-cloud-white flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-soft-teal" />
                  Research Experience
                </h3>
                <div className="h-px flex-1 bg-soft-teal/30"></div>
              </div>

              <div className="space-y-6">
                {/* Eklund and Kilgus Lab */}
                <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-soft-peach via-soft-peach/80 to-soft-peach rounded-l-xl"></div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white mb-2">Graduate Research Assistant</h4>
                      <p className="text-gray-300 text-lg mt-1">Eklund and Kilgus Laboratory</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                      <span className="px-3 py-1.5 bg-soft-peach/30 text-soft-peach text-sm font-bold rounded-full border border-soft-peach/50">Current</span>
                      <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap">2022 – Present</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">Faculty Mentor: Dr. Stephen Kilgus</p>

                  <ul className="space-y-3">
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Collaborated on Multi-Informant Decisional Assessment System (MIDAS) project with University of South Florida</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Helped prepare $4,000,000 IES grant for developing high school-appropriate Resilience Education Program (REP)</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Conducted literature reviews on progress monitoring, universal screening, and culturally adapted interventions</span>
                    </li>
                  </ul>
                </div>

                {/* CRAV Lab */}
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">


                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white ">Undergraduate Research Assistant</h4>
                      <p className="text-gray-300 text-lg mt-1">Center for Research on Aggression and Victimization (CRAV) Laboratory</p>
                    </div>
                    <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 ml-4">2020 – 2024</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">Faculty Mentor: Dr. Timothy A. Cavell</p>

                  <ul className="space-y-3">
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Coordinated Hog Pen Pals mentoring program with 10 local elementary schools</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Collaborated with Boston University on IES-funded Active-Duty Military Families study</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Mentored undergraduate research assistants and conducted literature reviews on peer victimization</span>
                    </li>
                  </ul>
                </div>

                {/* DREAM Lab - Summary Card */}
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">


                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white ">Undergraduate Research Assistant</h4>
                      <p className="text-gray-300 text-lg mt-1">Diversity Research and Enhanced Access for Minorities (DREAM) Lab</p>
                    </div>
                    <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 ml-4">2020 – 2022</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-3">Faculty Mentor: Dr. Ana J. Bridges</p>

                  <p className="text-gray-300">Completed qualitative research training, transcribed interviews for graduate dissertations, and assisted with studies on microaggressions and juvenile justice involvement.</p>
                </div>

                {/* FCI Lab - Summary Card */}
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">


                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white ">Undergraduate Research Assistant</h4>
                      <p className="text-gray-300 text-lg mt-1">Family and Community Intervention (FCI) Laboratory</p>
                    </div>
                    <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 ml-4">2020 – 2022</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-3">Faculty Mentor: Dr. Lauren B. Quetsch</p>

                  <p className="text-gray-300">Engaged in participant outreach for online study on teenagers with autism, conducted literature review on parental engagement, and created scientific poster for existing study.</p>
                </div>
              </div>
            </div>

            {/* Teaching Experience Section */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-soft-teal/30"></div>
                <h3 className="text-2xl font-bold text-cloud-white flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-soft-teal" />
                  Teaching Experience
                </h3>
                <div className="h-px flex-1 bg-soft-teal/30"></div>
              </div>

              <div className="space-y-6">
                {/* ED PSYCH 880 - Current */}
                <div className="relative bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-soft-peach via-soft-peach/80 to-soft-peach rounded-l-xl"></div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white mb-2">Teaching Assistant and Interim Lecturer</h4>
                      <p className="text-gray-300 text-lg mt-1">ED PSYCH 880 School Prevention Science</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                      <span className="px-3 py-1.5 bg-soft-peach/30 text-soft-peach text-sm font-bold rounded-full border border-soft-peach/50">Current</span>
                      <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap">2025 – Present</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">Faculty Instructor: Dr. Craig Albers</p>

                  <ul className="space-y-3">
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Delivered lectures on school-based prevention science mechanisms (teacher-student relationships, SEL, school climate)</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Co-taught and independently taught classes while facilitating classroom discussions</span>
                    </li>
                    <li className="flex items-start group/item">
                      <span className="inline-block w-2 h-2 rounded-full bg-soft-teal mt-2 mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></span>
                      <span className="text-gray-300">Graded all assignments and held regular office hours for student support</span>
                    </li>
                  </ul>
                </div>

                {/* PSYC 207V Mentor Lead - Summary Card */}
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">


                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white ">Mentor Lead</h4>
                      <p className="text-gray-300 text-lg mt-1">PSYC 207V Hog Pen Pals Service-Learning Course</p>
                    </div>
                    <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 ml-4">2020</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-3">Faculty Instructor: Dr. Timothy A. Cavell</p>

                  <p className="text-gray-300">Assisted graduate instructor with training sessions and grading, reviewed mentor journal entries to ensure safe mentoring practices, and consulted with mentors about the program.</p>
                </div>

                {/* Student Success Peer Coach - Summary Card */}
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl border-2 border-soft-teal/30 hover:border-soft-teal/40 transition-all duration-300 hover:shadow-xl">


                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-cloud-white ">Peer Academic Coach</h4>
                      <p className="text-gray-300 text-lg mt-1">Student Success</p>
                    </div>
                    <span className="px-3 py-1.5 bg-soft-teal text-calm-charcoal text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 ml-4">2020 – 2022</span>
                  </div>

                  <p className="text-gray-400 text-sm mb-3">Faculty Instructor: Ms. Kristen Kaprinski</p>

                  <p className="text-gray-300">Worked one-on-one with students on academic success, created tailored plans to improve GPA and time management, and generated academic success workshops for campus-wide presentation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-16 md:py-24 bg-cloud-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
              Professional Affiliations
            </h2>
            <p className="text-calm-charcoal/70">Organizations and associations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
              <Award className="h-12 w-12 mx-auto mb-4 text-deep-ocean" />
              <h3 className="text-xl font-bold mb-2 text-calm-charcoal">American Psychological Association</h3>
              <p className="text-calm-charcoal/70">Student Member</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
              <Award className="h-12 w-12 mx-auto mb-4 text-deep-ocean" />
              <h3 className="text-xl font-bold mb-2 text-calm-charcoal">Society for Research in Child Development</h3>
              <p className="text-calm-charcoal/70">Associate Member</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
              <Award className="h-12 w-12 mx-auto mb-4 text-deep-ocean" />
              <h3 className="text-xl font-bold mb-2 text-calm-charcoal">National Association of School Psychologists</h3>
              <p className="text-calm-charcoal/70">Student Affiliate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 md:py-24 bg-warm-sand">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">Beyond Psychology</h2>
            <p className="text-calm-charcoal/70">Personal interests and activities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-calm-charcoal/80">
                temp temp temp
                I like hiking
              </p>
              <p className="text-lg text-calm-charcoal/80">
                I am also passionate about making psychology more accessible to the general public and frequently
                participate in community education events about child development and mental health.
              </p>
              <div className="pt-4">
                <Button size="lg" asChild className="bg-deep-ocean hover:bg-deep-ocean/90 text-white shadow-lg hover:shadow-xl transition-all">
                  <Link href="/contact">
                    Connect with Ishan <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl ring-2 ring-deep-ocean/20">
              <Image src="/images/IMG_7175.jpg?height=800&width=600" alt="Ishan hiking" fill className="object-cover object-[center_20%]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


