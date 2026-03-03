import { useEffect } from "react";
import React from "react";

/** Legacy component — redirects to WelcomePage */
const Welcome: React.FC = () => {
  useEffect((): void => {
    if (window.location.href.includes("code")) {
      window.location.href = window.location.origin + window.location.pathname;
    }
    window.location.href = window.location.origin + "/home";
  }, []);

  return null;
};

export default Welcome;
