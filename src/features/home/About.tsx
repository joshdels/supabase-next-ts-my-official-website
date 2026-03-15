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
          width={500} height={500}
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
            desktop, web, and cloud environments.
          </strong>{" "}
          I help organizations transform complex spatial and urban data into
          actionable insights, with work spanning location intelligence, real
          estate, urban planning, and infrastructure analysis, as well as
          environmental and hydrological studies.
        </p>

        <p className="mb-6 text-justify leading-relaxed text-gray-800">
          I design and implement{" "}
          <strong>
            scalable WebGIS platforms, intuitive dashboards, and automated data
            pipelines
          </strong>{" "}
          while optimizing <strong>GIS cloud infrastructure</strong>
          to handle massive datasets with high-performance precision. My
          solutions empower enterprises to master site selection, land use
          planning, and accessibility mapping—bridging deep technical expertise
          with <strong>user-centric design</strong> to drive strategic,
          data-backed decision-making.
        </p>

        <p className="mb-10 text-justify">
          My goal is simple: to make{" "}
          <strong>Geospatial simple, usable, and impactful</strong>. By
          automating the "boring" parts of data processing and building
          <strong>high-performance digital pipelines</strong>, I help
          organizations focus on what matters most turning spatial insights into
          real-world action.
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

          <Link
            href="/resume"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Resume"
          >
            <FileUser size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}
