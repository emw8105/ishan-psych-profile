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

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-cloud-white flex items-center">
                <GraduationCap className="h-6 w-6 mr-2 text-soft-teal" />
                Education
              </h3>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                  <h4 className="text-xl font-bold mb-1 text-cloud-white">Ph.D. in School Psychology</h4>
                  <p className="text-soft-teal mb-3">University of Wisconsin-Madison | Expected May 2027</p>
                  <p className="text-gray-300">
                    Primary Advisor: Dr. Stephen Kilgus
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                  <h4 className="text-xl font-bold mb-1 text-cloud-white">M.S. in School Psychology</h4>
                  <p className="text-soft-teal mb-3">University of Wisconsin-Madison | August 2023</p>
                  <p className="text-gray-300">
                    GPA: 4.00/4.00 | Primary Advisor: Dr. Stephen Kilgus
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                  <h4 className="text-xl font-bold mb-1 text-cloud-white">B.A. in Psychology</h4>
                  <p className="text-soft-teal mb-3">University of Arkansas | May 2022</p>
                  <p className="text-gray-300">
                    GPA: 4.00/4.00 | Social Work Minor | First-Ranked Senior Scholar | Primary Advisor: Dr. Timothy Cavell
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-cloud-white flex items-center">
                <BookOpen className="h-6 w-6 mr-2 text-soft-teal" />
                Professional Experience
              </h3>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                  <h4 className="text-xl font-bold mb-1 text-cloud-white">Advanced Practicum Student</h4>
                  <p className="text-soft-teal mb-3">Middleton-Cross Plains Area School District, January 2025-Present</p>
                  <p className="text-gray-300">
                    Advanced practicum experience providing comprehensive school psychology services including assessment,
                    intervention, and consultation in a diverse K-12 setting.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                  <h4 className="text-xl font-bold mb-1 text-cloud-white">Advanced Practicum Student</h4>
                  <p className="text-soft-teal mb-3">Madison Metropolitan School District, January 2025-Present</p>
                  <p className="text-gray-300">
                    Conducting comprehensive psychoeducational evaluations, implementing evidence-based interventions, and
                    collaborating with multidisciplinary teams to support student mental health and academic success.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                  <h4 className="text-xl font-bold mb-1 text-cloud-white">Advanced Clinician</h4>
                  <p className="text-soft-teal mb-3">School Psychology Training Clinic, UW-Madison, August 2024-May 2025</p>
                  <p className="text-gray-300">
                    Provided advanced clinical services including comprehensive psychoeducational assessments, individual and
                    group counseling, and consultation services to children, adolescents, and families.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                  <h4 className="text-xl font-bold mb-1 text-cloud-white">Graduate Research Assistant</h4>
                  <p className="text-soft-teal mb-3">Eklund and Kilgus Lab, UW-Madison, August 2022-Present</p>
                  <p className="text-gray-300">
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


