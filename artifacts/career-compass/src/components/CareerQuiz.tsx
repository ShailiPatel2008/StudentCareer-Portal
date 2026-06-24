import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type CareerKey =
  | "Software Developer" | "Data Analyst" | "AI Engineer" | "DevOps Engineer"
  | "Cybersecurity Specialist" | "Cloud Engineer" | "Blockchain Developer"
  | "Embedded Systems Engineer" | "Game Developer" | "UI/UX Designer"
  | "Digital Marketing Specialist" | "Content Creator" | "Video Editor"
  | "Financial Analyst" | "Quantitative Analyst" | "Product Manager"
  | "Health Informatics Specialist" | "Bioinformatics Scientist"
  | "Legal Tech Consultant" | "HR & People Analytics"
  | "EdTech Specialist" | "Sustainability Analyst";

interface Question {
  id: number;
  text: string;
  options: { label: string; scores: Partial<Record<CareerKey, number>> }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "What kind of work energises you the most?",
    options: [
      {
        label: "Building software and solving coding problems",
        scores: { "Software Developer": 3, "DevOps Engineer": 2, "Blockchain Developer": 2, "AI Engineer": 1, "Embedded Systems Engineer": 1, "Game Developer": 2 },
      },
      {
        label: "Analysing numbers and finding patterns in data",
        scores: { "Data Analyst": 3, "Quantitative Analyst": 3, "Financial Analyst": 2, "AI Engineer": 2, "Bioinformatics Scientist": 2 },
      },
      {
        label: "Designing visuals, experiences, and creative content",
        scores: { "UI/UX Designer": 3, "Video Editor": 3, "Content Creator": 2, "Digital Marketing Specialist": 1, "Game Developer": 1 },
      },
      {
        label: "Managing people, strategies, and business outcomes",
        scores: { "Product Manager": 3, "HR & People Analytics": 3, "Digital Marketing Specialist": 2, "EdTech Specialist": 2, "Legal Tech Consultant": 1 },
      },
    ],
  },
  {
    id: 2,
    text: "Which subject did you enjoy most in school or college?",
    options: [
      {
        label: "Mathematics, Statistics, or Physics",
        scores: { "Quantitative Analyst": 3, "Data Analyst": 2, "AI Engineer": 2, "Financial Analyst": 2, "Bioinformatics Scientist": 1, "Embedded Systems Engineer": 1 },
      },
      {
        label: "Computer Science or Programming",
        scores: { "Software Developer": 3, "AI Engineer": 2, "Cybersecurity Specialist": 2, "Cloud Engineer": 2, "Blockchain Developer": 2, "DevOps Engineer": 2, "Game Developer": 2 },
      },
      {
        label: "Biology, Chemistry, or Healthcare",
        scores: { "Bioinformatics Scientist": 3, "Health Informatics Specialist": 3, "Sustainability Analyst": 1 },
      },
      {
        label: "Arts, Media, Commerce, or Humanities",
        scores: { "Content Creator": 3, "UI/UX Designer": 2, "Digital Marketing Specialist": 3, "Video Editor": 2, "Legal Tech Consultant": 2, "HR & People Analytics": 2 },
      },
    ],
  },
  {
    id: 3,
    text: "How do you prefer to spend your free time?",
    options: [
      {
        label: "Coding personal projects or playing with new tech",
        scores: { "Software Developer": 3, "AI Engineer": 2, "Blockchain Developer": 2, "Game Developer": 2, "Embedded Systems Engineer": 2, "DevOps Engineer": 1 },
      },
      {
        label: "Creating content — videos, photos, writing, or design",
        scores: { "Content Creator": 3, "Video Editor": 3, "UI/UX Designer": 2, "Digital Marketing Specialist": 2 },
      },
      {
        label: "Reading about finance, markets, or business news",
        scores: { "Financial Analyst": 3, "Quantitative Analyst": 3, "Product Manager": 2, "Legal Tech Consultant": 2 },
      },
      {
        label: "Exploring nature, sustainability, or social causes",
        scores: { "Sustainability Analyst": 3, "HR & People Analytics": 2, "EdTech Specialist": 2, "Health Informatics Specialist": 1 },
      },
    ],
  },
  {
    id: 4,
    text: "Which of these problems excites you most to solve?",
    options: [
      {
        label: "Making systems faster, more secure, and more reliable",
        scores: { "Cybersecurity Specialist": 3, "DevOps Engineer": 3, "Cloud Engineer": 3, "Embedded Systems Engineer": 2, "Software Developer": 1 },
      },
      {
        label: "Using data and AI to make smarter decisions",
        scores: { "AI Engineer": 3, "Data Analyst": 3, "Quantitative Analyst": 2, "Bioinformatics Scientist": 2, "Health Informatics Specialist": 2 },
      },
      {
        label: "Helping people learn, grow, or feel better",
        scores: { "EdTech Specialist": 3, "HR & People Analytics": 3, "Health Informatics Specialist": 2, "Sustainability Analyst": 2, "Content Creator": 1 },
      },
      {
        label: "Building products that millions of people use",
        scores: { "Product Manager": 3, "Software Developer": 2, "UI/UX Designer": 2, "Digital Marketing Specialist": 2, "Game Developer": 2 },
      },
    ],
  },
  {
    id: 5,
    text: "What is your relationship with writing code?",
    options: [
      {
        label: "I love coding — it's my core strength",
        scores: { "Software Developer": 3, "AI Engineer": 3, "Blockchain Developer": 3, "Game Developer": 3, "Embedded Systems Engineer": 3, "DevOps Engineer": 2 },
      },
      {
        label: "I'm comfortable with code as a tool (SQL, Python basics)",
        scores: { "Data Analyst": 3, "Quantitative Analyst": 2, "Health Informatics Specialist": 2, "Bioinformatics Scientist": 2, "Digital Marketing Specialist": 1 },
      },
      {
        label: "I prefer low-code or no-code — design and strategy over development",
        scores: { "UI/UX Designer": 3, "Product Manager": 3, "HR & People Analytics": 2, "Content Creator": 2, "EdTech Specialist": 2 },
      },
      {
        label: "I prefer to avoid code entirely — business or creative focus",
        scores: { "Digital Marketing Specialist": 3, "Content Creator": 3, "Video Editor": 3, "Sustainability Analyst": 2, "Legal Tech Consultant": 2, "Financial Analyst": 2 },
      },
    ],
  },
  {
    id: 6,
    text: "Which career benefit matters most to you?",
    options: [
      {
        label: "Very high salary and fast growth (₹15+ LPA potential)",
        scores: { "AI Engineer": 3, "Quantitative Analyst": 3, "Blockchain Developer": 3, "Cybersecurity Specialist": 2, "Software Developer": 2, "Cloud Engineer": 2, "Product Manager": 2 },
      },
      {
        label: "Creative freedom and self-expression",
        scores: { "UI/UX Designer": 3, "Content Creator": 3, "Video Editor": 3, "Game Developer": 2, "Digital Marketing Specialist": 1 },
      },
      {
        label: "Making a positive social or environmental impact",
        scores: { "Sustainability Analyst": 3, "Health Informatics Specialist": 3, "EdTech Specialist": 3, "HR & People Analytics": 2, "Bioinformatics Scientist": 2 },
      },
      {
        label: "Job stability and consistent demand",
        scores: { "DevOps Engineer": 3, "Cloud Engineer": 3, "Data Analyst": 3, "Financial Analyst": 2, "Legal Tech Consultant": 2, "HR & People Analytics": 2 },
      },
    ],
  },
  {
    id: 7,
    text: "How do you prefer to work?",
    options: [
      {
        label: "Independently, deep-focused on complex technical problems",
        scores: { "AI Engineer": 3, "Quantitative Analyst": 3, "Cybersecurity Specialist": 2, "Embedded Systems Engineer": 3, "Bioinformatics Scientist": 3 },
      },
      {
        label: "Collaborating with cross-functional teams and stakeholders",
        scores: { "Product Manager": 3, "HR & People Analytics": 3, "EdTech Specialist": 2, "Digital Marketing Specialist": 2, "Legal Tech Consultant": 2 },
      },
      {
        label: "A mix of building, analysing, and iterating on products",
        scores: { "Software Developer": 3, "DevOps Engineer": 2, "Data Analyst": 2, "UI/UX Designer": 2, "Cloud Engineer": 2, "Game Developer": 2 },
      },
      {
        label: "Solo creative work — creating, filming, editing, designing",
        scores: { "Content Creator": 3, "Video Editor": 3, "UI/UX Designer": 2, "Digital Marketing Specialist": 2 },
      },
    ],
  },
  {
    id: 8,
    text: "Which industry excites you most?",
    options: [
      {
        label: "Technology, startups, and innovation",
        scores: { "Software Developer": 3, "AI Engineer": 3, "Blockchain Developer": 3, "Game Developer": 2, "Cloud Engineer": 2, "DevOps Engineer": 2, "Product Manager": 2 },
      },
      {
        label: "Finance, banking, and investment",
        scores: { "Financial Analyst": 3, "Quantitative Analyst": 3, "Blockchain Developer": 2, "Legal Tech Consultant": 2, "Data Analyst": 1 },
      },
      {
        label: "Healthcare, life sciences, and wellness",
        scores: { "Health Informatics Specialist": 3, "Bioinformatics Scientist": 3, "Sustainability Analyst": 2, "AI Engineer": 1 },
      },
      {
        label: "Media, entertainment, education, or social impact",
        scores: { "Content Creator": 3, "Video Editor": 3, "EdTech Specialist": 3, "UI/UX Designer": 2, "Digital Marketing Specialist": 2, "HR & People Analytics": 1 },
      },
    ],
  },
  {
    id: 9,
    text: "What does your ideal work output look like?",
    options: [
      {
        label: "A deployed app, system, or piece of working software",
        scores: { "Software Developer": 3, "Cloud Engineer": 3, "DevOps Engineer": 3, "Blockchain Developer": 2, "Embedded Systems Engineer": 2, "Game Developer": 3 },
      },
      {
        label: "Insights, dashboards, and data-driven reports",
        scores: { "Data Analyst": 3, "Financial Analyst": 3, "Quantitative Analyst": 2, "HR & People Analytics": 2, "Sustainability Analyst": 2, "Health Informatics Specialist": 2 },
      },
      {
        label: "A trained model, algorithm, or intelligent system",
        scores: { "AI Engineer": 3, "Bioinformatics Scientist": 2, "Quantitative Analyst": 2, "Cybersecurity Specialist": 1 },
      },
      {
        label: "A visual, video, campaign, or user-facing experience",
        scores: { "UI/UX Designer": 3, "Content Creator": 3, "Video Editor": 3, "Digital Marketing Specialist": 3, "Game Developer": 1, "EdTech Specialist": 2 },
      },
    ],
  },
  {
    id: 10,
    text: "What best describes your personality?",
    options: [
      {
        label: "Analytical and logical — I love systems, numbers, and precision",
        scores: { "AI Engineer": 2, "Quantitative Analyst": 3, "Data Analyst": 2, "Cybersecurity Specialist": 2, "Financial Analyst": 2, "Embedded Systems Engineer": 2, "Bioinformatics Scientist": 2 },
      },
      {
        label: "Creative and visual — I think in images, stories, and experiences",
        scores: { "UI/UX Designer": 3, "Video Editor": 3, "Content Creator": 3, "Game Developer": 2, "Digital Marketing Specialist": 2 },
      },
      {
        label: "Strategic and entrepreneurial — I see the big picture and lead",
        scores: { "Product Manager": 3, "Digital Marketing Specialist": 2, "Legal Tech Consultant": 2, "EdTech Specialist": 2, "HR & People Analytics": 2, "Sustainability Analyst": 2 },
      },
      {
        label: "Empathetic and collaborative — I care about people and teams",
        scores: { "HR & People Analytics": 3, "EdTech Specialist": 3, "Health Informatics Specialist": 2, "Sustainability Analyst": 2, "Product Manager": 2 },
      },
    ],
  },
];

