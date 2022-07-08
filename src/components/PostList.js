import React,{useState} from "react";
import BoardItem from "./BoardItem";
import axios from "axios";


const PostList = props => {

    const [postData, setPostData] = useState(null);

    const onClick = async () => {
          fetch('/api/v1/boards',{headers:{"Authorization":`Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTcyNDY4NDh9.PBGHVToRXwAg0WyALF5aXXNmaW7XXCde2cSonvNZZ-0VdiSsl3o1xdSX7WZpGLMMP86d4Wfi8GYTgEe6mzOUKA'}`}}).then(res=>(res.json())).then(response=>{setPostData(response.data);});
          //const response = await axios.get('/api/v1/boards',{headers:{"Authorization":`Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTcyNDQ1MzR9.Sc4ETVteuiO6KoJG5qZHlr08YBEiVhpuRxa1zbu3OXH5cTeMvxfxs6lS0a75rwG7OS4XwDOVgQwulVmF5RLBSA'}`}});
          //setPostData(response.data);
    }

    console.log(postData);
    /*const Item=[{
      boardId:null,
      title:null,
      createdDate:null,
      userName:null
    }];

    boardId.data.map(()=>{
      Item.push({boardId.data[0].boardId})
    })*/

    const Sample={  
      boardId: "1",
      title: "@" ,
      createdDate: "342",
      userName: "424" 
  };

  const Sample1={  
    boardId:postData.data[1].boardId
    ,title:postData.data[3].title
    ,createdDate:postData.data[3].createdDate
    ,userName:postData.data[3].userName
};
    return (
        <>
        <div>
                {postData && <textarea rows={7} value={JSON.stringify(postData, null, 2)} readOnly={true} />} 
                </div>

        <BoardItem article={Sample1} />
        </>
    )
}

export default PostList;