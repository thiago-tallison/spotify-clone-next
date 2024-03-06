import { RecentlyPlayed } from "@/components/favorite-playlists";
import { MainHeader } from "@/components/header";
import { PlaylistItem } from "@/components/playlist-item-main";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen grid grid-cols-[360px_1fr] p-2 gap-2">
      <Sidebar />

      <main className="bg-muted rounded-lg flex gap-6 flex-col">
        <MainHeader />

        <RecentlyPlayed />

        <div className="flex flex-col px-6 gap-10">
          <section className="flex flex-col gap-4">
            <div className="flex justify-between place-items-end">
              <h1 className="text-2xl font-bold">Seus programas</h1>
              <a href="#" className="text-sm font-semibold text-muted-foreground hover:underline">Mostrar tudo</a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5">
              {Array.from({ length: 5 }).map(() => (
                <PlaylistItem
                  key={Math.random().toString(16)}
                  img="/rhcp.jpg"
                  title="Red Hot Chilli Peppers"
                  orientation="vertical"
                  artist="RHCP Album" />
              ))}
            </div>
          </section>


          <section className="flex flex-col gap-4">
            <div className="flex justify-between place-items-end">
              <h1 className="text-2xl font-bold">Suas músicas estão com saudades</h1>
              <a href="#" className="text-sm font-semibold text-muted-foreground hover:underline">Mostrar tudo</a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5">
              {Array.from({ length: 5 }).map(() => (
                <PlaylistItem
                  key={Math.random().toString(16)}
                  img="/rhcp.jpg"
                  title="Red Hot Chilli Peppers"
                  orientation="vertical"
                  artist="RHCP" />
              ))}
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <div className="flex justify-between place-items-end">
              <h1 className="text-2xl font-bold">Tocados recentemente</h1>
              <a href="#" className="text-sm font-semibold text-muted-foreground hover:underline">Mostrar tudo</a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5">
              {Array.from({ length: 5 }).map(() => (
                <PlaylistItem
                  key={Math.random().toString(16)}
                  img="/rhcp.jpg"
                  title="Red Hot Chilli Peppers"
                  orientation="vertical"
                  artist="RHCP Album" />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
