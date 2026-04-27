import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { projectsData } from '@/lib/data';

type ProjectItem = (typeof projectsData)[number];

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const githubLink =
    'github' in project.links ? project.links.github?.trim() : undefined;
  const previewLink = project.links.preview?.trim();

  const hasGithub = Boolean(githubLink);
  const hasPreview = Boolean(previewLink);

  return (
    <article className="bg-card text-card-foreground group flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 line-clamp-2 text-xl font-semibold">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-2.5 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {hasGithub && githubLink ? (
            <Button variant="outline" size="sm" asChild>
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} GitHub`}
              >
                <Icons.githubOutline className="mr-2 size-4" />
                GitHub
              </Link>
            </Button>
          ) : null}

          {hasGithub && hasPreview && previewLink ? (
            <Button variant="default" size="sm" asChild>
              <Link
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} Live Visit`}
              >
                <Icons.preview className="mr-2 size-4" />
                Live Visit
              </Link>
            </Button>
          ) : null}

          {!hasGithub && hasPreview && previewLink ? (
            <Button variant="default" size="sm" asChild>
              <Link
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} View Design`}
              >
                <Icons.preview className="mr-2 size-4" />
                View Design
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
