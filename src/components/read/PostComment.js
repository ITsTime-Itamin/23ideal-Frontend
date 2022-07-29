import React, { useEffect, useState } from "react";
import { useLocation,Link} from "react-router-dom";
import styled from "styled-components";
import { GoogleToken } from "../../pages/Login/GoogleLogin";
import "./Read.css";

const PostComment = (props) => {
  const location = useLocation();
  const id = location.state.data;
  const boardType=location.state.boardType;
  
  let scrapImg="img/GoScrapIcon.png";

  const [content, setContent] = useState([]);
  const [scrapTF,setScrapTF]=useState(false);
  const path = "/api/v1/boards/" + id;

  //게시물 상세내용 불러오기
  useEffect(()=>{
    fetch(path, {
      headers: {
        Authorization: `Bearer ${GoogleToken}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setContent(response.data);
      });
  },[])
  const unformatDate = "" + content.createdDate;
  const date = unformatDate.substring(0, 10);

  //게시물 삭제하기
  const DeletePost=()=>{
    fetch(path, {
      headers: {
        Authorization: `Bearer ${GoogleToken}`,
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
        Authorization: `Bearer ${GoogleToken}`,
      },
      body: JSON.stringify({'boardId':id}),
    })
      .then(() => {
        if(scrapTF==true){
          scrapImg="img/ScrapIcon.png"
        }
        else if(scrapTF==false) {
          scrapImg="img/GoScrapIcon.png"
          alert("공감 완료");
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

//댓글입력하기
  const [postcomment,setPostcomment]=useState("");
  const [reComment,setReComment]=useState(false);
  const [parentsid,setParentsid]=useState(null); //답글달기 (부모아이디)

  const postComment =(commentId)=>{
    fetch("api/v1/comments", {
      method:"POST",
      cache: "no-cache",
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GoogleToken}`,
      },
      body:JSON.stringify({'parentCommentId':commentId,'boardId':id,'content':postcomment}),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response.data);
    });
    setPostcomment("");
  }

  //댓글 조회하기
  const [getcomment,setGetcomment]=useState([]);
  const GetComment=()=>{
    const commentpath="api/v1/comments/"+id;

    fetch(commentpath, {
      cache: "no-cache",
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GoogleToken}`,
      },
    })
      .then((res) => res.json())
      .then((response) => 
      setGetcomment(response.data)
    )
  }

  //댓글 삭제하기
  const deleteComment=(commentId)=>{
    fetch("api/v1/comments", {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${GoogleToken}`,
      },
      method: "DELETE",
      body:JSON.stringify({'commentId':commentId})
    })
      .then((res) => res.json())
      .then((data) => { 
        console.log(data);
      });
  console.log(commentId);
  }

  return (
    <div>
      <div style={{ textAlign: "center", position: "relative", top: "100px" }}>
        <h1>PostComment</h1>
        <hr className="hr"></hr>
      </div>
      <div style={{textAlign:'center'}}>
        <table style={{position : 'relative', top : '400px', left : '270px' ,width:'1000px',top:'63px',height:'90px'}}>
          <tr style={{border:'1px solid'}}>
            <td style={{background:'rgba(234, 81, 32, 0.1)',border: '1px solid #FFFFFF'}}>제목</td>
            <td colSpan="3" style={{border:'2px solid #F2F2F2'}}>{content.title}</td>
          </tr>
          <tr>
            <td style={{background:'rgba(234, 81, 32, 0.1)',border: '1px solid #FFFFFF'}}>작성자</td>
            <td colSpan="3" style={{border:'2px solid #F2F2F2'}}>{content.userName}</td>
          </tr>
          <tr>
            <td style={{background:'rgba(234, 81, 32, 0.1)',border: '1px solid #FFFFFF'}}>작성일</td>
            <td style={{border:'2px solid #F2F2F2'}}>{date}</td>
            
          </tr>
        </table></div>
      {/*content.length != 0 ? 
      
      <div>
        <div className="colum">제목</div>
        <div className="colum">작성자</div>
        <div className="colum">작성일</div>
        <div className="title"> {content.title} <br /></div>
        <div className="title"> {content.userName} <br /></div>
        <div className="title"> {date} <br /></div>
        <br/
        <div className="content">  {content.content} </div>
        { content.imageKeys != undefined ?
        <div className="content"> 
        <img src={'https://itamin-backend-images.s3.ap-northeast-2.amazonaws.com/'+content.imageKeys[0]} /> 
        </div> : null}
      </div>
      :*/
      <div>loading...</div>
      }
      <div className="fix_btn">
          <Link to="/EditPost" state={{boardId:content.boardId, boardType:boardType, title:content.title, deadLineDate:content.deadLineDate,content:content.content, file:content.imageKeys}}>
          <StyleButton style={{right:'10px', position:"relative"}} >수정하기</StyleButton>
          </Link>
          <StyleButton style={{right:'50%', position:'relative'}} onClick={()=>DeletePost()}>삭제하기</StyleButton>
      </div>

      
      {ScrapTF()}
      { scrapTF === false ? 
        <StyleButton onClick={()=>Scrap()}> 
          <img src="img/like-09.png" style={{width:'14px', height :'14px'}}/> 공감 </StyleButton>
        : 
        <StyleButton> 
          <img src="img/like_fill-10.png" style={{width:'14px', height :'14px'}}/> 공감 </StyleButton>
      } 

      {GetComment()}
      { getcomment.length != 0 ? getcomment.map( com =>
        ( <div>
          {com.userId}
          {com.content}<br/>
          {com.children.length != 0 ? com.children.map((i)=>(
            <div>{i.content}</div>
          )) : null}
          <StyleButton onClick={()=>{setReComment((prev) => !prev); setParentsid(com.commentId) }}> 답글 </StyleButton>
          <StyleButton onClick={()=>{deleteComment(com.commentId)}}>삭제</StyleButton>
          </div>
         )) : null
      }
      {reComment===false ?
      <>
        <div className="comment">
        <input style={{width:"1000px"}} onChange={(e)=>setPostcomment(e.target.value)} placeholder="댓글을 입력하세요" /> 
        <StyleButton onClick={()=>{
          postComment(null) 
          setReComment(false)
        }}>입력</StyleButton> 
        </div>
      </>
      :
      <> 
        <input style={{width:"1000px"}} onChange={(e)=>setPostcomment(e.target.value)} placeholder="답글을 입력하세요" /> 
        <StyleButton onClick={()=>{
          postComment(parentsid)
          setReComment(false)}}>입력</StyleButton> 
      </>
      }
    </div>
  );
};

const StyleButton = styled.button`
  positin : relative;
  left : 200px;
  top: 40px;
  margin: 20px;
  border: 1px solid #EB7E5D;
  width : 100px;
  font-size : 18px;
  background: #ffffff;
  color: #000000;
  cursor: pointer;
  &:focus {
   color: #808080;
  }
`

export default PostComment;