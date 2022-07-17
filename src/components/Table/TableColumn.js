import React, { Children } from "react";
import { Link } from "react-router-dom";

const TableColumn = ( { children, id }) => {

    
   // const {boardId, title, createdDate, userName}=article;

   // console.log(id);

    return (

        <td className="common-table-column" >
            <Link to="/NoticeRead" className="editor_go" style={{display:'block'}} id={id} >
            { children }
            </Link>
        </td>
    )
}

export default TableColumn ;