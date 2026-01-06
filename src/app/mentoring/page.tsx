import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, Users, BookOpen, GraduationCap, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

export default function MentoringPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-warm-sand py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-calm-charcoal mb-6">Mentoring</h1>
                        <p className="text-lg md:text-xl text-calm-charcoal/80">
                            Supporting the next generation of psychology professionals
                        </p>
                    </div>
                </div>
            </section>

            {/* Mentoring Philosophy */}
            <section className="py-16 md:py-24 bg-cloud-white">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
                                Mentoring Philosophy
                            </h2>
                            <p className="text-lg text-calm-charcoal/80">
                                I believe that mentoring is a collaborative journey where both mentor and mentee grow through
                                shared learning experiences. My approach emphasizes empowering students to develop their own
                                research interests while providing structured guidance on methodological rigor and scientific thinking.
                            </p>
                            <p className="text-lg text-calm-charcoal/80">
                                As a mentor, I create a supportive environment where students can explore research questions,
                                develop technical skills in measurement and analysis, and navigate the challenges of academic work.
                                I am particularly committed to mentoring undergraduate researchers and helping them discover their
                                potential in the field of school psychology.
                            </p>
                            <p className="text-lg text-calm-charcoal/80">
                                My goal is not just to share knowledge, but to foster critical thinking, ethical research practices,
                                and a lifelong commitment to evidence-based approaches that can improve outcomes for children and
                                adolescents in schools.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl ring-2 ring-deep-ocean/20">
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
            <section className="py-16 md:py-24 bg-gradient-to-br from-deep-ocean via-calm-charcoal to-deep-ocean">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cloud-white mb-4">Mentoring Areas</h2>
                        <p className="text-gray-300">Ways Ishan supports students and early-career professionals</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl text-cloud-white">
                                    <BookOpen className="h-6 w-6 mr-2 text-soft-teal" />
                                    Research Mentorship
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-300">
                                    Guidance on research design, methodology, and publication in school psychology, with a focus on:
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Developing research questions in school mental health</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Quantitative research design and psychometric analysis</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Statistical analysis and data interpretation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Academic writing, manuscript preparation, and publication</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl text-cloud-white">
                                    <Users className="h-6 w-6 mr-2 text-soft-teal" />
                                    Academic Development
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-300">
                                    Support for students developing their academic and research skills in school psychology, including:
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Grant writing and research funding applications</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Research project management and coordination</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Ethical considerations in school-based research</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Conference presentations and professional communication</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl text-cloud-white">
                                    <GraduationCap className="h-6 w-6 mr-2 text-soft-teal" />
                                    Career Development
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-300">
                                    Advice on educational pathways, internships, and professional opportunities, focusing on:
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Graduate school applications and selection</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Internship and practicum placements</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>CV and personal statement development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Professional networking and collaboration</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl text-cloud-white">
                                    <MessageSquare className="h-6 w-6 mr-2 text-soft-teal" />
                                    Workshops & Seminars
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-300">
                                    Educational sessions on research topics and methodologies in school psychology, including:
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Universal mental health screening in schools</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Single-session interventions for youth</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Scale development and psychometric validation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span>Evidence-based practices in school psychology</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 md:py-24 bg-warm-sand">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
                            Mentee Testimonials
                        </h2>
                        <p className="text-calm-charcoal/70">What students and colleagues say about my mentorship</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-deep-ocean/20 rounded-full flex items-center justify-center mr-4">
                                    <Users className="h-6 w-6 text-deep-ocean" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-calm-charcoal">Emily K.</h3>
                                    <p className="text-calm-charcoal/60 text-sm">Undergraduate Research Assistant</p>
                                </div>
                            </div>
                            <p className="text-calm-charcoal/80 italic">
                                &quot;Ishan&apos;s mentorship in the lab helped me develop strong quantitative research skills and
                                confidence in conducting school psychology research. His patient guidance made complex statistical
                                concepts accessible and engaging.&quot;
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-deep-ocean/20 rounded-full flex items-center justify-center mr-4">
                                    <Users className="h-6 w-6 text-deep-ocean" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-calm-charcoal">Marcus T.</h3>
                                    <p className="text-calm-charcoal/60 text-sm">Graduate Student</p>
                                </div>
                            </div>
                            <p className="text-calm-charcoal/80 italic">
                                &quot;Working with Ishan on federally-funded research projects taught me invaluable lessons about
                                project management, collaboration, and the rigor needed for impactful school psychology research.&quot;
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-deep-ocean/20 rounded-full flex items-center justify-center mr-4">
                                    <Users className="h-6 w-6 text-deep-ocean" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-calm-charcoal">Priya S.</h3>
                                    <p className="text-calm-charcoal/60 text-sm">School Psychology Student</p>
                                </div>
                            </div>
                            <p className="text-calm-charcoal/80 italic">
                                &quot;Ishan&apos;s feedback on my grant proposal was instrumental in helping me secure funding.
                                His attention to detail and understanding of school-based research really strengthened my work.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Involved */}
            <section className="py-16 md:py-24 bg-cloud-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
                            Interested in Mentorship?
                        </h2>
                        <p className="text-lg text-calm-charcoal/80 mb-8">
                            I am currently accepting a limited number of mentees for research collaboration and career guidance.
                        </p>
                        <Button
                            size="lg"
                            asChild
                            className="bg-deep-ocean hover:bg-deep-ocean/90 text-white"
                        >
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


