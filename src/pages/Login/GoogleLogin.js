import React from "react";
import GoogleLogin from "react-google-login";

const clientID = "508740843119-alvj4p7vgjqd8ge3k4cvog00gmhak18e.apps.googleusercontent.com";

const GoogleButton=({onSocial})=> {

    const onSuccess = async(response)=>{
        console.log(response);

        const {googleID, profileObj : {email, name}} = response;

        await onSocial({
            socialID: googleID,
            socialType: 'google',
            email,
            nickname:name
        });
    }

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

export default GoogleButton;