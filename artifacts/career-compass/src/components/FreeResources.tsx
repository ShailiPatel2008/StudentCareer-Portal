import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Youtube, FileText, Code, BarChart2, Brain, Shield, Cloud } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "programming",
    label: "Programming",
    icon: <Code className="w-5 h-5" />,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    resources: [
      { name: "Python for Beginners", type: "Course", platform: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
      { name: "JavaScript Full Course", type: "YouTube", platform: "Traversy Media", url: "https://www.youtube.com/c/TraversyMedia" },
      { name: "Java Programming", type: "Tutorial", platform: "W3Schools", url: "https://www.w3schools.com/java/" },
      { name: "CS50: Intro to CS", type: "Course", platform: "Harvard / edX", url: "https://cs50.harvard.edu/" },
      { name: "Python Docs", type: "Docs", platform: "python.org", url: "https://docs.python.org/3/" },
    ],
  },
  {
    id: "data",
    label: "Data Analytics",
    icon: <BarChart2 className="w-5 h-5" />,
    color: "text-teal-500",
    bg: "bg-teal-100 dark:bg-teal-900/30",
    resources: [
      { name: "SQL Tutorial", type: "Tutorial", platform: "SQLZoo", url: "https://sqlzoo.net/" },
      { name: "Excel Fundamentals", type: "Course", platform: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/training/paths/excel-fundamentals/" },
      { name: "Power BI Learning", type: "Course", platform: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi" },
      { name: "Google Data Analytics", type: "Course", platform: "Coursera (Free Audit)", url: "https://www.coursera.org/professional-certificates/google-data-analytics" },
      { name: "Kaggle Learn", type: "Tutorial", platform: "Kaggle", url: "https://www.kaggle.com/learn" },
    ],
  },
  {
    id: "ai",
    label: "AI & ML",
    icon: <Brain className="w-5 h-5" />,
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    resources: [
      { name: "Machine Learning Course", type: "Course", platform: "Andrew Ng / Coursera", url: "https://www.coursera.org/learn/machine-learning" },
      { name: "Fast.ai Practical ML", type: "Course", platform: "fast.ai", url: "https://course.fast.ai/" },
      { name: "Hugging Face NLP", type: "Docs", platform: "Hugging Face", url: "https://huggingface.co/learn" },
      { name: "Generative AI for Everyone", type: "Course", platform: "DeepLearning.AI", url: "https://www.deeplearning.ai/" },
      { name: "TensorFlow Tutorials", type: "Docs", platform: "TensorFlow", url: "https://www.tensorflow.org/tutorials" },
    ],
  },
  {
    id: "security",
    label: "Cybersecurity",
    icon: <Shield className="w-5 h-5" />,
    color: "text-red-500",
    bg: "bg-red-100 dark:bg-red-900/30",
    resources: [
      { name: "TryHackMe", type: "Course", platform: "TryHackMe", url: "https://tryhackme.com/" },
      { name: "Ethical Hacking Course", type: "YouTube", platform: "freeCodeCamp", url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE" },
      { name: "Networking Fundamentals", type: "Course", platform: "Cisco NetAcad", url: "https://skillsforall.com/" },
      { name: "Cybersecurity Roadmap", type: "Docs", platform: "roadmap.sh", url: "https://roadmap.sh/cyber-security" },
      { name: "Hack The Box Academy", type: "Course", platform: "HTB Academy", url: "https://academy.hackthebox.com/" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    icon: <Cloud className="w-5 h-5" />,
    color: "text-sky-500",
    bg: "bg-sky-100 dark:bg-sky-900/30",
    resources: [
      { name: "AWS Free Tier Training", type: "Course", platform: "AWS Skill Builder", url: "https://skillbuilder.aws/" },
      { name: "Azure Fundamentals", type: "Course", platform: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/" },
      { name: "Docker for Beginners", type: "Tutorial", platform: "Play with Docker", url: "https://training.play-with-docker.com/" },
      { name: "Kubernetes Basics", type: "Docs", platform: "kubernetes.io", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
      { name: "Google Cloud Skills Boost", type: "Course", platform: "Google", url: "https://cloudskillsboost.google/" },
    ],
  },
];

const typeIcon: Record<string, React.ReactNode> = {
  "Course": <BookOpen className="w-3.5 h-3.5" />,
  "YouTube": <Youtube className="w-3.5 h-3.5 text-red-500" />,
  "Tutorial": <FileText className="w-3.5 h-3.5" />,
  "Docs": <FileText className="w-3.5 h-3.5" />,
};

const typeBadge: Record<string, string> = {
  "Course": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "YouTube": "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "Tutorial": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "Docs": "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400",
};

export default function FreeResources() {
  const [active, setActive] = useState("programming");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section id="resources" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge className="mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary border-0 text-sm font-medium">
            Free Learning
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Learning Resources</h2>
          <p className="text-lg text-muted-foreground">
            Handpicked free courses, tutorials, and documentation to supercharge your learning — no cost, no excuses.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              data-testid={`resource-tab-${cat.id}`}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border-2 ${
                active === cat.id
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              <span className={active === cat.id ? "text-primary-foreground" : cat.color}>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {current.resources.map((res, i) => (
            <motion.div
              key={res.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              data-testid={`card-resource-${i}`}
            >
              <Card className="h-full border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group">
                <CardContent className="p-5 flex flex-col gap-3 h-full">
                  <div className="flex items-start justify-between gap-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${typeBadge[res.type]}`}>
                      {typeIcon[res.type]}
                      {res.type}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                  </div>
                  <h4 className="font-bold">{res.name}</h4>
                  <p className="text-sm text-muted-foreground flex-1">{res.platform}</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => window.open(res.url, "_blank", "noopener")}
                  >
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
