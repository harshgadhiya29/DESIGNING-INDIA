import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Subscription() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            mirror: false,
            easing: 'ease-out-cubic',
        });

        // Refresh AOS on window resize for responsive behavior
        window.addEventListener('resize', () => {
            AOS.refresh();
        });

        return () => {
            window.removeEventListener('resize', () => {
                AOS.refresh();
            });
        };
    }, []);



    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-white overflow-hidden">
            {/* Header Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-900 text-white py-20">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1
                            data-aos="fade-up"
                            className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl"
                        >
                            <span className=" me-5">Our</span>
                            <span className=" text-[#FF1E00]">Subscriptions</span>
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="max-w-2xl mt-5 mx-auto text-xl text-indigo-100"
                        >
                            Quality solutions tailored to your business needs
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-16 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div
                            data-aos="fade-right"
                            className="lg:max-w-lg"
                        >
                            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">Our Services</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Elevate Your Brand
                            </p>
                            <p className="mt-4 text-lg text-gray-600">
                                We offer comprehensive digital services designed to help your business stand out in today's competitive landscape. From stunning visuals to engaging social media content, our team delivers excellence at every step.
                            </p>
                            <p className="mt-4 text-lg text-gray-600">
                                Each service is customizable to fit your specific needs and budget. Our transparent pricing ensures you know exactly what you're getting, with no hidden fees or surprises.
                            </p>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-delay="200"
                            className="mt-10 lg:mt-0 relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl">
                                    <div className="flex items-center justify-center h-full text-white text-opacity-90">
                                        <div className="text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p className="text-xl font-medium">Transparent Pricing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%236366f1' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                    }}
                ></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div
                        data-aos="fade-up"
                        className="text-center mb-12"
                    >
                        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Offerings</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Services That Drive Results
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
                            Choose from our range of professional services designed to enhance your digital presence
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2">
                        {/* Graphic Design Card */}
                        <ServiceCard
                            title="Graphic Designing Services"
                            description="Business aur personal use ke liye high-quality designs — jaise logo, posters, banners, thumbnails, brochures, social media posts, etc."
                            icon="design"
                            animation="fade-up"
                            delay={100}
                            items={[
                                { name: "Logo Design", price: "₹500 – ₹4,000" },
                                { name: "Poster/Banner Design", price: "₹200 – ₹1,500" },
                                { name: "YouTube Thumbnail", price: "₹300 – ₹800" },
                                { name: "Brochure Design", price: "₹1,500 – ₹6,000" },
                                { name: "Social Media Post", price: "₹250 – ₹500 per post" },
                                { name: "Monthly Creative Pack (15-20 posts)", price: "₹3,000 – ₹7,000" }
                            ]}
                        />

                        {/* Video Editing Card */}
                        <ServiceCard
                            title="Video Editing Services"
                            description="Reels, YouTube videos, ads, vlog editing — smooth transitions, effects, music, subtitles & more."
                            icon="video"
                            animation="fade-up"
                            delay={200}
                            items={[
                                { name: "Basic Edit (1 min reel)", price: "₹1,000 – ₹2,000" },
                                { name: "Standard Video (1–5 min)", price: "₹2,500 – ₹5,000" },
                                { name: "YouTube Video Package", price: "₹6,000 – ₹10,000" },
                                { name: "Monthly Reels Pack (8–10 reels)", price: "₹8,000 – ₹15,000" }
                            ]}
                        />

                        {/* Social Media Card */}
                        <ServiceCard
                            title="Social Media Handling"
                            description="Complete Instagram/Facebook/LinkedIn page management — planning, designing, posting, hashtags, captions, engagement, etc."
                            icon="social"
                            animation="fade-up"
                            delay={300}
                            items={[
                                { name: "Basic Plan", price: "₹5,000/month" },
                                { name: "Growth Plan", price: "₹10,000 – ₹15,000/month" },
                                { name: "Pro Plan", price: "₹20,000+/month" }
                            ]}
                        />

                        {/* Website Design Card */}
                        <ServiceCard
                            title="Website Designing"
                            description="Professional websites using WordPress, Wix, Shopify, or custom code — responsive design, fast loading, SEO-ready."
                            icon="web"
                            animation="fade-up"
                            delay={400}
                            items={[
                                { name: "Single Page Website", price: "₹5,000 – ₹10,000" },
                                { name: "Business Website (4–6 pages)", price: "₹15,000 – ₹25,000" },
                                { name: "E-commerce Website", price: "₹50,000+" },
                                { name: "Maintenance Plan", price: "₹2,000 – ₹5,000/month" }
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-gradient-to-b from-red-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        data-aos="fade-up"
                        className="text-center mb-12"
                    >
                        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Work Process</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            How We Deliver Excellence
                        </p>
                    </div>

                    <div className="mt-12">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="lg:col-span-5">
                                <div className="sticky top-8">
                                    <ProcessStep
                                        number="01"
                                        title="Consultation"
                                        description="We discuss your needs, goals, and expectations to understand your vision perfectly."
                                        active={true}
                                        animation="fade-right"
                                    />
                                    <ProcessStep
                                        number="02"
                                        title="Proposal & Pricing"
                                        description="We provide a detailed proposal with clear pricing and timeline for your approval."
                                        animation="fade-right"
                                        delay={100}
                                    />
                                    <ProcessStep
                                        number="03"
                                        title="Creation & Revisions"
                                        description="Our team creates your project with regular updates and revision opportunities."
                                        animation="fade-right"
                                        delay={200}
                                    />
                                    <ProcessStep
                                        number="04"
                                        title="Delivery & Support"
                                        description="We deliver the final product and provide ongoing support to ensure your satisfaction."
                                        animation="fade-right"
                                        delay={300}
                                    />
                                </div>
                            </div>
                            <div
                                className="mt-10 lg:mt-0 lg:col-span-7"
                                data-aos="fade-left"
                                data-aos-delay={200}
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-red-500 to-purple-600 aspect-w-16 aspect-h-9">
                                    <div className="flex items-center justify-center h-full text-white p-8">
                                        <div className="text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                            </svg>
                                            <p className="text-2xl font-medium mb-4">Transparent Pricing</p>
                                            <p className="text-lg opacity-90">Our pricing is clear and upfront with no hidden costs. You'll know exactly what you're paying for and receive exceptional value for your investment.</p>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        data-aos="fade-up"
                        className="text-center mb-12"
                    >
                        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">FAQ</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Common Questions
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
                            Find answers to frequently asked questions about our services and pricing
                        </p>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        <FaqItem
                            question="How long does each service typically take to complete?"
                            answer="Timelines vary by project complexity. Simple designs may take 2-3 days, while comprehensive websites might require 3-4 weeks. We'll provide specific timelines during our consultation."
                            animation="fade-up"
                            delay={100}
                        />
                        <FaqItem
                            question="Do you offer package deals for multiple services?"
                            answer="Yes! We offer custom packages that combine multiple services at discounted rates. Contact us to create a tailored solution for your business needs."
                            animation="fade-up"
                            delay={200}
                        />
                        <FaqItem
                            question="What payment methods do you accept?"
                            answer="We accept bank transfers, UPI payments, and all major credit/debit cards. For larger projects, we typically require a 50% advance payment."
                            animation="fade-up"
                            delay={300}
                        />
                        <FaqItem
                            question="How many revisions are included in the pricing?"
                            answer="Most services include 2-3 rounds of revisions. Additional revision requests are accommodated at nominal charges depending on the complexity."
                            animation="fade-up"
                            delay={400}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-red-800 to-red-400 relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                >
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Ready to get started?
                    </h2>
                    <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
                        Contact us today for a free consultation and quote for your project.
                    </p>
                    <div className="mt-8">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transform transition duration-300 hover:scale-105 shadow-lg"
                        >
                            Request a Quote
                        </Link>
                    </div>
                </div>

                {/* Animated shapes */}
                <div className="hidden lg:block absolute left-1/4 bottom-0 h-32 w-32 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse"></div>
                <div className="hidden lg:block absolute right-1/4 top-0 h-32 w-32 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </section>
        </div>
    );
}

