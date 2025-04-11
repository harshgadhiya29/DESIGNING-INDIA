import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Blog() {
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

    // Blog posts data
    const featuredPost = {
        title: "5 Design Trends Transforming Digital Marketing in 2025",
        excerpt: "Discover the cutting-edge design trends that are revolutionizing how brands connect with their audiences online.",
        author: "Sarah Johnson",
        date: "April 2, 2025",
        category: "Design Trends",
        readTime: "6 min read",
        image: "https://miro.medium.com/v2/resize:fit:1000/1*Sd1Ju0Ku2BwJfDo3DI2QoA.jpeg",
        tags: ["Design", "Marketing", "Trends"]
    };

    const blogPosts = [
        {
            title: "How to Create a Compelling Social Media Strategy",
            excerpt: "Learn the essential components of a successful social media strategy that drives engagement and converts followers into customers.",
            author: "Michael Chen",
            date: "March 28, 2025",
            category: "Social Media",
            readTime: "4 min read",
            image: "https://apa.az/storage/news/2024/february/12/big/65c9ffdf5337165c9ffdf53372170773705565c9ffdf5336f65c9ffdf53370.jpg"
        },
        {
            title: "Video Marketing: Why It's Essential for Your Business",
            excerpt: "Explore how video content can significantly boost your brand awareness, engagement rates, and conversion metrics.",
            author: "Jessica Smith",
            date: "March 22, 2025",
            category: "Video Marketing",
            readTime: "5 min read",
            image: "https://images.squarespace-cdn.com/content/v1/5b35dc9b36099b1e5fe89cb6/892cd5a8-9e25-48b8-a1a4-36e7c9014480/PIM+SEO.jpg"
        },
        
        {
            title: "Responsive Design: Creating Websites That Work on Any Device",
            excerpt: "Best practices for developing responsive websites that provide optimal user experience across all screen sizes.",
            author: "Emily Rodriguez",
            date: "March 10, 2025",
            category: "Web Design",
            readTime: "8 min read",
            image: "https://zdblogs.zohocorp.com/sites/commerce/insights/files/users/user419/Website%20UI.jpeg"
        },
        
        {
            title: "The Art of Logo Design: Creating Memorable Brand Symbols",
            excerpt: "An in-depth look at what makes logos effective and the process behind creating iconic brand identities.",
            author: "Sarah Johnson",
            date: "February 28, 2025",
            category: "Design",
            readTime: "6 min read",
            image: "https://s0.rbk.ru/v6_top_pics/media/img/6/07/346895429163076.jpeg"
        }
    ];

    // Categories for sidebar
    const categories = [
        { name: "Design Trends", count: 12 },
        { name: "Social Media", count: 9 },
        { name: "Video Marketing", count: 7 },
        { name: "Branding", count: 14 },
        { name: "Web Design", count: 10 },
        { name: "Content Strategy", count: 8 }
    ];

    // Popular tags
    const popularTags = [
        "Design", "Marketing", "Social Media", "Video", "Branding",
        "UX", "Trends", "Strategy", "Content", "Digital"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-white overflow-hidden">
            {/* Hero Section - UPDATED with red/black gradient from Services page */}
            <section className="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-900 text-white">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                    }}
                ></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="text-center"
                    >
                        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                            <span className="block">Insights &</span>
                            <span className="block text-[#FF1E00]">Inspiration</span>
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="mt-3 text-base text-indigo-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl"
                        >
                            Expert advice, industry trends, and creative inspiration for your digital journey.
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
                    className="hidden lg:block absolute left-1/4 bottom-0 h-64 w-64 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                ></div> */}
            </section>

            {/* Blog Content Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:gap-12">
                    {/* Main Content */}
                    <div className="lg:w-2/3">
                        {/* Featured Post */}
                        <div
                            data-aos="fade-up"
                            className="mb-12"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-80 object-cover"
                                />
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-red-600 to-red-800">
                                            {featuredPost.category}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-500">{featuredPost.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{featuredPost.title}</h3>
                                    <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-900">{featuredPost.author}</p>
                                                <p className="text-xs text-gray-500">{featuredPost.date}</p>
                                            </div>
                                        </div>
                                        <Link
                                            to="#"
                                            className="text-red-600 hover:text-red-500 font-medium flex items-center"
                                        >
                                            Read more <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Regular Posts */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
                            <div className="grid gap-8 sm:grid-cols-2">
                                {blogPosts.map((post, index) => (
                                    <BlogPostCard
                                        key={index}
                                        post={post}
                                        animation="fade-up"
                                        delay={100 + index * 100}
                                    />
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="mt-12 flex justify-center">
                                <nav className="inline-flex rounded-md shadow">
                                    <a href="#" className="py-2 px-4 bg-white border border-gray-300 rounded-l-md text-red-600 hover:bg-gray-50">
                                        Previous
                                    </a>
                                    <a href="#" className="py-2 px-4 bg-white border-t border-b border-gray-300 text-red-600 hover:bg-gray-50">
                                        1
                                    </a>
                                    <a href="#" className="py-2 px-4 bg-red-600 border border-red-600 text-white">
                                        2
                                    </a>
                                    <a href="#" className="py-2 px-4 bg-white border-t border-b border-gray-300 text-red-600 hover:bg-gray-50">
                                        3
                                    </a>
                                    <a href="#" className="py-2 px-4 bg-white border border-gray-300 rounded-r-md text-red-600 hover:bg-gray-50">
                                        Next
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:w-1/3 mt-12 lg:mt-0">
                        {/* Search Box */}
                        <div
                            data-aos="fade-left"
                            className="bg-white rounded-xl shadow-md p-6 mb-8"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Search</h3>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full py-2 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                />
                                <div className="absolute right-3 top-2.5 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Categories */}
                        <div
                            data-aos="fade-left"
                            data-aos-delay="100"
                            className="bg-white rounded-xl shadow-md p-6 mb-8"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                            <ul className="space-y-2">
                                {categories.map((category, index) => (
                                    <li key={index}>
                                        <a href="#" className="flex items-center justify-between text-gray-600 hover:text-red-600">
                                            <span>{category.name}</span>
                                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">{category.count}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Tags */}
                        <div
                            data-aos="fade-left"
                            data-aos-delay="200"
                            className="bg-white rounded-xl shadow-md p-6 mb-8"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {popularTags.map((tag, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="px-3 py-1 bg-red-50 text-black rounded-full text-sm hover:bg-red-100 transition-colors duration-200"
                                    >
                                        {tag}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div
                            data-aos="fade-left"
                            data-aos-delay="300"
                            className="bg-gradient-to-r from-red-700 to-[#050505e4] rounded-xl shadow-md p-6 text-white"
                        >
                            <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                            <p className="text-indigo-100 mb-4">Get the latest articles, resources and tips directly in your inbox.</p>
                            <form>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full py-2 px-4 mb-3 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 text-gray-900"
                                />
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition duration-300 shadow-lg"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - UPDATED with red/black gradient from Services page */}
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
                        Need help with your digital strategy?
                    </h2>
                    <p className="mt-4 text-xl text-indigo-100">
                        Our experts can help you develop a comprehensive approach that aligns with your business goals.
                    </p>
                    <div className="mt-8">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10 transform transition duration-300 hover:scale-105 shadow-lg"
                        >
                            Book a Consultation
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

// Blog Post Card Component
function BlogPostCard({ post, animation, delay }) {
    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
        >
            <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-5">
                <div className="flex items-center mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-red-600 to-red-800">
                        {post.category}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm">
                        <p className="text-gray-900 font-medium">{post.author}</p>
                        <span className="mx-2 text-gray-300">•</span>
                        <p className="text-gray-500">{post.date}</p>
                    </div>
                    <Link
                        to="#"
                        className="text-red-600 hover:text-red-500 text-sm font-medium"
                    >
                        Read →
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Blog;