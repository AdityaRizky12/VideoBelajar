import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
import FooterSection from "../component/footer";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterSection/>
      <ToastContainer />
    </>
  );
};

export default MainLayout;
