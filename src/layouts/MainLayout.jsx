import Fotter from "@/components/myCom/Fotter";
import Navbar from "@/components/myCom/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="md:w-[83%] mx-auto overflow-x-hidden">
        <Outlet />
      </main>
      <Fotter />
    </div>
  );
};

export default MainLayout;
