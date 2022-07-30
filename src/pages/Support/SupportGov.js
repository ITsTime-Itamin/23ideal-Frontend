import React from "react";
import { Link } from "react-router-dom";
import SidebarSupport from "../../components/SidebarSupport";
import PostList from "../../components/PostList";
import '../Community/Btn.css';

const SupportGov=()=>{
    return(
        <div style={{textAlign:"center"}}>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>정부의 보조금 지원 정책</h1>
            </div>
             
           <SidebarSupport  />
           <PostList boardType={"DEPOSIT"}/>
        </div>
    );
};

export default SupportGov;