import React,{useEffect, useState} from "react";
import BoardItem from "./BoardItem";
import Table from "./Table";
import TableRow from "./TableRow";
import TableColumn from "./TableColumn";
import axios from "axios";


const PostList = () => {

    const [postData, setPostData] = useState(null);
    
    fetch('/api/v1/boards',{headers:{"Authorization":`Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTc0NDAyNTZ9.ODRdvV0mzd_0w5fgZkeQnjrMT777uCFxRbHI5YJxbbjZCz-gU4KbYkWW0AgCKOicw6DKEFi4oadcPQIQr4bAYg'}`}}).then(res=>(res.json())).then(response=>{setPostData(response.data);});
    //const response = await axios.get('/api/v1/boards',{headers:{"Authorization":`Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTcyNDQ1MzR9.Sc4ETVteuiO6KoJG5qZHlr08YBEiVhpuRxa1zbu3OXH5cTeMvxfxs6lS0a75rwG7OS4XwDOVgQwulVmF5RLBSA'}`}});
    //setPostData(response.data);

    /*
const [items,setItems]=useState([
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
]);*/

const samples=[{
  boardId:'1',title:"강서구",createdDate:"2202.13.4",userName:"관리자"
},
{
  boardId:'2',title:"강북구",createdDate:"2202.12.4",userName:"관리자"
},]
;

    return (
        <>
        <div>
          {postData && <textarea rows={7} value={JSON.stringify(postData, null, 2)} readOnly={true} />} 
        </div>
        
        <Table headersName={['no','제목','작성일' ,'작성자']}>
          <BoardItem article={samples[0]} />
        </Table>
        </>
    )
}

export default PostList;