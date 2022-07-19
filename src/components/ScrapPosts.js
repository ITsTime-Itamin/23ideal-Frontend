import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ScrapPosts = () => {

  const headersName = ["no", "제목", "작성일", "작성자"];
  const [scrapData,setScrapData]=useState([]);
  const location = useLocation();
  const totalpost =[]; //기존 전체 게시물
  const scrapPosts=[]; //스크랩한 게시물
  totalpost.push(location.state.data); //PostList에서 게시물 props로 넘겨받음

//유저가 스크랩 한 게시물 목록 조회
  useEffect(()=>{
    fetch("api/v1/scraps/whether/users", {
      headers: {
       //'Content-Type': 'application/json',
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTgzMzE4Mjd9.c3_Swxk_6MEGnJs4fgIwwhYGgGisijOQekEGk7H7z0ANc_vUPemA6P2y0387M2ATdUkyGzJmssOORBz7MbmMhg"}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setScrapData(response.data.data);
      });
  },[]);

  const num=[];
  for (var i=0;i<totalpost[0].length;i++){
    num.push(totalpost[0][i].length);
    }

  /*num.map((num)=>{
    for(var i=0;i<num;i++){
      for (var k=0;k<scrapData.length;j++){
        if(totalpost[0][i][j].boardId ==scrapData[k].boardId){
          scrapPosts.push(totalpost[0][i][j]);
        }
    }
  }})*/

 for(var i=0;i<totalpost[0].length;i++){
  num.map((num)=>{
    for (var j=0;j<num;j++){
      for (var k=0;k<scrapData.length;j++){
        if(totalpost[0][i][j].boardId ==scrapData[k].boardId){
          scrapPosts.push(totalpost[0][i][j]);
        }
      }
    }})
  }

  console.log(scrapPosts);

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
