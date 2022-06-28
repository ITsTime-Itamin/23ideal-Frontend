import React from "react";
import PostList from ".components/PostList";
import SidebarCommunity from "./SidebarCommunity";



const CommunityCom = props => {
    return (
        <div style={{textAlign:"center", position:"absolute"}}>
        <h1>입주 및 당첨 후기</h1>
        <SidebarCommunity/>
        <PostList/>
        </div>
    )
}

export default CommunityCom;