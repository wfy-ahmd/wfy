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
    image: '/images/classpulse.png',
    title: 'Class Pulse – AI-Powered Real-Time Engagement System',
    description:
      'Class Pulse is a full-stack AI-driven learning analytics platform with Zoom integration, enabling real-time student engagement monitoring. It uses K-Means clustering and a rule-based engine to classify engagement levels and generate personalized feedback based on behavioral, performance, and network data, with live quiz delivery and network quality tracking.',
    technologies: [
      // Frontend
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Vite',

      // Backend
      'FastAPI',
      'Node.js',
      'Express.js',
      'Socket.IO',
      'WebSockets',

      // Database
      'MongoDB',
      'MySQL',

      // AI / Analytics
      'K-Means Clustering',
      'Rule-Based Engine',

      // Integrations
      'Zoom API',
      'Web Push Notifications',

      // Authentication & Security
      'JWT',
      'Email Verification',

      // Cloud & Deployment
      'AWS',
      'AWS Lambda',
      'API Gateway',
      'CloudFormation',
      'Vercel',
      'Railway',
    ],
    links: {
      preview: 'https://www.zoomlearningapp.de/login', // replace if deployed
      github: 'https://github.com/WafryAhamed/FYP-Class_Pulse', // replace with your repo
    },
  },

  {
    image: '/images/cheezybite.png',
    title: 'CheezyBite – Full-Stack Online Pizza Ordering System',
    description:
      'CheezyBite is a full-stack web application developed using Next.js and MongoDB, designed as an online pizza ordering platform with both a customer portal and an admin dashboard. The system supports pizza customization, secure authentication, real-time order tracking, and complete management of orders, users, and products.',
    technologies: [
      // Frontend
      'Next.js',
      'React 18',
      'Tailwind CSS',
      'Lucide React',

      // Backend
      'Node.js',
      'Express.js',
      'Socket.IO',

      // Database
      'MongoDB',

      // Authentication & Security
      'JWT',
      'Bcrypt',

      // Utilities & Tools
      'Axios',
      'React Testing Library',
      'tailwind-merge',

      // Deployment
      'Vercel',
      'Railway',
    ],
    links: {
      preview: 'https://cheezy-bite.vercel.app/', // replace if different
      github: 'https://github.com/WafryAhamed/CheezyBite',
    },
  },
  {
    image: '/images/floodx7.png',
    title: 'FloodX7 – AI-Powered Flood Disaster Management Platform',
    description:
      'FloodX7 is a real-time, AI-powered flood disaster management platform designed to monitor, predict, and respond to flood risks using geospatial intelligence and machine learning. The system integrates GIS mapping, real-time data streams, and AI models to provide risk assessment, evacuation planning, emergency coordination, and public alerting. Built with a scalable full-stack architecture, it supports decision-making for disaster response teams and improves public safety.',
    technologies: [
      // Frontend
      'React 19',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Framer Motion',
      'Lucide React',
      'React-Leaflet',
      'Leaflet.js',
      'Recharts',
      'Zustand',

      // Backend
      'FastAPI',
      'Python 3.12',
      'Uvicorn',
      'SQLAlchemy',
      'Pydantic',
      'Celery',
      'Redis',

      // Database
      'PostgreSQL',
      'PostGIS',
      'pgvector',

      // AI & Machine Learning
      'Machine Learning',
      'Random Forest',
      'XGBoost',
      'LightGBM',
      'Anomaly Detection',
      'RAG',

      // Concepts
      'Geospatial Analysis',
      'Real-Time Systems',
      'Disaster Management',
      'AI Predictions',
      'GIS Mapping',

      // DevOps & Tools
      'Docker',
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/Flood-Prediction-System',
      github: 'https://github.com/WafryAhamed/Flood-Prediction-System',
    },
  },
  {
    image: '/images/flamex7-airburger.png',
    title: 'FlameX7 AirBurger – Touchless Gesture-Based Ordering System',
    description:
      'FlameX7 AirBurger is an innovative touchless ordering system powered by computer vision and hand gesture recognition. Built using Python, OpenCV, and MediaPipe, it allows users to browse menus, select items, and complete payments using intuitive hand gestures. The system enhances hygiene, reduces physical contact, and delivers a futuristic fast-food experience with real-time tracking, voice feedback, and QR-based UPI payments.',
    technologies: [
      'Python',
      'OpenCV',
      'MediaPipe',
      'Computer Vision',
      'Hand Gesture Recognition',
      'NumPy',
      'QR Code Generation',
      'UPI Payment Integration',
      'pyttsx3 (Text-to-Speech)',
      'python-dotenv',
      'CSV Data Handling',
      'Machine Learning',
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/FlameX7',
      github: 'https://github.com/WafryAhamed/FlameX7',
    },
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
      'Jupyter Notebook',
    ],
    links: {
      preview:
        'https://github.com/WafryAhamed/Student-Grade-Prediction-using-Artificial-Neural-Networks',
      github:
        'https://github.com/WafryAhamed/Student-Grade-Prediction-using-Artificial-Neural-Networks',
    },
  },

  {
    image: '/images/inox.png',
    title: 'INOX - AI Co-Founder Platform | UI/UX Design',
    description:
      'INOX is a modern UI/UX concept for an AI-powered co-founder platform that guides entrepreneurs from raw ideas to validated, scalable products. The experience combines a minimal glassmorphism interface with purple-indigo gradients, structured onboarding, AI idea analysis, market validation, progress tracking, smart reports and an AI chat co-founder to support the entire startup journey.',
    technologies: [
      'UI/UX Design',
      'Figma',
      'Glassmorphism',
      'Gradient System',
      'Design System',
      'User Flow Design',
      'Information Architecture',
      'Wireframing',
      'Prototyping',
      'Responsive Layouts',
    ],
    links: {
      preview:
        'https://www.figma.com/design/VDYuZ10T9TDA0wLG0IpBHK/InnoX7-Final-Round?m=auto&t=FebE5WeKjsZxBUkG-6',
    },
  },

  {
    image: '/images/classpulseUI.png',
    title: 'Class Pulse - AI-Powered Real-Time Engagement System (UI design)',
    description:
      'Class Pulse is an intelligent web-based learning experience designed to turn traditional online classes into dynamic, interactive and data-driven sessions. The UI/UX concept focuses on real-time engagement visibility, early risk detection, AI-powered insights dashboards, integrated live video learning flows, interactive participation tools, and personalized feedback pathways for both educators and students.',
    technologies: [
      'UI/UX Design',
      'Figma',
      'Dashboard Design',
      'Information Architecture',
      'User Flow Design',
      'Data Visualization UX',
      'EdTech UX',
      'Interaction Design',
      'Prototyping',
      'Usability-First Design',
    ],
    links: {
      preview:
        'https://www.figma.com/design/XbrvIR2cxMnUUCAEWDECZK/Class-Pulse-UI?m=auto&t=FebE5WeKjsZxBUkG-6',
    },
  },

  {
    image: '/images/ayurvedic-clinic.png',
    title: 'Ayurvedic Clinic Booking App',
    description:
      'A full-stack appointment booking system connecting patients with Ayurvedic doctors. The project includes a mobile-first Flutter application for patients and an ASP.NET Core Web API backend. Users can browse doctors, view availability, book appointments, and manage bookings, while the backend handles validation, scheduling logic, and data persistence.',
    technologies: [
      // Frontend (Mobile)
      'Flutter',
      'Dart',
      'Provider',

      // Backend
      'ASP.NET Core Web API',

      // Database
      'PostgreSQL',

      // Architecture & Concepts
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/Ayurvedic-Clinic-Booking-App',
      github: 'https://github.com/WafryAhamed/Ayurvedic-Clinic-Booking-App',
    },
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
      'Vercel',
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/Luca',
      github: 'https://github.com/WafryAhamed/Luca',
    },
  },
  {
    image: '/images/pcos-ai.png',
    title: 'Multimodal AI System for PCOS Prediction',
    description:
      'A multimodal AI system developed during the Bio Fusion Hackathon to predict Polycystic Ovary Syndrome (PCOS) using both ultrasound images and clinical data. The project combines deep learning (EfficientNet-B0) for image analysis and machine learning models for tabular data, using a decision-level fusion approach to improve prediction accuracy. Designed for real-world healthcare applications, it supports early detection and assists clinical decision-making.',
    technologies: [
      'Python',
      'TensorFlow / Keras',
      'Scikit-learn',
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'NumPy',
      'Pandas',
      'Matplotlib',
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/InnoX7',
      github: 'https://github.com/WafryAhamed/InnoX7',
    },
  },
  {
    image: '/images/artistic-pixels.png',
    title: 'Artistic Pixels – Fungal Growth Analysis via Image Processing',
    description:
      'Artistic Pixels is a computer vision-based research project that analyzes and tracks fungal growth on coconuts using advanced image processing techniques. Built with Python and OpenCV, it performs preprocessing, segmentation, and quantitative analysis to identify multiple fungal species, measure growth area, calculate intensity, and visualize growth trends over time. The system provides data-driven insights for agricultural research and post-harvest analysis.',
    technologies: [
      'Python',
      'OpenCV',
      'NumPy',
      'Computer Vision',
      'Image Processing',
      'Image Segmentation',
      'Jupyter Notebook',
      'Data Analysis',
      'Matplotlib',
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/Artistic_Pixels_Report',
      github: 'https://github.com/WafryAhamed/Artistic_Pixels_Report',
    },
  },
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
      'Lottie Animations',
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/Daily-Food-Planner-Application',
      github: 'https://github.com/WafryAhamed/Daily-Food-Planner-Application',
    },
  },
  {
    image: '/images/rentride.png',
    title: 'RentRide – Microservices-Based Vehicle Rental Platform',
    description:
      'RentRide is a scalable vehicle rental platform built using a microservices architecture with Go and PostgreSQL. The system features an API Gateway, JWT-based authentication, real-time ride tracking using WebSockets, and multiple decoupled services for booking, payments, notifications, and vehicle management. Designed for high performance and scalability, it supports rider and driver mobile applications with a complete ride lifecycle system.',
    technologies: [
      // Backend
      'Go (Golang)',
      'Gin Framework',
      'GORM',
      'JWT Authentication',
      'WebSockets (Gorilla)',
      'Microservices Architecture',

      // Database
      'PostgreSQL',

      // Frontend / Mobile
      'Flutter (Dart)',

      // DevOps & Tools
      'GitHub Actions',
      'OpenAPI 3.0',

      // Concepts
      'Real-Time Systems',
      'API Gateway',
      'Role-Based Access Control',
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/RentRide',
      github: 'https://github.com/WafryAhamed/RentRide',
    },
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
      'ESLint',
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/Baked_Delights_website',
      github: 'https://github.com/WafryAhamed/Baked_Delights_website',
    },
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
    ],
    links: {
      preview: 'https://github.com/WafryAhamed/TeamBug',
      github: 'https://github.com/WafryAhamed/TeamBug',
    },
  },

  {
    image: '/images/innox7.png',
    title: 'Campix App - Smart Campus Companion',
    description:
      'Campix is a smart campus companion designed to simplify and enhance university life through one connected mobile experience. It centralizes campus navigation, schedule and task management, academic resource access, event updates, and real-time alerts in a clean, intuitive interface. The product addresses common student pain points such as missed activities, schedule conflicts, fragmented tools, and delayed access to important information. The UI/UX approach emphasizes clarity, accessibility, and consistency using a modern card-based layout, soft teal-accented visuals, and smooth flows from onboarding to core features. By combining productivity, navigation, and engagement, Campix reduces daily friction and helps students stay organized, informed, and connected throughout their academic journey.',
    technologies: [
      'UI/UX Design',
      'Figma',
      'Mobile App Design',
      'Information Architecture',
      'User Flow Design',
      'Dashboard Design',
      'Card-Based UI',
      'Accessibility-Focused Design',
      'Design System',
      'Prototyping',
    ],
    links: {
      preview:
        'https://www.figma.com/design/HJ3IgDg1COXq6QozGA02tq/InnoX7?m=auto&t=FebE5WeKjsZxBUkG-6',
    },
  },
  {
    image: '/images/chefBuddy.png',
    title: 'Chef Buddy - Where Planning Meets Taste',
    description:
      'Chef Buddy is a smart meal planning and recipe assistant designed to simplify everyday cooking. It solves common kitchen pain points like not knowing what to cook with available ingredients, food waste from poor planning, difficulty organizing weekly meals, and losing favorite recipes. The app combines ingredient-based recipe discovery, favorites management, weekly meal planning, and step-by-step cooking guidance in one user-friendly experience. Its UI/UX design uses a clean and minimal layout, strong red accents, card-based structure, intuitive flows, and high readability to keep planning and cooking effortless. Outcome: reduced decision fatigue, less food waste, and a more organized, enjoyable, stress-free cooking routine.',
    technologies: [
      'UI/UX Design',
      'Figma',
      'FigJam',
      'Whimsical',
      'Mobile App Design',
      'Meal Planner UX',
      'Ingredient-Based Search UX',
      'Favorites Management UX',
      'Calendar Integration UX',
      'Step-by-Step Recipe Flow',
      'Card-Based UI',
      'Information Architecture',
      'User Flow Design',
      'Red-Themed Visual Identity',
      'Usability-First Design',
    ],
    links: {
      preview:
        'https://www.figma.com/design/oTKzOxbxWqJ85klQF6Pfkr/Chef-Buddy?m=auto&t=FebE5WeKjsZxBUkG-6',
    },
  },

  {
    image: '/images/Harmoni.png',
    title: 'Harmoni - Mental Wellness Companion',
    description:
      'Harmoni is a modern mental wellness mobile application that supports emotional well-being through a simple, calming, and intuitive user experience. It helps users track moods, manage stress, and build healthy daily habits with guided tools and personalized insights. The platform centralizes reflection, coping mechanisms, and wellness exercises including breathing techniques, journaling, and mindfulness practices. With a clean interface and soothing color palette, Harmoni creates a stress-free digital environment that encourages consistency, self-care, and emotional awareness. Objective: simplify mental health management through an accessible, user-friendly, visually calming platform that reduces stress and improves overall well-being.',
    technologies: [
      'UI/UX Design',
      'Figma',
      'Mood Tracking UX',
      'Stress Management UX',
      'Guided Wellness Exercises',
      'Coping Mechanisms Design',
      'Smart Insights Dashboard',
      'Secure & Private UX',
      'Mobile App Design',
      'Calming Visual Design',
      'Information Architecture',
      'User Flow Design',
      'Usability-First Design',
    ],
    links: {
      preview:
        'https://www.figma.com/design/y7relsd0oVEnk5HGq9ze70/Harmoni?m=auto&t=FebE5WeKjsZxBUkG-6',
    },
  },
  {
    image: '/images/innox7-v2.png',
    title: 'Campix App -  Smart Campus Companion | version 2',
    description:
      'Campix is a smart campus companion designed to simplify and enhance university life through one connected mobile experience. It centralizes campus navigation, schedule and task management, academic resource access, event updates, and real-time alerts in a clean, intuitive interface. The product addresses common student pain points such as missed activities, schedule conflicts, fragmented tools, and delayed access to important information. The UI/UX approach emphasizes clarity, accessibility, and consistency using a modern card-based layout, soft teal-accented visuals, and smooth flows from onboarding to core features. By combining productivity, navigation, and engagement, Campix reduces daily friction and helps students stay organized, informed, and connected throughout their academic journey.',
    technologies: [
      'UI/UX Design',
      'Figma',
      'Mobile App Design',
      'Information Architecture',
      'User Flow Design',
      'Dashboard Design',
      'Card-Based UI',
      'Accessibility-Focused Design',
      'Design System',
      'Prototyping',
    ],
    links: {
      preview:
        'https://www.figma.com/design/x8QiiZl1mEcEbSXwfd84E1/InnoX7-v-2?m=auto&t=FebE5WeKjsZxBUkG-6',
    },
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
      'Star Topology',
    ],
    links: {
      preview:
        'https://github.com/WafryAhamed/Secure-Enterprise-Network-Infrastructure-with-VLANs-and-DHCP',
      github:
        'https://github.com/WafryAhamed/Secure-Enterprise-Network-Infrastructure-with-VLANs-and-DHCP',
    },
  },
] as const;