function ServiceCard({ title, description, icon, animation, delay, items }) {
    // Icon mapping
    const icons = {
        design: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        ),
        video: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        social: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
        ),
        web: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        )
    };

    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-b-4 border-transparent hover:border-red-500"
        >
            <div className="bg-black text-white p-6 relative overflow-hidden">
                <div className="flex items-center text-xl font-bold mb-2">
                    <div className="mr-4 bg-red-600 w-12 h-12 rounded-full flex items-center justify-center">
                        {icons[icon]}
                    </div>
                    {title}
                </div>
                <p className="text-gray-300 text-sm">{description}</p>
                <div className="absolute right-0 bottom-0 h-16 w-16 bg-red-600 rounded-tl-full opacity-20"></div>
            </div>
            <div className="p-6">
                <ul className="list-none">
                    {items.map((item, index) => (
                        <li key={index} className="flex justify-between py-3 border-b border-gray-100 last:border-0">
                            <span className="font-medium text-gray-800">{item.name}</span>
                            <span className="font-semibold text-red-600">{item.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function ProcessStep({ number, title, description, active = false, animation, delay = 0 }) {
    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            className={`flex items-start py-4 ${active ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}
        >
            <div className={`flex-shrink-0 h-12 w-12 rounded-md flex items-center justify-center text-white font-bold text-xl ${active ? 'bg-gradient-to-r from-red-400 to-red-700' : 'bg-red-400'}`}>
                {number}
            </div>
            <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-1 text-base text-gray-600">{description}</p>
            </div>
        </div>
    );
}

function FaqItem({ question, answer, animation, delay }) {
    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            className="bg-red-50 rounded-lg p-6 hover:shadow-md transition-all duration-300"
        >
            <h3 className="text-lg font-bold text-gray-900 mb-2">{question}</h3>
            <p className="text-gray-600">{answer}</p>
        </div>
    );
}

export default Subscription;