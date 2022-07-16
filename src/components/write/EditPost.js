import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Editor.css";

const EditPost = () => {
  const location = useLocation();
  const boardType = location.state.boardType;
  const propsBoardId = location.state.boardId;
  const propsTitle = location.state.title;
  const propsDeadLineDate=location.state.deadLineDate;
  const propsContent=location.state.content;
  const navigate=useNavigate();

  const [boardId,setBoardId]=useState(propsBoardId);
  const [title, setTitle] = useState(propsTitle);
  const [content, setContent] = useState(propsContent);
  const [deadLineDate, setDeadLineDate] = useState(propsDeadLineDate);
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setFiles([...files, { uploadedFile: file }]);
  };



  const Edit = async () => {
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
    formData.append("boardId",boardId);
    formData.append("title",title);
    formData.append("content",content);
    formData.append("deadLineDate",deadLineDate);
    formData.append("boardType",boardType);

    fetch("api/v1/boards/update", {
      method: "POST",
      cache: "no-cache",
      headers: {
       // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTc5NzM0MzB9.D5AKjHRxYg-Et6Of-9VLPKpEiOt92SmczUDE_oBOa1y79e-XnrtjpBOtfwQnSGSsOW7Wc-QYHlJGxgM-D4n74A"}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      /*  setTitle("");
        setContent("");
        setFiles([]);
        setDeadLineDate(""); */
    });

    return false;
  };



  return (
    <div>
      <div style={{ textAlign: "center", position: "relative", top: "100px" }}>
        <h1>수정하기</h1>
        <hr className="hr"></hr>
      </div>
      <div>
        <button onClick={()=>Edit()}
            /*input value="등록" type="submit" className="submit_btn"*/ >등록</button>
      </div>
      <form /*onSubmit={()=>{return Edit()}} action="./"*/ entype="multipart/formdata" >
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
      <button onClick={() => navigate(-1)} className="goback_btn"> 뒤로가기  </button>
      {boardId}<br/>{title}<br/>{deadLineDate}<br/>{content}
    </div>
  );
};

export default EditPost;
