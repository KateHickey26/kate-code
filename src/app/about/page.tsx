"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function About() {
  const experiences = [
    {
      title: "Manager, Customer Engineering",
      company: "Tray.ai",
      duration: "Feb 2024 - Sept 2024",
      description:
        "Held 1on1s and feedback reviews with my team; acted as the face of the team to the company in strategy discussions and technical decision making; owned team ceremonies; led cross-team hackathons focused on efficiency and AI; supported teams with technical guidance.",
    },
    {
      title: "Software Engineer",
      company: "Tray.ai",
      duration: "Jan 2021 - Feb 2024",
      description:
        "Team lead for 2+ years, mentor, project lead for customer-facing tools and internal processes, knowledge sharing through enablement sessions, and AI-based automation initiatives.",
    },
    {
      title: "Assistant Scientific Officer",
      company: "Forensic Science NI",
      duration: "2016 - 2020",
      description:
        "Examined crime scene evidence and was a superuser of our LIMS software, adapting it using user needs, change requests, and C# scripting.",
    },
  ];

  const education = [
    {
      title: "Software Engineering MSc",
      company: "University of Glasgow",
      duration: "2020 - 2021",
      description: "Grade: Distinction",
    },
    {
      title: "Biology",
      company: "LJMU",
      duration: "2016 - 2020",
      description: "Grade: 2:1, Highlights: Distinction in thesis",
    },
  ];

  const [openExperienceIndex, setOpenExperienceIndex] = useState<number | null>(null);
  const [openEducationIndex, setOpenEducationIndex] = useState<number | null>(null);

  const toggleExperience = (index: number) => {
    setOpenExperienceIndex(prev => (prev === index ? null : index));
  };

  const toggleEducation = (index: number) => {
    setOpenEducationIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="bg-[#22302b] text-[#f4f0e4] py-20 px-6 sm:px-10 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left - Image */}
        <div className="shrink-0">
          <Image
            src="/profile.jpg"
            alt="Kate"
            width={300}
            height={300}
            className="rounded-2xl border-4 border-[#2d7d6b]"
          />
        </div>

        {/* Right - Intro */}
        <div>
          <h1 className="text-5xl font-bold mb-6 font-serif">Hi, I’m Kate</h1>
          <p className="text-lg leading-relaxed mb-4">
            I'm an engineering professional specializing in team leadership, project management, and agile development.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            With 5 years of coding experience and 3 years leading an engineering team, I’ve worked at the intersection of software development, team collaboration, and project execution.
          </p>
          <p className="text-lg leading-relaxed">
            Outside of tech, I’m always looking for new experiences—whether that’s in travel, books, or digital innovation.
          </p>
        </div>
      </div>

      {/* Experience */}
      <div className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
          <FaChevronDown className="text-[#d99a2b]" /> Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="cursor-pointer">
              <div
                className="flex justify-between items-center"
                onClick={() => toggleExperience(index)}
              >
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                {openExperienceIndex === index ? (
                  <FaChevronDown className="text-[#cfc7b7]" />
                ) : (
                  <FaChevronRight className="text-[#cfc7b7]" />
                )}
              </div>
              <p className="text-sm text-[#cfc7b7] mb-1">
                {exp.company} • {exp.duration}
              </p>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openExperienceIndex === index ? "max-h-[200px] mt-2" : "max-h-0"
                }`}
              >
                <p className="text-base text-[#e0e3dc] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
        <h2 className="text-3xl font-semibold mb-8 flex items-center gap-2">
          <FaChevronDown className="text-[#d99a2b]" /> Education
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="cursor-pointer">
              <div
                className="flex justify-between items-center"
                onClick={() => toggleEducation(index)}
              >
                <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                {openEducationIndex === index ? (
                  <FaChevronDown className="text-[#cfc7b7]" />
                ) : (
                  <FaChevronRight className="text-[#cfc7b7]" />
                )}
              </div>
              <p className="text-sm text-[#cfc7b7] mb-1">
                {edu.company} • {edu.duration}
              </p>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openEducationIndex === index ? "max-h-[200px] mt-2" : "max-h-0"
                }`}
              >
                <p className="text-base text-[#e0e3dc] leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}