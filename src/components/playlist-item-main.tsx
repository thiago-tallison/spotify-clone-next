import { Play } from 'lucide-react'
import Image from 'next/image'

type PlaylistItemProps = {
  title: string
  artist?: string
  img: string
  orientation?: 'vertical' | 'horizontal'
}
export function PlaylistItem({ title, img, orientation = 'horizontal', artist }: PlaylistItemProps) {

  if (orientation === 'horizontal') {
    return (
      <div className="col-span-1 flex gap-2 rounded-md bg-card/35 hover:bg-card/80 transition-colors duration-75 cursor-pointer h-12 lg2:h-16 items-center group pr-2">
        <Image src={img} width={80} height={80} alt="Red Hot Chilli Peppers album image"
          className="h-12 lg2:h-16 w-12 lg2:w-16 object-cover" />

        <strong className="text-xs line-clamp-2 md:line-clamp-1 flex-1">{title}</strong>

        <button className='h-8 w-8 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center invisible group-hover:visible hover:scale-105'>
          <Play className='fill-black bg-transparent translate-x-0.5' strokeWidth={0} />
        </button>
      </div>
    )
  }


  return (
    <div className="col-span-1 flex flex-col rounded-lg hover:bg-card/20 transition-colors duration-75 cursor-pointer items-center group p-3 gap-2 relative">
      <div className='relative flex-1'>
        <Image src={img} width={480} height={480} alt="Red Hot Chilli Peppers album image"
          className="object-cover rounded-lg aspect-square" />

        <button className='h-12 w-12 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center invisible group-hover:visible hover:scale-105 absolute bottom-1 right-1'>
          <Play className='fill-black bg-transparent translate-x-0.5' strokeWidth={0} />
        </button>
      </div>

      <div className='flex flex-col gap-1'>
        <strong className="text-base line-clamp-2 md:line-clamp-1">{title}</strong>
        <strong className="text-sm font-normal line-clamp-2 md:line-clamp-1 text-muted-foreground">{artist}</strong>
      </div>
    </div>
  )
}
