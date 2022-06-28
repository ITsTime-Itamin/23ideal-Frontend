import React from "react";
import SidebarCommunity from "../../components/SidebarCommunity";
import PostList from "../../components/PostList";



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