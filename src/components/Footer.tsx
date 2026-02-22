import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground">
        <span className="text-primary">©</span> 2025 Alex Dupont — Fait avec{" "}
        <span className="text-primary">♥</span> et beaucoup de{" "}
        <span className="text-terminal-green">café</span>
      </p>
      <div className="flex items-center gap-4">
        {[Github, Linkedin, Twitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
