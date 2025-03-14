export default function Blog() {
  const categories = ["Travel", "Books"];

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-500">Blog</h1>
      <ul className="mt-4 space-y-2">
        {categories.map((category) => (
          <li key={category} className="text-gray-500 hover:underline">
            <a href={`/blog/${category.toLowerCase()}`}>{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}