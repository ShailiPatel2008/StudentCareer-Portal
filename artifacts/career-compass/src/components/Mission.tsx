import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Mission() {
  const items = [
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Clarity",
      description: "We demystify complex career landscapes, providing clear, actionable insights for every profession."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Direction",
      description: "Step-by-step roadmaps that take you from absolute beginner to job-ready professional."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Growth",
      description: "Continuous learning resources, interview prep, and resume tips to ensure your career accelerates."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            We believe that every student deserves access to high-quality career guidance. Our mission is to empower the next generation of professionals with the knowledge, skills, and confidence to build fulfilling careers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
                <CardContent className="p-8 text-center flex flex-col items-center gap-4">
                  <div className="p-4 rounded-2xl bg-primary/10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
