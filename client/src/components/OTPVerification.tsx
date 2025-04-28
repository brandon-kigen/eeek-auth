import { useState } from "react";
import { Link } from "react-router-dom";
import { verifyOTP } from "@/modules/forgotPassword";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import { KeyRound, ArrowLeft } from "lucide-react";

const OTPVerification = () => {
  const [sentOTP, setSentOTP] = useState(false);
  const [oTP, setOTP] = useState("");

  const handleOTPRequest = async (oTP: string) => {
    setSentOTP(true);
    let response = await verifyOTP(oTP);
    return response;
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
          <div className="bg-card border border-border rounded-2xl shadow-sm p-8 sm:p-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 mx-auto">
              <KeyRound className="w-7 h-7 text-primary" />
            </div>

            <h1 className="font-heading text-2xl font-extrabold text-card-foreground text-center mb-2">
              Enter Your Code
            </h1>
            <p className="text-sm text-muted-foreground text-center mb-8 leading-relaxed">
              We emailed you a verification code. Enter it below to continue.
            </p>

            {!sentOTP ? (
              <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="OTP"
                    className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2"
                  >
                    Verification code
                  </label>
                  <input
                    value={oTP}
                    id="OTP"
                    type="text"
                    name="OTP"
                    onChange={(e) => setOTP(e.target.value)}
                    placeholder="······"
                    className="w-full px-4 py-4 rounded-xl border border-input bg-background text-foreground text-xl font-bold text-center
                               tracking-[0.5em] shadow-sm focus:ring-2 focus:ring-ring focus:outline-none transition-shadow placeholder:text-muted-foreground/30 placeholder:tracking-widest"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleOTPRequest(oTP)}
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold
                             hover:opacity-90 transition-opacity shadow-sm"
                >
                  Verify Code
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 text-center py-2">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon
                      fill="hsl(var(--primary))"
                      points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                    />
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A{" "}
                  <strong className="text-foreground">
                    password reset link
                  </strong>{" "}
                  has been sent to your email. It expires in{" "}
                  <strong className="text-foreground">15 minutes</strong>.
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to log in
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OTPVerification;
