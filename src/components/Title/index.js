import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <Text>{title}</Text>
  )
}

export default Title;

const Text = styled.h1`
  font-size: 18px;
  color: #232D39;
`;
