import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Menu from "../menu/Menu";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menu-container">
          <Menu />
        </div>
        <div className="content-container">
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </div>
      </div>
    </div>
  );
};

export default Layout;
