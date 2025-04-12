import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import StatCard from './StatCard';
import ProcessStep from './ProcessStep';
import TestimonialCard from './TestimonialCard';
import ProjectCard from './ProjectCard';
import FAQItem from './FAQItem';


function Home() {
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
    <div className="min-h-screen bg-[#00000076]  text-white overflow-hidden">

      <section className="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-900 text-white py-12 md:py-16 lg:py-24">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4 sm:px-6">
            {/* Left side - Text content */}
            <div className="relative z-10">
              <div>
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-3xl tracking-tight font-extrabold sm:text-4xl md:text-5xl lg:text-6xl"
                >
                  <span className="block text-white">Empower Your</span>
                  <span className="block text-red-300 drop-shadow-md">Business Online</span>
                </h1>
              </div>
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl"
              >
                We offer comprehensive digital solutions including graphic design, social media management, web development, and video editing to help your business thrive in the digital age.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex flex-col sm:flex-row gap-3">
                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transform transition duration-300 hover:scale-105 shadow-lg"
                  >
                    Get Started
                  </Link>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="mt-3 sm:mt-0"
                >
                  <Link
                    to="/services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-red-500 text-base font-medium rounded-md bg-transparent hover:text-white hover:bg-red-900 md:py-4 md:text-lg md:px-10 transform transition duration-300 hover:scale-105"
                  >
                    Our Services
                  </Link>
                </div>
              </div>
            </div>

            {/* Right side - Graphics for mobile & desktop */}

            <div className="relative mt-10 lg:mt-0 h-64  sm:h-80 md:h-96">
              {/* Background glow effects */}
              <div className="absolute w-full h-full">
                <div className="absolute top-1/4 right-1/4 h-24 sm:h-32 md:h-48 w-24 sm:w-32 md:w-48 bg-red-400/30 rounded-full filter blur-xl"></div>
                <div className="absolute bottom-1/4 right-1/2 h-16 sm:h-24 md:h-32 w-16 sm:w-24 md:w-32 bg-yellow-400/20 rounded-full filter blur-xl"></div>
                <div className="absolute top-1/2 right-1/3 h-20 sm:h-32 md:h-40 w-20 sm:w-32 md:w-40 bg-blue-400/20 rounded-full filter blur-xl"></div>
              </div>

              {/* Centered arrangement of elements for mobile */}
              <div className="relative w-full h-full flex justify-center items-center">
                {/* Desktop Website Mockup */}
                <div
                  className="absolute -top-11 lg:right-14 lg:top-6 right-3 z-30 transform perspective-1000 rotate-y-6 rotate-3 transition-all duration-500 hover:rotate-y-0 hover:rotate-0 hover:scale-105 scale-75 sm:scale-90 md:scale-100"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="w-48 sm:w-56 md:w-64 h-32 sm:h-36 md:h-40 bg-gray-900 rounded-lg shadow-xl p-2 sm:p-3 transform">
                    <div className="h-3 sm:h-4 w-full bg-gray-800 flex items-center px-2 rounded-t-sm mb-1 sm:mb-2">
                      <div className="flex space-x-1">
                        <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-red-400"></div>
                        <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-yellow-400"></div>
                        <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="h-24 sm:h-26 md:h-28 w-full bg-white rounded-sm overflow-hidden relative">
                      <div className="h-3 sm:h-4 w-full bg-blue-600"></div>
                      <div className="p-2">
                        <div className="h-1.5 sm:h-2 w-3/4 bg-gray-300 rounded-full mb-1 sm:mb-2"></div>
                        <div className="h-1.5 sm:h-2 w-1/2 bg-gray-300 rounded-full mb-1 sm:mb-2"></div>
                        <div className="h-6 sm:h-8 w-full bg-gray-100 rounded-sm mb-1 sm:mb-2"></div>
                        <div className="flex justify-between">
                          <div className="h-3 sm:h-4 w-12 sm:w-16 bg-red-600 rounded-sm"></div>
                          <div className="h-3 sm:h-4 w-12 sm:w-16 bg-gray-200 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-2 sm:h-3 bg-gray-800 rounded-lg"></div>
                  </div>
                  <div className="absolute -bottom-2 sm:-bottom-3 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-1 bg-gray-800 rounded-lg shadow-lg opacity-75"></div>
                </div>

                {/* Video Editing Element */}
                <div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-24 z-20 rotate-2 transition-all duration-500 hover:rotate-0 hover:scale-105 scale-75 sm:scale-90 md:scale-100"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="relative bg-black/80 rounded-xl p-2 shadow-2xl lg:left-7">
                    <div className="w-44 sm:w-48 md:w-56 h-24 sm:h-28 md:h-32 bg-black rounded-lg overflow-hidden relative">
                      {/* Video thumbnail with play button */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10 z-10"></div>
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="h-8 sm:h-10 md:h-12 w-8 sm:w-10 md:w-12 rounded-full bg-red-600/90 flex items-center justify-center transform transition-transform hover:scale-110 cursor-pointer">
                          <div className="ml-1 h-0 w-0 border-t-4 sm:border-t-6 border-b-4 sm:border-b-6 border-l-6 sm:border-l-10 border-t-transparent border-b-transparent border-l-white"></div>
                        </div>
                      </div>

                      {/* Video elements */}
                      <div className="absolute top-2 right-2 flex space-x-1 z-30">
                        <div className="h-4 sm:h-6 w-4 sm:w-6 rounded-full bg-red-600/80 flex items-center justify-center">
                          <div className="h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-white"></div>
                        </div>
                      </div>

                      {/* Video timeline */}
                      <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 bg-black/80 flex items-center px-2 z-20">
                        <div className="h-1 flex-grow bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full w-1/3 bg-red-600"></div>
                        </div>
                        <div className="ml-2 text-xs text-white">1:45</div>
                      </div>

                      {/* Floating video elements for decoration */}
                      <div className="absolute top-3 left-5 h-4 sm:h-6 w-8 sm:w-10 bg-yellow-400/80 rounded-sm transform rotate-12"></div>
                      <div className="absolute top-10 sm:top-12 left-10 sm:left-12 h-6 sm:h-8 w-6 sm:w-8 bg-blue-400/80 rounded-sm transform -rotate-6"></div>
                      <div className="absolute bottom-8 left-16 sm:left-20 h-3 sm:h-4 w-8 sm:w-12 bg-green-400/80 rounded-sm transform rotate-3"></div>
                    </div>

                    {/* Video editing tools */}
                    <div className="flex mt-2 justify-between">
                      <div className="flex space-x-1">
                        <div className="h-2 sm:h-3 w-2 sm:w-3 bg-red-600 rounded-sm"></div>
                        <div className="h-2 sm:h-3 w-2 sm:w-3 bg-red-500 rounded-sm"></div>
                        <div className="h-2 sm:h-3 w-2 sm:w-3 bg-red-400 rounded-sm"></div>
                      </div>
                      <div className="flex space-x-1">
                        <div className="h-2 sm:h-3 w-4 sm:w-6 bg-gray-700 rounded-sm"></div>
                        <div className="h-2 sm:h-3 w-4 sm:w-6 bg-gray-700 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Graphic Design Element */}
                <div
                  className="absolute top-2 sm:top-4 left-1 transform -translate-x-1/2 lg:translate-x-0 lg:left-8 lg:top-32 z-40 -rotate-6 perspective-1000 transition-all duration-500 hover:rotate-0 hover:scale-105 scale-75 sm:scale-90 md:scale-100"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-2xl border border-white/20">
                    <div className="w-36 sm:w-40 md:w-48 h-36 sm:h-40 md:h-48 bg-white rounded-lg shadow-inner relative overflow-hidden">
                      {/* Overlapping color circles */}
                      <div className="absolute top-4 left-4 h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 rounded-full bg-red-500 mix-blend-multiply"></div>
                      <div className="absolute top-10 sm:top-12 left-12 sm:left-16 h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 rounded-full bg-blue-500 mix-blend-multiply animate-pulse"></div>
                      <div className="absolute top-4 left-16 sm:left-20 h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 rounded-full bg-yellow-500 mix-blend-multiply"></div>

                      {/* Design tools */}
                      <div className="absolute bottom-2 right-2 flex space-x-1 sm:space-x-2">
                        <div className="h-4 sm:h-6 w-4 sm:w-6 rounded-md bg-gray-800 flex items-center justify-center">
                          <div className="h-2 sm:h-3 w-2 sm:w-3 border-2 border-white rounded-sm"></div>
                        </div>
                        <div className="h-4 sm:h-6 w-4 sm:w-6 rounded-md bg-gray-800 flex items-center justify-center">
                          <div className="h-3 sm:h-4 w-0.5 sm:w-1 bg-white transform rotate-45"></div>
                        </div>
                        <div className="h-4 sm:h-6 w-4 sm:w-6 rounded-md bg-gray-800 flex items-center justify-center">
                          <div className="h-2 sm:h-3 w-2 sm:w-3 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Color palette */}
                      <div className="absolute bottom-2 left-2 flex space-x-1">
                        <div className="h-3 sm:h-4 w-3 sm:w-4 rounded-sm bg-red-600 border border-white/50"></div>
                        <div className="h-3 sm:h-4 w-3 sm:w-4 rounded-sm bg-blue-600 border border-white/50"></div>
                        <div className="h-3 sm:h-4 w-3 sm:w-4 rounded-sm bg-green-600 border border-white/50"></div>
                        <div className="h-3 sm:h-4 w-3 sm:w-4 rounded-sm bg-yellow-600 border border-white/50"></div>
                        <div className="h-3 sm:h-4 w-3 sm:w-4 rounded-sm bg-purple-600 border border-white/50"></div>
                      </div>

                      {/* Floating shapes */}
                      <div className="absolute top-24 sm:top-28 left-6 sm:left-8 h-6 sm:h-8 w-6 sm:w-8 border-3 sm:border-4 border-gray-800 rounded-sm transform rotate-12"></div>
                      <div className="absolute top-24 sm:top-28 left-18 sm:left-24 h-6 sm:h-8 w-6 sm:w-8 bg-gray-800 rounded-full transform -rotate-12"></div>
                      <div className="absolute top-30 sm:top-36 left-12 sm:left-16 h-6 sm:h-8 w-12 sm:w-16 bg-gray-800 transform rotate-45 opacity-80"></div>
                    </div>

                    {/* Pen tool handle */}
                    <div className="absolute -right-2 -bottom-2 h-8 sm:h-12 w-3 sm:w-4 bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-lg rounded-t-sm transform rotate-45">
                      <div className="absolute -top-1 left-0 right-0 h-1.5 sm:h-2 bg-gray-900 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Connecting elements and particles - visible on all screen sizes */}
                <div className="absolute inset-0">
                  {/* Connection lines */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
                    <path d="M60,80 Q80,60 120,90" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
                    <path d="M140,100 Q180,140 200,90" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
                    <path d="M220,140 Q260,110 280,150" stroke="rgba(255,255,255,0.3)" strokeWidth="1" fill="none" />
                  </svg>

                  {/* Animated dots */}
                  <div className="absolute top-16 sm:top-20 left-20 sm:left-40 h-1.5 sm:h-2 w-1.5 sm:w-2 bg-red-400 rounded-full animate-ping"></div>
                  <div className="absolute top-24 sm:top-32 right-24 sm:right-32 h-1.5 sm:h-2 w-1.5 sm:w-2 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-12 sm:bottom-16 left-24 sm:left-48 h-1.5 sm:h-2 w-1.5 sm:w-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-24 sm:bottom-32 right-12 sm:right-16 h-1.5 sm:h-2 w-1.5 sm:w-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <StatCard number="10+" label="Happy Clients" animation="fade-up" delay={100} />
            <StatCard number="12+" label="Projects Completed" animation="fade-up" delay={200} />
            <StatCard number="1500+" label="Social Media Followers" animation="fade-up" delay={300} />
            <StatCard number="24 Hours" label="Customer Support" animation="fade-up" delay={400} />
          </div>
        </div>
      </section>


      {/* Services Preview Section */}
      <section className="py-16 relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23ff0000' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E\")",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            className="lg:text-center"
          >
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Our Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
              Everything you need to succeed online
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
              Our comprehensive suite of digital services is designed to elevate your brand's presence and drive measurable results.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                title="Graphic Design"
                description="Professional design services for logos, branding, marketing materials, and more."
                animation="fade-up-right"
                delay={100}
                color="bg-gradient-to-br from-pink-500 to-rose-500"
                icon="design"
              />
              <ServiceCard
                title="Social Media Management"
                description="Strategic social media marketing to grow your brand and engage with your audience."
                animation="fade-up"
                delay={300}
                color="bg-gradient-to-br from-indigo-500 to-purple-600"
                icon="social"
              />
              <ServiceCard
                title="Video Editing"
                description="High-quality video editing services for promotional content, social media, and more."
                animation="fade-up-left"
                delay={500}
                color="bg-gradient-to-br from-teal-400 to-emerald-500"
                icon="video"
              />
              <ServiceCard
                title="Web Development"
                description="Custom website development with responsive design and SEO optimization."
                animation="fade-up-right"
                delay={100}
                color="bg-gradient-to-br from-amber-400 to-orange-500"
                icon="web"
              />
              <ServiceCard
                title="Content Creation"
                description="Engaging and SEO-friendly content for your website, blog, and social media channels."
                animation="fade-up"
                delay={300}
                color="bg-gradient-to-br from-blue-400 to-cyan-500"
                icon="content"
              />
              <ServiceCard
                title="Digital Marketing"
                description="Comprehensive digital marketing strategies to increase visibility and drive conversions."
                animation="fade-up-left"
                delay={500}
                color="bg-gradient-to-br from-lime-400 to-green-500"
                icon="marketing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-gradient-to-r from-red-500 to-red-200 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            className="text-center mb-12"
          >
            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">Our Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              How We Work With You
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-800 mx-auto">
              Our streamlined process ensures efficient delivery of high-quality results for your business.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <ProcessStep
                number="1"
                title="Discovery"
                description="We learn about your business goals, target audience, and current digital presence."
                animation="fade-right"
                delay={100}
              />
              <ProcessStep
                number="2"
                title="Strategy"
                description="We develop a customized plan tailored to your specific needs and objectives."
                animation="fade-right"
                delay={300}
              />
              <ProcessStep
                number="3"
                title="Execution"
                description="Our team works diligently to implement the strategy with precision and creativity."
                animation="fade-right"
                delay={500}
              />
              <ProcessStep
                number="4"
                title="Results"
                description="We measure performance, make adjustments, and ensure your goals are being met."
                animation="fade-right"
                delay={700}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            className="text-center mb-12"
          >
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              quote="Working with this team transformed our brand identity. The design work exceeded our expectations!"
              author="Sarah Johnson"
              company="Tech Innovators"
              animation="flip-left"
              delay={100}
              color="border-red-600"
            />
            <TestimonialCard
              quote="Our social media engagement increased by 200% within just three months of working together."
              author="Michael Chen"
              company="Growth Startup"
              animation="flip-up"
              delay={300}
              color="border-gray-800"
            />
            <TestimonialCard
              quote="The video content they produced helped us secure major funding. Worth every penny."
              author="Jessica Smith"
              company="New Ventures Inc."
              animation="flip-right"
              delay={500}
              color="border-red-500"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            className="text-center mb-12"
          >
            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">Portfolio</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
              Our Featured Projects
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-400 mx-auto">
              Take a look at some of our best work that showcases our expertise and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              image="https://sourcesofinsight.com/wp-content/uploads/2012/07/Rebrand-a-Brand-1.jpg"
              title="Brand Refresh"
              category="Graphic Design"
              description="Complete rebranding for a tech startup that increased brand recognition by 45%."
              animation="zoom-in"
              delay={100}
              color="from-red-700 to-red-900"
              tags={["Branding", "Logo Design", "Style Guide"]}
            />
            <ProjectCard
              image="https://42clouds.com/ru-ru/wp-content/uploads/sites/7/2023/10/social-media.jpg"
              title="Social Growth Campaign"
              category="Social Media"
              description="Strategic campaign that doubled follower count and engagement for a retail brand."
              animation="zoom-in"
              delay={300}
              color="from-gray-700 to-black"
              tags={["Strategy", "Content", "Analytics"]}
            />
            <ProjectCard
              image="https://i.pinimg.com/originals/7a/6c/b7/7a6cb7a4284106541cc1842bed2f26b4.jpg"
              title="Product Launch Video"
              category="Video Production"
              description="High-impact product launch video that generated over 500,000 views in one week."
              animation="zoom-in"
              delay={500}
              color="from-red-600 to-red-800"
              tags={["Video", "Animation", "Marketing"]}
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transform transition duration-300 hover:scale-105 shadow-md"
              data-aos="fade-up"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-aos="fade-up"
            className="text-center mb-12"
          >
            <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase">FAQ</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
              Frequently Asked Questions
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQItem
              question="What industries do you work with?"
              answer="We work with clients across various industries including tech, healthcare, retail, finance, education, and hospitality. Our versatile team adapts to the unique needs of each sector."
              animation="fade-up"
              delay={100}
            />
            <FAQItem
              question="How long does a typical project take?"
              answer="Project timelines vary depending on scope and complexity. Simple graphic design projects might take a few days, while comprehensive marketing campaigns can span several months. We provide detailed timelines during our initial consultation."
              animation="fade-up"
              delay={200}
            />
            <FAQItem
              question="What is your pricing structure?"
              answer="We offer flexible pricing options including project-based quotes and monthly retainers. Each quote is customized based on your specific needs and objectives to ensure you get the best value."
              animation="fade-up"
              delay={300}
            />
            <FAQItem
              question="Do you offer ongoing support after project completion?"
              answer="Yes, we provide ongoing support and maintenance packages for all our services. We believe in building long-term relationships with our clients to ensure continued success."
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
            Ready to elevate your digital presence?
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch today and let's discuss how we can help your business grow.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transform transition duration-300 hover:scale-105 shadow-lg"
            >
              Contact Us Now
            </Link>
          </div>
        </div>

        {/* Animated shapes */}
        <div className="hidden lg:block absolute left-1/4 bottom-0 h-32 w-32 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse"></div>
        <div className="hidden lg:block absolute right-1/4 top-0 h-32 w-32 bg-white rounded-full mix-blend-overlay filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2
                className="text-2xl font-bold text-gray-900 sm:text-3xl"
                data-aos="fade-right"
              >
                Subscribe to our newsletter
              </h2>
              <p
                className="mt-3 text-lg text-gray-600"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Get the latest digital marketing tips, trends, and insights delivered straight to your inbox.
              </p>
            </div>
            <div
              className="mt-8 lg:mt-0 lg:w-1/2"
              data-aos="fade-left"
            >
              <form className="sm:flex">
                <input
                  type="email"
                  className="w-full px-5 py-3 placeholder-gray-500 shadow-xl/30  rounded-md border-spacing-6 border-red-200 sm:max-w-xs"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p
                className="mt-3 text-sm text-gray-500"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                We care about your data. Read our <Link to="/privacy" className="font-medium text-red-600 hover:text-red-500">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ title, description, animation, delay, color, icon }) {
  // Icon mapping
  const icons = {
    design: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.171 2.171a2 2 0 010 2.828l-8.486 8.486a2 2 0 01-2.828 0l-2.171-2.171a2 2 0 010-2.828L7.343 11" />
      </svg>
    ),
    social: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    video: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    web: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    content: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    marketing: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  };

  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-indigo-500 overflow-hidden group"
    >
      <div className={`-mt-6 -ml-6 mb-4 w-16 h-16 rounded-br-xl flex items-center justify-center text-white ${color}`}>
        {icons[icon]}
      </div>
      <h3 className="text-xl leading-6 font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
      <div className="mt-4">
        <Link
          to="/services"
          className="text-red-600 hover:text-red-700 transition-all duration-300"
        >
          Learn more &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Home;