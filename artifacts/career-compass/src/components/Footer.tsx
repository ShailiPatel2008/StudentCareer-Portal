import React from "react";
import { Compass, Linkedin, Twitter, Github, Youtube, Heart } from "lucide-react";

const quickLinks = [
  { name: "Career Paths", href: "#careers" },
  { name: "Skill Roadmaps", href: "#roadmaps" },
  { name: "Career Quiz", href: "#quiz" },
  { name: "Higher Education", href: "#education" },
  { name: "Trending Skills", href: "#skills" },
  { name: "Resume Tips", href: "#resume" },
  { name: "Interview Prep", href: "#interview" },
  { name: "Free Resources", href: "#resources" },
];

const socials = [
  { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <Github className="w-4 h-4" />, href: "#", label: "GitHub" },
  { icon: <Youtube className="w-4 h-4" />, href: "#", label: "YouTube" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground/[0.02] border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">Career Compass</span>
            </div>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Empowering students across India with career knowledge, skill roadmaps, and guidance to make confident career decisions.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  data-testid={`footer-social-${s.label.toLowerCase()}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-1.5">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left py-0.5"
                  data-testid={`footer-link-${link.name.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>hello@careercompass.in</p>
              <p>+91 98765 43210</p>
              <p className="mt-4 leading-relaxed">
                Career Compass<br />
                Empowering Student Futures<br />
                India
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Career Compass. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" /> for students across India
          </p>
        </div>
      </div>
    </footer>
  );
}
