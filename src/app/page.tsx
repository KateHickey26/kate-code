"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function LandingPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
    });

    console.log("Locomotive Scroll initialized", scroll); // Debug log


    return () => {
      scroll.destroy(); // Clean up on unmount
    };
  }, []);

  const educationData = [
  {
    title: "MSc Software Engineering",
    institution: "University of Glasgow",
    duration: "2020 - 2021",
    description: "Achieved Distinction. Specialized in web development and AI.",
  },
  {
    title: "BSc Biology",
    institution: "LJMU",
    duration: "2016 - 2020",
    description: "Graduated with a 2:1. Thesis focused on genetics.",
  },
];

  return (
    <div ref={scrollRef} data-scroll-container>
      {/* Intro Section */}
      <section
  className="h-screen bg-gray-200 flex items-center justify-between px-12"
  data-scroll
  data-scroll-speed="1"
>
  {/* Left Side: Name */}
  <div className="text-left">
    <h1 className="text-6xl font-bold text-gray-800 leading-snug">
      Hi, I'm <span className="text-blue-500">[Kate]</span>.
    </h1>
    <p className="mt-4 text-xl text-gray-600">
      A passionate developer building impactful experiences.
    </p>
  </div>

  {/* Right Side: Profile Picture */}
  <div
    className="relative w-126 h-126 rounded-full bg-gray-400 overflow-hidden border-2 border-gray-300 opacity-60 translate-x-12"
    data-scroll
    data-scroll-speed="2"
  >
    <img
      src="/profile.jpg"
      alt="Kate"
      className="w-full h-full object-cover"
    />
  </div>
</section>

      {/* About Section */}
      <section
        id="about"
        className="h-screen bg-gray-800 text-white flex px-12 relative"
        data-scroll
        data-scroll-speed="2"
      >
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-1/4 h-1/2 w-px bg-gray-600"></div>

        {/* Left Side: Links */}
        <div className="w-1/2 flex flex-col items-center justify-center space-y-6">
          <ul className="space-y-6 text-lg">
          <li className="flex items-center justify-start">
        <span className="mr-2 text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <a href="#portfolio" className="hover:text-blue-200 transition-colors">
          See some of my work at my Portfolio
        </a>
      </li>
      <li className="flex items-center justify-start">
        <span className="mr-2 text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <a href="#blog" className="hover:text-blue-200 transition-colors">
          Get to know me by checking out my blog
        </a>
      </li>
      <li className="flex items-center justify-start">
        <span className="mr-2 text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
        <a href="#contact" className="hover:text-blue-200 transition-colors">
          Want to reach out? Contact me <span className="text-blue-400 ">here</span>
        </a>
      </li>
          </ul>
        </div>
       
        {/* Right Side: Blurb */}
        <div className="w-1/2 flex flex-col justify-center px-6">
          <h2 className="text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate developer with experience in building scalable web
            applications and designing impactful user experiences. I love
            creating websites that not only function beautifully but also tell
            a story.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new places, reading
            books, or sharing my knowledge through blogs.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="h-auto bg-gray-900 py-12 px-6 relative"
        data-scroll
        data-scroll-speed="1"
      >
        <h2 className="text-4xl font-semibold text-center mb-8">Education</h2>
        <div className="relative">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="flex items-center mb-12 "
              data-scroll
              data-scroll-class="fade-in"
            >
              {/* Timeline Dot */}
              <div className="w-8 h-8 bg-blue-400 rounded-full flex-shrink-0"></div>

              {/* Timeline Content */}
              <div className="ml-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-100">{item.institution}</p>
                <span className="block text-sm text-gray-100">
                  {item.duration}
                </span>
                <p className="text-gray-100 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}