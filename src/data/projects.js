export const projectsData = [
  {
    id: 1,
    title: "Garments Order & Production Tracker System",
    description: "The Garments Order & Production Tracker System is a full‑stack web application designed to help small and medium‑sized garment factories efficiently manage orders, products, production stages, and user roles. The system supports Admin, Manager, and Buyer roles with role‑based dashboards, real‑time order tracking, and analytics.",
    image: "https://i.ibb.co.com/fV6gGdCw/garments.png",
    technologies: ["React", "JavaScript", "Tailwind CSS", "DaisyUI", "Firebase", "TanStack React Query", "React Hook Form", "Node.js", "Express.js", "MongoDB"],
    category: "Web Application",
    liveUrl: "https://garments-tracker-system.web.app",
    githubUrl: "https://github.com/Obaidul1545/garments-tracker-system-client",
    featured: true,

    details: {
      overview:
        "The Garments Order & Production Tracker System is a full-stack web application built to help small and medium-sized garment factories manage products, orders, production stages, and user roles efficiently. It features role-based dashboards, real-time order tracking, and analytics for Admins, Managers, and Buyers.",

      challenges: [
        "Implementing secure role-based authentication and authorization",
        "Managing complex production tracking steps with real-time status updates",
        "Handling multiple dashboards with different permissions and data views",
        "Ensuring data consistency between Firebase authentication and MongoDB",
        "Building scalable analytics with dynamic filters and charts"
      ],

      features: [
        "Role-based authentication (Admin, Manager, Buyer) with Firebase",
        "JWT token authentication stored securely in cookies",
        "Protected private routes without redirect issues on reload",
        "Modern animated home page with Framer Motion",
        "Product management system with MOQ & quantity validation",
        "Conditional order placement based on user role and approval status",
        "Order booking system with auto price calculation",
        "Admin dashboard with analytics, charts, and user management",
        "Manager dashboard for product and order approval workflows",
        "Buyer dashboard with order tracking and cancellation",
        "Step-by-step production tracking timeline (Cutting → Delivery)",
        "Dark / Light theme toggle and fully responsive UI",
        "Custom 404 page, dynamic page titles, and reusable components"
      ],

      techStack: {
        frontend: [
          "React 19",
          "React Router DOM",
          "Tailwind CSS",
          "Framer Motion",
          "TanStack React Query",
          "React Hook Form",
          "Recharts",
          "Swiper.js",
          "SweetAlert2",
          "React Toastify"
        ],
        backend: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Firebase Token Authentication"
        ],
        deployment: [
          "Firebase Authentication",
          "Firebase Hosting"
        ]
      },
      futureImprovements: [
        "Online payment gateway integration",
        "Real-time notifications for order status updates",
        "Advanced production analytics and forecasting",
        "Multi-language support for international buyers",
        "Mobile app version for factory managers"
      ]
    }
  },
  {
    id: 2,
    title: "StudyMate — Find Your Perfect Study Partner",
    description: "StudyMate is a MERN Stack–based web platform that helps students connect with each other, find study partners, and learn collaboratively. It allows users to search for study partners based on specific subjects or by location, making it easier to study together more effectively",
    image: "https://i.ibb.co.com/jZ6MXj9X/stadymate.png",
    technologies: ["React.js", "JavaScript.js", "Tailwind CSS", "DaisyUI", "Firebase", "Node.js", "Express.js", "MongoDB"],
    category: "Web App",
    liveUrl: "https://study-mate-learning.netlify.app",
    githubUrl: "https://github.com/Obaidul1545/study-mate-client",
    featured: true,
    details: {
      overview: "StudyMate is a MERN Stack web platform that helps students connect with each other, find study partners, and learn together based on subject or location.",
      challenges: [
        "Ensuring dynamic navbar updates based on user authentication status",
        "Managing partner request system and real-time partner count updates",
        "Maintaining responsive design across mobile, tablet, and desktop"
      ],
      features: [
        "User Authentication with Firebase (Email/Password & Google Sign-In)",
        "Dynamic Navbar showing links based on login state",
        "Create, Update, Delete Partner Profile (CRUD)",
        "Find Partners with search and sorting by subject and experience level",
        "Partner Request System with automatic partnerCount updates",
        "Responsive Design for all devices",
        "UI Enhancements: AOS animations, Dark/Light theme toggle, SweetAlert2 & React-Toastify notifications, Custom loading spinner"
      ],
      techStack: {
        frontend: ["React", "React Router", "Tailwind CSS", "DaisyUI", "AOS Animation", "Swiper.js", "Axios", "React Icons", "Lucide React", "React Toastify", "SweetAlert2", "React Spinners"],
        backend: ["Node.js", "Express.js", "MongoDB", "Dotenv", "Firebase Authentication"],
        deployment: ["Netlify", "Firebase Authentication",]
      },
      futureImprovements: [
        "Enhanced search filters and partner matching algorithm",
        "Integration with calendar and study scheduling tools",
        "Mobile app version for iOS and Android"
      ]
    }
  },
  {
    id: 3,
    title: "SkillSwap – A Local Skill Exchange Platform",
    description: "SkillSwap is a local skill exchange platform built with React, designed to connect people who want to share, learn, or trade skills. Users can browse skill listings, view detailed skill pages, book sessions, and manage their profiles seamlessly. The platform is fully responsive, feature-rich, and incorporates smooth animations for a modern user experience. It supports Email & Google authentication and behaves as a Single Page Application (SPA), ensuring fast navigation without page reloads.",
    image: "https://i.ibb.co.com/4wNZRgQ3/skill-swap.png",
    technologies: ["React",
      "React Router",
      "Tailwind CSS",
      "DaisyUI",
      "Swiper.js",
      "AOS Animation",
      "Axios",],
    category: "FinTech",
    liveUrl: "https://skillswap-65fb9.web.app",
    githubUrl: "https://github.com/Obaidul1545/skill-swap",
    featured: true,
    details: {
      overview:
        "SkillSwap is an interactive local skill exchange platform where users can share, learn, or trade skills such as guitar lessons, language exchange, coding help, or yoga training. The platform focuses on community-driven learning with a smooth and engaging user experience.",

      challenges: [
        "Designing an intuitive skill browsing and booking flow",
        "Managing authentication with multiple providers",
        "Ensuring smooth SPA navigation without route reload issues",
        "Building a fully responsive UI for all devices",
        "Maintaining consistent animations without affecting performance"
      ],

      features: [
        "User authentication with Email & Google using Firebase",
        "Browse skill listings with detailed skill information",
        "Skill details page with session booking form",
        "User profile page with view and update functionality",
        "Homepage sections including Hero Slider, Popular Skills, Top Rated Providers, How It Works, and an extra custom section",
        "Responsive design for mobile, tablet, and desktop",
        "Single Page Application (SPA) behavior with smooth routing",
        "Subtle UI animations using AOS, Swiper, and React Hot Toast"
      ],

      techStack: {
        frontend: [
          "React",
          "React Router",
          "Tailwind CSS",
          "DaisyUI",
          "Swiper.js",
          "AOS Animation",
          "Axios",
          "Lucide React",
          "React Hot Toast"
        ],
        deployment: [
          "Firebase Hosting",
          "Firebase Authentication (Email & Google)"
        ]
      },
      futureImprovements: [
        "Skill rating and review system",
        "Real-time chat between skill providers and learners",
        "Advanced search and filter options",
        "Session scheduling with calendar integration",
        "Payment system for paid skill sessions"
      ]
    }
  }
]