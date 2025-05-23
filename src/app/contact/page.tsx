"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
      setStatus(data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error(error.message);
      setStatus("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="bg-[#22302b] text-[#f4f0e4] py-20 px-6 sm:px-10 md:px-20 lg:px-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold font-serif mb-6">Let’s Connect</h1>
        <p className="text-lg mb-8">
          I'm currently open to new opportunities and 
          <br></br>collaborations. 
          </p>
          <p className="text-lg mb-8">  
          Whether you have a project in mind or just want to chat,
          <br>
          </br> feel free to reach out - I'd love to hear from you!
        </p>
        <div className="flex justify-center space-x-6 text-2xl mb-12">
          {/* <a href="mailto:kate@example.com" className="hover:text-[#d99a2b] transition-colors">
            <FaEnvelope />
          </a> */}
          <a href="https://github.com/KateHickey26" target="_blank" className="hover:text-[#d99a2b] transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/k-hickey/" target="_blank" className="hover:text-[#d99a2b] transition-colors">
            <FaLinkedin />
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field */}
          <input
            type="text"
            name="middleName"
            value={(formData as any).middleName || ""}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />
          {/* Main fields */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full bg-transparent border-b-2 border-[#cfc7b7] p-2 placeholder-[#cfc7b7] text-[#f4f0e4] focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-transparent border-b-2 border-[#cfc7b7] p-2 placeholder-[#cfc7b7] text-[#f4f0e4] focus:outline-none"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full bg-transparent border-b-2 border-[#cfc7b7] p-2 placeholder-[#cfc7b7] text-[#f4f0e4] focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#d99a2b] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Send Message
          </button>
        </form>

        {status && <p className="mt-6 text-[#cfc7b7]">{status}</p>}
      </div>
    </div>
  );
}