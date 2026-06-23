import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const roadmaps = [
  {
    id: "software",
    label: "Software Dev",
    color: "blue",
    steps: [
      { name: "HTML", description: "Structure web pages with semantic markup", done: true },
      { name: "CSS", description: "Style and layout with modern CSS", done: true },
      { name: "JavaScript", description: "Add interactivity and dynamic behavior", done: true },
      { name: "Git & GitHub", description: "Version control and collaboration", done: true },
      { name: "React", description: "Build component-based UIs", done: false },
      { name: "Node.js", description: "Server-side JavaScript runtime", done: false },
      { name: "Databases", description: "SQL, NoSQL data storage & retrieval", done: false },
      { name: "Projects", description: "Build and deploy real-world projects", done: false },
    ],
  },
  {
    id: "data",
    label: "Data Analytics",
    color: "teal",
    steps: [
      { name: "Excel", description: "Spreadsheets, formulas, and pivot tables", done: true },
      { name: "SQL", description: "Query and manipulate relational databases", done: true },
      { name: "Python", description: "Pandas, NumPy for data manipulation", done: false },
      { name: "Power BI", description: "Interactive dashboards and reports", done: false },
      { name: "Data Visualization", description: "Charts, graphs, and storytelling with data", done: false },
      { name: "Projects", description: "End-to-end data analysis projects", done: false },
    ],
  },
  {
    id: "ai",
    label: "Artificial Intelligence",
    color: "purple",
    steps: [
      { name: "Python", description: "Core language for AI and ML development", done: true },
      { name: "Mathematics Basics", description: "Linear algebra, calculus, statistics", done: true },
      { name: "Machine Learning", description: "Scikit-learn, supervised & unsupervised learning", done: false },
      { name: "Deep Learning", description: "Neural networks with TensorFlow / PyTorch", done: false },
      { name: "Generative AI", description: "LLMs, prompt engineering, GenAI tools", done: false },
      { name: "AI Projects", description: "Build and deploy AI-powered applications", done: false },
    ],
  },
  {
    id: "security",
    label: "Cybersecurity",
    color: "red",
    steps: [
      { name: "Networking", description: "TCP/IP, DNS, HTTP, firewalls, protocols", done: true },
      { name: "Linux", description: "Command line, scripting, system administration", done: true },
      { name: "Security Fundamentals", description: "CIA triad, cryptography, risk management", done: false },
      { name: "Ethical Hacking", description: "Penetration testing methodologies and tools", done: false },
      { name: "Security Tools", description: "Wireshark, Metasploit, Burp Suite, SIEM", done: false },
    ],
  },
  {
    id: "cloud",
    label: "Cloud Computing",
    color: "sky",
    steps: [
      { name: "Linux", description: "Operating system fundamentals and CLI", done: true },
      { name: "Networking", description: "VPCs, subnets, load balancers, DNS", done: true },
      { name: "AWS", description: "EC2, S3, Lambda, RDS — core cloud services", done: false },
      { name: "Azure", description: "Microsoft Azure services and deployments", done: false },
      { name: "Docker", description: "Containerize applications with Docker", done: false },
      { name: "Kubernetes", description: "Orchestrate containers at scale with K8s", done: false },
    ],
  },
];

const colorMap: Record<string, { dot: string; line: string; badge: string; active: string }> = {
  blue:   { dot: "bg-blue-500",   line: "bg-blue-200 dark:bg-blue-800",   badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",   active: "border-blue-500 bg-blue-50 dark:bg-blue-900/20" },
  teal:   { dot: "bg-teal-500",   line: "bg-teal-200 dark:bg-teal-800",   badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",   active: "border-teal-500 bg-teal-50 dark:bg-teal-900/20" },
  purple: { dot: "bg-purple-500", line: "bg-purple-200 dark:bg-purple-800", badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400", active: "border-purple-500 bg-purple-50 dark:bg-purple-900/20" },
  red:    { dot: "bg-red-500",    line: "bg-red-200 dark:bg-red-800",     badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",     active: "border-red-500 bg-red-50 dark:bg-red-900/20" },
  sky:    { dot: "bg-sky-500",    line: "bg-sky-200 dark:bg-sky-800",     badge: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",     active: "border-sky-500 bg-sky-50 dark:bg-sky-900/20" },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills Roadmap</h2>
          <p className="text-lg text-muted-foreground">
            Step-by-step learning paths curated by industry experts. Follow the roadmap and land your dream job.
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
            const colors = colorMap[rm.color];
            const completed = rm.steps.filter((s) => s.done).length;
            const pct = Math.round((completed / rm.steps.length) * 100);

            return (
              <TabsContent key={rm.id} value={rm.id}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${colors.dot} rounded-full transition-all duration-500`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">{completed}/{rm.steps.length} completed</span>
                  </div>

                  <div className="relative">
                    <div className={`absolute left-6 top-6 bottom-6 w-0.5 ${colors.line}`} />
                    <div className="space-y-4">
                      {rm.steps.map((step, i) => (
                        <motion.div
                          key={step.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className={`relative flex gap-5 p-5 rounded-2xl border-2 bg-card transition-all duration-200 ${
                            step.done ? colors.active : "border-border"
                          }`}
                          data-testid={`roadmap-step-${i}`}
                        >
                          <div className="flex-shrink-0 z-10">
                            {step.done ? (
                              <CheckCircle2 className={`w-6 h-6 ${colors.dot.replace("bg-", "text-")}`} />
                            ) : (
                              <Circle className="w-6 h-6 text-muted-foreground/40" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h4 className="font-semibold">{step.name}</h4>
                              {step.done && (
                                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}>
                                  Completed
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                          </div>
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                            {i + 1}
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
