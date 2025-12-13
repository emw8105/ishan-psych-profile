import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Ishan's picture */}
      <section className="relative bg-gradient-to-br from-sky-blue/20 via-cloud-white to-soft-peach/20 py-20 md:py-32">
        <div className="container grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-calm-charcoal leading-tight">
              Compassionate Psychological Care for Children
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Ishan Vengurlekar is a doctoral candidate in Clinical Psychology specializing in child and adolescent
              mental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button variant="outline" size="lg" asChild>
                <Link href="/research-practice">
                  Explore Research <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
            <Image src="/images/IshanHeroCropped.jpg" alt="Ishan Vengurlekar" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">Core Values</h2>
            <p className="text-lg text-gray-600">Guiding principles that inform Ishan's approach to psychology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center p-8 bg-gradient-to-br from-white to-sky-blue/5">
              <CardContent className="pt-4">
                <div className="bg-soft-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-soft-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-calm-charcoal">Compassionate Care</h3>
                <p className="text-gray-600 leading-relaxed">
                  Approaching each child with empathy, understanding, and genuine care for their well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center p-8 bg-gradient-to-br from-white to-sky-blue/5">
              <CardContent className="pt-4">
                <div className="bg-soft-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-soft-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-calm-charcoal">Evidence-Based Practice</h3>
                <p className="text-gray-600 leading-relaxed">
                  Utilizing research-backed approaches to ensure effective and reliable psychological interventions.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center p-8 bg-gradient-to-br from-white to-sky-blue/5">
              <CardContent className="pt-4">
                <div className="bg-soft-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-soft-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-calm-charcoal">Holistic Perspective</h3>
                <p className="text-gray-600 leading-relaxed">
                  Considering the whole child within their family, school, and community contexts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-soft-peach/10 via-cloud-white to-sky-blue/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative h-[450px] rounded-2xl overflow-hidden shadow-xl ring-1 ring-gray-200">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Ishan Vengurlekar"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-6">
                Meet Ishan Vengurlekar
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ishan is a doctoral candidate in Clinical Psychology with a passion for understanding and supporting
                children's mental health and development. His approach combines rigorous academic research with
                compassionate clinical practice.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently completing his doctoral studies, Ishan is actively seeking clinical internship opportunities
                to further develop his expertise in school psychology and interventions for children facing emotional,
                behavioral, and developmental challenges.
              </p>
              <Button variant="outline" size="lg" asChild className="mt-4">
                <Link href="/about">
                  Learn More About Ishan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus Preview */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">Areas of Focus</h2>
            <p className="text-lg text-gray-600">
              Specialized research and clinical interests in child and adolescent psychology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-sky-blue/10 to-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-calm-charcoal">Child Psychology</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Understanding developmental processes and supporting children's mental health
              </p>
              <Link href="/research-practice" className="text-soft-teal hover:text-soft-teal/80 font-medium inline-flex items-center transition-colors">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-soft-peach/10 to-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-calm-charcoal">School Psychology</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Promoting academic success and emotional well-being in educational settings
              </p>
              <Link href="/research-practice" className="text-soft-teal hover:text-soft-teal/80 font-medium inline-flex items-center transition-colors">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-sky-blue/10 to-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-calm-charcoal">Trauma & Resilience</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Researching childhood trauma and developing effective interventions</p>
              <Link href="/research-practice" className="text-soft-teal hover:text-soft-teal/80 font-medium inline-flex items-center transition-colors">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-soft-peach/10 to-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-calm-charcoal">Mentoring</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Supporting the next generation of psychology professionals</p>
              <Link href="/mentoring" className="text-soft-teal hover:text-soft-teal/80 font-medium inline-flex items-center transition-colors">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/research-practice">
                Explore All Research Areas <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-sky-blue/15 via-soft-peach/10 to-cloud-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-6">Connect with Ishan</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For professional inquiries, research collaboration, or mentoring opportunities
            </p>
            <Button size="lg" asChild className="shadow-md">
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

