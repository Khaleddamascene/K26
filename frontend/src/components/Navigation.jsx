import "./navigation.css";

import { Link } from "react-router";
import { useUserContext } from "../hooks/contextHooks";

const Navigation = () => {
  const { user } = useUserContext();

  return (
    <nav className="border-b border-gray-300 mb-4">
      <ul className="flex gap-4 p-4 *:px-3 *:py-1 *:rounded-md *:transition *:hover:bg-stone-200">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        {!user && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {user && (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
