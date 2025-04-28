import { Link } from "react-router-dom";
import privacyImg from "@/assets/images/privacy.png";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    {/* Main footer row */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {/* Brand */}
        <div>
          <Link
            to="/"
            className="font-heading text-2xl font-extrabold text-primary mb-3 block"
          >
            eeek!
          </Link>
          <p className="text-xs text-secondary-foreground/50 leading-relaxed max-w-xs">
            Responsible e-waste recycling for individuals, SMEs and enterprises.
            Zero-landfill policy. Certified data destruction.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/40 mb-4">
            Navigation
          </p>
          <ul className="space-y-2">
            {[
              ["Our Process", "/#process"],
              ["Certifications", "/#certifications"],
              ["Why eeek!", "/#why"],
              ["Log In", "/login"],
              ["Sign Up", "/signup"],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary-foreground/40 mb-4">
            Legal
          </p>
          <ul className="space-y-2">
            {[
              "Terms of Use",
              "Privacy Policy",
              "Cookie Policy",
              "Give Feedback",
            ].map((item) => (
              <li key={item}>
                <span className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors cursor-pointer">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-secondary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary-foreground/40">
        <p>© eeek!-inc {new Date().getFullYear()}. All rights reserved.</p>
        <span className="flex items-center gap-1.5">
          <img src={privacyImg} className="h-3 inline" alt="" />
          Your Privacy Rights
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
