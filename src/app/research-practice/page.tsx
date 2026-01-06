import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, BookOpen, Brain, FileText, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"

export default function ResearchPracticePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-warm-sand py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-calm-charcoal mb-6">
                            Research & Practice
                        </h1>
                        <p className="text-lg md:text-xl text-calm-charcoal/80">
                            Exploring the intersection of academic research and school-based applications in child psychology
                        </p>
                    </div>
                </div>
            </section>

            {/* Research Interests */}
            <section className="py-16 md:py-24 bg-cloud-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">Research Interests</h2>
                        <p className="text-calm-charcoal/70">Current academic focus and ongoing research projects</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="font-playfair text-2xl font-bold text-calm-charcoal">Current Research Focus</h3>
                            <p className="text-lg text-calm-charcoal/80">
                                My research focuses on advancing school-based mental health practices through rigorous
                                measurement development, universal screening, and evidence-based interventions. My work examines
                                the effectiveness of single-session interventions for youth experiencing internalizing concerns,
                                as well as the development and validation of brief mental health screening tools for educational settings.
                            </p>
                            <p className="text-lg text-calm-charcoal/80">
                                Through quantitative methodologies and psychometric analysis, I investigate how schools can efficiently
                                identify and support students&apos; mental health needs. My research emphasizes practical, scalable
                                approaches that can be implemented in diverse school contexts, with a particular focus on improving
                                early identification and intervention for students experiencing anxiety and depression.
                            </p>
                            <div className="pt-4">
                                <Button variant="outline" size="lg" asChild className="border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white transition-all">
                                    <Link href="#publications">
                                        View Publications <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl ring-2 ring-deep-ocean/20">
                            <Image
                                src="/placeholder.svg?height=800&width=600"
                                alt="Research visualization"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Areas */}
            <section id="research-areas" className="py-16 md:py-24 bg-gradient-to-br from-deep-ocean via-calm-charcoal to-deep-ocean">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cloud-white mb-4">Areas of Expertise</h2>
                        <p className="text-gray-300">Specialized research and practice areas</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card id="assessment" className="border-none shadow-lg bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                            <CardHeader>
                                <CardTitle className="flex items-center text-cloud-white">
                                    <Brain className="h-5 w-5 mr-2 text-soft-teal" />
                                    Psychological Assessment
                                </CardTitle>
                                <CardDescription className="text-gray-300">Comprehensive evaluation and measurement development</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Universal mental health screening</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Psychoeducational evaluations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Brief screening tool development and validation</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card id="interventions" className="border-none shadow-lg bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                            <CardHeader>
                                <CardTitle className="flex items-center text-cloud-white">
                                    <FileText className="h-5 w-5 mr-2 text-soft-teal" />
                                    Evidence-Based Interventions
                                </CardTitle>
                                <CardDescription className="text-gray-300">Supporting students with mental health concerns</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Single-session interventions for internalizing concerns</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Cognitive-behavioral approaches for anxiety and depression</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">School-based mental health support systems</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card id="measurement" className="border-none shadow-lg bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                            <CardHeader>
                                <CardTitle className="flex items-center text-cloud-white">
                                    <BookOpen className="h-5 w-5 mr-2 text-soft-teal" />
                                    Measurement & Psychometrics
                                </CardTitle>
                                <CardDescription className="text-gray-300">Research methodology and scale development</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Scale development and validation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Psychometric analysis and reliability testing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Quantitative research design</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                            <CardHeader>
                                <CardTitle className="flex items-center text-cloud-white">
                                    <GraduationCap className="h-5 w-5 mr-2 text-soft-teal" />
                                    School Psychology Practice
                                </CardTitle>
                                <CardDescription className="text-gray-300">Supporting student success in educational settings</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Comprehensive psychoeducational evaluations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Multi-tiered systems of support (MTSS)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Teacher and parent consultation</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                            <CardHeader>
                                <CardTitle className="flex items-center text-cloud-white">
                                    <Users className="h-5 w-5 mr-2 text-soft-teal" />
                                    Collaboration & Systems
                                </CardTitle>
                                <CardDescription className="text-gray-300">Working with schools, families, and communities</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Multidisciplinary team collaboration</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">School-family-community partnerships</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Crisis prevention and intervention</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                            <CardHeader>
                                <CardTitle className="flex items-center text-cloud-white">
                                    <Brain className="h-5 w-5 mr-2 text-soft-teal" />
                                    Research Translation
                                </CardTitle>
                                <CardDescription className="text-gray-300">Bridging research and practice</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Implementation science in schools</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Program evaluation and outcomes monitoring</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Evidence-based practice dissemination</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Publications */}
            <section id="publications" className="py-16 md:py-24 bg-warm-sand">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
                            Selected Publications
                        </h2>
                        <p className="text-calm-charcoal/70">Recent peer-reviewed contributions to school psychology research</p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
                            <h3 className="text-xl font-bold mb-2 text-calm-charcoal">
                                The Internalizing Symptoms Screener for Children: Psychometric Properties and Validity Evidence
                            </h3>
                            <p className="text-deep-ocean mb-3">School Psychology, 2024</p>
                            <p className="text-calm-charcoal/80 mb-4">
                                Development and validation of a brief screening tool for internalizing symptoms in school-aged
                                children, demonstrating strong psychometric properties and practical utility in educational settings.
                            </p>
                            <Button variant="outline" size="sm" className="border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white transition-all">
                                View Publication
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
                            <h3 className="text-xl font-bold mb-2 text-calm-charcoal">
                                Universal Mental Health Screening Implementation: Lessons Learned from a Federally-Funded Initiative
                            </h3>
                            <p className="text-deep-ocean mb-3">Journal of Applied School Psychology, 2024</p>
                            <p className="text-calm-charcoal/80 mb-4">
                                Examination of implementation factors and outcomes from a large-scale universal mental health
                                screening program in schools, providing practical guidance for administrators and practitioners.
                            </p>
                            <Button variant="outline" size="sm" className="border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white transition-all">
                                View Publication
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
                            <h3 className="text-xl font-bold mb-2 text-calm-charcoal">
                                Single-Session Interventions for Youth Internalizing Concerns: A Meta-Analysis
                            </h3>
                            <p className="text-deep-ocean mb-3">Clinical Psychology Review, 2024</p>
                            <p className="text-calm-charcoal/80 mb-4">
                                Comprehensive meta-analysis examining the effectiveness of single-session interventions for
                                adolescents experiencing anxiety and depression, with implications for school-based mental health services.
                            </p>
                            <Button variant="outline" size="sm" className="border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white transition-all">
                                View Publication
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
                            <h3 className="text-xl font-bold mb-2 text-calm-charcoal">
                                Brief Assessment Tools in School Mental Health: A Systematic Review
                            </h3>
                            <p className="text-deep-ocean mb-3">Assessment for Effective Intervention, 2023</p>
                            <p className="text-calm-charcoal/80 mb-4">
                                Systematic review of brief mental health assessment tools suitable for school settings, evaluating
                                psychometric properties and practical considerations for implementation.
                            </p>
                            <Button variant="outline" size="sm" className="border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white transition-all">
                                View Publication
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg border border-deep-ocean/20 hover:border-deep-ocean/40 transition-all">
                            <h3 className="text-xl font-bold mb-2 text-calm-charcoal">
                                Equity in Universal Screening: Examining Measurement Invariance Across Student Demographics
                            </h3>
                            <p className="text-deep-ocean mb-3">School Psychology Review, 2023</p>
                            <p className="text-calm-charcoal/80 mb-4">
                                Investigation of measurement equivalence in universal screening tools across diverse student
                                populations, with focus on ensuring equitable identification of mental health needs.
                            </p>
                            <Button variant="outline" size="sm" className="border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white transition-all">
                                View Publication
                            </Button>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-calm-charcoal/80 mb-6">
                            I have contributed to 12 peer-reviewed journal articles, 2 book chapters, and have 7 manuscripts
                            currently in progress. I have also received over $8,700 in research grants and presented at 17
                            professional conferences.
                        </p>
                        <Button size="lg" asChild className="bg-deep-ocean hover:bg-deep-ocean/90 text-white shadow-lg hover:shadow-xl transition-all">
                            <Link href="/contact">
                                Discuss Research Collaboration <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}


