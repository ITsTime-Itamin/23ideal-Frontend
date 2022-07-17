import React from "react";
import { Link } from "react-router-dom";
import PostList from "../../components/PostList";
import SidebarSupport from "../../components/SidebarSupport";

const SupportLoan=()=>{
    return(
        <div style={{textAlign:"center"}}>
        <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
            <h1>대출관련 지원책</h1>
        </div>
        <div className="locate_btn"> 
            <button className="editor_btn">  
                <Link to="/Editor" state={{data:"대출관련 지원책"}} className="editor_go">
                    글쓰기
                </Link>
            </button>
        </div>
         
       <SidebarSupport  />
       <PostList/>
    </div>
    );
};

export default SupportLoan;