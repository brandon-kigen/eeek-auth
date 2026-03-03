import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Throbber from "@/components/Throbber";
import { resetPassword } from "@/modules/forgotPassword";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import { LockKeyhole, ArrowLeft } from "lucide-react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [resetting, setResetting] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (password: string) => {
    const resetUrl = new URL(window.location.href);
    setResetting(true);
    let response = await resetPassword(resetUrl, password);
    setResetting(false);
    if (response.status === 201) {
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground text-sm shadow-sm focus:ring-2 focus:ring-ring focus:outline-none transition-shadow";

  const passwordsMatch =
    passwordConfirmation !== "" && password === passwordConfirmation;
  const passwordsMismatch =
    passwordConfirmation !== "" && password !== passwordConfirmation;

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
              <LockKeyhole className="w-7 h-7 text-primary" />
            </div>

            <h1 className="font-heading text-2xl font-extrabold text-card-foreground text-center mb-2">
              Set New Password
            </h1>
            <p className="text-sm text-muted-foreground text-center mb-8 leading-relaxed">
              Choose a strong password with at least 12 characters, including
              uppercase, lowercase, numbers, and special characters.
            </p>

            <form
              id="resetPasswordForm"
              name="Reset"
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                handleReset(password);
              }}
            >
              <div>
                <label
                  htmlFor="password"
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2"
                >
                  New password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  minLength={12}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$"
                  maxLength={64}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  title="Characters allowed: @$!%*?&"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="password_assert"
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="password_assert"
                  id="password_assert"
                  value={passwordConfirmation}
                  minLength={12}
                  pattern={password}
                  maxLength={64}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                  className={inputClass}
                  style={
                    passwordConfirmation === ""
                      ? {}
                      : passwordsMatch
                        ? { borderColor: "hsl(142 71% 45%)" }
                        : { borderColor: "hsl(0 72% 51%)" }
                  }
                />
                {passwordsMatch && (
                  <p className="text-xs text-emerald-500 mt-1 font-medium">
                    Passwords match ✓
                  </p>
                )}
                {passwordsMismatch && (
                  <p className="text-xs text-destructive mt-1 font-medium">
                    Passwords don't match
                  </p>
                )}
              </div>

              <div className="pt-2">
                {resetting ? (
                  <div className="flex justify-center">
                    <Throbber />
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-primary text-primary-foreground text-sm font-bold
                               hover:opacity-90 transition-opacity shadow-sm"
                  >
                    Reset Password
                  </button>
                )}
              </div>
            </form>
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

export default ResetPassword;
