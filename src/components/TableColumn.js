import React, { Children } from "react";
import { Link } from "react-router-dom";

const TableColumn = ( { children }) => {

    return (
        <td className="common-table-column" >
            <Link to="/NoticeRead" className="editor_go" style={{display:'block'}}>
            { children }
            </Link>
        </td>
    )
}

export default TableColumn ;