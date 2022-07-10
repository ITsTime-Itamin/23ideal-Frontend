import React, { useState } from "react";
import { Link } from "react-router-dom";
import Load_API from "./Load_API";
import "./Read.css"

const NoticeRead = ({id}) => {

    console.log(id);

        return (
        
        <div>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}> 
                <h1>공지사항</h1>
                <hr className="hr"></hr>
            </div>
            <div>
                    <div className="colum"> 
                        제목
                    </div>
                <div className="colum">작성자</div>
            
                <div className="colum">작성일</div>
            </div>
            <Load_API />
        </div>
    )
}

export default NoticeRead;