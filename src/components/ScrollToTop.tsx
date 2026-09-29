"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Disable native browser scroll restoration so reloads don't jump to the bottom
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // If the browser loaded with a cached hash (e.g. #contact from a previous click),
    // clean it from the address bar without reloading
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    // Force initial viewport to the very top (Hero section)
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}
