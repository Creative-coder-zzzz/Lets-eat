import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HeadlineCards from "./HeadlineCards";
import Food from "./Food";
import Category from "./Category";
import Footer from "./Footer";

function ShoppingHome() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <Footer />
    </div>
  );
}

export default ShoppingHome;
