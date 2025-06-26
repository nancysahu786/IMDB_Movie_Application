import { useState } from "react";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../firebase";

const Signup = () =>{

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
      console.log("email,password-->",email,password);
      try {
        const createUser = await createUserWithEmailAndPassword(auth,email,password);
        console.log("create user-->",createUser);
        alert("user created successfully!");
        
      } catch (error) {
        alert(error.message);
      }
    }

    return(
            <div>
                <h1>Sign Up</h1>
                <form className="form" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <div>
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
    )
}

export default Signup;


   