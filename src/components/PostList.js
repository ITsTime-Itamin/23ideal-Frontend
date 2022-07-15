import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoticeRead from "./read/NoticeRead";

const PostList = ({boardType}) => {
  const [postData, setPostData] = useState([]);
  fetch("/api/v1/boards", {
    headers: {
      Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTc4NTMxMjF9.K7IH2LetJRhvg-69eLDghYh1IG5HonY9F9LVW-dubTfP9lnVlrA20lhAp4TkmuhS73TMeiJuOK9EQjsrs8GBVA"}`,
    },
  })
    .then((res) => res.json())
    .then((response) => {
      setPostData(response.data);
    });

 // console.log(postData.data);
// const samples = postData.data;
 //console.log(samples);

  const samples /*items*/ = [
    {
      boardId: "1",
      title: "강동구",
      createdDate: "2202.13.4",
      userName: "관리자",
    },
    {
      boardId: "3",
      title: "강서구",
      createdDate: "2202.12.4",
      userName: "관리자",
    },
    {
      boardId: "4",
      title: "강남구",
      createdDate: "2202.12.04dadsc",
      userName: "관리자",
    },
    {
      boardId: "5",
      title: "강북구",
      createdDate: "2202.12.04dddd",
      userName: "관리자",
    },
  ];

  const headersName = ["no", "제목", "작성일", "작성자"];

  return (
    <>
      <div>
        {postData && (
          <textarea
            rows={7}
            value={JSON.stringify(postData, null, 2)}
            readOnly={true}
          />
        )}
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
          {samples.map((sample, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <Link
                  to="/NoticeRead"
                  state={{ data: sample.boardId , boardType:boardType }}
                  className="title"
                  style={{
                    textAlign: "center",
                    color: "black",
                    listStyle: "none",
                    textDecoration: "none",
                    display: "inline-block",
                    cursor: "pointer",
                  }}
                >
                  <td /*onClick={()=>{onClick}}*/> {sample.title}</td>
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
