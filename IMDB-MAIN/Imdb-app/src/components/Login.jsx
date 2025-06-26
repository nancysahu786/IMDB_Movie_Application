import { useState } from "react";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../firebase";
import { Navigate, useNavigate } from "react-router";

const Login = () =>{

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
     const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
      console.log("email,password-->",email,password);
      try {
        const loginUser = await signInWithEmailAndPassword(auth,email,password);
        console.log("login user-->",loginUser);
        alert("login user successfully!");
           navigate('/header');        
      } catch (error) {
        alert(error.message);
      }
    }

    return(
            <div>
                <h1>Login</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
    )
}

export default Login;


   