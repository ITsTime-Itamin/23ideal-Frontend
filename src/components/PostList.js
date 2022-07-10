import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NoticeRead from "./read/NoticeRead";
import Load_API from "./read/Load_API";


const PostList = () => {

    const [postData, setPostData] = useState(null);
    
    fetch('/api/v1/boards',{headers:{"Authorization":`Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTc0NTU3MDd9.fUBzKQoJ7R9MXk06mwQRGTUsp3CURQhpRPWj7R2w3WX2HANv_UG9JvmGIIy1udeAWFwtwOpG8XTZ-u0VkT7BEQ'}`}})
    .then(res=>(res.json())).then(response=>{setPostData(response.data);});
    //const response = await axios.get('/api/v1/boards',{headers:{"Authorization":`Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTcyNDQ1MzR9.Sc4ETVteuiO6KoJG5qZHlr08YBEiVhpuRxa1zbu3OXH5cTeMvxfxs6lS0a75rwG7OS4XwDOVgQwulVmF5RLBSA'}`}});
    //setPostData(response.data);
/*
const items=[
  {  
    boardId:postData.data[0].boardId,
    title:postData.data[0].title,
    createdDate:postData.data[0].createdDate,
    userName:postData.data[0].userName
  },
  {  
    boardId:postData.data[1].boardId,
    title:postData.data[1].title,
    createdDate:postData.data[1].createdDate,
    userName:postData.data[1].userName
  },
  {  
    boardId:postData.data[2].boardId,
    title:postData.data[2].title,
    createdDate:postData.data[2].createdDate,
    userName:postData.data[2].userName
  },
]; */

const samples=[{
  boardId:'1',title:"강서구",createdDate:"2202.13.4",userName:"관리자"
},
{
  boardId:'2',title:"강북구",createdDate:"2202.12.4",userName:"관리자"
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
            <tbody className="common-row">
                {samples.map(sample=>{   
                    return(
                        <tr>
                            <td>{sample.boardId}</td>
                            <Link to="/NoticeRead" style={{ textAlign:"center", color:"black", listStyle:"none", textDecoration:"none", display:"inline-block", cursor:"pointer"}} /*className="editor_go"*/ >
                            <td>{sample.title}</td>
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