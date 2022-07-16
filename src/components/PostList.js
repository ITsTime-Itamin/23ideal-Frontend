import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoticeRead from "./read/NoticeRead";

const PostList = ({boardType}) => {

  const [postData, setPostData] = useState({});

  useEffect(()=>{
    fetch("/api/v1/boards", {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTc5NzM0MzB9.D5AKjHRxYg-Et6Of-9VLPKpEiOt92SmczUDE_oBOa1y79e-XnrtjpBOtfwQnSGSsOW7Wc-QYHlJGxgM-D4n74A"}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setPostData(response.data);
      });
  },[]);

  const samples /*items*/ = [
    {
      boardId: "16",
      title: "강동구",
      createdDate: "2202.13.4",
      userName: "관리자",
    },
    {
      boardId: "17",
      title: "강서구",
      createdDate: "2202.12.4",
      userName: "관리자",
    },
    {
      boardId: "18",
      title: "강남구",
      createdDate: "2202.12.04dadsc",
      userName: "관리자",
    },
    {
      boardId: "19",
      title: "강북구",
      createdDate: "2202.12.04dddd",
      userName: "관리자",
    },
  ];

  const headersName = ["no", "제목", "작성일", "작성자"];

  return (
    <>
      <div>
        {postData && ( <textarea rows={7} value={JSON.stringify(postData, null, 2)} readOnly={true} /> )}
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
          {  /*(Object.values(postData.data))*/samples.map((sample, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <Link to="/NoticeRead" state={{ data: sample.boardId , boardType: boardType }} className="title"
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

export default PostList;
