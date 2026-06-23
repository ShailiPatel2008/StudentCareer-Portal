import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, RefreshCw, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const questions = [
  { id: 1, text: "Do you enjoy writing code and solving programming challenges?" },
  { id: 2, text: "Do you like working with data, numbers, and finding patterns?" },
  { id: 3, text: "Do you enjoy creative design, aesthetics, and user experience?" },
  { id: 4, text: "Are you interested in security, ethical hacking, and protecting systems?" },
  { id: 5, text: "Do you enjoy solving business problems and digital strategy?" },
  { id: 6, text: "Are you excited about artificial intelligence and future technologies?" },
];

type Answer = "yes" | "no" | null;

const results: Record<string, {
  career: string;
  why: string;
  skills: string[];
  opportunities: string[];
  color: string;
  gradient: string;
}> = {
  "110000": { career: "UI/UX Designer", why: "You enjoy design but not heavy coding or data — perfect for crafting beautiful user experiences.", skills: ["Figma", "User Research", "Wireframing", "Prototyping"], opportunities: ["Product Designer", "UX Researcher", "Interaction Designer"], color: "text-pink-600", gradient: "from-pink-500 to-rose-500" },
  "100000": { career: "UI/UX Designer", why: "Your creative instincts and design focus make UI/UX a natural fit.", skills: ["Figma", "Adobe XD", "CSS", "User Testing"], opportunities: ["UI Designer", "UX Designer", "Product Designer"], color: "text-pink-600", gradient: "from-pink-500 to-rose-500" },
  "010000": { career: "Data Analyst", why: "You love data and patterns — perfect for turning raw numbers into business insights.", skills: ["Excel", "SQL", "Python", "Power BI"], opportunities: ["Data Analyst", "Business Analyst", "BI Developer"], color: "text-teal-600", gradient: "from-teal-500 to-cyan-500" },
  "001000": { career: "Cybersecurity Specialist", why: "Your interest in security and hacking makes you a natural defender of digital systems.", skills: ["Networking", "Linux", "Ethical Hacking", "SIEM"], opportunities: ["Security Analyst", "Pen Tester", "SOC Analyst"], color: "text-red-600", gradient: "from-red-500 to-rose-500" },
  "000100": { career: "Digital Marketing Specialist", why: "You're drawn to business strategy and digital channels — marketing is your domain.", skills: ["SEO", "Google Ads", "Social Media", "Analytics"], opportunities: ["Marketing Manager", "Growth Hacker", "Content Strategist"], color: "text-orange-600", gradient: "from-orange-500 to-amber-500" },
  "000001": { career: "AI Engineer", why: "Your passion for AI and emerging tech sets you up to build the future.", skills: ["Python", "Machine Learning", "Deep Learning", "LLMs"], opportunities: ["ML Engineer", "AI Researcher", "Data Scientist"], color: "text-purple-600", gradient: "from-purple-500 to-violet-500" },
};

