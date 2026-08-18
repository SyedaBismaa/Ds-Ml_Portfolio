import { notFound } from "next/navigation";
import { ProjectDetails } from "@/components/projects/ProjectDetails";
import { projectBySlug } from "@/data/projects";

export async function generateStaticParams() {
  return Object.keys(projectBySlug).map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectBySlug[params.slug];
  if (!project) notFound();
  return <ProjectDetails project={project} />;
}
