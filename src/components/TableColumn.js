import React from "react";

const TableColumn = ( {children }) => {
    return (
        <td className="common - table-column" >
            {
                children
            }
        </td>
    )
}

export default TableColumn ;