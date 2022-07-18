import React, { useState } from "react";
import { useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import "./Read.css";

const NoticeRead = (props) => {
  const location = useLocation();
  const id = location.state.data;
  const boardType=location.state.boardType;

  const [content, setContent] = useState([]);
  const path = "/api/v1/boards/" + id;

  fetch(path, {
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgyMDQ3MDd9.TANacKhSh5u3Md23mm9bOvGO_5jvegXIG9ATmR9aVyaDl01KdT3m_5m3Np5_IwBJZCS897F03kVk_6m-WhsXlw"}`,
    },
  })
    .then((res) => res.json())
    .then((response) => {
      setContent(response.data);
    });

  const unformatDate = "" + content.createdDate;
  const date = unformatDate.substring(0, 10);

  const DeletePost=()=>{
    fetch(path, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgyMDQ3MDd9.TANacKhSh5u3Md23mm9bOvGO_5jvegXIG9ATmR9aVyaDl01KdT3m_5m3Np5_IwBJZCS897F03kVk_6m-WhsXlw"}`,
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => { 
        console.log(data);
        alert("삭제되었습니다");
        window.location.assign("http://localhost:3000/");
      });
  }

  //스크랩하기
  const Scrap=()=>{

    console.log( JSON.stringify("boardId:"+id));

    fetch("/api/v1/scraps", {
      method: "POST",
      cache: "no-cache",
      headers: {
       'Content-Type': 'application/json',  //이걸 꼭 써야된다
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgyMDQ3MDd9.TANacKhSh5u3Md23mm9bOvGO_5jvegXIG9ATmR9aVyaDl01KdT3m_5m3Np5_IwBJZCS897F03kVk_6m-WhsXlw"}`,
      },
      body: JSON.stringify({'boardId':id}),
    })
      .then(() => {
        alert("스크랩을 완료하였습니다");
        window.location.assign("http://localhost:3000/");
    });
  }

  let imgPath="";
  if(content.imageKeys != undefined) {
   imgPath="/s3/image" + content.imageKeys[0];
  }

  return (
    <div>
      <div style={{ textAlign: "center", position: "relative", top: "100px" }}>
        <h1>공지사항</h1>
        <hr className="hr"></hr>
      </div>
      <div>
        <div className="colum">제목</div>
        <div className="colum">작성자</div>
        <div className="colum">작성일</div>
        {content.boardId}<br/>
        {content.title} <br />
        {content.userName} <br />
        {date}
        <br />
        {content.content}
        <img src={imgPath}/>
      </div>
      <Link to="/EditPost" state={{boardId:content.boardId, boardType:boardType, title:content.title, deadLineDate:content.deadLineDate,content:content.content, file:content.imageKeys}}>
      <button>수정하기</button>
      </Link>
      <button onClick={()=>DeletePost()}>삭제하기</button>
      <button onClick={()=>Scrap()}>스크랩</button>
    </div>
  );
};

export default NoticeRead;