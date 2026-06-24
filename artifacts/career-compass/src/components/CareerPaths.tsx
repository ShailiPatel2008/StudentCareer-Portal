import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, BarChart2, Brain, Shield, Palette, Cloud, Megaphone, Settings, Search, TrendingUp, Stethoscope, Scale, PiggyBank, Microscope, Pen, Video, Building2, Wrench, Gamepad2, Globe, GraduationCap, HeartHandshake, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const careers = [
  {
    icon: <Code className="w-7 h-7" />,
    title: "Software Developer",
    salary: "₹4 LPA – ₹20+ LPA",
    demand: "Very High",
    demandColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    description: "Build websites, applications, and software systems that power the digital world.",
    category: "Technology",
    color: "from-blue-500/10 to-indigo-500/10",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: <BarChart2 className="w-7 h-7" />,
    title: "Data Analyst",
    salary: "₹4 LPA – ₹15+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Analyze data and generate business insights that drive critical decisions.",
    category: "Data",
    color: "from-teal-500/10 to-cyan-500/10",
    iconColor: "text-teal-500",
    iconBg: "bg-teal-100 dark:bg-teal-900/30",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "AI Engineer",
    salary: "₹6 LPA – ₹30+ LPA",
    demand: "Very High",
    demandColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    description: "Develop AI and machine learning solutions at the frontier of technology.",
    category: "AI/ML",
    color: "from-purple-500/10 to-violet-500/10",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Cybersecurity Specialist",
    salary: "₹5 LPA – ₹25+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Protect systems and networks from cyber threats and vulnerabilities.",
    category: "Security",
    color: "from-red-500/10 to-rose-500/10",
    iconColor: "text-red-500",
    iconBg: "bg-red-100 dark:bg-red-900/30",
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "UI/UX Designer",
    salary: "₹4 LPA – ₹18+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Design user-friendly digital experiences that delight and engage users.",
    category: "Design",
    color: "from-pink-500/10 to-rose-500/10",
    iconColor: "text-pink-500",
    iconBg: "bg-pink-100 dark:bg-pink-900/30",
  },
  {
    icon: <Cloud className="w-7 h-7" />,
    title: "Cloud Engineer",
    salary: "₹6 LPA – ₹25+ LPA",
    demand: "Very High",
    demandColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    description: "Build and manage scalable cloud infrastructure for modern applications.",
    category: "Technology",
    color: "from-sky-500/10 to-cyan-500/10",
    iconColor: "text-sky-500",
    iconBg: "bg-sky-100 dark:bg-sky-900/30",
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: "Digital Marketing Specialist",
    salary: "₹3 LPA – ₹15+ LPA",
    demand: "Medium",
    demandColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    description: "Promote products and brands through digital channels to reach millions.",
    category: "Marketing",
    color: "from-orange-500/10 to-amber-500/10",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: "DevOps Engineer",
    salary: "₹6 LPA – ₹25+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Automate software deployment and bridge development with operations.",
    category: "Technology",
    color: "from-indigo-500/10 to-blue-500/10",
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  {
    icon: <Gamepad2 className="w-7 h-7" />,
    title: "Game Developer",
    salary: "₹4 LPA – ₹22+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Create interactive games for mobile, PC, and consoles using engines like Unity & Unreal.",
    category: "Technology",
    color: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-500",
    iconBg: "bg-violet-100 dark:bg-violet-900/30",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Blockchain Developer",
    salary: "₹8 LPA – ₹35+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Build decentralized apps, smart contracts, and Web3 solutions on blockchain networks.",
    category: "Technology",
    color: "from-cyan-500/10 to-teal-500/10",
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-100 dark:bg-cyan-900/30",
  },
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: "Health Informatics Specialist",
    salary: "₹5 LPA – ₹20+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Bridge healthcare and technology — manage health data, EHR systems, and medical analytics.",
    category: "Healthcare",
    color: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-100 dark:bg-rose-900/30",
  },
  {
    icon: <Microscope className="w-7 h-7" />,
    title: "Bioinformatics Scientist",
    salary: "₹5 LPA – ₹18+ LPA",
    demand: "Medium",
    demandColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    description: "Apply AI and data analysis to biological datasets for drug discovery and genomics research.",
    category: "Healthcare",
    color: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600",
    iconBg: "bg-green-100 dark:bg-green-900/30",
  },
  {
    icon: <PiggyBank className="w-7 h-7" />,
    title: "Financial Analyst",
    salary: "₹4 LPA – ₹20+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Evaluate investment opportunities, prepare financial models, and guide business decisions.",
    category: "Finance",
    color: "from-emerald-500/10 to-green-500/10",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: <BarChart2 className="w-7 h-7" />,
    title: "Quantitative Analyst",
    salary: "₹8 LPA – ₹40+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Use advanced mathematics and algorithms to drive trading strategies and risk models in finance.",
    category: "Finance",
    color: "from-lime-500/10 to-green-500/10",
    iconColor: "text-lime-600",
    iconBg: "bg-lime-100 dark:bg-lime-900/30",
  },
  {
    icon: <Scale className="w-7 h-7" />,
    title: "Legal Tech Consultant",
    salary: "₹6 LPA – ₹22+ LPA",
    demand: "Medium",
    demandColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    description: "Combine legal knowledge with technology to transform law firms and compliance operations.",
    category: "Law",
    color: "from-amber-500/10 to-yellow-500/10",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    icon: <Pen className="w-7 h-7" />,
    title: "Content Creator",
    salary: "₹3 LPA – ₹20+ LPA",
    demand: "Very High",
    demandColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    description: "Create engaging content for YouTube, blogs, podcasts, and social media to build audiences.",
    category: "Marketing",
    color: "from-fuchsia-500/10 to-pink-500/10",
    iconColor: "text-fuchsia-500",
    iconBg: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
  },
  {
    icon: <Video className="w-7 h-7" />,
    title: "Video Editor / Motion Designer",
    salary: "₹3 LPA – ₹15+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Edit videos, create animations, and produce visual content for brands and creators.",
    category: "Design",
    color: "from-red-500/10 to-orange-500/10",
    iconColor: "text-red-500",
    iconBg: "bg-red-100 dark:bg-red-900/30",
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: "Product Manager",
    salary: "₹8 LPA – ₹40+ LPA",
    demand: "Very High",
    demandColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    description: "Define product vision, roadmap, and work with engineering, design, and business teams.",
    category: "Management",
    color: "from-blue-500/10 to-sky-500/10",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: <HeartHandshake className="w-7 h-7" />,
    title: "HR & People Analytics",
    salary: "₹4 LPA – ₹18+ LPA",
    demand: "Medium",
    demandColor: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    description: "Manage talent, culture, and use data to optimize hiring, retention, and employee performance.",
    category: "Management",
    color: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-500",
    iconBg: "bg-rose-100 dark:bg-rose-900/30",
  },
  {
    icon: <GraduationCap className="w-7 h-7" />,
    title: "EdTech Specialist",
    salary: "₹4 LPA – ₹18+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Design and build digital learning experiences, LMS platforms, and online education content.",
    category: "Management",
    color: "from-purple-500/10 to-indigo-500/10",
    iconColor: "text-purple-500",
    iconBg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    title: "Embedded Systems Engineer",
    salary: "₹5 LPA – ₹22+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Program microcontrollers and IoT devices that power smart hardware and robotics systems.",
    category: "Technology",
    color: "from-slate-500/10 to-gray-500/10",
    iconColor: "text-slate-600",
    iconBg: "bg-slate-100 dark:bg-slate-900/30",
  },
  {
    icon: <Leaf className="w-7 h-7" />,
    title: "Sustainability Analyst",
    salary: "₹5 LPA – ₹18+ LPA",
    demand: "High",
    demandColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
    description: "Help organizations measure, reduce, and report environmental impact and ESG performance.",
    category: "Other",
    color: "from-green-500/10 to-teal-500/10",
    iconColor: "text-green-600",
    iconBg: "bg-green-100 dark:bg-green-900/30",
  },
];

const categories = ["All", "Technology", "Data", "AI/ML", "Security", "Design", "Marketing", "Finance", "Healthcare", "Management", "Law", "Other"];

export default function CareerPaths() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = careers.filter((c) => {
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "All" || c.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <section id="careers" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge className="mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary border-0 text-sm font-medium">
            Career Exploration
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Career Paths</h2>
          <p className="text-lg text-muted-foreground">
            Discover in-demand careers, understand salary ranges, and find your perfect fit in today's digital economy.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center">
          <div className="relative flex-1 max-w-md mx-auto md:mx-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search careers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 rounded-full"
              data-testid="input-career-search"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                data-testid={`filter-${cat}`}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((career, index) => (
            <motion.div
              key={career.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              data-testid={`card-career-${index}`}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border/50 overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${career.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <CardContent className="p-6 relative flex flex-col h-full gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${career.iconBg} flex items-center justify-center ${career.iconColor} flex-shrink-0`}>
                    {career.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{career.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{career.description}</p>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {career.salary}
                      </div>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full w-fit ${career.demandColor}`}>
                        {career.demand} Demand
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            No careers found matching your search.
          </div>
        )}
      </div>
    </section>
  );
}
