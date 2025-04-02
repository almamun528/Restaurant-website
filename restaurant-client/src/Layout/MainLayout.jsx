import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/Header/NavBar";

function MainLayout() {
  const location = useLocation()
  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')

  return (
    <>
      <section>
        {noHeaderFooter || <NavBar />}
        <main className="">
          <Outlet />
        </main>
        {noHeaderFooter || <Footer />}
      </section>
    </>
  );
}

export default MainLayout;
