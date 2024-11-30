export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700">Welcome to my space</h1>
      <p className="mt-4 text-gray-700">Explore my portfolio, experience, blogs, and more!</p>

      {/* About Me Section */}
      <section className="mt-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Hello!</h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image */}
          <img
            src="/profile.jpg"
            alt="My Profile Picture"
            className="w-32 h-32 rounded-full object-cover mb-4 md:mb-0 md:mr-8"
          />

          {/* About Me Text */}
          <p className="text-lg text-gray-700">
            I'm Kate, I write code, read books, and travel the world.
            
            Welcome to my space where I share my work, blogs, and
            ideas!
          </p>
        </div>
        <div>
        <a href="/about" className="mt-4 inline-block bg-blue-200 text-white px-4 py-2 rounded hover:bg-blue-400">
  
  Click here to learn more about me
</a>
        </div>
      </section>
    </div>
  );
}