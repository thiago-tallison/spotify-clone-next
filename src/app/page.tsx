import { RecentlyPlayed } from "@/components/favorite-playlists";
import { Footer } from "@/components/footer";
import { MainHeader } from "@/components/header";
import { PlaylistItem } from "@/components/playlist-item-main";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="h-[calc(100vh-84px)] w-screen grid grid-cols-[360px_1fr] grid-rows-[1fr_84px] gap-2 pr-2">
      <div className="px-2 pt-2 col-span-1 h-[calc(100vh-84px)]">
        <Sidebar />
      </div>

      <main className="bg-muted rounded-lg flex gap-6 flex-col px-2 mt-2 col-span-1 overflow-y-auto">
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

      <Footer />
    </div>
  );
}
