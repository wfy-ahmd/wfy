'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

/* WORD SPLITTER COMPONENT */
const InteractiveText = ({ text }: { text: string }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const words = text.split(' ');

  return (
    <p className="flex flex-wrap gap-x-1 leading-relaxed text-justify">
      {words.map((word, i) => (
        <span
          key={i}
          onMouseEnter={() => setActiveIndex(i)}
          onMouseLeave={() => setActiveIndex(null)}
          className={`
            transition-all duration-200
            ${
              activeIndex === i
                ? 'bg-gradient-to-r from-[#BE123C] to-[#DB2777] bg-clip-text text-transparent scale-105'
                : 'text-gray-600 dark:text-neutral-300'
            }
          `}
        >
          {word}
        </span>
      ))}
    </p>
  );
};

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <section
      ref={ref}
      id="about"
      className="my-28 px-6 flex justify-center scroll-mt-28"
    >
      <div className="w-full max-w-4xl">
        <SectionHeading heading="About Me" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            relative mt-10 rounded-3xl p-8 md:p-10
            bg-white border border-gray-200 shadow-sm
            dark:bg-[#0f0f11] dark:border-white/10
          "
        >
          <div className="space-y-6 text-[15.5px]">
            <InteractiveText text="I’m Wafry Ahamed, a Full-Stack Developer and tech enthusiast who builds responsive, scalable, and high-performance web and mobile applications. I enjoy turning ideas into real-world digital products with clean architecture, modular design patterns, strong usability, and modern software engineering practices such as SOLID principles, MVC architecture, and microservices-based systems." />

            <InteractiveText text="I develop modern front-end experiences using React.js, Next.js, Angular, Vue.js, Flutter, Tailwind CSS, JavaScript, TypeScript, Framer Motion, and Figma—focusing on intuitive, responsive, accessible, and user-centered UI/UX design. I work with component-based architecture, state management (Redux, Context API, Zustand), and performance optimization techniques like lazy loading and code splitting." />

            <InteractiveText text="On the backend, I build robust and scalable systems using Node.js, Express, Django, Flask, FastAPI, Spring Boot, .NET, Laravel, Go, Python, PHP, and Java. I design RESTful APIs and GraphQL APIs, implement authentication and authorization systems (JWT, OAuth2, Role-Based Access Control), and develop real-time applications using WebSockets and Socket.IO, following secure and scalable backend architecture patterns." />

            <InteractiveText text="I design and manage efficient databases using PostgreSQL, MySQL, MongoDB, SQLite, and PostGIS, focusing on indexing strategies, query optimization, normalization, and high-performance data modeling. I also work with ORM tools like Prisma, Sequelize, and Hibernate to ensure maintainable and scalable data layers." />

            <InteractiveText text="Alongside full-stack development, I explore AI integration, cloud computing, DevOps practices, and modern software architecture. I use Docker, Kubernetes, Git, GitHub Actions, CI/CD pipelines, and deploy applications on AWS, Azure, Vercel, Netlify, and Railway. I also work with scalable system design concepts, caching (Redis), message queues, and distributed systems." />

            <InteractiveText text="I’m passionate about building end-to-end solutions that combine functionality, scalability, security, and great user experience. I enjoy collaborating in agile environments, participating in code reviews, writing clean and maintainable code, and continuously learning emerging technologies while working on impactful real-world projects." />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
