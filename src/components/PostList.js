import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoticeRead from "./read/PostRead";

const PostList = ({boardType}) => {

  const headersName = ["no", "제목", "작성일", "작성자", "스크랩수"];
  const [postData,setPostData]=useState([]);

  useEffect(()=>{
    fetch("/api/v1/boards", {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgxOTkxMzd9.b-kYHJCklTMm6LbH6nEIUsxsaAa4x2Ob2g4fW8ZIWHYcMSqExoJ0ZBjqgbZOe8wobf5I7bM2ImAOOticT05GlQ"}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setPostData(response.data);
      });
  },[]);

  //게시물 스크랩 수 조회
  const [scrapNum,setScrapNum]=useState([]);

  if( postData.length != 0) {
 postData.data.map((sample)=>{
    const path = "/api/v1/scraps/"+sample.boardId;
    fetch(path, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgxOTkxMzd9.b-kYHJCklTMm6LbH6nEIUsxsaAa4x2Ob2g4fW8ZIWHYcMSqExoJ0ZBjqgbZOe8wobf5I7bM2ImAOOticT05GlQ"}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setScrapNum(response.data);
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
          { boardType === "NOTICE" ?
          ( postData.length != 0 ? postData.data.map((sample, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                
                <Link to="/PostRead" state={{ data: sample.boardId , boardType: boardType }} className="title"
                  style={{ textAlign: "center", color: "black", listStyle: "none", textDecoration: "none", display: "inline-block", cursor: "pointer", }} >
                  <td> {sample.title}</td>
                </Link>
                <td>{sample.createdDate.substring(0, 10)}</td>
                <td>{sample.userName}</td>
                <td>{sample.scraps}</td>
              </tr>
            );
          })
        : <div style={{textAlign:'center'}}>loading...</div>) 
        : ( postData.length != 0 ? postData.data.map((sample, i) => {
          return (
            <tr>
              <td>{i + 1}</td>
              <Link to="/PostComment" state={{ data: sample.boardId , boardType: boardType }} className="title"
                style={{ textAlign: "center", color: "black", listStyle: "none", textDecoration: "none", display: "inline-block", cursor: "pointer", }} >
                <td> {sample.title}</td>
              </Link>
              <td>{sample.createdDate.substring(0, 10)}</td>
              <td>{sample.userName}</td>
              <td>{sample.scraps}</td>
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