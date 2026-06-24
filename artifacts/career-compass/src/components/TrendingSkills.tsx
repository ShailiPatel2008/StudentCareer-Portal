import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Zap, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  { name: "Agentic AI", growth: "+210%", demand: "Explosive", beginner: false, color: "from-purple-500 to-violet-600", bg: "bg-purple-500/10", badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
  { name: "Generative AI", growth: "+165%", demand: "Explosive", beginner: true, color: "from-fuchsia-500 to-pink-600", bg: "bg-fuchsia-500/10", badge: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/30 dark:text-fuchsia-400" },
  { name: "Large Language Models", growth: "+180%", demand: "Explosive", beginner: false, color: "from-violet-500 to-purple-600", bg: "bg-violet-500/10", badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400" },
  { name: "Prompt Engineering", growth: "+130%", demand: "Explosive", beginner: true, color: "from-amber-500 to-orange-600", bg: "bg-amber-500/10", badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
  { name: "RAG & Vector Databases", growth: "+155%", demand: "Explosive", beginner: false, color: "from-rose-500 to-red-600", bg: "bg-rose-500/10", badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400" },
  { name: "MLOps", growth: "+90%", demand: "Very High", beginner: false, color: "from-indigo-500 to-violet-600", bg: "bg-indigo-500/10", badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" },
  { name: "Data Analytics", growth: "+68%", demand: "Very High", beginner: true, color: "from-teal-500 to-cyan-600", bg: "bg-teal-500/10", badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" },
  { name: "Cloud Computing", growth: "+75%", demand: "Very High", beginner: false, color: "from-sky-500 to-blue-600", bg: "bg-sky-500/10", badge: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400" },
  { name: "Cybersecurity", growth: "+62%", demand: "Very High", beginner: false, color: "from-red-500 to-rose-600", bg: "bg-red-500/10", badge: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  { name: "DevOps & CI/CD", growth: "+52%", demand: "High", beginner: false, color: "from-indigo-500 to-blue-600", bg: "bg-indigo-500/10", badge: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400" },
  { name: "Full Stack Development", growth: "+58%", demand: "High", beginner: true, color: "from-blue-500 to-indigo-600", bg: "bg-blue-500/10", badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  { name: "Edge AI & Embedded ML", growth: "+98%", demand: "Very High", beginner: false, color: "from-slate-500 to-gray-600", bg: "bg-slate-500/10", badge: "bg-slate-100 text-slate-700 dark:bg-slate-900/30 dark:text-slate-400" },
  { name: "UI/UX Design", growth: "+46%", demand: "High", beginner: true, color: "from-pink-500 to-rose-600", bg: "bg-pink-500/10", badge: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400" },
  { name: "Digital Marketing & SEO", growth: "+44%", demand: "High", beginner: true, color: "from-orange-500 to-amber-600", bg: "bg-orange-500/10", badge: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
  { name: "ESG & Sustainability", growth: "+70%", demand: "High", beginner: true, color: "from-green-500 to-emerald-600", bg: "bg-green-500/10", badge: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  { name: "Blockchain & Web3", growth: "+50%", demand: "High", beginner: false, color: "from-cyan-500 to-teal-600", bg: "bg-cyan-500/10", badge: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400" },
  { name: "No-Code / Low-Code", growth: "+60%", demand: "High", beginner: true, color: "from-lime-500 to-green-600", bg: "bg-lime-500/10", badge: "bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400" },
  { name: "Quantum Computing", growth: "+38%", demand: "Medium", beginner: false, color: "from-purple-600 to-blue-600", bg: "bg-purple-600/10", badge: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
];

export default function TrendingSkills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge className="mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary border-0 text-sm font-medium">
            Market Trends
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Skills in 2026</h2>
          <p className="text-lg text-muted-foreground">
            The most in-demand skills employers are searching for right now. Stay ahead of the curve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              data-testid={`card-skill-${i}`}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 overflow-hidden group">
                <CardContent className="p-5 flex flex-col gap-3 h-full">
                  <div className={`w-full h-1.5 rounded-full bg-gradient-to-r ${skill.color} mb-1`} />

                  <h3 className="font-bold text-sm leading-tight">{skill.name}</h3>

                  <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-bold">{skill.growth}</span>
                    <span className="text-xs text-muted-foreground">growth</span>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-auto">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit ${skill.badge}`}>
                      {skill.demand} Demand
                    </span>
                    {skill.beginner && (
                      <span className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 font-medium">
                        <Star className="w-3 h-3 fill-current" />
                        Beginner Friendly
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
