// File: src/app/data/blogPosts.ts

export interface Post {
  slug: string;
  category: string;
  title: string;
  date: string;
  heroImage?: string;
  intro: string;
  excerpt?: string;
  content: string[];
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
  color: string;
}

// Sample static posts; replace with dynamic data fetching or MDX import
export const allPosts: Post[] = [
  {
    slug: "japan-itinerary",
    category: "travel",
    title: "Exploring Japan: 10 Days Itinerary",
    date: "May 10, 2024",
    heroImage: "/images/japan-hero.jpg",
    intro:
      "Join me on a ten-day journey through Japan's vibrant cities, serene temples, and breathtaking countryside. This guide will help you make the most of each destination.",
    content: [
      "Day 1: Arrival in Tokyo and Shibuya crossing excitement...",
      "Day 2: Tsukiji fish market breakfast and Asakusa temple visit...",
      "Day 3: Travel to Kyoto via Shinkansen bullet train...",
    ],
    prev: { title: "Hidden Gems of Kyoto", href: "/blog/travel/kyoto-gems" },
    next: { title: "Wanderlust Destinations: Patagonia", href: "/blog/travel/patagonia-trek" },
    color: "#d99a2b",
  },
  {
    slug: "japan-itinerary",
    category: "books",
    title: "Exploring Japan: 10 Days Itinerary",
    date: "May 10, 2024",
    heroImage: "/images/japan-hero.jpg",
    intro:
      "Join me on a ten-day journey through Japan's vibrant cities, serene temples, and breathtaking countryside. This guide will help you make the most of each destination.",
    content: [
      "Day 1: Arrival in Tokyo and Shibuya crossing excitement...",
      "Day 2: Tsukiji fish market breakfast and Asakusa temple visit...",
      "Day 3: Travel to Kyoto via Shinkansen bullet train...",
    ],
    prev: { title: "Hidden Gems of Kyoto", href: "/blog/travel/kyoto-gems" },
    next: { title: "Wanderlust Destinations: Patagonia", href: "/blog/travel/patagonia-trek" },
    color: "#d99a2b",
  },
  // Add more posts here...
];

/**
 * Get a single post by category and slug
 */
export function getPost(category: string, slug: string): Post | undefined {
  return allPosts.find(
    (p) =>
      p.category.toLowerCase() === category.toLowerCase() &&
      p.slug === slug
  );
}

/**
 * Get all posts in a given category
 */
export function getPostsByCategory(category: string): Post[] {
  return allPosts.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
}
