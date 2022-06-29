import React from "react";
import SidebarCommunity from "../../components/SidebarCommunity";
import PostList from "../../components/PostList";



const CommunityFree = props => {
    return (
        <div style={{textAlign:"center"}}>
        <h1>자유게시판</h1>
        <SidebarCommunity/>
        <PostList/>
        </div>
    )
}

export default CommunityFree;