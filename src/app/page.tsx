"use client";

import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "@/components/Header";
import { FaChevronDown } from "react-icons/fa";

export default function ImprovedLandingPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scrollInstRef = useRef<LocomotiveScroll | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    const scroll = new LocomotiveScroll({ el: scrollRef.current, smooth: true, multiplier: 1 });
    scrollInstRef.current = scroll;
    return () => scroll.destroy();
  }, []);

  const experiences = [
    { title: "Manager, Customer Engineering", company: "Tray.ai", duration: "Feb 2024 - Sept 2024", description: "Led my team through 1on1s, ceremonies, and AI hackathons." },
    { title: "Software Engineer", company: "Tray.ai", duration: "Jan 2021 - Feb 2024", description: "Built React/TS apps, mentored new hires, and led API & AI projects." },
    { title: "Assistant Scientific Officer", company: "Forensic Science NI", duration: "2016 - 2020", description: "Examined crime scene evidence and enhanced LIMS via C# scripting." },
  ];

  const education = [
    { title: "Software Engineering MSc", school: "University of Glasgow", duration: "2020 - 2021", description: "Grade: Distinction" },
    { title: "Biology BSc", school: "LJMU", duration: "2016 - 2020", description: "2:1, Distinction in thesis" },
  ];

  const toggleAccordion = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  const scrollToSection = (sel: string) => {
    if (!scrollInstRef.current) return;
    scrollInstRef.current.scrollTo(sel, {
      offset: 0,
      duration: 800,
      easing: [0.25, 0, 0.35, 1],
    });
    window.history.replaceState(null, "", sel);
  };

  return (
    <div id="top" ref={scrollRef} data-scroll-container className="relative min-h-screen bg-gradient-to-br from-[#f4f0e4] to-[#b6c5a6] overflow-hidden">
      {/* Navbar */}
      <Header />
      {/* Decorative Shapes */}
      <div className="absolute top-4 left-4 w-8 h-8 bg-[#2d7d6b] rounded-full opacity-50" data-scroll data-scroll-speed="5" />
      <div className="absolute top-4 right-4 w-10 h-10 bg-[#cfc7b7] rounded-full opacity-40" data-scroll data-scroll-speed="-5" />

      {/* Hero Section */}
      <section className="relative z-10 flex items-center justify-between max-w-6xl mx-auto h-screen px-8" data-scroll data-scroll-speed="1">
        <div className="w-1/2 bg-[#f4f0e4] bg-opacity-90 p-12 rounded-3xl shadow-lg" data-scroll data-scroll-speed="1">
          <h1 className="text-[5rem] font-serif font-bold leading-tight text-[#2d3d37]">Hi, I’m <span className="text-[#2d7d6b]">Kate</span>.</h1>
          <p className="mt-4 text-2xl text-[#4e5e58]">A passionate engineer building impactful experiences.</p>
          <div className="mt-6 flex space-x-4">
            <button onClick={() => scrollToSection('#about')} className="border-2 border-[#d99a2b] px-4 py-2 rounded-full bg-[#d99a2b] text-white transition">About</button>
            <button onClick={() => scrollToSection('#experience')} className="border-2 border-[#2d7d6b] px-4 py-2 rounded-full bg-[#2d7d6b] text-white transition">Experience</button>
            <button onClick={() => scrollToSection('#education')} className="border-2 border-[#cfc7b7] px-4 py-2 rounded-full bg-[#cfc7b7] text-white transition">Education</button>
          </div>
        </div>
        <div className="w-[30rem] h-[30rem] rounded-full overflow-hidden border-8 border-[#d99a2b] ring-4 ring-white translate-x-6" data-scroll data-scroll-speed="-1">
          <img src="/profile.jpg" alt="Kate" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]"><svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#b6c5a6" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,202.7C672,213,768,203,864,170.7C960,139,1056,85,1152,96C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg></div>

      {/* Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-3xl text-[#22302b] animate-bounce animate-pulse">↑</div>

      {/* About Section */}
      <section
        id="about"
        className="scroll-mt-20 pt-20 -mt-20 relative bg-[#2d3d37] min-h-screen py-20 px-12 overflow-hidden"
        data-scroll
        data-scroll-speed="2"
      >
        <div className="flex justify-center items-center h-full">
          <div className="bg-[#3a4a44] p-12 rounded-3xl shadow-lg max-w-3xl text-center" data-scroll data-scroll-speed="1">
            <h2 className="text-4xl font-serif font-bold mb-4">About Me</h2>
            <p className="text-xl leading-relaxed text-[#d3d3c3]">I’m a developer with a love for crafting intuitive, scalable web experiences. I combine design and logic to make projects feel both functional and beautiful. Outside of code, I read, explore, and share insights through writing.</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center"><button onClick={() => scrollToSection('#top')} className="text-sm underline hover:text-gray-300">Back to top ↑</button></div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="scroll-mt-20 pt-20 -mt-20 relative bg-[#3a4a44] text-white min-h-screen py-20 px-12 overflow-hidden"
        data-scroll
        data-scroll-speed="2"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Experience</h2>
          <ul className="space-y-4">
            {experiences.map((exp, idx) => (
              <li key={idx} className="bg-[#2d3d37] rounded-lg">
                <button onClick={() => toggleAccordion(idx)} className="w-full flex justify-between items-center px-6 py-4 text-left">
                  <span className="text-xl font-semibold text-white">{exp.title} @ {exp.company}</span>
                  <FaChevronDown className={`text-white transform transition-transform duration-200 ${openIndex===idx? 'rotate-180':''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex===idx? 'max-h-screen py-4':'max-h-0'}`}>
                  <p className="text-sm text-[#e0e3dc] font-medium">{exp.duration}</p>
                  <p className="mt-2 leading-relaxed text-[#e0e3dc]">{exp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex justify-center"><button onClick={() => scrollToSection('#top')} className="text-sm underline hover:text-gray-300">Back to top ↑</button></div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="scroll-mt-20 pt-20 -mt-20 relative bg-[#e3e1d8] text-[#22302b] min-h-screen py-20 px-12 overflow-hidden"
        data-scroll
        data-scroll-speed="2"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-6">Education</h2>
          <ul className="space-y-4">
            {education.map((edu, idx) => (
              <li key={idx} className="bg-white rounded-lg shadow-md">
                <button onClick={() => toggleAccordion(experiences.length+idx)} className="w-full flex justify-between items-center px-6 py-4 text-left">
                  <span className="text-xl font-semibold">{edu.title} @ {edu.school}</span>
                  <FaChevronDown className={`transform transition-transform duration-200 ${openIndex===experiences.length+idx? 'rotate-180':''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${openIndex===experiences.length+idx? 'max-h-screen py-4':'max-h-0'}`}>
                  <p className="text-sm font-medium">{edu.duration}</p>
                  <p className="mt-2 leading-relaxed">{edu.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex justify-center"><button onClick={() => scrollToSection('#top')} className="text-sm underline hover:text-gray-300">Back to top ↑</button></div>
      </section>
    </div>
  );
}