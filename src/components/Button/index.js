import React from "react";
import styled, { css } from "styled-components";

const Button = ({ title, width, theme, onClick }) => {
  return (
    <BasicButton
      width={width}
      theme={theme}
      onClick={onClick}
    >
      {title}
    </BasicButton>
  )
}
export default Button;

const BasicButton = styled.button`
  width: ${props => props.width ? props.width : '100%'};
  background-color: #5DA3FF;
  color: #FFFFFF;
  border-radius: 4px;
  height: 36px;
  font-size: 14px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.theme === 'dark' && css`
    background-color: #2C2F3C;
  `}

  ${props => props.theme === 'light' && css`
    border: 1px solid #EAECEF;
    background-color: #FFFFFF;
    color: #6C6C6C;
  `}
`;
