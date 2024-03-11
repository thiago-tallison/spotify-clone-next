import { PlaylistItem } from "../playlist-item-main";

export function RecentlyPlayed() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 px-4">
      {Array.from({ length: 8 }).map(() => (
        <PlaylistItem
          key={Math.random()}
          title="Red Hot Chilli Peppers" img="/rhcp.jpg" />
      ))}
    </div>
  )
}