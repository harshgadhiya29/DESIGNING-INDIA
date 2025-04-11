import React, { useState } from 'react';

const FAQItem = ({
    question,
    answer,
    isOpen = false,
    animation = 'fade',
    delay = 0
}) => {
    const [expanded, setExpanded] = useState(isOpen);
    const [visible, setVisible] = useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    const getAnimationClass = () => {
        if (!visible) {
            switch (animation) {
                case 'fade':
                    return 'opacity-0';
                case 'slide-up':
                    return 'opacity-0 translate-y-8';
                case 'slide-right':
                    return 'opacity-0 -translate-x-8';
                case 'slide-left':
                    return 'opacity-0 translate-x-8';
                default:
                    return 'opacity-0';
            }
        }
        return 'opacity-100 translate-y-0 translate-x-0';
    };

    return (
        <div
            className={`border-b border-gray-200 transform transition-all duration-500 ${getAnimationClass()}`}
        >
            <button
                className="flex justify-between items-center w-full py-5 px-2 text-left focus:outline-none"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
            >
                <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
                <span className="ml-6 flex-shrink-0">
                    <svg
                        className={`w-6 h-6 transform transition-transform duration-300 ${expanded ? 'rotate-180' : 'rotate-0'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                aria-hidden={!expanded}
            >
                <div className="pb-5 px-2">
                    <p className="text-gray-600">{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;