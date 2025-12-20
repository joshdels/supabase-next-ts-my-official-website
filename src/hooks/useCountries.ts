"use client";

import { useState, useEffect } from "react";

export interface Country {
  id: number;
  value: string;
}

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/countries");

        if (!res.ok) {
          throw new Error("Failed to fetch countries");
        }

        const data: Country[] = await res.json();
        setCountries(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return { countries, loading };
}
