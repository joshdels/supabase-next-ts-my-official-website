"use client";

import { useState, useRef, useEffect } from "react";
import { useCountries } from "@/src/hooks/useCountries";
import { Mail, Linkedin, Github, Calendar, X, House } from "lucide-react";
import Success from "../ui/modals/Success";
import { useContactStore } from "@/src/store/useContactStore";

interface Country {
  id: number;
  value: string;
}

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const { showContact, setShowContact } = useContactStore();
  const popupRef = useRef<HTMLDivElement | null>(null);
  const { countries, loading } = useCountries();

  const handleBackHome = () => setShowContact(false);

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
      const timer = setTimeout(() => {
        setShowSuccess(false), setShowContact(false);
      }, 3000);
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
    <div
      className={`
      mx-auto p-6 lg:p-10 bg-white shadow-sm rounded-2xl relative transition-all duration-300
      ${showContact && "max-w-6xl mx-auto"}
    `}
    >
      {showContact && (
        <button
          onClick={() => setShowContact(false)}
          aria-label="Close contact form"
          className="p-2 absolute top-5 rounded-full bg-white border border-gray-300 right-5 text-red-500 hover:text-red-700 hover:bg-red-100 transition cursor-pointer"
        >
          <X size={28} />
        </button>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12">
        {/* Form Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Have an urban challenge like real estate or city planning? Let’s
            explore how spatial data can help you.
          </p>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-900"
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
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-900"
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
                className="p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
              <label
                htmlFor="message"
                className="mb-1 font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-900"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-900 text-white rounded-lg py-3 font-semibold transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail size={20} /> Send Message
            </button>
          </form>
        </div>

        {/* Direct Contact Section */}
        <div className="flex flex-col justify-center border border-gray-200 bg-gray-50 p-8 rounded-xl shadow-md">
          <p className="text-gray-600 mb-5 font-medium">
            Or reach me directly via:
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/joshua-de-leon-8b0310301/"
              target="_blank"
              className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition text-gray-800"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://github.com/joshdels"
              target="_blank"
              className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition text-gray-800"
            >
              <Github size={20} /> GitHub
            </a>
            {/* <a
              href="https://calendly.com/yourcalendly"
              target="_blank"
              className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 hover:bg-gray-100 transition text-gray-800"
            >
              <Calendar size={20} /> Schedule a Call
            </a> */}
          </div>

          {showContact && (
            <button
              onClick={handleBackHome}
              className="mt-8 text-gray-600 hover:text-gray-900 underline transition self-start flex items-center gap-2 cursor-pointer"
            >
              <House size={18} /> Back to Home
            </button>
          )}
        </div>
      </div>

      {/* Success Popup */}
      {showSuccess && (
        <Success show={showSuccess} onClose={() => setShowSuccess(false)} />
      )}
    </div>
  );
}
