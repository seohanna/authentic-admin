import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <ul>
        <li>
          풍수해보험
        </li>
      </ul>
    </Nav>
  )
}

export default NavBar;


const Nav = styled.nav`
  width: 200px;
  height: 1024px;
  background-color: #2C2F3C;
  > ul {
    background-color: #1E1F29;
    > li {
      color: #5DA3FF;
      display: flex;
      height: 44px;
      font-size: 14px;
      align-items: center;
      justify-content: center;
    }
  }
`