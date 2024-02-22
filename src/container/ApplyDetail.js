import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useReactToPrint } from 'react-to-print';
import Title from "../components/Title";
import Table from "../components/Table";
import Button from "../components/Button";
import ConfirmTemplate from "../components/Print/ConfirmTemplate";

const ApplyDetail = () => {
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });
  return (
    <Wrap>
      <Title title='가입자 정보 상세'/>
      <h3>1. 가입자 정보</h3>
      <Table>
        <tr>
          <th style={{ width: '148px'}}>가입자명</th>
          <td style={{ width: '365px'}}>서아무개</td>
          <th style={{ width: '148px'}}>연락처</th>
          <td style={{ width: '365px'}}>010-5678-2707</td>
        </tr>
        <tr>
          <th>사업자번호</th>
          <td>123-45-67891</td>
          <th>생년월일</th>
          <td>1993.05.08</td>
        </tr>
        <tr>
          <th>성별</th>
          <td>여</td>
          <th>마케팅 동의여부</th>
          <td>동의</td>
        </tr>
      </Table>
      <h3>2. 사업장 정보</h3>
      <Table>
        <tr>
          <th style={{ width: '148px'}}>상호명</th>
          <td style={{ width: '365px'}}>인슈로보 여의도</td>
          <th style={{ width: '148px'}}>사업장 주소</th>
          <td style={{ width: '365px'}}>서울특별시 어디구 어디로 123</td>
        </tr>
        <tr>
          <th>업종</th>
          <td>소프트웨어 개발 컴퓨터</td>
          <th>사업장 층</th>
          <td>1층</td>
        </tr>
        <tr>
          <th>업종</th>
          <td>소프트웨어 개발 컴퓨터</td>
          <th>사업장 층</th>
          <td>1층</td>
        </tr>
        <tr>
          <th>임차여부</th>
          <td>임차인</td>
          <th>전체층수</th>
          <td>6층</td>
        </tr>
        <tr>
          <th>면적</th>
          <td>1000㎡</td>
          <th>건물 구조정보</th>
          <td>철근 콘크리트</td>
        </tr>
        <tr>
          <th>상시근로자수</th>
          <td>1 명</td>
          <th>연평균매출액</th>
          <td style={{ textAlign: 'end'}}>300만원</td>
        </tr>
      </Table>
      <h3>3. 보험정보</h3>
      <Table>
        <tr>
          <th style={{ width: '148px'}}>보험료</th>
          <td style={{ width: '365px'}}>34,190원</td>
          <th style={{ width: '148px'}}>상품명</th>
          <td style={{ width: '365px'}}>풍수해보험</td>
        </tr>
      </Table>
      <h3>4. 담당자 정보</h3>
      <Table>
        <tr>
          <th style={{ width: '148px'}}>성명</th>
          <td style={{ width: '365px'}}>서한나</td>
          <th style={{ width: '148px'}}>사번</th>
          <td style={{ width: '365px'}}>24021403</td>
        </tr>
        <tr>
          <th>소속</th>
          <td>소속명 노출</td>
        </tr>
      </Table>
      <ButtonWrap>
        <Button title='목록보기' theme='dark' width='101px' />
        <Button title='가입확인서 출력' width='141px' onClick={handlePrint}/>
      </ButtonWrap>
      
      <PrintWrap ref={printRef}>
        <ConfirmTemplate />
      </PrintWrap>
      
    </Wrap>
  )
}

export default ApplyDetail;

const Wrap = styled.div`
  > h3 {
    font-size: 14px;
    padding-top: 30px;
    padding-bottom: 10px;
  }

`;

const ButtonWrap = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 256px;
`;

const PrintWrap = styled.div``;