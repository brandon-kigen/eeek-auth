import { useState } from "react";
import { Link } from "react-router-dom";
import SignupForm from "@/components/SignupForm";
import ButtonAndError from "@/components/ButtonAndError";
import GoogleSignIn from "@/components/GoogleSignIn";
import LinkedInSignIn from "@/components/LinkedInSignIn";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              Log in
            </Link>
          </span>
          <ThemeToggle />
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-start px-4 sm:px-6 py-10 sm:py-14">
        <div className="w-full max-w-2xl">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground mb-2">
              Create your account
            </h1>
            <p className="text-sm text-muted-foreground">
              Join thousands of businesses recycling responsibly with eeek!
            </p>
          </div>

          {/* Social sign-up */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <GoogleSignIn setSignedUp={setSignedUp} />
            <LinkedInSignIn setSignedUp={setSignedUp} />
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="px-3 bg-background text-muted-foreground">
                or sign up with email
              </span>
            </div>
          </div>

          {/* Form card */}
          <div className="bg-card border border-border rounded-2xl shadow-sm p-6 sm:p-8">
            <SignupForm
              setLoading={setLoading}
              setSignedUp={setSignedUp}
              setError={setError}
              setErrorMsg={setErrorMsg}
              error={error}
              errorMsg={errorMsg}
              loading={loading}
            />
            <div className="mt-4">
              <ButtonAndError loading={loading} signedUp={signedUp} />
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6 sm:hidden">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              Log in
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default SignupPage;
