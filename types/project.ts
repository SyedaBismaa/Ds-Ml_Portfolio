export type ProjectFilter = "All" | "Supervised" | "Unsupervised" | "Data Analysis" | "Deployment";

export interface ProjectSection {
  title: string;
  content: string[];
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  description: string;
  businessContext?: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  category: Exclude<ProjectFilter, "All">;
  overview: ProjectSection[];
  problemStatement: ProjectSection[];
  businessContextDetails: ProjectSection[];
  dataset: ProjectSection[];
  dataCleaning: ProjectSection[];
  exploratoryDataAnalysis: ProjectSection[];
  featureEngineering: ProjectSection[];
  modelSelection: ProjectSection[];
  evaluation: ProjectSection[];
  explainability: ProjectSection[];
  deployment: ProjectSection[];
  learnings: ProjectSection[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}
