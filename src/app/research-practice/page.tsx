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
                        <h1 className="font-playfair text-4xl md:text-6xl font-bold text-calm-charcoal mb-6">
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
                        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-calm-charcoal mb-4">Research Interests</h2>
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
                                src="/images/UW-Madison-Ishan.jpg?height=800&width=600"
                                alt="Research visualization"
                                fill
                                className="object-cover object-[center_60%]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Research Areas */}
            <section id="detailed-expertise" className="py-16 md:py-24 bg-gradient-to-br from-deep-ocean via-calm-charcoal to-deep-ocean">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cloud-white mb-4">Research Areas</h2>
                        <p className="text-gray-300">In-depth exploration of research focus and clinical practice</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-8xl mx-auto">
                        <Card className="border-none shadow-lg bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                            <CardHeader>
                                <CardTitle className="flex items-center text-cloud-white text-2xl">
                                    <BookOpen className="h-7 w-7 mr-2 text-soft-teal" />
                                    Mental Health Promotion
                                </CardTitle>
                                <CardDescription className="text-gray-300">Proactive approaches to support all students&apos; wellbeing</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Universal mental health screening programs for early identification</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">School-wide social-emotional learning initiatives</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Multi-tiered systems of support (MTSS) for comprehensive care</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Trauma-informed practices and resilience-building strategies</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                            <CardHeader>
                                <CardTitle className="flex items-center text-cloud-white text-2xl">
                                    <Brain className="h-7 w-7 mr-2 text-soft-teal" />
                                    Evidence-Based Interventions
                                </CardTitle>
                                <CardDescription className="text-gray-300">Research-supported therapeutic approaches for youth mental health</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Single-session interventions for internalizing concerns</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Cognitive-behavioral therapy for anxiety and depression</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Measurement development and psychometric validation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Progress monitoring and data-based decision making</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg bg-white/10 backdrop-blur-sm border border-soft-teal/20 hover:border-soft-teal/40 transition-all">
                            <CardHeader>
                                <CardTitle className="flex items-center text-cloud-white text-2xl">
                                    <FileText className="h-7 w-7 mr-2 text-soft-teal" />
                                    Dissemination Science
                                </CardTitle>
                                <CardDescription className="text-gray-300">Translating research findings into practical applications</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Conference presentations and professional development workshops</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Technical reports and practice briefs for school practitioners</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Implementation support for evidence-based practices in schools</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle className="h-5 w-5 text-soft-teal mr-2 mt-0.5 shrink-0" />
                                        <span className="text-gray-300">Consultation with educational systems on research integration</span>
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
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
                                Publications & Research
                            </h2>
                            <p className="text-calm-charcoal/70 text-lg">Contributing to the field of school psychology through rigorous research</p>
                            <p className="text-sm text-calm-charcoal/60 mt-2">* Indicates undergraduate student mentee co-author</p>
                        </div>

                        {/* Grants */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px flex-1 bg-deep-ocean/20"></div>
                                <h3 className="font-playfair text-2xl font-bold text-calm-charcoal">Grants</h3>
                                <div className="h-px flex-1 bg-deep-ocean/20"></div>
                            </div>
                            <p className="text-center text-calm-charcoal/70 mb-8">Total Funded Amount: $8,700.80</p>

                            <div className="space-y-5">
                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2026-2027
                                            </span>
                                            <span className="inline-flex items-center shrink-0 px-4 py-2 text-sm font-medium rounded-full border-2 border-soft-teal/60 text-soft-teal bg-white">
                                                $3,475.80
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            <span className="font-semibold">Vengurlekar, I. N.</span>, & Kilgus, S. P. (Principal Investigator). An examination of a school-based single-session intervention: A school psychology perspective. <span className="italic">Funding Source: Society for the Study of School Psychology</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2024-2025
                                            </span>
                                            <span className="inline-flex items-center shrink-0 px-4 py-2 text-sm font-medium rounded-full border-2 border-soft-teal/60 text-soft-teal bg-white">
                                                $3,000
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            *Ellalasingham, D., <span className="font-semibold">Vengurlekar, I. N.</span>, & McCarthy, C. (Co-Investigator). Does self-compassion moderate the association between music-specific stress and internalizing symptoms? <span className="italic">Funding Source: Psi Chi Research Grants</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2022-2023
                                            </span>
                                            <span className="inline-flex items-center shrink-0 px-4 py-2 text-sm font-medium rounded-full border-2 border-soft-teal/60 text-soft-teal bg-white">
                                                $3,000
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            *Thudi, K. R., <span className="font-semibold">Vengurlekar, I. N.</span>, & Vargas, I. (Co-Investigator). Does mindfulness moderate the association between social media use and internalizing concerns? <span className="italic">Funding Source: Psi Chi Research Grants</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2021-2022
                                            </span>
                                            <span className="inline-flex items-center shrink-0 px-4 py-2 text-sm font-medium rounded-full border-2 border-soft-teal/60 text-soft-teal bg-white">
                                                $2,700
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            <span className="font-semibold">Vengurlekar, I. N.</span>, Steggerda, J. C., & Bridges, A. J. (Principal Investigator). Perceived support, music-related stress, and internalizing symptoms in university-level music majors. <span className="italic">Funding Source: Psi Chi Research Grants</span>.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Honors & Awards */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px flex-1 bg-deep-ocean/20"></div>
                                <h3 className="font-playfair text-2xl font-bold text-calm-charcoal">Honors & Awards</h3>
                                <div className="h-px flex-1 bg-deep-ocean/20"></div>
                            </div>

                            <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                <CardContent className="p-8">
                                    <div className="space-y-6">
                                        <div className="flex gap-6">
                                            <span className="inline-block px-3 py-1 h-fit text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean shrink-0">
                                                2022-2026
                                            </span>
                                            <div>
                                                <p className="text-calm-charcoal leading-relaxed font-semibold mb-2">
                                                    Project Scholars in Teaching, Applied Research, and Service (STARS)
                                                </p>
                                                <p className="text-calm-charcoal/80 text-sm leading-relaxed">
                                                    $26,927 per year, tuition remission, annual professional conference travel stipend, annual in-person conference between UW-Madison and USF Faculty and Scholars, and a notebook computer.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="h-px bg-deep-ocean/10"></div>

                                        <div className="flex gap-6">
                                            <span className="inline-block px-3 py-1 h-fit text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean shrink-0">
                                                2022
                                            </span>
                                            <ul className="space-y-2 text-calm-charcoal leading-relaxed">
                                                <li>• Inaugural Cohort of the UARK CAPS Ambassadors</li>
                                                <li>• Inaugural Cohort of the UARK DEI Student Ambassadors</li>
                                                <li>• National Scholar (Office of Nationally Competitive Awards)</li>
                                                <li>• Office of Undergraduate Research Cash Award ($500)</li>
                                            </ul>
                                        </div>

                                        <div className="h-px bg-deep-ocean/10"></div>

                                        <div className="flex gap-6">
                                            <span className="inline-block px-3 py-1 h-fit text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean shrink-0">
                                                2021-2022
                                            </span>
                                            <p className="text-calm-charcoal leading-relaxed">
                                                First Ranked Senior Scholar (Among those with the highest GPA)
                                            </p>
                                        </div>

                                        <div className="h-px bg-deep-ocean/10"></div>

                                        <div className="flex gap-6">
                                            <span className="inline-block px-3 py-1 h-fit text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean shrink-0">
                                                2018-2022
                                            </span>
                                            <div className="text-calm-charcoal leading-relaxed">
                                                Chancellor's List & Dean's List
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Peer-Reviewed Journal Articles */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px flex-1 bg-deep-ocean/20"></div>
                                <h3 className="font-playfair text-2xl font-bold text-calm-charcoal">Peer-Reviewed Journal Articles</h3>
                                <div className="h-px flex-1 bg-deep-ocean/20"></div>
                            </div>

                            <div className="space-y-5">
                                {/* In Press */}
                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-soft-teal/20 text-soft-teal border border-soft-teal/30">
                                                In Press
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed mb-2">
                                            <span className="font-semibold">Vengurlekar, I. N.</span> (In Press). The Resilience Education Program: A graduate student case delivery and reflection. <span className="italic">The School Psychologist</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* 2025 Publications */}
                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2025
                                            </span>
                                            <Button size="sm" variant="outline" asChild className="shrink-0 border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white">
                                                <a href="https://doi.org/10.1007/s12310-025-09760-3" target="_blank" rel="noopener noreferrer">
                                                    View Publication
                                                </a>
                                            </Button>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            Oddleifson, C., <span className="font-semibold">Vengurlekar, I. N.</span>, Hendrix, C., Levis, T., Anderson, E., Kilgus, S. P., & Eklund, K. (2025). A scoping review of technology-mediated assessment of youth mental health: Future directions for school mental health. <span className="italic">School Mental Health</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2025
                                            </span>
                                            <Button size="sm" variant="outline" asChild className="shrink-0 border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white">
                                                <a href="https://doi.org/10.1080/15377903.2025.2475434" target="_blank" rel="noopener noreferrer">
                                                    View Publication
                                                </a>
                                            </Button>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            McDaniel, S., Chow, J., Kilgus, S. P., Porter, J., & <span className="font-semibold">Vengurlekar, I. N.</span> (2025). A systematic review of universal screening for social, emotional, and behavioral needs in schools. <span className="italic">Journal of Applied School Psychology</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2025
                                            </span>
                                            <Button size="sm" variant="outline" asChild className="shrink-0 border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white">
                                                <a href="https://doi.org/10.1007/s12144-025-07490-y" target="_blank" rel="noopener noreferrer">
                                                    View Publication
                                                </a>
                                            </Button>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            <span className="font-semibold">Vengurlekar, I. N.</span>, *Thudi, K., & Vargas, I. (2025). Mindful scrolling: Exploring whether mindfulness modifies the association between social media engagement and internalizing concerns. <span className="italic">Current Psychology</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2025
                                            </span>
                                            <Button size="sm" variant="outline" asChild className="shrink-0 border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white">
                                                <a href="https://doi.org/10.1016/j.jsp.2024.101397" target="_blank" rel="noopener noreferrer">
                                                    View Publication
                                                </a>
                                            </Button>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            Oddleifson, C., Latham, A., Kim, J., Klingbeil, D. A., Kilgus, S. P., & <span className="font-semibold">Vengurlekar, I. N.</span> (2025). Using nomograms to identify academic risk based on multiple sources: A conceptual replication. <span className="italic">Journal of School Psychology</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* 2024 Publications */}
                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2024
                                            </span>
                                            <Button size="sm" variant="outline" asChild className="shrink-0 border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white">
                                                <a href="https://doi.org/10.1080/15377903.2024.2429812" target="_blank" rel="noopener noreferrer">
                                                    View Publication
                                                </a>
                                            </Button>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            <span className="font-semibold">Vengurlekar, I. N.</span>, Oddleifson, C., Salvatore, C., Kilgus, S. P., & Dart, E. H. (2024). Ecological momentary assessment as a delivery service for progress monitoring internalizing concerns. <span className="italic">Journal of Applied School Psychology</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2024
                                            </span>
                                            <Button size="sm" variant="outline" asChild className="shrink-0 border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white">
                                                <a href="https://doi.org/10.1080/15374416.2024.2330062" target="_blank" rel="noopener noreferrer">
                                                    View Publication
                                                </a>
                                            </Button>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            Steggerda, J. C., Kiefer, J. L., <span className="font-semibold">Vengurlekar, I. N.</span>, Hernandez Rodriguez, J., Pastrana, F. A., Brown, M. L., Moore, F., & Cavell, T. A. (2024). Moderators of the link between social preference and persistent peer victimization for elementary school children. <span className="italic">Journal of Clinical Child & Adolescent Psychology</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2024
                                            </span>
                                            <Button size="sm" variant="outline" asChild className="shrink-0 border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white">
                                                <a href="https://doi.org/10.1016/j.childyouth.2024.107476" target="_blank" rel="noopener noreferrer">
                                                    View Publication
                                                </a>
                                            </Button>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            Mutignani, L. M., Steggerda, J. C., Scafe, M. J., <span className="font-semibold">Vengurlekar, I. N.</span>, & Cavell, T. A. (2024). The practice of rematching in youth mentoring: A study of planned rematches in school-based mentoring for aggressive children. <span className="italic">Children and Youth Services Review</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* 2023 Publications */}
                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2023
                                            </span>
                                            <Button size="sm" variant="outline" asChild className="shrink-0 border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white">
                                                <a href="https://doi.org/10.1177/03057356231195892" target="_blank" rel="noopener noreferrer">
                                                    View Publication
                                                </a>
                                            </Button>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            <span className="font-semibold">Vengurlekar, I. N.</span>, Steggerda, J. C., & Bridges, A. J. (2023). Were you rushing or were you dragging? Perceived support, music-related stress, and internalizing symptoms in university-level music students. <span className="italic">Psychology of Music</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2023
                                            </span>
                                            <Button size="sm" variant="outline" asChild className="shrink-0 border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white">
                                                <a href="https://doi.org/10.1177/00332941231196551" target="_blank" rel="noopener noreferrer">
                                                    View Publication
                                                </a>
                                            </Button>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            <span className="font-semibold">Vengurlekar, I. N.</span>, & *Thudi, K. R. (2023). College student video gaming: Risk or resilience for mental health? <span className="italic">Psychological Reports</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2023
                                            </span>
                                            <Button size="sm" variant="outline" asChild className="shrink-0 border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white">
                                                <a href="https://doi.org/10.1080/15388220.2022.2162532" target="_blank" rel="noopener noreferrer">
                                                    View Publication
                                                </a>
                                            </Button>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            Steggerda, J. C., Kiefer, J. L., <span className="font-semibold">Vengurlekar, I. N.</span>, Blake, J. M., Hernandez Rodriguez, J., Pastrana, F. A., & Cavell, T. A. (2023). Anxiety sensitivity and internalizing symptoms: Co-predictors of persistent peer victimization in elementary school children. <span className="italic">Journal of School Violence</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* 2022 Publications */}
                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                                2022
                                            </span>
                                            <Button size="sm" variant="outline" asChild className="shrink-0 border-deep-ocean/60 text-deep-ocean hover:bg-deep-ocean hover:text-white">
                                                <a href="https://doi.org/10.1002/jcop.22968" target="_blank" rel="noopener noreferrer">
                                                    View Publication
                                                </a>
                                            </Button>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            <span className="font-semibold">Vengurlekar, I. N.</span>, Steggerda, J. C., *Brown, M. L., Kiefer, J. L., & Cavell, T. A. (2022). Informal mentoring support as a potential moderator of the relation between adolescent dating violence victimization and substance use. <span className="italic">Journal of Community Psychology</span>.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Book Chapters */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px flex-1 bg-deep-ocean/20"></div>
                                <h3 className="font-playfair text-2xl font-bold text-calm-charcoal">Book Chapters</h3>
                                <div className="h-px flex-1 bg-deep-ocean/20"></div>
                            </div>

                            <div className="space-y-5">
                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-soft-teal/20 text-soft-teal border border-soft-teal/30">
                                                In Press
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            Kilgus, S. P., Dart, E. H., <span className="font-semibold">Vengurlekar, I. N.</span>, & Kangavary, A. (In Press). Progress monitoring within a culturally responsive evaluation framework. In J. Twyford, K. Eklund, E. Dowdy, R. Kamphaus, & C. R. Reynolds (Eds.), <span className="italic">Culturally informed approaches to behavioral and educational assessment</span>. Guilford Publishing.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                                                In Progress
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            Kilgus, S. P., & <span className="font-semibold">Vengurlekar, I. N.</span> (In Progress). Interventions for students at risk for internalizing problems. In D. N. Miller (Ed.), <span className="italic">Supporting students with internalizing problems: school-based identification, intervention, and mental health promotion</span>. Guilford Publishing.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Works in Progress */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px flex-1 bg-deep-ocean/20"></div>
                                <h3 className="font-playfair text-2xl font-bold text-calm-charcoal">Manuscripts Under Review or in Preparation</h3>
                                <div className="h-px flex-1 bg-deep-ocean/20"></div>
                            </div>

                            <div className="space-y-5">
                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                                                Revise & Resubmit
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            Eklund, K., O&apos;Neil, S., Hendrix, C., Barnett, K. C., & <span className="font-semibold">Vengurlekar, I. N.</span> (Revise & Resubmit). &ldquo;I just thought it would help me&rdquo;: An exploration of youths&apos; decision to participate in school mental health services.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                                                Under Review
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            <span className="font-semibold">Vengurlekar, I. N.</span>, & Kilgus, S. P. (Under Review). School-based single-session interventions: A scalable strategy to address the mental health crisis. <span className="italic">Journal of Applied School Psychology</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                                                Under Review
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            *Ellalasingham, D., <span className="font-semibold">Vengurlekar, I. N.</span>, & McCarthy, C. (Under Review). Does self-compassion moderate the association between music-specific stress and internalizing symptoms? <span className="italic">Psychology of Music</span>.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                                                In Progress
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            <span className="font-semibold">Vengurlekar, I. N.</span>, Ellalasingham, D., & Kilgus, S. (In Progress). How do music students want to be supported? A qualitative analysis of supports, stressors, and the music environment.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                                                In Progress
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            Oddleifson, C., <span className="font-semibold">Vengurlekar, I. N.</span>, Edney, C., Kilgus, S. P., Eklund, K., & von der Embse, N. (In Progress). Student mental health before, during, and after COVID: A five-year trend.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                                                In Progress
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            <span className="font-semibold">Vengurlekar, I. N.</span>, & *Ellalasingham, D. (In Progress). One note at a time: Single-session interventions as a novel strategy to treat music student mental health.
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700 border border-amber-200">
                                                In Progress
                                            </span>
                                        </div>
                                        <p className="text-calm-charcoal leading-relaxed">
                                            Kilgus, S. P., Eklund, K., Hendrix, C., <span className="font-semibold">Vengurlekar, I. N.</span>, & Van Norman, E. (In Progress). Psychometric defensibility of CICO daily progress report data.
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Technical Reports */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-px flex-1 bg-deep-ocean/20"></div>
                                <h3 className="font-playfair text-2xl font-bold text-calm-charcoal">Technical Reports</h3>
                                <div className="h-px flex-1 bg-deep-ocean/20"></div>
                            </div>

                            <Card className="bg-white border-2 border-deep-ocean/20 hover:border-deep-ocean/40 hover:shadow-xl transition-all">
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-deep-ocean/10 text-deep-ocean">
                                            2025
                                        </span>
                                    </div>
                                    <p className="text-calm-charcoal leading-relaxed">
                                        Eklund, K., O&apos;Neil, S., Hendrix, C., Barnett, K. C., & <span className="font-semibold">Vengurlekar, I. N.</span> (2025). &ldquo;I just thought it would help me&rdquo;: Youth experiences with school mental health services. <span className="italic">School Mental Health Practice Brief created for the Madison Metropolitan School District</span>.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Summary Section */}
                        <div className="text-center mt-16 p-8 bg-cloud-white rounded-2xl shadow-lg">
                            <div className="max-w-3xl mx-auto">
                                <h4 className="font-playfair text-2xl font-bold text-calm-charcoal mb-4">Research Impact</h4>
                                <p className="text-calm-charcoal/80 mb-6 leading-relaxed">
                                    With 12 peer-reviewed journal articles, 2 book chapters, and 7 manuscripts currently under review or in preparation,
                                    my research contributes to advancing school-based mental health practices. I have also received over $8,700 in
                                    research grants and presented at 17 professional conferences.
                                </p>
                                <Button size="lg" asChild className="bg-deep-ocean hover:bg-deep-ocean/90 text-white shadow-lg hover:shadow-xl transition-all">
                                    <Link href="/contact">
                                        Discuss Research Collaboration <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


