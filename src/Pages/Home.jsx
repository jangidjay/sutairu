import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Product";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Heading = styled.h1`
  font-size: 18px;
  text-align: center;
  align-items: center;
`;

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Heading>
        <h1>SHOP BY CATEGORY</h1>
      </Heading>
      <Categories />
      <Heading>
        <h1>POPULAR IN SHOP</h1>
      </Heading>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
