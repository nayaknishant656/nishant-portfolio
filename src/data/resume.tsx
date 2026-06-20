import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, Presentation } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Nishant Nayak",
  initials: "NN",
  url: "https://portfolio-nishant-ten.vercel.app",
  location: "Jaipur, India",
  locationLink: "https://www.google.com/maps/place/Jaipur,+Rajasthan",
  description:
    "Software Developer & Product Designer",
  summary:
    "Developing Complex System Desigin API , Database , authentication , scalibility , Reliabliity , AI System with Production grade Agents",
  avatarUrl: "/me.png",
  skills: [
    // Languages
    { name: "JavaScript" },
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "PHP" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "SQL" },
    // Frontend
    { name: "React.js", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Vite" },
    { name: "Tailwind CSS" },
    { name: "React-Router" },
    { name: "Owl Carousel" },
    // Backend
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js" },
    { name: "REST APIs" },
    { name: "JWT Authentication" },
    { name: "WebRTC" },
    // Databases
    { name: "MongoDB" },
    { name: "Mongoose" },
    { name: "MySQL" },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Pinecone" },
    // AI / ML
    { name: "OpenAI API" },
    { name: "Gemini 2.0" },
    { name: "LangChain" },
    { name: "BeautifulSoup" },
    { name: "OpenAI Embeddings" },
    { name: "MCP" },
    { name: "Agentic Architecture" },
    // DevOps & Tools
    { name: "Docker", icon: Docker },
    { name: "Vercel" },
    { name: "Git" },
    { name: "GitHub" },
  ] as readonly { name: string; icon?: any }[],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/project/1", icon: Presentation, label: "Project" },
  ],
  contact: {
    email: "nishantnayak094@gmail.com",
    tel: "6204616961",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nayaknishant656",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/nishant-nayak-263512449",
        icon: Icons.linkedin,
        navbar: true,
      },
      /*
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      */
      email: {
        name: "Send Email",
        url: "mailto:nishantnayak094@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [] as readonly any[],
  education: [
    {
      school: "Poornima University",
      href: "https://www.poornima.edu.in/",
      degree: "Bachelor of Technology - Computer Science",
      logoUrl: "",
      start: "",
      end: "Present",
    },
    {
      school: "JAC Board",
      href: "#",
      degree: "Class XII - Science (83%)",
      logoUrl: "",
      start: "",
      end: "",
    },
    {
      school: "ICSE Board",
      href: "#",
      degree: "Class X (81%)",
      logoUrl: "",
      start: "",
      end: "2024",
    },
    /*
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Waterloo",
      href: "https://uwaterloo.ca",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "Wilfrid Laurier University",
      href: "https://wlu.ca",
      degree: "Bachelor's Degree of Business Administration (BBA)",
      logoUrl: "/laurier.png",
      start: "2016",
      end: "2021",
    },
    {
      school: "International Baccalaureate",
      href: "https://ibo.org",
      degree: "IB Diploma",
      logoUrl: "/ib.png",
      start: "2012",
      end: "2016",
    },
    */
  ],
  projects: [
    {
      title: "Snappy-Poornima",
      href: "/project",
      dates: "Jan 2026",
      active: true,
      description:
        "Upcoming project focused on solving campus network talent hiring and resource asymmetry. Architected using Next.js, Python and LangChain for AI pipelines, Pinecone for vector search, and Docker for containerized deployment.",
      technologies: [
        "Next.js",
        "Python",
        "LangChain",
        "Pinecone",
        "Docker",
        "Node.js",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "Emotionally-AI",
      href: "/project/emotionally-ai",
      dates: "Mar 2026",
      active: true,
      description:
        "Integrated OpenAI model with Express and MongoDB to analyze journals and generate emotional state insights. Developed 5+ REST endpoints to store and retrieve data from MongoDB. Built an intuitive UI in Next.js with Tailwind CSS and implemented search functionality by User ID.",
      technologies: ["Next.js", "Node.js", "Express", "MongoDB", "OpenAI"],
      links: [
        {
          type: "Website",
          href: "https://linksnap-sample.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "TRADE-Platform",
      href: "https://tradeai-platform.vercel.app",
      dates: "Feb 2026",
      active: true,
      description:
        "Built a full-stack product listing platform with JWT-secured sign-in and sign-up flows. Implemented CRUD operations (create, delete, update, edit) for products with filtering and sorting. Designed RESTful API with Node.js/Express.js and MongoDB schema for efficient data management.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
      links: [
        {
          type: "Website",
          href: "https://tradeai-platform.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "API-Playground",
      href: "https://predusk-frontend-react-geyj.vercel.app",
      dates: "Feb 2026",
      active: true,
      description:
        "Developed a RESTful API with multiple endpoints for product management including Create, Search, and Category. Designed and implemented a MongoDB schema for efficient data storage and retrieval. Built a minimal Vite-powered UI for testing and demonstrating API endpoints.",
      technologies: ["Vite", "MongoDB", "Express", "Node.js", "Vercel"],
      links: [
        {
          type: "Website",
          href: "https://predusk-frontend-react-geyj.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "RTSP Streaming Platform",
      href: "#",
      dates: "Jan 2026",
      active: true,
      description:
        "Architected an end-to-end RTSP-to-browser streaming pipeline: incoming RTSP feed is converted to HLS format, encoded to Base64, and streamed to the frontend via WebRTC protocol. Built a Go backend service responsible for RTSP-to-HLS conversion and real-time Base64 encoding for WebRTC transport. Developed a Python/FastAPI server to handle video timestamp posting, image coordinate tracking, and serving dashboard data from MongoDB. Integrated video.js on the frontend to decode and play Base64-encoded video streams delivered via WebRTC in real time. Designed a dashboard with GET endpoints to fetch annotated images and POST endpoints to record frame positions and coordinates. Stored stream metadata, timestamps, and image coordinate data in MongoDB for analytics and playback reference.",
      technologies: [
        "Go",
        "Python",
        "FastAPI",
        "MongoDB",
        "WebRTC",
        "video.js",
        "Next.js",
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "TASK-Planet",
      href: "https://task-media-app-frontend-fred.vercel.app",
      dates: "Jan 2026",
      active: true,
      description:
        "Implemented JWT authentication for login, sign-ups, and per-request validation. Built a task-posting feature with card-based UI showing likes and comments. Designed a fully responsive UI with Tailwind CSS and drag-and-drop section reordering.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JWT",
      ],
      links: [
        {
          type: "Website",
          href: "https://task-media-app-frontend-fred.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Doctor_AI",
      href: "https://main.d3f97a5gw6007u.amplifyapp.com",
      dates: "Mar 2025",
      active: true,
      description:
        "Built an online blood report analysis web app that analyzes blood report PDFs using Gemini 2.0. Developed 2 microservices to parse and analyze PDF content. Implementing additional features: download report, WhatsApp shareable link, and doctor recommendation system.",
      technologies: [
        "Next.js",
        "TypeScript",
        "JavaScript",
        "CSS",
        "Node.js",
        "Gemini 2.0",
      ],
      links: [
        {
          type: "Website",
          href: "https://main.d3f97a5gw6007u.amplifyapp.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Paardarshi",
      href: "https://paardarshi-frontend.vercel.app",
      dates: "Mar 2024",
      active: true,
      description:
        "Built a transparent donor verification web portal for a residential society - streamed live on YouTube. Features include searching, sorting, receipt printing, WhatsApp shareable receipts, and certificate generation. Added certificate image download in JPG; fully responsive across all devices.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://paardarshi-frontend.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Certificate Generator",
      href: "https://nawnitstudio.000webhostapp.com/certificate/index.html",
      dates: "Aug 2022",
      active: true,
      description:
        "Developed a donation platform for a village temple using social FOMO strategy via WhatsApp status certificates. Features include searching, sorting, receipt printing, and WhatsApp shareable receipts.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://nawnitstudio.000webhostapp.com/certificate/index.html",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Ppassport",
      href: "https://nawnitstudio.000webhostapp.com",
      dates: "Aug 2021",
      active: true,
      description:
        "Built an active business platform that helps users obtain passport photos using their ID. Developed full-stack interface for image upload and fetch using PHP connected to MySQL.",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      links: [
        {
          type: "Website",
          href: "https://nawnitstudio.000webhostapp.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "React E-Commerce Webapp",
      href: "https://lustrous-moonbeam-ea4656.netlify.app",
      dates: "May 2023",
      active: true,
      description:
        "Built a complete e-commerce web app in 5 days using React with add-to-cart, checkout, and carousel features. Integrated Fabric.js and Image Carousel; fully responsive across all devices.",
      technologies: ["React", "JavaScript", "CSS", "Node.js", "Express"],
      links: [
        {
          type: "Website",
          href: "https://lustrous-moonbeam-ea4656.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Nawnit Studio Prints",
      href: "https://nawnitstudio.000webhostapp.com/nawnit/index.html",
      dates: "Apr 2021",
      active: true,
      description:
        "Started at age 16 during COVID-19 lockdown; built registration forms, MySQL/PHP backend, and payment gateways. Features include image uploads, payment gateways, and user suggestions.",
      technologies: ["JavaScript", "PHP", "MySQL", "Node.js", "Express"],
      links: [
        {
          type: "Website",
          href: "https://nawnitstudio.000webhostapp.com/nawnit/index.html",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Kissan",
      href: "https://nawnitstudio.000webhostapp.com/rev/index.html",
      dates: "May 2023",
      active: true,
      description:
        "Built a startup with web scraping and WhatsApp bulk messaging via WBM for outreach at scale. Developed a fully functional official site with WhatsApp API integration.",
      technologies: ["CSS", "JavaScript", "WhatsApp API"],
      links: [
        {
          type: "Website",
          href: "https://nawnitstudio.000webhostapp.com/rev/index.html",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "OFFLINE",
      href: "#",
      dates: "Boredom Project",
      active: true,
      description:
        "A boredom project worked on for fun. Features include searching, sorting, receipt printing, and WhatsApp shareable receipts. Used MongoDB for storing donor details. Backend developed with Node.js and Express.js.",
      technologies: ["React", "JavaScript", "CSS", "React-Router", "Node.js", "Express", "MongoDB"],
      links: [],
      image: "",
      video: "",
    },
    /*
    {
      title: "Chat Collect",
      href: "/project",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "/project",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
    */
  ],
  hackathons: [
    {
      title: "Emotionally-AI",
      dates: "Mar 2026",
      location: "Personal Project",
      description: "Integrated OpenAI model with Express and MongoDB to analyze journals and generate emotional state insights. Developed 5+ REST endpoints to store and retrieve data from MongoDB. Built an intuitive UI in Next.js with Tailwind CSS and implemented search functionality by User ID.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://linksnap-sample.netlify.app",
        },
      ],
    },
    {
      title: "TRADE-Platform",
      dates: "Feb 2026",
      location: "Personal Project",
      description: "Built a full-stack product listing platform with JWT-secured sign-in and sign-up flows. Implemented CRUD operations (create, delete, update, edit) for products with filtering and sorting. Designed RESTful API with Node.js/Express.js and MongoDB schema for efficient data management.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://tradeai-platform.vercel.app",
        },
      ],
    },
    {
      title: "API-Playground",
      dates: "Feb 2026",
      location: "Personal Project",
      description: "Developed a RESTful API with multiple endpoints for product management including Create, Search, and Category. Designed and implemented a MongoDB schema for efficient data storage and retrieval. Built a minimal Vite-powered UI for testing and demonstrating API endpoints.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://predusk-frontend-react-geyj.vercel.app",
        },
      ],
    },
    {
      title: "Snappy-Poornima",
      dates: "Jan 2026",
      location: "Academic Project",
      description: "Upcoming project focused on solving campus network talent hiring and resource asymmetry. Architected using Next.js, Python and LangChain for AI pipelines, Pinecone for vector search, and Docker for containerized deployment.",
      links: [],
    },
    {
      title: "RTSP Streaming Platform",
      dates: "Jan 2026",
      location: "Personal Project",
      description: "Architected an end-to-end RTSP-to-browser streaming pipeline: incoming RTSP feed is converted to HLS format, encoded to Base64, and streamed to the frontend via WebRTC protocol. Built a Go backend service responsible for RTSP-to-HLS conversion and real-time Base64 encoding for WebRTC transport. Developed a Python/FastAPI server to handle video timestamp posting, image coordinate tracking, and serving dashboard data from MongoDB. Integrated video.js on the frontend to decode and play Base64-encoded video streams delivered via WebRTC in real time.",
      links: [],
    },
    {
      title: "TASK-Planet",
      dates: "Jan 2026",
      location: "Personal Project",
      description: "Implemented JWT authentication for login, sign-ups, and per-request validation. Built a task-posting feature with card-based UI showing likes and comments. Designed a fully responsive UI with Tailwind CSS and drag-and-drop section reordering.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://task-media-app-frontend-fred.vercel.app",
        },
      ],
    },
    {
      title: "Doctor_AI",
      dates: "Mar 2025",
      location: "Personal Project",
      description: "Built an online blood report analysis web app that analyzes blood report PDFs using Gemini 2.0. Developed 2 microservices to parse and analyze PDF content. Implementing additional features: download report, WhatsApp shareable link, and doctor recommendation system.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://main.d3f97a5gw6007u.amplifyapp.com",
        },
      ],
    },
    {
      title: "Paardarshi",
      dates: "Mar 2024",
      location: "Personal Project",
      description: "Built a transparent donor verification web portal for a residential society - streamed live on YouTube. Features include searching, sorting, receipt printing, WhatsApp shareable receipts, and certificate generation. Added certificate image download in JPG; fully responsive across all devices.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://paardarshi-frontend.vercel.app",
        },
      ],
    },
    {
      title: "React E-Commerce Webapp",
      dates: "May 2023",
      location: "Personal Project",
      description: "Built a complete e-commerce web app in 5 days using React with add-to-cart, checkout, and carousel features. Integrated Fabric.js and Image Carousel; fully responsive across all devices.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://lustrous-moonbeam-ea4656.netlify.app",
        },
      ],
    },
    {
      title: "Kissan",
      dates: "May 2023",
      location: "Personal Project",
      description: "Built a startup with web scraping and WhatsApp bulk messaging via WBM for outreach at scale. Developed a fully functional official site with WhatsApp API integration.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://nawnitstudio.000webhostapp.com/rev/index.html",
        },
      ],
    },
    {
      title: "Certificate Generator",
      dates: "Aug 2022",
      location: "Personal Project",
      description: "Developed a donation platform for a village temple using social FOMO strategy via WhatsApp status certificates. Features include searching, sorting, receipt printing, and WhatsApp shareable receipts.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://nawnitstudio.000webhostapp.com/certificate/index.html",
        },
      ],
    },
    {
      title: "Ppassport",
      dates: "Aug 2021",
      location: "Personal Project",
      description: "Built an active business platform that helps users obtain passport photos using their ID. Developed full-stack interface for image upload and fetch using PHP connected to MySQL.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://nawnitstudio.000webhostapp.com",
        },
      ],
    },
    {
      title: "Nawnit Studio Prints",
      dates: "Apr 2021",
      location: "Personal Project",
      description: "Started at age 16 during COVID-19 lockdown; built registration forms, MySQL/PHP backend, and payment gateways. Features include image uploads, payment gateways, and user suggestions.",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://nawnitstudio.000webhostapp.com/nawnit/index.html",
        },
      ],
    },
    {
      title: "OFFLINE",
      dates: "Boredom Project",
      location: "Personal Project",
      description: "A boredom project worked on for fun. Features include searching, sorting, receipt printing, and WhatsApp shareable receipts. Used MongoDB for storing donor details. Backend developed with Node.js and Express.js.",
      links: [],
    },
  ] as readonly any[],
} as const;
