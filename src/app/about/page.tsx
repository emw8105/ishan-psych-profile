import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, BookOpen, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-blue/30 to-cloud-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-calm-charcoal mb-6">
              About Ishan Vengurlekar
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Doctoral candidate in School Psychology with a focus on research in child and adolescent mental health
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/Ishan_Vengurlekar.jpg?height=1000&width=800"
                alt="Ishan Vengurlekar"
                fill
                className="object-cover object-[center_17%]"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl font-bold text-calm-charcoal">Biography</h2>
              <p className="text-lg text-gray-700">
                I am a doctoral candidate in School Psychology at the University of Wisconsin-Madison, specializing in research on child and adolescent mental health. With a strong academic foundation in evidence-based research approaches, I am dedicated to understanding and addressing the unique psychological needs of young people in educational settings.
              </p>
              <p className="text-lg text-gray-700">
                My research focuses on school-based mental health interventions, single-session interventions, and supporting students experiencing internalizing concerns. Through rigorous quantitative and qualitative methodologies, I investigate effective strategies to support student well-being in schools.
              </p>
              <p className="text-lg text-gray-700">
                Currently completing my doctoral studies under the mentorship of Dr. Stephen Kilgus, I am actively conducting research and gaining practical experience through advanced practica in the Madison Metropolitan School District and surrounding areas, with a focus on advancing the field through evidence-based practice and research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
              Education & Experience
            </h2>
            <p className="text-gray-600">Academic background and professional development</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-calm-charcoal flex items-center">
                <GraduationCap className="h-6 w-6 mr-2 text-primary" />
                Education
              </h3>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-1">Ph.D. in School Psychology</h4>
                  <p className="text-gray-500 mb-3">University of Wisconsin-Madison | Expected May 2027</p>
                  <p className="text-gray-700">
                    Primary Advisor: Dr. Stephen Kilgus
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-1">M.S. in School Psychology</h4>
                  <p className="text-gray-500 mb-3">University of Wisconsin-Madison | August 2023</p>
                  <p className="text-gray-700">
                    GPA: 4.00/4.00 | Primary Advisor: Dr. Stephen Kilgus
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-1">B.A. in Psychology</h4>
                  <p className="text-gray-500 mb-3">University of Arkansas | May 2022</p>
                  <p className="text-gray-700">
                    GPA: 4.00/4.00 | Social Work Minor | First-Ranked Senior Scholar | Primary Advisor: Dr. Timothy Cavell
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-calm-charcoal flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-primary" />
                Professional Experience
              </h3>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-1">School Psychologist Intern</h4>
                  <p className="text-gray-500 mb-3">Middleton-Cross Plains Area School District, January 2025-Present</p>
                  <p className="text-gray-700">
                    Advanced practicum experience providing comprehensive school psychology services including assessment,
                    intervention, and consultation in a diverse K-12 setting.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-1">School Psychologist Intern</h4>
                  <p className="text-gray-500 mb-3">Madison Metropolitan School District, January 2025-Present</p>
                  <p className="text-gray-700">
                    Conducting comprehensive psychoeducational evaluations, implementing evidence-based interventions, and
                    collaborating with multidisciplinary teams to support student mental health and academic success.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-1">Advanced Clinician</h4>
                  <p className="text-gray-500 mb-3">School Psychology Training Clinic, UW-Madison, August 2024-May 2025</p>
                  <p className="text-gray-700">
                    Provided advanced clinical services including comprehensive psychoeducational assessments, individual and
                    group counseling, and consultation services to children, adolescents, and families.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-1">Graduate Research Assistant</h4>
                  <p className="text-gray-500 mb-3">Eklund and Kilgus Lab, UW-Madison, August 2022-Present</p>
                  <p className="text-gray-700">
                    Leading research projects on school-based mental health screening, single-session interventions, and
                    measurement development. Managing multiple federally-funded studies and mentoring undergraduate researchers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Affiliations */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
              Professional Affiliations
            </h2>
            <p className="text-gray-600">Organizations and associations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">American Psychological Association</h3>
              <p className="text-gray-600">Student Member</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Society for Research in Child Development</h3>
              <p className="text-gray-600">Associate Member</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">National Association of School Psychologists</h3>
              <p className="text-gray-600">Student Affiliate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">Beyond Psychology</h2>
            <p className="text-gray-600">Personal interests and activities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                temp temp temp
                I like hiking
              </p>
              <p className="text-lg text-gray-700">
                I am also passionate about making psychology more accessible to the general public and frequently
                participate in community education events about child development and mental health.
              </p>
              <div className="pt-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Connect with Ishan <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/images/IMG_7175.jpg?height=800&width=600" alt="Ishan hiking" fill className="object-cover object-[center_20%]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

