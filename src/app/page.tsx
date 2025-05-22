"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function LandingPage() {
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
    <div ref={scrollRef} data-scroll-container>
      {/* Hero Section */}
      <section
        className="h-screen bg-[#f4f0e4] relative px-20 flex items-center justify-between overflow-hidden"
        data-scroll
        data-scroll-speed="1"
      >
        {/* Intro text */}
        <div className="max-w-xl z-10 ml-28" data-scroll data-scroll-speed="1">
          <h1 className="text-[5rem] font-serif font-bold leading-[1.1] text-[#2d3d37]">
            Hi, I’m <span className="text-[#2d7d6b]">Kate</span>.
          </h1>
          <p className="mt-6 text-2xl text-[#4e5e58]">
            A passionate engineer building impactful experiences.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#portfolio" className="bg-[#264e46] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90">Portfolio</a>
            <a href="#blog" className="bg-[#d99a2b] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90">Blog</a>
            <a href="#contact" className="bg-[#cfc7b7] text-[#2d3d37] px-6 py-3 rounded-full shadow-md hover:opacity-90">Contact</a>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className="w-[26rem] h-[26rem] rounded-full overflow-hidden border-4 border-[#d3c6ae] opacity-90 translate-x-6 mr-12"
          data-scroll
          data-scroll-speed="-1"
        >
          <img
            src="/profile.jpg"
            alt="Kate"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-12 left-12 w-10 h-10 bg-[#d99a2b] rounded-full opacity-60" data-scroll data-scroll-speed="4" />
        <div className="absolute top-24 right-20 w-14 h-14 bg-[#2d7d6b] rotate-12 opacity-40" data-scroll data-scroll-speed="-4" />
        <div className="absolute bottom-12 left-24 w-8 h-8 bg-[#cfc7b7] rounded-full opacity-70" data-scroll data-scroll-speed="6" />
        <div className="absolute top-10 left-8 w-6 h-10 bg-[#d99a2b] rounded-full opacity-60" data-scroll data-scroll-speed="3" />
        <div className="absolute bottom-14 right-10 w-12 h-12 bg-[#2d7d6b] rounded-full rotate-45 opacity-40" data-scroll data-scroll-speed="10" />
        <div className="absolute bottom-20 right-1/3 w-6 h-6 bg-[#cfc7b7] rounded-full opacity-60" data-scroll data-scroll-speed="4" />

        <div className="absolute top-10 left-[45%] w-8 h-8 bg-[#264e46] rounded-full opacity-50" data-scroll data-scroll-speed="3" />
        <div className="absolute bottom-10 left-[40%] w-20 h-[2px] bg-[#d99a2b]" data-scroll data-scroll-speed="-5" />
        <div className="absolute top-[25%] left-[60%] w-10 h-5 rounded-t-full bg-transparent border-t-[5px] border-[#cfc7b7]" data-scroll data-scroll-speed="2" />
        {/* Stars */}
        <svg className="absolute top-6 right-[15%] w-36 h-36 text-[#2d7d6b] opacity-40" data-scroll data-scroll-speed="6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l1.09 3.41L16 6l-2.45 1.78L14 11l-2-1.5L10 11l.45-3.22L8 6l2.91-.59z"/></svg>
        <svg className="absolute bottom-4 left-[20%] w-28 h-28 text-[#d99a2b] opacity-50" data-scroll data-scroll-speed="7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l1.09 3.41L16 6l-2.45 1.78L14 11l-2-1.5L10 11l.45-3.22L8 6l2.91-.59z"/></svg>
        {/* Sparkles */}
        <div className="absolute top-10 left-[30%] w-10 h-10 bg-[#f4f0e4] rotate-45" data-scroll data-scroll-speed="8" style={{ clipPath: 'polygon(50% 0%, 60% 35%, 100% 50%, 60% 65%, 50% 100%, 40% 65%, 0% 50%, 40% 35%)' }} />
        <div className="absolute bottom-10 right-[25%] w-10 h-10 bg-[#cfc7b7] rotate-45" data-scroll data-scroll-speed="9" style={{ clipPath: 'polygon(50% 0%, 60% 35%, 100% 50%, 60% 65%, 50% 100%, 40% 65%, 0% 50%, 40% 35%)' }} />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-[#2d3d37] text-white flex items-center justify-center px-8 relative -mt-[1px]"
        data-scroll
        data-scroll-speed="2"
      >
        <div className="max-w-2xl text-center z-10">
          <h2 className="text-4xl font-semibold mb-6 text-[#f4f0e4]">About Me</h2>
          <p className="text-xl leading-relaxed text-[#d3d3c3]">
            I’m a developer with a love for crafting intuitive, scalable web
            experiences. I combine design and logic to make projects feel both
            functional and beautiful. Outside of code, I read, explore, and
            share insights through writing.
          </p>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute top-10 left-10 w-10 h-10 bg-[#d99a2b] rounded-full opacity-50" data-scroll data-scroll-speed="6" />
        <div className="absolute bottom-10 right-10 w-8 h-8 bg-[#cfc7b7] rounded-full opacity-40" data-scroll data-scroll-speed="-5" />
        <div className="absolute bottom-20 left-1/4 w-6 h-6 bg-[#264e46] rounded-full opacity-60" data-scroll data-scroll-speed="5" />
        <div className="absolute top-1/3 right-[30%] w-6 h-6 border-2 border-[#f4f0e4] rounded-full" data-scroll data-scroll-speed="6" />
        <div className="absolute top-10 left-[45%] w-20 h-[2px] bg-[#d99a2b]" data-scroll data-scroll-speed="-6" />
        <div className="absolute bottom-[30%] left-[60%] w-10 h-5 rounded-t-full bg-transparent border-t-[5px] border-[#cfc7b7]" data-scroll data-scroll-speed="5" />
        {/* Stars */}
        <svg className="absolute top-6 left-[25%] w-32 h-32 text-[#f4f0e4] opacity-30" data-scroll data-scroll-speed="6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l1.09 3.41L16 6l-2.45 1.78L14 11l-2-1.5L10 11l.45-3.22L8 6l2.91-.59z"/></svg>
        <svg className="absolute bottom-8 right-[30%] w-28 h-28 text-[#d99a2b] opacity-40" data-scroll data-scroll-speed="7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l1.09 3.41L16 6l-2.45 1.78L14 11l-2-1.5L10 11l.45-3.22L8 6l2.91-.59z"/></svg>
        {/* Sparkles */}
        <div className="absolute top-[40%] left-[15%] w-10 h-10 bg-[#f4f0e4] rotate-45" data-scroll data-scroll-speed="9" style={{ clipPath: 'polygon(50% 0%, 60% 35%, 100% 50%, 60% 65%, 50% 100%, 40% 65%, 0% 50%, 40% 35%)' }} />
        <div className="absolute bottom-[20%] right-[20%] w-10 h-10 bg-[#d99a2b] rotate-45" data-scroll data-scroll-speed="10" style={{ clipPath: 'polygon(50% 0%, 60% 35%, 100% 50%, 60% 65%, 50% 100%, 40% 65%, 0% 50%, 40% 35%)' }} />
      </section>
    </div>
  );
}