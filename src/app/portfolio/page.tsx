import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Guess the Flag",
      description: "A flag guessing game built for iOS with Swift.",
      link: "/portfolio/GuessTheFlag",
      tags: ["iOS", "Swift", "Game"]
    },
    {
      id: 2,
      title: "Recipe Generator",
      description:
        "A recipe generator infused with AI, which suggests a recipe based on what you already have in your kitchen.",
      link: "/portfolio/RecipeGenerator",
      tags: ["Web development", "AI powered", "React"]
    },
    {
      id: 3,
      title: "Tomoto",
      description: "A Pomodoro timer app, with a twist!",
      link: "/portfolio/Tomoto",
      tags: ["TypeScript", "Productivity", "React"]
    },
    {
      id: 4,
      title: "kate code",
      description: "My personal website!",
      link: "/portfolio/KateCode",
      tags: ["Next.js", "Portfolio", "Tailwind CSS"]
    },
    {
      id: 5,
      title: "Charted",
      description:
        "A minimalist web app that lets you track which countries you've visited on an interactive world map.",
      link: "/portfolio/Charted",
      tags: ["Mapping", "Web development", "JavaScript"]
    },
  ];

  const borderColors = ["border-[#d99a2b]", "border-[#2d7d6b]", "border-[#cfc7b7]", "border-[#264e46]", "border-[#d3c6ae]"];

  return (
    <div className="min-h-screen bg-[#f4f0e4] text-[#4e5e58] px-6 sm:px-10 md:px-20 py-16">
      <h1 className="text-6xl font-serif font-bold text-[#4e5e58]">Projects</h1>
      <p className="mt-4 text-xl max-w-3xl">
        Take a look at some of my projects. There's a mix of personal and work projects here. For the work projects I won't be able to go into the same depth, but I will talk about what I learned and achieved!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <Link key={project.id} href={project.link}>
            <div className={`bg-[#f4f0e4] h-56 p-6 rounded-2xl shadow-md ${borderColors[index % borderColors.length]} border-2 hover:shadow-xl transition cursor-pointer group overflow-hidden flex flex-col justify-between`}>
              <div>
                <h2 className="text-2xl font-bold text-[#2d7d6b] group-hover:text-[#264e46] transition">
                  {project.title}
                </h2>
                <p className="mt-3 text-[#4e5e58] text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-[#d3c6ae] text-[#2d3d37] text-xs font-medium px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Extra decorations */}
      <div className="absolute bottom-10 left-24 w-8 h-8 bg-[#cfc7b7] rounded-full opacity-50" />
      <div className="absolute bottom-20 right-32 w-14 h-2 bg-[#d99a2b]" />
    </div>
  );
}