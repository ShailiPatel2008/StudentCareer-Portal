import React from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const roadmaps = [
  {
    id: "software",
    label: "Software Dev",
    duration: "6–12 Months",
    description: "Follow this learning path to build the skills required for a career in Software Development.",
    color: "blue",
    steps: [
      { step: 1, name: "HTML", description: "Learn semantic web page structure, accessibility, and modern HTML5 elements." },
      { step: 2, name: "CSS", description: "Learn styling, layouts, Flexbox, Grid, animations, and responsive design." },
      { step: 3, name: "JavaScript", description: "Add interactivity, dynamic behavior, DOM manipulation, and ES6+ features." },
      { step: 4, name: "Git & GitHub", description: "Master version control, branching, pull requests, and collaborative workflows." },
      { step: 5, name: "React", description: "Build modern, component-based frontend applications with hooks and state management." },
      { step: 6, name: "Node.js", description: "Create backend services, REST APIs, and handle server-side JavaScript runtime." },
      { step: 7, name: "Databases", description: "Learn SQL (PostgreSQL/MySQL) and NoSQL (MongoDB) for data storage and retrieval." },
      { step: 8, name: "Deployment", description: "Deploy projects to production using Vercel, Netlify, Railway, or AWS." },
    ],
  },
  {
    id: "data",
    label: "Data Analytics",
    duration: "4–8 Months",
    description: "Follow this learning path to build the skills required for a career in Data Analytics.",
    color: "teal",
    steps: [
      { step: 1, name: "Excel", description: "Master spreadsheets, formulas, pivot tables, and data cleaning techniques." },
      { step: 2, name: "SQL", description: "Write queries to extract, filter, join, and aggregate data from databases." },
      { step: 3, name: "Python for Data", description: "Use Pandas and NumPy to manipulate, clean, and explore datasets efficiently." },
      { step: 4, name: "Data Visualization", description: "Create compelling charts and dashboards using Matplotlib, Seaborn, and Plotly." },
      { step: 5, name: "Power BI / Tableau", description: "Build interactive business intelligence dashboards and executive reports." },
      { step: 6, name: "Statistics", description: "Apply descriptive and inferential statistics, hypothesis testing, and probability." },
      { step: 7, name: "Portfolio Projects", description: "Analyze real-world datasets and publish end-to-end projects on GitHub and Kaggle." },
    ],
  },
  {
    id: "ai",
    label: "Artificial Intelligence",
    duration: "9–15 Months",
    description: "Follow this learning path to build the skills required for a career in Artificial Intelligence and Machine Learning.",
    color: "purple",
    steps: [
      { step: 1, name: "Python", description: "Build a strong Python foundation — the core language for all AI and ML development." },
      { step: 2, name: "Mathematics", description: "Study linear algebra, calculus, probability, and statistics — the backbone of ML models." },
      { step: 3, name: "Machine Learning", description: "Learn supervised, unsupervised, and ensemble methods using Scikit-learn." },
      { step: 4, name: "Deep Learning", description: "Build neural networks with TensorFlow or PyTorch for image, text, and audio tasks." },
      { step: 5, name: "Natural Language Processing", description: "Process and analyze text data using transformers, BERT, and modern NLP techniques." },
      { step: 6, name: "Generative AI", description: "Explore LLMs, prompt engineering, fine-tuning, and building AI-powered applications." },
      { step: 7, name: "MLOps", description: "Deploy, monitor, and maintain ML models in production using MLflow and cloud platforms." },
      { step: 8, name: "AI Projects", description: "Build and publish end-to-end AI projects demonstrating real-world problem solving." },
    ],
  },
  {
    id: "security",
    label: "Cybersecurity",
    duration: "6–10 Months",
    description: "Follow this learning path to build the skills required for a career in Cybersecurity.",
    color: "red",
    steps: [
      { step: 1, name: "Networking", description: "Understand TCP/IP, DNS, HTTP/S, firewalls, VPNs, and network protocols." },
      { step: 2, name: "Linux", description: "Master the command line, scripting, file permissions, and system administration." },
      { step: 3, name: "Security Fundamentals", description: "Learn the CIA triad, cryptography, risk management, and security frameworks." },
      { step: 4, name: "Ethical Hacking", description: "Study penetration testing methodologies, attack surfaces, and exploitation techniques." },
      { step: 5, name: "Security Tools", description: "Get hands-on with Wireshark, Metasploit, Burp Suite, Nmap, and SIEM tools." },
      { step: 6, name: "Certifications", description: "Pursue CompTIA Security+, CEH, or eJPT to validate your skills for employers." },
      { step: 7, name: "Capture The Flag (CTF)", description: "Practice on TryHackMe and HackTheBox with real challenges to sharpen your skills." },
    ],
  },
  {
    id: "cloud",
    label: "Cloud Computing",
    duration: "5–9 Months",
    description: "Follow this learning path to build the skills required for a career in Cloud Computing.",
    color: "sky",
    steps: [
      { step: 1, name: "Linux", description: "Learn operating system fundamentals, CLI commands, and shell scripting." },
      { step: 2, name: "Networking", description: "Understand VPCs, subnets, load balancers, DNS, and cloud networking concepts." },
      { step: 3, name: "AWS Core Services", description: "Explore EC2, S3, Lambda, RDS, IAM — the essential AWS building blocks." },
      { step: 4, name: "Docker", description: "Containerize applications with Docker for consistent, portable deployments." },
      { step: 5, name: "Kubernetes", description: "Orchestrate and scale containers using Kubernetes (K8s) in production." },
      { step: 6, name: "Infrastructure as Code", description: "Automate cloud infrastructure using Terraform and AWS CloudFormation." },
      { step: 7, name: "Cloud Certifications", description: "Earn AWS Cloud Practitioner, Solutions Architect, or Azure Fundamentals to get hired." },
    ],
  },
  {
    id: "product",
    label: "Product Management",
    duration: "4–8 Months",
    description: "Follow this learning path to build the skills required for a career in Product Management.",
    color: "orange",
    steps: [
      { step: 1, name: "Product Thinking", description: "Understand user problems, market fit, and how to define product vision and strategy." },
      { step: 2, name: "User Research", description: "Conduct interviews, surveys, and usability tests to gather actionable insights." },
      { step: 3, name: "Wireframing & Prototyping", description: "Sketch user flows and build low/high fidelity prototypes using Figma." },
      { step: 4, name: "Data & Metrics", description: "Learn SQL and tools like Mixpanel, Amplitude, or Google Analytics to drive decisions with data." },
      { step: 5, name: "Agile & Roadmapping", description: "Work with Scrum/Kanban, write PRDs, manage backlogs, and build product roadmaps in Jira." },
      { step: 6, name: "Stakeholder Communication", description: "Present product decisions, align cross-functional teams, and communicate trade-offs clearly." },
      { step: 7, name: "PM Certifications & Projects", description: "Complete a PM course (PM School, Reforge) and build a case study portfolio to demonstrate impact." },
    ],
  },
  {
    id: "blockchain",
    label: "Blockchain",
    duration: "6–10 Months",
    description: "Follow this learning path to build the skills required for a career in Blockchain Development.",
    color: "cyan",
    steps: [
      { step: 1, name: "Programming Foundations", description: "Strengthen JavaScript or Python fundamentals before entering blockchain development." },
      { step: 2, name: "Blockchain Concepts", description: "Understand distributed ledgers, consensus mechanisms, wallets, and cryptographic hashing." },
      { step: 3, name: "Solidity", description: "Learn Solidity to write, test, and deploy smart contracts on the Ethereum blockchain." },
      { step: 4, name: "Development Frameworks", description: "Build and test smart contracts using Hardhat or Foundry in a local development environment." },
      { step: 5, name: "Web3.js / Ethers.js", description: "Connect frontend applications to the blockchain and interact with smart contracts from the browser." },
      { step: 6, name: "DeFi & NFT Concepts", description: "Explore decentralized finance protocols, token standards (ERC-20, ERC-721), and IPFS for storage." },
      { step: 7, name: "Security Auditing", description: "Learn common smart contract vulnerabilities (reentrancy, overflow) and audit practices." },
      { step: 8, name: "Deploy a dApp", description: "Build and deploy a full decentralized application on a testnet and publish to your portfolio." },
    ],
  },
  {
    id: "gamedev",
    label: "Game Development",
    duration: "8–14 Months",
    description: "Follow this learning path to build the skills required for a career in Game Development.",
    color: "violet",
    steps: [
      { step: 1, name: "C# or C++ Basics", description: "Learn C# for Unity or C++ for Unreal Engine — both are the primary game dev languages." },
      { step: 2, name: "Game Engine (Unity)", description: "Master Unity's editor, scene hierarchy, GameObjects, components, and physics system." },
      { step: 3, name: "Game Design Principles", description: "Study core mechanics, game loops, player psychology, level design, and balancing." },
      { step: 4, name: "2D Game Development", description: "Build 2D platformers, puzzle games, and shooters with sprites, tilemaps, and animations." },
      { step: 5, name: "3D Game Development", description: "Work with 3D models, lighting, cameras, rigidbodies, and environment design in Unity." },
      { step: 6, name: "Game UI & Audio", description: "Design in-game menus, HUDs, sound effects, and background music integration." },
      { step: 7, name: "Optimization & Build", description: "Optimize performance, handle different screen sizes, and build for PC, Mobile, or WebGL." },
      { step: 8, name: "Publish & Portfolio", description: "Publish games on itch.io or the Google Play Store and build a portfolio of shipped titles." },
    ],
  },
  {
    id: "uiux",
    label: "UI/UX Design",
    duration: "4–8 Months",
    description: "Follow this learning path to build the skills required for a career in UI/UX Design.",
    color: "pink",
    steps: [
      { step: 1, name: "Design Principles", description: "Learn colour theory, typography, spacing, visual hierarchy, and accessibility fundamentals." },
      { step: 2, name: "Figma", description: "Master the industry-standard design tool for wireframing, prototyping, and handoff." },
      { step: 3, name: "User Research", description: "Conduct interviews, surveys, and usability testing to understand real user needs." },
      { step: 4, name: "Wireframing & Prototyping", description: "Sketch low-fidelity wireframes, build clickable prototypes, and iterate quickly." },
      { step: 5, name: "Interaction Design", description: "Design micro-interactions, transitions, and animations that improve the user experience." },
      { step: 6, name: "Design Systems", description: "Build and maintain reusable component libraries and style guides for consistent products." },
      { step: 7, name: "Portfolio & Case Studies", description: "Document 3–4 end-to-end projects with problem statements, process, and outcomes." },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    duration: "6–10 Months",
    description: "Follow this learning path to build the skills required for a career in DevOps Engineering.",
    color: "indigo",
    steps: [
      { step: 1, name: "Linux & Shell Scripting", description: "Master the command line, bash scripting, file system, and process management." },
      { step: 2, name: "Networking Basics", description: "Understand TCP/IP, DNS, HTTP, load balancers, and firewall concepts." },
      { step: 3, name: "Git & Version Control", description: "Learn Git workflows, branching strategies, and collaborative development practices." },
      { step: 4, name: "Docker", description: "Containerize applications for consistent, portable, and reproducible deployments." },
      { step: 5, name: "CI/CD Pipelines", description: "Build automated test and deployment pipelines using GitHub Actions, Jenkins, or GitLab CI." },
      { step: 6, name: "Kubernetes", description: "Orchestrate containers at scale — deployments, services, scaling, and monitoring." },
      { step: 7, name: "Cloud Platforms", description: "Deploy and manage infrastructure on AWS, Azure, or GCP using cloud-native services." },
      { step: 8, name: "Monitoring & Observability", description: "Set up logging, metrics, and alerting using Prometheus, Grafana, and ELK Stack." },
    ],
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    duration: "3–6 Months",
    description: "Follow this learning path to build the skills required for a career in Digital Marketing.",
    color: "amber",
    steps: [
      { step: 1, name: "Marketing Fundamentals", description: "Learn the 4Ps, target audience, buyer personas, and the digital marketing funnel." },
      { step: 2, name: "SEO", description: "Master on-page and off-page SEO, keyword research, and search engine ranking strategies." },
      { step: 3, name: "Google Ads", description: "Run paid search campaigns, understand bidding strategies, and optimise ad spend ROI." },
      { step: 4, name: "Social Media Marketing", description: "Build brand presence on Instagram, LinkedIn, and X with organic and paid strategies." },
      { step: 5, name: "Email Marketing", description: "Create nurture sequences, newsletters, and campaigns using Mailchimp or HubSpot." },
      { step: 6, name: "Content Marketing", description: "Develop blogs, videos, and lead magnets that attract and convert your target audience." },
      { step: 7, name: "Analytics & Reporting", description: "Measure performance using Google Analytics 4, Search Console, and Meta Ads Manager." },
    ],
  },
  {
    id: "healthit",
    label: "Health Informatics",
    duration: "6–12 Months",
    description: "Follow this learning path to build the skills required for a career in Health Informatics.",
    color: "rose",
    steps: [
      { step: 1, name: "Healthcare Fundamentals", description: "Understand clinical workflows, hospital systems, medical terminology, and patient data." },
      { step: 2, name: "Health Data Standards", description: "Learn HL7, FHIR, ICD-10, and SNOMED CT — the standards that govern health data exchange." },
      { step: 3, name: "EHR Systems", description: "Get hands-on with Electronic Health Record platforms like Epic, Cerner, or OpenMRS." },
      { step: 4, name: "SQL & Python", description: "Query health databases and analyse patient data with Python (Pandas) and SQL." },
      { step: 5, name: "Health Data Privacy", description: "Study HIPAA, India's Digital Health Mission, and data security in clinical environments." },
      { step: 6, name: "Clinical Decision Support", description: "Understand how AI and data pipelines assist clinicians in diagnosis and treatment planning." },
      { step: 7, name: "Certification & Projects", description: "Pursue CHDA or RHIA certification and build a portfolio with a real-world health dataset project." },
    ],
  },
  {
    id: "bioinformatics",
    label: "Bioinformatics",
    duration: "8–14 Months",
    description: "Follow this learning path to build the skills required for a career in Bioinformatics.",
    color: "green",
    steps: [
      { step: 1, name: "Biology Fundamentals", description: "Understand genetics, molecular biology, DNA/RNA structure, and protein function." },
      { step: 2, name: "Python & R", description: "Learn Python (BioPython) and R for biological data manipulation and statistical analysis." },
      { step: 3, name: "Bioinformatics Tools", description: "Work with BLAST, ClustalW, HMMER, and Galaxy for sequence alignment and analysis." },
      { step: 4, name: "Genomics & Sequence Analysis", description: "Analyse DNA sequencing data, variant calling, and genome assembly workflows." },
      { step: 5, name: "Structural Bioinformatics", description: "Predict and visualise protein structures using AlphaFold, PyMOL, and SWISS-MODEL." },
      { step: 6, name: "Machine Learning in Biology", description: "Apply ML models to drug discovery, disease prediction, and genomic classification tasks." },
      { step: 7, name: "Research & Publication", description: "Contribute to open datasets (NCBI, UniProt) and publish findings or academic projects." },
    ],
  },
  {
    id: "finance",
    label: "Financial Analyst",
    duration: "4–8 Months",
    description: "Follow this learning path to build the skills required for a career in Financial Analysis.",
    color: "emerald",
    steps: [
      { step: 1, name: "Accounting Basics", description: "Understand balance sheets, income statements, cash flow statements, and financial ratios." },
      { step: 2, name: "Excel & Financial Modelling", description: "Build DCF, LBO, and scenario models using Excel — the core skill for every analyst." },
      { step: 3, name: "SQL for Finance", description: "Query financial databases to extract, aggregate, and analyse large datasets efficiently." },
      { step: 4, name: "Valuation Methods", description: "Learn comparable company analysis, precedent transactions, and intrinsic valuation techniques." },
      { step: 5, name: "Python for Finance", description: "Use Pandas, NumPy, and yfinance for financial data analysis and portfolio modelling." },
      { step: 6, name: "Financial Reporting & BI", description: "Build dashboards in Power BI or Tableau to communicate financial insights to stakeholders." },
      { step: 7, name: "CFA Preparation", description: "Begin studying for CFA Level 1 — the globally recognised gold standard for finance professionals." },
    ],
  },
  {
    id: "quant",
    label: "Quant Analyst",
    duration: "10–18 Months",
    description: "Follow this learning path to build the skills required for a career as a Quantitative Analyst.",
    color: "lime",
    steps: [
      { step: 1, name: "Advanced Mathematics", description: "Master linear algebra, multivariable calculus, probability theory, and stochastic processes." },
      { step: 2, name: "Statistics & Econometrics", description: "Study regression, time series, hypothesis testing, and econometric modelling methods." },
      { step: 3, name: "Python & C++", description: "Build proficiency in Python for rapid prototyping and C++ for high-performance trading systems." },
      { step: 4, name: "Financial Theory", description: "Learn options pricing (Black-Scholes), fixed income, derivatives, and risk management." },
      { step: 5, name: "Algorithmic Trading", description: "Implement and backtest trading strategies using Zipline, Backtrader, or QuantConnect." },
      { step: 6, name: "Machine Learning in Finance", description: "Apply ML models for alpha generation, risk modelling, and anomaly detection in markets." },
      { step: 7, name: "Internship & Research", description: "Intern at a hedge fund, prop trading firm, or bank and publish quantitative research papers." },
    ],
  },
  {
    id: "legaltech",
    label: "Legal Tech",
    duration: "5–9 Months",
    description: "Follow this learning path to build the skills required for a career in Legal Technology.",
    color: "yellow",
    steps: [
      { step: 1, name: "Legal Fundamentals", description: "Understand contract law, intellectual property, data privacy regulations, and compliance basics." },
      { step: 2, name: "Data Privacy Law", description: "Study GDPR, India's DPDP Act, HIPAA, and how they apply to technology platforms." },
      { step: 3, name: "Legal Research Tools", description: "Get proficient with Westlaw, LexisNexis, SCC Online, and AI-powered legal research tools." },
      { step: 4, name: "AI in Law", description: "Explore contract analysis automation, e-discovery tools, and AI-driven legal assistants like Harvey AI." },
      { step: 5, name: "Contract Lifecycle Management", description: "Learn CLM platforms (Ironclad, DocuSign, Icertis) used to automate contract workflows." },
      { step: 6, name: "Python Basics for Legal Tech", description: "Write simple scripts to automate document processing, extraction, and classification tasks." },
      { step: 7, name: "LegalTech Projects", description: "Build a portfolio by automating a legal workflow or creating a privacy compliance checklist tool." },
    ],
  },
  {
    id: "content",
    label: "Content Creator",
    duration: "3–6 Months",
    description: "Follow this learning path to build the skills required for a professional career as a Content Creator.",
    color: "fuchsia",
    steps: [
      { step: 1, name: "Niche & Audience Research", description: "Identify your target niche, research competitors, and define your unique content angle." },
      { step: 2, name: "Content Strategy", description: "Plan content calendars, pillar topics, and a publishing cadence for consistent output." },
      { step: 3, name: "Video Production Basics", description: "Learn camera, lighting, microphone setup, and basic video shooting techniques." },
      { step: 4, name: "Video Editing", description: "Edit engaging videos using DaVinci Resolve (free) or Adobe Premiere Pro for professional output." },
      { step: 5, name: "SEO & YouTube Algorithm", description: "Optimise titles, thumbnails, tags, and descriptions to rank and get discovered organically." },
      { step: 6, name: "Monetisation", description: "Explore YouTube Partner Program, brand sponsorships, affiliate marketing, and course sales." },
      { step: 7, name: "Analytics & Growth", description: "Track watch time, CTR, and subscriber metrics to identify what's working and scale it." },
    ],
  },
  {
    id: "videoediting",
    label: "Video Editing",
    duration: "3–5 Months",
    description: "Follow this learning path to build the skills required for a career in Video Editing and Motion Design.",
    color: "red",
    steps: [
      { step: 1, name: "Video Editing Basics", description: "Learn cuts, transitions, pacing, storytelling principles, and timeline workflow fundamentals." },
      { step: 2, name: "DaVinci Resolve", description: "Master this professional, free editing tool for colour grading, audio mixing, and Fusion effects." },
      { step: 3, name: "Adobe Premiere Pro", description: "Learn industry-standard editing for YouTube, films, ads, and social media content." },
      { step: 4, name: "Adobe After Effects", description: "Create motion graphics, visual effects, title animations, and compositing for video." },
      { step: 5, name: "Colour Grading", description: "Apply professional colour correction and cinematic LUTs to elevate production quality." },
      { step: 6, name: "Motion Design", description: "Build animated logos, lower thirds, explainer animations, and kinetic typography." },
      { step: 7, name: "Portfolio & Freelancing", description: "Upload your best work to Behance, Vimeo, and start freelancing on Fiverr or Upwork." },
    ],
  },
  {
    id: "hr",
    label: "HR Analytics",
    duration: "4–7 Months",
    description: "Follow this learning path to build the skills required for a career in HR and People Analytics.",
    color: "slate",
    steps: [
      { step: 1, name: "HR Fundamentals", description: "Understand recruitment, onboarding, performance management, L&D, and employee relations." },
      { step: 2, name: "Excel for HR", description: "Build HR dashboards, track attrition rates, and calculate HR metrics using Excel." },
      { step: 3, name: "SQL & Data Analysis", description: "Query HRIS data to find patterns in turnover, engagement scores, and workforce planning." },
      { step: 4, name: "HRIS Platforms", description: "Get familiar with SAP SuccessFactors, Workday, Darwinbox, or BambooHR used by employers." },
      { step: 5, name: "Power BI for HR", description: "Create interactive people analytics dashboards tracking DEI, engagement, and attrition." },
      { step: 6, name: "Talent Acquisition & Employer Branding", description: "Learn sourcing strategies, ATS tools, and how to build an employer brand that attracts talent." },
      { step: 7, name: "HR Certification", description: "Pursue SHRM-CP, HRCI PHR, or an MBA in HR to validate expertise and accelerate career growth." },
    ],
  },
  {
    id: "edtech",
    label: "EdTech",
    duration: "4–8 Months",
    description: "Follow this learning path to build the skills required for a career in Educational Technology.",
    color: "purple",
    steps: [
      { step: 1, name: "Learning Design Principles", description: "Study instructional design models (ADDIE, SAM), adult learning theory, and cognitive load." },
      { step: 2, name: "Curriculum Development", description: "Design learning objectives, assessments, and structured course content for digital delivery." },
      { step: 3, name: "Authoring Tools", description: "Build interactive eLearning modules using Articulate Storyline, Rise 360, or Adobe Captivate." },
      { step: 4, name: "LMS Platforms", description: "Work with Moodle, Canvas, TalentLMS, or LearnDash to host, manage, and track learners." },
      { step: 5, name: "Video & Multimedia Production", description: "Record explainer videos, screencasts, and create engaging multimedia assets for learners." },
      { step: 6, name: "Data & Learning Analytics", description: "Use xAPI and LRS tools to track learner behaviour and improve course effectiveness with data." },
      { step: 7, name: "EdTech Product Thinking", description: "Build or contribute to an EdTech product — understand user journeys, retention, and engagement loops." },
    ],
  },
  {
    id: "embedded",
    label: "Embedded Systems",
    duration: "7–12 Months",
    description: "Follow this learning path to build the skills required for a career in Embedded Systems Engineering.",
    color: "stone",
    steps: [
      { step: 1, name: "Electronics Fundamentals", description: "Understand circuits, resistors, capacitors, transistors, sensors, and basic electronics principles." },
      { step: 2, name: "C Programming", description: "Master C — the primary language for embedded systems — including pointers and memory management." },
      { step: 3, name: "Microcontrollers", description: "Program Arduino and ESP32 boards to control hardware, LEDs, motors, and sensors." },
      { step: 4, name: "RTOS (Real-Time OS)", description: "Understand real-time operating systems like FreeRTOS for time-critical embedded applications." },
      { step: 5, name: "Communication Protocols", description: "Implement I2C, SPI, UART, CAN, and MQTT protocols for device-to-device communication." },
      { step: 6, name: "STM32 & ARM Cortex", description: "Work with professional-grade STM32 microcontrollers used in automotive and industrial systems." },
      { step: 7, name: "IoT & Edge Computing", description: "Connect devices to the cloud using MQTT, AWS IoT, and edge ML using TensorFlow Lite." },
      { step: 8, name: "Projects & Portfolio", description: "Build real projects — smart home systems, robotics, or wearables — and document them on GitHub." },
    ],
  },
  {
    id: "sustainability",
    label: "Sustainability",
    duration: "4–7 Months",
    description: "Follow this learning path to build the skills required for a career in Sustainability and ESG Analysis.",
    color: "teal",
    steps: [
      { step: 1, name: "Sustainability Fundamentals", description: "Understand climate science, carbon footprints, circular economy, and the UN SDGs framework." },
      { step: 2, name: "ESG Frameworks", description: "Study GRI, SASB, TCFD, and CDP — the reporting standards used by corporations globally." },
      { step: 3, name: "Carbon Accounting", description: "Learn Scope 1, 2, and 3 emissions, carbon credits, and life cycle assessment (LCA) methods." },
      { step: 4, name: "Data & Reporting Tools", description: "Use Excel and Power BI to build ESG dashboards and generate sustainability performance reports." },
      { step: 5, name: "Environmental Regulations", description: "Understand India's Environment Protection Act, SEBI BRSR reporting, and global green regulations." },
      { step: 6, name: "Sustainable Finance", description: "Explore green bonds, ESG investing criteria, and how financial institutions integrate sustainability risk." },
      { step: 7, name: "Certification & Projects", description: "Pursue ISSP-SA or GRI certification and build an ESG audit or carbon reduction project for your portfolio." },
    ],
  },
];

const colorMap: Record<string, { accent: string; stepBg: string; stepBorder: string; number: string; line: string }> = {
  blue:     { accent: "text-blue-600 dark:text-blue-400",     stepBg: "bg-blue-50 dark:bg-blue-900/10",     stepBorder: "border-blue-200 dark:border-blue-800",     number: "bg-blue-600 dark:bg-blue-500",     line: "bg-blue-200 dark:bg-blue-800" },
  teal:     { accent: "text-teal-600 dark:text-teal-400",     stepBg: "bg-teal-50 dark:bg-teal-900/10",     stepBorder: "border-teal-200 dark:border-teal-800",     number: "bg-teal-600 dark:bg-teal-500",     line: "bg-teal-200 dark:bg-teal-800" },
  purple:   { accent: "text-purple-600 dark:text-purple-400", stepBg: "bg-purple-50 dark:bg-purple-900/10", stepBorder: "border-purple-200 dark:border-purple-800", number: "bg-purple-600 dark:bg-purple-500", line: "bg-purple-200 dark:bg-purple-800" },
  red:      { accent: "text-red-600 dark:text-red-400",       stepBg: "bg-red-50 dark:bg-red-900/10",       stepBorder: "border-red-200 dark:border-red-800",       number: "bg-red-600 dark:bg-red-500",       line: "bg-red-200 dark:bg-red-800" },
  sky:      { accent: "text-sky-600 dark:text-sky-400",       stepBg: "bg-sky-50 dark:bg-sky-900/10",       stepBorder: "border-sky-200 dark:border-sky-800",       number: "bg-sky-600 dark:bg-sky-500",       line: "bg-sky-200 dark:bg-sky-800" },
  orange:   { accent: "text-orange-600 dark:text-orange-400", stepBg: "bg-orange-50 dark:bg-orange-900/10", stepBorder: "border-orange-200 dark:border-orange-800", number: "bg-orange-600 dark:bg-orange-500", line: "bg-orange-200 dark:bg-orange-800" },
  cyan:     { accent: "text-cyan-600 dark:text-cyan-400",     stepBg: "bg-cyan-50 dark:bg-cyan-900/10",     stepBorder: "border-cyan-200 dark:border-cyan-800",     number: "bg-cyan-600 dark:bg-cyan-500",     line: "bg-cyan-200 dark:bg-cyan-800" },
  violet:   { accent: "text-violet-600 dark:text-violet-400", stepBg: "bg-violet-50 dark:bg-violet-900/10", stepBorder: "border-violet-200 dark:border-violet-800", number: "bg-violet-600 dark:bg-violet-500", line: "bg-violet-200 dark:bg-violet-800" },
  pink:     { accent: "text-pink-600 dark:text-pink-400",     stepBg: "bg-pink-50 dark:bg-pink-900/10",     stepBorder: "border-pink-200 dark:border-pink-800",     number: "bg-pink-600 dark:bg-pink-500",     line: "bg-pink-200 dark:bg-pink-800" },
  indigo:   { accent: "text-indigo-600 dark:text-indigo-400", stepBg: "bg-indigo-50 dark:bg-indigo-900/10", stepBorder: "border-indigo-200 dark:border-indigo-800", number: "bg-indigo-600 dark:bg-indigo-500", line: "bg-indigo-200 dark:bg-indigo-800" },
  amber:    { accent: "text-amber-600 dark:text-amber-400",   stepBg: "bg-amber-50 dark:bg-amber-900/10",   stepBorder: "border-amber-200 dark:border-amber-800",   number: "bg-amber-600 dark:bg-amber-500",   line: "bg-amber-200 dark:bg-amber-800" },
  rose:     { accent: "text-rose-600 dark:text-rose-400",     stepBg: "bg-rose-50 dark:bg-rose-900/10",     stepBorder: "border-rose-200 dark:border-rose-800",     number: "bg-rose-600 dark:bg-rose-500",     line: "bg-rose-200 dark:bg-rose-800" },
  green:    { accent: "text-green-600 dark:text-green-400",   stepBg: "bg-green-50 dark:bg-green-900/10",   stepBorder: "border-green-200 dark:border-green-800",   number: "bg-green-600 dark:bg-green-500",   line: "bg-green-200 dark:bg-green-800" },
  emerald:  { accent: "text-emerald-600 dark:text-emerald-400", stepBg: "bg-emerald-50 dark:bg-emerald-900/10", stepBorder: "border-emerald-200 dark:border-emerald-800", number: "bg-emerald-600 dark:bg-emerald-500", line: "bg-emerald-200 dark:bg-emerald-800" },
  lime:     { accent: "text-lime-600 dark:text-lime-400",     stepBg: "bg-lime-50 dark:bg-lime-900/10",     stepBorder: "border-lime-200 dark:border-lime-800",     number: "bg-lime-600 dark:bg-lime-500",     line: "bg-lime-200 dark:bg-lime-800" },
  yellow:   { accent: "text-yellow-600 dark:text-yellow-400", stepBg: "bg-yellow-50 dark:bg-yellow-900/10", stepBorder: "border-yellow-200 dark:border-yellow-800", number: "bg-yellow-600 dark:bg-yellow-500", line: "bg-yellow-200 dark:bg-yellow-800" },
  fuchsia:  { accent: "text-fuchsia-600 dark:text-fuchsia-400", stepBg: "bg-fuchsia-50 dark:bg-fuchsia-900/10", stepBorder: "border-fuchsia-200 dark:border-fuchsia-800", number: "bg-fuchsia-600 dark:bg-fuchsia-500", line: "bg-fuchsia-200 dark:bg-fuchsia-800" },
  slate:    { accent: "text-slate-600 dark:text-slate-400",   stepBg: "bg-slate-50 dark:bg-slate-900/10",   stepBorder: "border-slate-200 dark:border-slate-800",   number: "bg-slate-600 dark:bg-slate-500",   line: "bg-slate-200 dark:bg-slate-800" },
  stone:    { accent: "text-stone-600 dark:text-stone-400",   stepBg: "bg-stone-50 dark:bg-stone-900/10",   stepBorder: "border-stone-200 dark:border-stone-800",   number: "bg-stone-600 dark:bg-stone-500",   line: "bg-stone-200 dark:bg-stone-800" },
};

export default function SkillsRoadmap() {
  return (
    <section id="roadmaps" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge className="mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary border-0 text-sm font-medium">
            Learning Roadmaps
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning Roadmap</h2>
          <p className="text-lg text-muted-foreground">
            Step-by-step learning paths curated by industry experts. Pick your career, follow the path, land the job.
          </p>
        </motion.div>

        <Tabs defaultValue="software" className="w-full">
          <TabsList className="flex flex-wrap gap-2 h-auto bg-transparent justify-center mb-10">
            {roadmaps.map((rm) => (
              <TabsTrigger
                key={rm.id}
                value={rm.id}
                className="rounded-full px-5 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border border-border data-[state=active]:border-primary text-sm font-medium"
              >
                {rm.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {roadmaps.map((rm) => {
            const c = colorMap[rm.color];
            return (
              <TabsContent key={rm.id} value={rm.id}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8 p-5 rounded-2xl bg-card border border-border/50">
                    <p className={`text-sm font-medium ${c.accent}`}>{rm.description}</p>
                    <div className={`flex items-center gap-2 whitespace-nowrap text-sm font-semibold ${c.accent} bg-card border ${c.stepBorder} px-4 py-2 rounded-full`}>
                      <Clock className="w-4 h-4" />
                      Estimated: {rm.duration}
                    </div>
                  </div>

                  <div className="relative">
                    <div className={`absolute left-[22px] top-8 bottom-8 w-0.5 ${c.line} hidden sm:block`} />

                    <div className="space-y-4">
                      {rm.steps.map((step, i) => (
                        <motion.div
                          key={step.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className={`flex gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl border ${c.stepBorder} ${c.stepBg} bg-card hover:shadow-md transition-all duration-200`}
                          data-testid={`roadmap-step-${i}`}
                        >
                          <div className={`flex-shrink-0 w-11 h-11 rounded-full ${c.number} text-white flex items-center justify-center font-bold text-sm z-10`}>
                            {step.step}
                          </div>
                          <div className="flex-1 min-w-0 pt-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-bold text-foreground">{step.name}</h4>
                              {i < rm.steps.length - 1 && (
                                <ArrowRight className={`w-4 h-4 ${c.accent} opacity-40 hidden sm:block`} />
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
