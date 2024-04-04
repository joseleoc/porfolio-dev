import { PROJECTS } from "../Globals.json";

export interface Project {
  title: string;
  description: string;
  link: string;
  icon: string;
  images: { path: string; alt: string }[];
  tags: string[];
}

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
