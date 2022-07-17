import React, { useEffect, useState } from "react";
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
      Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgxMjM2ODd9.JPuJg4fgCI0iTlnOOvVZTcOW6M1e5I1PhqLww43vtvPJhgwxtpiyHqsQF7jVKCdmQYCEhRwqBfVwF2bGaI3P8g"}`,
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
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgxMjM2ODd9.JPuJg4fgCI0iTlnOOvVZTcOW6M1e5I1PhqLww43vtvPJhgwxtpiyHqsQF7jVKCdmQYCEhRwqBfVwF2bGaI3P8g"}`,
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => { 
        console.log(data);
        alert("삭제되었습니다");
      });
  }

  //const ID = ""+id;

  const Scrap=()=>{

    console.log( JSON.stringify("boardId:"+id));

    fetch("/api/v1/scraps", {
      method: "POST",
      cache: "no-cache",
      headers: {
       'Content-Type': 'application/json',  //이걸 꼭 써야된다
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgxMjM2ODd9.JPuJg4fgCI0iTlnOOvVZTcOW6M1e5I1PhqLww43vtvPJhgwxtpiyHqsQF7jVKCdmQYCEhRwqBfVwF2bGaI3P8g"}`,
      },
      body: JSON.stringify({'boardId':id}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
    });
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
      <button onClick={()=>DeletePost()}>삭제하기</button>
      <button onClick={()=>Scrap()}>스크랩</button>
    </div>
  );
};

export default NoticeRead;
