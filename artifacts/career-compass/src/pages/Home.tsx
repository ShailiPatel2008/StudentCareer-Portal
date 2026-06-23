import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import CareerPaths from "@/components/CareerPaths";
import SkillsRoadmap from "@/components/SkillsRoadmap";
import CareerQuiz from "@/components/CareerQuiz";
import HigherEducation from "@/components/HigherEducation";
import TrendingSkills from "@/components/TrendingSkills";
import ResumeTips from "@/components/ResumeTips";
import InterviewPrep from "@/components/InterviewPrep";
import FreeResources from "@/components/FreeResources";
import SuccessStories from "@/components/SuccessStories";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ChatbotButton from "@/components/ChatbotButton";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Mission />
        <CareerPaths />
        <SkillsRoadmap />
        <CareerQuiz />
        <HigherEducation />
        <TrendingSkills />
        <ResumeTips />
        <InterviewPrep />
        <FreeResources />
        <SuccessStories />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <ChatbotButton />
    </div>
  );
}
