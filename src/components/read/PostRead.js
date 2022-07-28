import React, { useState } from "react";
import { useLocation , Link} from "react-router-dom";
import styled from "styled-components";
import { GoogleToken } from "../../pages/Login/GoogleLogin";
import "./Read.css";


const PostRead = (props) => {
  const location = useLocation();
  const id = location.state.data;
  const boardType=location.state.boardType;

  let scrapImg="img/GoScrapIcon.png";

  const [content, setContent] = useState([]);
  const [scrapTF,setScrapTF]=useState(false);
  const path = "/api/v1/boards/" + id;
  
  //게시물 상세내용 조회
  fetch(path, {
    headers: {
      Authorization: `Bearer ${GoogleToken}`,
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
        Authorization: `Bearer ${GoogleToken}`,
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => { 
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
        Authorization: `Bearer ${GoogleToken}`,
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
        Authorization: `Bearer ${GoogleToken}`,
      },
      body:JSON.stringify({'boardId':id}),
    })
      .then((res) => res.json())
      .then((response) => {
        setScrapTF(response.data.isScraped);
    });
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
        <div className="title">
          {content.title} 
        </div>

        <div className="title"> 관리자</div>

        <div  className="title"> {date} </div>
        <br />

        <div className="content">  {content.content} </div>
 
        <div className="content"> 
        <img src={'https://itamin-backend-images.s3.ap-northeast-2.amazonaws.com/'+content.imageKeys[0]} /> 
        </div>
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

  background: #000000;
  color: #000000;
  cursor: pointer;
  &:focus {
   color: #808080;
  }
`

export default PostRead;
