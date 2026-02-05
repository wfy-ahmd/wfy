'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  // ------------------------------
  // ELEGANT + PROFESSIONAL ANIMATION VARIANTS
  // ------------------------------
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const softFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const softScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="
        my-10 
        flex flex-col 
        items-center 
        gap-8 
        text-center 
        sm:mt-28
        lg:mt-0 
        lg:flex-row 
        lg:items-center 
        lg:justify-between 
        lg:gap-20
        lg:text-left
      "
    >
      {/* ------------------------------------------------ 
          IMAGE SECTION 
      ------------------------------------------------ */}
      <motion.div
        variants={softScale}
        initial="hidden"
        animate="visible"
        className="
          order-1 
          flex 
          w-full 
          flex-col
          items-center
          gap-3
          lg:order-2
          lg:w-auto
          lg:items-end
        "
      >
        {/* IMAGE — PREMIUM FEEL */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.25 }}
          className="relative"
        >
          <Image
            src="/images/profile.jpg"
            alt="Wafry Ahamed"
            width={210}
            height={210}
            className="
              mx-auto 
              rounded-2xl 
              object-cover grayscale 
              transition-all duration-300
              hover:grayscale-0
              lg:ml-auto lg:mr-0
            "
          />
        </motion.div>

        {/* AVAILABILITY + LOCATION */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="flex flex-col items-center gap-2 lg:items-end"
        >
          <Link
            href="#contact"
            className="
              bg-background/60 
              hover:bg-background/80 
              flex items-center gap-2 
              rounded-full 
              border 
              px-3 py-1 
              backdrop-blur 
              transition-colors
            "
          >
            <span className="relative flex size-2">
              <span className="absolute size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative size-2 rounded-full bg-green-400"></span>
            </span>
            <span className="font-mono text-sm">Available for work!</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* ------------------------------------------------ 
          TEXT CONTENT 
      ------------------------------------------------ */}
      <div
        className="
          order-2 
          flex
          max-w-2xl 
          flex-col 
          items-center 
          gap-5
          lg:order-1 
          lg:items-start
        "
      >
        {/* NAME TITLE */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="
            font-heading 
            max-w-2xl 
            text-4xl 
            font-extrabold 
            leading-tight
            md:text-5xl
          "
        >
          Hi, I’m{' '}
          <span className="bg-gradient-to-r from-rose-700 to-pink-600 bg-clip-text text-transparent">
            Wafry Ahamed
          </span>
          <br />
          Full-Stack Developer &amp; Designer | AI Enthusiast
        </motion.h1>

        {/* BIO */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-muted-foreground max-w-xl text-center lg:text-left"
        >
          I build responsive and high-performance applications using React.js,
          Next.js, Tailwind CSS, Flutter, and Framer Motion — and develop
          scalable backends with Node.js, Express, Django, Flask, Python, PHP,
          and Java. Passionate about UI/UX, real-world problem solving, and
          future-ready engineering with Cloud, AI, Cybersecurity, and
          Blockchain.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            flex w-full 
            flex-col 
            gap-3 
            sm:flex-row 
            sm:flex-wrap 
            lg:justify-start
          "
        >
          <motion.div whileHover={{ scale: 1.03 }}>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#contact">
                Get in touch <Icons.arrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }}>
            <Button
              variant="secondary"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <Link href="#projects">
                View projects <Icons.arrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="hidden sm:flex">
            <Button variant="outline" size="lg" asChild>
              <a href="/cv/Wafry Ahamed CV.pdf" target="_blank">
                Download CV <Icons.download className="ml-2 size-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          variants={softFade}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-2 flex flex-row flex-wrap justify-center gap-2 lg:justify-start"
        >
          {[
            {
              href: 'https://linkedin.com/in',
              Icon: Icons.linkedin,
            },
            { href: 'https://github.com/', Icon: Icons.github },
         
          ].map(({ href, Icon }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2 }}
            >
              <Button variant="outline" size="icon" asChild>
                <Link href={href} target="_blank">
                  <Icon className="size-5" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
