import React, { useEffect, useState } from 'react';

const StatCard = ({ number, label, animation = 'fade-up', delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div
            className={`bg-white shadow-md rounded-lg p-6 text-center transform transition-all duration-500 ${isVisible
                    ? animation === 'fade-up'
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-100 scale-100'
                    : animation === 'fade-up'
                        ? 'opacity-0 translate-y-8'
                        : 'opacity-0 scale-95'
                }`}
        >
            <div className="text-4xl font-bold text-red-600 mb-2">{number}</div>
            <div className="text-gray-600 text-lg">{label}</div>
        </div>
    );
};

export default StatCard;