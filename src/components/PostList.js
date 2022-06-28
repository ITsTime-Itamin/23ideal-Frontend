import React from "react";
import Table from "../components/Table";
import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

const PostList = props => {
    return (
        <>
            <Table headersName={['no','제목','작성일' ,'작성자']}>
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

export default PostList;