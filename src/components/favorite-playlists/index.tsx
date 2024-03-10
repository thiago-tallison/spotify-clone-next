import { PlaylistItem } from "../playlist-item-main";

export function RecentlyPlayed() {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 px-4">
      {Array.from({ length: 6 }).map(() => (
        <PlaylistItem
          key={Math.random()}
          title="Red Hot Chilli Peppers" img="/rhcp.jpg" />
      ))}
    </div>
  )
}