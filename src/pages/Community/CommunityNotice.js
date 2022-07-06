import React from "react";
import { Link } from "react-router-dom";
import SidebarCommunity from "../../components/SidebarCommunity";
import PostList from "../../components/PostList";



const CommunityNotice = props => {
    return (
        <div style={{textAlign:"center"}}>
           <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>공지사항</h1>
            </div>
            <div className="locate_btn"> 
                <button className="editor_btn">  
                    <Link to="/NoticeEditor" className="editor_go">
                        글쓰기
                    </Link>
                </button>
            </div>
        <SidebarCommunity/>
        <PostList/>
        </div>
    )
}

export default CommunityNotice;