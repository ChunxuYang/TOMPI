import React from "react";
import Header from "./components/header";
import { Editor, UI, UserBehavior } from "@tompi/writing";

function App() {
  function onUserBehaviorChange(userBehavior: UserBehavior) {
    if (userBehavior.typing_speed > 5) {
      UI.notification("Typing speed is too fast");
    }
  }

  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-zinc-900">
      <Header />
      <div className="flex-1 p-4 flex relative">
        <div className="flex-1">
          <Editor onUserBehaviorChange={onUserBehaviorChange} />
        </div>
      </div>
    </main>
  );
}

export default App;
