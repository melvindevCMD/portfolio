import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-sm text-primary mb-2">
            <span className="text-terminal-green">04.</span> Contact
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold font-body mb-4">
            Travaillons ensemble<span className="text-primary">.</span>
          </h3>
          <p className="text-muted-foreground max-w-lg mb-12">
            Vous avez un projet en tête ou simplement envie de discuter ? N'hésitez pas à me contacter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="font-mono text-xs text-muted-foreground block mb-1">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground block mb-1">Email</label>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <div>
              <label className="font-mono text-xs text-muted-foreground block mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Votre message..."
                className="w-full bg-secondary border border-border rounded-md px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center gap-2 bg-primary text-primary-foreground font-mono text-sm font-bold px-6 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Envoyer
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "alex@example.com" },
              { icon: Phone, label: "Téléphone", value: "+33 6 12 34 56 78" },
              { icon: MapPin, label: "Localisation", value: "Paris, France" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{label}</p>
                  <p className="text-foreground font-body">{value}</p>
                </div>
              </div>
            ))}

            {/* Terminal decoration */}
            <div className="mt-8 bg-card border border-border rounded-lg p-4 font-mono text-xs">
              <p className="text-muted-foreground">
                <span className="text-terminal-green">➜</span>{" "}
                <span className="text-primary">~</span> echo "Merci de votre visite !"
              </p>
              <p className="text-foreground mt-1">Merci de votre visite ! 🚀</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
