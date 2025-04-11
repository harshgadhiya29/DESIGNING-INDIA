import React, { useEffect, useState } from 'react';

const TestimonialCard = ({
    quote,
    author,
    company,
    animation = 'flip-left',
    delay = 0,
    color = 'border-blue-500'
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    const getAnimationClass = () => {
        if (!isVisible) {
            switch (animation) {
                case 'flip-left':
                    return 'opacity-0 rotateY-90';
                case 'flip-right':
                    return 'opacity-0 -rotateY-90';
                case 'flip-up':
                    return 'opacity-0 rotateX-90';
                case 'flip-down':
                    return 'opacity-0 -rotateX-90';
                case 'fade-in':
                default:
                    return 'opacity-0';
            }
        }
        return 'opacity-100 rotate-0';
    };

    return (
        <div
            className={`bg-white rounded-lg shadow-lg p-6 border-l-4 ${color} transform transition-all duration-700 ${getAnimationClass()} perspective-1000`}
            style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
            }}
        >
            <div className="mb-4">
                <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            </div>
            <p className="text-gray-800 mb-6 italic">{quote}</p>
            <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-bold">
                        {author.split(' ').map(name => name[0]).join('')}
                    </span>
                </div>
                <div>
                    <p className="font-bold">{author}</p>
                    <p className="text-gray-600 text-sm">{company}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;