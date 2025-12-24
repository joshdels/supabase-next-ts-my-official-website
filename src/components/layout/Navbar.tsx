"use client";

import { useEffect, useState } from "react";
import { PanelTopClose, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabaseClient";

export default function Navbar() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["Home", "Services", "Demo", "Project", "About"];

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) alert(error.message);
    else {
      setUser(null);
      router.push("/");
    }
  };

  return (
    <>
      <div className="flex bg-white/80 backdrop-blur-sm text-gray-800 items-center justify-between text-md border-b border-gray-200 px-6 sm:px-5 md:px-20 lg:px-20 2xl:px-40 py-4 fixed top-0 left-0 w-full z-50 shadow-2xs">
        {/* Logo */}
        <h1 className="font-bold text-xl md:text-xl tracking-wide cursor-pointer hover:text-gray-900 transition-colors duration-300">
          <Link href="/">Joshdels</Link>
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-gray-700 text-sm lg:text-md items-center">
          {menuItems.map((item) => (
            <p key={item} className="cursor-pointer hover:text-gray-900">
              {item}
            </p>
          ))}

          {user ? (
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Login
            </Link>
          )}
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
        className={`md:hidden bg-white/90 backdrop-blur-sm shadow-md fixed top-16 left-0 w-full flex flex-col items-center gap-4 py-4 text-gray-700 transition-all duration-300 ease-in-out overflow-hidden z-50 
        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
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

        {user ? (
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={() => {
              logout();
              setMenuOpen(false);
            }}
          >
            Logout
          </button>
        ) : (
          <Link
            href="/"
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        )}
      </div>
    </>
  );
}
