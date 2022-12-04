import React, { useContext, useEffect, useState } from "react";
import { __RouterContext } from "react-router";
import {  Helmet } from 'react-helmet'

//导入  - 假数据
import tempData from "./data";

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        code: 0,
        data: tempData,
      });
    }, 100);
  });
};

function isBrowser() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

const List = () => {
  const { staticContext } = useContext(__RouterContext);

  const [list, setList] = useState([]);

  const handleClick = () => {
    console.log("click List component ");
  };

  useEffect(() => {
    if (isBrowser() && !List.initialData?.length) {
      fetchData().then((res) => {
        setList(res.data)
      })
    } else {
      setList(List.initialData ?? [])
    }
  }, [])

  return (
    <div onClick={handleClick}>
       <Helmet>
                <title>我是列表也</title>
                <meta name="description" content='我是关键词'/>
                <meta name="keywords" content='我是关键词'/>
        </Helmet>
      {list?.map((item, index) => (
          <div key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
    </div>
  );
};

export default List;

List.getInitialProps = async () => {
  //模拟数据请求方法
  

  let res = await fetchData();

  return res;
};
