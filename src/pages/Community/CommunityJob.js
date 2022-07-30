import React from "react";
import { Link } from "react-router-dom";
import SidebarCommunity from "../../components/SidebarCommunity";
import PostList from "../../components/PostList";
import styled from "styled-components";



const CommunityJob = props => {
    return (
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                 <h1>취업 공고</h1>
            </div>
    
        <SidebarCommunity/>
        <PostList boardType={"JOB"}/>
        </div>
    )
}


export default CommunityJob;