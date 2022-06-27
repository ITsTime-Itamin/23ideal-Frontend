import React from 'react';

const TableRow = ({children}) => {
    return (
        <tr className="common-table-row">
            {
                children
            }
        </tr>
    )
}

export default TableRow ;