import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Target, BookOpen, Users, Code, LineChart, Shield, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mx-auto lg:mx-0 font-medium text-sm">
              <Compass className="w-4 h-4" />
              <span>Your Journey Starts Here</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Future Career Path</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Explore careers, build skills, and achieve your dream profession with expert guidance. We help you navigate the complex world of modern careers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-4">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 text-lg group" onClick={() => scrollTo("#careers")}>
                Explore Careers
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-8 py-6 text-lg border-2" onClick={() => scrollTo("#quiz")}>
                Take Career Quiz
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50 mt-4">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-bold text-foreground">50+</span>
                <span className="text-sm text-muted-foreground">Career Paths</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-bold text-foreground">100+</span>
                <span className="text-sm text-muted-foreground">Resources</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-3xl font-bold text-foreground">10k+</span>
                <span className="text-sm text-muted-foreground">Students Guided</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Central element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 z-20">
                <Target className="w-12 h-12" />
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-[10%] left-[20%] w-16 h-16 glassmorphism rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3s' }}>
                <Code className="w-8 h-8 text-blue-500" />
              </div>
              
              <div className="absolute top-[20%] right-[10%] w-16 h-16 glassmorphism rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <LineChart className="w-8 h-8 text-emerald-500" />
              </div>
              
              <div className="absolute bottom-[20%] right-[20%] w-16 h-16 glassmorphism rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <Shield className="w-8 h-8 text-purple-500" />
              </div>
              
              <div className="absolute bottom-[10%] left-[15%] w-16 h-16 glassmorphism rounded-2xl flex items-center justify-center animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
                <Cloud className="w-8 h-8 text-sky-500" />
              </div>
              
              {/* Decorative dashed circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-dashed border-primary/30 animate-[spin_60s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] rounded-full border border-dashed border-muted-foreground/20 animate-[spin_90s_linear_infinite_reverse]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
