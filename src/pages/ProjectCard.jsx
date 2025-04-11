import React, { useState } from 'react';

const ProjectCard = ({
    title,
    category,
    description,
    image, // Changed from imageUrl to match what you're passing in the parent component
    link,
    tags = [],
    animation = 'zoom',
    delay = 0,
    color = "from-blue-500 to-indigo-600" // Added default color prop
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    const getAnimationClass = () => {
        if (!isVisible) {
            switch (animation) {
                case 'zoom':
                case 'zoom-in':
                    return 'opacity-0 scale-90';
                case 'slide-up':
                    return 'opacity-0 translate-y-12';
                case 'slide-down':
                    return 'opacity-0 -translate-y-12';
                case 'slide-left':
                    return 'opacity-0 translate-x-12';
                case 'slide-right':
                    return 'opacity-0 -translate-x-12';
                default:
                    return 'opacity-0';
            }
        }
        return 'opacity-100 scale-100 translate-x-0 translate-y-0';
    };

    return (
        <div
            className={`rounded-lg overflow-hidden shadow-lg bg-white transform transition-all duration-700 ${getAnimationClass()}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative overflow-hidden">
                {/* Project image with overlay on hover */}
                <div
                    className="h-64 bg-cover bg-center transform transition-transform duration-500"
                    style={{
                        backgroundImage: `url('${image || "/api/placeholder/600/400"}')`,
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                    }}
                />
                <div
                    className={`absolute inset-0 bg-black transition-opacity duration-500 flex items-center justify-center ${
                        isHovered ? 'opacity-70' : 'opacity-0'
                    }`}
                >
                    <a
                        href={link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-6 py-2 bg-gradient-to-r ${color} text-white rounded hover:shadow-lg transition-all`}
                    >
                        View Project
                    </a>
                </div>

                {/* Category badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${color} text-white px-3 py-1 rounded-full text-sm`}>
                    {category}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;