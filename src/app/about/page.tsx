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
              Doctoral candidate in Clinical Psychology with a focus on child and adolescent mental health
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
                src="/placeholder.svg?height=1000&width=800"
                alt="Ishan Vengurlekar"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl font-bold text-calm-charcoal">Biography</h2>
              <p className="text-lg text-gray-700">
                Ishan Vengurlekar is a doctoral candidate in Clinical Psychology, specializing in child and adolescent
                mental health. With a strong academic foundation and practical experience in evidence-based therapeutic
                approaches, Ishan is dedicated to understanding and addressing the unique psychological needs of young
                people.
              </p>
              <p className="text-lg text-gray-700">
                His journey into psychology began during his undergraduate studies, where he developed a fascination
                with developmental psychology and the factors that influence children&apos;s emotional and cognitive growth.
                This interest led him to pursue graduate studies focused specifically on clinical interventions for
                children facing psychological challenges.
              </p>
              <p className="text-lg text-gray-700">
                Currently completing his doctoral studies, Ishan is actively seeking clinical internship opportunities
                to further develop his expertise in school psychology and interventions for children facing emotional,
                behavioral, and developmental challenges.
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
                  <h4 className="text-xl font-bold mb-1">PhD in Clinical Psychology</h4>
                  <p className="text-gray-500 mb-3">University of Example, Expected 2025</p>
                  <p className="text-gray-700">
                    Dissertation: &quot;School-Based Interventions for Children Experiencing Trauma: A Mixed-Methods
                    Approach&quot;
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-1">Master&apos;s in Child Psychology</h4>
                  <p className="text-gray-500 mb-3">State University, 2020</p>
                  <p className="text-gray-700">
                    Thesis: &quot;The Impact of Play Therapy on Emotional Regulation in Children Ages 5-8&quot;
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-1">Bachelor of Science in Psychology</h4>
                  <p className="text-gray-500 mb-3">Liberal Arts College, 2018</p>
                  <p className="text-gray-700">Minor in Child Development</p>
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
                  <h4 className="text-xl font-bold mb-1">Clinical Practicum</h4>
                  <p className="text-gray-500 mb-3">Children&apos;s Wellness Center, 2022-Present</p>
                  <p className="text-gray-700">
                    Providing psychological assessments and therapy for children ages 5-17 under supervision
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-1">Research Assistant</h4>
                  <p className="text-gray-500 mb-3">Developmental Psychology Lab, 2020-2022</p>
                  <p className="text-gray-700">Assisted with research on childhood trauma and resilience factors</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold mb-1">School Psychology Intern</h4>
                  <p className="text-gray-500 mb-3">Public School District, 2021-2022</p>
                  <p className="text-gray-700">
                    Worked with school psychologists to support students with behavioral and learning challenges
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
                Outside of his academic and clinical work, Ishan enjoys hiking in the Bay Area&apos;s beautiful parks,
                practicing mindfulness meditation, and volunteering with local youth organizations. He believes that
                maintaining a balanced lifestyle enhances his ability to connect with and support the children and
                families he works with.
              </p>
              <p className="text-lg text-gray-700">
                Ishan is also passionate about making psychology more accessible to the general public and frequently
                participates in community education events about child development and mental health.
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
              <Image src="/placeholder.svg?height=800&width=600" alt="Ishan hiking" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

