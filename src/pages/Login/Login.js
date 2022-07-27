import {GoogleButton} from "./GoogleLogin.js";
import NaverLogin from "./NaverLogin";

const Login=()=>{
    return(
        <div style={{textAlign:"center", padding:"10px"}}>
            <div style={{fontSize:"30px", padding:"50px"}}>
                Login
            </div>
            <div style={{padding:"15px"}}>
                <GoogleButton/>
            </div>
            <div style={{padding:"15px"}}>
                <NaverLogin/>
            </div>
        </div>
    )
}

export default Login;