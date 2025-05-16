import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public/Coming Soon.pdf"; // path relative to the public folder
    link.download = "Coming Soon.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
function Services() {
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
        <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-purple-50 overflow-hidden">
            {/* Hero Banner */}
            <section className="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-900 text-white py-20">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div
                        data-aos="fade-up"
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            Our <span className="text-[#FF1E00]">Services</span>
                        </h1>
                        <p className="mt-4 text-xl text-indigo-100">
                            Comprehensive digital solutions tailored to elevate your brand and drive business growth.
                        </p>
                    </div>
                </div>

                {/* Decorative elements */}
                {/* <div
                    className="hidden lg:block absolute right-0 bottom-0 h-64 w-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                ></div> */}
            </section>

            {/* Main Services Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Web Development Service */}
                    <ServiceSection
                        title="Web Development"
                        subtitle="Custom websites and web applications that drive results"
                        direction="right"
                        color="from-blue-500 to-cyan-500"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        }
                    >
                        <div className="space-y-6">
                            <FeatureCard
                                title="Responsive Website Design"
                                description="Beautiful, mobile-friendly websites that provide an exceptional user experience across all devices."
                                animation="fade-right"
                                delay={100}
                            />
                            <FeatureCard
                                title="E-Commerce Solutions"
                                description="Custom online stores with secure payment processing, inventory management, and seamless customer experiences."
                                animation="fade-right"
                                delay={200}
                            />
                            <FeatureCard
                                title="Web Applications"
                                description="Tailored web applications that streamline business processes and enhance customer engagement."
                                animation="fade-right"
                                delay={300}
                            />
                            <FeatureCard
                                title="Website Maintenance & Support"
                                description="Ongoing technical support, security updates, and performance optimization to keep your website running smoothly."
                                animation="fade-right"
                                delay={400}
                            />
                        </div>
                    </ServiceSection>

                    {/* Graphic Design Service */}
                    <ServiceSection
                        title="Graphic Design"
                        subtitle="Create a visual identity that resonates with your audience"
                        direction="left"
                        color="from-pink-500 to-rose-500"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.171 2.171a2 2 0 010 2.828l-8.486 8.486a2 2 0 01-2.828 0l-2.171-2.171a2 2 0 010-2.828L7.343 11" />
                            </svg>
                        }
                    >
                        <div className="space-y-6">
                            <FeatureCard
                                title="Logo Design & Branding"
                                description="Professional, unique logos and complete brand identity systems that capture your company's essence."
                                animation="fade-left"
                                delay={100}
                            />
                            <FeatureCard
                                title="Marketing Materials"
                                description="Eye-catching designs for brochures, flyers, business cards, and promotional materials."
                                animation="fade-left"
                                delay={200}
                            />
                            <FeatureCard
                                title="Digital Graphics"
                                description="Custom graphics for websites, social media, email campaigns, and digital advertisements."
                                animation="fade-left"
                                delay={300}
                            />
                            <FeatureCard
                                title="Packaging Design"
                                description="Memorable packaging that stands out on shelves and creates an exceptional unboxing experience."
                                animation="fade-left"
                                delay={400}
                            />
                        </div>
                    </ServiceSection>

                    {/* Social Media Management */}
                    <ServiceSection
                        title="Social Media Management"
                        subtitle="Build your online community and boost engagement"
                        direction="right"
                        color="from-indigo-500 to-purple-600"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                            </svg>
                        }
                    >
                        <div className="space-y-6">
                            <FeatureCard
                                title="Content Creation & Curation"
                                description="Engaging, platform-specific content that resonates with your target audience and drives engagement."
                                animation="fade-right"
                                delay={100}
                            />
                            <FeatureCard
                                title="Community Management"
                                description="Active monitoring and interaction to build relationships and address customer inquiries."
                                animation="fade-right"
                                delay={200}
                            />
                            <FeatureCard
                                title="Campaign Strategy & Execution"
                                description="Data-driven campaign planning and implementation to achieve your marketing objectives."
                                animation="fade-right"
                                delay={300}
                            />
                            <FeatureCard
                                title="Analytics & Reporting"
                                description="Regular performance reports with actionable insights to continuously improve your social presence."
                                animation="fade-right"
                                delay={400}
                            />
                        </div>
                    </ServiceSection>

                    {/* Video Editing */}
                    <ServiceSection
                        title="Video Editing"
                        subtitle="Captivate your audience with professional video content"
                        direction="left"
                        color="from-teal-400 to-emerald-500"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                        }
                    >
                        <div className="space-y-6">
                            <FeatureCard
                                title="Promotional Videos"
                                description="Compelling product demos, explainer videos, and promotional content to showcase your offerings."
                                animation="fade-left"
                                delay={100}
                            />
                            <FeatureCard
                                title="Social Media Videos"
                                description="Short-form, engaging videos optimized for different social platforms and audience preferences."
                                animation="fade-left"
                                delay={200}
                            />
                            <FeatureCard
                                title="Event Coverage"
                                description="Professional editing of event footage to create highlight reels and promotional materials."
                                animation="fade-left"
                                delay={300}
                            />
                            <FeatureCard
                                title="Animation & Motion Graphics"
                                description="Custom animations and motion graphics to explain complex concepts and enhance visual appeal."
                                animation="fade-left"
                                delay={400}
                            />
                        </div>
                    </ServiceSection>

                    {/* Additional Services */}
                    <ServiceSection
                        title="Additional Services"
                        subtitle="Comprehensive solutions for all your digital needs"
                        direction="right"
                        color="from-amber-400 to-orange-500"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                        }
                    >
                        <div className="space-y-6">
                            <FeatureCard
                                title="Email Marketing"
                                description="Strategic email campaigns that nurture leads and maintain relationships with existing customers."
                                animation="fade-right"
                                delay={100}
                            />
                            <FeatureCard
                                title="Content Writing"
                                description="SEO-optimized blog posts, website copy, and marketing content that engages and informs."
                                animation="fade-right"
                                delay={200}
                            />
                            <FeatureCard
                                title="Digital Advertising"
                                description="Targeted ad campaigns across multiple platforms to increase brand awareness and drive conversions."
                                animation="fade-right"
                                delay={300}
                            />
                            <FeatureCard
                                title="SEO Services"
                                description="Search engine optimization strategies to improve your visibility and drive organic traffic to your website."
                                animation="fade-right"
                                delay={400}
                            />
                        </div>
                    </ServiceSection>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-gradient-to-b from-red-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        data-aos="fade-up"
                        className="text-center mb-16"
                    >
                        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Process</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            How We Work With You
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                            A structured approach to deliver exceptional results for your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <ProcessCard
                            number="01"
                            title="Discovery"
                            description="We learn about your business, goals, audience, and competitors to create a tailored strategy."
                            animation="fade-up"
                            delay={100}
                            color="bg-pink-500"
                        />
                        <ProcessCard
                            number="02"
                            title="Strategy"
                            description="We develop a comprehensive plan with clear deliverables, timelines, and expected outcomes."
                            animation="fade-up"
                            delay={200}
                            color="bg-indigo-500"
                        />
                        <ProcessCard
                            number="03"
                            title="Creation"
                            description="Our team brings the strategy to life through design, content creation, and implementation."
                            animation="fade-up"
                            delay={300}
                            color="bg-teal-500"
                        />
                        <ProcessCard
                            number="04"
                            title="Optimization"
                            description="We continuously analyze results and refine our approach to maximize your ROI."
                            animation="fade-up"
                            delay={400}
                            color="bg-amber-500"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-red-700 to-[#050505e4] relative overflow-hidden">
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
                        Ready to transform your digital presence?
                    </h2>
                    <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
                        Let's discuss how our services can help your business grow and thrive in the digital landscape.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
    <Link
        to="/contact"
        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transform transition duration-300 hover:scale-105 shadow-lg"
    >
        Schedule a Free Consultation
    </Link>
    <button
        onClick={handleDownload}
        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transform transition duration-300 hover:scale-105 shadow-lg"
    >
        <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download Brochure
    </button>
</div>

                </div>

                {/* Animated shapes */}
                <div className="hidden lg:block absolute left-1/4 bottom-0 h-32 w-32 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse"></div>
                <div className="hidden lg:block absolute right-1/4 top-0 h-32 w-32 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </section>
        </div>
    );
}

