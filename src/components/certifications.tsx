'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';

const certifications = [
  {
    title: 'Full Stack Web Development',
    provider: 'Udemy',
    date: 'Dec 2025',
    courses:
      'Next.js, React, Node.js, MongoDB, AI Integration, Payment Gateway Integration',
  },
  {
    title: 'Professional Certificate in Agile and SCRUM',
    provider: 'Udemy',
    date: 'Dec 2025',
    courses: 'Agile Fundamentals, Scrum Framework',
  },
  {
    title: 'Python for Beginners',
    provider: 'University of Moratuwa',
    date: 'Sep 2025',
    courses: 'Python Basics, Programming Fundamentals',
  },
  {
    title: 'Introduction to Jenkins (LFS167)',
    provider: 'The Linux Foundation',
    date: 'Nov 2025',
    courses: 'CI/CD, Jenkins Basics, DevOps Fundamentals',
  },
  {
    title: 'Flutter Masterclass',
    provider: 'Udemy',
    date: 'Jan 2026',
    courses: 'Flutter Fundamentals, Dart Programming',
  },
  {
    title: 'Machine Learning Foundations',
    provider: 'Meritshot Academy / Udemy',
    date: 'Jan 2026',
    courses: 'Machine Learning Basics, Data Fundamentals',
  },
];

export default function Certifications() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      id="certifications"
      className="my-14 scroll-mt-28"
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
    >
      <SectionHeading heading="Certifications" content="     " />

      <div className="mx-auto mt-12 max-w-5xl space-y-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 24 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.35, delay: index * 0.05 }
            }
            className="
              rounded-xl border bg-card p-6
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg
            "
          >
            {/* Title */}
            <h3 className="text-xl font-semibold">{cert.title}</h3>

            {/* Provider + Date */}
            <div className="mt-1 text-sm text-muted-foreground">
              {cert.provider} • {cert.date}
            </div>

            {/* Courses */}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">Courses:</span>{' '}
              {cert.courses}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
