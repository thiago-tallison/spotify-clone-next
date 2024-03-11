import { RecentlyPlayed } from "@/components/favorite-playlists";
import { MainHeader } from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MainSection } from "./main-section";

export function Main() {
  return (
    <ScrollArea className="bg-muted rounded-lg flex gap-6 flex-col col-span-1 overflow-y-auto ml-2 mt-2 mr-2">
      <main className="bg-muted rounded-lg flex gap-6 flex-col overflow-y-auto">
        <MainHeader />

        <RecentlyPlayed />

        <div className="flex flex-col px-6 gap-10">
          <MainSection title="Seus programas" />
          <MainSection title="Suas músicas estão com saudade" />
          <MainSection title="Tocados recentemente" />
        </div>
      </main>
    </ScrollArea>
  )
}