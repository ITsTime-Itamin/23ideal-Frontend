import React,{useState} from "react";
import { Link } from "react-router-dom";
import SidebarCommunity from "../../components/SidebarCommunity";
import PostList from "../../components/PostList";
import styled from "styled-components";

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
        <SidebarCommunity/>
        <PostList boardType={"NOTICE"}/>
        </div>
    )
}

export default CommunityNotice;