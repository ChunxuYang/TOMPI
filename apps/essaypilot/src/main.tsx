import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@tompi/ui/style";
import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
