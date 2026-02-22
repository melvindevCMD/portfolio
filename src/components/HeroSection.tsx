import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const TypeWriter = ({ text, delay = 80 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, delay);
    return () => clearInterval(interval);
  }, [text, delay]);

  return (
    <span>
      {displayed}
      <span className={`inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle ${done ? "animate-blink" : ""}`} />
    </span>
  );
};

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(174 80% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(174 80% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          {/* Terminal header */}
          <div className="bg-secondary rounded-t-lg border border-border px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <div className="w-3 h-3 rounded-full" style={{ background: "hsl(45 90% 50%)" }} />
            <div className="w-3 h-3 rounded-full bg-terminal-green" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">~/portfolio</span>
          </div>

          {/* Terminal body */}
          <div className="bg-card border border-t-0 border-border rounded-b-lg p-6 md:p-8">
            <p className="font-mono text-sm text-muted-foreground mb-4">
              <span className="text-terminal-green">➜</span> <span className="text-primary">~</span> cat intro.txt
            </p>

            <h1 className="text-4xl md:text-6xl font-bold font-body mb-2">
              <TypeWriter text="Bonjour, je suis" delay={60} />
            </h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold gradient-text mb-6"
            >
              Alex Dupont
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
              className="font-mono text-base md:text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              <span className="text-comment">// </span>
              Développeur Full-Stack passionné par le code propre,
              <br className="hidden md:block" />
              <span className="text-comment">// </span>
              les interfaces modernes et l'open source.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-md font-mono text-sm text-foreground hover:border-primary hover:text-primary transition-all duration-300 hover:border-glow"
                >
                  <Icon size={16} />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown className="text-primary" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
