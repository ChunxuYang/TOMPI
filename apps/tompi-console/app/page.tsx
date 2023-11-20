import Header from "@/components/header";
import TompiEditor from "@/components/tompi-editor";

export default function Home() {
  return (
    <main className="flex w-screen h-screen flex-col">
      <Header />
      <div className="flex-1 p-4 flex relative">
        <TompiEditor />
      </div>
    </main>
  );
}
