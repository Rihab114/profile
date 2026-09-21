import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { JavaScript } from "@/components/ui/svgs/javascript";
import { Sql } from "@/components/ui/svgs/sql";
import { PySpark } from "@/components/ui/svgs/pyspark";
import { ScikitLearn } from "@/components/ui/svgs/scikitlearn";
import { PyTorch } from "@/components/ui/svgs/pytorch";
import { MLflow } from "@/components/ui/svgs/mlflow";
import { Airflow } from "@/components/ui/svgs/airflow";
import { Kafka } from "@/components/ui/svgs/kafka";
import { Spark } from "@/components/ui/svgs/spark";
import { Flink } from "@/components/ui/svgs/flink";
import { Dbt } from "@/components/ui/svgs/dbt";
import { Tableau } from "@/components/ui/svgs/tableau";
import { Aws } from "@/components/ui/svgs/aws";
import { Terraform } from "@/components/ui/svgs/terraform";
import { Jira } from "@/components/ui/svgs/jira";
import { LangChain } from "@/components/ui/svgs/langchain";
import { Brain } from "@/components/ui/svgs/brain";
import { Data } from "@/components/ui/svgs/data";
import { Cloud } from "@/components/ui/svgs/cloud";
import { Agile } from "@/components/ui/svgs/agile";

