import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import SelectInput from "../components/Input/SelectInput";
import TextInput from "../components/Input/TextInput";
import Button from "../components/Button";
import CalendarInput from "../components/Input/CalenderInput";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

const ApplyList = ({ data, onClick }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = data?.slice(indexOfFirst, indexOfLast);
  
  const keyword = [
    {
      id: '1',
      name: 'dsdsdsd'
    }
  ];
  const state = [
    {
      id: '1',
      name: 'dsdsdsd'
    }
  ];
  
  return (
    <Wrap>
      <Title title='접수 현황' />
      <SearchRange>
        <div>
          <p>키워드</p>
          <div>
            <SelectInput 
              name='keyword'
              placeholder='전체'
              width='182px'
            >
              <>
                {keyword.map((dt) => (
                  <option>{dt.name}</option>
                ))}
              </>
            </SelectInput>
            <TextInput name='search' width='482px' />
            <SelectInput
              name='state'
              placeholder='접수상태'
              width='129px'
            >
              <>
                {state.map((dt) => (
                  <option>{dt.name}</option>
                ))}
              </>
            </SelectInput>
            <Button 
              title='검색'
              width='67px'
            />
          </div>
        </div>
        <div>
          <p>가입신청일</p>
          <div>
            <div>
              <CalendarInput
                width='182px'
                name='startDate'
                startDate={selectedDate}
                placeholder='선택'
              />
              <span>~</span>
              <CalendarInput
                width='182px'
                name='startDate'
                startDate={selectedDate}
                placeholder='선택'
              />
              <RangeButtonWrap>
                <Button
                  width='67px'
                  title='일주일'
                  theme='dark'
                />
                <Button
                  width='67px'
                  title='1개월'
                  theme='dark'
                />
                <Button
                  width='67px'
                  title='3개월'
                  theme='dark'
                />
                <Button
                  width='67px'
                  title='6개월'
                  theme='dark'
                />
              </RangeButtonWrap>
            </div>
          </div>
        </div>
      </SearchRange>
      <ListWrap>
        <TotalCount>총<strong>3</strong> 건</TotalCount>
        <Table>
          <thead>
            <tr>
              <th style={{ width: '47px'}}>No</th>
              <th style={{ width: '102px'}}>가입자명</th>
              <th style={{ width: '223px'}}>상호명</th>
              <th style={{ width: '173px'}}>가입신청일</th>
              <th style={{ width: '190px'}}>사업자번호</th>
              <th style={{ width: '190px'}}>연락처</th>
              <th style={{ width: '101px'}}>접수상태</th>
            </tr>
          </thead>
          <tbody>
            <>
              {currentPosts.map((dt) => (
                <tr>
                  <td>{dt.number}</td>
                  <td onClick={onClick}>{dt.name}</td>
                  <td>{dt.bizName}</td>
                  <td>{dt.applyDate}</td>
                  <td>{dt.bizNo}</td>
                  <td>{dt.telNo}</td>
                  <td>{dt.state}</td>
                </tr>
              ))}
            </>
          </tbody>      
        </Table>
        <Pagination
          postPerPage={postsPerPage} 
          totalPosts={data.length} 
          paginate={setCurrentPage} 
        />
      </ListWrap>
    </Wrap>
  )
}

export default ApplyList;

const Wrap = styled.div`

`;

const SearchRange = styled.div`
  height: 114px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #FAFBFC;
  margin-top: 30px;
  padding: 16px 24px;
  > div {
    display: flex;
    align-items: center;
    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      > div {
        display: flex;
        align-items: center;
        > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 18px;
        }
      }
    }
    > p {
      font-size: 14px;
      font-weight: 500;
      width: 80px;

      
    }
  }
`;

const RangeButtonWrap = styled.div`
  width: 286px;
  display: flex;
  justify-content: space-between;
  margin-left: 14px;
`;


const ListWrap = styled.div`
  margin-top: 30px;
`;

const TotalCount = styled.p`
  font-size: 14px;
  color: #232D39;
  > strong {
    color: #5DA3FF;
    font-weight: 700;
  }
`;
