import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router';
import './layout.css'

const Index = ({ children }) => (
  <div className="layout-box">
        <h1>koa+react+ssr</h1>
        <NavLink to="/index" style={{ marginLeft: "10px" }} >首页</NavLink>   
        <NavLink style={{ marginLeft: "10px" }} to="/list">列表页</NavLink>
      {children} 
        </div>
);

export default withRouter(Index);