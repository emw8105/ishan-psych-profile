import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Ishan's picture */}
      <section className="relative bg-warm-sand py-20 md:py-32">
        <div className="container grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold text-calm-charcoal leading-tight">
              Compassionate Psychological Care for Children
            </h1>
            <p className="text-lg md:text-xl text-calm-charcoal/80 leading-relaxed">
              Doctoral candidate in School Psychology specializing in research and interventions for children and adolescents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="outline" size="lg" asChild className="border-sky-blue/60 text-sky-blue hover:bg-sky-blue hover:text-white transition-all">
                <Link href="/research-practice">
                  Explore Research <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" asChild className="bg-sky-blue hover:bg-sky-blue/90 text-white shadow-lg hover:shadow-xl transition-all">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl ring-2 ring-sky-blue/20 hover:ring-sky-blue/40 transition-all">
            <Image src="/images/IshanHeroCropped.jpg" alt="Ishan Vengurlekar" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-20 md:py-28 bg-cloud-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[450px] rounded-2xl overflow-hidden shadow-xl ring-2 ring-gray-200 hover:ring-sky-blue/40 transition-all">
              <Image
                src="/images/906568B1-8689-44CF-AC23-C393B42F1C98.jpg?height=800&width=600"
                alt="Ishan Vengurlekar"
                fill
                className="object-cover object-[center_55%]"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-6">
                Meet Ishan Vengurlekar
              </h2>
              <p className="text-lg text-calm-charcoal/80 leading-relaxed">
                I am a doctoral candidate in School Psychology with a passion for understanding and supporting
                children&apos;s mental health and development. My approach combines rigorous academic research with
                practical applications in educational settings.
              </p>
              <p className="text-lg text-calm-charcoal/80 leading-relaxed">
                Currently completing my doctoral studies, I am actively seeking opportunities to contribute to the field through research collaboration, internships focused on school-based interventions, and working with children facing emotional, behavioral, and developmental challenges.
              </p>
              <Button variant="outline" size="lg" asChild className="mt-4 border-sky-blue/60 text-sky-blue hover:bg-sky-blue hover:text-white transition-all">
                <Link href="/about">
                  Learn More About Ishan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus Preview */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-deep-ocean via-calm-charcoal to-deep-ocean">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cloud-white mb-4">Areas of Focus</h2>
            <p className="text-lg text-gray-300">
              Specialized research and clinical interests in child and adolescent psychology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-soft-teal/15 to-transparent p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-soft-teal/40 backdrop-blur-sm hover:border-soft-teal/60 flex flex-col h-full group">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3 text-cloud-white group-hover:text-soft-teal transition-colors">Psychological Assessment</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Universal screening and measurement development for school-based mental health
                </p>
              </div>
              <Link href="/research-practice#assessment" className="text-soft-teal hover:text-sky-blue font-medium inline-flex items-center transition-colors mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-soft-teal/15 to-transparent p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-soft-teal/40 backdrop-blur-sm hover:border-soft-teal/60 flex flex-col h-full group">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3 text-cloud-white group-hover:text-soft-teal transition-colors">Evidence-Based Interventions</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Single-session interventions for youth experiencing internalizing concerns
                </p>
              </div>
              <Link href="/research-practice#interventions" className="text-soft-teal hover:text-sky-blue font-medium inline-flex items-center transition-colors mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-soft-teal/15 to-transparent p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-soft-teal/40 backdrop-blur-sm hover:border-soft-teal/60 flex flex-col h-full group">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3 text-cloud-white group-hover:text-soft-teal transition-colors">Measurement & Psychometrics</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Scale development and validation for school psychology research</p>
              </div>
              <Link href="/research-practice#measurement" className="text-soft-teal hover:text-sky-blue font-medium inline-flex items-center transition-colors mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-soft-teal/15 to-transparent p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-soft-teal/40 backdrop-blur-sm hover:border-soft-teal/60 flex flex-col h-full group">
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-3 text-cloud-white group-hover:text-soft-teal transition-colors">Research Mentorship</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">Supporting the next generation of school psychology researchers</p>
              </div>
              <Link href="/mentoring" className="text-soft-teal hover:text-sky-blue font-medium inline-flex items-center transition-colors mt-auto">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild className="bg-soft-teal hover:bg-soft-teal/90 text-white shadow-lg hover:shadow-xl transition-all">
              <Link href="/research-practice">
                Explore All Research Areas <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-deep-ocean/5 via-warm-sand to-warm-sand">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-12 md:p-16 border border-soft-teal/20">
              <div className="text-center space-y-6">
                <h2 className="font-playfair text-3xl md:text-5xl font-bold text-calm-charcoal">Connect with Ishan</h2>
                <p className="text-lg md:text-xl text-calm-charcoal/80 leading-relaxed max-w-2xl mx-auto">
                  For professional inquiries, research collaboration, or mentoring opportunities
                </p>
                <div className="pt-4">
                  <Button size="lg" asChild className="bg-soft-teal hover:bg-soft-teal/90 text-white shadow-lg hover:shadow-xl transition-all">
                    <Link href="/contact">
                      Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

