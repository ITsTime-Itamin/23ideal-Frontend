import React,{useEffect, useState} from "react";
import Login from "./Login";
import { Router } from "react-router-dom";
import { Interface } from "readline";
import { getParsedCommandLineOfConfigFile } from "typescript";

declare global {
    interface Window {
        naver: any;
    }
}

/*const {naver}=window;

interface User {
    nickname: string;
    image: string;
}

interface Image {
    url: string;
}

const Nav:React.FC = () => {
    const [data, setData] = useState<User>({nickname:'', image:''});
    useEffect(CDM, []);

    function CDM() {
        naver();
        //GetProfile();
    }
    function Naver() {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: 'jJf55Mrx98Mt2FRkK9ug',
            callback:'http://localhost:3000',
            callbackHandle: true,
            loginButton: {
                color : 'green',
                type: 3,
                height: 20,
            }
        });

        naverLogin.init();
    }
}*/

function SideNav () {
    const { naver } = window;
    
    const Login = () => {
     Naver();
     UserProfile();
    }
    
    useEffect(Login, []);
    
    const Naver = () => {
       const naverLogin = new naver.LoginWithNaverId({
         clientId: 'jJf55Mrx98Mt2FRkK9ug',
         callbackUrl: "http://localhost:3000/",
         isPopup: false,
         loginButton: {color: "green", type: 1, height: 30} ,
         callbackHandle: true
       });
       naverLogin.init();
     }
   
     const UserProfile = () => {
       window.location.href.includes('access_token') && GetUser();
       function GetUser() {
         const location = window.location.href.split('=')[1];
         const token = location.split('&')[0];
         console.log("token: ", token);
         fetch(`${API}/account/sign-in` , {
           method: "GET",
           headers : {
             "Content-type" : "application/json",
             "Authorization": token
           },
         })
         .then(res => res.json())
         .then(res => {
           localStorage.setItem("access_token", res.token);
           setUserData({
             nickname : res.nickname,
             image : res.image
           })
         })
         .catch(err => console.log("err : ", err));
       }
     };
     
     return (
       <Login className="login">
         <UserInfo>
           <SideText>로그인</SideText>  
         </UserInfo>
         <LoginLink onClick={Login} id="naverIdLogin" /> 
       </SideLogin>
     )
   };
