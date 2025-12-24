"use client";

import { useEffect, useState } from "react";

export interface RespondentCount {
  country_value: string;
  respondents_count: number;
}

export function useCountRespondents() {
  const [respondentCount, setRespondentCount] = useState<RespondentCount[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/respondents-count");

        if (!res.ok) {
          throw new Error("Failed to fetch respondents count");
        }

        const data: RespondentCount[] = await res.json();
        setRespondentCount(data);
      } catch (err) {
        console.error(err);
      }
    }
    load();
  }, []);

  console.log(respondentCount);

  return { respondentCount };
}
