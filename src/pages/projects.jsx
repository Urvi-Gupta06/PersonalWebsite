import { ProjectComponent } from "../templates/basicUIComponents";
import { useEffect } from "react";


const Projects = () => {
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
                            Projects
                        </h1>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-20 w-full">
                        {/* Project Component */}
                        <ProjectComponent
                            Image="/Project_Image/pennywise.png"
                            Number="01"
                            Title="PennyWise"
                            ImageLink="https://github.com/Urvi-Gupta06/PennyWise"
                            Text1="I led a 6-person team to develop a full-stack MVP of a smart student budgeting platform under 24 hours, winning the Best Beginner Hack among 45+ projects."
                            Text2="We implemented Django views and models with SQLite to handle transactions and fund allocation across budgeting features."
                            Text3="The application includes an interactive dashboard to visualize financial data built with JavaScript and Node.js for real-time loan tracking."
                            
                        />

                        <ProjectComponent
                            Image="/Project_Image/code_collab.png"
                            Number="02"
                            Title="Customizable Portfolio Website Template"
                            ImageLink="https://github.com/Urvi-Gupta06/Customizable-Portfolio-Website-Template"
                            Text1="To help students creatively showcase their strengths and journeys during job applications, I worked in a team of six to develop a customizable portfolio website template."
                            Text2="This user-friendly template incorporates clean, reponsive UI and is built with React.js, Vite, Tailwind CSS, and TanStack Router."
                        />

                        <ProjectComponent
                            Image="/Project_Image/datasystem.jpg"
                            Number="03"
                            Title="Data Management System"
                            ImageLink="https://www.linkedin.com/in/urvi-guptaa/details/projects/"
                            Text1="To help a local non-profit hospital transcend outdated paper records in my hometown in India, I developed a simple program with 10 unique features tailored to a local hospital’s needs of storing patient records." 
                            Text2="My Python-MySQL backend eliminated 500+ redundant entries and reduced retrieval time by 40%."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
