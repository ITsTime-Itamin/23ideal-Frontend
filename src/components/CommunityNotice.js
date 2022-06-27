import React from "react";
import PostList from "./PostList";
import SidebarCommunity from "./SidebarCommunity";



const CommunityNotice = props => {
    return (
        <div style={{textAlign:"center"}}>
        <h1>공지사항</h1>
        <SidebarCommunity/>
        <PostList/>
        </div>
    )
}

export default CommunityNotice;