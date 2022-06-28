import React from "react";
import SidebarCommunity from "../../components/SidebarCommunity";
import PostList from "../../components/PostList";



const CommunityJob = props => {
    return (
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                 <h1>취업 공고</h1>
            </div>
    
        <SidebarCommunity/>
        <PostList/>
        </div>
    )
}

export default CommunityJob;