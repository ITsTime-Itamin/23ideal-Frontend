import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleToken } from "../../pages/Login/GoogleLogin";
import "./Editor.css";

const Editor = () => {
  const location = useLocation();
  const Boardtitle = location.state.data;
  const boardType = location.state.boardType;
  const navigate=useNavigate();

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
    formData.append("title",title);
    formData.append("content",content);
    formData.append("deadLineDate",deadLineDate);
    formData.append("boardType",boardType);

    fetch("api/v1/boards", {
      method: "POST",
      cache: "no-cache",
      headers: {
       // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${GoogleToken}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        try{alert("게시물 등록이 완료되었습니다");
       // window.location.assign("http://localhost:3000/");
        console.log(response.data)}
        catch{console.log('error')}
    });

    return false;
  };

  return (
    <div>
      <button onClick={() => navigate(-1)} className="goback_btn"> 뒤로가기  </button>
       <form  onSubmit={()=>{return AddPost()}} action="./"  entype="multipart/formdata" >
      <div style={{ textAlign: "center", position: "relative", top: "70px" }}>
        <h1>{Boardtitle}</h1>
        <hr className="hr"></hr>
      </div>
      < input value="등록" type="submit" className="submit_btn" /> 
      <div>
        <div style={{ position: "relative", top: "100px", left: "300px", fontSize: "26px", letterSpacing: "2px", }} >
          제목
        </div>
        <input onChange={(e) => setTitle(e.target.value)}  type="text"  className="title_txt"  name="title" placeholder="  제목을 입력해주세요" />
      </div>
      <div>
        <div style={{   position: "relative", top: "98px",  left: "280px",  fontSize: "26px", letterSpacing: "2px",}} >
          마감일
        </div>
        <input onChange={(e) => setDeadLineDate(e.target.value)} type="text" className="title_txt"  name="title" placeholder="  마감일을 입력해주세요" />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <div style={{  position: "relative",  top: "25px", left: "265px",fontSize: "26px",letterSpacing: "2px",}}>
          첨부파일
        </div>
        <input  accept="image/*.csv" onChange={e=>handleUpload(e)} type="file"  className="paste" id="file" name="file"   placeholder="  파일을 업로드 해주세요"  />
      </div>

      <div>
        <div style={{  position: "relative", top: "30px",  left: "300px",  fontSize: "26px",  letterSpacing: "2px",}}>
          내용
        </div>
        <input type="text"  onChange={(e) => setContent(e.target.value)}  className="txt" name="content"  placeholder=" 내용을 입력해주세요" />
      </div>
      </form>
    </div>
  );
};

export default Editor;
