export default function Contact() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full p-2 border rounded"></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
}