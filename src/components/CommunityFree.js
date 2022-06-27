import React from "react";
import PostList from "./PostList";
import SidebarCommunity from "./SidebarCommunity";



const CommunityFree = props => {
    return (
        <div style={{textAlign:"center"}}>
        <h1>입주 및 당첨 후기</h1>
        <SidebarCommunity/>
        <PostList/>
        </div>
    )
}

export default CommunityFree;