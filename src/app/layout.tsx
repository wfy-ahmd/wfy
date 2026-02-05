import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';

import { ActiveSectionProvider } from '@/components/active-section-provider';
import { Chatbot } from '@/components/chatbot';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/toaster';
import { env } from '@/env.mjs';
import { fonts } from '@/lib/fonts';
import { siteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(', '),
  robots: { index: true, follow: true },
  icons: {
    icon: '/logo/logo.png',
    shortcut: '/logo/logo16.png',
    apple: '/logo/apple-touch-icon.png',
  },
  verification: {
    google: siteConfig.googleSiteVerificationId,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Wafry Ahamed Portfolio',
    images: [
      {
        url: `${siteConfig.url}/images/metaimg.png`,
        width: 1200,
        height: 630,
        alt: 'Wafry Ahamed - Full Stack Developer & Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: '@Wafry',
    images: [`${siteConfig.url}/images/metaimg.png`],
  },
  authors: [{ name: 'Wafry Ahamed', url: 'https://github.com/Wafry' }],
  creator: 'Wafry Ahamed',
  publisher: 'Wafry Ahamed',
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
      'en-US': siteConfig.url,
      'x-default': siteConfig.url,
    },
  },
  other: {
    author: 'Wafry Ahamed',
    email: 'wafryahamed@gmail.com',
    copyright: 'Wafry Ahamed 2025',
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Wafry Ahamed',
    alternateName: 'Wafry Ahamed',
    jobTitle: 'Full-Stack Developer & Designer | AI Enthusiast',
    description:
      'Hi, I’m Wafry Ahamed — a fresher full-stack developer and designer from Sri Lanka, passionate about building modern, interactive, and high-performance web and mobile applications. I specialize in React.js, Next.js, Tailwind CSS, Node.js, Python, Flutter, and intuitive UI/UX design.',
    url: siteConfig.url,
    image: `${siteConfig.url}/images/profile.jpg`,
    email: 'wafryahamed@gmail.com',
    sameAs: [
      'https://github.com/Wafry',
      'https://linkedin.com/in/wafry',
      'https://instagram.com/wafryahamed',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Sri Lanka',
      addressRegion: 'Asia',
    },
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Rajarata University of Sri Lanka',
      },
    ],
    worksFor: [], // fresher, no companies yet
    knowsAbout: [
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'Flutter',
      'Node.js',
      'Express.js',
      'Python',
      'Django',
      'Flask',
      'MongoDB',
      'MySQL',
      'Full Stack Development',
      'UI/UX Design',
      'Web Development',
      'AI',
    ],
    offers: {
      '@type': 'Service',
      name: 'Full-Stack Development & UI/UX Design',
      description:
        'Web and mobile application development using React.js, Next.js, Flutter, Node.js, and clean user interface design. Specializing in full-stack development and modern UI/UX systems.',
      provider: {
        '@type': 'Person',
        name: 'Wafry Ahamed',
      },
      areaServed: ['Sri Lanka', 'Asia', 'Worldwide'],
      serviceType: 'Web & Mobile Development',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Full-Stack Developer',
      description:
        'Fresher full-stack developer specializing in React.js, Next.js, Tailwind CSS, Node.js, and modern UI/UX design.',
      occupationLocation: [
        {
          '@type': 'Country',
          name: 'Sri Lanka',
        },
        {
          '@type': 'Place',
          name: 'Worldwide',
        },
      ],
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="en" href={siteConfig.url} />
        <link rel="alternate" hrefLang="en-US" href={siteConfig.url} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />

        {/* Google Tag Manager */}
        {env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
              `,
            }}
          />
        )}

        {/* Google AdSense */}
        {env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
          />
        )}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Preload critical resources */}
        <link rel="preload" href="/images/profile.jpg" as="image" />
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
      </head>
      <body className={cn('min-h-screen font-sans', fonts)}>
        <a
          href="#main-content"
          className="focus:bg-primary focus:text-primary-foreground sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:px-3 focus:py-2"
        >
          Skip to content
        </a>

        {/* Google Tag Manager (noscript) */}
        {env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        {/* Microsoft Clarity */}
        {env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID && (
          <Script
            id="clarity-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${env.NEXT_PUBLIC_MICROSOFT_CLARITY_ID}");
              `,
            }}
          />
        )}

        <ThemeProvider attribute="class">
          <ActiveSectionProvider>
            {children}
            <Toaster position="bottom-left" />
            <Chatbot />
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
