import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Recycle,
  Shield,
  Truck,
  HardDrive,
  Wrench,
  Factory,
  FileCheck,
  Cpu,
  Monitor,
  Battery,
  Smartphone,
  Server,
  Award,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import weeeImg from "@/assets/images/WEEE.jpg";
import weee2Img from "@/assets/images/WEEE2.jpeg";

/* ── Process stages — expertise cards ── */
const stages = [
  {
    icon: Truck,
    title: "Collection & Logistics",
    details:
      "Take-back programmes, corporate pickups and regional collection centres securely gather obsolete electronics from offices, retailers and consumers.",
  },
  {
    icon: HardDrive,
    title: "Sorting & Data Destruction",
    details:
      "Electronics are categorised by type. Certified data sanitisation — software overwrites, degaussing or physical shredding — renders all data permanently unrecoverable.",
  },
  {
    icon: Wrench,
    title: "Dismantling & Processing",
    details:
      "Trained staff disassemble devices, separating batteries, circuit boards, screens and casings. Functional components are salvaged for refurbishment.",
  },
  {
    icon: Factory,
    title: "Recycling & Material Extraction",
    details:
      "Mechanical shredding, magnetic separation, eddy currents and density separation recover ferrous metals, aluminium, plastics and precious metals like gold and copper.",
  },
  {
    icon: Shield,
    title: "Hazardous Material Handling",
    details:
      "Lead from CRTs, mercury from switches and other toxins are isolated and treated according to strict environmental regulations to prevent soil and water contamination.",
  },
  {
    icon: Recycle,
    title: "Refurbishment & Re-commerce",
    details:
      "Working electronics are cleaned, repaired and resold or donated — maximising product lifespan and diverting waste from landfill to create a true circular economy.",
  },
];

const certifications = [
  {
    name: "R2 Certified",
    badge: "R2",
    desc: "Responsible Recycling — the global standard for electronics recyclers ensuring safe, secure and environmentally responsible practices.",
    icon: Award,
    color: "from-cyan-500/10 to-teal-500/10",
  },
  {
    name: "e-Stewards",
    badge: "eS",
    desc: "The highest standard for ethical e-waste recycling, prohibiting export of hazardous waste to developing nations.",
    icon: Shield,
    color: "from-emerald-500/10 to-cyan-500/10",
  },
  {
    name: "ISO 14001",
    badge: "14K",
    desc: "Environmental management certification demonstrating ongoing commitment to minimising our carbon and chemical footprint.",
    icon: CheckCircle,
    color: "from-teal-500/10 to-sky-500/10",
  },
  {
    name: "ISO 27001",
    badge: "27K",
    desc: "Information security management certification guaranteeing your data is handled and destroyed to the highest security standards.",
    icon: FileCheck,
    color: "from-sky-500/10 to-indigo-500/10",
  },
];

