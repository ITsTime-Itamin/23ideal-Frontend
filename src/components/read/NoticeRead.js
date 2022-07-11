import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Read.css"

const NoticeRead = props => {

    const[content,setContent]=useState(null);

    fetch('/api/v1/boards/1',{headers:{"Authorization":`Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTc0MjAzOTh9.YnSDzVBPiidrgR08KG24dAw9bCdvjWfOQE0CO6vMEAfCMq3Umn307EXcycLcnWsksIPMHAjy6AVzDNaz4VJtUw'}`}}).then(res=>(res.json())).then(response=>{setContent(response.data);});

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
            {content && <textarea rows={7} value={JSON.stringify(content, null, 2)} readOnly={true} />} 
        </div>
    )
}

export default NoticeRead;