import React, { useState } from "react";
import { Link } from "react-router-dom";
import FindPostList from "../../components/FindPostList";
import '../Community/Btn.css';

const FindRent=()=>{

    return(
        <div>
             <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>임대주택</h1>
            </div>
            <FindPostList boardType={"RENTAL_HOUSE"}/>
        </div>
    )
}

export default FindRent;