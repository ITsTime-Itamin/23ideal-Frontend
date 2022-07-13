import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Read.css";

const NoticeRead = (props) => {
  const location = useLocation();
  const id = location.state.data;

  /*useEffect(()=>{
    console.log(id);});*/

  const [content, setContent] = useState([]);
  const path = "/api/v1/boards/" + id;

  fetch(path, {
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTc3MjAyNDl9.oZU0B7oZj6cHkhIxVZhQo2r1KUIQ3m4t86yujDvpjAc068Xvklz5kvd-IEBYcgeixxlqKjRxbWzTJnag_mq3-w"}`,
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
    </div>
  );
};

export default NoticeRead;
