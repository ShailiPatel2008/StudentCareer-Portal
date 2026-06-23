import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const stories = [
  {
    initials: "AK",
    name: "Aarav Kumar",
    career: "Data Analyst at TCS",
    location: "Mumbai",
    story: "I was a commerce student with zero coding knowledge. Career Compass showed me the exact roadmap — Excel, SQL, Python, Power BI. Within 9 months of following the plan and building 3 projects, I landed a Data Analyst role. The salary is 2x what I expected.",
    from: "Commerce Graduate",
    to: "Data Analyst",
    color: "from-teal-400 to-cyan-500",
    bg: "bg-teal-100 dark:bg-teal-900/40",
    text: "text-teal-700 dark:text-teal-300",
  },
  {
    initials: "PS",
    name: "Priya Sharma",
    career: "Software Developer at Infosys",
    location: "Bangalore",
    story: "I was struggling with where to start — there was so much information online. Career Compass gave me a clear, step-by-step roadmap. I followed the Software Dev path religiously, built a React + Node.js full-stack app, and got my first job offer within 7 months.",
    from: "BCA Fresher",
    to: "Software Developer",
    color: "from-blue-400 to-indigo-500",
    bg: "bg-blue-100 dark:bg-blue-900/40",
    text: "text-blue-700 dark:text-blue-300",
  },
  {
    initials: "RS",
    name: "Rohan Singh",
    career: "AI Intern at Wipro",
    location: "Pune",
    story: "I took the Career Quiz and got matched with AI Engineering. At first I thought it was too ambitious, but the roadmap broke it down into achievable steps. After completing the Python + ML track, I applied for internships and got accepted at Wipro's AI division in my 2nd year.",
    from: "2nd Year CS Student",
    to: "AI Intern",
    color: "from-purple-400 to-violet-500",
    bg: "bg-purple-100 dark:bg-purple-900/40",
    text: "text-purple-700 dark:text-purple-300",
  },
  {
    initials: "MJ",
    name: "Meera Joshi",
    career: "Cloud Engineer at Accenture",
    location: "Chennai",
    story: "I was a mechanical engineer who wanted to switch to IT. Using Career Compass's Cloud roadmap and the free AWS resources listed here, I got my AWS Cloud Practitioner certification in 2 months. Accenture hired me for their cloud team 3 months later. Best decision of my life.",
    from: "Mechanical Engineer",
    to: "Cloud Engineer",
    color: "from-sky-400 to-cyan-500",
    bg: "bg-sky-100 dark:bg-sky-900/40",
    text: "text-sky-700 dark:text-sky-300",
  },
];

export default function SuccessStories() {
  return (
    <section id="stories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge className="mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary border-0 text-sm font-medium">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Students Who Made It</h2>
          <p className="text-lg text-muted-foreground">
            Real students, real journeys, real results. These stories could be yours next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-testid={`card-story-${i}`}
            >
              <Card className="h-full border border-border/50 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className={`h-1.5 bg-gradient-to-r ${s.color}`} />
                <CardContent className="p-6 flex flex-col gap-4">
                  <Quote className="w-8 h-8 text-primary/20" />
                  <p className="text-muted-foreground leading-relaxed italic">"{s.story}"</p>

                  <div className="flex items-center gap-1 mt-auto">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-3 border-t border-border/50">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {s.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold truncate">{s.name}</p>
                      <p className="text-sm text-muted-foreground truncate">{s.career}</p>
                      <p className="text-xs text-muted-foreground">{s.location}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="flex items-center gap-1.5 justify-end">
                        <span className="text-xs text-muted-foreground line-through">{s.from}</span>
                        <span className="text-xs">→</span>
                        <span className={`text-xs font-bold ${s.text}`}>{s.to}</span>
                      </div>
                    </div>
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
