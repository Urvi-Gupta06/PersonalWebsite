import React from "react";
import config from "../config";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";



  
const experiences = [
  {
    title: "Undergraduate Course Assistant, Object-Oriented Programming",
    company_name: "Manning College of Information and Computer Sciences",
    icon: "/icons/umass.jpg",
    iconBg: "#E6DEDD",
    date: "May 2025 – Present",
    points: [
      "Provided academic assistance to 300+ students in mastering concepts like Abstraction, Inheritance, Polymorphism, Encapsulation, and Time Complexity Analysis.",  
      "Automated Gradescope imports by cleaning CSVs and mapping student IDs to scores in Python, cutting grading time by 20%.",
      "Led technical labs and live code debugging for 30+ students, strengthening error-handling and problem-solving skills.",
    ],
  },
  {
    title: "IT Student Intern",
    company_name: "UMass Amherst Information Technology",
    icon: "/icons/umass.jpg",
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Dec 2024",
    points: [
      "Streamlined user flows, analyzed feedback and improved usability of IT platforms like Service Catalog and Student Hub.", 
      "Optimized resource lookup process by 60% by removing redundant steps, thus reducing navigation time.",
      "Implemented auto-filled forms with JavaScript and HTML, cutting average completion time by 50%.",
      "Resolved system errors and server crashes in real-time, reducing average downtime from 10 minutes to under 6 minutes for 200+ students.", 
      "Created strategic digital content that led to 1,200+ post interactions; drove 300 additional website click-throughs and 150 new student loginss.",
    ],
  },

];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
      borderRadius: "12px",
      padding: "20px 32px",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
      textAlign: "left",
      maxWidth: "750px",
      minHeight: "unset",
      height: "auto",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    dateClassName="timeline-date"
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div className="text-left">
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p style={{ color: "#ffffff", fontWeight: "bold" }}>
  {experience.company_name}
      </p>

      <ul className="list-disc list-inside space-y-1 mt-3">
        {experience.points.map((point, i) => (
          <li key={i} className="text-white text-[14px] tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);
function Experience() {
  return (
    <div className="relative flex-grow flex flex-col items-center justify-center text-center px-6">
      <div
                        className="w-full flex flex-row items-center justify-center gap-4 flex-wrap animate-fade-in-top opacity-0 [&.animate]:opacity-100"
                        data-animate-on-scroll
                    >
                        <h1 className="text-5xl md:text-5xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r  from-pink-400 to-pink-700 dark:from-pink-300 dark:to-pink-600">
                          Experience
                        </h1>
                    </div>
                    

      <div className="w-full max-w-4xl">
        <VerticalTimeline lineColor="#999999">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
