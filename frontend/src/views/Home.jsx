import MediaItem from "../components/MediaItem";
import SingleView from "../components/SingleView";
import { useState } from "react";
import { useMedia } from "../hooks/apiHooks";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
<<<<<<< HEAD

=======
>>>>>>> 8059bb5086a9f9d61dfa2ba6e551a315c885f0ac
  const { mediaArray } = useMedia();

  return (
    <>
      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />

      <table>
<<<<<<< HEAD
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Username</th>
          </tr>
        </thead>
=======
>>>>>>> 8059bb5086a9f9d61dfa2ba6e551a315c885f0ac
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
