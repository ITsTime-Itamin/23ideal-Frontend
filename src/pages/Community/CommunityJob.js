import React from "react";
import PostList from "./PostList";
import SidebarCommunity from "./SidebarCommunity";



const CommunityJob = props => {
    return (
        <div style={{textAlign:"center"}}>
        <h1>취업공고</h1>
        <SidebarCommunity/>
        <PostList/>
        </div>
    )
}

export default CommunityJob;