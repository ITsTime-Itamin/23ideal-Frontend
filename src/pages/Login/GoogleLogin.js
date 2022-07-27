import React, { useState } from "react";
import GoogleLogin from "react-google-login";

const clientID = "508740843119-alvj4p7vgjqd8ge3k4cvog00gmhak18e.apps.googleusercontent.com";
let GoogleToken="";

const GoogleButton=({onSocial})=> {

    const[token,setToken]=useState("");

    const onSuccess = async(response)=>{
        console.log(response);

        const {googleID, profileObj : {email, name}} = response;

      /*  await onSocial({
            socialID: googleID,
            socialType: 'google',
            email,
            nickname:name
        });*/

        fetch("/api/v1/users/googleLogin", {
            method: "POST",
            cache: "no-cache",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({'token':response.tokenId}),
        })
        .then((response) => response.json())
        .then((response) => {
          setToken(response.data.accessToken);
          alert("로그인 완료");
      });
    }

    if(token != null){
        GoogleToken=token;
    }
    console.log(GoogleToken)

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div>
            <GoogleLogin 
                clientId={clientID}
                buttonText="   Google 아이디로 로그인   "
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                isSignedIn={true}  /> 
        </div>
    )
}

export { GoogleButton , GoogleToken };