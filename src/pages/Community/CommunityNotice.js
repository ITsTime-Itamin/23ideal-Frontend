import React,{useState} from "react";
import { Link } from "react-router-dom";
import SidebarCommunity from "../../components/SidebarCommunity";
import PostList from "../../components/PostList";
import axios from 'axios';
import BoardItem from "../../components/Table/BoardItem";

const CommunityNotice = ({accessToken}) => {

    /*const [data, setData] = useState(null);

    const onClick = async () => {
        try {
          const response = await axios.get('/api/v1/boards',{headers:{"Authorization":`Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTcwOTEyOTF9.iNIcEchzR2rjwgCEnBanoWYgT33l7E3qid5PnMqXD3kNCyl7XnJ9e1gjNXTqTLmMCTZA2uTq-JFa90a58CF9jw'}`}});
          setData(response.data);
        } catch (e) {
          console.log(e);
        }
      }; */
      
    return (
        <div style={{textAlign:"center"}}>
           <div style={{textAlign:"center", position : "relative" , top : "100px" }}>
                <h1>공지사항</h1>
            </div>
            <div className="locate_btn"> 
                <button className="editor_btn">  
                    <Link to="/NoticeEditor" className="editor_go">
                        글쓰기
                    </Link>
                </button>
                <button className="editor_btn">  
                    <Link to="/NoticeRead" className="editor_go">
                        테스트
                    </Link>
                </button>
            </div>
            
        <SidebarCommunity/>
        <PostList/>
        </div>
    )
}

export default CommunityNotice;