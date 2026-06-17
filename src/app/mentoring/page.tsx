import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"

export default function MentoringPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-warm-sand py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-calm-charcoal mb-6">Mentoring</h1>
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
                                Ishan believes that mentoring is a collaborative journey where both mentor and mentee grow through
                                shared learning experiences. His approach emphasizes empowering students to develop their own
                                research interests while providing structured guidance on methodological rigor and scientific thinking.
                            </p>
                            <p className="text-lg text-calm-charcoal/80">
                                As a mentor, Ishan creates a supportive environment where students can explore research questions,
                                develop technical skills in measurement and analysis, and navigate the challenges of academic work.
                                He is particularly committed to mentoring undergraduate researchers and helping them discover their
                                potential in the field of psychology.
                            </p>
                            <p className="text-lg text-calm-charcoal/80">
                                His goal is not just to share knowledge, but to foster critical thinking, ethical research practices,
                                and a lifelong commitment to evidence-based approaches that can improve outcomes for a variety of
                                populations.
                            </p>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl ring-2 ring-deep-ocean/20">
                            <Image
                                src="/images/IMG_6306.jpg?height=800&width=600"
                                alt="Ishan mentoring students"
                                fill
                                className="object-cover object-[center_65%]"
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
                                    Research Mentorship
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-300">
                                    Guidance on research design, methodology, and publication in school psychology, with a focus on:
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Developing research questions in school mental health</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Quantitative research design and psychometric analysis</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Statistical analysis and data interpretation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Academic writing, manuscript preparation, and publication</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl text-cloud-white">
                                    Academic Development
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-300">
                                    Support for students developing their academic and research skills in school psychology, including:
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Grant writing and research funding applications</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Research project management and coordination</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Ethical considerations in school-based research</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Conference presentations and professional communication</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl text-cloud-white">
                                    Career Development
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-300">
                                    Advice on educational pathways, internships, and professional opportunities, focusing on:
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Graduate school applications and selection</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Internship and practicum placements</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>CV and personal statement development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Professional networking and collaboration</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl text-cloud-white">
                                    Workshops & Seminars
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-gray-300">
                                    Educational sessions on research topics and methodologies in school psychology, including:
                                </p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Universal mental health screening in schools</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Single-session interventions for youth</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
                                        <span>Scale development and psychometric validation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mt-2 mr-2 h-2 w-2 rotate-45 shrink-0 bg-soft-teal/80"></span>
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
                        <p className="text-calm-charcoal/70">What students and colleagues say about Ishan&apos;s mentorship</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-deep-ocean/20 rounded-full flex items-center justify-center mr-4">
                                    <Users className="h-6 w-6 text-deep-ocean" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-calm-charcoal">Koushik Thudi</h3>
                                    <p className="text-calm-charcoal/60 text-sm">Research Collaborator</p>
                                </div>
                            </div>
                            <p className="text-calm-charcoal/80 italic">
                                &quot;Ishan&apos;s ability to comprehend research at a deep level was invaluable in helping me achieve multiple research awards. His insightfulness and willingness to learn new topics made writing research papers on various topics fun and engaging.&quot;
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-deep-ocean/20 rounded-full flex items-center justify-center mr-4">
                                    <Users className="h-6 w-6 text-deep-ocean" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-calm-charcoal">Dasha Ellalasingham</h3>
                                    <p className="text-calm-charcoal/60 text-sm">Graduate School Mentee</p>
                                </div>
                            </div>
                            <p className="text-calm-charcoal/80 italic">
                                &quot;Ishan has served as my mentor since before I started my undergraduate studies and well into my graduate school career. I attribute most of my professional success to his guidance. He has generously facilitated numerous research opportunities for me to partake in, guided me through the arduous graduate school application process, and continues to serve as a role model and mentor who takes a genuine interest in my success and my individual journey.&quot;
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
                            Ishan is currently accepting a limited number of mentees for research collaboration and career guidance.
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


