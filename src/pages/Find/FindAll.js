import React from "react";
import { Link } from "react-router-dom";
import SidebarFind from "../../components/SidebarFind";
import FindPostList from "../../components/FindPostList";


const FindAll=()=>{
    return(
        <div>
             <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>모집공고 전체보기</h1>
            </div>
            <div className="locate_btn"> 
                <button className="editor_btn">  
                    <Link to="/AllEditor" className="editor_go">
                        글쓰기
                    </Link>
                </button>
            </div>
            <SidebarFind />
            <FindPostList/>
        </div>
    )
}

export default FindAll;