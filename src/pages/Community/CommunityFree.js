import React from "react";
import { Link } from "react-router-dom";
import SidebarCommunity from "../../components/SidebarCommunity";
import PostList from "../../components/PostList";
import styled from "styled-components";


const CommunityFree = props => {
    return (
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}> 
                <h1>자유게시판</h1>
            </div> 
            <SidebarCommunity/>
            <PostList boardType={"FREE"}/>
        </div>
    )
}

export default CommunityFree;