import MediaItem from "../components/MediaItem";
import SingleView from "../components/SingleView";
import { useState } from "react";
import { useMedia } from "../hooks/apiHooks";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { mediaArray } = useMedia();

  return (
    <>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />

      <table>
        <tbody>
          {mediaArray.map((mediaItem) => (
            <MediaItem
              key={mediaItem.media_id}
              item={mediaItem}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
