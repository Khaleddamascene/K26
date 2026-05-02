import { useEffect, useState } from "react";
import { useLike } from "../hooks/apiHooks";

const Likes = ({ media_id }) => {
  const [likes, setLikes] = useState(0);
  const [userLike, setUserLike] = useState(null);
  const [updateLike, setUpdateLike] = useState(false);
  const { getLikesCount, postLike, deleteLike, getUserLike } = useLike();
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  useEffect(() => {
    const getLikes = async () => {
      const likeResponse = await getLikesCount(media_id);
      setLikes(likeResponse.count);
    };

    getLikes();
  }, [userLike]);

  useEffect(() => {
    const fetchUserLike = async () => {
      if (!token) return;
      const userLikeResponse = await getUserLike(media_id, token);
      setUserLike(userLikeResponse);
    };

    fetchUserLike();
  }, [media_id, updateLike, token]);

  console.log("userLike", userLike);

  const handleClick = async () => {
    try {
      console.log("wtf", userLike);
      if (userLike) {
        const deleteResult = await deleteLike(userLike.like_id, token);
        console.log(deleteResult);
        setUserLike(null);
        setUpdateLike((updateLike) => {
          return !updateLike;
        });
      } else {
        const postResult = await postLike(media_id, token);
        console.log(postResult);
        setUpdateLike((updateLike) => {
          return !updateLike;
        });
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={!isLoggedIn}
      className={`my-2.5 block w-4/5 rounded-md p-2.5 transition-all duration-500 
  ${isLoggedIn ? "bg-stone-500 text-white hover:bg-stone-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
    >
      {userLike ? <span>&#x2665;</span> : <span>&#x2661;</span>}
      &nbsp;
      {likes}
    </button>
  );
};

export default Likes;
