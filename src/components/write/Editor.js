import axios, { Axios } from "axios";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Editor.css";

const Editor = () => {
  const location = useLocation();
  const Boardtitle = location.state.data;
  const boardType = location.state.boardType;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [deadLineDate, setDeadLineDate] = useState("");
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFiles([...files, { uploadedFile: file }]);
  };

  const AddPost = async () => {
    const formData = new FormData();
    formData.append("files", files.length && files[0].uploadedFile);
    /*const value = [
      {
        title: title,
        content: content,
        deadLineDate: deadLineDate,
        boardType: "NOTICE",
      },
    ];
    formData.append(
      "data",
      new Blob([JSON.stringify(value)], { type: "application/json" })
    );*/
    formData.append("title",title);
    formData.append("content",content);
    formData.append("deadLineDate",deadLineDate);
    formData.append("boardType",boardType);
    /*await axios({
      method: "POST",
      url: "/api/v1/boards",
      mode: "cors",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    });*/
    for (let key of formData.keys()) {
      console.log(key);
    }
    for (let value of formData.values()) {
      console.log(value);
    }

    fetch("api/v1/boards", {
      method: "POST",
      cache: "no-cache",
      headers: {
       // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTc3MjAyNDl9.oZU0B7oZj6cHkhIxVZhQo2r1KUIQ3m4t86yujDvpjAc068Xvklz5kvd-IEBYcgeixxlqKjRxbWzTJnag_mq3-w"}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTitle("");
        setContent("");
        setFiles([]);
        setDeadLineDate("");
    });

  };

  return (
    <div>
      <div style={{ textAlign: "center", position: "relative", top: "100px" }}>
        <h1>{Boardtitle}</h1>
        <hr className="hr"></hr>
      </div>
      <div>
          <button onClick={()=>AddPost()} type="submit" className="submit_btn">
            등록
          </button>
        <button className="goback_btn">
          <Link to="/FindRent"> 뒤로가기 </Link>
        </button>
      </div>

      <form entype="multipart/formdata">
      <div>
        <div style={{ position: "relative", top: "140px", left: "380px", fontSize: "28px", letterSpacing: "2px", }} >
          제목
        </div>
        <input onChange={(e) => setTitle(e.target.value)}  type="text"  className="title_txt"  name="title" placeholder="  제목을 입력해주세요" />
      </div>
      <div>
        <div style={{   position: "relative", top: "140px",  left: "380px",  fontSize: "28px", letterSpacing: "2px",}} >
          마감일
        </div>
        <input onChange={(e) => setDeadLineDate(e.target.value)} type="text" className="title_txt"  name="title" placeholder="  마감일을 입력해주세요" />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <div style={{  position: "relative",  top: "60px", left: "340px",fontSize: "28px",letterSpacing: "2px",}}>
          첨부파일
        </div>
        <input  accept="image/*.csv" onChange={e=>handleUpload(e)} type="file"  className="paste" id="file" name="file"   placeholder="  파일을 업로드 해주세요"  />
      </div>

      <div>
        <div style={{  position: "relative", top: "60px",  left: "380px",  fontSize: "28px",  letterSpacing: "2px",}}>
          내용
        </div>
        <input type="text"  onChange={(e) => setContent(e.target.value)}  className="txt" name="content"  placeholder=" 내용을 입력해주세요" />
      </div>
      </form>
    </div>
  );
};

export default Editor;