function getResult(answers: Answer[]) {
  const key = answers.map((a) => (a === "yes" ? "1" : "0")).join("");
  if (results[key]) return results[key];
  const yesCount = answers.filter((a) => a === "yes").length;
  if (answers[0] === "yes" && answers[5] === "yes") return { career: "AI Engineer", why: "You love coding and AI — perfect combination for building intelligent systems.", skills: ["Python", "TensorFlow", "LLMs", "MLOps"], opportunities: ["ML Engineer", "AI Researcher", "Data Scientist"], color: "text-purple-600", gradient: "from-purple-500 to-violet-500" };
  if (answers[0] === "yes") return { career: "Software Developer", why: "Your love for coding makes software development your natural home.", skills: ["JavaScript", "React", "Node.js", "Git"], opportunities: ["Frontend Dev", "Backend Dev", "Full Stack Dev"], color: "text-blue-600", gradient: "from-blue-500 to-indigo-500" };
  if (answers[1] === "yes") return { career: "Data Analyst", why: "Your analytical mindset is perfect for extracting insights from data.", skills: ["SQL", "Python", "Power BI", "Statistics"], opportunities: ["Data Analyst", "BI Developer", "Business Analyst"], color: "text-teal-600", gradient: "from-teal-500 to-cyan-500" };
  if (answers[5] === "yes") return { career: "AI Engineer", why: "Your fascination with AI and emerging technologies positions you at the cutting edge.", skills: ["Python", "ML", "Deep Learning", "GenAI"], opportunities: ["ML Engineer", "AI Researcher", "NLP Engineer"], color: "text-purple-600", gradient: "from-purple-500 to-violet-500" };
  if (answers[2] === "yes") return { career: "UI/UX Designer", why: "Your creative eye and design sense make you a natural at building delightful user experiences.", skills: ["Figma", "User Research", "Prototyping", "CSS"], opportunities: ["UI Designer", "Product Designer", "UX Researcher"], color: "text-pink-600", gradient: "from-pink-500 to-rose-500" };
  return { career: "Cloud Engineer", why: "Your broad tech interest makes cloud infrastructure an excellent foundation.", skills: ["AWS", "Docker", "Kubernetes", "Linux"], opportunities: ["Cloud Architect", "DevOps Engineer", "SRE"], color: "text-sky-600", gradient: "from-sky-500 to-cyan-500" };
}

export default function CareerQuiz() {
  const [answers, setAnswers] = useState<Answer[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = answers.every((a) => a !== null);
  const result = submitted ? getResult(answers) : null;

  const reset = () => {
    setAnswers(Array(questions.length).fill(null));
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
            Answer 6 quick questions and we'll match you with the perfect career path.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="quiz" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="space-y-4 mb-8">
                {questions.map((q, i) => (
                  <Card key={q.id} className="border border-border/50">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium mb-3">{q.text}</p>
                          <div className="flex gap-3">
                            <button
                              data-testid={`quiz-yes-${i}`}
                              onClick={() => {
                                const next = [...answers];
                                next[i] = "yes";
                                setAnswers(next);
                              }}
                              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border-2 ${
                                answers[i] === "yes"
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
                              }`}
                            >
                              Yes
                            </button>
                            <button
                              data-testid={`quiz-no-${i}`}
                              onClick={() => {
                                const next = [...answers];
                                next[i] = "no";
                                setAnswers(next);
                              }}
                              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border-2 ${
                                answers[i] === "no"
                                  ? "bg-muted text-foreground border-foreground/20"
                                  : "border-border text-muted-foreground hover:border-border hover:text-foreground"
                              }`}
                            >
                              No
                            </button>
                          </div>
                        </div>
                        {answers[i] !== null && (
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  onClick={() => setSubmitted(true)}
                  disabled={!allAnswered}
                  className="rounded-full px-10 py-6 text-lg"
                  data-testid="button-submit-quiz"
                >
                  <Sparkles className="mr-2 w-5 h-5" />
                  Reveal My Career Match
                </Button>
                {!allAnswered && (
                  <p className="text-sm text-muted-foreground mt-3">Answer all questions to continue</p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              {result && (
                <Card className="overflow-hidden border-2 border-primary/20">
                  <div className={`h-2 bg-gradient-to-r ${result.gradient}`} />
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">Your Career Match</span>
                      </div>
                      <h3 className={`text-3xl font-bold mb-3 ${result.color}`}>{result.career}</h3>
                      <p className="text-muted-foreground max-w-lg mx-auto">{result.why}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-muted/50 rounded-2xl p-5">
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Skills to Learn</h4>
                        <div className="flex flex-wrap gap-2">
                          {result.skills.map((s) => (
                            <Badge key={s} variant="outline" className="rounded-full">{s}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="bg-muted/50 rounded-2xl p-5">
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Career Opportunities</h4>
                        <div className="flex flex-col gap-2">
                          {result.opportunities.map((o) => (
                            <div key={o} className="flex items-center gap-2 text-sm">
                              <ArrowRight className="w-3.5 h-3.5 text-primary" />
                              {o}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <Button variant="outline" onClick={reset} className="rounded-full" data-testid="button-retake-quiz">
                        <RefreshCw className="mr-2 w-4 h-4" />
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
