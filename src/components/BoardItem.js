import Table from "./Table";
import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

const BoardItem=({article})=>{

    const {boardId, title, createdDate, userName}=article;

   return(
        <div>
                        <TableRow>
                        <TableColumn >{boardId}</TableColumn>
                        <TableColumn >{title}</TableColumn>
                        <TableColumn >{createdDate}</TableColumn>
                        <TableColumn >{userName}</TableColumn>
                        </TableRow>
        </div>
    );
};

export default BoardItem;