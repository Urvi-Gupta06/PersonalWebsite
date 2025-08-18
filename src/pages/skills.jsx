import config from "../config";

function Skills() {
    return (
        <div className="relative flex-grow flex items-center justify-center text-center px-6">
            <div className="p-8 space-y-6 text-center justify-center items-center flex-grow align-middle">
                {/* Main Heading */}
                <div
                    className="w-full flex flex-row items-center justify-center gap-4 flex-wrap animate-fade-in-top opacity-0 [&.animate]:opacity-100"
                    data-animate-on-scroll
                >
                    <h1 className="text-5xl md:text-4xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-700 dark:from-pink-300 dark:to-pink-600">
                        Skills
                    </h1>
                </div>

                {/* Skills Pills */}
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                    {config.techStackPage.list.map((tech, index) => (
                        <div
                            key={index}
                            className="bg-pink-200/60 dark:bg-pink-700/60 
                                       text-black dark:text-white 
                                       px-4 py-2 rounded-full 
                                       shadow-sm hover:shadow-md 
                                       border border-pink-300/40 
                                       hover:bg-pink-300/70
                                       dark:hover:bg-pink-600/70 
                                       transition-all duration-300"
                        >
                            {tech.trim()}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
