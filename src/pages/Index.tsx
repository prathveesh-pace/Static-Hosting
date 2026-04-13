import { motion } from "framer-motion";
import { GitBranch, Server, Shield, Zap, Terminal, Cloud, ArrowRight, Code2, Rocket, RefreshCw } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Mesh gradient background */}
    <div className="absolute inset-0 mesh-gradient" />
    
    {/* Animated orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] pulse-glow" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] pulse-glow" style={{ animationDelay: "1.5s" }} />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] pulse-glow" style={{ animationDelay: "3s" }} />

    {/* Grid lines */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
      backgroundSize: '60px 60px'
    }} />

    <div className="relative z-10 container mx-auto px-6 text-center">
      <motion.div initial="hidden" animate="visible" variants={stagger}>
        <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/30 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground font-body">The Future of Software Delivery</span>
        </motion.div>

        <motion.h1 variants={fadeUp} custom={1} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-6">
          Ship Faster.<br />
          <span className="gradient-text">Break Nothing.</span>
        </motion.h1>

        <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body">
          DevOps unifies development and operations into a single, automated pipeline. 
          Build, test, and deploy with confidence — at any scale.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent font-display font-semibold text-primary-foreground glow-pink hover:scale-105 transition-transform duration-200 flex items-center gap-2 justify-center">
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-lg border border-border bg-card/30 backdrop-blur-sm font-display font-semibold text-foreground hover:bg-card/60 transition-colors flex items-center gap-2 justify-center">
            <Terminal className="w-4 h-4" />
            View Docs
          </button>
        </motion.div>
      </motion.div>

      {/* Terminal window */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="mt-16 max-w-2xl mx-auto"
      >
        <div className="glass-card gradient-border overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full bg-primary/40" />
            <div className="w-3 h-3 rounded-full bg-secondary/40" />
            <span className="ml-2 text-xs text-muted-foreground font-body">pipeline.yml</span>
          </div>
          <div className="p-6 text-left font-mono text-sm">
            <div className="text-muted-foreground">
              <span className="text-secondary">stages</span>:
            </div>
            <div className="ml-4 text-muted-foreground">
              - <span className="text-primary">build</span>
            </div>
            <div className="ml-4 text-muted-foreground">
              - <span className="text-primary">test</span>
            </div>
            <div className="ml-4 text-muted-foreground">
              - <span className="text-primary">deploy</span>
            </div>
            <div className="mt-2 text-muted-foreground">
              <span className="text-secondary">deploy_prod</span>:
            </div>
            <div className="ml-4 text-muted-foreground">
              <span className="text-accent">environment</span>: production
            </div>
            <div className="ml-4 text-muted-foreground">
              <span className="text-accent">script</span>: ./deploy.sh
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span className="text-primary">✓</span>
              <span className="text-primary">Pipeline passed</span>
              <span className="text-muted-foreground">— 2m 34s</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const features = [
  { icon: GitBranch, title: "CI/CD Pipelines", description: "Automate your build, test, and deployment workflow with intelligent pipelines that never sleep.", color: "primary" },
  { icon: Cloud, title: "Cloud Native", description: "Deploy to any cloud provider. Kubernetes, serverless, or bare metal — your infrastructure, your rules.", color: "secondary" },
  { icon: Shield, title: "Security First", description: "Shift-left security with automated vulnerability scanning, SAST, and compliance-as-code built in.", color: "accent" },
  { icon: Server, title: "Infrastructure as Code", description: "Define your entire infrastructure in declarative code. Version it, review it, automate it.", color: "primary" },
  { icon: Zap, title: "Auto Scaling", description: "Intelligent auto-scaling that responds to real-time traffic patterns and resource utilization metrics.", color: "secondary" },
  { icon: RefreshCw, title: "Zero Downtime", description: "Blue-green deployments, canary releases, and rolling updates ensure your users never notice.", color: "accent" },
];

const colorMap: Record<string, string> = {
  primary: "text-primary glow-pink",
  secondary: "text-secondary glow-blue",
  accent: "text-accent glow-purple",
};

const iconBgMap: Record<string, string> = {
  primary: "bg-primary/10",
  secondary: "bg-secondary/10",
  accent: "bg-accent/10",
};

const FeaturesSection = () => (
  <section className="relative py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="text-center mb-16"
      >
        <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-bold mb-4">
          Everything You Need to <span className="gradient-text">Ship</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
          A complete DevOps toolkit designed for teams that move fast.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            custom={i}
            className="glass-card gradient-border p-8 group hover:bg-card/70 transition-colors duration-300"
          >
            <div className={`w-12 h-12 rounded-lg ${iconBgMap[f.color]} flex items-center justify-center mb-5`}>
              <f.icon className={`w-6 h-6 ${f.color === 'primary' ? 'text-primary' : f.color === 'secondary' ? 'text-secondary' : 'text-accent'}`} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-display">{f.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed">{f.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const pipelineSteps = [
  { icon: Code2, label: "Plan", desc: "Define requirements" },
  { icon: GitBranch, label: "Code", desc: "Write & review" },
  { icon: Zap, label: "Build", desc: "Compile & package" },
  { icon: Shield, label: "Test", desc: "Validate quality" },
  { icon: Rocket, label: "Deploy", desc: "Ship to production" },
];

const PipelineSection = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 mesh-gradient opacity-50" />
    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="text-center mb-20"
      >
        <motion.h2 variants={fadeUp} custom={0} className="text-4xl md:text-5xl font-bold mb-4">
          The <span className="gradient-text">Pipeline</span>
        </motion.h2>
        <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg max-w-xl mx-auto font-body">
          From idea to production in minutes, not months.
        </motion.p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0"
      >
        {pipelineSteps.map((step, i) => (
          <motion.div key={step.label} variants={fadeUp} custom={i} className="flex items-center gap-4 md:gap-0">
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 rounded-2xl glass-card gradient-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
                <step.icon className="w-8 h-8 text-primary" />
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="mt-3 font-display font-semibold text-foreground">{step.label}</span>
              <span className="text-xs text-muted-foreground font-body">{step.desc}</span>
            </div>
            {i < pipelineSteps.length - 1 && (
              <div className="hidden md:block w-16 h-px bg-gradient-to-r from-primary/60 via-accent/40 to-secondary/60 mx-2" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="relative py-32">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card gradient-border p-12 md:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Automate</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10 font-body">
            Join thousands of teams shipping better software, faster. Start your DevOps journey today.
          </p>
          <button className="group px-10 py-5 rounded-lg bg-gradient-to-r from-primary to-accent font-display font-semibold text-primary-foreground glow-pink hover:scale-105 transition-transform duration-200 text-lg flex items-center gap-3 mx-auto">
            Start Building
            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Terminal className="w-5 h-5 text-primary" />
        <span className="font-display font-bold text-foreground">DevOps<span className="text-primary">Hub</span></span>
      </div>
      <p className="text-sm text-muted-foreground font-body">© 2026 DevOpsHub. Ship fast, ship safe.</p>
    </div>
  </footer>
);

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-xl"
  >
    <div className="container mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Terminal className="w-5 h-5 text-primary" />
        <span className="font-display font-bold text-foreground">DevOps<span className="text-primary">Hub</span></span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-body">
        <a href="#" className="hover:text-foreground transition-colors">Features</a>
        <a href="#" className="hover:text-foreground transition-colors">Pipeline</a>
        <a href="#" className="hover:text-foreground transition-colors">Docs</a>
        <a href="#" className="hover:text-foreground transition-colors">Pricing</a>
      </div>
      <button className="px-5 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary font-display text-sm font-semibold hover:bg-primary/20 transition-colors">
        Sign In
      </button>
    </div>
  </motion.nav>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <FeaturesSection />
    <PipelineSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
