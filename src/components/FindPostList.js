import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Table/Table.css"
import Pagination from "./Pagination";

const PostList = ({boardType}) => {

  const headersName = ["no", "제목", "작성일", "작성자", "스크랩수"];
  const [postData,setPostData]=useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const path="/api/v1/boards?boardType="+boardType;

  const board=["YOUTH_HOUSE","RENTAL_HOUSE","HAPPY_HOUSE"];
  const allpost=[];
  if(boardType != "ALL") {
    fetch(path, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTg5NDEwMTR9.F9FtZRdxJWuf-vDWAYYeqkTtz11e9IRXkoZtpBE4EggPKfE4fDefVf6-MneoRzAOUUlNQ5lOcB4x4-__cEsOdw"}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setPostData(response.data);
      });
  }/*
  else if(boardType == "ALL") {
    for (var i=0;i<board.length;i++){
    fetch("/api/v1/boards?boardType="+board[i], {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTg5NDEwMTR9.F9FtZRdxJWuf-vDWAYYeqkTtz11e9IRXkoZtpBE4EggPKfE4fDefVf6-MneoRzAOUUlNQ5lOcB4x4-__cEsOdw"}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        allpost.push(response.data.data);
      });
    }
  }
  
const finalallpost=[];
  useEffect(()=>{
    if(allpost.length==3){
      allpost.map((post)=>finalallpost.push(post));
    }
  },[allpost])*/

  //게시물 스크랩 수 조회
 /* const [scrapNum,setScrapNum]=useState([]);
  const num=[];

  if( postData.length != 0) {
    postData.data.map((post)=>{
      const path = "/api/v1/scraps/"+post.boardId;
      fetch(path, {
        headers: {
          Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgyMDQ3MDd9.TANacKhSh5u3Md23mm9bOvGO_5jvegXIG9ATmR9aVyaDl01KdT3m_5m3Np5_IwBJZCS897F03kVk_6m-WhsXlw"}`,
        },
      })
      .then((res) => res.json())
      .then((response) => {
        num.push(response.data.scrapCount);
      });
    }); 
  }*/

 /* const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  let currentPosts = 0;
  if(postData.length != 0){
  currentPosts = postData.data.slice(indexOfFirst, indexOfLast);}
  console.log(currentPosts);*/


  return (
    <>
    <main>
      <table className="common-table">
        <thead>
          <tr>
            {headersName.map((item, index) => {
              return (
                <td className="common-table-header-column" key={index}>
                  {item}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody >
          {  (boardType!="ALL" && postData.length != 0) ? postData.data.map((post, i) => {
           // const unfomat=""+post.deadLineDate;
            return (
              <tr>
                <td>{i + 1}</td>
                <Link to="/PostRead" state={{ data: post.boardId , boardType: boardType }} className="postTitle"
                  style={{ textAlign: "center", color: "black", listStyle: "none", textDecoration: "none", display: "inline-block", cursor: "pointer",}} >
                  <td> {post.title}</td>
                </Link>
                <td>{post.createdDate.substring(0, 10)}</td>
                <td>{post.userName}</td>
                <td>{post.scrapCount}</td>
              </tr>
            );
          })
        : <div style={{textAlign:'center'}}>loading...</div>}
        </tbody>
      </table>
      <Link to="/ScrapPosts" state={{ data: postData.data }}>
        <button> 내가 스크랩한 게시물 보기</button>
      </Link>
      </main>
      <footer>
      {/* postData.length != 0 ?
        <Pagination
          total={postData.data.length}
          limit={limit}
          page={page}
          setPage={setPage}
          totalPage={postData.totalPage} />
    : null*/ }
       </footer>
    </>
  );
};

export default PostList;