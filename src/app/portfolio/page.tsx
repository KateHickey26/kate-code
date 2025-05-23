"use client";

import Link from "next/link";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const projects = [
  {
    title: "Guess the Flag",
    tag: "iOS / Swift",
    href: "/portfolio/GuessTheFlag",
    image: "/images/guess-the-flag.jpg",
    border: "border-[#d99a2b]",
  },
  {
    title: "Recipe Generator",
    tag: "AI / TypeScript",
    href: "/portfolio/RecipeGenerator",
    image: "/images/recipe-generator.jpg",
    border: "border-[#2d7d6b]",
  },
  {
    title: "Tomoto",
    tag: "Productivity",
    href: "/portfolio/Tomoto",
    image: "/images/tomoto.jpg",
    border: "border-[#cfc7b7]",
  },
  {
    title: "Kate Code",
    tag: "Next.js / Tailwind",
    href: "/portfolio/KateCode",
    image: "/images/kate-code.jpg",
    border: "border-[#264e46]",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#e3e1d8] text-[#22302b] relative overflow-hidden py-20 px-6 sm:px-10 md:px-20 lg:px-32">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#f4f0e4] rounded-br-[5rem] opacity-60" />
      <div className="absolute top-0 right-0 w-56 h-56 bg-[#d99a2b] rounded-bl-[5rem] opacity-70" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#cfc7b7] rounded-tr-[5rem] opacity-80" />
      <div className="absolute bottom-10 right-10 w-12 h-12 bg-[#2d7d6b] rotate-45 opacity-50" />

      {/* Header */}
      <div className="relative max-w-4xl mx-auto z-10 mb-12 flex items-center justify-center">
        <div className="bg-[#f4f0e4] px-12 py-6 rounded-2xl shadow-lg">
          <h1 className="text-5xl font-serif font-bold">PORTFOLIO</h1>
          <p className="text-lg mt-2">A showcase of my favorite projects—apps, tools, and experiments.</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative max-w-5xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <Link key={proj.title} href={proj.href} className="group">
            <div className={`bg-[#f4f0e4] rounded-lg shadow-lg hover:shadow-2xl transition p-4 flex flex-col border-2 ${proj.border}`}> 
              {/* Image */}
              <div className="w-full h-48 relative rounded-md overflow-hidden mb-4">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Title */}
              <h2 className="text-2xl font-serif font-bold mb-2">{proj.title}</h2>
              {/* Tag */}
              <span className="inline-block text-sm text-[#4e5e58] mb-4 px-2 py-1 bg-white/30 rounded">{proj.tag}</span>
              {/* CTA */}
              <div className="mt-auto flex items-center text-[#22302b] hover:text-[#4e5e58] transition-colors">
                <span className="font-medium mr-2">View Details</span>
                <FaChevronRight />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}