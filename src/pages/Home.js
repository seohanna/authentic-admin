import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Layout from "../components/Layout";
import { useFormContext } from "react-hook-form";
import ApplyList from "../container/ApplyList";
import { listData } from "../demo";


const Home = () => {
  const [success, setSuccess] = useState(false);
  const { reset } = useFormContext();
 
  useEffect(() => {
    reset();
  }, [])
  return (
    <Layout>
      <ApplyList data={listData} />
    </Layout>
  )
}
export default Home;

