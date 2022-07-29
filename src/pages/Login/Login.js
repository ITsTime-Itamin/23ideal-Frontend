import {GoogleButton} from "./GoogleLogin.js";
import NaverLogin from "./NaverLogin";

const Login=()=>{
    return(
        <div style={{textAlign:"center", padding:"10px",}}>
            <div style={{textAlign:'left',fontSize:"25px", fontWeight:"bold",padding:"30px",margin:'10px',background: 'rgba(234, 81, 32, 0.1)',width:'530px',position:"absolute", left:'32%',top:'160px',height:'30px'}}>
                간편로그인 안내
            </div>
            <div style={{ width:'580px', position:"absolute", left:'33%',top:'270px',border:'2px solid rgba(234, 81, 32, 0.1)',}}>
            <div style={{fontSize:"20px", padding:"50px"}}>
                이삼이상 서비스 이용을 위해 로그인해주세요
            </div>
            <div >
                <GoogleButton/>
            </div>
            <div style={{padding:"30px"}}>
                <NaverLogin/>
            </div>
            </div>
        </div>
    )
}

export default Login;