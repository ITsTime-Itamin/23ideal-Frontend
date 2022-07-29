import React, { useEffect, useState } from "react";
import { useLocation,Link} from "react-router-dom";
import styled from "styled-components";
import { GoogleToken } from "../../pages/Login/GoogleLogin";
import "./Read.css";

const PostComment = (props) => {
  const location = useLocation();
  const id = location.state.data;
  const boardType=location.state.boardType;
  const scrapCount=location.state.scrap;
  
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
      <div>
          <Link to="/EditPost" state={{boardId:content.boardId, boardType:boardType, title:content.title, deadLineDate:content.deadLineDate,content:content.content, file:content.imageKeys}}>
          <Modify>수정</Modify>
          </Link>
          <Modify onClick={()=>DeletePost()}>삭제</Modify>
      </div>
      <div style={{ textAlign: "center", position: "relative", top: "70px",width:'50px',left:'40%' }}>
        <h1 style={{width:'50px', textAlign: "center",position: "relative",left:'40%'}}>게시글 보기</h1>
      </div>
      <div style={{textAlign:'center'}}>
        <table style={{position : 'relative', top : '400px', left : '270px' ,width:'1000px',top:'63px',height:'90px'}}>
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
            <td style={{background:'rgba(234, 81, 32, 0.1)',border: '1px solid #FFFFFF'}}>공감수</td>
            <td style={{border:'2px solid #F2F2F2'}}>{scrapCount}</td>
          </tr>
        </table></div>
        <br/><br/><br/>
      {content.length != 0 ? 
        <div>
        <div className="content">  {content.content} </div>
        { content.imageKeys != undefined ?
        <div className="content"> 
        <img src={'https://itamin-backend-images.s3.ap-northeast-2.amazonaws.com/'+content.imageKeys[0]} /> 
        </div> : null}
      </div>
      :
      <div>loading...</div>
      }
      <hr className="hr"></hr>
  <div>
      {ScrapTF()}
      { scrapTF === false ? 
        <Like onClick={()=>Scrap()}> 
          <img src="img/like-09.png" style={{width:'14px', height :'14px'}}/> 공감 </Like>
        : 
        <Like> 
          <img src="img/like_fill-10.png" style={{width:'14px', height :'14px'}}/> 공감 </Like>
      } 
  </div>

  <div>
    {reComment===false ?
        <div >
        <Input onChange={(e)=>setPostcomment(e.target.value)} placeholder="댓글을 입력하세요" /> 
        <Sumbit onClick={()=>{
          postComment(null)
          setReComment(false)}}>입력</Sumbit> 
      </div>
      :
      <div>
        <Input onChange={(e)=>setPostcomment(e.target.value)} placeholder="답글을 입력하세요" /> 
        <Sumbit onClick={()=>{
          postComment(parentsid)
          setReComment(false)}}>입력</Sumbit> 
      </div>
      }
    </div> 

      {GetComment()}
      { getcomment.length != 0 ? getcomment.map( com =>
        ( 
        <div style={{background:'rgba(234, 81, 32, 0.1)', width:'85%',float:'right', left:'30%', right:'20%', padding:'10px'}}>
        <div style={{top:'10px'}}>
          <div style={{float:'left'}}>
          <img src="./img/people.png" style={{width:'33px',height:'33px'}} />
          </div>
          <CommentBox>
            {com.content}<br/>
          </CommentBox>
          {com.children.length != 0 ? com.children.map((i)=>(
           <ReCommentBox>  <img src="./img/recomment.png" style={{width:'11px', height:'11px'}}/>   {i.content}</ReCommentBox>
            )) : null}
           </div>
          <StyleButton2 onClick={()=>{setReComment((prev) => !prev); setParentsid(com.commentId) }}> 답글 </StyleButton2>
          <StyleButton2 onClick={()=>{deleteComment(com.commentId)}}>삭제</StyleButton2>
          </div>
          
         )) : null}
    </div>
  );
};

const Input = styled.input`
position:relative;
float:left;
right:22%;
height:30px;
width:800px; 
float:right;
margin:10px;
`

const Sumbit = styled.button`
  position: relative;
  float:left;
  left:71%;
  margin: 10px;
  border: 1px solid #FFA98E;
  width : 70px;
  font-size : 15px;
  background: #FFA98E;
  color: black;
  cursor: pointer;
  &:focus {
   color: #808080;
  }
`

const Like = styled.button`
  position: relative;
  float:left;
  left:15%;
  margin: 10px;
  border: 1px solid #FFA98E;
  width : 80px;
  font-size : 15px;
  background: #FFA98E;
  color: black;
  cursor: pointer;
  &:focus {
   color: #808080;
  }
`
const Modify = styled.button`
  position: relative;
  float:right;
  right:15%;
  top: 82px;
  margin: 8px;
  border: 1px solid #FFA98E;
  width : 55px;
  font-size : 15px;
  background: #ffffff;
  color: black;
  cursor: pointer;
  &:focus {
   color: #808080;
  }
`

const StyleButton2 = styled.button`
  positin : relative;
  left : 500px;
  top: 40px;
  margin: 10px;
  border: 1px solid #EB7E5D;
  width : 80px;
  font-size : 15px;
  background: #ffffff;
  color: #000000;
  cursor: pointer;
  &:focus {
   color: #808080;
  }
`

const CommentBox = styled.div`
  position:relative;
  background:white;
  width:900px;
  padding:10px;
  margin:5px;
  border:1px solid #D7D6D6;
  float:left;
  }
`

const ReCommentBox = styled.div`
  position:relative;
  width:900px;
  background:white;
  padding:10px;
  margin:5px;
  border:1px solid #D7D6D6;
  float:left;
  left:70px;
  }
`

export default PostComment;