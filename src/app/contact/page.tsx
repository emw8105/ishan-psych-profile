import Link from "next/link"
import { Mail, MapPin, Phone, Clock, Calendar } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-sky-blue/30 to-cloud-white py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-calm-charcoal mb-6">Contact Ishan</h1>
                        <p className="text-lg md:text-xl text-gray-700">
                            For professional inquiries, internship opportunities, or research collaboration
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h2 className="font-playfair text-3xl font-bold text-calm-charcoal mb-6">Get in Touch</h2>
                                <p className="text-lg text-gray-700 mb-8">
                                    Ishan welcomes inquiries related to his research, clinical practice, mentoring opportunities, or
                                    potential collaborations. Please feel free to reach out using any of the contact methods below.
                                </p>

                                <div className="space-y-6">
                                    <Card className="border-none shadow-md">
                                        <CardContent className="p-6">
                                            <div className="flex items-start">
                                                <Mail className="h-6 w-6 text-primary mr-4 mt-1" />
                                                <div>
                                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                                    <p className="text-gray-600">ishan.vengurlekar@example.edu</p>
                                                    <p className="text-gray-500 text-sm mt-1">Preferred method for initial contact</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-none shadow-md">
                                        <CardContent className="p-6">
                                            <div className="flex items-start">
                                                <Phone className="h-6 w-6 text-primary mr-4 mt-1" />
                                                <div>
                                                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                                                    <p className="text-gray-600">(555) 123-4567</p>
                                                    <p className="text-gray-500 text-sm mt-1">Available during office hours</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card className="border-none shadow-md">
                                        <CardContent className="p-6">
                                            <div className="flex items-start">
                                                <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
                                                <div>
                                                    <h3 className="font-bold text-lg mb-1">University Office</h3>
                                                    <p className="text-gray-600">Department of Psychology</p>
                                                    <p className="text-gray-600">University of Example</p>
                                                    <p className="text-gray-600">Room 305, Psychology Building</p>
                                                    <p className="text-gray-600">San Francisco, CA 94110</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-4">Office Hours</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Monday & Wednesday</p>
                                            <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                                        <div>
                                            <p className="font-medium">Friday</p>
                                            <p className="text-gray-600">1:00 PM - 5:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    >
                                        <option value="">Please select a subject</option>
                                        <option value="research">Research Collaboration</option>
                                        <option value="mentoring">Mentoring Inquiry</option>
                                        <option value="speaking">Speaking Engagement</option>
                                        <option value="internship">Internship Opportunity</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex items-start">
                                    <input
                                        id="privacy"
                                        type="checkbox"
                                        className="h-4 w-4 text-primary border-gray-300 rounded mt-1"
                                        required
                                    />
                                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                                        I agree to the{" "}
                                        <Link href="/privacy" className="text-primary hover:underline">
                                            privacy policy
                                        </Link>{" "}
                                        and consent to having my data processed for the purpose of contacting me.
                                    </label>
                                </div>

                                <Button type="submit" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24 bg-off-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-calm-charcoal mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-600">Common questions about contacting and working with Ishan</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">What types of research collaboration are you interested in?</h3>
                            <p className="text-gray-700">
                                Ishan is particularly interested in collaborations related to childhood trauma, school-based
                                interventions, and resilience-building in children and adolescents. He welcomes both quantitative and
                                qualitative research approaches.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">Are you currently accepting new mentees?</h3>
                            <p className="text-gray-700">
                                Yes, Ishan is currently accepting a limited number of mentees, particularly those interested in child
                                psychology, trauma-informed care, and school psychology. Please use the contact form to express your
                                interest.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">Do you offer speaking engagements or workshops?</h3>
                            <p className="text-gray-700">
                                Yes, Ishan is available for speaking engagements and workshops on topics related to child psychology,
                                trauma-informed care, and school-based mental health interventions. Please provide details about your
                                event in your inquiry.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-2">What is the best way to contact you?</h3>
                            <p className="text-gray-700">
                                Email is the preferred method for initial contact. Ishan typically responds to emails within 2-3
                                business days. For more urgent matters, please indicate this in your subject line.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

