import About from "@/components/about";
import Teams from "@/components/contact";
import Home from "@/components/hero";
import Events from "@/components/login";
import Navbar from "@/components/navbar";
import React from "react";

const index = () => {
  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Teams/>
      <Events/>
    </>
  );
};

export default index;
