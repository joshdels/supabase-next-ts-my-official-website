"use client";

import { Github, Linkedin, FileUser } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div
      id="about-section"
      className="flex flex-col-reverse lg:flex-row items-center
        my-20 gap-1 lg:gap-20 justify-center min-h-screen bg-gray-100
        -mx-5 sm:-mx-5 md:-mx-10 lg:-mx-20 2xl:-mx-40 
        px-5 sm:px-5 md:px-10 lg:px-20 2xl:px-40"
    >
      <div className="flex-1 mt-10">
        <Image
          src="/profile.jpg"
          alt="Joshua De Leon"
          width={500}
          height={500}
          className="object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-2 text-base lg:text-lg">
        <h1 className="text-3xl font-semibold mb-5">About Me</h1>

        <p className="mb-6 text-justify leading-relaxed">
          Hi, I'm <strong>Joshua De Leon</strong> from the Philippines. I
          specialize in enterprise-level{" "}
          <strong>
            geospatial systems, data engineering, and GIS automation across
            desktop, web, and cloud environments
          </strong>
          . My work focuses on helping organizations transform complex spatial
          and urban data into actionable insights, supporting industries such as
          location intelligence, real estate, urban planning, infrastructure
          analysis, and environmental and hydrological studies.
        </p>

        <p className="mb-6 text-justify leading-relaxed text-gray-800">
          To achieve this, I design and build{" "}
          <strong>
            scalable WebGIS platforms, intuitive dashboards, and automated data
            pipelines
          </strong>{" "}
          that simplify how spatial information is collected, processed, and
          visualized. I also optimize <strong>GIS cloud infrastructure</strong>{" "}
          to efficiently manage large geospatial datasets, enabling
          organizations to perform advanced site selection, land use planning,
          and accessibility analysis while maintaining a strong focus on{" "}
          <strong>user-centered design and performance</strong>.
        </p>

        <p className="mb-10 text-justify leading-relaxed">
          Ultimately, my mission is to make{" "}
          <strong>geospatial technology simple, usable, and impactful</strong>.
          By automating repetitive workflows and building{" "}
          <strong>high-performance spatial data pipelines</strong>, I help teams
          spend less time managing data and more time turning spatial insights
          into meaningful decisions and real-world outcomes.
        </p>

        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://github.com/joshdels"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>

          <a
            href="https://www.linkedin.com/in/joshua-de-leon-8b0310301/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>

          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors"
            aria-label="Resume"
          >
            <FileUser size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}
