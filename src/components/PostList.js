import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Table/Table.css"
import Pagination from "./Pagination";
import { GoogleToken } from "../pages/Login/GoogleLogin";
import styled from "styled-components";
import Banner from "./Banner";

const PostList = ({boardType}) => {

  const headersName = ["no", "제목", "작성일", "작성자", "스크랩수"];
  const headersName_comment = ["no", "제목", "작성일", "작성자", "공감수"];
  const [postData,setPostData]=useState([]);
 /* const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);*/

  const path="/api/v1/boards?boardType="+boardType;
  useEffect(()=>{
    fetch(path, {
      headers: {
        Authorization: `Bearer ${GoogleToken}`,
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
        Authorization: `Bearer ${GoogleToken}`,
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
            {(boardType === "FREE" || boardType === "REVIEW") ?
            headersName_comment.map((item, index) => {
              return (
                <td className="common-table-header-column" key={index}>
                  {item}
                </td>
              );
            }):
            headersName.map((item, index) => {
              return (
                <td className="common-table-header-column" key={index}>
                  {item}
                </td>
              );
            })
          }
          </tr>
        </thead>
        <tbody >
          { (boardType === "FREE" || boardType === "REVIEW") ?
          ( postData.length != 0 ? postData.data.map((post, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <Link to="/PostComment" state={{ data: post.boardId , boardType: boardType }} className="postTitle"
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
              <Link to="/PostRead" state={{ data: post.boardId , boardType: boardType }} className="postTitle"
                style={{ textAlign: "center", color: "black", listStyle: "none", textDecoration: "none", display: "inline-block", cursor: "pointer", }} >
                <td> {post.title}</td>
              </Link>
              <td>{post.createdDate.substring(0, 10)}</td>
              <td>관리자</td>
              <td>{post.scrapCount}</td>
            </tr>
          );
        })
      : <div style={{textAlign:'center'}}>loading...</div>) 
      }
        </tbody>
      </table>
      { (boardType === "FREE" || boardType === "REVIEW") ?
        null
        :
        <Link to="/ScrapPosts" state={{ data: postData.data }}>
        <StyleButton> 
          <img src="img/GoScrapIcon.png" style={{width:'20px', height :'20px'}}/>
          내가 스크랩한 게시물 보기
        </StyleButton>
      </Link>
      }
      <Banner />
    </>
  );
};

const StyleButton = styled.button`
  margin: 20px;
  border: 0px solid;
  background: transparent;
  color: #000000;
  cursor: pointer;
  font-size :20px;
  &:focus {
   color: #808080;
  }
`

export default PostList;