import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Layout from "../components/Layout";
import { useFormContext } from "react-hook-form";
import ApplyList from "../container/ApplyList";
import ApplyDetail from "../container/ApplyDetail";
import { listData } from "../demo";


const Home = () => {
  const [success, setSuccess] = useState(false);
  const { reset } = useFormContext();
 
  useEffect(() => {
    reset();
  }, [])
  return (
    <Layout>
      {success ? (
        <ApplyDetail />
      ) : (<ApplyList data={listData} onClick={() => setSuccess(true)} />)}
      

    </Layout>
  )
}
export default Home;

