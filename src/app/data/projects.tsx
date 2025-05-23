export interface Project {
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
  
  export const allProjects: Project[] = [
    {
      slug: "GuessTheFlag",
      title: "Guess the Flag",
      tag: "iOS / Swift",
      image: "/images/guess-the-flag-hero.jpg",
      overview:
        "A fast-paced flag quiz game where you match country outlines to their names, complete with a countdown timer and animated score feedback.",
      responsibilities: [
        "Built interactive quiz logic in Swift + UIKit",
        "Designed adaptive layouts for all iPhone screens",
        "Implemented countdown timer and animated score pop-ups",
      ],
      challenges: [
        "Managing quiz state across multiple view controllers",
        "Optimizing image loading for smooth gameplay",
        "Ensuring accessibility for color-blind users",
      ],
      liveDemoUrl: "https://example.com/guess-the-flag",
      sourceUrl: "https://github.com/yourusername/guess-the-flag",
    },
    {
      slug: "RecipeGenerator",
      title: "Recipe Generator",
      tag: "AI / TypeScript",
      image: "/images/recipe-generator-hero.jpg",
      overview:
        "An AI-powered web app that suggests recipes based on ingredients you already have in your kitchen.",
      responsibilities: [
        "Integrated OpenAI API for natural language prompt processing",
        "Built responsive UI with React and Tailwind",
        "Deployed as a serverless function with Next.js API routes",
      ],
      challenges: [
        "Fine-tuning prompts to balance creativity versus realism",
        "Ensuring low-latency responses for a smooth UX",
        "Implementing ingredient sanitization and validation",
      ],
      liveDemoUrl: "https://example.com/recipe-generator",
      sourceUrl: "https://github.com/yourusername/recipe-generator",
    },
    // …more projects…
  ];
  
  export function getProject(slug: string): Project | undefined {
    return allProjects.find((p) => p.slug === slug);
  }