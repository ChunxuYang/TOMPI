import { Editor } from "@tompi/core";

export default function Home() {
  return (
    <main className="w-screen h-screen flex gap-5 p-5">
      <div className="flex-1">
        <Editor />
      </div>
    </main>
  );
}
