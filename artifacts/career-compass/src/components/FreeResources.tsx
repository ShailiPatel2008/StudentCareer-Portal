import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BookOpen, ExternalLink, Youtube, FileText, Code, BarChart2, Brain, Shield, Cloud,
  Cpu, Link2, Gamepad2, Palette, TrendingUp, Video, DollarSign, Heart, Microscope,
  Scale, Users, GraduationCap, Leaf, Briefcase, GitBranch,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: "programming",
    label: "Software Dev",
    icon: <Code className="w-5 h-5" />,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
    resources: [
      { name: "Python for Beginners", type: "Course", platform: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/scientific-computing-with-python/" },
      { name: "JavaScript Full Course", type: "YouTube", platform: "Traversy Media", url: "https://www.youtube.com/c/TraversyMedia" },
      { name: "Java Programming", type: "Tutorial", platform: "W3Schools", url: "https://www.w3schools.com/java/" },
      { name: "CS50: Intro to Computer Science", type: "Course", platform: "Harvard / edX", url: "https://cs50.harvard.edu/" },
      { name: "The Odin Project", type: "Course", platform: "theodinproject.com", url: "https://www.theodinproject.com/" },
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
      { name: "Google Data Analytics Certificate", type: "Course", platform: "Coursera (Audit Free)", url: "https://www.coursera.org/professional-certificates/google-data-analytics" },
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
      { name: "Machine Learning Specialization", type: "Course", platform: "Andrew Ng / Coursera", url: "https://www.coursera.org/learn/machine-learning" },
      { name: "Fast.ai Practical Deep Learning", type: "Course", platform: "fast.ai", url: "https://course.fast.ai/" },
      { name: "Hugging Face NLP Course", type: "Docs", platform: "Hugging Face", url: "https://huggingface.co/learn" },
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
      { name: "TryHackMe Learning Paths", type: "Course", platform: "TryHackMe", url: "https://tryhackme.com/" },
      { name: "Ethical Hacking Full Course", type: "YouTube", platform: "freeCodeCamp", url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE" },
      { name: "Networking Fundamentals", type: "Course", platform: "Cisco SkillsForAll", url: "https://skillsforall.com/" },
      { name: "Cybersecurity Roadmap", type: "Docs", platform: "roadmap.sh", url: "https://roadmap.sh/cyber-security" },
      { name: "Hack The Box Academy", type: "Course", platform: "HTB Academy", url: "https://academy.hackthebox.com/" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    color: "text-sky-500",
    bg: "bg-sky-100 dark:bg-sky-900/30",
    resources: [
      { name: "AWS Free Tier Training", type: "Course", platform: "AWS Skill Builder", url: "https://skillbuilder.aws/" },
      { name: "Azure Fundamentals (AZ-900)", type: "Course", platform: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/training/paths/az-900-describe-cloud-concepts/" },
      { name: "Docker for Beginners", type: "Tutorial", platform: "Play with Docker", url: "https://training.play-with-docker.com/" },
      { name: "Kubernetes Basics", type: "Docs", platform: "kubernetes.io", url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
      { name: "Google Cloud Skills Boost", type: "Course", platform: "Google Cloud", url: "https://cloudskillsboost.google/" },
    ],
  },
  {
    id: "devops",
    label: "DevOps",
    icon: <GitBranch className="w-5 h-5" />,
    color: "text-indigo-500",
    bg: "bg-indigo-100 dark:bg-indigo-900/30",
    resources: [
      { name: "DevOps Roadmap", type: "Docs", platform: "roadmap.sh", url: "https://roadmap.sh/devops" },
      { name: "Git & GitHub Crash Course", type: "YouTube", platform: "Traversy Media", url: "https://www.youtube.com/watch?v=SWYqp7iY_Tc" },
      { name: "Docker & Kubernetes Full Course", type: "YouTube", platform: "TechWorld with Nana", url: "https://www.youtube.com/c/TechWorldwithNana" },
      { name: "GitHub Actions CI/CD", type: "Docs", platform: "GitHub Docs", url: "https://docs.github.com/en/actions" },
      { name: "Linux for Beginners", type: "Tutorial", platform: "LinuxCommand.org", url: "https://linuxcommand.org/" },
    ],
  },
  {
    id: "blockchain",
    label: "Blockchain",
    icon: <Link2 className="w-5 h-5" />,
    color: "text-cyan-500",
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
    resources: [
      { name: "Blockchain Basics", type: "Course", platform: "Coursera (Audit Free)", url: "https://www.coursera.org/learn/blockchain-basics" },
      { name: "Solidity by Example", type: "Docs", platform: "solidity-by-example.org", url: "https://solidity-by-example.org/" },
      { name: "CryptoZombies — Learn Solidity", type: "Tutorial", platform: "CryptoZombies", url: "https://cryptozombies.io/" },
      { name: "Ethereum Developer Docs", type: "Docs", platform: "ethereum.org", url: "https://ethereum.org/en/developers/" },
      { name: "Web3.University Free Courses", type: "Course", platform: "Web3 University", url: "https://www.web3.university/" },
    ],
  },
  {
    id: "embedded",
    label: "Embedded Systems",
    icon: <Cpu className="w-5 h-5" />,
    color: "text-slate-500",
    bg: "bg-slate-100 dark:bg-slate-900/30",
    resources: [
      { name: "Arduino Getting Started", type: "Docs", platform: "Arduino.cc", url: "https://www.arduino.cc/en/Guide" },
      { name: "Embedded Systems Roadmap", type: "Docs", platform: "roadmap.sh", url: "https://roadmap.sh/cpp" },
      { name: "C Programming Full Course", type: "YouTube", platform: "freeCodeCamp", url: "https://www.youtube.com/watch?v=KJgsSFOSQv0" },
      { name: "FreeRTOS Getting Started", type: "Docs", platform: "FreeRTOS.org", url: "https://www.freertos.org/Documentation/RTOS_book.html" },
      { name: "IoT with Raspberry Pi", type: "Tutorial", platform: "Raspberry Pi Foundation", url: "https://projects.raspberrypi.org/en/" },
    ],
  },
  {
    id: "gamedev",
    label: "Game Dev",
    icon: <Gamepad2 className="w-5 h-5" />,
    color: "text-violet-500",
    bg: "bg-violet-100 dark:bg-violet-900/30",
    resources: [
      { name: "Unity Learn", type: "Course", platform: "Unity Technologies", url: "https://learn.unity.com/" },
      { name: "Godot Engine Docs", type: "Docs", platform: "Godot Docs", url: "https://docs.godotengine.org/en/stable/" },
      { name: "CS50's Intro to Game Dev", type: "Course", platform: "Harvard / edX", url: "https://cs50.harvard.edu/games/" },
      { name: "Game Design Fundamentals", type: "Course", platform: "Coursera (Audit Free)", url: "https://www.coursera.org/learn/game-design" },
      { name: "Game Dev Roadmap", type: "Docs", platform: "roadmap.sh", url: "https://roadmap.sh/game-developer" },
    ],
  },
  {
    id: "uiux",
    label: "UI/UX Design",
    icon: <Palette className="w-5 h-5" />,
    color: "text-pink-500",
    bg: "bg-pink-100 dark:bg-pink-900/30",
    resources: [
      { name: "Google UX Design Certificate", type: "Course", platform: "Coursera (Audit Free)", url: "https://www.coursera.org/professional-certificates/google-ux-design" },
      { name: "Figma Beginner Course", type: "YouTube", platform: "Figma", url: "https://www.youtube.com/c/Figmadesign" },
      { name: "Laws of UX", type: "Docs", platform: "lawsofux.com", url: "https://lawsofux.com/" },
      { name: "Nielsen Norman Group Articles", type: "Docs", platform: "nngroup.com", url: "https://www.nngroup.com/articles/" },
      { name: "Refactoring UI", type: "Tutorial", platform: "refactoringui.com", url: "https://www.refactoringui.com/" },
    ],
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "text-orange-500",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    resources: [
      { name: "Google Digital Marketing Certificate", type: "Course", platform: "Google Skillshop", url: "https://skillshop.withgoogle.com/" },
      { name: "SEO Beginner's Guide", type: "Docs", platform: "Moz", url: "https://moz.com/beginners-guide-to-seo" },
      { name: "HubSpot Content Marketing", type: "Course", platform: "HubSpot Academy", url: "https://academy.hubspot.com/courses/content-marketing" },
      { name: "Meta Blueprint Free Courses", type: "Course", platform: "Meta Blueprint", url: "https://www.facebook.com/business/learn" },
      { name: "Google Analytics 4 Course", type: "Course", platform: "Google Analytics Academy", url: "https://analytics.google.com/analytics/academy/" },
    ],
  },
  {
    id: "content",
    label: "Content Creation",
    icon: <Video className="w-5 h-5" />,
    color: "text-fuchsia-500",
    bg: "bg-fuchsia-100 dark:bg-fuchsia-900/30",
    resources: [
      { name: "YouTube Creator Academy", type: "Course", platform: "YouTube", url: "https://creatoracademy.youtube.com/" },
      { name: "DaVinci Resolve Free Course", type: "YouTube", platform: "Casey Faris", url: "https://www.youtube.com/playlist?list=PLurUZr668jozlCjOR0cKd6JfJFiOr-k7c" },
      { name: "Canva Design School", type: "Course", platform: "Canva", url: "https://www.canva.com/designschool/" },
      { name: "Content Strategy Guide", type: "Docs", platform: "HubSpot Academy", url: "https://academy.hubspot.com/courses/content-marketing" },
      { name: "TikTok Creator Portal", type: "Docs", platform: "TikTok", url: "https://www.tiktok.com/creator-portal/" },
    ],
  },
  {
    id: "videoediting",
    label: "Video Editing",
    icon: <Video className="w-5 h-5" />,
    color: "text-red-500",
    bg: "bg-red-100 dark:bg-red-900/30",
    resources: [
      { name: "DaVinci Resolve Beginner Course", type: "YouTube", platform: "Blackmagic Design", url: "https://www.blackmagicdesign.com/products/davinciresolve/training" },
      { name: "Adobe Premiere Rush Tutorials", type: "Tutorial", platform: "Adobe", url: "https://helpx.adobe.com/premiere-rush/tutorials.html" },
      { name: "After Effects Basics", type: "YouTube", platform: "School of Motion", url: "https://www.schoolofmotion.com/free-after-effects" },
      { name: "Motion Design School (Free)", type: "Course", platform: "Motion Design School", url: "https://motiondesign.school/collections/free" },
      { name: "CapCut Video Editing Guide", type: "Tutorial", platform: "CapCut", url: "https://www.capcut.com/learn/" },
    ],
  },
  {
    id: "finance",
    label: "Finance & Quant",
    icon: <DollarSign className="w-5 h-5" />,
    color: "text-emerald-500",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
    resources: [
      { name: "Corporate Finance Institute (Free)", type: "Course", platform: "CFI", url: "https://corporatefinanceinstitute.com/free-courses/" },
      { name: "Python for Finance", type: "Tutorial", platform: "Kaggle", url: "https://www.kaggle.com/learn/intro-to-programming" },
      { name: "Investopedia Academy Articles", type: "Docs", platform: "Investopedia", url: "https://www.investopedia.com/financial-advisor-4427709" },
      { name: "CFA Institute Free Resources", type: "Docs", platform: "CFA Institute", url: "https://www.cfainstitute.org/membership/professional-development/refresher-readings" },
      { name: "QuantLib Documentation", type: "Docs", platform: "QuantLib", url: "https://www.quantlib.org/docs.shtml" },
    ],
  },
  {
    id: "healthit",
    label: "Health Informatics",
    icon: <Heart className="w-5 h-5" />,
    color: "text-rose-500",
    bg: "bg-rose-100 dark:bg-rose-900/30",
    resources: [
      { name: "Health Informatics on Coursera", type: "Course", platform: "Coursera (Audit Free)", url: "https://www.coursera.org/specializations/health-informatics" },
      { name: "FHIR for Developers", type: "Docs", platform: "HL7 FHIR", url: "https://www.hl7.org/fhir/documentation.html" },
      { name: "Health IT Workforce Curriculum", type: "Course", platform: "Oregon Health & Science Univ.", url: "https://www.ohsu.edu/health-informatics" },
      { name: "India Digital Health Mission Docs", type: "Docs", platform: "ABDM", url: "https://abdm.gov.in/publications" },
      { name: "Data Analytics in Healthcare", type: "YouTube", platform: "freeCodeCamp", url: "https://www.youtube.com/watch?v=E_V71Ejh3C0" },
    ],
  },
  {
    id: "bioinfo",
    label: "Bioinformatics",
    icon: <Microscope className="w-5 h-5" />,
    color: "text-green-500",
    bg: "bg-green-100 dark:bg-green-900/30",
    resources: [
      { name: "Bioinformatics Specialization", type: "Course", platform: "Coursera / UCSD", url: "https://www.coursera.org/specializations/bioinformatics" },
      { name: "Rosalind Bioinformatics Problems", type: "Tutorial", platform: "Rosalind.info", url: "http://rosalind.info/" },
      { name: "NCBI Learning Resources", type: "Docs", platform: "NCBI", url: "https://www.ncbi.nlm.nih.gov/education/" },
      { name: "BioPython Tutorial", type: "Docs", platform: "BioPython.org", url: "https://biopython.org/DIST/docs/tutorial/Tutorial.html" },
      { name: "Galaxy Training Network", type: "Tutorial", platform: "Galaxy Project", url: "https://training.galaxyproject.org/" },
    ],
  },
  {
    id: "legaltech",
    label: "Legal Tech",
    icon: <Scale className="w-5 h-5" />,
    color: "text-yellow-600",
    bg: "bg-yellow-100 dark:bg-yellow-900/30",
    resources: [
      { name: "Coursera Law for Entrepreneurs", type: "Course", platform: "Coursera (Audit Free)", url: "https://www.coursera.org/learn/law-for-entrepreneurs" },
      { name: "India GDPR / DPDP Act Guide", type: "Docs", platform: "meity.gov.in", url: "https://www.meity.gov.in/data-protection-framework" },
      { name: "GDPR Fundamentals", type: "Course", platform: "IAPP Free Resources", url: "https://iapp.org/resources/article/the-eu-general-data-protection-regulation/" },
      { name: "Legal Design Thinking", type: "Course", platform: "Stanford Legal Design Lab", url: "https://law.stanford.edu/organizations/pages/legal-design-lab/" },
      { name: "AI & Law Articles", type: "Docs", platform: "Harvard Law School", url: "https://hls.harvard.edu/areas-of-interest/technology-and-the-law/" },
    ],
  },
  {
    id: "hr",
    label: "HR Analytics",
    icon: <Users className="w-5 h-5" />,
    color: "text-slate-500",
    bg: "bg-slate-100 dark:bg-slate-900/30",
    resources: [
      { name: "People Analytics — Wharton", type: "Course", platform: "Coursera (Audit Free)", url: "https://www.coursera.org/learn/wharton-people-analytics" },
      { name: "SHRM Free HR Resources", type: "Docs", platform: "SHRM", url: "https://www.shrm.org/resources-and-tools" },
      { name: "HR Analytics with Excel", type: "YouTube", platform: "Leila Gharani", url: "https://www.youtube.com/c/LeilaGharani" },
      { name: "LinkedIn Talent Blog", type: "Docs", platform: "LinkedIn", url: "https://business.linkedin.com/talent-solutions/blog" },
      { name: "Workday Learning Videos", type: "Tutorial", platform: "Workday Community", url: "https://community.workday.com/learning" },
    ],
  },
  {
    id: "edtech",
    label: "EdTech",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/30",
    resources: [
      { name: "Instructional Design Fundamentals", type: "Course", platform: "Coursera (Audit Free)", url: "https://www.coursera.org/learn/instructional-design-foundations-applications" },
      { name: "Articulate 360 Free Trial Tutorials", type: "Tutorial", platform: "Articulate", url: "https://community.articulate.com/series/articulate-storyline-360" },
      { name: "Moodle for Educators", type: "Docs", platform: "Moodle.org", url: "https://docs.moodle.org/en/Teacher_quick_guide" },
      { name: "xAPI / Tin Can Overview", type: "Docs", platform: "xAPI.com", url: "https://xapi.com/overview/" },
      { name: "EdSurge — EdTech News & Research", type: "Docs", platform: "EdSurge", url: "https://www.edsurge.com/" },
    ],
  },
  {
    id: "sustainability",
    label: "Sustainability",
    icon: <Leaf className="w-5 h-5" />,
    color: "text-green-600",
    bg: "bg-green-100 dark:bg-green-900/30",
    resources: [
      { name: "Sustainability & Green Business", type: "Course", platform: "Coursera / Copenhagen Business School", url: "https://www.coursera.org/learn/sustainable-development" },
      { name: "GRI Standards Documentation", type: "Docs", platform: "Global Reporting Initiative", url: "https://www.globalreporting.org/standards/" },
      { name: "TCFD Recommendations", type: "Docs", platform: "TCFD", url: "https://www.fsb-tcfd.org/recommendations/" },
      { name: "SEBI BRSR Framework", type: "Docs", platform: "sebi.gov.in", url: "https://www.sebi.gov.in/sebi_data/meetingfiles/sep-2020/1600855571319_1.pdf" },
      { name: "ESG Explained — CFA Institute", type: "Docs", platform: "CFA Institute", url: "https://www.cfainstitute.org/en/research/esg-investing" },
    ],
  },
  {
    id: "product",
    label: "Product Management",
    icon: <Briefcase className="w-5 h-5" />,
    color: "text-orange-500",
    bg: "bg-orange-100 dark:bg-orange-900/30",
    resources: [
      { name: "Google Project Management Cert.", type: "Course", platform: "Coursera (Audit Free)", url: "https://www.coursera.org/professional-certificates/google-project-management" },
      { name: "PM Exercises & Frameworks", type: "Docs", platform: "productschool.com", url: "https://productschool.com/resources/product-management/" },
      { name: "Lenny's Newsletter", type: "Docs", platform: "Substack", url: "https://www.lennysnewsletter.com/" },
      { name: "SVPG Articles by Marty Cagan", type: "Docs", platform: "svpg.com", url: "https://www.svpg.com/articles/" },
      { name: "Mind the Product Community", type: "Course", platform: "mindtheproduct.com", url: "https://www.mindtheproduct.com/product-management-resources/" },
    ],
  },
];

const typeIcon: Record<string, React.ReactNode> = {
  "Course":   <BookOpen className="w-3.5 h-3.5" />,
  "YouTube":  <Youtube className="w-3.5 h-3.5 text-red-500" />,
  "Tutorial": <FileText className="w-3.5 h-3.5" />,
  "Docs":     <FileText className="w-3.5 h-3.5" />,
};

const typeBadge: Record<string, string> = {
  "Course":   "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "YouTube":  "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "Tutorial": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "Docs":     "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400",
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
            Handpicked free courses, tutorials, and documentation for every career path — no cost, no excuses.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2.5 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              data-testid={`resource-tab-${cat.id}`}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2 ${
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
                    <ExternalLink className="w-4 h-4 text-muted-foreground/50 group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  <h4 className="font-bold leading-snug">{res.name}</h4>
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
