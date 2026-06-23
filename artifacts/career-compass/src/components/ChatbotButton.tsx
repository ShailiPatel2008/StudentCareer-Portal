import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, MessageCircle, Sparkles } from "lucide-react";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-card border border-border/50 rounded-2xl shadow-2xl overflow-hidden"
            data-testid="chatbot-panel"
          >
            <div className="bg-gradient-to-r from-primary to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-white">
                <Bot className="w-5 h-5" />
                <div>
                  <p className="font-semibold text-sm">Career AI Assistant</p>
                  <p className="text-xs text-white/70">Powered by AI</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close chatbot"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 flex flex-col items-center gap-4 text-center min-h-[200px] justify-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-bold mb-1">AI Chatbot Coming Soon</h4>
                <p className="text-sm text-muted-foreground">
                  Our career AI assistant is being integrated. It will answer your career questions, suggest roadmaps, and guide you 24/7.
                </p>
              </div>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary/40 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-purple-600 text-white shadow-lg hover:shadow-xl flex items-center justify-center"
        aria-label="Open career chatbot"
        data-testid="button-chatbot"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
