import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Certifications',
    hash: '#certifications',
  },

  {
    name: 'Achievements',
    hash: '#achievements',
  },
  {
    name: 'Leadership & Volunteering',
    hash: '#leadership',
  },

  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/images/chef-buddy.png',
    title: 'ChefBuddy – Android Meal Planner App',
    description:
      'ChefBuddy is a smart Android meal planning assistant built with Java, MVP architecture, and TheMealDB API. It helps users search recipes by ingredients, save favourites, plan weekly meals, and view step-by-step cooking instructions — reducing food waste and making cooking easier.',
    technologies: [
      'Java',
      'Android Studio',
      'MVP Architecture',
      'TheMealDB API',
      'Retrofit',
      'Gson',
      'Room Database',
      'SQLite',
      'Material Design',
      'Navigation Component',
      'Glide',
      'Lottie Animations'
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/Daily-Food-Planner-Application',
      github: 'https://github.com/WafryAhamed/Daily-Food-Planner-Application'
    }
  },

  {
    image: '/images/flixify.png',
    title: 'Flixify – Movie Explorer Website',
    description:
      'Flixify is a modern movie and TV show explorer built with React.js and Vite. It provides real-time data from the Movie Database API and includes dynamic category switching, multilingual support, advanced filtering, detailed pages, and a smooth responsive UI with dark mode.',
    technologies: [
      'React.js',
      'Vite',
      'React Router',
      'Redux',
      'Day.js',
      'SCSS',
      'Movie Database API',
      'Lazy Loading'
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/TeamBug',
      github: 'https://github.com/WafryAhamed/TeamBug'
    }
  },

  {
    image: '/images/luca.png',
    title: 'LUCA – Real-Time AI Study Assistant',
    description:
      'LUCA is a real-time AI-powered study assistant built with React and Vite, featuring a minimal neon-themed UI, draggable floating tools, smooth chat interactions, file uploads, and customizable study preferences powered by OpenAI and Google Gemini.',
    technologies: [
      'React 19',
      'Vite',
      'CSS Modules',
      'OpenAI GPT',
      'Google Gemini',
      'JavaScript',
      'Manrope Font',
      'Vercel' ],
    links: {
      preview: 'https://github.com/WafryAhamed/Luca',
      github: 'https://github.com/WafryAhamed/Luca'
    }
  },

  {
    image: '/images/bakery-delights.png',
    title: 'Bakery Delights – Frontend Bakery Store Website',
    description:
      'Bakery Delights is a modern frontend bakery store website built with React and Vite. It features category-based product browsing, real-time search, animations with Framer Motion, third-party authentication, shopping cart functionality, and a fully responsive UI with smooth scrolling and a dynamic sticky header.',
    technologies: [
      'React.js',
      'Vite',
      'React Router DOM',
      'Framer Motion',
      'React Scroll',
      'Lucide React',
      'React Icons',
      'CSS',
      'ESLint'
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/Baked_Delights_website',
      github: 'https://github.com/WafryAhamed/Baked_Delights_website'
    }
  },

  {
    image: '/images/student-grade-prediction.png',
    title: 'Student Grade Prediction using Deep Learning',
    description:
      'A deep learning project that predicts student grades (A, B, C, F) using engineered academic features such as quiz averages, study efficiency, participation scores, and assignment penalties. Includes full preprocessing pipelines, multiple neural architectures, Bayesian Optimization, Optuna tuning, and performance comparisons across 15+ models.',
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'Optuna',
      'Bayesian Optimization',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Jupyter Notebook'
    ],
    links: {
      preview: 'https://github.com/yourusername/student-grade-prediction',
      github: 'https://github.com/yourusername/student-grade-prediction'
    }
  },

  {
    image: '/images/secure-enterprise-network.png',
    title: 'Secure Enterprise Network Infrastructure with VLANs & DHCP',
    description:
      'A secure, enterprise-grade network infrastructure designed using Cisco Packet Tracer. Includes 10 VLANs for departmental segmentation, DHCP-based IP allocation, ACL firewalls, inter-VLAN routing, router-on-a-stick configuration, and centralized Layer 3 switching for efficient and secure network operations.',
    technologies: [
      'Cisco Packet Tracer',
      'VLANs',
      'DHCP',
      'ACL Firewall',
      'Inter-VLAN Routing',
      'Router-on-a-Stick',
      'Cisco 2911 Router',
      'Cisco 3650 L3 Switch',
      'Cisco 2960 L2 Switches',
      'Star Topology'
    ],
    links: {
      preview: 'https://github.com/yourusername/Secure-Enterprise-Network-Infrastructure-with-VLANs-and-DHCP',
      github: 'https://github.com/yourusername/Secure-Enterprise-Network-Infrastructure-with-VLANs-and-DHCP'
    }
  }
] as const;

export const skillsData = [
  // Existing Skills
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },

  // ---------------------------------------------------
  // ⭐ New Added Frontend Skills
  // ---------------------------------------------------

  { icon: <Icons.angular className="size-12" /> },
  { icon: <Icons.framer className="size-12" /> },
  { icon: <Icons.figma className="size-12" /> },
  { icon: <Icons.bootstrap className="size-12" /> },

  { icon: <Icons.flutter className="size-12" /> },

  // ---------------------------------------------------
  // ⭐ New Backend Skills
  // ---------------------------------------------------
  { icon: <Icons.nodejs className="size-12" /> },
  { icon: <Icons.express className="size-12" /> },
  { icon: <Icons.django className="size-12" /> },
  { icon: <Icons.flask className="size-12" /> },

  // ---------------------------------------------------
  // ⭐ Testing
  // ---------------------------------------------------
  { icon: <Icons.jest className="size-12" /> },
  { icon: <Icons.cypress className="size-12" /> },

  // ---------------------------------------------------
  // ⭐ Databases
  // ---------------------------------------------------
  { icon: <Icons.mongodb className="size-12" /> },
  { icon: <Icons.postgresql className="size-12" /> },
  { icon: <Icons.mysql className="size-12" /> },

  // ---------------------------------------------------
  // ⭐ DevOps
  // ---------------------------------------------------
  { icon: <Icons.git className="size-12" /> },
  { icon: <Icons.githubIcon className="size-12" /> },
  { icon: <Icons.gitlab className="size-12" /> },
  { icon: <Icons.jenkins className="size-12" /> },
  { icon: <Icons.kubernetes className="size-12" /> },

  // ---------------------------------------------------
  // ⭐ Cloud
  // ---------------------------------------------------

  { icon: <Icons.vercel className="size-12" /> },
  { icon: <Icons.netlify className="size-12" /> },
  { icon: <Icons.railway className="size-12" /> },

  // ---------------------------------------------------
  // ⭐ AI / ML
  // ---------------------------------------------------
  { icon: <Icons.python className="size-12" /> },
  { icon: <Icons.tensorflow className="size-12" /> },
  { icon: <Icons.pytorch className="size-12" /> },
  { icon: <Icons.scikitlearn className="size-12" /> },
] as const;
