"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-8">
        <div className="text-2xl font-serif font-bold text-[#22302b]">kate code</div>
        <ul className="flex space-x-6 uppercase tracking-wide text-sm text-[#22302b]">
          {['Home','Portfolio','Blog','Contact'].map((item) => (
            <li key={item}>
              <a href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} className="hover:text-[#4e5e58] transition-colors">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}