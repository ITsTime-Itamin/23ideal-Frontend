import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FindPostList from "../../components/FindPostList";
import '../Community/Btn.css';


const FindHappy=()=>{
    return(
        <div>
             <div style={{textAlign:"center", position : "relative" , top : "80px" }}>
                <h1>행복주택</h1>
            </div>
            <FindPostList boardType={"HAPPY_HOUSE"}/>
        </div>
    )
}

export default FindHappy;