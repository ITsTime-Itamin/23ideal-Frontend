import React from "react";
import { Link } from "react-router-dom";
import PostList from "../../components/PostList";
import SidebarSupport from "../../components/SidebarSupport";
import '../Community/Btn.css';

const SupportLoan=()=>{
    return(
        <div style={{textAlign:"center"}}>
        <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
            <h1>대출관련 지원책</h1>
        </div>
         
       <SidebarSupport  />
       <PostList boardType={"LOAN_SUPPORT"}/>
    </div>
    );
};

export default SupportLoan;