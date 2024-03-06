import { PlaylistItem } from "../playlist-item-main";

export function RecentlyPlayed() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 px-4">
      <PlaylistItem title="Red Hot Chilli Peppersashdiashdaisdhiasdasdsauasdasd" img="/rhcp.jpg" />
      <PlaylistItem title="Red Hot Chilli Peppers" img="/rhcp.jpg" />
      <PlaylistItem title="Red Hot Chilli Peppers" img="/rhcp.jpg" />
      <PlaylistItem title="Red Hot Chilli Peppers" img="/rhcp.jpg" />
      <PlaylistItem title="Red Hot Chilli Peppers" img="/rhcp.jpg" />
      <PlaylistItem title="Red Hot Chilli Peppers" img="/rhcp.jpg" />
    </div>
  )
}