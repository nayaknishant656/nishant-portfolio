import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
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
    "Coding since Class 7, building products since 16. Full-stack developer with hands-on experience in web apps, REST APIs, and AI-integrated platforms. Strong problem intuition, deep online research habits, and a proven ability to architect and ship complex systems independently.",
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
    { href: "/project", icon: NotebookIcon, label: "Project" },
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
  work: [

    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },

  ] as readonly any[],
  education: [
    {
      school: "Poornima University",
      href: "https://www.poornima.edu.in/",
      degree: "Bachelor of Technology - Computer Science",
      logoUrl: "",
      start: "2025",
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
      href: "#",
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
      href: "https://linksnap-sample.netlify.app",
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
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },

  ] as readonly any[],
} as const;
