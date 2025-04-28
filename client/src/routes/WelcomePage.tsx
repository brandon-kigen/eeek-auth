import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Truck,
  ShieldCheck,
  Recycle,
  ClipboardCheck,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Create Your Profile",
    description:
      "Tell us about yourself or your organisation — individual, SME or enterprise. We'll tailor the experience to your needs.",
    badge: "Step 1",
  },
  {
    icon: Truck,
    title: "Schedule a Pickup",
    description:
      "Enter your address and list the items you want recycled. We'll arrange a free collection for batches over 50 kg, or show you the nearest drop-off point.",
    badge: "Step 2",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Handling",
    description:
      "Select data destruction preferences — software overwrite, degaussing or physical shredding. We provide a certificate of destruction for every device.",
    badge: "Step 3",
  },
  {
    icon: Recycle,
    title: "Track & Certify",
    description:
      "Monitor your items through every stage — from collection to material recovery. Receive your environmental impact report and compliance certificate.",
    badge: "Step 4",
  },
];

const WelcomePage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Strip OAuth code params from URL
  useEffect((): void => {
    if (window.location.href.includes("code")) {
      window.location.href = window.location.origin + window.location.pathname;
    }
  }, []);

  const Icon = steps[currentStep].icon;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-border/50 glass">
        <Link
          to="/"
          className="font-heading text-2xl font-extrabold text-primary tracking-tight"
        >
          eeek!
        </Link>
        <ThemeToggle />
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
        {/* Hero greeting */}
        <div className="animate-fade-in text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            You're in
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Welcome to <span className="text-primary">eeek!</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-lg mx-auto">
            Let's get you set up to start recycling responsibly. Here's how it
            works:
          </p>
        </div>

        <div className="w-full max-w-3xl">
          {/* Progress tracker */}
          <div className="flex items-center gap-0 mb-8 sm:mb-12 px-2">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center flex-1">
                <button
                  onClick={() => setCurrentStep(i)}
                  className={`relative flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    i < currentStep
                      ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                      : i === currentStep
                        ? "bg-primary text-primary-foreground ring-4 ring-primary/30 scale-110"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i < currentStep ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    i + 1
                  )}
                </button>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-1 transition-colors duration-500 ${
                      i < currentStep ? "bg-primary" : "bg-border"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step card */}
          <div
            className="bg-card border border-border rounded-2xl p-7 sm:p-10 shadow-sm animate-scale-in"
            key={currentStep}
          >
            {/* Badge + icon row */}
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex-shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                {steps[currentStep].badge}
              </span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-card-foreground mb-3">
              {steps[currentStep].title}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {steps[currentStep].description}
            </p>
          </div>

          {/* Step labels — small screen tray */}
          <div className="hidden sm:flex justify-between px-2 mt-3">
            {steps.map((step, i) => (
              <p
                key={i}
                className={`text-xs font-medium transition-colors duration-200 ${
                  i === currentStep ? "text-primary" : "text-muted-foreground"
                }`}
                style={{ width: `${100 / steps.length}%`, textAlign: "center" }}
              >
                {step.title}
              </p>
            ))}
          </div>

          {/* Nav buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-5 py-2.5 rounded-xl border border-border text-foreground text-sm font-semibold
                         hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Back
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold
                           hover:opacity-90 transition-opacity"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                to="/signup"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold
                           hover:opacity-90 transition-opacity"
              >
                Complete Setup <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WelcomePage;
