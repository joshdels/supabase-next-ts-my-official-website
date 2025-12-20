import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export interface Country {
  id: number;
  value: string;
}

export async function fetchCountries(): Promise<Country[]> {
  try {
    const { data, error } = await supabase.from("countries").select("*");

    if (error) {
      console.error("Error fetching countries:", error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error("Unexpected error fetching countries:", err);
    return [];
  }
}

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await fetchCountries();
      setCountries(data);
      setLoading(false);
    }
    load();
  }, []);

  return { countries, loading };
}
