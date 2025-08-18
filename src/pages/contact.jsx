import { useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


function Contact() {
  useEffect(() => {
    const scrollElements = document.querySelectorAll("[data-animate-on-scroll]");

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

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="contact" className="self-stretch overflow-hidden flex flex-col py-10 px-4 box-border max-w-full h-auto">
      <div className="flex flex-col items-center justify-start gap-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div
          className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-top [&.animate]:opacity-100"
          data-animate-on-scroll
        >
          <h1 className="text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-700 dark:from-pink-300 dark:to-pink-600">
            Let's
          </h1>
          <h1 className="text-5xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-700 dark:from-pink-300 dark:to-pink-600">
           Connect
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-lg text-center max-w-2xl text-gray-700 dark:text-gray-300 mb-0">
          I'm always up for discussing new projects, creative ideas, or opportunities to be part of a bigger vision. Feel free to reach out!
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-0">
          {/* Email */}
          <a
            href="mailto:urvigupta.cs@gmail.com"
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 translate-y-5 animate-fade-in-top [&.animate]:opacity-100 [&.animate]:translate-y-0"
            data-animate-on-scroll
          >
            <FaEnvelope className="text-3xl text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-1 text-blue-600">Email</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">urvigupta.cs@gmail.com</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+15512086658"
            className="bg-white dark:bg-gray-800 border border-green-200 dark:border-green-700 rounded-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 translate-y-5 animate-fade-in-top [&.animate]:opacity-100 [&.animate]:translate-y-0"
            data-animate-on-scroll
          >
            <FaPhoneAlt className="text-3xl text-green-600 mb-4" />
            <h3 className="font-semibold text-lg mb-1 text-green-600">Phone</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">+1 (551)208‑6658</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/urvi-guptaa/"
            target="_blank"
            rel="noreferrer"
            className="bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 rounded-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 translate-y-5 animate-fade-in-top [&.animate]:opacity-100 [&.animate]:translate-y-0"
            data-animate-on-scroll
          >
            <FaLinkedin className="text-3xl text-blue-600 mb-4" />
            <h3 className="font-semibold text-lg mb-1 text-blue-600">LinkedIn</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Urvi Gupta</p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Urvi-Gupta06"
            target="_blank"
            rel="noreferrer"
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl opacity-0 translate-y-5 animate-fade-in-top [&.animate]:opacity-100 [&.animate]:translate-y-0"
            data-animate-on-scroll
          >
            <FaGithub className="text-3xl text-black dark:text-white mb-4" />
            <h3 className="font-semibold text-lg mb-1 text-black dark:text-white">GitHub</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">Urvi-Gupta06</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
