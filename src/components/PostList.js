import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NoticeRead from "./read/NoticeRead";


const PostList = props => {

    const [postData, setPostData] = useState(null);
    
    fetch('/api/v1/boards',{headers:{"Authorization":`Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTc1MzAwMzZ9._boWC1F7DbxqCtzxt8VzJzZKDhQ5krRQrNHrQcYC0jEuaVXT3jrhuYtjDmPu3BNGUta89Y-g_xN0AK6h2DL-RQ'}`}})
    .then(res=>(res.json())).then(response=>{setPostData(response.data);});
    //const response = await axios.get('/api/v1/boards',{headers:{"Authorization":`Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTcyNDQ1MzR9.Sc4ETVteuiO6KoJG5qZHlr08YBEiVhpuRxa1zbu3OXH5cTeMvxfxs6lS0a75rwG7OS4XwDOVgQwulVmF5RLBSA'}`}});
    //setPostData(response.data);
/*
const samples=[
  {  
    boardId:postData.data[0].boardId,
    title:postData.data[0].title,
    createdDate:postData.data[0].createdDate.substring(0,10),
    userName:postData.data[0].userName
  },
  {  
    boardId:postData.data[1].boardId,
    title:postData.data[1].title,
    createdDate:postData.data[1].createdDate.substring(0,10),
    userName:postData.data[1].userName
  },
  {  
    boardId:postData.data[2].boardId,
    title:postData.data[2].title,
    createdDate:postData.data[2].createdDate.substring(0,10),
    userName:postData.data[2].userName
  },
]; */

const samples=[{
  boardId:'1',title:"강서구",createdDate:"2202.13.4",userName:"관리자"
},
{
  boardId:'3',title:"강북구",createdDate:"2202.12.4",userName:"관리자"
},
{
  boardId:'4',title:"강북구",createdDate:"2202.12.4",userName:"관리자"
},
{
  boardId:'5',title:"강북구",createdDate:"2202.12.4",userName:"관리자"
},]; 

  const headersName=['no','제목','작성일' ,'작성자'];

    return (
        <>
        <div>
          {postData && <textarea rows={7} value={JSON.stringify(postData, null, 2)} readOnly={true} />} 
        </div>

        <table className="common-table">
            <thead>
                <tr >
                    {
                        headersName.map((item,index)=> {
                            return (
                                <td className="common-table-header-column" key = {index}>
                                    {item}
                                </td>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody >
                {samples.map(sample=>{   
                    return(
                        <tr>
                            <td>{sample.boardId}</td>
                            <Link to="/NoticeRead" state={{data: sample.boardId}} className="title" style={{ textAlign:"center", color:"black", listStyle:"none", textDecoration:"none", display:"inline-block", cursor:"pointer"}}>
                            <td /*onClick={()=>{onClick}}*/> {sample.title}</td>
                            </Link>
                            <td>{sample.createdDate}</td>
                            <td>{sample.userName}</td>
                        </tr>
                    )
                } 
                )}
            </tbody>
        </table>
        </>
    )
}

export default PostList;