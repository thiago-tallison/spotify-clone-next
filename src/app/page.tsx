import { FavoritePlaylists } from "@/components/favorite-playlists";
import { MainHeader } from "@/components/header";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen grid grid-cols-[360px_1fr] p-2 gap-2">
      <Sidebar />
      <main className="bg-muted rounded-lg p-4 flex gap-6 flex-col">
        <MainHeader />

        <FavoritePlaylists />
      </main>
    </div>
  );
}
