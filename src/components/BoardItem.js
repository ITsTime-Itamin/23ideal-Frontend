import React from "react";
import TableColumn from "./TableColumn";
import TableRow from "./TableRow";
import Table from "./Table";


const BoardItem=({article})=>{
    const {boardId, title, createdDate, userName}=article;

    return(
        <div>
            <Table headersName={['no','제목','작성일' ,'작성자']}>
            <TableRow>
                    <TableColumn>{boardId}</TableColumn>
                    <TableColumn>{title}</TableColumn>
                    <TableColumn>{createdDate}</TableColumn>
                    <TableColumn>{userName}</TableColumn>
                </TableRow>
                </Table>
        </div>
    );
};

export default BoardItem;