import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { sendOTP } from "@/modules/forgotPassword";
import Throbber from "@/components/Throbber";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import { Mail, ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [sentOTP, setSentOTP] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleOTPRequest = async (email: string) => {
    setSentOTP(true);
    setLoading(true);
    let response = await sendOTP(email);
    setLoading(false);
    if (response.status === 202) {
      setTimeout(() => {
        navigate("/forgot-password/verify-reset");
      }, 3000);
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-background text-foreground flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-4 border-b border-border/50">
        <Link
          to="/"
          className="font-heading text-2xl font-extrabold text-primary"
        >
          eeek!
        </Link>
        <ThemeToggle />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-sm">
          {/* Card */}
          <div className="bg-card border border-border rounded-2xl shadow-sm p-8 sm:p-10">
            {/* Icon header */}
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-7 h-7 text-primary" />
            </div>

            <h1 className="font-heading text-2xl font-extrabold text-card-foreground text-center mb-2">
              Forgot Password?
            </h1>
            <p className="text-sm text-muted-foreground text-center mb-8 leading-relaxed">
              Enter the{" "}
              <span className="font-semibold text-foreground">
                email address
              </span>{" "}
              registered to your account and we'll send you a one-time code.
            </p>

            {!sentOTP ? (
              <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="recoveryEmail"
                    className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2"
                  >
                    Email address
                  </label>
                  <input
                    value={email}
                    id="recoveryEmail"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm
                               shadow-sm focus:ring-2 focus:ring-ring focus:outline-none transition-shadow placeholder:text-muted-foreground/50"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleOTPRequest(email)}
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold
                             hover:opacity-90 transition-opacity shadow-sm"
                >
                  Send Reset Code
                </button>
              </div>
            ) : loading ? (
              <div className="flex justify-center py-4">
                <Throbber />
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 text-center py-2">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon
                      fill="hsl(142 71% 45%)"
                      points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                    />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A code has been sent to your email. It expires in{" "}
                  <strong className="text-foreground">15 minutes</strong>.
                  Redirecting you…
                </p>
              </div>
            )}
          </div>

          {/* Back link */}
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Return to log in
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
