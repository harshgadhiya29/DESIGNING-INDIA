import React, { useEffect, useState } from 'react';

const ProcessStep = ({ number, title, description, animation = 'fade-right', delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`flex items-start gap-4 transform transition-all duration-700 ${isVisible
                    ? animation === 'fade-right'
                        ? 'opacity-100 translate-x-0'
                        : animation === 'fade-left'
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-100 translate-y-0'
                    : animation === 'fade-right'
                        ? 'opacity-0 translate-x-12'
                        : animation === 'fade-left'
                            ? 'opacity-0 -translate-x-12'
                            : 'opacity-0 translate-y-12'
                }`}
        >
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white font-bold text-xl overflow-hidden">
                    {number}
                </div>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default ProcessStep;