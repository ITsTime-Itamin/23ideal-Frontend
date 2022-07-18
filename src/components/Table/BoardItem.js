import Table from "./Table";
import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

const BoardItem=({article,id})=>{

    const {boardId, title, createdDate, userName}=article;

   return(
        <div>
            <TableRow>
                <TableColumn boar={boardId}>{boardId}</TableColumn>
                <TableColumn >{title}</TableColumn>
                <TableColumn >{createdDate}</TableColumn>
                <TableColumn >{userName}</TableColumn>
            </TableRow>
        </div>
    );
};

export default BoardItem;