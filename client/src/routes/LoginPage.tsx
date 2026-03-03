import { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "@/components/LoginForm";
import ButtonAndError from "@/components/ButtonAndError";
import GoogleSignIn from "@/components/GoogleSignIn";
import LinkedInSignIn from "@/components/LinkedInSignIn";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import weee2Img from "@/assets/images/WEEE2.jpeg";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <div className="h-screen overflow-hidden bg-background text-foreground flex flex-col">
      <div className="flex-1 grid lg:grid-cols-2">
        {/* ── Left: branded image panel ── */}
        <div className="hidden lg:flex relative overflow-hidden">
          <img
            src={weee2Img}
            alt="Electronic waste ready for recycling"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-primary/40" />
          {/* Content over image */}
          <div className="relative z-10 flex flex-col justify-between p-10 xl:p-14 w-full">
            <Link
              to="/"
              className="font-heading text-3xl font-extrabold text-white tracking-tight"
            >
              eeek!
            </Link>
            <div>
              <h2 className="font-heading text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4">
                Responsible
                <br />
                recycling
                <br />
                <span className="text-primary">starts here.</span>
              </h2>
              <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                Log in to manage pickups, track your environmental impact, and
                access your certificates of data destruction.
              </p>
            </div>
            <p className="text-white/30 text-xs">
              © eeek!-inc {new Date().getFullYear()}
            </p>
          </div>
        </div>

        {/* ── Right: form panel ── */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between p-4 sm:p-6">
            {/* Mobile logo */}
            <Link
              to="/"
              className="font-heading text-2xl font-extrabold text-primary lg:invisible"
            >
              eeek!
            </Link>
            <ThemeToggle />
          </div>

          <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 py-10">
            <div className="w-full max-w-sm">
              <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-foreground mb-1">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground mb-8">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-semibold text-primary hover:opacity-80 transition-opacity"
                >
                  Sign up
                </Link>
              </p>

              <LoginForm
                className="w-full"
                setLoading={setLoading}
                setLoggedIn={setLoggedIn}
                setError={setError}
                setErrorMsg={setErrorMsg}
                error={error}
                errorMsg={errorMsg}
                loading={loading}
              />

              <div className="mt-4">
                <ButtonAndError
                  loading={loading}
                  errorMsg={errorMsg}
                  error={error}
                  loggedIn={loggedIn}
                />
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="px-3 bg-background text-muted-foreground">
                    or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <GoogleSignIn setLoggedIn={setLoggedIn} />
                <LinkedInSignIn setLoggedIn={setLoggedIn} />
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
