// File: src/app/blog/[category]/page.tsx
// Category landing: lists posts in a category

import { notFound } from "next/navigation";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { getPostsByCategory, Post } from "@/app/data/blogPosts";

interface Props {
  params: { category: string };
}

export default function CategoryPage({ params }: Props) {
  const { category } = params;
  const posts: Post[] = getPostsByCategory(category);
  if (!posts || posts.length === 0) {
    return notFound();
  }

  const title = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="min-h-screen bg-[#b6c5a6] text-[#22302b] py-20 px-6 sm:px-10 md:px-20 lg:px-32 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#f4f0e4] rounded-br-[5rem] opacity-60" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#d99a2b] rounded-bl-[5rem] opacity-70" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#f0e5cd] rounded-tr-[5rem] opacity-80" />

      {/* Header */}
      <div className="relative max-w-4xl mx-auto z-10 text-center mb-12">
        <h1 className="text-6xl font-serif font-bold mb-4">{title}</h1>
        <p className="text-lg leading-relaxed">
          {/* Category-specific blurb */}
          {title === "Travel"
            ? "Stories and guides from my journeys around the world."
            : title === "Books"
            ? "In-depth reviews and reflections on my latest reads."
            : "Insights into software, tools, and coding best practices."}
        </p>
      </div>

      {/* Posts Grid */}
      <div className="relative max-w-4xl mx-auto z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${category}/${post.slug}`} className="group">
            <div className="bg-[#f4f0e4] rounded-lg shadow-lg hover:shadow-2xl transition p-4 flex flex-col">
              {/* Optional image */}
              {post.heroImage && (
                <div className="w-full h-40 relative rounded-md overflow-hidden mb-4">
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h2 className="text-2xl font-serif font-bold mb-2 flex justify-between items-center">
                {post.title} <FaArrowRight className="text-[#4e5e58] group-hover:text-[#22302b] transition-colors" />
              </h2>
              <p className="text-[#4e5e58] mb-4 flex-grow">{post.excerpt || post.intro}</p>
              <span className="text-[#a2a59d] text-sm">{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
