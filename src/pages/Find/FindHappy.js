import React from "react";
import { Link } from "react-router-dom";
import FindPostList from "../../components/FindPostList";


const FindHappy=()=>{
    return(
        <div>
             <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>행복주택</h1>
            </div>
            <div className="locate_btn"> 
                <button className="editor_btn">  
                    <Link to="/Editor" state={{data:"행복주택", boardType:"HAPPY_HOUSE"}} className="editor_go">
                        글쓰기
                    </Link>
                </button>
            </div>
            <FindPostList boardType={"HAPPY_HOUSE"}/>
        </div>
    )
}

export default FindHappy;