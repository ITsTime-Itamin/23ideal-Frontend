import React from "react";
import { Link } from "react-router-dom";
import SidebarSupport from "../../components/SidebarSupport";
import PostList from "../../components/PostList";

const SupportGov=()=>{
    return(
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>정부의 보조금 지원 정책</h1>
            </div>
            <div className="locate_btn"> 
                <button className="editor_btn">  
                    <Link to="/GovEditor" className="editor_go">
                        글쓰기
                    </Link>
                </button>
            </div>
             
           <SidebarSupport  />
           <PostList/>
        </div>
    );
};

export default SupportGov;