// Component for each major service section
function ServiceSection({ title, subtitle, children, direction, color, icon }) {
    const isRight = direction === "right";

    return (
        <div className="py-16 border-b border-gray-200 last:border-0">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                <div
                    className={`lg:col-span-2 ${isRight ? 'lg:order-1' : 'lg:order-2'}`}
                    data-aos={isRight ? "fade-right" : "fade-left"}
                >
                    <div className="flex items-center mb-4">
                        <div className={`h-16 w-16 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${color} shadow-lg`}>
                            {icon}
                        </div>
                        <h2 className="ml-4 text-3xl font-bold text-gray-900">{title}</h2>
                    </div>
                    <p className="text-xl text-gray-600 mb-8">{subtitle}</p>
                </div>
                <div
                    className={`lg:col-span-3 ${isRight ? 'lg:order-2' : 'lg:order-1'}`}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

// Component for individual service features
function FeatureCard({ title, description, animation, delay }) {
    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
        >
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );
}

// Component for process steps
function ProcessCard({ number, title, description, animation, delay, color }) {
    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
        >
            <div className={`absolute -right-4 -top-4 h-16 w-16 rounded-full ${color} opacity-20`}></div>
            <div className={`h-12 w-12 rounded-full ${color} flex items-center justify-center text-white text-xl font-bold mb-4`}>
                {number}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-gray-600">{description}</p>
        </div>
    );
}

// Component for pricing cards
function PricingCard({ title, price, description, features, buttonText, animation, delay, featured }) {
    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${featured ? 'border-2 border-red-500 relative' : 'border border-gray-200'}`}
        >
            {featured && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-3 py-1 transform translate-x-2 -translate-y-1/2 rotate-45">
                    POPULAR
                </div>
            )}
            <div className={`${featured ? 'bg-indigo-50' : 'bg-white'} p-6`}>
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-extrabold text-red-600">{price}</span>
                    <span className="ml-1 text-xl font-medium text-gray-500">/month</span>
                </div>
                <p className="mt-4 text-gray-600">{description}</p>
            </div>
            <div className="px-6 pb-6">
                <ul className="mt-6 space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <svg className="flex-shrink-0 h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="ml-2 text-gray-600">{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-8">
                    <Link
                        to="/contact"
                        className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md ${featured ? 'text-white bg-indigo-600 hover:bg-indigo-700' : 'text-indigo-700 bg-indigo-100 hover:bg-indigo-200'} transition-all duration-300 hover:scale-105`}
                    >
                        {buttonText}
                    </Link>
                </div>
            </div>
        </div>
    );
}

// Component for FAQ items
function FaqItem({ question, answer, animation, delay }) {
    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            className="mb-6 bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
        >
            <h3 className="text-lg font-medium text-gray-900">{question}</h3>
            <p className="mt-2 text-gray-600">{answer}</p>
        </div>
    );
}

export default Services;