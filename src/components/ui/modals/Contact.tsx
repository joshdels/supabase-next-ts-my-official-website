"use client";

import Contact from "../../home/Contact";

export default function ContactModal() {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-md p-5">
      <div className="max-h-[90vh] w-full lg:w-3/5 overflow-y-auto">
        <Contact />
      </div>
    </div>
  );
}
