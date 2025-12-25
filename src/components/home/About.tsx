"use client";

import { Github, Linkedin, FileUser } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center my-20 gap-20">
      <div className="flex-1 mt-10">
        <img 
          src="profile.jpg" 
          alt="image" 
          className="w-100 h-auto md:w-120 md:h-auto object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-5">About Me</h1>

      <p className="mb-5">
        I am a self-taught GIS professional specializing in real estate and
        urban planning. I apply spatial problem-solving to real-world challenges
        such as housing availability, site visibility, land use planning, and
        process automation for property management.
      </p>

      <p className="mb-8">
        As technology evolves, I focus on building modern geospatial solutions
        that empower real estate professionals, urban planners, and developers
        to make smarter, data-driven decisions using accurate location
        intelligence. My goal is to transform complex spatial data into
        actionable insights that drive better outcomes.
      </p>

      <div className="flex items-center gap-4 mt-4">
        <a
          href="https://github.com/joshdels"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="GitHub"
        >
          <Github size={32} />
        </a>

        <a
          href="https://www.linkedin.com/in/joshua-de-leon-8b0310301/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={32} />
        </a>

        <a
          href="https://docs.google.com/document/d/1cgLC5nZa1zEWc50NGUkG3fRfPHiJ6kymfsaN7GYC6_M/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Resume"
        >
          <FileUser size={32} />
        </a>
      </div>
      </div>
    
    </div>
  );
}
