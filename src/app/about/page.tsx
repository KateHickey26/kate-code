"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

export default function About() {
  const experiences = [
    {
      title: "Manager, Customer Engineering",
      company: "Tray.ai",
      duration: "Feb 2024 - Sept 2024",
      description: "I finished my career at Tray as the manager of my amaing team. /n As manager I: Held 1on1s and feedback reviews with my team;  Acted as theface of the team to the company in strategy discussions and technical decision making; Owned team ceremonies, and led cross-team hackathons focused on improved efficiency and infusing our processes with AI. During the hackathon I led intro, project planning and wrap-up sessions, and provided support and technical guidence for the different teams implementations.",
    },
    {
      title: "Software Engineer",
      company: "Tray.ai",
      duration: "Jan 2021 - Feb 2024",
      description: "Team lead, 2+ years: led standups, liaised with Project Manager and EM, technical escalation point for the team.Mentor for new team members: led 1on1 training; created onboarding documentation and tools; held group training sessions.Built customer-facing JS and TS applications based on external REST, SOAP and GraphQL APIs, such as Microsoft, Slack, AWS and Netsuite. Project lead: ReactJS tool to estimate customer platform costs; project manager and main developer; worked closely with sales and product. Project lead, addressing deprecations in external APIs using RSS feed monitoring and AI: an overhaul of our internal engineering processes; increased platform reliability and stability, improving the customer experience. Knowledge sharing: held regular sessions e.g. AI prompt engineering workshop, enablement sessions, and new process training; created process documentation.",
    },
    {
      title: "Assistant Scientific Officer",
      company: "Forensic Science NI",
      duration: "2016 - 2020",
      description: "This role mainly involved Examining crime scene evidence. /n I was also a superuser of our Sample Manager LIMS software. In this role I modified the software to suit different labs. To do this I: identified the needs of each lab's users, using user stories; evaluated user change requests, translating this to the software’s capabilities; adapted the software to fit our business needs with some basic C# programming; documented changes and change requests.",
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
      description: "Grade: 2:1, Highlights: Distinction grade in thesis.",
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