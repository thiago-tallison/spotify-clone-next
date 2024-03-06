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
      <div className="col-span-1 flex gap-2 rounded-md overflow-hidden bg-card/35 hover:bg-card/80 transition-colors duration-75 cursor-pointer h-12 items-center group pr-2">
        <Image src={img} width={200} height={200} alt="Red Hot Chilli Peppers album image"
          className="h-12 w-12 object-cover" />

        <strong className="text-xs line-clamp-2 md:line-clamp-1 flex-1">{title}</strong>

        <button className='h-8 w-8 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center invisible group-hover:visible hover:scale-105'>
          <Play className='fill-black bg-transparent translate-x-0.5' strokeWidth={0} />
        </button>
      </div>
    )
  }


  return (
    <div className="max-w-52 col-span-1 flex flex-col rounded-lg hover:bg-card/20 transition-colors duration-75 cursor-pointer items-center group p-3 gap-6 relative">
      <div className='w-[184px] h-[184px] relative'>
        <Image src={img} width={480} height={480} alt="Red Hot Chilli Peppers album image"
          className="w-full h-full object-cover rounded-lg" />

        <button className='h-12 w-12 flex-shrink-0 bg-green-500 rounded-full flex items-center justify-center invisible group-hover:visible hover:scale-105 absolute bottom-1 right-1'>
          <Play className='fill-black bg-transparent translate-x-0.5' strokeWidth={0} />
        </button>
      </div>

      <div className='flex flex-col'>
        <strong className="text-base line-clamp-2 md:line-clamp-1">{title}</strong>
        <strong className="text-sm font-normal line-clamp-2 md:line-clamp-1 text-muted-foreground">{artist}</strong>
      </div>
    </div>
  )
}
