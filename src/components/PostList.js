import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoticeRead from "./read/NoticeRead";

const PostList = ({boardType}) => {

  const headersName = ["no", "제목", "작성일", "작성자", "스크랩수"];
  const [postData,setPostData]=useState([]);

  useEffect(()=>{
    fetch("/api/v1/boards", {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgyMzgwNzd9.mrclnP8N8tZXc50RS6daDAxFYGLhw5v2EyBruZtF5al7ffYLpCBPW9OcQVB99e6Jnnx9D-jQZhVL2ru8SnXnww"}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setPostData(response.data);
      });
  },[]);

 /* useEffect(()=>{
   const posts=[postData.data];
   console.log(posts[0]);
  },[postData])*/

  //posts.push(postData.data);
  //console.log(postData);

  const NUM=[
    {id:'13',data:1},
    {id:"14",data:3}
  ];

  //게시물 스크랩 수 조회
  if( postData.length != 0) {
 postData.data.map((sample)=>{
    const path = "/api/v1/scraps/"+sample.boardId;
    fetch(path, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgyMzgwNzd9.mrclnP8N8tZXc50RS6daDAxFYGLhw5v2EyBruZtF5al7ffYLpCBPW9OcQVB99e6Jnnx9D-jQZhVL2ru8SnXnww"}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        NUM.push({id:sample.boardId, data: response.data.scrapCount});
      });
  }); }

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
          
          { postData.length != 0 ? postData.data.map((sample, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <Link to="/NoticeRead" state={{ data: sample.boardId , boardType: boardType }} className="title"
                  style={{ textAlign: "center", color: "black", listStyle: "none", textDecoration: "none", display: "inline-block", cursor: "pointer", }} >
                  <td> {sample.title}</td>
                </Link>
                <td>{sample.createdDate.substring(0, 10)}</td>
                <td>{sample.userName}</td>
                <td>{sample.scraps}</td>
              </tr>
            );
          })
        : <div style={{textAlign:'center'}}>loading...</div>}

        </tbody>
      </table>
              <Link to="/ScrapPosts" state={{ data: postData.data }}>
              <button> 내가 스크랩한 게시물 보기</button>
              </Link>
    </>
  );
};

export default PostList;
