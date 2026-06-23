import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Users, MessageSquare, Presentation, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const categories = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Technical Interview",
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    tips: [
      "Practice DSA problems daily on LeetCode or HackerRank",
      "Revise OS, DBMS, Networking, and OOP fundamentals",
      "Be ready to explain your projects in depth",
      "Think aloud — explain your approach before coding",
      "Know time and space complexity of your solutions",
      "Practice coding on a whiteboard or plain editor",
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "HR Interview",
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    tips: [
      "Research the company — products, culture, mission",
      "Prepare STAR stories (Situation, Task, Action, Result)",
      "Know your resume inside out — every line",
      "Dress professionally and arrive 10 minutes early",
      "Prepare 3–5 thoughtful questions to ask the interviewer",
      "Be honest about salary expectations",
    ],
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Communication Skills",
    color: "text-teal-500",
    bg: "bg-teal-100 dark:bg-teal-900/30",
    tips: [
      "Speak clearly, at a measured pace — don't rush",
      "Use structured answers: point → explanation → example",
      "Maintain eye contact and open body language",
      "Listen actively — ask for clarification if needed",
      "Avoid filler words like 'umm', 'like', 'you know'",
      "Practice mock interviews with friends or record yourself",
    ],
  },
  {
    icon: <Presentation className="w-6 h-6" />,
    title: "Group Discussion",
    color: "text-orange-500",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    tips: [
      "Initiate or contribute within the first 2 minutes",
      "Support points with facts, data, or examples",
      "Acknowledge others' points before building on them",
      "Don't interrupt — wait for a natural pause",
      "Summarize the discussion when asked",
      "Stay calm and confident even under disagreement",
    ],
  },
];

const topQA = [
  {
    q: "Tell me about yourself.",
    a: "Start with your current status (student/graduate), briefly cover your educational background, highlight 2–3 relevant skills or projects, and close with your career goal. Keep it to 60–90 seconds. Example: 'I'm a final-year CS student at XYZ University with a strong interest in full-stack development. I've built 3 real-world projects using React and Node.js, and recently completed an internship at ABC Corp where I improved API response time by 35%. I'm excited to bring my technical skills and passion for clean code to a software engineering role.'",
  },
  {
    q: "Why should we hire you?",
    a: "Connect your specific skills and achievements directly to the role's requirements. Example: 'You're looking for someone who can build scalable backend systems — I've done exactly that. During my internship, I designed a microservices architecture that handled 10,000 concurrent users. I pick up new technologies quickly, I care deeply about code quality, and I'm genuinely excited about the problems your team is solving. I believe I can make a meaningful contribution from day one.'",
  },
  {
    q: "What are your strengths?",
    a: "Choose 2–3 strengths directly relevant to the job and support each with a brief example. Example: 'My biggest strength is problem-solving — I love breaking down complex challenges into manageable steps. For instance, when our internship project faced a performance bottleneck, I diagnosed the issue, proposed a caching strategy, and reduced query time by 60%. I'm also highly adaptable — I taught myself TypeScript in two weeks when our team switched stacks mid-project.'",
  },
  {
    q: "What are your weaknesses?",
    a: "Choose a real but manageable weakness, show self-awareness, and explain what you're actively doing about it. Example: 'I used to struggle with delegating tasks because I wanted to handle everything myself to ensure quality. I've been consciously working on this — during my last group project, I focused on assigning tasks based on each teammate's strengths, and it actually led to a better final outcome than if I'd done it alone. I'm still improving, but I've made real progress.'",
  },
];

export default function InterviewPrep() {
  return (
    <section id="interview" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge className="mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary border-0 text-sm font-medium">
            Interview Prep
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ace Your Interview</h2>
          <p className="text-lg text-muted-foreground">
            Expert strategies for technical rounds, HR interviews, and group discussions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              data-testid={`card-interview-${i}`}
            >
              <Card className="h-full border border-border/50 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl ${cat.bg} flex items-center justify-center ${cat.color}`}>
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-lg">{cat.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {cat.tips.map((tip, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className={`w-1.5 h-1.5 rounded-full ${cat.color.replace("text-", "bg-")} flex-shrink-0 mt-1.5`} />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-6 text-center">Top Interview Questions & Sample Answers</h3>
          <Accordion type="single" collapsible className="space-y-3">
            {topQA.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border/50 rounded-xl px-4 bg-card"
                data-testid={`faq-interview-${i}`}
              >
                <AccordionTrigger className="font-semibold text-left hover:no-underline py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
