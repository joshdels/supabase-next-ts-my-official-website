"use client";

import Navbar from "@/src/components/layout/Navbar";
import EducationSection from "@/src/features/resume/Education";
import Header from "@/src/features/resume/Header";
import Skills from "@/src/features/resume/Skills";
import WorkExperience from "@/src/features/resume/Experience";

export default function Resume() {
  return (
    <>
      <Navbar />

      <div
        className="text-gray-800 items-center justify-between text-md border-b
       border-gray-200 px-6 sm:px-5 md:px-20 lg:px-20 2xl:px-40 py-4  w-full z-100 shadow-2xs"
      >
        <Header />
        <WorkExperience />
        <EducationSection />
        <Skills />
      </div>
    </>
  );
}