const careerMeta: Record<CareerKey, {
  why: string;
  skills: string[];
  opportunities: string[];
  salary: string;
  color: string;
  gradient: string;
}> = {
  "Software Developer":          { why: "You love coding, building real products, and working across the technology stack.", skills: ["JavaScript", "React", "Node.js", "Git", "SQL"], opportunities: ["Frontend Dev", "Backend Dev", "Full Stack Dev"], salary: "₹4–20+ LPA", color: "text-blue-600", gradient: "from-blue-500 to-indigo-500" },
  "Data Analyst":                { why: "You combine analytical thinking with a love for extracting actionable insights from data.", skills: ["SQL", "Python", "Excel", "Power BI", "Statistics"], opportunities: ["Data Analyst", "BI Developer", "Business Analyst"], salary: "₹4–15+ LPA", color: "text-teal-600", gradient: "from-teal-500 to-cyan-500" },
  "AI Engineer":                 { why: "You enjoy the deep intersection of mathematics, programming, and cutting-edge AI research.", skills: ["Python", "TensorFlow", "PyTorch", "LLMs", "ML"], opportunities: ["ML Engineer", "AI Researcher", "Data Scientist"], salary: "₹6–30+ LPA", color: "text-purple-600", gradient: "from-purple-500 to-violet-500" },
  "DevOps Engineer":             { why: "You care about system reliability, automation, and bridging development with operations seamlessly.", skills: ["Docker", "Kubernetes", "CI/CD", "Linux", "AWS"], opportunities: ["DevOps Engineer", "SRE", "Platform Engineer"], salary: "₹6–25+ LPA", color: "text-indigo-600", gradient: "from-indigo-500 to-blue-500" },
  "Cybersecurity Specialist":    { why: "You have a systematic, security-minded personality and enjoy protecting systems from threats.", skills: ["Networking", "Linux", "Ethical Hacking", "SIEM", "Python"], opportunities: ["Security Analyst", "Pen Tester", "SOC Analyst"], salary: "₹5–25+ LPA", color: "text-red-600", gradient: "from-red-500 to-rose-500" },
  "Cloud Engineer":              { why: "You enjoy designing scalable infrastructure and working with cloud platforms at scale.", skills: ["AWS", "Azure", "Docker", "Terraform", "Linux"], opportunities: ["Cloud Architect", "Cloud Engineer", "SRE"], salary: "₹6–25+ LPA", color: "text-sky-600", gradient: "from-sky-500 to-cyan-500" },
  "Blockchain Developer":        { why: "You're excited about Web3, decentralisation, and building on cutting-edge blockchain technology.", skills: ["Solidity", "Ethers.js", "Hardhat", "Web3", "JavaScript"], opportunities: ["Smart Contract Dev", "Web3 Engineer", "DeFi Developer"], salary: "₹8–35+ LPA", color: "text-cyan-600", gradient: "from-cyan-500 to-teal-500" },
  "Embedded Systems Engineer":   { why: "You love working close to hardware, programming microcontrollers, and building IoT/robotics systems.", skills: ["C/C++", "Arduino", "RTOS", "STM32", "IoT Protocols"], opportunities: ["Embedded Engineer", "IoT Developer", "Firmware Engineer"], salary: "₹5–22+ LPA", color: "text-slate-600", gradient: "from-slate-500 to-gray-500" },
  "Game Developer":              { why: "You combine creativity with technical skill to build interactive entertainment experiences.", skills: ["C#", "Unity", "Game Design", "3D Modelling", "Physics"], opportunities: ["Game Developer", "Unity Dev", "Game Designer"], salary: "₹4–22+ LPA", color: "text-violet-600", gradient: "from-violet-500 to-purple-500" },
  "UI/UX Designer":              { why: "You have a creative eye, empathy for users, and love crafting beautiful, intuitive digital experiences.", skills: ["Figma", "User Research", "Prototyping", "Design Systems", "CSS"], opportunities: ["UI Designer", "UX Designer", "Product Designer"], salary: "₹4–18+ LPA", color: "text-pink-600", gradient: "from-pink-500 to-rose-500" },
  "Digital Marketing Specialist":{ why: "You're strategic, data-aware, and love growing brands through digital channels.", skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Email Marketing"], opportunities: ["Marketing Manager", "Growth Hacker", "SEO Specialist"], salary: "₹3–15+ LPA", color: "text-orange-600", gradient: "from-orange-500 to-amber-500" },
  "Content Creator":             { why: "You're naturally expressive, enjoy storytelling, and want to build an audience in a specific niche.", skills: ["Video Editing", "Scripting", "SEO", "Thumbnail Design", "Analytics"], opportunities: ["YouTube Creator", "Blogger", "Podcaster"], salary: "₹3–20+ LPA", color: "text-fuchsia-600", gradient: "from-fuchsia-500 to-pink-500" },
  "Video Editor":                { why: "You have a visual storytelling sense and enjoy the craft of editing footage into compelling content.", skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Motion Design", "Colour Grading"], opportunities: ["Video Editor", "Motion Designer", "Post-Production Artist"], salary: "₹3–15+ LPA", color: "text-red-600", gradient: "from-red-500 to-orange-500" },
  "Financial Analyst":           { why: "You combine strong analytical skills with a passion for markets, business, and financial decision-making.", skills: ["Excel", "Financial Modelling", "SQL", "Power BI", "CFA"], opportunities: ["Financial Analyst", "Equity Researcher", "Investment Banker"], salary: "₹4–20+ LPA", color: "text-emerald-600", gradient: "from-emerald-500 to-green-500" },
  "Quantitative Analyst":        { why: "Your rare combination of advanced mathematics and programming makes you suited for high-stakes financial modelling.", skills: ["Python", "C++", "Statistics", "Algorithmic Trading", "ML"], opportunities: ["Quant Analyst", "Algo Trader", "Risk Modeller"], salary: "₹8–40+ LPA", color: "text-lime-600", gradient: "from-lime-500 to-green-500" },
  "Product Manager":             { why: "You have a strategic, cross-functional mindset and love defining and driving products from idea to launch.", skills: ["Product Strategy", "Figma", "SQL", "Jira", "Agile"], opportunities: ["Product Manager", "Associate PM", "Growth PM"], salary: "₹8–40+ LPA", color: "text-orange-600", gradient: "from-orange-500 to-amber-500" },
  "Health Informatics Specialist":{ why: "You want to improve healthcare delivery through technology, data, and digital health systems.", skills: ["EHR Systems", "HL7/FHIR", "SQL", "Python", "Health Data Privacy"], opportunities: ["Health Informatics Analyst", "Clinical Systems Analyst", "Digital Health Consultant"], salary: "₹5–20+ LPA", color: "text-rose-600", gradient: "from-rose-500 to-pink-500" },
  "Bioinformatics Scientist":    { why: "You bridge biology and computing to unlock insights from genomic and molecular data.", skills: ["Python", "R", "BioPython", "BLAST", "ML for Biology"], opportunities: ["Bioinformatics Analyst", "Genomics Researcher", "Computational Biologist"], salary: "₹5–18+ LPA", color: "text-green-600", gradient: "from-green-500 to-teal-500" },
  "Legal Tech Consultant":       { why: "You understand both law and technology, enabling you to modernise how legal services are delivered.", skills: ["Legal Research", "Data Privacy Law", "CLM Tools", "Python Basics", "AI in Law"], opportunities: ["LegalTech Consultant", "Compliance Analyst", "Legal Innovation Manager"], salary: "₹6–22+ LPA", color: "text-yellow-600", gradient: "from-yellow-500 to-amber-500" },
  "HR & People Analytics":       { why: "You're empathetic, strategic, and excited about using data to build great workplaces and teams.", skills: ["HRIS", "Excel", "Power BI", "SQL", "People Strategy"], opportunities: ["HR Analyst", "Talent Acquisition Lead", "People Operations Manager"], salary: "₹4–18+ LPA", color: "text-slate-600", gradient: "from-slate-500 to-gray-500" },
  "EdTech Specialist":           { why: "You're passionate about education, learning design, and building digital tools that help people grow.", skills: ["Instructional Design", "Articulate Storyline", "LMS Platforms", "Video Production", "Learning Analytics"], opportunities: ["Instructional Designer", "EdTech Product Manager", "eLearning Developer"], salary: "₹4–18+ LPA", color: "text-purple-600", gradient: "from-purple-500 to-indigo-500" },
  "Sustainability Analyst":      { why: "You care deeply about the planet and want to help organisations measure and reduce their environmental impact.", skills: ["ESG Frameworks", "Carbon Accounting", "Excel", "Power BI", "Environmental Regulations"], opportunities: ["ESG Analyst", "Sustainability Consultant", "Corporate Sustainability Manager"], salary: "₹5–18+ LPA", color: "text-green-600", gradient: "from-green-500 to-emerald-500" },
};

function computeResult(answers: (number | null)[]): CareerKey {
  const totals: Record<string, number> = {};
  answers.forEach((optionIdx, qIdx) => {
    if (optionIdx === null) return;
    const scores = questions[qIdx].options[optionIdx].scores;
    for (const [career, score] of Object.entries(scores)) {
      totals[career] = (totals[career] ?? 0) + score;
    }
  });
  const sorted = Object.entries(totals).sort((a, b) => b[1] - a[1]);
  return (sorted[0]?.[0] ?? "Software Developer") as CareerKey;
}

export default function CareerQuiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [current, setCurrent] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const q = questions[current];
  const isLast = current === questions.length - 1;
  const answered = answers.filter((a) => a !== null).length;
  const progress = Math.round((answered / questions.length) * 100);
  const result = submitted ? computeResult(answers) : null;
  const meta = result ? careerMeta[result] : null;

  const selectOption = (idx: number) => {
    const next = [...answers];
    next[current] = idx;
    setAnswers(next);
  };

  const reset = () => {
    setAnswers(Array(questions.length).fill(null));
    setCurrent(0);
    setSubmitted(false);
  };

  return (
    <section id="quiz" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary border-0 text-sm font-medium">
            Career Quiz
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Career Fits You?</h2>
          <p className="text-lg text-muted-foreground">
            Answer 10 quick questions and get matched with the best career from 22 options.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Question {current + 1} of {questions.length}</span>
                  <span>{answered} answered</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card className="border border-border/50 mb-5">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {current + 1}
                        </div>
                        <h3 className="text-lg font-semibold pt-1">{q.text}</h3>
                      </div>
                      <div className="space-y-3">
                        {q.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => selectOption(i)}
                            data-testid={`quiz-option-${i}`}
                            className={`w-full text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                              answers[current] === i
                                ? "bg-primary text-primary-foreground border-primary shadow-md"
                                : "border-border hover:border-primary/40 hover:bg-primary/5 text-foreground"
                            }`}
                          >
                            <span className={`inline-block w-6 h-6 rounded-full border-2 mr-3 text-xs text-center leading-5 flex-shrink-0 font-bold ${
                              answers[current] === i ? "border-white bg-white text-primary" : "border-current"
                            }`} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                              {String.fromCharCode(65 + i)}
                            </span>
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between gap-3">
                <Button
                  variant="outline"
                  onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                  disabled={current === 0}
                  className="rounded-full gap-2"
                  data-testid="button-prev"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </Button>

                {isLast ? (
                  <Button
                    size="lg"
                    onClick={() => setSubmitted(true)}
                    disabled={answers[current] === null}
                    className="rounded-full px-8 gap-2"
                    data-testid="button-submit-quiz"
                  >
                    <Sparkles className="w-4 h-4" />
                    Reveal My Match
                  </Button>
                ) : (
                  <Button
                    onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}
                    disabled={answers[current] === null}
                    className="rounded-full gap-2"
                    data-testid="button-next"
                  >
                    Next <ChevronRight className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Question dots */}
              <div className="flex gap-1.5 justify-center mt-6 flex-wrap">
                {questions.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      i === current ? "bg-primary scale-125" : answers[i] !== null ? "bg-primary/50" : "bg-muted-foreground/20"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              {meta && result && (
                <Card className="overflow-hidden border-2 border-primary/20">
                  <div className={`h-2 bg-gradient-to-r ${meta.gradient}`} />
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">Your Best Career Match</span>
                      </div>
                      <h3 className={`text-3xl font-bold mb-2 ${meta.color}`}>{result}</h3>
                      <p className="text-muted-foreground max-w-lg mx-auto mb-3">{meta.why}</p>
                      <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r ${meta.gradient} text-white`}>
                        Salary Range: {meta.salary}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="bg-muted/50 rounded-2xl p-5">
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Skills to Build</h4>
                        <div className="flex flex-wrap gap-2">
                          {meta.skills.map((s) => (
                            <Badge key={s} variant="outline" className="rounded-full">{s}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-2xl p-5">
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Career Opportunities</h4>
                        <div className="flex flex-col gap-2">
                          {meta.opportunities.map((o) => (
                            <div key={o} className="flex items-center gap-2 text-sm">
                              <ArrowRight className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                              {o}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <Button variant="outline" onClick={reset} className="rounded-full gap-2" data-testid="button-retake-quiz">
                        <RefreshCw className="w-4 h-4" />
                        Retake Quiz
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
