// import React, { useEffect, useState } from 'react';

// const StatCard = ({ number, label, animation = 'fade-up', delay = 0 }) => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsVisible(true);
//         }, delay);

//         return () => clearTimeout(timer);
//     }, [delay]);

//     return (
//         <div
//             className={`bg-white shadow-md rounded-lg p-6 text-center transform transition-all duration-500 ${isVisible
//                     ? animation === 'fade-up'
//                         ? 'opacity-100 translate-y-0'
//                         : 'opacity-100 scale-100'
//                     : animation === 'fade-up'
//                         ? 'opacity-0 translate-y-8'
//                         : 'opacity-0 scale-95'
//                 }`}
//         >
//             <div className="text-4xl font-bold text-red-600 mb-2">{number}</div>
//             <div className="text-gray-600 text-lg">{label}</div>
//         </div>
//     );
// };

// export default StatCard;

// StatCard.jsx or inside the same file
import CountUp from "react-countup";

const StatCard = ({ number, label, animation, delay }) => {
    const numericValue = parseFloat(number.replace(/[^\d.]/g, ''));
    const suffix = number.replace(/[0-9.,]/g, '');

    return (
        <div
            data-aos={animation}
            data-aos-delay={delay}
            className="text-center p-4 bg-gray-100 rounded-xl shadow"
        >
            <div className="text-3xl text-red-500 font-bold">
                <CountUp end={numericValue} duration={2} delay={delay / 1000} />
                {suffix}
            </div>
            <p className="mt-2 text-sm text-gray-600">{label}</p>
        </div>
    );
};

export default StatCard;
