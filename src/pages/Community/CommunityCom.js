import React from "react";
import PostList from "../../components/PostList";
import { Link } from "react-router-dom";
import SidebarCommunity from "../../components/SidebarCommunity";
import Banner from "../../components/Banner";
import styled from "styled-components";


const CommunityCom = props => {
    return (
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>입주 및 당첨 후기</h1>
            </div>
          
            <Banner/>
        <SidebarCommunity/>
        <PostList boardType={"REVIEW"}/>
        </div>
    )
}

const StyleButton = styled.button`
position:relative;
top: 80px;
left :1070px;
  margin: 20px;
  border: 0px solid;
  background: transparent;
  color: #000000;
  cursor: pointer;
  font-size :14px;
  &:focus {
   color: #808080;
  }
`

export default CommunityCom;