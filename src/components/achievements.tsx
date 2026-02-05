'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { achievementsData } from '@/lib/achievements-data';

export const Achievements = () => {
  const { ref: sectionRef } = useSectionInView('Achievements', 0.3);
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 };

  const transition = prefersReducedMotion ? { duration: 0 } : { delay: 0.15 };

  return (
    <motion.section
      ref={sectionRef}
      id="achievements"
      initial={initial}
      animate={{ opacity: 1, y: 0 }}
      transition={transition}
      className="my-10 scroll-mt-28 md:mb-20"
    >
      <SectionHeading
        heading="Achievements & Competitions"
        content="A showcase of my competition wins, honors, and awards."
      />

      {/* 🏆 Trophy Wall Grid */}
      <div className="grid grid-cols-1 gap-8 py-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievementsData.map(
          ({
            title,
            organization,
            description,
            period,
            achievements,
            image,
          }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="border-border bg-background group relative overflow-hidden rounded-xl border shadow-lg transition-all hover:shadow-2xl"
            >
              {/* 🏆 Trophy Badge */}
              <div className="absolute right-3 top-3 z-10">
                <div className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black shadow-md">
                  🏆 Award
                </div>
              </div>

              {/* Image */}
              <div className="relative h-40 w-full">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-all group-hover:brightness-75"
                />
              </div>

              {/* Content */}
              <div className="space-y-3 p-5">
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <Icons.calendar className="size-4" />
                  <span>{period}</span>
                </div>

                <h3 className="text-lg font-bold leading-tight">{title}</h3>

                <p className="text-primary text-sm font-semibold">
                  {organization}
                </p>

                <p className="text-muted-foreground line-clamp-3 text-sm">
                  {description}
                </p>

                {/* Achievement tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {achievements.map((item) => (
                    <span
                      key={item}
                      className="bg-muted rounded-full border px-3 py-1 text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glow hover effect */}
              <div className="absolute inset-0 rounded-xl bg-yellow-300 opacity-0 blur-xl transition-all group-hover:opacity-20" />
            </motion.div>
          )
        )}
      </div>
    </motion.section>
  );
};
