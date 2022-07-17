import React from "react";
import './Table.css'; 

const Table= ({articles}) =>{
    const headersName=['no','제목','작성일' ,'작성자'];
    const {boardId, title, createdDate, userName}=articles;
    const array=[1,2];

    return (
        <table className="common-table">
            <thead>
                <tr >
                    {
                        headersName.map((item,index)=> {
                            return (
                                <td className="common-table-header-column" key = {index}>
                                    {item}
                                </td>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody className="common-row">
                {articles.map(article=>{   
                    return(
                        <tr>
                            <td>{article.boardId}</td>
                            <td>{article.title}</td>
                            <td>{article.createdDate}</td>
                            <td>{article.userName}</td>
                        </tr>
                    )
                } 
                )}
            </tbody>
            
        </table>
    )
}

export default Table;