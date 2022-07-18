import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ScrapPosts = () => {

  const headersName = ["no", "제목", "작성일", "작성자"];
  const [scrapData,setScrapData]=useState([]);
  const location = useLocation();
  const post =[]; //기존 전체 게시물
  const scrapPosts=[]; //스크랩한 게시물
  post.push(location.state.data); //PostList에서 게시물 props로 넘겨받음

//유저가 스크랩 한 게시물 목록 조회
  useEffect(()=>{
    fetch("/api/v1/scraps/whether/users?=", {
      headers: {
       //'Content-Type': 'application/json',
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgyMDQ3MDd9.TANacKhSh5u3Md23mm9bOvGO_5jvegXIG9ATmR9aVyaDl01KdT3m_5m3Np5_IwBJZCS897F03kVk_6m-WhsXlw"}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setScrapData(response.data.data);
      });
  },[]);

 for (var i=0;i<post[0].length;i++){
    for(var j=0;j<scrapData.length;j++){
      if(post[0][i].boardId==scrapData[j].boardId){
        scrapPosts.push(post[0][i]);
      }
    }
  }

  return (
    <>
      <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>내가 스크랩한 게시물</h1>
            </div>
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
        <tbody>
          {  /*(Object.values(postData.data))*/scrapPosts.map((sample, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <Link to="/PostRead" state={{ data: sample.boardId , boardType: sample.boardType }} className="title"
                  style={{ textAlign: "center", color: "black", listStyle: "none", textDecoration: "none", display: "inline-block", cursor: "pointer", }} >
                  <td> {sample.title}</td>
                </Link>
                <td>{sample.createdDate.substring(0, 10)}</td>
                <td>{sample.userName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ScrapPosts;