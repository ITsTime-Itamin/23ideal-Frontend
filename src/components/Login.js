import GoogleButton from "./GoogleButton";
import NaverLogin from "./NaverLogin";

const Login=()=>{
    return(
        <div style={{textAlign:"center"}}>
            <div style={{fontSize:"30px"}}>
                Login
            </div>
            <GoogleButton/>
            <NaverLogin/>
        </div>
    )
}

export default Login;