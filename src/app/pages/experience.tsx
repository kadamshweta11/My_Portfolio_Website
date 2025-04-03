"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Image from 'next/image';


const experiences = [
  {
    title: "Associate Engineer - Nagarro",
    date: "Sep 2022 - Sep 2023",
    description: [
      "Collaborated on software architecture and platform feature enhancements",
      "Optimized systems within Scrum teams using React JS and Java",
      "Published components in Mendix Open Source community",
      "Skills: React JS, Java, SQL, Mendix (low-code)"
    ],
    location: "Pune, India",
    image: "/nagarro.jpg" // Add the image path here
  },
  {
    title: "Full Stack Developer Intern - Asentir Solutions",
    date: "Mar 2021 - Jul 2021",
    description: [
      "Designed UI/UX for company website with responsive design",
      "Implemented backend authentication and MongoDB integration",
      "Developed applications using MERN stack (MongoDB, Express.js, React, Node.js)"
    ],
    location: "Pune, India",
    image: "/asentir.png" // Add the image path here
  },
  {
    title: "Front-End Developer Intern - theOuroboros",
    date: "Jul 2020 - Nov 2020",
    description: [
      "Designed and developed user-friendly websites focusing on aesthetics",
      "Optimized layouts for readability and user experience",
      "Led a Front-End team of two developers",
      "Managed task delegation and project timelines"
    ],
    location: "Pune, India",
    image: "https://img.icons8.com/color/96/laptop--v1.png" // Add the image path here
  }
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      experiences.forEach((_, index) => {
        const element = document.getElementById(`exp-${index}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          setIsVisible((prev) => ({
            ...prev,
            [index]: rect.top < window.innerHeight * 0.75 // 75% of the viewport height
          }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white py-16">
        <h1 className="text-4xl font-bold mb-12">Experience</h1>
        <div className="relative w-full px-4 md:px-8 max-w-6xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              id={`exp-${index}`} // ID to be used for visibility check
              className="relative mb-5 w-full flex items-center"
              initial={{ opacity: 0, y: 50 }} // Initial state for animation (invisible and slightly lower)
              animate={{ opacity: isVisible[index] ? 1 : 0, y: isVisible[index] ? 0 : 50 }} // Change opacity and y position when in view
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Circle image */}
              <div className="w-24 h-24 rounded-full flex items-center justify-center mr-6">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>

              {/* Experience Card */}
              <div className={`pt-20 w-full md:w-[80%] mt-4 md:mt-0 md:pl-6 md:pr-6`}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-sm text-gray-400">{exp.date}</p>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;
