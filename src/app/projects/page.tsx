'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { Breadcrumb } from '@/components/breadcrumb';
import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import {
  FilterTabs,
  type ProjectFilter,
} from '@/components/projects-page/filter-tabs';
import { ProjectsSection } from '@/components/projects-page/projects-section';
import { projectsData } from '@/lib/data';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const { developmentProjects, uiuxProjects } = useMemo(() => {
    const hasGithubLink = (project: (typeof projectsData)[number]) =>
      'github' in project.links && Boolean(project.links.github?.trim());

    const development = projectsData.filter((project) =>
      hasGithubLink(project)
    );
    const uiux = projectsData.filter((project) => !hasGithubLink(project));

    return {
      developmentProjects: development,
      uiuxProjects: uiux,
    };
  }, []);

  const showDevelopment =
    activeFilter === 'all' || activeFilter === 'development';
  const showUiUx = activeFilter === 'all' || activeFilter === 'uiux';

  return (
    <main id="main-content" className="container mx-auto px-4 py-16">
      <Breadcrumb />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Button variant="outline" asChild className="mb-8">
          <Link href="/">
            <Icons.arrowRight className="mr-2 size-4 rotate-180" />
            Back to Home
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-12 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          What I&apos;ve Built
        </h1>
        <p className="text-muted-foreground mx-auto max-w-4xl text-lg">
          Discover the projects I’ve created, each highlighting my expertise in
          frontend and full-stack development, along with UI/UX design. My work
          focuses on modern frameworks, clean architecture, intuitive interfaces
          and solving real-world problems through efficient, scalable user
          experiences.
        </p>
      </motion.div>

      <FilterTabs
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        {showDevelopment ? (
          <ProjectsSection
            id="development-projects"
            title="Development Projects"
            projects={developmentProjects}
          />
        ) : null}

        {showUiUx ? (
          <ProjectsSection
            id="uiux-projects"
            title="UI/UX Projects"
            projects={uiuxProjects}
          />
        ) : null}
      </motion.div>
    </main>
  );
}
