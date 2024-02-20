import React from "react";
import { styled } from "styled-components";
import Header from "../Header";
import NavBar from "../NavBar";

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Header />
      <ContentWrap>
        <NavBar />
        <div>
          {children}
        </div>
      </ContentWrap>
    </Wrap>
  )
}

export default Layout;

const Wrap = styled.div`
  width: 100%;
  min-width: 1280px;
  
`;

const ContentWrap = styled.div`
  display: flex;
 
  > div {
    width: 1080px;
    padding: 25px 24px;
  }
`;



