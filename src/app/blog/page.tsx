"use client";

import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const categories = [
  {
    name: "Travel",
    href: "/blog/travel",
    color: "border-[#d99a2b]",
    description: "Explorations, itineraries, and stories from the road.",
    image: "/images/travel-card.jpg",
  },
  {
    name: "Books",
    href: "/blog/books",
    color: "border-[#2d7d6b]",
    description: "Reflections, reviews, and recommendations.",
    image: "/images/books-card.jpg",
  },
  {
    name: "Tech",
    href: "/blog/tech",
    color: "border-[#cfc7b7]",
    description: "Thoughts on software, coding, and tools.",
    image: "/images/tech-card.jpg",
  },
];

export default function BlogLandingPage() {
  return (
    <div className="min-h-screen bg-[#b6c5a6] text-[#22302b] py-20 px-6 sm:px-10 md:px-20 lg:px-32 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#f4f0e4] rounded-br-[5rem] opacity-60" />
      <div className="absolute top-0 right-0 w-40 h-40 bg-[#d99a2b] rounded-bl-[5rem] opacity-70" />
      <div className="absolute bottom-0 left-0 w-52 h-52 bg-[#f0e5cd] rounded-tr-[5rem] opacity-80" />

      {/* Header */}
      <div className="relative max-w-4xl mx-auto z-10 text-center mb-12">
        <h1 className="text-6xl font-serif font-bold mb-4">Blog</h1>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto">
          A space for my thoughts on travel, literature, and tech. Pick a topic to start exploring.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="relative max-w-5xl mx-auto z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Link key={cat.name} href={cat.href} className="group">
            <div
              className={`bg-[#f4f0e4] rounded-lg shadow-lg hover:shadow-2xl transition p-6 flex flex-col border-2 ${cat.color}`}
            >
              {/* Image */}
              <div className="w-full h-40 relative rounded-md overflow-hidden mb-4">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Title */}
              <h2 className="text-2xl font-serif font-bold mb-2 flex justify-between items-center">
                {cat.name} <FaArrowRight className="text-[#4e5e58] group-hover:text-[#22302b] transition-colors" />
              </h2>
              {/* Description */}
              <p className="text-[#4e5e58] flex-grow">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}