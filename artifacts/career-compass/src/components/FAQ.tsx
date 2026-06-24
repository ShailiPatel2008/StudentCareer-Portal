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

  { q: "How do I become a Game Developer in India?", a: "Start by learning a game engine — Unity (C#) is best for beginners and mobile/PC games, while Unreal Engine (C++) is preferred for AAA titles. Learn the fundamentals of game design, physics, and animation. Build small games (clones, puzzle games, 2D platformers) and publish them on itch.io or the Play Store. A portfolio of shipped games matters far more than a degree in this field. Follow communities like GameDev.in and attend game jams." },
  { q: "Is Blockchain a realistic career path for students in 2025?", a: "Yes — demand for blockchain developers remains strong, especially in Web3, DeFi, and enterprise blockchain (Hyperledger). Learn Solidity for Ethereum smart contracts, then explore frameworks like Hardhat, Foundry, and tools like Metamask and IPFS. Salary ranges are high (₹8–35+ LPA) but the field is volatile — combine blockchain with strong core programming skills so you remain employable across cycles." },
  { q: "What qualifications do I need for Health Informatics?", a: "A background in either healthcare (MBBS, BPharma, BSc Nursing) or IT (B.Tech, BCA) works as a starting point. Specialized postgraduate courses in Health Informatics or Medical Informatics are offered by institutions like IIT and AIIMS. Key skills: EHR systems (Epic, OpenMRS), HL7/FHIR standards, SQL, Python for health data, and healthcare regulations (HIPAA, Indian Digital Health Mission)." },
  { q: "What is Bioinformatics and is it a good career in India?", a: "Bioinformatics combines biology, computer science, and data analysis to study genetic data, protein structures, and disease mechanisms. It's a growing field driven by genomics, drug discovery, and personalized medicine. To enter: study Python, R, and tools like BioPython, BLAST, and Galaxy. A BSc/MSc in Bioinformatics or a related field (Biotechnology + CS skills) is the typical entry path. IIT, BITS, and NCBS are top institutions in India." },
  { q: "How do I start a career as a Financial Analyst?", a: "A degree in Commerce (B.Com), Economics, Finance, or an MBA Finance is the common path. Develop strong skills in Excel (financial modelling), Python or R (for data-driven analysis), and tools like Bloomberg or Capital IQ. CFA (Chartered Financial Analyst) is the gold standard certification globally. Entry roles include equity research analyst, credit analyst, and investment banking analyst. IIM, NMIMS, and SP Jain are top institutions." },
  { q: "What does a Quantitative Analyst (Quant) do and how do I become one?", a: "Quants build mathematical and statistical models to price financial instruments, manage risk, and develop algorithmic trading strategies. It's one of the highest-paying roles in finance. Required skills: strong mathematics (calculus, linear algebra, probability, statistics), Python or C++, and financial theory. An M.Tech/PhD in Math, Physics, or Engineering from a top institution is typically required. Interning at hedge funds or trading firms is the best entry route." },
  { q: "What is Legal Tech and how do I enter this field?", a: "Legal Tech combines law and technology to automate legal processes, contract analysis, compliance, and e-discovery using AI tools. Entry paths: a law degree (LLB/LLM) combined with tech knowledge (Python basics, AI/ML awareness, data privacy law), OR a tech background with legal domain expertise. Skills in contract lifecycle management tools, e-signature platforms, and AI-driven legal research (like Harvey AI) are highly valued. This field is nascent in India but growing fast." },
  { q: "Can content creation be a stable career in India?", a: "Yes — content creation has become a legitimate career with creators earning from YouTube ad revenue, brand sponsorships, Patreon, courses, and affiliate marketing. The key is to niche down and build an audience in a specific domain (tech, finance, education, fitness). Most successful creators combine content with a professional skill (e.g., a developer who teaches coding). Consistency over 12–18 months is the critical success factor." },
  { q: "How do I become a Video Editor or Motion Designer?", a: "Learn Adobe Premiere Pro and After Effects for video editing and motion graphics. DaVinci Resolve is an excellent free alternative. Build a portfolio by editing YouTube videos, short films, or reels — even for free initially. Motion design skills (kinetic typography, logo animation, explainer videos) command higher rates. Platforms like Motion Array, Envato, and Fiverr are great for freelance work. Demand is very high from content creators and brands." },
  { q: "How do I transition into Product Management (PM) from engineering?", a: "Most PMs come from engineering, design, or business backgrounds. To transition: develop product sense by studying products you use daily (why certain features exist, what metrics they optimize). Get hands-on with tools like Jira, Figma, Mixpanel, and SQL. Read books like 'Inspired' by Marty Cagan. Pursue an MBA or a specialized PM course (Reforge, PM School). The key is to demonstrate cross-functional leadership — manage a side project, contribute to open-source product decisions, or lead initiatives in your current role." },
  { q: "What does HR & People Analytics involve and how do I enter this field?", a: "HR & People Analytics uses data to improve hiring, employee retention, performance management, and organizational culture. Entry paths: an MBA in HR combined with analytics skills (Excel, Power BI, Python basics, HRIS tools like SAP SuccessFactors or Workday). Companies are increasingly looking for HR professionals who can build dashboards to track attrition, engagement, and diversity metrics. XLRI, TISS, and SCMHRD are top HR institutes in India." },
  { q: "What is EdTech and how do I build a career in it?", a: "EdTech combines education expertise with technology to build e-learning platforms, digital curricula, and learning management systems (LMS). Roles include instructional designer, LMS developer, curriculum strategist, and edtech product manager. Skills needed: understanding of pedagogy and learning design, tools like Articulate Storyline, Moodle, and Canvas, and product skills. With India's massive online education market (BYJU'S, Unacademy, PhysicsWallah era), EdTech careers are well-paying and growing." },
  { q: "What is Embedded Systems Engineering and what skills do I need?", a: "Embedded Systems Engineers program microcontrollers and processors that run inside hardware devices — from smartwatches to cars to medical devices. Key skills: C/C++ programming, microcontrollers (Arduino, STM32, ESP32), RTOS (Real-Time Operating Systems), protocols (I2C, SPI, UART, CAN), and hardware debugging tools like oscilloscopes. A B.Tech in Electronics, ECE, or EEE is the typical starting point. Automotive (ADAS, EV), IoT, and aerospace are top hiring sectors." },
  { q: "Is Sustainability Analysis a viable career path for students?", a: "Yes and growing fast. ESG (Environmental, Social, Governance) reporting has become mandatory for large companies in many countries, creating demand for sustainability analysts. Skills needed: understanding of sustainability frameworks (GRI, SASB, TCFD), carbon accounting, Excel/Power BI for ESG data, and basic knowledge of environmental regulations. A background in Environmental Science, Engineering, or MBA Sustainability works well. IIM Ahmedabad, TERI University, and ISB offer relevant programs." },
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
