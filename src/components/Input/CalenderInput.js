import React, { useRef } from 'react';
import styled from 'styled-components';
import { Controller, useFormContext } from "react-hook-form";
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getYear, getMonth } from "date-fns";
import arrowIcon from '../../assets/icon/calenderArrow.png';
import calenderIcon from '../../assets/icon/calendarIcon.png';


const CalendarInput = ({ 
  width,
  minDate,
  maxDate,
  startDate,
  endDate,
  required,
  onFocus,
  readOnly,
  validate,
  name, 
  placeholder,
  title,
}) => {
  registerLocale("ko")
  const { control } = useFormContext(); 
  const ref = useRef(null);
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
          render={({ field: { value, onChange }}) => (
          <DatePicker
            readOnly={readOnly}
            ref={ref}
            locale='ko'
            minDate={minDate}
            maxDate={maxDate}
            dateFormat="yyyy.MM.dd"
            dateFormatCalendar="MMMM"
            showYearDropdown
            showMonthDropdown
            useShortMonthInDropdown
            shouldCloseOnSelect={true}
            useWeekdaysShort={false}
            selected={value}
            startDate={startDate}
            endDate={endDate}
            onFocus={onFocus}
            onChange={(data) => {
              onChange(data)
            }}
            placeholderText={placeholder}
            showIcon
            icon={<CalenderIcon width={width} />}
            renderCustomHeader={({
              date,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
              decreaseMonth,
              increaseMonth,
            }) => (
              <>
                <ButtonContainer>
                  <div className="month-day">
                    {getYear(date)}년 {months[getMonth(date)]}
                  </div>
                  <div className="btn_ctrl btn_ctrl-cancel" onClick={() => {ref.current?.setOpen(false)}} />
                </ButtonContainer>
              <div className='month-wrap'>
                <div
                  className="btn_month btn_month-prev"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  <img src={arrowIcon} alt='이전' />
                </div>
                
                <div
                  className="btn_month btn_month-next"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  <img src={arrowIcon} alt='다음' />
                </div>
              </div>
              </>
            )}
          >
          </DatePicker>
          
        )}
      />
      </Wrap>
    </>
  );
};
  
export default CalendarInput;

const ButtonContainer = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;

  > h2 {
    color: #FFFFFF;
    font-size: 20px;
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
    padding: 0;
    background-color: #FFFFFF;
    border-bottom: 0;
  }

  .btn_ctrl.btn_ctrl-cancel {
    width: 32px;
    height: 32px;

  }

  .month-wrap {
    padding: 45px 30px 38px;
    display: flex;
    justify-content: space-between;
    .btn_month {
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .month-day {
      font-size: 24px;
      color: #333333;
      font-weight: 700;
    }
  }
  .react-datepicker__day-names {
    margin-bottom: 0;
    .react-datepicker__day-name {
      width: 60px;
      height: 46px;
      font-size: 16px;
      margin: 0;
    }
  }
  .react-datepicker__month {
    margin: 0;
    padding-bottom: 45px;
    .react-datepicker__week {
      .react-datepicker__day {
        width: 60px;
        height: 36px;
        margin: 0;
        line-height: 36px;
        font-size: 16px;
        box-sizing: content-box;
        font-weight: 400;
      }
    }
  }
  .react-datepicker__day--keyboard-selected ,
  .react-datepicker__day.react-datepicker__day--selected {
    width: 30px !important;
    height: 30px !important;
    margin: 4px 15px 2px !important;
    line-height: 30px !important;
    color: #FFFFFF;
    border-radius: 50%;
    background-color: #2EA5FF;
    
  }
  .react-datepicker__day--disabled {
    color: #B4B4B4;
  }
  .react-datepicker__input-container {
    display: flex;
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
