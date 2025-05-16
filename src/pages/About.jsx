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
function About() {
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
                            <span className="block">About</span>
                            <span className="block text-[#FF1E00]">Our Studio</span>
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="max-w-2xl mt-5 mx-auto text-xl text-indigo-100"
                        >
                            Crafting digital excellence since 2023
                        </p>
                    </div>
                </div>

                {/* Add animated decorative elements */}
                {/* <div
                    className="hidden lg:block absolute right-0 top-1/4 h-64 w-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
                    data-aos="fade-left"
                    data-aos-duration="1500"
                ></div>
                <div
                    className="hidden lg:block absolute left-1/4 bottom-0 h-64 w-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                ></div> */}
            </section>

            {/* Our Story Section */}
            <section className="py-16 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div
                            data-aos="fade-right"
                            className="lg:max-w-lg"
                        >
                            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">Our Story</h2>
                            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                From Vision to Reality
                            </p>
                            <p className="mt-4 text-lg text-gray-600">
                                Founded in 2023, our studio began with a simple mission: to help businesses thrive in the digital world. What started as a small team of passionate designers has grown into a comprehensive digital solutions provider serving clients worldwide.
                            </p>
                            <p className="mt-4 text-lg text-gray-600">
                                We believe that exceptional design combined with strategic thinking creates powerful connections between brands and their audiences. Our collaborative approach ensures that each project reflects our clients' unique vision while delivering measurable results.
                            </p>
                        </div>
                        <div
                            data-aos="fade-left"
                            data-aos-delay="200"
                            className="mt-10 lg:mt-0 relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-red-500 to-purple-600 rounded-2xl">
                                    {/* Placeholder for an image - would be replaced with an actual image in production */}
                                    <div className="flex items-center justify-center h-full text-white text-opacity-90">
                                        <div className="text-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                            </svg>
                                            <p className="text-xl font-medium">Our Creative Journey</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section with cards */}
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
                        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Values</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            What Guides Our Work
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
                            These core principles define our approach and ensure we deliver exceptional results for every client.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <ValueCard
                            title="Innovation"
                            description="We embrace cutting-edge technologies and creative approaches to solve complex challenges and stay ahead of trends."
                            icon="lightbulb"
                            animation="fade-up"
                            delay={100}
                            color="from-pink-500 to-rose-500"
                        />
                        <ValueCard
                            title="Excellence"
                            description="We hold ourselves to the highest standards in every aspect of our work, from design quality to client communication."
                            icon="badge"
                            animation="fade-up"
                            delay={200}
                            color="from-indigo-500 to-purple-600"
                        />
                        <ValueCard
                            title="Collaboration"
                            description="We work closely with our clients, treating their goals as our own and ensuring their vision is at the center of everything we create."
                            icon="users"
                            animation="fade-up"
                            delay={300}
                            color="from-teal-400 to-emerald-500"
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        data-aos="fade-up"
                        className="text-center mb-12"
                    >
                        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Team</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            The Talent Behind Our Success
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
                            A diverse group of creative professionals dedicated to bringing your vision to life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                        <TeamMember
                            name="Harsh Gadhiya"
                            role="Web Devloper / Social Media 
                            "
                            animation="fade-up"
                            delay={100}
                            color="bg-gradient-to-br from-violet-600 to-indigo-700"
                        />
                        <TeamMember
                            name="Divya Patel"
                            role="Web Devloper / Digital Marketing
                            "
                            animation="fade-up"
                            delay={200}
                            color="bg-gradient-to-br from-pink-500 to-rose-500"
                        />
                        <TeamMember
                            name="Akshay Thakkar"
                            role="UI/UX & Graphics Design"
                            animation="fade-up"
                            delay={300}
                            color="bg-gradient-to-br from-indigo-500 to-purple-600"
                        />
                        <TeamMember
                            name="Khushi Shah"
                            role="Graphic Design / Video Editing"
                            animation="fade-up"
                            delay={400}
                            color="bg-gradient-to-br from-teal-400 to-emerald-500"
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
                        <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Process</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            How We Bring Ideas to Life
                        </p>
                    </div>

                    <div className="mt-12">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="lg:col-span-5">
                                <div className="sticky top-8">
                                    <ProcessStep
                                        number="01"
                                        title="Discovery"
                                        description="We begin by understanding your business, goals, and target audience through in-depth consultation."
                                        active={true}
                                        animation="fade-right"
                                    />
                                    <ProcessStep
                                        number="02"
                                        title="Strategy"
                                        description="We develop a tailored strategy that aligns with your objectives and maximizes your digital impact."
                                        animation="fade-right"
                                        delay={100}
                                    />
                                    <ProcessStep
                                        number="03"
                                        title="Creation"
                                        description="Our team brings your vision to life with creative design, content, and technical excellence."
                                        animation="fade-right"
                                        delay={200}
                                    />
                                    <ProcessStep
                                        number="04"
                                        title="Launch & Support"
                                        description="We ensure a smooth deployment and provide ongoing support to help your digital presence thrive."
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
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                            <p className="text-2xl font-medium mb-4">Proven Results</p>
                                            <p className="text-lg opacity-90">Our collaborative process has helped over 200 businesses transform their digital presence and achieve their goals.</p>
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section with vibrant gradient */}
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
                        Ready to start your digital journey?
                    </h2>
                    <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
                        Let's collaborate to create something amazing together.
                    </p>
                    <div className="mt-8 flex gap-4 justify-center">
    <Link
        to="/contact"
        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transform transition duration-300 hover:scale-105 shadow-lg"
    >
        Get in Touch
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

function ValueCard({ title, description, icon, animation, delay, color }) {
    // Icon mapping
    const icons = {
        lightbulb: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        badge: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        users: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        )
    };

    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-red-500"
        >
            <div className={`-mt-6 -ml-6 mb-4 w-16 h-16 rounded-br-xl flex items-center justify-center text-white bg-gradient-to-br ${color}`}>
                {icons[icon]}
            </div>
            <h3 className="text-xl leading-6 font-bold text-gray-900">{title}</h3>
            <p className="mt-2 text-base text-gray-500">{description}</p>
        </div>
    );
}

function TeamMember({ name, role, animation, delay, color }) {
    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            className="flex flex-col items-center"
        >
            <div className={`w-40 h-40 rounded-full overflow-hidden shadow-lg ${color} flex items-center justify-center mb-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
            <p className="text-red-600">{role}</p>
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

export default About;