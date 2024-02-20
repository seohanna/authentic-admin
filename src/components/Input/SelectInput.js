import React from "react";
import styled, { css } from "styled-components";
import { useFormContext } from "react-hook-form";
import selectIcon from '../../assets/icon/selectIcon.png';


const SelectInput = ({width, name, defaultValue, required, placeholder, children, ...rest}) => {
  const { register } = useFormContext({
		mode: 'onBlur',
	});

  return (
    <>
      <SelectContainer width={width}>
        <SelectBase
          name={name}
          key={defaultValue}
          required={required}
          defaultValue={defaultValue}
          {...register(name)}
          {...rest}
        >
          <option value="" hidden>
            {placeholder}
          </option>
          <>{children}</>
        </SelectBase>
        <SelectArrow />
      </SelectContainer>
    </>
  )
}

export default SelectInput;

const SelectContainer = styled.div`
  color: #666666;
  width: ${props => props.width ? props.width : '100%'};
  height: 36px;
  border-radius: 4px;
  border: 1px solid #CFD4DA;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  overflow: hidden;

`;

const SelectBase = styled.select`
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 100%;
  padding: 7px 0 8px 8px;

`;

const SelectArrow = styled.div`
  width: 22.25px;
  height: 20px;
  background-image: url(${selectIcon});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 9px;
`;

const ErrorTextMessage = styled.div`
  font-size: 12px;
  color: #FF0000;
  line-height: 22px;
  position: absolute;
  bottom: -21px;
`;