import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaCircle } from "react-icons/fa";
import { getProject } from "@/app/data/projects";

interface Project {
  slug: string;
  title: string;
  tag: string;
  image: string;
  overview: string;
  responsibilities: string[];
  challenges: string[];
  liveDemoUrl: string;
  sourceUrl: string;
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
    const project: Project | undefined = getProject(params.slug);
    if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f4f0e4] text-[#22302b] relative overflow-hidden py-20 px-6 sm:px-10 md:px-20 lg:px-32">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#b6c5a6] rounded-br-[5rem] opacity-60" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#d99a2b] rounded-bl-[5rem] opacity-70" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#cfc7b7] rounded-tr-[5rem] opacity-80" />

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Header & Close */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold">
            {project.title}
          </h1>
          <Link
            href="/portfolio"
            className="text-2xl hover:text-[#4e5e58] transition-colors"
          >
            ×
          </Link>
        </div>

        {/* Hero Image */}
        <div className="rounded-lg overflow-hidden shadow-lg mb-8">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Tech Stack Pill */}
        <div
          className="inline-flex items-center px-4 py-2 rounded-full text-white mb-6"
          style={{ backgroundColor: "#2d7d6b" }}
        >
          <FaCircle className="mr-2 text-sm" /> {project.tag}
        </div>

        {/* Overview */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <FaCircle className="text-[#d99a2b]" /> Overview
          </h2>
          <p className="leading-relaxed">{project.overview}</p>
        </section>

        {/* Responsibilities */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <FaCircle className="text-[#2d7d6b]" /> Responsibilities &amp; Features
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {project.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Challenges */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <FaCircle className="text-[#cfc7b7]" /> Challenges &amp; Learnings
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {project.challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href={project.liveDemoUrl}
            target="_blank"
            className="bg-[#2d7d6b] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Live Demo
          </a>
          <a
            href={project.sourceUrl}
            target="_blank"
            className="bg-[#d99a2b] text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            View Source
          </a>
        </div>

        {/* Footer Nav */}
        <div className="flex justify-between text-lg font-medium">
          <Link
            href="/portfolio"
            className="hover:text-[#4e5e58] transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}