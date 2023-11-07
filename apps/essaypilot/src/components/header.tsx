import React from "react";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <nav className="z-20 flex items-center justify-between p-4 shadow-md bg-background sticky top-0">
      <a href="/" className="text-xl hover:text-accent-foreground">
        EssayPilot
      </a>

      <ThemeToggle />
    </nav>
  );
}