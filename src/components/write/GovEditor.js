import React from "react";
import "./Editor.css"


const GovEditor = props => {
    return (
        <div>
            <div style={{textAlign:"center", position : "relative" , top : "100px" }}> 
                <h1>정보의 보조금 지원 정책</h1>
                <hr className="hr"></hr>
            </div>
            <div >
                <button type="submit" className="submit_btn">등록</button>
                <button className="goback_btn">
                   뒤로가기 
                </button>
            </div>
            <div> 
                <div style={{position : "relative" , top : "140px" , left :"380px", fontSize : "28px" , letterSpacing :"2px"}}>제목</div>
                <input type='text' className="title_txt" name = 'title' placeholder='  제목을 입력해주세요'/>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div> 
                <div style={{position : "relative" , top : "60px" , left :"340px", fontSize : "28px" , letterSpacing :"2px"}}>첨부파일</div>
                <input type='file' className="paste" name = 'title' placeholder='  파일을 업로드 해주세요'/>
            </div>
       
            <div>
                 <div style={{position : "relative" , top : "60px" , left :"380px", fontSize : "28px" , letterSpacing :"2px"}}>내용</div>
                <textarea type='text'  className= 'txt' name="content" placeholder=" 내용을 입력해주세요"></textarea>
            </div>
           
        </div>
    )
}
export default GovEditor;