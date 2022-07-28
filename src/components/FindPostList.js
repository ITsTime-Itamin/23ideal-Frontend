import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoogleToken } from "../pages/Login/GoogleLogin";
import "./Table/Table.css"
import SidebarFind from "./SidebarFind";
import Pagination from "./Pagination";
import Banner from "./Banner";

const PostList = ({boardType}) => {

  const headersName = ["no", "제목", "작성일", "마감일","작성자", "스크랩수"];
  const [postData,setPostData]=useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const path="/api/v1/boards?boardType="+boardType;

 //const board=["YOUTH_HOUSE","RENTAL_HOUSE","HAPPY_HOUSE"];
 const [youth,setYouth]=useState([]);
 const [happy,setHappy]=useState([]);
 const [rental,setRental]=useState([]);

  if(boardType != "ALL") {
    fetch(path, {
      headers: {
        Authorization: `Bearer ${GoogleToken}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setPostData(response.data);
      });
  }
  //청년+임대+행복 주택 합쳐서 모두보기.. 노가다라서 수정 필요
  else if(boardType == "ALL") {
    fetch("/api/v1/boards?boardType=YOUTH_HOUSE", {
      headers: {
        Authorization: `Bearer ${GoogleToken}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setYouth(response.data.data);
      });
      
    fetch("/api/v1/boards?boardType=HAPPY_HOUSE", {
        headers: {
          Authorization: `Bearer ${GoogleToken}`,
        },
      })
        .then((res) => res.json())
        .then((response) => {
          setHappy(response.data.data);
        });
        
      fetch("/api/v1/boards?boardType=RENTAL_HOUSE", {
          headers: {
            Authorization: `Bearer ${GoogleToken}`,
          },
        })
          .then((res) => res.json())
          .then((response) => {
            setRental(response.data.data);
          });
  }

  const all=youth.concat(happy);
  const allpost=all.concat(rental);

 /* const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  let currentPosts = 0;
  if(postData.length != 0){
  currentPosts = postData.data.slice(indexOfFirst, indexOfLast);}
  console.log(currentPosts);*/

  return (
    <>
    <SidebarFind />
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
                <td>{post.deadLineDate.substring(0, 10)}</td>
                <td>관리자</td>
                <td>{post.scrapCount}</td>
              </tr>
            );
          })
        : /*<div style={{textAlign:'center'}}>loading...</div>*/
        allpost.map((post,i)=>{
          return (
            <tr>
              <td>{i + 1}</td>
              <Link to="/PostRead" state={{ data: post.boardId , boardType: boardType }} className="postTitle"
                style={{ textAlign: "center", color: "black", listStyle: "none", textDecoration: "none", display: "inline-block", cursor: "pointer",}} >
                <td> {post.title}</td>
              </Link>
              <td>{post.createdDate.substring(0, 10)}</td>
              <td>{post.deadLineDate.substring(0, 10)}</td>
              <td>관리자</td>
              <td>{post.scrapCount}</td>
            </tr>
          );
        })
        }
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
       <Banner/>
    </>
  );
};

export default PostList;