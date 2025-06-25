"use client";

import { useEffect } from "react";

export default function ClientBody({ children}) {
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return <div className="antialiased">{children}</div>;
}
