'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center md:mb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-3xl text-center leading-7 text-justify text-justify-inter-word">
        <p className="mb-4">
          I’m Wafry Ahamed, a passionate tech enthusiast and versatile
          full-stack developer with a strong foundation in modern web and mobile
          development. I build intuitive, responsive interfaces using React.js,
          Next.js, Flutter, Tailwind CSS, Framer Motion and Figma, and bring
          them to life through robust, scalable backends powered by JavaScript
          (Node.js),TypeScript, Express, Django, Flask, Python, PHP and Java.
        </p>
        <p className="mb-4">
          I work with DevOps tools such as Git, GitHub, CI/CD pipelines, and
          Jenkins to support efficient development and deployment. I deploy and
          manage applications across cloud platforms including AWS, Azure,
          Vercel, Netlify, and Railway, using Docker-based containerization for
          reliable and consistent environments. I also handle system monitoring
          and regular maintenance to ensure smooth, high-performance operation.
          Beyond deployment, I explore Artificial Intelligence, Cybersecurity,
          and Blockchain—fields that fuel my curiosity and motivate me to build
          secure, intelligent, and future-ready applications.
        </p>
        <p className="mb-4">
          What truly excites me is the entire lifecycle of creation—designing
          from scratch, iterating with purpose and delivering experiences that
          people genuinely enjoy. I’m especially drawn to technologies that
          enhance human life: personalized AI, secure systems, performant
          backends, interfaces that feel alive and real-time solutions that
          address real-world problems. I also value strong teamwork and enjoy
          collaborating with others to bring ideas to life and achieve
          meaningful results.
        </p>

        <p>
          Outside of development, I enjoy hiking, exploring nature, learning new
          technologies and sharing what I learn through my Medium articles. I
          also enjoy doing technical research, which helps me stay curious and
          keep improving in my field.
        </p>
      </div>
    </motion.section>
  );
};
