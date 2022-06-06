import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div``;

const Search = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Footer />
    </Container>
  );
};

export default Search;
