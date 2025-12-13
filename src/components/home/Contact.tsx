"use client";

import { useState, useRef, useEffect } from "react";

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  // Handle click outside popup to hide it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowSuccess(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hide popup after 5 seconds automatically
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // You would normally send your message here (API call, etc.)

    // Show success popup
    setShowSuccess(true);

    // Reset form if needed
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="border border-gray-300 rounded-xl p-6 bg-gray-50 mx-auto relative">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold mb-2">Get in Touch</h1>
        <p className="text-gray-700 mb-4">
          Want to level up your enterprise to a full-fledged operation? I'm here to help!
        </p>

        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            className="p-2 border border-gray-400 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            className="p-2 border border-gray-400 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your Message"
            className="p-2 border border-gray-400 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gray-400 rounded-md p-3 hover:bg-gray-500 text-white font-medium transition-colors cursor-pointer"
        >
          Send Message
        </button>
      </form>

      {/* Success popup */}
      {showSuccess && (
        <div
          ref={popupRef}
          className="absolute top-5 right-5 bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm animate-fadeIn"
        >
          Message sent successfully!
        </div>
      )}

      {/* Tailwind keyframes for fadeIn */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out forwards;
        }

        .animate-fadeOut {
          animation: fadeOut 0.3s ease-in-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeOut {
          from { opacity: 1; transform: translateY(0); }
          to { opacity: 0; transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
