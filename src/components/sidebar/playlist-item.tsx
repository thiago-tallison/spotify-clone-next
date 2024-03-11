import { Pin } from "lucide-react";
import Image from 'next/image';

type PlaylistItemProps = {
  pin?: boolean;
  title: string;
  description: string;
  imgURL?: string

}
export function PlaylistItem({ description, pin = false, title, imgURL }: PlaylistItemProps) {
  return (
    <div className='flex gap-3 p-2 hover:bg-black/10 rounded-md cursor-pointer'>
      <Image
        src={imgURL ?? "/liked-songs.png"}
        alt="Liked songs"
        width={100}
        height={100}
        className='rounded-lg w-12 h-12 object-cover' />

      <div className='felx flex-col'>
        <span className='font-bold'>{title}</span>
        <span className='flex gap-2 text-sm font-semibold'>
          {pin && <Pin size={16} className='rotate-45 text-green-500 fill-green-500' />}
          {description}
        </span>
      </div>
    </div>
  )
}