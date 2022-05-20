import {Link} from "react-router-dom";
import "./Sidebar.css";

const Sidebar=()=>{
    return(
        <div>
            <li>
                <Link to="/practice">모집공고 전체보기</Link>
            </li>
            <li>
                <Link to="/FindYoung">청년주택</Link>
            </li>
            <li>
                <Link to="/FindHappy">행복주택</Link>
            </li>
            <li>
                <Link to="/FindRent">임대주택</Link>
            </li>
        </div>
    )
}

export default Sidebar;