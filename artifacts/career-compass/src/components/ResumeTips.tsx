import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, CheckCircle, XCircle, Zap, Bot, Briefcase, Download, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tips = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Resume Structure",
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    content: [
      "Contact Info at the top (name, phone, email, LinkedIn, GitHub)",
      "Professional Summary — 2–3 lines about your profile",
      "Work Experience / Internships in reverse chronological order",
      "Education with CGPA, passing year, institution",
      "Projects section with tech stack and impact",
      "Skills — categorized (Languages, Frameworks, Tools)",
      "Certifications and Achievements at the bottom",
    ],
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Resume Do's",
    color: "text-emerald-500",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    content: [
      "Use action verbs: built, designed, improved, deployed, led",
      "Quantify achievements — 'Reduced load time by 40%'",
      "Tailor your resume for each job application",
      "Keep it to 1 page for freshers, 2 pages max for experienced",
      "Use clean, readable fonts (Calibri, Arial, Roboto)",
      "Include GitHub/portfolio link prominently",
      "Proofread carefully — zero typos is mandatory",
    ],
  },
  {
    icon: <XCircle className="w-6 h-6" />,
    title: "Resume Don'ts",
    color: "text-red-500",
    bg: "bg-red-100 dark:bg-red-900/30",
    content: [
      "Don't include a photo (unless required by the employer)",
      "Avoid generic objectives like 'seeking a challenging role'",
      "Don't use tables or text boxes — ATS can't parse them",
      "Avoid unprofessional email addresses",
      "Don't lie or exaggerate your skills",
      "Skip irrelevant hobbies unless they show a skill",
      "Don't use colors or graphics that hurt readability",
    ],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Skills to Mention",
    color: "text-amber-500",
    bg: "bg-amber-100 dark:bg-amber-900/30",
    content: [
      "Programming languages you are proficient in",
      "Frameworks and libraries (React, Node.js, Django)",
      "Tools: Git, Docker, VS Code, Postman",
      "Cloud platforms if applicable: AWS, Azure, GCP",
      "Soft skills: problem-solving, communication, teamwork",
      "Domain-specific: SQL, Power BI, Figma, TensorFlow",
      "Languages spoken (English, Hindi, etc.)",
    ],
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "ATS-Friendly Tips",
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    content: [
      "Use standard section headings (Experience, Education, Skills)",
      "Include keywords from the job description",
      "Use plain text formatting — avoid columns and tables",
      "Submit as PDF unless the employer asks for Word",
      "Spell out acronyms at least once (e.g., ML / Machine Learning)",
      "Use standard fonts, not embedded custom fonts",
      "Avoid headers/footers for key information",
    ],
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Portfolio Building",
    color: "text-sky-500",
    bg: "bg-sky-100 dark:bg-sky-900/30",
    content: [
      "Host projects on GitHub with clear READMEs",
      "Create a personal portfolio website (use GitHub Pages or Vercel)",
      "Include live demos wherever possible",
      "Document your thought process and decisions",
      "Contribute to open source — even small PRs count",
      "Write technical blogs or LinkedIn articles",
      "Showcase 3–5 quality projects, not 20 mediocre ones",
    ],
  },
];

export default function ResumeTips() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge className="mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary border-0 text-sm font-medium">
            Resume Guide
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Build a Winning Resume</h2>
          <p className="text-lg text-muted-foreground">
            Professional tips to craft a resume that gets you shortlisted and passes ATS filters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {tips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              data-testid={`card-resume-${i}`}
            >
              <Card
                className="h-full border border-border/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${tip.bg} flex items-center justify-center ${tip.color}`}>
                        {tip.icon}
                      </div>
                      <h3 className="font-bold">{tip.title}</h3>
                    </div>
                    {expanded === i ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                  {expanded === i && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="space-y-2"
                    >
                      {tip.content.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className={`w-1.5 h-1.5 rounded-full ${tip.color.replace("text-", "bg-")} flex-shrink-0 mt-1.5`} />
                          {item}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                  {expanded !== i && (
                    <p className="text-sm text-muted-foreground">{tip.content[0]}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="rounded-full px-8 gap-2" data-testid="button-download-resume">
            <Download className="w-5 h-5" />
            Download Sample Resume Template
          </Button>
        </div>
      </div>
    </section>
  );
}
