"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  return (
    <header
      className="relative bg-[#f4f0e4] text-black py-4 z-10 transition-colors duration-300"
      data-scroll
      data-scroll-class="bg-gray-900"
  
    >
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">kate code</h1>
        <ul className="flex space-x-4 relative">
          <li>
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-blue-400">
              Portfolio
            </Link>
          </li>
          {/* Blog Dropdown */}
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => setIsBlogDropdownOpen(true)}
            onMouseLeave={() => setIsBlogDropdownOpen(false)}
          >
            <span className="hover:text-blue-400">Blog</span>
            {/* Dropdown Menu */}
            <ul
              className={`absolute top-8 left-0 bg-white text-gray-800 shadow-lg rounded-md p-2 space-y-2 transform transition-all duration-300 ${
                isBlogDropdownOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              <li>
                <Link
                  href="/blog/travel"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Travel
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/books"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Books
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;