import React from "react";
import PostList from "../../components/PostList";
import SidebarCommunity from "../../components/SidebarCommunity";



const CommunityCom = props => {
    return (
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>입주 및 당첨 후기</h1>
            </div>
        
        <SidebarCommunity/>
        <PostList/>
        </div>
    )
}

export default CommunityCom;