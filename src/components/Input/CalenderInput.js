import React, { useRef } from 'react';
import styled from 'styled-components';
import { Controller, useFormContext } from "react-hook-form";
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getYear, getMonth } from "date-fns";
import prevIocn from '../../assets/icon/calenderPrevIcon.png';
import nextIocn from '../../assets/icon/calenderNextIcon.png';
import calenderIcon from '../../assets/icon/calendarIcon.png';
import { ko } from "date-fns/locale";

const CalendarInput = ({ 
  width,
  required,
  selected,
  readOnly,
  name, 
  placeholder,
}) => {
  registerLocale("ko")
  const { control } = useFormContext();
  const _ = require("lodash");
  const years =  _.range(1990, getYear(new Date()) + 1, 1);
  
  const months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  return (
    <>
      <Wrap width={width}>
        <Controller
          name={name}
          control={control}
          rules={{ required: required
          }}
          render={({ field }) => (
          <DatePicker
            readOnly={readOnly}
            inputRef={field.ref}
            locale={ko}
            dateFormat="yyyy.MM.dd"
            dateFormatCalendar="MMMM"
            shouldCloseOnSelect={true}
            useWeekdaysShort={false}
            selected={selected}
            onChange={(date) => {
              field.onChange(date);
            }}
            placeholderText={placeholder}
            showIcon
            icon={<CalenderIcon width={width} />}
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
            }) => (
              <CustomHeader>
                <button onClick={decreaseMonth}>
                  <img src={prevIocn} alt='prev'/>
                </button>
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) => changeYear(value)}
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <button onClick={increaseMonth}>
                  <img src={nextIocn} alt='next'/>
                </button>
              </CustomHeader>
            )}>
          </DatePicker>
        )}
      />
      </Wrap>
    </>
  );
};
  
export default CalendarInput;

const CustomHeader = styled.div`
  margin: 10;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #232D39;
  border-radius: 4px;
  height: 46px;
  > select {
    width: 82px;
    height: 30px;
    border-radius: 4px;
  }
  > button {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`;

const Wrap = styled.div`
  .react-datepicker__view-calendar-icon {
    > input {
      padding: 8px 12px;
      width: ${props => props.width ? props.width : '100%'};
      height: 36px;
      border: 1px solid #CFD4DA;
      border-radius: 4px;
    }
  }

  .react-datepicker {
    border: none;
    border-radius: 4px;
    overflow: hidden;
    width: 255px;
    height: 236px;
  }
  .react-datepicker__month-container {
    width: 100%;
  }
  .react-datepicker__header {
    padding: 8px 0 0 0;
    background-color: #FFFFFF;
    border-bottom: 0;
  }

  




  .react-datepicker__input-container {
    .react-datepicker__calendar-icon {
      top: 3px;
      right: 0;
      padding: 0;
      width: 24px;
      height: 24px;
    }
  }
  
`;

const CalenderIcon = styled.div`
  
  background-image: url(${calenderIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 24px;
  height: 24px;
  margin: 3px 12px 0;
`;
