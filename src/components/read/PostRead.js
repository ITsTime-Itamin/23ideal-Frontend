import React, { useState } from "react";
import { useLocation} from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Read.css";

const PostRead = (props) => {
  const location = useLocation();
  const id = location.state.data;
  const boardType=location.state.boardType;

  let scrapImg="img/GoScrapIcon.png";

  const [content, setContent] = useState([]);
  const [scrapTF,setScrapTF]=useState(false);
  const path = "/api/v1/boards/" + id;


  fetch(path, {
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTg5NDEwMTR9.F9FtZRdxJWuf-vDWAYYeqkTtz11e9IRXkoZtpBE4EggPKfE4fDefVf6-MneoRzAOUUlNQ5lOcB4x4-__cEsOdw"}`,
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
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTg5NDEwMTR9.F9FtZRdxJWuf-vDWAYYeqkTtz11e9IRXkoZtpBE4EggPKfE4fDefVf6-MneoRzAOUUlNQ5lOcB4x4-__cEsOdw"}`,
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
    fetch("/api/v1/scraps", {
      method: "POST",
      cache: "no-cache",
      headers: {
       'Content-Type': 'application/json',  //이걸 꼭 써야된다
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTg5NDEwMTR9.F9FtZRdxJWuf-vDWAYYeqkTtz11e9IRXkoZtpBE4EggPKfE4fDefVf6-MneoRzAOUUlNQ5lOcB4x4-__cEsOdw"}`,
      },
      body: JSON.stringify({'boardId':id}),
    })
      .then(() => {
        if(scrapTF==true){
          scrapImg="img/ScrapIcon.png"
          alert("스크랩 취소");
        }
        else if(scrapTF==false) {
          scrapImg="img/GoScrapIcon.png"
          alert("스크랩 완료");
        }
    });
  }

  //스크랩 여부 확인
  const ScrapTF=()=>{
    fetch("api/v1/scraps/whether", {
      method:"POST",
      cache: "no-cache",
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTg5NDEwMTR9.F9FtZRdxJWuf-vDWAYYeqkTtz11e9IRXkoZtpBE4EggPKfE4fDefVf6-MneoRzAOUUlNQ5lOcB4x4-__cEsOdw"}`,
      },
      body:JSON.stringify({'boardId':id}),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data.isScraped);
        setScrapTF(response.data.isScraped);
    });
  }

  let imgPath="";
  if(content.imageKeys != undefined) {
   imgPath="/s3/image" + content.imageKeys[0];
  }

  return (
    <div>
      <div style={{ textAlign: "center", position: "relative", top: "100px" }}>
        <h1>PostRead</h1>
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
      <StyleButton>수정하기</StyleButton>
      </Link>
      <StyleButton onClick={()=>DeletePost()}>삭제하기</StyleButton>
      {ScrapTF()}
      { scrapTF === false ? 
        <StyleButton onClick={()=>Scrap()}> 
          <img src="img/GoScrapIcon.png" style={{width:'14px', height :'14px'}}/> 스크랩 </StyleButton>
        : 
        <StyleButton onClick={()=>Scrap()}> 
          <img src="img/ScrapIcon.png" style={{width:'14px', height :'14px'}}/> 스크랩 취소 </StyleButton>
      } 
    </div>
  );
};

const StyleButton = styled.button`
  margin: 20px;
  border: 1px solid;
  background: #ffffff;
  color: #000000;
  cursor: pointer;
  &:focus {
   color: #808080;
  }
`

export default PostRead;
