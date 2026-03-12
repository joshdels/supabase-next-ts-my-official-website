"use client";

import { Github, Linkedin, FileUser } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center my-20 gap-1 lg:gap-20">
      <div className="flex-1 mt-10">
        <img
          src="profile.jpg"
          alt="Joshua De Leon"
          className="w-auto h-auto md:w-120 md:h-auto object-cover rounded-xl shadow-lg"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-5">About Me</h1>

        <p className="mb-5 text-justify">
          Hi, I'm <strong>Joshua De Leon</strong> from the Philippines. I
          specialize in enterprise-level{" "}
          <strong>geospatial systems, data engineering, and automation</strong>,
          helping organizations transform complex spatial and urban data into
          actionable insights. My work spans location intelligence, real estate,
          infrastructure analysis, and urban planning.
        </p>

        <p className="mb-5 text-justify">
          I design and implement <strong>scalable WebGIS platforms, dashboards, and automated pipelines </strong>
           capable of handling large datasets for high-performance analytics. My
          solutions enable enterprises to perform site selection, land use
          planning, housing analysis, accessibility mapping, and workflow
          automation bridging technical expertise with strategic
          decision-making.
        </p>

        <p className="mb-5 text-justify">
          My mission is to empower organizations, developers, and urban planners
          to make smarter, data-driven decisions. I simplify complex spatial
          systems into clear, actionable insights using modern geospatial
          technology, scalable infrastructure, and automated workflows.
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
