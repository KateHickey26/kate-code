"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function About() {
  const experiences = [
    {
      title: "Acting Engineering Manager",
      company: "Tray.ai",
      duration: "Feb 2024 - July 2024",
      description: "Developed scalable web applications and led frontend architecture design.",
    },
    {
      title: "Software Engineer",
      company: "Tray.ai",
      duration: "Jan 2021 - Sept 2024",
      description: "Developed scalable web applications and led frontend architecture design.",
    },
    {
      title: "Assistant Scientific Officer",
      company: "Forensic Science NI",
      duration: "2016 - 2020",
      description: "Worked on responsive websites and collaborated on multiple client projects.",
    },
  ];

  const education = [
    {
      title: "Software Engineering MSc",
      company: "University of Glasgow",
      duration: "2020 - 2021",
      description: "Grade: distinction",
    },
    {
      title: "Biology",
      company: "LJMU",
      duration: "2016 - 2020",
      description: "Grade: 2:1, Highlights: Distinction in thesis.",
    },
  ];

  // State for section toggles
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-700">About</h1>
      <p className="text-lg mb-8 text-gray-500">
        Hi, I’m Kate, a passionate developer with a love for building impactful web applications.
      </p>

      {/* Experience Section */}
      <section>
      <h2
  className="text-3xl font-semibold mb-4 text-gray-700 cursor-pointer"
  onClick={() => setIsExperienceOpen(!isExperienceOpen)}
>
  {isExperienceOpen ? <FaChevronDown /> : <FaChevronRight />} Experience
</h2>
        {isExperienceOpen && (
          <div className="relative border-l-2 border-gray-200">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="mb-6 ml-6 group"
              >
                {/* Parent Item */}
                <div className="cursor-pointer flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-700">{exp.title}</h3>
                </div>

                {/* Nested Content (Hover to Expand) */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-screen transition-all duration-300 delay-200">
                  <span className="block text-sm text-gray-600">{exp.company}</span>
                  <span className="block text-sm text-gray-600">{exp.duration}</span>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Education Section */}
      <section>
      <h2
  className="text-3xl font-semibold mb-4 text-gray-700 cursor-pointer"
  onClick={() => setIsEducationOpen(!isEducationOpen)}
>
  {isEducationOpen ? <FaChevronDown /> : <FaChevronRight />} Education
</h2>
        {isEducationOpen && (
          <div className="relative border-l-2 border-gray-200">
            {education.map((edu, index) => (
              <div
                key={index}
                className="mb-6 ml-6 group"
              >
                {/* Parent Item */}
                <div className="cursor-pointer flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-700">{edu.title}</h3>
                </div>

                {/* Nested Content (Hover to Expand) */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-screen transition-all duration-300 delay-200">

                  <span className="block text-sm text-gray-500">{edu.company}</span>
                  <span className="block text-sm text-gray-500">{edu.duration}</span>
                  <p className="text-gray-700 mt-2">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}