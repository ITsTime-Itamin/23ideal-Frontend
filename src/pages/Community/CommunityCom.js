import React from "react";
import PostList from "../../components/PostList";
import { Link } from "react-router-dom";
import SidebarCommunity from "../../components/SidebarCommunity";
import Banner from "../../components/Banner";



const CommunityCom = props => {
    return (
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>입주 및 당첨 후기</h1>
            </div>
            <div className="locate_btn"> 
                <button className="editor_btn">  
                    <Link to="/Editor" state={{data:"입주 및 당첨 후기", boardType:"REVIEW"}} className="editor_go">
                        글쓰기
                    </Link>
                </button>
            </div>
            <Banner/>
        <SidebarCommunity/>
        <PostList boardType={"REVIEW"}/>
        </div>
    )
}

export default CommunityCom;