import {NavLink} from "react-router-dom";
import "./Sidebar.css";

const SidebarCommunity=()=>{
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
                <NavLink to="/CommunityNotice" className="sidebarTitle" activeClassName ="active">공지사항</NavLink>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <li > 
                <NavLink to="/CommunityCom" className="sidebarTitle" activeClassName ="active">입주 및 당첨 후기</NavLink>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <li >
                <NavLink to="/CommunityFree" className="sidebarTitle" activeClassName ="active">자유게시판</NavLink>
            </li>
            <br></br>
            <br></br>
            <br></br>
            <li>
                <NavLink to="/CommunityJob" className="sidebarTitle" activeClassName ="active">취업공고</NavLink>
            </li>
            </div>
        </div>
    )
}

export default SidebarCommunity;