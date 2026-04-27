'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';

export const certifications = [
  // ---------------- AI / ML ----------------
  {
    title: 'Machine Learning Foundations',
    provider: 'Meritshot Academy / Udemy',
    date: 'Jan 2026',
    courses: 'Machine Learning Basics, Data Fundamentals',
  },
  {
    title: 'Python for Data Analysis',
    provider: 'Udemy (MTF Institute of Management, Technology and Finance)',
    date: 'Jan 2026',
    courses: 'NumPy, Pandas, Data Analysis, Data Visualization',
  },
  {
    title: 'R for Researchers: From Basics to Advanced Analysis',
    provider: 'Udemy',
    date: 'Jan 2026',
    courses: 'Statistical Analysis, R Programming, Data Modeling',
  },
  {
    title: 'Python for Beginners',
    provider: 'University of Moratuwa',
    date: 'Sep 2025',
    courses: 'Python Basics, Programming Fundamentals',
  },

  // ---------------- DEVOPS ----------------
  {
    title: 'Introduction to DevOps and Site Reliability Engineering (LFS162)',
    provider: 'The Linux Foundation',
    date: 'Feb 2026',
    courses: 'DevOps Culture, CI/CD, Monitoring, SRE Principles',
  },
  {
    title: 'Introduction to DevSecOps for Managers (LFS180)',
    provider: 'The Linux Foundation',
    date: 'Feb 2026',
    courses: 'DevSecOps, Security Integration, Risk Management',
  },
  {
    title: 'Introduction to Jenkins (LFS167)',
    provider: 'The Linux Foundation',
    date: 'Nov 2025',
    courses: 'CI/CD, Jenkins Basics, DevOps Fundamentals',
  },

  // ---------------- FULL STACK / BACKEND ----------------
  {
    title: 'Full Stack Web Development',
    provider: 'Udemy',
    date: 'Dec 2025',
    courses:
      'Next.js, React, Node.js, MongoDB, AI Integration, Payment Gateway Integration',
  },
  {
    title: 'Secure Coding in Java & Spring Boot: Build Resilient Apps',
    provider: 'Udemy',
    date: 'Feb 2026',
    courses: 'Secure Coding Practices, Spring Boot Security, OWASP Principles',
  },
  {
    title: 'Resilience4j with Spring Boot: Build Fault-Tolerant Systems',
    provider: 'Udemy',
    date: 'Feb 2026',
    courses: 'Microservices Resilience, Circuit Breaker, Fault Tolerance',
  },
  {
    title: 'Flutter Masterclass',
    provider: 'Udemy',
    date: 'Jan 2026',
    courses: 'Flutter Fundamentals, Dart Programming',
  },

  // ---------------- OTHER / SUPPORTING ----------------
  {
    title: 'Professional Diploma in Software Testing & Quality Assurance',
    provider: 'MTF Institute of Management, Technology and Finance',
    date: 'Jun 2025',
    courses: 'Software Testing, QA Processes, Test Cases, Automation Basics',
  },
  {
    title: 'Professional Certificate in Agile and SCRUM',
    provider: 'Udemy',
    date: 'Dec 2025',
    courses: 'Agile Fundamentals, Scrum Framework',
  },
  {
    title: 'Web3 Development Essentials',
    provider: 'Udemy (MTF Institute of Management, Technology and Finance)',
    date: 'Jan 2026',
    courses: 'Blockchain Basics, Smart Contracts, Web3 Fundamentals',
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
      <SectionHeading heading="Certifications" content=" " />

      {/* ✅ GRID CONTAINER */}
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
            className="bg-card rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold">{cert.title}</h3>

            {/* Provider + Date */}
            <div className="text-muted-foreground mt-1 text-sm">
              {cert.provider} • {cert.date}
            </div>

            {/* Courses */}
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              <span className="text-foreground font-medium">Courses:</span>{' '}
              {cert.courses}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
