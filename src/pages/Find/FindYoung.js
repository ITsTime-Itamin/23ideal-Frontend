import React from "react";
import { Link } from "react-router-dom";
import '../Community/Btn.css';
import FindPostList from "../../components/FindPostList";


const FindYoung=()=>{
    return(
        <div>
             <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>청년주택</h1>
            </div>
            <FindPostList boardType={"YOUTH_HOUSE"}/>
        </div>
    )
}

export default FindYoung;