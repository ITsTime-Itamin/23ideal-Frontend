import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Read.css";

const NoticeRead = (props) => {
  const location = useLocation();
  const id = location.state.data;
  const boardType=location.state.boardType;

  /*useEffect(()=>{
    console.log(id);});*/

  const [content, setContent] = useState([]);
  const path = "/api/v1/boards/" + id;

  fetch(path, {
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTc4NTMxMjF9.K7IH2LetJRhvg-69eLDghYh1IG5HonY9F9LVW-dubTfP9lnVlrA20lhAp4TkmuhS73TMeiJuOK9EQjsrs8GBVA"}`,
    },
  })
    .then((res) => res.json())
    .then((response) => {
      setContent(response.data);
    });

  const unformatDate = "" + content.createdDate;
  const date = unformatDate.substring(0, 10);

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
        {content.boardId} <br />
        {content.title} <br />
        {content.userName} <br />
        {date}
        <br />
        {content.content}
      </div>
      <Link to="/EditPost" state={{boardId:content.boardId, boardType:boardType, title:content.title, deadLineDate:content.deadLineDate,content:content.content}}>
      <button>수정하기</button>
      </Link>
    </div>
  );
};

export default NoticeRead;
