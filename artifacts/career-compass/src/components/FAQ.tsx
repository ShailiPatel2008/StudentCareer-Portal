import React from "react";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Which career has the highest demand in 2025?", a: "AI/ML Engineering, Data Science, and Cloud Computing are the top three most in-demand careers globally. Cybersecurity is also growing rapidly due to increasing digital threats. All these fields offer high salaries and excellent job security." },
  { q: "How do I become a Data Analyst with no experience?", a: "Start with Excel, then learn SQL for database queries, then Python (Pandas, NumPy) for data manipulation. Build 2–3 portfolio projects analyzing real datasets (use Kaggle datasets). Get the Google Data Analytics certificate on Coursera (free audit). Apply for entry-level roles and internships with your portfolio." },
  { q: "Is AI a good career choice for students in India?", a: "Absolutely. AI and Machine Learning are among the fastest-growing fields globally. India has a huge demand for AI engineers, with salaries ranging from ₹6 LPA for freshers to ₹30+ LPA for experienced professionals. Start with Python and mathematics, then progress to ML frameworks like TensorFlow and PyTorch." },
  { q: "Which programming language should I learn first?", a: "Python is the most recommended first language for most career paths — it's beginner-friendly, versatile, and in high demand for AI, data science, web, and automation. JavaScript is the best choice if you specifically want to build web applications. Both have excellent job markets." },
  { q: "How can I improve my resume with no work experience?", a: "Focus on projects, certifications, and freelance work. Build 3–5 solid projects relevant to your target role, host them on GitHub with good READMEs, and include live demos. Mention online courses and certifications. Contribute to open source. Even academic projects count if described with impact and technology." },
  { q: "What is the average salary for a fresh Software Developer in India?", a: "Fresh software developers in India typically earn ₹4–8 LPA at top service companies (TCS, Infosys, Wipro) and ₹8–20 LPA at product companies (Flipkart, Swiggy, Razorpay) and startups. FAANG offers ₹30–80 LPA+ for exceptional candidates. Location (Bangalore, Hyderabad, Pune) also affects compensation." },
  { q: "Do I need a B.Tech degree to get a tech job?", a: "While a B.Tech is preferred by many companies, it is not strictly required. BCA, BSc IT, and even non-CS degrees can lead to tech careers if you have strong skills, a solid portfolio, and relevant certifications. Many product companies focus more on skills and problem-solving than formal degrees." },
  { q: "What is DevOps and how do I get started?", a: "DevOps bridges software development and IT operations through automation, CI/CD pipelines, and infrastructure management. To get started: learn Linux and shell scripting, then Git, then Docker (containerization), then Kubernetes (orchestration), and a cloud platform (AWS/Azure). Get certified with AWS DevOps or Docker Certified Associate." },
  { q: "How long does it take to become job-ready as a developer?", a: "With consistent daily effort (4–6 hours/day), most students become job-ready in 6–12 months. The timeline varies: Frontend development (HTML+CSS+JS+React) takes 3–6 months; Full Stack adds 3–4 more months; ML/AI typically takes 9–15 months due to the mathematics foundation required." },
  { q: "What is the difference between UI design and UX design?", a: "UI (User Interface) Design focuses on the visual elements — colors, typography, buttons, icons, and layout. UX (User Experience) Design focuses on the overall experience — research, user flows, wireframing, usability testing, and information architecture. Most job roles combine both (UI/UX Designer). Tools: Figma is the industry standard." },
  { q: "Is cybersecurity a good career in India?", a: "Yes — cybersecurity is one of the fastest-growing fields with a massive talent shortage globally. India needs millions of cybersecurity professionals. Salaries range from ₹5–25 LPA. Entry paths include CompTIA Security+, CEH, or OSCP certifications combined with hands-on platforms like TryHackMe and HackTheBox." },
  { q: "What certifications are most valuable for freshers?", a: "For technology roles: AWS Cloud Practitioner, Google Data Analytics, Microsoft Azure Fundamentals, CompTIA Security+. For software development: Meta Front-End Developer (Coursera), IBM Full Stack Developer. For AI: DeepLearning.AI TensorFlow Developer. For marketing: Google Digital Marketing & E-Commerce." },
  { q: "Should I do an MBA after a technical degree?", a: "An MBA makes sense if you want to move into product management, consulting, tech leadership, or entrepreneurship. If your goal is to stay on the technical track, an MBA is not necessary — specialized M.Tech or industry certifications will serve you better. Consider the ROI carefully before investing 2 years and significant fees." },
  { q: "How important is DSA (Data Structures & Algorithms) for getting a job?", a: "DSA is critical for product-based companies (FAANG, startups, unicorns) — they have dedicated coding rounds. For service companies (TCS, Infosys), basic DSA sufficiency is enough. Practice on LeetCode (Easy/Medium) daily for at least 3 months. Aim for 100+ problems solved with a focus on arrays, strings, trees, graphs, and dynamic programming." },
  { q: "What is the best way to find internships as a student?", a: "Use LinkedIn (set 'Open to Opportunities'), Internshala, LetsIntern, AngelList, and company career pages. Build a strong GitHub profile first. Reach out to founders/engineers directly on LinkedIn with a personalized message. Attend hackathons and tech events. Cold email is surprisingly effective — 10 personalized emails beat 100 generic applications." },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary border-0 text-sm font-medium">
            FAQ
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Answers to the most common career questions from students like you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border/50 rounded-xl px-5 bg-card hover:border-primary/30 transition-colors"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger className="font-semibold text-left hover:no-underline py-4 gap-3">
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4 pl-7">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
