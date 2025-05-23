// File: src/app/blog/[category]/[slug]/page.tsx
// Individual post page (dynamic)

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { getPost, Post } from "@/app/data/blogPosts";

interface Props {
  params: { category: string; slug: string };
}

export default function BlogPostPage({ params }: Props) {
  const { category, slug } = params;
  const post: Post | undefined = getPost(category, slug);
  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-[#b6c5a6] text-[#22302b] relative overflow-hidden py-20 px-6 sm:px-10 md:px-20 lg:px-32">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#f4f0e4] rounded-br-[5rem] opacity-60" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#d99a2b] rounded-bl-[5rem] opacity-70" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#f0e5cd] rounded-tr-[5rem] opacity-80" />

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Hero Image */}
        {post.heroImage && (
          <div className="rounded-lg overflow-hidden shadow-lg mb-8">
            <Image
              src={post.heroImage}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Meta */}
        <span
          className="inline-block text-sm font-medium uppercase px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: post.color }}
        >
          {post.category}
        </span>
        <h1 className="text-5xl font-serif font-bold mt-4">{post.title}</h1>
        <p className="text-sm text-[#a2a59d] mt-1">{post.date}</p>

        {/* Intro */}
        <p className="mt-6 text-lg leading-relaxed">{post.intro}</p>

        {/* Content */}
        <div className="mt-8 space-y-6 text-base leading-relaxed">
          {post.content.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between text-lg font-medium">
          {post.prev ? (
            <Link
              href={post.prev.href}
              className="flex items-center text-[#2d3d37] hover:text-[#4e5e58] transition-colors"
            >
              <FaArrowLeft className="mr-2" /> {post.prev.title}
            </Link>
          ) : (
            <div />
          )}

          {post.next ? (
            <Link
              href={post.next.href}
              className="flex items-center text-[#2d3d37] hover:text-[#4e5e58] transition-colors"
            >
              {post.next.title} <FaArrowRight className="ml-2" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}