import { PlaylistItem } from "../playlist-item-main";

export function FavoritePlaylists() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      <PlaylistItem title="Red Hot Chilli Peppersashdiashdaisdhiasdasdsauasdasd" img="/rhcp.jpg" />
      <PlaylistItem title="Red Hot Chilli Peppers" img="/rhcp.jpg" />
      <PlaylistItem title="Red Hot Chilli Peppers" img="/rhcp.jpg" />
      <PlaylistItem title="Red Hot Chilli Peppers" img="/rhcp.jpg" />
      <PlaylistItem title="Red Hot Chilli Peppers" img="/rhcp.jpg" />
      <PlaylistItem title="Red Hot Chilli Peppers" img="/rhcp.jpg" />
    </div>
  )
}