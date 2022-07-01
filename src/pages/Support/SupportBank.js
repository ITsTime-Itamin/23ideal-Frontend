import React from "react";
import { Link } from "react-router-dom";
import PostList from "../../components/PostList";
import SidebarSupport from "../../components/SidebarSupport";

const SupportBank=()=>{
    return(
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>은행별 대출서비스</h1>
            </div>
            <div className="locate_btn"> 
                <button className="editor_btn">  
                    <Link to="/BankEditior" className="editor_go">
                        글쓰기
                    </Link>
                </button>
            </div>
             
           <SidebarSupport  />
           <PostList/>
        </div>
    );
};

export default SupportBank;