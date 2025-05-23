import Fotter from "@/components/myCom/Fotter";
import Navbar from "@/components/myCom/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="overflow-x-hidden">
        <Outlet />
      </main>
      <Fotter />
    </div>
  );
};

export default MainLayout;
