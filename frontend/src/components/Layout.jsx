import Navigation from "./Navigation";
import { Outlet } from "react-router";
import { useEffect } from "react";
import { useUserContext } from "../hooks/contextHooks";

const Layout = () => {
  const { handleAutoLogin } = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, [handleAutoLogin]);

  return (
    <>
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 py-6 flex-1">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
