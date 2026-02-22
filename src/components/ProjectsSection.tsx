import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce API",
    description: "API RESTful complète pour une plateforme e-commerce avec authentification JWT, gestion des commandes et paiements Stripe.",
    tags: ["Node.js", "Express", "PostgreSQL", "Stripe"],
  },
  {
    title: "Dashboard Analytics",
    description: "Tableau de bord interactif avec visualisation de données en temps réel, graphiques dynamiques et export PDF.",
    tags: ["React", "TypeScript", "D3.js", "Tailwind"],
  },
  {
    title: "Chat Application",
    description: "Application de messagerie temps réel avec WebSockets, notifications push et chiffrement de bout en bout.",
    tags: ["Next.js", "Socket.io", "Redis", "Docker"],
  },
  {
    title: "CLI DevTools",
    description: "Suite d'outils en ligne de commande pour automatiser les workflows de développement et le déploiement.",
    tags: ["Python", "Click", "Shell", "CI/CD"],
  },
  {
    title: "Portfolio Générateur",
    description: "Générateur de sites portfolio à partir de fichiers Markdown avec thèmes personnalisables et déploiement automatique.",
    tags: ["React", "MDX", "Vercel", "Tailwind"],
  },
  {
    title: "Task Manager",
    description: "Application de gestion de tâches avec drag-and-drop, filtres avancés et intégration calendrier.",
    tags: ["Vue.js", "Vuex", "Firebase", "PWA"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projets" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">
            <span className="text-terminal-green">03.</span> Projets
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-body mb-12">
            Ce que j'ai construit<span className="text-primary">.</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 card-hover flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="text-primary" size={28} />
                <div className="flex items-center gap-3">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <h4 className="text-lg font-bold font-body mb-2 text-foreground">{project.title}</h4>
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
