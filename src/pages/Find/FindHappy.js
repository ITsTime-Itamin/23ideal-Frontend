import React from "react";
import SidebarFind from "../../components/SidebarFind";
import FindPostList from "../../components/FindPostList";


const FindHappy=()=>{
    return(
        <div>
             <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>행복주택</h1>
            </div>
            <SidebarFind />
            <FindPostList/>
        </div>
    )
}

export default FindHappy;