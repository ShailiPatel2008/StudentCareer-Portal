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
];

const colorMap: Record<string, { accent: string; stepBg: string; stepBorder: string; number: string; line: string }> = {
  blue:   { accent: "text-blue-600 dark:text-blue-400",   stepBg: "bg-blue-50 dark:bg-blue-900/10",   stepBorder: "border-blue-200 dark:border-blue-800",   number: "bg-blue-600 dark:bg-blue-500",   line: "bg-blue-200 dark:bg-blue-800" },
  teal:   { accent: "text-teal-600 dark:text-teal-400",   stepBg: "bg-teal-50 dark:bg-teal-900/10",   stepBorder: "border-teal-200 dark:border-teal-800",   number: "bg-teal-600 dark:bg-teal-500",   line: "bg-teal-200 dark:bg-teal-800" },
  purple: { accent: "text-purple-600 dark:text-purple-400", stepBg: "bg-purple-50 dark:bg-purple-900/10", stepBorder: "border-purple-200 dark:border-purple-800", number: "bg-purple-600 dark:bg-purple-500", line: "bg-purple-200 dark:bg-purple-800" },
  red:    { accent: "text-red-600 dark:text-red-400",     stepBg: "bg-red-50 dark:bg-red-900/10",     stepBorder: "border-red-200 dark:border-red-800",     number: "bg-red-600 dark:bg-red-500",     line: "bg-red-200 dark:bg-red-800" },
  sky:    { accent: "text-sky-600 dark:text-sky-400",     stepBg: "bg-sky-50 dark:bg-sky-900/10",     stepBorder: "border-sky-200 dark:border-sky-800",     number: "bg-sky-600 dark:bg-sky-500",     line: "bg-sky-200 dark:bg-sky-800" },
  orange: { accent: "text-orange-600 dark:text-orange-400", stepBg: "bg-orange-50 dark:bg-orange-900/10", stepBorder: "border-orange-200 dark:border-orange-800", number: "bg-orange-600 dark:bg-orange-500", line: "bg-orange-200 dark:bg-orange-800" },
  cyan:   { accent: "text-cyan-600 dark:text-cyan-400",   stepBg: "bg-cyan-50 dark:bg-cyan-900/10",   stepBorder: "border-cyan-200 dark:border-cyan-800",   number: "bg-cyan-600 dark:bg-cyan-500",   line: "bg-cyan-200 dark:bg-cyan-800" },
  violet: { accent: "text-violet-600 dark:text-violet-400", stepBg: "bg-violet-50 dark:bg-violet-900/10", stepBorder: "border-violet-200 dark:border-violet-800", number: "bg-violet-600 dark:bg-violet-500", line: "bg-violet-200 dark:bg-violet-800" },
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
