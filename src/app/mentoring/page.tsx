import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, BookOpen, GraduationCap, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

export default function MentoringPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-sky-blue/30 to-cloud-white py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-calm-charcoal mb-6">Mentoring</h1>
                        <p className="text-lg md:text-xl text-gray-700">
                            Supporting the next generation of psychology professionals
                        </p>
                    </div>
                </div>
            </section>

            {/* Mentoring Philosophy */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
                                Mentoring Philosophy
                            </h2>
                            <p className="text-lg text-gray-700">
                                Ishan believes that mentoring is a collaborative journey where both mentor and mentee grow through
                                shared learning experiences. His approach to mentoring is guided by principles of empowerment,
                                curiosity, and evidence-based practice.
                            </p>
                            <p className="text-lg text-gray-700">
                                As a mentor, Ishan strives to create a supportive environment where students and early-career
                                professionals can explore their interests, develop their skills, and navigate the challenges of academic
                                and clinical work in psychology.
                            </p>
                            <p className="text-lg text-gray-700">
                                His goal is not just to share knowledge, but to foster critical thinking, ethical practice, and a
                                lifelong commitment to learning and professional development.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/placeholder.svg?height=800&width=600"
                                alt="Ishan mentoring students"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mentoring Areas */}
            <section className="py-16 md:py-24 bg-off-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">Mentoring Areas</h2>
                        <p className="text-gray-600">Ways Ishan supports students and early-career professionals</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="border-none shadow-md">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <BookOpen className="h-6 w-6 mr-2 text-primary" />
                                    Research Mentorship
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-700">
                                    Guidance on research design, methodology, and publication in child psychology, with a focus on:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Developing research questions and hypotheses</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Selecting appropriate methodologies</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Data analysis and interpretation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Academic writing and publication</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <Users className="h-6 w-6 mr-2 text-primary" />
                                    Academic Development
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-700">
                                    Support for students developing their academic and research skills in school psychology, including:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Research proposal development and refinement</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Data analysis and interpretation techniques</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Ethical considerations in research practice</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Professional presentation and communication skills</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <GraduationCap className="h-6 w-6 mr-2 text-primary" />
                                    Career Development
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-700">
                                    Advice on educational pathways, internships, and professional opportunities, focusing on:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Graduate school applications and selection</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Internship and practicum placements</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>CV and personal statement development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Professional networking and collaboration</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl">
                                    <MessageSquare className="h-6 w-6 mr-2 text-primary" />
                                    Workshops & Seminars
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-700">
                                    Educational sessions on specialized topics in child and adolescent psychology, including:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Trauma-informed care in educational settings</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Play therapy techniques and applications</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Assessment tools and interpretation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Evidence-based interventions for specific disorders</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
                            Mentee Testimonials
                        </h2>
                        <p className="text-gray-600">What students and colleagues say about Ishan&apos;s mentorship</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Sarah J.</h3>
                                    <p className="text-gray-500 text-sm">Graduate Student</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                &quot;Ishan&apos;s guidance was instrumental in helping me refine my research methodology. His attention to detail
                                and thoughtful feedback significantly improved the quality of my work.&quot;
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Michael T.</h3>
                                    <p className="text-gray-500 text-sm">Undergraduate Researcher</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                &quot;Working with Ishan on my honors thesis was an incredible learning experience. He challenged me to think
                                critically while providing the support I needed to succeed.&quot;
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                                    <Users className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold">Elena R.</h3>
                                    <p className="text-gray-500 text-sm">Clinical Psychology Student</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">
                                &quot;Ishan&apos;s mentorship during my research project helped me develop confidence in my research skills.
                                His feedback was always constructive and focused on growth.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Involved */}
            <section className="py-16 md:py-24 bg-primary/10">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
                            Interested in Mentorship?
                        </h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Ishan is currently accepting a limited number of mentees for research collaboration and career guidance.
                        </p>
                        <Button size="lg" asChild>
                            <Link href="/contact">
                                Inquire About Mentorship <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

