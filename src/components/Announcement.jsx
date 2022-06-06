import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
      <Link to="/product" style={{ color: "inherit", textDecoration: "none" }}>
        Super Deal! Free Shipping on Orders Over $50.
      </Link>
    </Container>
  );
};

export default Announcement;
