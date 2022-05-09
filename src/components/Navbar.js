import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <hr />
            <div className="login-bar" style={{ float: "right", marginRight: "20px" }}>
                <Link to="/Login" style={{ textDecoration: "none", color: "black", marginRight: "10px" }}> Login </Link>
                |
                <Link to="/" style={{ textDecoration: "none", color: "black", marginLeft: "7px" }}> 회원가입</Link>
            </div>
            <Link className="nav-logo" to="/"> Logo </Link>
            <ul>
                <li className="nav-item">
                    <Link className="nav-link" to="/Find_All">모집공고 찾기</Link>
                    <hr style={{ border: "none", border: "0.05px solid #EB7E5D" }} />
                    <div className="dropdown-content">
                        <li>
                            <Link to="/FindAll" className="dropdown-item">모집공고 모두 보기</Link>
                        </li>
                        <li>
                            <Link to="/FindYoung" className="dropdown-item">청년주택 공고</Link>
                        </li>
                        <li>
                            <Link to="/FindHappy" className="dropdown-item">행복주택 공고</Link>
                        </li>
                        <li>
                            <Link to="/FindRent" className="dropdown-item">임대주택 공고</Link>
                        </li>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/SupportGov">청년지원정책</Link>
                    <hr style={{ border: "none", border: "0.05px solid #EB7E5D" }} />
                    <div className="dropdown-content">
                        <li>
                            <Link to="/SupportGov" className="dropdown-item">정부의 보증금 지원 정책</Link>
                        </li>
                        <li>
                            <Link to="SupportLoan" className="dropdown-item">대출 관련 지원 정책</Link>
                        </li>
                        <li>
                            <Link to="SupportBank" className="dropdown-item">은행별 대출 관련 서비스</Link>
                        </li>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Customized">맞춤형 서비스</Link>
                    <hr style={{ border: "none", border: "0.05px solid #EB7E5D" }} />
                    <div className="dropdown-content">
                        <li>
                            <Link to="/Community" className="dropdown-item">내 청약가점 계산하기</Link>
                        </li>
                    </div>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Community">커뮤니티</Link>
                    <hr style={{ border: "none", border: "0.05px solid #EB7E5D" }} />
                    <div className="dropdown-content">
                        <li>
                            <Link to="/CommunityNotice" className="dropdown-item">공지사항</Link>
                        </li>
                        <li>
                            <Link to="/CommunityCom" className="dropdown-item">입주 및 당첨후기</Link>
                        </li>
                        <li>
                            <Link to="/CommunityFree" className="dropdown-item">자유게시판</Link>
                        </li>
                        <li>
                            <Link to="/CommunityJob" className="dropdown-item">취업 공고</Link>
                        </li>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;