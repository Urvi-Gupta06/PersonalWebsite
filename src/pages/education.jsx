import { EducationComponent } from "../templates/basicUIComponents";
import { useEffect } from "react";

const Education = () => {
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
            {
                threshold: 0.15,
            }
        );

        scrollElements.forEach((el) => {
            observer.observe(el);
        });

        return () => {
            scrollElements.forEach((el) => {
                observer.unobserve(el);
            });
        };
    }, []);

    return (
        <div>
            <section className="self-stretch overflow-hidden flex flex-col py-10 px-4 box-border max-w-full">
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start py-0 px-8 box-border gap-[40px] max-w-full">
                    {/* Heading Row */}
                    <div
                        className="w-full flex flex-row items-center justify-center gap-4 flex-wrap animate-fade-in-top opacity-0 [&.animate]:opacity-100"
                        data-animate-on-scroll
                    >
                        <h1 className="text-5xl md:text-5xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-700 dark:from-pink-300 dark:to-pink-600">
                            Education
                        </h1>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-20 w-full">
                        
                        <EducationComponent
                            Image="/education_images/umass.jpg"
                            Title="Academics"
                            Text1={<><strong>University of Massachusetts Amherst</strong>, Exp. Graduation: May 2028</>}
                            Text2={<><strong>Honors B.S. in Computer Science with Business Minor & Letter of Specialization in Creative Writing</strong>, GPA: 3.9/4.0</>}
                            Text3="Early Research Scholars Program (ERSP) Fellow, AI4All Machine Learning Fellow"
                            Text4={<><strong>Coursework:</strong> Data Structures & Algorithms, Object-Oriented Programming, Linear Algebra, Calculus, Financial Accounting</>}
                            Text5={<><strong>Awards:</strong> Best Beginner Hack at Hack(H)er413 2025, Dean’s List, Chancellor’s Award Scholarship</>}
                        />

                        <EducationComponent
                            Image="/education_images/cocurriculars.png"
                            Title="Co-Curriculars"
                            Text1={<><strong>HackUMass</strong>: Sponsorship Team</>}
                            Text2={<><strong>Women in Computer Science</strong>: Co-Chair</>}
                            Text3={<><strong>UMass Product</strong>: Active Member</>}
                            Text4={<><strong>Women in Business</strong>: Active Member</>}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
