import React, { useState } from "react";
import { Link } from "react-router-dom";
import SidebarFind from "../../components/SidebarFind";
import FindPostList from "../../components/FindPostList";
import Editor from "../../components/write/Editor";
import PostList from "../../components/PostList";

const FindRent=()=>{

    return(
        <div>
             <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>임대주택</h1>
            </div>
            <div className="locate_btn"> 
                <button className="editor_btn">  
                    <Link to="/Editor"  state={{data:"임대주택"}} className="editor_go" >
                        글쓰기
                    </Link>
                </button>
            </div>
            <SidebarFind />
            <PostList boardType={"RENTAL_HOUSE"}/>
        </div>
    )
}

export default FindRent;