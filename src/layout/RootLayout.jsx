import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
