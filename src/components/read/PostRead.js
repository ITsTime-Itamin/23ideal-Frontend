import React, { useState } from "react";
import { useLocation , Link} from "react-router-dom";
import styled from "styled-components";
import { GoogleToken } from "../../pages/Login/GoogleLogin";
import "./Read.css";

const PostRead = (props) => {
  const location = useLocation();
  const id = location.state.data;
  const boardType=location.state.boardType;
  const scrapCount=location.state.scrap;

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
      <div style={{  position: "relative", top: "70px" }}>
        <h1 style={{textAlign: "center",}}>게시글 보기</h1>
        <hr style={{width:'1000px', height:'0.7px', background:'black',border:'0px',textAlign: "center",}}></hr>
      </div>
      <div style={{textAlign:'center'}}>
        <table style={{position : 'relative', top : '85px', left : '270px' ,width:'1000px',top:'63px',height:'90px'}}>
          <tr style={{border:'1px solid'}}>
            <td style={{background:'rgba(234, 81, 32, 0.1)',border: '1px solid #FFFFFF'}}>제목</td>
            <td colSpan="3" style={{border:'2px solid #F2F2F2'}}>{content.title}</td>
          </tr>
          <tr>
            <td style={{background:'rgba(234, 81, 32, 0.1)',border: '1px solid #FFFFFF'}}>작성자</td>
            <td colSpan="3" style={{border:'2px solid #F2F2F2'}}>관리자</td>
          </tr>
          <tr>
            <td style={{background:'rgba(234, 81, 32, 0.1)',border: '1px solid #FFFFFF'}}>작성일</td>
            <td style={{border:'2px solid #F2F2F2'}}>{date}</td>
            <td style={{background:'rgba(234, 81, 32, 0.1)',border: '1px solid #FFFFFF'}}>스크랩수</td>
            <td style={{border:'2px solid #F2F2F2'}}>{scrapCount}</td>
          </tr>
        </table></div>
        <br/><br/><br/>
        {/*<div className="colum">제목</div>
        <div className="colum">작성자</div>
  <div className="colum">작성일</div>
  
        <div className="title">
          {content.title} 
        </div>

        <div className="title"> 관리자</div>

        <div  className="title"> {date} </div>*/}
        <div>
        <div className="content">  
        { content.content != undefined ?
          content.content.split('\n').map( line => {
            return (<span>{line}<br/></span>)
          }) :null
        }
        {/*content.content*/} <br/><br/>
        { content.imageKeys != undefined ?
         <img src={'https://itamin-backend-images.s3.ap-northeast-2.amazonaws.com/'+content.imageKeys[0]} /> 
        : null}  </div> 
        <hr style={{width:'1010px', height:'0.4px', background:'black',border:'0px',textAlign: "center",}}></hr>
        </div>

      <Link to="/EditPost" state={{boardId:content.boardId, boardType:boardType, title:content.title, deadLineDate:content.deadLineDate,content:content.content, file:content.imageKeys}}>
      <StyleButton>수정</StyleButton>
      </Link>
      <StyleButton onClick={()=>DeletePost()}>삭제</StyleButton>
      {ScrapTF()}
      { scrapTF === false ? 
        <StyleButton1  onClick={()=>Scrap()}> 
          <img src="img/GoScrapIcon.png" style={{width:'14px', height :'14px',right:'100px'}}/> 스크랩 </StyleButton1>
        : 
        <StyleButton1  onClick={()=>Scrap()}> 
          <img src="img/ScrapIcon.png" style={{width:'14px', height :'14px',right:'10%'}}/> 스크랩 취소 </StyleButton1>
      } 
    </div>
  );
};


const StyleButton = styled.button`
  position: relative;
  float:right;
  right:17%;
  top: 20px;
  margin: 10px;
  border: 1px solid #FFA98E;
  width : 55px;
  font-size : 15px;
  background: #FFA98E;
  color: black;
  cursor: pointer;
  &:focus {
   color: #808080;
  }
`

const StyleButton1 = styled.button`
  position: relative;
  float:right;
  right:17%;
  top: 20px;
  margin: 10px;
  border: 1px solid #FFA98E;
  width : 120px;
  font-size : 15px;
  background: #FFA98E;
  color: black;
  cursor: pointer;
  &:focus {
   color: #808080;
  }
`

export default PostRead;