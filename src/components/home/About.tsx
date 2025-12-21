"use client";

import { Github, Linkedin, FileUser} from "lucide-react";


export default function About() {
  return(
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-semibold mb-5">About me</h1>

        <p className="mb-5">
          I've always been fascinated by maps. Every time I look at one, it feels like the universe is guiding me toward this field helping me see, analyze, and share how powerful geospatial data can be.
        </p>

        <p className="mb-8">
          Today, I focus on building modern geospatial solutions that help businesses grow, operate smarter, and make better decisions using accurate location intelligence.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://github.com/joshdels"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Profile"
          >
            <Github size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/joshua-de-leon-8b0310301/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Profile"
          >
            <Linkedin size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/joshua-de-leon-8b0310301/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors "
            aria-label="Profile"
          >
            <FileUser size={32} />
          </a>
        </div>
      </div>
    </>
  )
}