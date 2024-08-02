import React from "react";
import { Header } from "../header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <header className="bg-[#ddd]">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};