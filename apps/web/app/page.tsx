"use client";

import { Editor, UI, UserBehavior } from "@tompi/core";

export default function Home() {
  function onUserBehaviorChange(userBehavior: UserBehavior) {
    if (userBehavior.typing_speed > 5) {
      UI.notification("Typing speed is too fast");
    }
  }

  return (
    <div className="flex-1">
      <Editor onUserBehaviorChange={onUserBehaviorChange} />
    </div>
  );
}