export const skillsData = [
  // ---------------------------------------------------
  // ⭐ Frontend
  // ---------------------------------------------------
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.sass className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.angular className="size-12" /> },
  { icon: <Icons.bootstrap className="size-12" /> },
  { icon: <Icons.flutter className="size-12" /> },
  { icon: <Icons.framer className="size-12" /> },
  { icon: <Icons.figma className="size-12" /> },

  // ---------------------------------------------------
  // ⭐ Backend
  // ---------------------------------------------------
  { icon: <Icons.nodejs className="size-12" /> },
  { icon: <Icons.express className="size-12" /> },
  { icon: <Icons.django className="size-12" /> },
  { icon: <Icons.flask className="size-12" /> },
  { icon: <Icons.fastapi className="size-12" /> },
  { icon: <Icons.go className="size-12" /> },
  { icon: <Icons.graphql className="size-12" /> }, // ✅ ADD

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
  { icon: <Icons.sqlite className="size-12" /> },
  { icon: <Icons.postgis className="size-12" /> },

  // ---------------------------------------------------
  // ⭐ DevOps / Infra
  // ---------------------------------------------------
  { icon: <Icons.docker className="size-12" /> },
  { icon: <Icons.kubernetes className="size-12" /> },
  { icon: <Icons.git className="size-12" /> },
  { icon: <Icons.githubIcon className="size-12" /> },
  { icon: <Icons.gitlab className="size-12" /> },
  { icon: <Icons.jenkins className="size-12" /> },
  { icon: <Icons.nginx className="size-12" /> }, // ✅ ADD
  { icon: <Icons.linux className="size-12" /> }, // ⚠️ ADD only if icon exists

  // ---------------------------------------------------
  // ⭐ Cloud / Platforms
  // ---------------------------------------------------
  { icon: <Icons.vercel className="size-12" /> },
  { icon: <Icons.netlify className="size-12" /> },
  { icon: <Icons.railway className="size-12" /> },
  { icon: <Icons.aws className="size-12" /> },
  { icon: <Icons.firebase className="size-12" /> }, // ✅ ADD

  // ---------------------------------------------------
  // ⭐ AI / ML
  // ---------------------------------------------------
  { icon: <Icons.python className="size-12" /> },
  { icon: <Icons.tensorflow className="size-12" /> },
  { icon: <Icons.keras className="size-12" /> },
  { icon: <Icons.pytorch className="size-12" /> },
  { icon: <Icons.scikitlearn className="size-12" /> },
  { icon: <Icons.numpy className="size-12" /> },
  { icon: <Icons.pandas className="size-12" /> },
  { icon: <Icons.opencv className="size-12" /> },
  { icon: <Icons.openai className="size-12" /> }, // ✅ ADD
  { icon: <Icons.claude className="size-12" /> }, // ✅ ADD

  // ---------------------------------------------------
  // ⭐ Productivity / Tools
  // ---------------------------------------------------
  { icon: <Icons.copilot className="size-12" /> },
] as const;
