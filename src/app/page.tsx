import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Ishan's picture */}
      <section className="relative bg-gradient-to-r from-sky-blue/30 to-cloud-white py-16 md:py-24">
        <div className="container grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-calm-charcoal leading-tight">
              Compassionate Psychological Care for Children
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-md">
              Ishan Vengurlekar is a doctoral candidate in Clinical Psychology specializing in child and adolescent
              mental health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image src="/images/IshanHeroCropped.jpg" alt="Ishan Vengurlekar" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-off-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">Core Values</h2>
            <p className="text-gray-600">Guiding principles that inform Ishan's approach to psychology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow text-center p-6">
              <CardContent className="pt-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compassionate Care</h3>
                <p className="text-gray-600">
                  Approaching each child with empathy, understanding, and genuine care for their well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow text-center p-6">
              <CardContent className="pt-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Evidence-Based Practice</h3>
                <p className="text-gray-600">
                  Utilizing research-backed approaches to ensure effective and reliable psychological interventions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow text-center p-6">
              <CardContent className="pt-4">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Holistic Perspective</h3>
                <p className="text-gray-600">
                  Considering the whole child within their family, school, and community contexts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
                Meet Ishan Vengurlekar
              </h2>
              <p className="text-lg text-gray-700">
                Ishan is a doctoral candidate in Clinical Psychology with a passion for understanding and supporting
                children's mental health and development. His approach combines rigorous academic research with
                compassionate clinical practice.
              </p>
              <p className="text-lg text-gray-700">
                Currently completing his doctoral studies, Ishan is actively seeking clinical internship opportunities
                to further develop his expertise in school psychology and interventions for children facing emotional,
                behavioral, and developmental challenges.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">
                  Learn More About Ishan <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Ishan Vengurlekar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Focus Preview */}
      <section className="py-16 bg-off-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">Areas of Focus</h2>
            <p className="text-gray-600">
              Specialized research and clinical interests in child and adolescent psychology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Child Psychology</h3>
              <p className="text-gray-600 mb-4">
                Understanding developmental processes and supporting children's mental health
              </p>
              <Link href="/research-practice" className="text-primary hover:underline">
                Learn more
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">School Psychology</h3>
              <p className="text-gray-600 mb-4">
                Promoting academic success and emotional well-being in educational settings
              </p>
              <Link href="/research-practice" className="text-primary hover:underline">
                Learn more
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Trauma & Resilience</h3>
              <p className="text-gray-600 mb-4">Researching childhood trauma and developing effective interventions</p>
              <Link href="/research-practice" className="text-primary hover:underline">
                Learn more
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Mentoring</h3>
              <p className="text-gray-600 mb-4">Supporting the next generation of psychology professionals</p>
              <Link href="/mentoring" className="text-primary hover:underline">
                Learn more
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
      <section className="py-16 md:py-20 bg-primary/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">Connect with Ishan</h2>
            <p className="text-lg text-gray-700 mb-8">
              For professional inquiries, research collaboration, or mentoring opportunities
            </p>
            <Button size="lg" asChild>
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

