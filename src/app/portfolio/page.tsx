import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Guess the Flag",
      description: "A flag guessing game built for iOS with Swift.",
      link: "/portfolio/GuessTheFlag",
    },
    {
      id: 2,
      title: "Recipe Generator",
      description:
        "A recipe generator infused with AI, which suggests a recipe based on what you already have in your kitchen.",
        link: "/portfolio/RecipeGenerator",
    },
    {
      id: 3,
      title: "Tomoto",
      description:
        "A Pomodoro timer app, with a twist!",
        link: "/portfolio/Tomoto",
    },
    {
      id: 4,
      title: "kate code",
      description:
        "My personal website!",
        link: "/portfolio/kate-code",
    },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700">Portfolio</h1>
      <h2 className="text-1xl mt-2 font-bold text-gray-500">
        Take a look at some of my projects. There's a mix of personal and work projects here. For the work projects I won't be able to go in to the same depth, but I will talk about what I learned and achieved!
      </h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {projects.map((project) => (
          <Link key={project.id} href={project.link}>
            <div className="p-4 h-48 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
              <h2 className="text-2xl font-semibold text-gray-500">
                {project.title}
              </h2>
              <p className="mt-2 text-gray-400">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}