import { Link } from "react-router";

const MediaItem = ({ item }) => {
  return (
    <tr>
      <td>
        <Link to="/single" state={{ item }}>
          <img src={item.thumbnail} alt={item.title} />
          <div>Klikkaa auki</div>
        </Link>
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.created_at}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
    </tr>
  );
};

export default MediaItem;
