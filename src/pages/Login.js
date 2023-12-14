import React,{ useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import './Login.css';
import { signInWithGooglePopup } from '../utils/firebase.utils';
import { auto } from '../utils/firebase.utils';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db } from '../utils/firebase.utils';
import { collection, getDocs } from 'firebase/firestore'

class Login extends React.Component {
    


    render() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const loginGoogleUser = async() => {
            const result = await signInWithGooglePopup()
            console.log(result);
        }
        const loginUser = async() => {

        }
        
        

        return (
            <div className='login'>
                {/* <p>Login page</p>
                <button onClick={loginGoogleUser}>login</button> */}
                <input type='text' placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type='text' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={loginUser}>Login</button>
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