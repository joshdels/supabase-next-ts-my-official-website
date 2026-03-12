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
      <Header />
      <WorkExperience />
      <EducationSection />
      <Skills />
    </>
  );
}
