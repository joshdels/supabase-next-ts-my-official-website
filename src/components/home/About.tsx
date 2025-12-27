"use client";

import { Github, Linkedin, FileUser } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center my-20 gap-20">
      <div className="flex-1 mt-10">
        <img
          src="profile.jpg"
          alt="Joshua De Leon"
          className="w-100 h-auto md:w-120 md:h-auto object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-5">About Me</h1>

        <p className="mb-5 text-justify">
          Hi, I'm <strong>Joshua De Leon</strong> from the Philippines. I work
          remotely at the intersection of urban systems, real estate, and
          geospatial technology. I help organizations understand how cities
          function from land and housing to accessibility, infrastructure, and
          site visibility turning complex spatial data into actionable insights.
        </p>

        <p className="mb-5 text-justify">
          I design scalable <strong>WebGIS platforms</strong> capable of
          handling large datasets, making location intelligence accessible to
          decision-makers, analysts, and organizations. My solutions support
          site selection, housing analysis, land use planning, and workflow
          automation, bridging technical expertise with practical impact.
        </p>

        <p className="mb-5 text-justify">
          My mission is to empower real estate developers, urban planners, and
          organizations to make smarter, data-driven decisions using modern
          geospatial tools that simplify the complexity of cities into clear
          insights.
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
