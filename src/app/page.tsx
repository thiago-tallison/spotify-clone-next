import { MainHeader } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen grid grid-cols-[minmax(360px,412px)_1fr] p-2 gap-2">
      <Sidebar />
      <main className="bg-muted rounded-lg p-4">
        <MainHeader />
      </main>
    </div>
  );
}