export const DATA = {
  name: "Rihab Ghrab - ML Engineer",
  initials: "AM",
  url: "https://alexmercer.dev",
  location: "Austin, TX",
  locationLink: "https://www.google.com/maps/place/austin+tx",
  description:
    "Senior Machine Learning Engineer. I love turning data into smart systems, models into products, and ideas into AI that actually works.",
  summary:
    "For the past 4+ years, I’ve been building and shipping ML solutions, from demand forecasting and anomaly detection to pricing and inventory optimization. I work across the full stack of ML from data pipelines and model development to cloud deployment, monitoring, and GenAI.\n\n I love turning complex problems into simple, production-ready AI systems that create real business impact.",
  avatarUrl: "/profile_pic.jpg",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    skills: { order: 2, enabled: true, heading: "Skills" },
    work: { order: 3, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 4, enabled: true, heading: "Education" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    },
    /*hackathons: {
      order: 7, enabled: true,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: true,
      heading: "My Recent Travels",
    },*/
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Just shoot me a dm with a direct question on twitter and I'll respond whenever I can. I will ignore all soliciting.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    // Programming
    { name: "Python", icon: Python },
    { name: "SQL", icon: Sql },
    { name: "PySpark", icon: PySpark },
    { name: "JavaScript", icon: JavaScript },
    // Machine Learning & AI
    { name: "Predictive Modeling", icon: Brain },
    { name: "Time Series Forecasting", icon: Brain },
    { name: "Anomaly Detection", icon: Brain },
    { name: "Feature Engineering", icon: Data },
    { name: "Statistical Analysis", icon: Brain },
    { name: "Model Explainability (SHAP)", icon: Brain },
    { name: "LLMs & Generative AI", icon: Brain },
    { name: "Retrieval-Augmented Generation (RAG)", icon: Brain },
    { name: "LangChain", icon: LangChain },
    { name: "Vector Databases (Chroma, Neo4j)", icon: Data },
    { name: "Scikit-learn", icon: ScikitLearn },
    { name: "PyTorch", icon: PyTorch },
    { name: "MLflow", icon: MLflow },
    // Data Engineering
    { name: "Airflow", icon: Airflow },
    { name: "Kafka", icon: Kafka },
    { name: "Spark", icon: Spark },
    { name: "Flink", icon: Flink },
    { name: "dbt", icon: Dbt },
    { name: "ETL Pipelines", icon: Data },
    { name: "API Development", icon: Data },
    { name: "Data Modeling", icon: Data },
    { name: "Data Governance", icon: Data },
    { name: "Data Quality", icon: Data },
    { name: "Tableau", icon: Tableau },
    // Cloud & DevOps
    { name: "AWS (S3, Athena, Glue, Redshift, SageMaker)", icon: Aws },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Terraform", icon: Terraform },
    { name: "CI/CD", icon: Cloud },
    // Management
    { name: "Agile", icon: Agile },
    { name: "Jira", icon: Jira },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "rihab.ghrab.ing@outlook.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Rihab114",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rihab-ghrab-1382691b6/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "rihab.ghrab.ing@outlook.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Infor",
      href: "https://www.infor.com/mea",
      badges: [],
      location: "New York City",
      title: "Senior ML Engineer",
      logoUrl: "https://www.vectorlogo.zone/logos/infor/infor-icon.svg",
      start: "August 2022",
      end: undefined,
      description:
        "Designed and productionized machine learning solutions for demand forecasting, anomaly detection, pricing, and inventory optimization supporting enterprise supply chain planning across multiple customers. \n\nDeveloped scalable feature engineering pipelines generating demand, inventory, and seasonality features for model training and real-time inference workflows. \n\n Architected automated validation and monitoring pipelines that improved production model reliability across enterprise customer deployments.\n\n  Partnered with data scientists to transition models from experimentation to scalable production-ready solutions. Defined model performance KPIs and monitoring strategies, enabling continuous evaluation and improvement after deployment.\n\n  Partnered with product teams and stakeholders to translate business requirements into scalable AI solutions.\n\n  Presented AI solution designs and technical trade-offs to cross-functional stakeholders, aligning business objectives with scalable ML architectures."
    },
    {
      company: "Tac-Tic",
      href: "https://stripe.com",
      badges: [],
      location: "Tunis, TN",
      title: "Data Scientist Intern",
      logoUrl: "https://www.google.com/s2/favicons?domain=stripe.com&sz=128",
      start: "May 2021",
      end: "August 2021",
      description:
        "Worked on credit score by analyzing thousands of data points in real time to predict borrower default risk with higher accuracy than traditional linear methods.",
    }
  ],
  education: [
    {
      school: "Higher School of Communication of Tunis",
      href: "https://www.supcom.tn/",
      degree: "Bachelor of Science, Computer Science",
      logoUrl: "/sup-com-logo.jpg",
      start: "2019",
      end: "2022",
    },
    {
      school: "El Manar Preparatory Engineering Institute",
      href: "https://ipeiem.rnu.tn/",
      degree: "Engineering Pre-Studies",
      logoUrl: "/Logo_IPEIEM.jpg",
      start: "2019",
      end: "2017",
    }
  ],
  projects: [
    {
      title: "End-to-End Demand Forecasting",
      href: "https://stackwise.dev",
      dates: "March 2023 - June 2023",
      active: true,
      description:
        "Built scalable SKU-level demand forecasting models using Prophet and XGBoost, capturing seasonality, promotions, calendar events, and lag-based patterns. Automated feature engineering and forecasting pipelines across thousands of product-location combinations, with model performance evaluated using MAE, RMSE, and MAPE to improve accuracy over baseline approaches.",
      technologies: [
        "Python",
        "XGBoost",
        "Prophet",
        "Scikit-learn",
        "Pandas",
        "MLflow",
        "AWS S3",
        "AWS Sagemaker",
        "Docker",
        "CI/CD"
      ],
      links: [
        {
          type: "Github",
          href: "https://stackwise.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/forecasting.png",
      video: "",
    },
    {
      title: "Production Time-Series Anomaly Detection",
      href: "https://github.com/Rihab114/timeseries-anomaly-detection",
      dates: "October 2023 - February 2024",
      active: true,
      description:
        "Developed an end-to-end machine learning pipeline for multivariate time-series anomaly detection, identifying abnormal patterns across interacting features. The solution combines statistical analysis, feature engineering, and unsupervised learning to detect, score, and rank anomalies by severity, enabling automated monitoring and early detection of unusual operational behavior.",
      technologies: [
        "Python", 
        "Pandas", 
        "Scikit-learn", 
        "LOF", 
        "DBSCAN", 
        "Isolation Forest", 
        "K-Means", 
        "time-series analysis", 
        "statistical anomaly detection", 
        "feature engineering"
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/Rihab114/timeseries-anomaly-detection",
          icon: <Icons.github className="size-3" />,
        },
      ],
      //image: "",
      //video: "https://cdn.magicui.design/globe.mp4",
      //video:"/anomaly_detection_explainer.mp4"
      image:"/anomaly-detection.png"
    },
    {
      title: "Enterprise RAG / LLM Application",
      href: "https://formbase.dev",
      dates: "June 2025 - September 2025",
      active: true,
      description:
        "Built an enterprise-grade Retrieval-Augmented Generation (RAG) application that acts as an intelligent advisor over internal company knowledge. The solution indexes proprietary documents into a vector database, retrieves the most relevant context based on user queries, and uses an LLM to generate grounded, context-aware responses—streamlining access to company information while reducing the time spent searching across internal documentation.",
      technologies: [
        "Python", "LLMs", "RAG", "LangChain", "Sentence Transformers", "Vector Databases", "Embeddings", "Transformers", "Prompt Engineering", "NLP"
      ],
      links: [
        {
          type: "Website",
          href: "https://formbase.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/alexmercer-dev/formbase",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/llm-app.png",
      video: "",
    },
    {
      title: "GenAI Forecasting Platform",
      href: "https://patchwork.run",
      dates: "February 2026 - May 2026",
      active: false,
      description:
        "GenAI-powered forecasting platform that transforms traditional forecasting outputs into an interactive decision-support experience. The platform enables users to query forecast results in natural language, understand the key drivers behind predicted values, explore trends and anomalies, and obtain contextual explanations—making complex forecasting insights accessible to both technical and business users.",
      technologies: [
       "Python", "GenAI/LLMs", "REST APIs",  "XGBoost", "Prophet", "Pandas", "SQL", "AWS", 
      ],
      links: [
        {
          type: "Website",
          href: "https://patchwork.run",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/forecast-platform.png",
      //ideo: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
  hackathons: [
    {
      title: "PNW Hacks 2022",
      dates: "October 14th - 16th, 2022",
      location: "Seattle, Washington",
      description: "Built a real-time collaborative code review tool using WebSockets and Monaco Editor. Won best developer tool.",
      image: "https://avatar.vercel.sh/pnw-hacks?size=40",
      win: "Best Developer Tool",
      links: [],
    },
    {
      title: "nwHacks 2022",
      dates: "January 15th - 16th, 2022",
      location: "Vancouver, BC",
      description: "Created an accessibility-first browser extension that rewrites complex legal documents into plain English using GPT-3.",
      image: "https://avatar.vercel.sh/nwhacks-2022?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2021",
      dates: "September 17th - 19th, 2021",
      location: "Waterloo, Ontario (Remote)",
      description: "Built a distributed key-value store in Go with a Raft consensus implementation from scratch. Finalist in the systems track.",
      image: "https://avatar.vercel.sh/hackthenorth-2021?size=40",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/raftdb",
        },
      ],
    },
    {
      title: "DubHacks 2021",
      dates: "October 9th - 10th, 2021",
      location: "Seattle, Washington",
      description: "Developed a carbon footprint tracker that integrates with Google Maps to suggest lower-emission commute alternatives.",
      image: "https://avatar.vercel.sh/dubhacks-2021?size=40",
      win: "Best Sustainability Hack",
      links: [],
    },
    {
      title: "StormHacks 2021",
      dates: "April 24th - 25th, 2021",
      location: "Burnaby, BC (Remote)",
      description: "Built a multiplayer browser game where players collaboratively debug a shared codebase before a timer runs out.",
      image: "https://avatar.vercel.sh/stormhacks-2021?size=40",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/bugout",
        },
      ],
    },
    {
      title: "HackCamp 2020",
      dates: "November 14th - 15th, 2020",
      location: "Vancouver, BC (Remote)",
      description: "Created a CLI tool that automatically generates unit test scaffolding from TypeScript function signatures using static analysis.",
      image: "https://avatar.vercel.sh/hackcamp-2020?size=40",
      win: "1st Place Overall",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/testgen",
        },
      ],
    },
    {
      title: "cmd-f 2020",
      dates: "March 7th - 8th, 2020",
      location: "Vancouver, BC",
      description: "Built a mobile-first job board specifically for junior developers, aggregating listings from GitHub Jobs, HN Who's Hiring, and LinkedIn.",
      image: "https://avatar.vercel.sh/cmd-f-2020?size=40",
      links: [],
    },
    {
      title: "nwHacks 2020",
      dates: "January 11th - 12th, 2020",
      location: "Vancouver, BC",
      description: "Developed a peer-to-peer study session platform with live video, shared whiteboards, and Pomodoro timers.",
      image: "https://avatar.vercel.sh/nwhacks-2020?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackTheNorth 2019",
      dates: "September 13th - 15th, 2019",
      location: "Waterloo, Ontario",
      description: "Built an API rate-limit visualizer that tracks usage across multiple providers and surfaces anomalies in real time.",
      image: "https://avatar.vercel.sh/hackthenorth-2019?size=40",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/alexmercer-dev/ratelens",
        },
      ],
    },
    {
      title: "DeltaHacks V",
      dates: "January 18th - 19th, 2019",
      location: "Hamilton, Ontario",
      description: "Created a VS Code extension that suggests variable names based on type signatures and surrounding code context using a local ML model.",
      image: "https://avatar.vercel.sh/deltahacks-v?size=40",
      links: [],
    },
    {
      title: "StormHacks 2019",
      dates: "March 2nd - 3rd, 2019",
      location: "Burnaby, BC",
      description: "Built a network latency heatmap tool that visualises CDN performance across regions using real user data injected via a lightweight JS snippet.",
      image: "https://avatar.vercel.sh/stormhacks-2019?size=40",
      win: "Best Infrastructure Hack",
      links: [],
    },
  ],
} as const;
