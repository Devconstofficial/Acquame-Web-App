import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Sidebar from "./SideBar";
import Financial from "../pages/Financial";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <main className={`main-content ${isSidebarOpen ? "open" : ""}`}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
