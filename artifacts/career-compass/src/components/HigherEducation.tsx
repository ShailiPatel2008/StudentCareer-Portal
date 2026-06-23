import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const degrees = [
  { name: "B.Tech / B.E.", duration: "4 Years", level: "Undergraduate", description: "Engineering degree covering core CS, electronics, and specializations. Gateway to top tech companies.", best: "Tech, Core Engineering" },
  { name: "BCA", duration: "3 Years", level: "Undergraduate", description: "Bachelor of Computer Applications — focuses on software development, databases, and IT fundamentals.", best: "Software Development" },
  { name: "BSc IT", duration: "3 Years", level: "Undergraduate", description: "Bachelor of Science in IT — broad foundation in computer science, programming, and systems.", best: "IT Industry" },
  { name: "MCA", duration: "2 Years", level: "Postgraduate", description: "Master of Computer Applications — advanced software development and specialization opportunities.", best: "Software, Management" },
  { name: "MBA", duration: "2 Years", level: "Postgraduate", description: "Master of Business Administration — combines tech knowledge with leadership and business strategy.", best: "Management, Consulting" },
  { name: "M.Tech", duration: "2 Years", level: "Postgraduate", description: "Advanced technical specialization in AI, data science, cybersecurity, or other domains.", best: "Research, Specialization" },
  { name: "Professional Certs", duration: "1–6 Months", level: "Certification", description: "Industry-recognized credentials that demonstrate specific expertise and boost employability fast.", best: "All Domains" },
];

const certs = [
  { name: "Google Data Analytics", provider: "Google", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  { name: "AWS Cloud Practitioner", provider: "Amazon", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
  { name: "Microsoft Azure Fundamentals", provider: "Microsoft", color: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400" },
  { name: "Cisco CCNA", provider: "Cisco", color: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400" },
  { name: "CompTIA Security+", provider: "CompTIA", color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  { name: "Google Digital Marketing", provider: "Google", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  { name: "IBM Data Science", provider: "IBM", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
];

const levelColor: Record<string, string> = {
  "Undergraduate": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Postgraduate": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "Certification": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
};

export default function HigherEducation() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge className="mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary border-0 text-sm font-medium">
            Higher Education
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Pathways</h2>
          <p className="text-lg text-muted-foreground">
            Choose the right degree or certification to accelerate your career journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-16">
          {degrees.map((deg, i) => (
            <motion.div
              key={deg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              data-testid={`card-degree-${i}`}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50">
                <CardContent className="p-5 flex flex-col gap-3 h-full">
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap ${levelColor[deg.level]}`}>
                      {deg.level}
                    </span>
                  </div>
                  <h3 className="font-bold text-base">{deg.name}</h3>
                  <p className="text-sm text-muted-foreground flex-1">{deg.description}</p>
                  <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {deg.duration}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3" />
                      {deg.best}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-3xl p-8 border border-border/50"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold">Industry Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className={`px-4 py-2.5 rounded-xl border border-border/50 bg-card hover:shadow-md transition-all cursor-pointer`}>
                  <div className="text-xs text-muted-foreground mb-0.5">{cert.provider}</div>
                  <div className="font-semibold text-sm">{cert.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
