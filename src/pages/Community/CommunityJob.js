import React from "react";
import SidebarCommunity from "../../components/SidebarCommunity";
import PostList from "../../components/PostList";



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