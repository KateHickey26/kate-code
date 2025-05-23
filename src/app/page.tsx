"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "@/components/Header";

export default function ImprovedLandingPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
    });
    return () => scroll.destroy();
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="relative min-h-screen bg-gradient-to-br from-[#f4f0e4] to-[#b6c5a6] overflow-hidden"
    >
      {/* Navbar */}
      <Header />

      {/* Top decorative shapes */}
      <div
        className="absolute top-4 left-4 w-8 h-8 bg-[#2d7d6b] rounded-full opacity-50"
        data-scroll
        data-scroll-speed="5"
      />
      <div
        className="absolute top-4 right-4 w-10 h-10 bg-[#cfc7b7] rounded-full opacity-40"
        data-scroll
        data-scroll-speed="-5"
      />

      {/* Decorative Shapes */}
      <div
        className="absolute top-16 left-16 w-24 h-24 bg-[#d99a2b] rounded-br-full opacity-60"
        data-scroll
        data-scroll-speed="3"
      />
      <div
        className="absolute top-32 right-24 w-32 h-32 bg-[#2d7d6b] rounded-bl-full opacity-40 rotate-12"
        data-scroll
        data-scroll-speed="-2"
      />
      <div
        className="absolute bottom-32 left-24 w-20 h-20 bg-[#cfc7b7] rounded-full opacity-70"
        data-scroll
        data-scroll-speed="2"
      />

      {/* Hero Section */}
      <section
        className="relative z-10 flex items-center justify-between max-w-6xl mx-auto h-screen px-8"
        data-scroll
        data-scroll-speed="1"
      >
        {/* Text Card */}
        <div
          className="w-1/2 bg-[#f4f0e4] bg-opacity-90 p-12 rounded-3xl shadow-lg"
          data-scroll
          data-scroll-speed="1"
        >
          <h1 className="text-[5rem] font-serif font-bold leading-tight text-[#2d3d37]">
            Hi, I’m <span className="text-[#2d7d6b]">Kate</span>.
          </h1>
          <p className="mt-4 text-2xl text-[#4e5e58]">
            A passionate engineer building impactful experiences.
          </p>
          <div className="mt-6 flex space-x-4">
            <a
              href="#portfolio"
              className="border-2 border-[#d99a2b] px-4 py-2 rounded-full hover:bg-[#d99a2b] hover:text-white transition"
            >
              Portfolio
            </a>
            <a
              href="#blog"
              className="border-2 border-[#2d7d6b] px-4 py-2 rounded-full hover:bg-[#2d7d6b] hover:text-white transition"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="border-2 border-[#cfc7b7] px-4 py-2 rounded-full hover:bg-[#cfc7b7] hover:text-[#22302b] transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className="w-[30rem] h-[30rem] rounded-full overflow-hidden border-8 border-[#d99a2b] ring-4 ring-white translate-x-6"
          data-scroll
          data-scroll-speed="-1"
        >
          <img src="/profile.jpg" alt="Kate" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#b6c5a6"
            d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,202.7C672,213,768,203,864,170.7C960,139,1056,85,1152,96C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Flashing Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-3xl text-[#22302b] animate-bounce animate-pulse">
        ↓
      </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#b6c5a6" d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,202.7C672,213,768,203,864,170.7C960,139,1056,85,1152,96C1248,107,1344,181,1392,218.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-3xl text-[#22302b] animate-bounce">
        ↓
      </div>

      {/* About Section */}
      <section
        id="about"
        className="relative bg-[#2d3d37] text-white py-20 px-8 overflow-hidden"
        data-scroll
        data-scroll-speed="2"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-[#d3d3c3]">
            I’m a developer with a love for crafting intuitive, scalable web
            experiences. I combine design and logic to make projects feel both
            functional and beautiful. Outside of code, I read, explore, and
            share insights through writing.
          </p>
        </div>

        {/* Decorative Mid-Century Shapes */}
        <div
          className="absolute top-10 right-10 w-12 h-12 bg-[#d99a2b] rounded-full opacity-50"
          data-scroll
          data-scroll-speed="3"
        />
        <div
          className="absolute bottom-10 left-10 w-16 h-16 bg-[#cfc7b7] rounded-full opacity-40"
          data-scroll
          data-scroll-speed="-3"
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-6 rounded-t-full bg-transparent border-t-4 border-[#2d7d6b] opacity-60"
          data-scroll
          data-scroll-speed="2"
        />
      </section>
    </div>
  );
}