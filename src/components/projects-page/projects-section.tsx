import { ProjectCard } from './project-card';

import { projectsData } from '@/lib/data';

type ProjectItem = (typeof projectsData)[number];

type ProjectsSectionProps = {
  title: string;
  projects: ProjectItem[];
  id: string;
};

export function ProjectsSection({ title, projects, id }: ProjectsSectionProps) {
  return (
    <section id={id} className="mb-14 scroll-mt-28">
      <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={`${project.title}-${project.image}`}
              project={project}
            />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground rounded-2xl border border-dashed p-6 text-sm">
          No projects found in this category yet.
        </p>
      )}
    </section>
  );
}
