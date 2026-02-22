import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 75 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "Docker", level: 78 },
    ],
  },
  {
    title: "Outils & Autres",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "CI/CD", level: 82 },
      { name: "Linux", level: 85 },
      { name: "Figma", level: 70 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between font-mono text-sm mb-1">
        <span className="text-foreground">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, hsl(174 80% 50%), hsl(142 70% 50%))",
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="competences" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">
            <span className="text-terminal-green">02.</span> Compétences
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-body mb-12">
            Stack technique<span className="text-primary">.</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h4 className="font-mono text-primary text-sm mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cat.title}
              </h4>
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={0.2 + si * 0.1}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
