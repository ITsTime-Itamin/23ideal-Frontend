import React from "react";
import { Link } from "react-router-dom";
import SidebarCommunity from "../../components/SidebarCommunity";
import PostList from "../../components/PostList";



const CommunityJob = props => {
    return (
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                 <h1>취업 공고</h1>
            </div>
            <div className="locate_btn"> 
                <button className="editor_btn">  
                    <Link to="/Editor" state={{data:"취업 공고"}} className="editor_go">
                        글쓰기
                    </Link>
                </button>
            </div>
    
        <SidebarCommunity/>
        <PostList boardType={"JOB"}/>
        </div>
    )
}

export default CommunityJob;