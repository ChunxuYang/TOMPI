import React from "react";

import { Button } from "@/components/ui/button";
import { Editor, UserBehavior, useTompiUI } from "@tompi/writing";

import { ThemeProvider } from "./components/theme-provider";
import ThemeToggle from "./components/theme-toggle";

function App() {
  const UI = useTompiUI();
  const [isDebugMode, setIsDebugMode] = React.useState(false);
  function onUserBehaviorChange(userBehavior: UserBehavior) {
    if (userBehavior.typing_speed > 10) {
      // UI.notification("Typing speed is too fast");
    }
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="flex flex-col min-h-screen bg-white dark:bg-zinc-900">
        <nav className="z-20 flex items-center justify-between p-4 shadow-md bg-background sticky top-0">
          <a href="/" className="text-xl hover:text-accent-foreground">
            EssayPilot
          </a>

          <div className="flex space-x-2">
            <Button
              variant="ghost"
              onClick={() => {
                UI.notification("Hello World");
              }}
            >
              Show Notification
            </Button>

            <Button
              variant="ghost"
              onClick={() => {
                UI.comment(0, "This is a comment33");
              }}
            >
              Comment
            </Button>

            <Button
              variant="ghost"
              onClick={() => {
                setIsDebugMode(!isDebugMode);
              }}
            >
              {isDebugMode ? "Hide Debug" : "Show Debug"}
            </Button>
          </div>
          <ThemeToggle />
        </nav>
        <div className="flex-1 p-4 flex relative">
          <div className="flex-1 relative">
            <Editor
              debugMode={isDebugMode}
              onUserBehaviorChange={onUserBehaviorChange}
            />
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
