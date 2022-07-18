import React from "react";
import Table from "./Table/Table"; import TableColumn from "./Table/TableColumn"; import TableRow from "./Table/TableRow";

const FindPostList = props => {
    return (
        <>
            <Table headersName={['no','제목','작성일' ,'마감일']}>
                <TableRow>
                    <TableColumn>1</TableColumn>
                    <TableColumn>첫번째 게시물</TableColumn>
                    <TableColumn>2022.06.26</TableColumn>
                    <TableColumn>관리자</TableColumn>
                </TableRow>
            </Table>
           
        </>
    )
}

export default FindPostList;