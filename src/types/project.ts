export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  highlights: string[];
  github: string;
  demo: string;
  image?: string;
}