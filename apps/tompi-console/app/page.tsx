import Header from "@/components/header";
import TompiEditor from "@/components/tompi-editor";
import { getTimeTravelLogs } from "@/db/actions";

export default async function Home() {
  const timeTravelLogs = await getTimeTravelLogs();
  return (
    <main className="flex w-screen h-screen flex-col">
      <Header />
      <div className="flex-1 p-4 flex relative">
        <TompiEditor timeTravelLogList={timeTravelLogs} />
      </div>
    </main>
  );
}
