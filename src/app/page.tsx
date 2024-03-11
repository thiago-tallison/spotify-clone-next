import { Footer } from "@/components/footer";
import { Main } from "@/components/main";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="w-screen h-[calc(100vh-84px)] grid grid-cols-[minmax(280px,min(25%,360px))_1fr] grid-rows-[calc(100vh-84px)_84px]">
      <Sidebar />

      <Main />

      <Footer />
    </div>
  );
}
