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

function Portfolio() {
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
            {/* Hero Section - Updated to match Services theme */}
            <section className="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-900 text-white">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-center"
                    >
                        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                            <span className="block">Our Creative</span>
                            <span className="block text-[#FF1E00]">Portfolio</span>
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
                        >
                            Explore our finest work showcasing our expertise in graphic design, social media, and video production.
                        </p>
                    </div>
                </div>

                {/* Add animated decorative elements */}
                {/* <div
                    className="hidden lg:block absolute right-0 top-1/4 h-64 w-64 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                ></div>
                <div
                    className="hidden lg:block absolute left-1/4 bottom-0 h-64 w-64 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                ></div> */}
            </section>

            {/* Portfolio Filter Section - Updated colors */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div
                    data-aos="fade-up"
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    <button className="px-6 py-2 bg-gradient-to-r from-red-500  to-[#ef8b8b] text-white rounded-full shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">All</button>
                    <button className="px-6 py-2 bg-white text-black border border-red-200 rounded-full shadow-sm hover:shadow-md transition duration-300 transform hover:scale-105">Web Development</button>
                    <button className="px-6 py-2 bg-white text-black border border-red-200 rounded-full shadow-sm hover:shadow-md transition duration-300 transform hover:scale-105">Graphic Design</button>
                    <button className="px-6 py-2 bg-white  text-black border border-red-200 rounded-full shadow-sm hover:shadow-md transition duration-300 transform hover:scale-105">Social Media</button>
                    <button className="px-6 py-2 bg-white  text-black border border-red-200 rounded-full shadow-sm hover:shadow-md transition duration-300 transform hover:scale-105">Video Projects</button>
                </div>

                {/* Portfolio Grid - Updated color schemes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <PortfolioItem
                        title="Brand Identity Design"
                        category="Graphic Design"
                        client="Tech Innovators"
                        animation="fade-up"
                        delay={100}
                        color="from-red-600 to-red-800"
                        image="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/f42e90153171003.632af0de8a2cc.jpg"
                    />
                    <PortfolioItem
                        title="Social Media Campaign"
                        category="Social Media"
                        client="Growth Startup"
                        animation="fade-up"
                        delay={200}
                        color="from-red-700 to-[#050505e4]"
                        image="https://yasno.mobi/upload/iblock/866/8661f22ccce2719c0192ea9fa4d9bc7d.jpg"
                    />
                    <PortfolioItem
                        title="Product Launch Video"
                        category="Video Projects"
                        client="New Ventures Inc."
                        animation="fade-up"
                        delay={300}
                        color="from-red-500 to-red-700"
                        image="https://www.ipfa.org/wp-content/uploads/2020/11/Big-data-scaled.jpeg"
                    />
                    <PortfolioItem
                        title="Website Redesign"
                        category="Web Development"
                        client="Wellness Clinic"
                        animation="fade-up"
                        delay={400}
                        color="from-red-700 to-[#050505e4]"
                        image="https://miro.medium.com/v2/resize:fit:959/1*0KHMRKXpM9NMYtiS1UcZgA.jpeg"
                    />
                    <PortfolioItem
                        title="Corporate Video Series"
                        category="Content Creation"
                        client="YouTuber"
                        animation="fade-up"
                        delay={500}
                        color="from-red-500 to-red-700"
                        image="https://miro.medium.com/v2/resize:fit:1000/1*DVmIt1h128EBRpw_BPFSYw.jpeg"
                    />
                    <PortfolioItem
                        title="Social Media Content Strategy"
                        category="Digital Marketing"
                        client="Hydro Jet Energy"
                        animation="fade-up"
                        delay={600}
                        color="from-red-600 to-red-800"
                        image="https://avatars.mds.yandex.net/get-znatoki/1449939/2a000001874cdfd84fc18db0a664cb9c7dff/orig"
                    />
                </div>
            </section>

            {/* Process Section - Updated colors */}
            <section className="py-16 bg-gradient-to-b from-purple-50 to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        data-aos="fade-up"
                        className="text-center mb-12"
                    >
                        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Process</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            How We Create Remarkable Work
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="relative">
                            {/* Process timeline line */}
                            <div className="hidden md:block absolute top-0 left-1/2 w-1 h-full bg-red-200 transform -translate-x-1/2"></div>

                            <div className="space-y-16">
                                <ProcessStep
                                    number="01"
                                    title="Discovery"
                                    description="We begin by understanding your business goals, target audience, and project requirements through in-depth consultation."
                                    animation="fade-right"
                                    delay={100}
                                    isLeft={true}
                                />
                                <ProcessStep
                                    number="02"
                                    title="Strategy"
                                    description="Based on our research, we develop a comprehensive strategy tailored to your specific needs and objectives."
                                    animation="fade-left"
                                    delay={200}
                                    isLeft={false}
                                />
                                <ProcessStep
                                    number="03"
                                    title="Creation"
                                    description="Our creative team brings the strategy to life, crafting compelling designs, content, and media that resonate with your audience."
                                    animation="fade-right"
                                    delay={300}
                                    isLeft={true}
                                />
                                <ProcessStep
                                    number="04"
                                    title="Refinement"
                                    description="We incorporate your feedback and make necessary adjustments to ensure the final product exceeds your expectations."
                                    animation="fade-left"
                                    delay={400}
                                    isLeft={false}
                                />
                                <ProcessStep
                                    number="05"
                                    title="Delivery"
                                    description="The finalized work is delivered on time and as promised, ready to help you achieve your business goals."
                                    animation="fade-right"
                                    delay={500}
                                    isLeft={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Updated to match Services theme */}
            <section className="py-16 bg-gradient-to-r from-red-700 to-[#050505e4] relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>
                <div
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                    data-aos="zoom-in"
                >
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        Ready to start your next project?
                    </h2>
                    <p className="mt-4 text-xl text-indigo-100">
                        Let's create something amazing together that elevates your brand and helps you achieve your goals.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transform transition duration-300 hover:scale-105 shadow-lg"
                        >
                            Start a Project
                        </Link>
                        <button
                            onClick={handleDownload}
                            className=" ms-3 inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transform transition duration-300 hover:scale-105 shadow-lg"
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

// Portfolio Item Component
function PortfolioItem({ title, category, client, animation, delay, color, image }) {
    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
            <div className="relative overflow-hidden h-64">
                <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center z-10`}>
                    <Link
                        to="/"
                        className="bg-white text-red-700 font-medium py-2 px-4 rounded-full transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300"
                    >
                        View Project
                    </Link>
                </div>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${color}`}>
                    {category}
                </div>
            </div>
            <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900">{title}</h3>
                <p className="text-gray-500 mt-1">Client: {client}</p>
            </div>
        </div>
    );
}

// Updated Process Step Component with Services colors
function ProcessStep({ number, title, description, animation, delay, isLeft }) {
    return (
        <div className="relative">
            {/* Circle marker on timeline - for desktop */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-[#e44848a0] items-center justify-center text-white font-bold z-10 text-center">
                {number}
            </div>

            <div
                data-aos={animation}
                data-aos-delay={delay}
                className={`${isLeft ? 'md:mr-auto' : 'md:ml-auto'} md:w-5/12 bg-white p-6 rounded-xl shadow-lg border-b-4 border-red-500`}
            >
                {/* Circle marker - for mobile */}
                <div className="md:hidden w-10 h-10 rounded-full bg-gradient-to-r from-red-700 to-[#050505e4] flex items-center justify-center text-white font-bold mb-4 text-center mx-auto">
                    {number}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-600">{description}</p>
            </div>
        </div>
    );
}

export default Portfolio;