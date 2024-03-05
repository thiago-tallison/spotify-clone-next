import { Play } from 'lucide-react'
import Image from 'next/image'

type PlaylistItemProps = {
  title: string
  img: string
}
export function PlaylistItem({ title, img }: PlaylistItemProps) {
  return (
    <div className="col-span-1 flex gap-2 rounded-md overflow-hidden bg-card/35 hover:bg-card/80 transition-colors duration-75 cursor-pointer h-12 items-center pr-2 group">
      <Image src={img} width={200} height={200} alt="Red Hot Chilli Peppers album image"
        className="h-12 w-12 object-cover" />

      <strong className="text-xs line-clamp-2 md:line-clamp-1">{title}</strong>

      <button className='h-8 w-8 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center invisible group-hover:visible hover:scale-105'>
        <Play className='fill-black bg-transparent translate-x-0.5' strokeWidth={0} />
      </button>
    </div>)
}
