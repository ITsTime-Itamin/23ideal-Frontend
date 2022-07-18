import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Table/Table.css"
import Pagination from "./Pagination";

const PostList = ({boardType}) => {

  const headersName = ["no", "제목", "작성일", "작성자", "스크랩수"];
  const [postData,setPostData]=useState([]);
 /* const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);*/
  const path="/api/v1/boards?boardType="+boardType;

  useEffect(()=>{
    fetch(path, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgyMzgwNzd9.mrclnP8N8tZXc50RS6daDAxFYGLhw5v2EyBruZtF5al7ffYLpCBPW9OcQVB99e6Jnnx9D-jQZhVL2ru8SnXnww"}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setPostData(response.data);
      });
  },[]);

  //게시물 스크랩 수 조회
  /*const [scrapNum,setScrapNum]=useState([]);
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
  }

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  let currentPosts = 0;
  if(postData.length != 0){
  currentPosts = postData.data.slice(indexOfFirst, indexOfLast);}
  console.log(currentPosts);*/

  return (
    <>
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
          { boardType === "NOTICE" ?
          ( postData.length != 0 ? postData.data.map((post, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <Link to="/PostRead" state={{ data: post.boardId , boardType: boardType }} className="title"
                  style={{ textAlign: "center", color: "black", listStyle: "none", textDecoration: "none", display: "inline-block", cursor: "pointer", }} >
                  <td> {post.title}</td>
                </Link>
                <td>{post.createdDate.substring(0, 10)}</td>
                <td>{post.userName}</td>
                <td>{post.scraps}</td>
              </tr>
            );
          })
        : <div style={{textAlign:'center'}}>loading...</div>) 
        : ( postData.length != 0 ? postData.data.map((post, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <Link to="/PostComment" state={{ data: post.boardId , boardType: boardType }} className="title"
                style={{ textAlign: "center", color: "black", listStyle: "none", textDecoration: "none", display: "inline-block", cursor: "pointer", }} >
                <td> {post.title}</td>
              </Link>
              <td>{post.createdDate.substring(0, 10)}</td>
              <td>{post.userName}</td>
              <td>{post.scraps}</td>
            </tr>
          );
        })
      : <div style={{textAlign:'center'}}>loading...</div>) 
      }
        </tbody>
      </table>
      <Link to="/ScrapPosts" state={{ data: postData.data }}>
        <button> 내가 스크랩한 게시물 보기</button>
      </Link>
    </>
  );
};

export default PostList;