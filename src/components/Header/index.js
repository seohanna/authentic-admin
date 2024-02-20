import React from "react";
import { styled } from "styled-components";
import logo from '../../assets/img/system-detail-link-logo.png';

const Header = ({ onClick }) => {
  return (
    <Wrap>
      <Logo />
    </Wrap>
  )
}

export default Header;

const Wrap = styled.div`
  padding: 24px 73px;
  border-bottom: 1px solid #CFD4DA;
`;


const Logo = styled.div`
  width: 55px;
  height: 24px;
  background-image: url(${logo});
  background-repeat: no-repeat;

`;

