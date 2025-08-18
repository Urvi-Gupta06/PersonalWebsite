import { useEffect, useCallback } from "react";
import "./animation.css";

var EducationComponent = ({
    Image,
    Title,
    Text1,
    Text2,
    Text3,
    Text4,
    Text5,
}) => {
    useEffect(() => {
        const scrollElements = document.querySelectorAll(
            "[data-animate-on-scroll]"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting || entry.intersectionRatio > 0) {
                        entry.target.classList.add("animate");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        scrollElements.forEach((el) => observer.observe(el));
        return () => scrollElements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center justify-start gap-10 w-full">
            {/* Main Image */}
            <img
                className="h-80 object-cover rounded-xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:brightness-110"
                src={Image}
                alt={Title}
                data-animate-on-scroll
            />

            {/* Text Content */}
            <div
                className="flex-1 flex flex-col items-start justify-center min-w-[300px] max-w-full"
                data-animate-on-scroll
            >
                <div className="flex flex-col items-start justify-start gap-6">

                    {/* Title */}
                    <h1 className="text-3xl font-bold tracking-tight leading-snug text-black dark:text-white">
                        {Title}
                    </h1>

                    {/* Description */}
                    <div className="text-base tracking-wide leading-6 text-gray-600 dark:text-gray-300">
                        <p className="m-0">{Text1}</p>
                        <p className="m-0">{Text2}</p>
                        <p className="m-0">{Text3}</p>
                        <p className="m-0">{Text4}</p>
                        <p className="m-0">{Text5}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EducationComponent;
