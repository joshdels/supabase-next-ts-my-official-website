const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const CASE_STUDY_URL = `${BASE_URL}/case-studies`;
const PROJECT_URL = `${BASE_URL}/projects`;

export const caseStudies = async () => {
  const res = await fetch(CASE_STUDY_URL, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch case studies');

  return res.json();
};

export const caseStudy = async (id: number) => {
  const res = await fetch(`${CASE_STUDY_URL}/${id}/`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch case study');

  return res.json();
};

export const projects = async () => {
  const res = await fetch(PROJECT_URL, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch projects');

  return res.json();
};

export const project = async (id: number) => {
  const res = await fetch(`${PROJECT_URL}/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Failed to fetch project');

  return res.json();
};
