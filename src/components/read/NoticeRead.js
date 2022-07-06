import React from "react";
import { Link } from "react-router-dom";
import "./Read.css"

const NoticeRead = props => {
    return (
        <div>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}> 
                <h1>공지사항</h1>
                <hr className="hr"></hr>
            </div>

            <div> 
                <div className="colum">제목</div>

                <div className="colum">작성자</div>
            
                <div className="colum">작성일</div>
            </div>


        </div>
    )
}

export default NoticeRead;