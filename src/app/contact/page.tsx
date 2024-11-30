"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      const data = await res.json();
      setStatus(data.message); // Show success message
      setFormData({ name: "", email: "", message: "" }); // Clear the form
    } catch (error: any) {
      console.error(error.message);
      setStatus("Error submitting form. Please try again.");
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700">Contact Me</h1>
      <p className="mt-4 text-lg text-gray-600">
        I’d love to hear from you! Use the form below to send me a message.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
  <div>
    <label className="block text-gray-700">Name</label>
    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      className="w-full p-2 border rounded text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your name"
      required
    />
  </div>
  <div>
    <label className="block text-gray-700">Email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      className="w-full p-2 border rounded text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your email"
      required
    />
  </div>
  <div>
    <label className="block text-gray-700">Message</label>
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      className="w-full p-2 border rounded text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Write your message here"
      required
    ></textarea>
  </div>
  <button
    type="submit"
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    Send
  </button>
</form>
      {status && <p className="mt-4 text-gray-600">{status}</p>}
    </div>
  );
}