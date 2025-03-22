import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Header/NavBar";

function MainLayout() {
  return (
    <>
      <section>
        <NavBar />

        <Outlet />
        <Footer />
      </section>
    </>
  );
}

export default MainLayout;
