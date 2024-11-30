export default function Portfolio() {
  const projects = [
    { id: 1, title: "Project 1", description: "Description of project 1" },
    { id: 2, title: "Project 2", description: "Description of project 2" },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project) => (
          <div key={project.id} className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}