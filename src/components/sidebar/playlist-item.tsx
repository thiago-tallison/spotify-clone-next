import { Pin } from "lucide-react";
import Image from 'next/image';

type PlaylistItemProps = {
  pin?: boolean;
  title: string;
  description: string;

}
export function PlaylistItem({ description, pin = false, title }: PlaylistItemProps) {
  return (
    <div className='flex gap-3'>
      <Image
        src="/liked-songs.png"
        alt="Liked songs"
        width={48}
        height={48}
        className='rounded-lg' />

      <div className='felx flex-col'>
        <span className='font-bold'>{title}</span>
        <span className='flex gap-2 text-sm font-semibold'>
          {pin && <Pin size={16} className='rotate-45 text-green-500' />}
          {description}
        </span>
      </div>
    </div>
  )
}