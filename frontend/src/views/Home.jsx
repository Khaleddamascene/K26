import MediaItem from "../components/MediaItem";
import MyComponent from "../components/MyComponent";
import SingleView from "../components/SingleView";
import { useState } from "react";
import { useMedia } from "../hooks/apiHooks";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const { mediaArray } = useMedia();

  return (
    <>
      <h2>My media</h2>
      <MyComponent />

      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />

      <table>
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
        <tbody>
          {mediaArray.map((item) => (
            <MediaItem
              key={item.filename}
              setSelectedItem={setSelectedItem}
              item={item}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
/*
import MediaItem from "../components/MediaItem";
import MyComponent from "../components/MyComponent";
import SingleView from "../components/SingleView";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData.js";

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const media = await fetchData(
          import.meta.env.VITE_MEDIA_API + "/media",
        );

        const mediaWithUsers = await Promise.all(
          media.map(async (item) => {
            const user = await fetchData(
              import.meta.env.VITE_AUTH_API + "/users/" + item.user_id,
            );

            return {
              ...item,
              username: user.username,
            };
          }),
        );
        setMediaArray(mediaWithUsers);
      } catch (error) {
        console.error(error);
      }
    };

    getMedia();
  }, []);

  console.log(mediaArray);

  return (
    <>
      <h2>My media</h2>
      <MyComponent />

      <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Description</th>
              <th>Created</th>
              <th>Size</th>
              <th>Type</th>
              <th>User</th>
            </tr>
          </thead>
          <tbody>
            {mediaArray.map((item) => (
              <MediaItem
                key={item.filename}
                setSelectedItem={setSelectedItem}
                item={item}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;

*/
