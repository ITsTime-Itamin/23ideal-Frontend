import React,{useState} from "react";
import { useLocation } from "react-router-dom";

const Load_API= props =>{

    //const {id}=props;
    //console.log(id);
    
    const[content,setContent]=useState(null);

    fetch('/api/v1/boards/1',{headers:{"Authorization":`Bearer ${'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2NTc0NTU3MDd9.fUBzKQoJ7R9MXk06mwQRGTUsp3CURQhpRPWj7R2w3WX2HANv_UG9JvmGIIy1udeAWFwtwOpG8XTZ-u0VkT7BEQ'}`}}).then(res=>(res.json())).then(response=>{setContent(response.data);});

    return (
        <div>
            {content && <textarea rows={7} value={JSON.stringify(content, null, 2)} readOnly={true} /> } 
        </div>
    );
}

export default Load_API;