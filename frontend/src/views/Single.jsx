import { useLocation, useNavigate } from "react-router";

const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { item } = state;

  if (!item) {
    return null;
  }

  console.log("item", item);

  return (
    <div>
      <button onClick={() => navigate(-1)}>Takaisin</button>
      <h2>{item.title}</h2>
      <img src={item.filename} alt={item.title} />
      <p>{item.description}</p>
      <img
        src={import.meta.env.VITE_MEDIA_API + "/thumbnails/" + item.filename}
        alt={item.title}
      />
      <p>Uploaded by: {item.username}</p>
    </div>
  );
};
export default Single;
