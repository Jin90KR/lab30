import React,{ Component } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import './Login.css';
import { signInWithGooglePopup } from '../utils/firebase.utils';

class Login extends React.Component {


    render() {
        const loginGoogleUser = async() => {
            const result = await signInWithGooglePopup()
            console.log(result);
        }
        

        return (
            <div className='login'>
                <p>Login page</p>
                <button onClick={loginGoogleUser}>login</button>
                {/* <GoogleOAuthProvider clientId="544783663835-4cfdbgeem74fnc3baiu4lbtngqgpq7h0.apps.googleusercontent.com">
                    <GoogleLogin />
                </GoogleOAuthProvider> */}
            </div >
        );
    }
}

// function Login() {
//     return (
//         <div className='login'>
//             <p>Login page</p>
//             <GoogleOAuthProvider clientId="544783663835-4cfdbgeem74fnc3baiu4lbtngqgpq7h0.apps.googleusercontent.com">
//                 <GoogleLogin />
//             </GoogleOAuthProvider>
//         </div >
//     );
// };

export default Login;