const acceptedItems = [
  { icon: Monitor, label: "Monitors & TVs" },
  { icon: Cpu, label: "Computers & Laptops" },
  { icon: Smartphone, label: "Mobile Devices" },
  { icon: Server, label: "Servers & Networking" },
  { icon: Battery, label: "Batteries & UPS" },
  { icon: HardDrive, label: "Storage & Drives" },
];

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* ═══ NAVBAR ═══ */}
      <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-heading text-2xl font-extrabold text-primary tracking-tight"
          >
            eeek!
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#process"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Our Process
            </a>
            <a
              href="#certifications"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Certifications
            </a>
            <a
              href="#why"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Why eeek!
            </a>
            <ThemeToggle />
            <Link
              to="/login"
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-200 glow-pulse shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-border/50 px-6 py-4 flex flex-col gap-4 animate-fade-in">
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Our Process
            </a>
            <a
              href="#certifications"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Certifications
            </a>
            <a
              href="#why"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Why eeek!
            </a>
            <div className="pt-2 border-t border-border flex gap-3">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2 text-sm font-semibold border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative pt-16 min-h-screen flex items-center">
        {/* Full-width prominent background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${weee2Img})`,
          }}
        />
        {/* Gradient overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent dark:from-background dark:via-background/90 dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          {/* Hero Copy */}
          <div className="animate-fade-in-left max-w-2xl">
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight text-foreground">
              Turn
              <br />
              <span className="text-primary">E-Waste</span>
              <br />
              Into Impact.
            </h1>

            <p className="mt-7 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Old TVs? Obsolete servers? We responsibly re-purpose your
              electronics — keeping hazardous components out of landfill and
              creating a{" "}
              <span className="text-foreground font-medium">
                circular economy
              </span>{" "}
              where every gram gets a second life.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-200 animate-glow-pulse shadow-lg"
              >
                Schedule a Pickup <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#process"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-border text-foreground font-semibold hover:bg-muted hover:border-primary/40 transition-all duration-200"
              >
                See How It Works
              </a>
            </div>

            {/* Social proof micro-stats */}
            <div className="mt-12 flex flex-wrap gap-6 sm:gap-10">
              {[
                ["12K+", "Tonnes recycled"],
                ["99.7%", "Data destruction rate"],
                ["350+", "Corporate partners"],
              ].map(([stat, label]) => (
                <div key={label}>
                  <p className="font-heading text-2xl font-extrabold text-primary">
                    {stat}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ═══ PARTNERS CAROUSEL ═══ */}
      <section className="relative bg-secondary text-secondary-foreground py-12 overflow-hidden border-y border-border/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8 text-center">
          <p className="text-sm font-semibold text-secondary-foreground/60 uppercase tracking-widest">
            Trusted by forward-thinking companies
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative w-full overflow-hidden flex whitespace-nowrap">
          {/* Gradient masks for smooth edge fading */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

          {/* Animated track — duplicated content for seamless looping */}
          <div className="flex animate-scroll-left w-max">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="flex gap-16 sm:gap-24 items-center px-8 sm:px-12"
              >
                {[Factory, Shield, Truck, HardDrive, Cpu, Server, Monitor].map(
                  (Icon, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                    >
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-secondary-foreground" />
                      <span className="font-heading text-xl sm:text-2xl font-bold">
                        Partner {j + 1}
                      </span>
                    </div>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EXPERTISE — STATIC CARDS ═══ */}
      <section id="process" className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fade-in">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">
              Our Process
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-card-foreground mt-2">
              From Collection to Certification
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              A structured, multi-stage process to safely manage, disassemble,
              recycle and repurpose old electronics — creating a true circular
              economy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {stages.map((stage, i) => (
              <div
                key={stage.title}
                className="group relative bg-background rounded-2xl border border-border p-6 sm:p-7
                           hover:border-primary/50 hover:shadow-xl hover:-translate-y-1
                           transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
                  }}
                />
                {/* Accent top bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-5 group-hover:bg-primary/20 transition-colors duration-200">
                    <stage.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-card-foreground mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stage.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ACCEPTED ITEMS ═══ */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">
              What We Accept
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2">
              Drop Off Any Electronic Waste
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              We handle every category of e-waste — from consumer gadgets to
              enterprise infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {acceptedItems.map((item) => (
              <div
                key={item.label}
                className="group flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-card border border-border
                            hover:border-primary/50 hover:shadow-lg hover:-translate-y-1
                           transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-center text-card-foreground leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CERTIFICATIONS ═══ */}
      <section id="certifications" className="py-20 sm:py-28 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fade-in">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-4">
              Compliance
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-card-foreground mt-2">
              Certified & Trusted
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              We hold the industry's most rigorous certifications, guaranteeing
              your electronics are processed safely, securely and responsibly.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${cert.color} border border-border
                            hover:border-primary/60 hover:shadow-xl hover:-translate-y-1
                            transition-all duration-300 overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 -mr-4 -mt-4 rounded-full bg-primary/5 blur-xl group-hover:bg-primary/15 transition-colors duration-300" />
                <div className="relative">
                  {/* Badge */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border-2 border-primary/30 bg-background mb-5 shadow-sm group-hover:border-primary/60 transition-colors duration-200">
                    <span className="font-heading text-lg font-extrabold text-primary">
                      {cert.badge}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-card-foreground mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY eeek! — IMAGE SPLIT ═══ */}
      <section id="why" className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-left">
            <div className="absolute -inset-3 rounded-3xl bg-primary/8 blur-2xl" />
            <img
              src={weeeImg}
              alt="E-waste collection facility"
              className="relative rounded-2xl shadow-xl object-cover w-full max-h-[480px] border border-border/60"
              style={{ aspectRatio: "4/3" }}
            />
            {/* Overlay gradient on image */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          {/* Copy */}
          <div className="animate-fade-in-right">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 mb-6">
              Why eeek!
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-2">
              Responsible Recycling,
              <br />
              <span className="text-primary">Simplified.</span>
            </h2>
            <ul className="mt-8 space-y-5">
              {[
                [
                  "Certified data destruction with documented proof",
                  "Every device comes with a certificate of destruction.",
                ],
                [
                  "Zero-landfill commitment — every gram is accounted for",
                  "We trace materials from collection to final recovery.",
                ],
                [
                  "Free corporate pickup for batches over 50 kg",
                  "Logistics handled, no disruption to your operations.",
                ],
                [
                  "Transparent tracking from collection to certificate",
                  "Real-time visibility into the entire recycling journey.",
                ],
              ].map(([title, sub]) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {sub}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              to="/signup"
              className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-200 shadow-lg"
            >
              Join eeek! <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ═══ */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-secondary">
        {/* Background glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-primary/20 text-primary border border-primary/30 mb-6">
            Get Started Today
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary-foreground">
            Ready to Recycle Responsibly?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-secondary-foreground/70 max-w-xl mx-auto">
            Schedule a free pickup or find a drop-off point near you. Every
            device recycled with eeek! comes with a certificate of destruction.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-all duration-200 glow-primary shadow-lg inline-flex items-center justify-center gap-2"
            >
              Create Account <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 rounded-xl border border-secondary-foreground/20 text-secondary-foreground font-bold text-sm hover:bg-secondary-foreground/10 transition-colors inline-flex items-center justify-center"
            >
              Log In
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
