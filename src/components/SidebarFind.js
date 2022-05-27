import {NavLink} from "react-router-dom";
import "./Sidebar.css";

const SidebarFind=()=>{

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
                <NavLink to="/FindAll" className="sidebarTitle" activeClassName ="active">모집공고 전체보기</NavLink>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <li > 
                <NavLink to="/FindYoung" className="sidebarTitle" activeClassName ="active">청년주택</NavLink>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <li >
                <NavLink to="/FindHappy" className="sidebarTitle" activeClassName ="active">행복주택</NavLink>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <li>
                <NavLink to="/FindRent" className="sidebarTitle" activeClassName ="active">임대주택</NavLink>
            </li>
            </div>
        </div>
    )
}

export default SidebarFind;