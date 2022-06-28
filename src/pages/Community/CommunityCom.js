import React from "react";
<<<<<<< HEAD
import PostList from "../../components/PostList";
import SidebarCommunity from "../../components/SidebarCommunity";
=======
import PostList from ".components/PostList";
import SidebarCommunity from "./SidebarCommunity";
>>>>>>> 78e07f8f557b038b0b6cbb682f980a93ed6e0cc0



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