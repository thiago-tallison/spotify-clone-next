import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowRight, Home, Library, List, Plus, Search } from 'lucide-react'
import { PlaylistItem } from './playlist-item'


export function Sidebar() {
  return (
    <aside className="h-full gap-2 flex flex-col">
      <nav className='flex gap-4 flex-col p-4 rounded-lg bg-muted text-muted-foreground'>
        <a href="" className='text-sm flex gap-4 font-semibold hover:text-foreground text-foreground'>
          <Home className='size-6' /> Início</a>
        <a href="" className='text-sm flex gap-4 font-semibold hover:text-foreground active:text-foreground'>
          <Search className='size-6' /> Buscar</a>
      </nav>

      <nav className='flex gap-4 flex-col py-2 pl-2 rounded-lg bg-muted text-muted-foreground overflow-y-auto'>
        <header className='flex items-center m-2'>
          <div className='flex gap-2 items-center flex-1'>
            <Library className='size-6' />
            <span className='font-semibold'>Sua Biblioteca</span>
          </div>
          <Plus className='size-6 mr-4' />
          <ArrowRight className='size-6' />
        </header>
        <div className='flex gap-1'>
          <a href="" className='text-xs flex font-semibold hover:text-foreground text-foreground py-2 px-3 bg-card/70 rounded-full'>
            Playlists
          </a>
          <a href="" className='text-xs flex font-semibold hover:text-foreground text-foreground py-2 px-3 bg-card/70 rounded-full'>
            Podcasts e programas
          </a>
          <a href="" className='text-xs flex font-semibold hover:text-foreground text-foreground py-2 px-3 bg-card/70 rounded-full'>
            Artistas
          </a>
        </div>

        <ScrollArea>
          <div className='flex justify-between pr-4'>
            <button className='w-8 h-8 hover:bg-card rounded-full flex items-center justify-center'>
              <Search className='size-4' />
            </button>
            <div className='flex gap-1 items-center'>
              <span className='text-sm'>Recentes</span>
              <List className='size-4' />
            </div>
          </div>

          <ul className="flex flex-col">
            <PlaylistItem title='Músicas curtidas' description='Playlist • 2 músicas' pin />

            {Array.from({ length: 10 }).map(() => (
              <PlaylistItem
                imgURL="/rhcp.jpg"
                key={parseInt(Math.random().toString(10).substring(2))}
                title='Red Hot Chilli Peppers'
                description='Artista'
              />
            ))}
          </ul>
        </ScrollArea>
      </nav>
    </aside >
  )
}