"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/src/lib/supabaseClient";
import type { User } from "@supabase/supabase-js";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert(error.message);
    else router.push("/mail");
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) alert(error.message);
    else {
      setUser(null);
      router.push("/");
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/mail");
    }
  }, [user, router]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: "url('/roads_blue.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="w-full max-w-100 bg-white rounded-2xl shadow-sm p-8 z-50">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Hey JoshDels!
        </h2>

        <p className="text-center text-sm text-gray-500 p-2">
          Geospatial Developer Mail
        </p>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
          />

          <button
            onClick={login}
            className="w-full py-3 rounded-lg bg-gray-500 text-white font-semibold hover:bg-gray-600 transition duration-200 shadow-md"
          >
            Login
          </button>
        </div>

        <p className="text-center text-sm text-gray-400 mt-2">
          <Link href="/" className="hover:underline">
            Back to Homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
