'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from './button';
import { Icons } from './icons';

import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;
  const prefersReducedMotion = useReducedMotion();
  const githubLink = 'github' in links ? links.github : undefined;
  const previewLabel = githubLink ? 'Preview' : 'View Design';

  return (
    <motion.div
      variants={prefersReducedMotion ? undefined : fadeInAnimationVariants}
      initial={prefersReducedMotion ? undefined : 'initial'}
      whileInView={prefersReducedMotion ? undefined : 'animate'}
      viewport={{ once: true }}
      custom={index}
      className="flex flex-col rounded border p-5 "
    >
      {image.startsWith('http') ? (
        <Image
          src={image}
          alt={title}
          width={400}
          height={390}
          className="h-[390px] w-full rounded object-cover transition-transform hover:scale-105"
        />
      ) : (
        <Image
          src={image}
          alt={title}
          height={390}
          width={600}
          className="rounded transition-transform hover:scale-105"
        />
      )}
      <h3 className="mt-3 text-xl font-medium">{title}</h3>
      <p className="text-muted-foreground mb-2 mt-1">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span className="rounded-full border px-3 py-1 text-sm" key={tech}>
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={links.preview}
          aria-label={`${title} ${previewLabel}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Icons.preview className="size-4" />
            {previewLabel}
          </Button>
        </Link>
        {githubLink ? (
          <Link
            href={githubLink}
            aria-label={`${title} GitHub`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Icons.githubOutline className="size-4" />
              GitHub
            </Button>
          </Link>
        ) : null}
      </div>
    </motion.div>
  );
};
