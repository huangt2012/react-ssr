import React from "react";
import { Helmet } from 'react-helmet'
import './index.css'

const Index = () => {
  const handleClick = () => {
    console.log('click index component ')
  }
  return (
    <div onClick={handleClick} className="page-index-box">
      <Helmet>
                <title>我是首页</title>
                <meta name="description" content='我是首页关键词'/>
                <meta name="keywords" content='我是搜也关键词'/>
      </Helmet>
      index
    </div>
  )
}

export default Index;