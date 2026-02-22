import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Coffee, Rocket, Zap } from "lucide-react";

const stats = [
  { icon: Code2, value: "5+", label: "Années d'expérience" },
  { icon: Rocket, value: "30+", label: "Projets réalisés" },
  { icon: Coffee, value: "∞", label: "Cafés consommés" },
  { icon: Zap, value: "99%", label: "Code passionné" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">
            <span className="text-terminal-green">01.</span> À propos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-body mb-8">
            Qui suis-je<span className="text-primary">?</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              Développeur Full-Stack basé en France, je crée des applications web modernes et performantes. 
              Mon parcours m'a mené de la curiosité pour le code à une passion dévorante pour la création numérique.
            </p>
            <p>
              J'aime travailler avec des technologies de pointe, tout en gardant un code propre et maintenable. 
              Quand je ne code pas, vous me trouverez probablement en train d'explorer de nouvelles bibliothèques 
              open source ou de contribuer à la communauté.
            </p>
            <p className="font-mono text-sm text-primary">
              {">"} Toujours en train d'apprendre, toujours en train de construire.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="bg-card border border-border rounded-lg p-5 card-hover text-center"
              >
                <Icon className="text-primary mx-auto mb-2" size={24} />
                <p className="text-2xl font-bold font-mono gradient-text">{value}</p>
                <p className="text-xs text-muted-foreground mt-1">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
