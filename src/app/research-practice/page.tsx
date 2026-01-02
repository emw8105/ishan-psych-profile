import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, BookOpen, Brain, FileText, GraduationCap, Users } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"

export default function ResearchPracticePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-sky-blue/30 to-cloud-white py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-calm-charcoal mb-6">
                            Research & Practice
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700">
                            Exploring the intersection of academic research and clinical application in child psychology
                        </p>
                    </div>
                </div>
            </section>

            {/* Research Interests */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">Research Interests</h2>
                        <p className="text-gray-600">Current academic focus and ongoing research projects</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h3 className="font-playfair text-2xl font-bold text-calm-charcoal">Current Research Focus</h3>
                            <p className="text-lg text-gray-700">
                                Ishan&apos;s research focuses on understanding and addressing the psychological impact of trauma on
                                children&apos;s development and academic performance. His work examines how adverse childhood experiences
                                affect cognitive processes, emotional regulation, and social interactions in educational settings.
                            </p>
                            <p className="text-lg text-gray-700">
                                Through a combination of quantitative and qualitative methodologies, he investigates the effectiveness
                                of school-based interventions designed to support children who have experienced trauma, with a
                                particular emphasis on building resilience and promoting positive adaptation.
                            </p>
                            <div className="pt-4">
                                <Button variant="outline" size="lg" asChild>
                                    <Link href="#publications">
                                        View Publications <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
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
            <section className="py-16 md:py-24 bg-off-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">Areas of Expertise</h2>
                        <p className="text-gray-600">Specialized research and clinical practice areas</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Brain className="h-5 w-5 mr-2 text-primary" />
                                    Psychological Assessment
                                </CardTitle>
                                <CardDescription>Evaluation of cognitive, emotional, and behavioral functioning</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Cognitive and intellectual assessments</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Learning disability evaluations</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>ADHD and autism spectrum assessments</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <FileText className="h-5 w-5 mr-2 text-primary" />
                                    Trauma-Informed Care
                                </CardTitle>
                                <CardDescription>Supporting children who have experienced adverse events</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Trauma screening and assessment</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Trauma-focused cognitive behavioral therapy</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Resilience-building interventions</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                                    Therapeutic Approaches
                                </CardTitle>
                                <CardDescription>Evidence-based methods for child and adolescent therapy</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Cognitive-behavioral therapy (CBT)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Play therapy for younger children</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Trauma-focused interventions</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                                    School Psychology
                                </CardTitle>
                                <CardDescription>Supporting children&apos;s success in educational settings</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Educational planning and support</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Classroom behavior management strategies</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Teacher consultation and support</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Users className="h-5 w-5 mr-2 text-primary" />
                                    Family-Centered Approaches
                                </CardTitle>
                                <CardDescription>Supporting family relationships and communication</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Parent-child relationship therapy</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Family systems approach</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Parenting skills development</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Brain className="h-5 w-5 mr-2 text-primary" />
                                    Developmental Psychology
                                </CardTitle>
                                <CardDescription>Understanding typical and atypical child development</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Cognitive and emotional development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Social and relational development</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                                        <span>Developmental psychopathology</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Publications */}
            <section id="publications" className="py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
                            Selected Publications
                        </h2>
                        <p className="text-gray-600">Academic contributions to the field of child psychology</p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">School-Based Trauma Interventions: A Systematic Review</h3>
                            <p className="text-gray-500 mb-3">Journal of School Psychology, 2023</p>
                            <p className="text-gray-700 mb-4">
                                A comprehensive review of evidence-based interventions for addressing trauma in school settings, with
                                recommendations for implementation and future research directions.
                            </p>
                            <Button variant="outline" size="sm">
                                View Publication
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">
                                The Role of Play in Processing Traumatic Experiences: A Case Study Approach
                            </h3>
                            <p className="text-gray-500 mb-3">Child Development Perspectives, 2022</p>
                            <p className="text-gray-700 mb-4">
                                An examination of how structured play therapy can help children process and integrate traumatic
                                experiences, featuring detailed case studies and therapeutic outcomes.
                            </p>
                            <Button variant="outline" size="sm">
                                View Publication
                            </Button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">
                                Teacher Perceptions of Trauma-Informed Practices in Elementary Schools
                            </h3>
                            <p className="text-gray-500 mb-3">Educational Psychology Review, 2021</p>
                            <p className="text-gray-700 mb-4">
                                A mixed-methods study exploring how elementary school teachers understand and implement trauma-informed
                                practices in their classrooms, with implications for teacher training and support.
                            </p>
                            <Button variant="outline" size="sm">
                                View Publication
                            </Button>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Button size="lg" asChild>
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

