import React from "react";
import SidebarFind from "../../components/SidebarFind";
import FindPostList from "../../components/FindPostList";


const FindRent=()=>{
    return(
        <div>
             <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>임대주택</h1>
            </div>
            <SidebarFind />
            <FindPostList/>
        </div>
    )
}

export default FindRent;