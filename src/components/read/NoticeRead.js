import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Read.css"

const NoticeRead = props => {

    const location=useLocation();
    const id=location.state.data;

    /*useEffect(()=>{
    console.log(id);});*/

    const[content,setContent]=useState(null);
    const path='/api/v1/boards/'+id;

    fetch(path,{headers:{"Authorization":`Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTc1MzAwMzZ9._boWC1F7DbxqCtzxt8VzJzZKDhQ5krRQrNHrQcYC0jEuaVXT3jrhuYtjDmPu3BNGUta89Y-g_xN0AK6h2DL-RQ'}`}}).then(res=>(res.json())).then(response=>{setContent(response.data);});

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
                {content && <textarea rows={7} value={JSON.stringify(content, null, 2)} readOnly={true} />} 
            </div>
        </div>
    )
}

export default NoticeRead;