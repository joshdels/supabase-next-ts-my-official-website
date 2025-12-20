"use client";

import { useState } from "react";
import { PanelTopClose, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "Services", "Demo", "Project", "About"];

  return (
    <>
      <div
        className={`
          flex bg-white/80 backdrop-blur-sm text-gray-800 items-center justify-between
          text-md border-b border-gray-200
          px-6 sm:px-10 md:px-20 lg:px-40 2xl:px-80
          py-4 fixed top-0 left-0 w-full z-50 shadow-2xs
        `}
      >
        {/* Logo / Name */}
        <h1 className="font-bold text-xl md:text-xl tracking-wide cursor-pointer hover:text-gray-900 transition-colors duration-300">
          <Link href="/">
            Joshdels
          </Link>
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-gray-700 text-sm lg:text-md">
          {menuItems.map((item) => (
            <p key={item} className="cursor-pointer hover:text-gray-900">
              {item}
            </p>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <PanelTopClose /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`
          md:hidden bg-white/90 backdrop-blur-sm shadow-md fixed top-16 left-0 w-full flex flex-col items-center gap-4 py-4 text-gray-700
          transition-all duration-300 ease-in-out overflow-hidden z-50 
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {menuItems.map((item) => (
          <p
            key={item}
            className="cursor-pointer hover:text-gray-900 transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
}
