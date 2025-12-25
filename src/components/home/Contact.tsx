"use client";

import { useState, useRef, useEffect } from "react";
import { useCountries } from "@/src/hooks/useCountries";
import { Mail, Linkedin, Github, Calendar } from "lucide-react";
import Success from "../ui/modals/Success";

interface Country {
  id: number;
  value: string;
}

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  const { countries, loading } = useCountries();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowSuccess(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      country_value: formData.get("country_value"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.success) {
        setShowSuccess(true);
        form.reset();
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again");
    }
  }

  return (
    <div className="border border-gray-200 rounded-xl p-10 bg-white shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Form */}
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-semibold mb-2 text-gray-900">
            Get in Touch
          </h1>
          <p className="text-gray-600 mb-4">
            Have a real estate or GIS challenge? Let’s talk about how spatial
            data can help you level up your operations.
          </p>

          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              className="p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-900"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              className="p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-900"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="country_value"
              className="mb-1 font-medium text-gray-700"
            >
              Country
            </label>
            <select
              name="country_value"
              id="country_value"
              defaultValue=""
              className="p-2 border border-gray-300 text-gray-600 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
              required
            >
              <option value="" disabled>
                {loading ? "Loading..." : "Select a country"}
              </option>
              {!loading &&
                countries.map((country: Country) => (
                  <option key={country.id} value={country.value}>
                    {country.value}
                  </option>
                ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
              className="p-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-900"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-800 text-white rounded-md p-3 font-medium transition-colors cursor-pointer flex items-center justify-center gap-2"
          >
            <Mail size={20} /> Send Message
          </button>
        </form>

        {/* Right: Direct Contact Buttons */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-600 mb-4 font-medium">
            Or reach me directly via:
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/joshua-de-leon-8b0310301/"
              target="_blank"
              className="border border-gray-300 hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/joshdels"
              target="_blank"
              className="border border-gray-300 hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href="https://calendly.com/yourcalendly"
              target="_blank"
              className="border border-gray-300 hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
            >
              <Calendar size={18} /> Schedule a Call
            </a>
          </div>
        </div>
      </div>

      {/* Success popup */}
      {showSuccess && (
        <div>
          <Success />
        </div>
      )}
    </div>
  );
}
