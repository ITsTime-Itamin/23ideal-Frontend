import React from "react";
import { Link } from "react-router-dom";
import SidebarFind from "../../components/SidebarFind";
import FindPostList from "../../components/FindPostList";


const FindYoung=()=>{
    return(
        <div>
             <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>청년주택</h1>
            </div>
            <div className="locate_btn"> 
                <button className="editor_btn">  
                    <Link to="/YoungEditor" className="editor_go">
                        글쓰기
                    </Link>
                </button>
            </div>
            <SidebarFind />
            <FindPostList/>
        </div>
    )
}

export default FindYoung;