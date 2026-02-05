'use client';

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

// 🔥 Your 6 certificate images
import cert1 from '@/assets/certificate1.png';
import cert2 from '@/assets/certificate2.png';
import cert3 from '@/assets/certificate3.png';
import cert4 from '@/assets/certificate4.png';
import cert5 from '@/assets/certificate5.png';
import cert6 from '@/assets/certificate6.png';

export default function Certifications() {
  const prefersReducedMotion = useReducedMotion();

  // ONLY IMAGES – NO TEXT
  const certs = [
    { badge: cert1 },
    { badge: cert2 },
    { badge: cert3 },
    { badge: cert4 },
    { badge: cert5 },
    { badge: cert6 },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);

  const [loadedCards, setLoadedCards] = useState<boolean[]>(() =>
    new Array(certs.length).fill(false)
  );

  const handleImageLoaded = (index: number) =>
    setLoadedCards((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });

  // SEO structured data (EMPTY for now but same structure kept)
  const certificationsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Professional Certifications',
    itemListElement: certs.map((_, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'EducationalOccupationalCredential',
        name: `Certificate ${i + 1}`,
      },
    })),
  };

  const headerInitial = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 40 };

  const headerWhileInView = { opacity: 1, y: 0 };

  const cardInitial = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 24 };

  const cardWhileInView = { opacity: 1, y: 0 };

  return (
    <section
      ref={sectionRef}
      className="bg-background text-foreground relative min-h-screen py-20 font-sans"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(certificationsStructuredData),
        }}
      />

      <div id="certifications" className="container relative z-10 mx-auto max-w-6xl px-4">
        <motion.h2
          initial={headerInitial}
          whileInView={headerWhileInView}
          viewport={{ once: true, margin: '-80px' }}
          transition={
            prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }
          }
          className="font-heading text-center text-4xl font-bold sm:text-5xl"
        >
          Certifications
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {certs.map((cert, idx) => {
            const isLoaded = loadedCards[idx];

            return (
              <motion.div
                key={idx}
                initial={cardInitial}
                whileInView={cardWhileInView}
                viewport={{ once: true, margin: '-60px' }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.4, delay: idx * 0.1 }
                }
                className="
                  bg-card border-border rounded-xl border p-6 shadow-md backdrop-blur-md 
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl 
                  hover:shadow-blue-400/40 
                  dark:hover:shadow-blue-500/30 
                "
              >
                {!isLoaded && (
                  <div className="mb-4 flex flex-col items-center">
                    <div className="bg-muted size-20 animate-pulse rounded-lg" />
                    <div className="bg-muted mt-4 h-5 w-32 animate-pulse rounded" />
                    <div className="bg-muted mt-2 h-4 w-24 animate-pulse rounded" />
                    <div className="bg-muted mt-3 h-3 w-40 animate-pulse rounded" />
                  </div>
                )}

                <div className={isLoaded ? 'opacity-100' : 'opacity-0'}>
                  <Image
                    src={cert.badge}
                    alt={`Certificate ${idx + 1}`}
                    width={300}
                    height={200}
                    className="mx-auto w-full object-contain rounded-lg"
                    onLoadingComplete={() => handleImageLoaded(idx)}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
