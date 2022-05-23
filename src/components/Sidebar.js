import {Link} from "react-router-dom";
import "./Sidebar.css";

const Sidebar=()=>{
    return(

        <div className="sidebar">
            <div className="sidebarTop">

            </div>
        
            <div className="sidebarTitle">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <li > 
                <Link to="/practice" className="sidebarTitle" >모집공고 전체보기</Link>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <li > 
                <Link to="/FindYoung" className="sidebarTitle" >청년주택</Link>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <li >
                <Link to="/FindHappy" className="sidebarTitle">행복주택</Link>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <li>
                <Link to="/FindRent" className="sidebarTitle">임대주택</Link>
            </li>
            </div>
        </div>
    )
}

export default Sidebar;