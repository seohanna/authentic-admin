import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { detailData } from "../../demo";
import template from '../../assets/img/hyundaiTamplate.png';

const ConfirmTemplate = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(detailData);
  }, []);

  const HiFrame = [
    {
      id: '1',
      name: '증권번호',
      value: data.SEC_NO
    },
    {
      id: '2',
      name: '보험기간',
      value: data.INSDATE + '  부터 1년'
    },
    {
      id: '3',
      name: '보험종목',
      value: data.PROD_NAME
    },
    {
      id: '4',
      name: '가입업체',
      value: data.BUSSINESS_NAME
    },
    {
      id: '5',
      name: '주소',
      value: data.INSLOC
    },
    {
      id: '6',
      name: '보장내용',
      value: '풍수해로 인한 사고를 보장'
    }
  ];

  return (
    <>
      <Wrap>
        {HiFrame.map((dt) => (
          <InputWrap key={dt.name}>
            <p>{dt.name}</p><span>:</span>
            <span>{dt.value}</span>
          </InputWrap>
        ))}
        <InputWrap>
          <p>보장한도액</p><span>:</span>
          <span><b>시설</b><b>3 천만원</b><b>재고자산</b><b>1 천만원</b></span>
        </InputWrap>
        <InputWrap>
          <p></p><span></span>
          <span><b>총보상한도</b><b>미적용</b><b>자기부담금</b><b>20 만원</b></span>
        </InputWrap>
        <InputWrap>
          <p>가입약관</p><span>:</span>
          <span>풍수해보험 VI 보통약관</span>
        </InputWrap>
        <InputWrap>
          <p></p><span></span>
          <span>날짜인식오류 보장제외 추가약관</span>
        </InputWrap>
      </Wrap>  
    </>
  )
}
export default ConfirmTemplate;

const Wrap = styled.div`
  display: none;
  width: 21cm;
  height: 29.7cm;
  background-size: 90%;
  background-position: 43% 50%;
  padding: 180px 72.9px;
  background-repeat: no-repeat;
  background-image: url(${template});
  div:first-child {
    margin-top: 5px;
  }
  div:nth-child(8) {
    border-bottom: 1px dashed #c4c4c4;
    margin-bottom: 50px;
  }
  div:nth-child(9) {
    margin-top: 109px;
  }
  @media print {
    display: block;
   
  }
`;

const InputWrap = styled.div`
  border-top: 1px dashed #c4c4c4;
  display: flex;
  align-items: center;
  padding: 6.1px 0;
  

  
  > p {
    font-size: 16px;
    width: 87.5px;
    line-height: 1;
    color: #2F2F2F;
    font-weight: 700;
  }
  > span {
    color: #2F2F2F;
    padding-left: 7.29px;
    font-size: 16px;
    > b {
      width: 116.7px;
      display: inline-block;
    }
  }
`;