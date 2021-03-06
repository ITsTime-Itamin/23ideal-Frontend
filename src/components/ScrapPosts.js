import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoogleToken } from "../pages/Login/GoogleLogin";

const ScrapPosts = () => {

  const headersName = ["no", "제목", "작성일", "작성자","스크랩수"];
  const [scrapData,setScrapData]=useState([]);
  const location = useLocation();
  const post =[]; //기존 전체 게시물
  const scrapPosts=[]; //스크랩한 게시물
  post.push(location.state.data); //PostList에서 게시물 props로 넘겨받음

//유저가 스크랩 한 게시물 목록 조회
  useEffect(()=>{
    fetch("/api/v1/scraps/whether/users", {
      headers: {
       //'Content-Type': 'application/json',
        Authorization: `Bearer ${GoogleToken}`,
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
      <div style={{textAlign:"center", position : "relative" , top : "80px" }}>
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
              <tr style={{borderBottom:'0.7px solid #D7D6D6', padding:'6px'}}>
                <td style={{ padding:'6px'}}>{i + 1}</td>
                <Link to="/PostRead" state={{ data: sample.boardId , scrap: sample.scrapCount  }} className="postTitle"
                style={{ textAlign: "center", color: "black", listStyle: "none", textDecoration: "none", display: "inline-block", cursor: "pointer",}} >
                <td style={{ padding:'6px'}}> {sample.title}</td>
              </Link>
                <td>{sample.createdDate.substring(0, 10)}</td>
                <td>관리자</td>
                <td>{sample.scrapCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ScrapPosts;