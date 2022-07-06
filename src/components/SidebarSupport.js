import {NavLink} from "react-router-dom";
import "./Sidebar.css";

const SidebarSupport=()=>{
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
                <br></br>
                <br></br>
                <br></br>
            <li > 
                <NavLink to="/SupportGov" className="sidebarTitle" activeClassName ="active">정부의 보조금 지원 정책</NavLink>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <li >
                <NavLink to="/SupportLoan" className="sidebarTitle" activeClassName ="active">대출관련 지원책</NavLink>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <li>
                <NavLink to="/SupportBank" className="sidebarTitle" activeClassName ="active">은행별 대출서비스</NavLink>
            </li>
            </div>
        </div>
    )
}

export default SidebarSupport;