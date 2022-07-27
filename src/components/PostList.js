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
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTg0MDA5ODZ9.JwV1UJzO1oC6JbXYBR6eCkGXdTpoUAm95ZrpUb0Jap2Z7rhnUXNaVh2QWJJN5JlaxWvSdvbPKlNMKuu4zvWpDQ"}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setPostData(response.data);
      });
  },[]);

  /*const TotalBoardType=["NOTICE","DEPOSIT","REVIEW","JOB","YOUTH_HOUSE","RENTAL_HOUSE","HAPPY_HOUSE","LOAN_HOUSE"];
  const totalposts=[];
  TotalBoardType.map((data)=>{
    fetch("/api/v1/boards?boardType="+data, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgyOTQ4MzN9.e-FJ4hTYzdnDMSdSant9s6CEvW2hCH-jT2rQErsPgisUYf-iHatqvHhU2_Dr3Oybm9UcwKxtIcNIWRJT5rssUQ"}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        totalposts.push(response.data.data);
      });
  })*/

  /*const indexOfLast = currentPage * postsPerPage;
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
          { (boardType === "FREE" || boardType === "REVIEW") ?
          ( postData.length != 0 ? postData.data.map((post, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <Link to="/PostComment" state={{ data: post.boardId , boardType: boardType }} className="title"
                  style={{ textAlign: "center", color: "black", listStyle: "none", textDecoration: "none", display: "inline-block", cursor: "pointer", }} >
                  <td> {post.title}</td>
                </Link>
                <td>{post.createdDate.substring(0, 10)}</td>
                <td>{post.userName}</td>
                <td>{post.scrapCount}</td>
              </tr>
            );
          })
        : <div style={{textAlign:'center'}}>loading...</div>) 
        : ( postData.length != 0 ? postData.data.map((post, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <Link to="/PostRead" state={{ data: post.boardId , boardType: boardType }} className="title"
                style={{ textAlign: "center", color: "black", listStyle: "none", textDecoration: "none", display: "inline-block", cursor: "pointer", }} >
                <td> {post.title}</td>
              </Link>
              <td>{post.createdDate.substring(0, 10)}</td>
              <td>{post.userName}</td>
              <td>{post.scrapCount}</td>
            </tr>
          );
        })
      : <div style={{textAlign:'center'}}>loading...</div>) 
      }
        </tbody>
      </table>
      <Link to="/ScrapPosts" /*state={{ data: totalposts }}*/>
        <button> 내가 스크랩한 게시물 보기</button>
      </Link>
    </>
  );
};

export default PostList;